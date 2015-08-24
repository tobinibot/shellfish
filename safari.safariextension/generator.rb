require 'css_parser'
require 'json'
require 'FileUtils'

debug = ARGV.length > 0 && ARGV.include?('-d')

puts 'processing "standard.css"'
parser = CssParser::Parser.new
parser.load_uri!('file:standard.css')

desktop_array = []
mobile_array = []

parser.each_selector() do |selector, declarations, specificity|
  hash = {
    action: {
      selector: selector,
      type: 'css-display-none'
    },
    trigger: {
      'url-filter' => '.*'
    }
  }
  desktop_array << hash
  mobile_array << hash
end

# domains
puts 'processing css in "domains" folder'
Dir.glob('domains/*.css').each do |file|
  parser = CssParser::Parser.new # make sure we reset the parser
  parser.load_uri!("file:#{file}")

  parser.each_selector() do |selector, declarations, specificity|
    desktop_only = selector.end_with?(':desktop-only')
    mobile_only = selector.end_with?(':mobile-only')
    selector = selector.sub(/:mobile-only$/, '').sub(/:desktop-only$/, '')

    domain_name = file.sub(/^.*\//, '').sub(/\.css$/, '')

    hash = {
      action: {
        selector: selector,
        type: 'css-display-none'
      },
      trigger: {
        'url-filter' => '.*',
        'if-domain' => domain_name,
        'resource-type' => 'document'
      }
    }

    desktop_array << hash unless mobile_only
    mobile_array << hash unless desktop_only
  end
end

# components
puts 'processing css in "components" folder'
Dir.glob('components/*.css').each do |file|
  parser = CssParser::Parser.new # make sure we reset the parser
  parser.load_uri!("file:#{file}")

  parser.each_selector() do |selector, declarations, specificity|
    desktop_only = selector.end_with?(':desktop-only')
    mobile_only = selector.end_with?(':mobile-only')
    selector = selector.sub(/:mobile-only$/, '').sub(/:desktop-only$/, '')

    domain_name = file.sub(/^.*\//, '').sub(/\.css$/, '').gsub(/\./, '\\.')

    hash = {
      action: {
        selector: selector,
        type: 'css-display-none'
      },
      trigger: {
        'url-filter' => ".*"
      }
    }

    desktop_array << hash unless mobile_only
    mobile_array << hash unless desktop_only
  end
end

puts 'processing json in "components" folder'
Dir.glob('components/*.json').each do |file|
  filters = JSON.parse(File.read(file))

  filters.each_key do |resource_type|
    filters[resource_type].each do |filter_string|
      hash = {
        action: {
          type: 'block'
        },
        trigger: {
          'url-filter' => "#{filter_string}",
          'resource-type' => ["#{resource_type}"],
          'load-type' => ['first-party', 'third-party']
        }
      }
      desktop_array << hash
      mobile_array << hash
    end
  end
end

# site_specific = [
#     {filename: 'sites/guardian.css', url_filter: 'guardian\.co\.uk/'}
# ]

# site_specific.each do |site|
#   parser = CssParser::Parser.new # make sure we reset the parser
#   parser.load_uri!("file:#{site[:filename]}")
#
#   parser.each_selector() do |selector, declarations, specificity|
#     hash = {
#       action: {
#         selector: selector,
#         type: 'css-display-none'
#       },
#       trigger: {
#         'url-filter' => ".*#{site[:url_filter]}.*"
#       }
#     }
#     array << hash
#   end
# end

puts 'building content blocker files'
desktop_json = JSON.pretty_generate(desktop_array)
mobile_json = JSON.pretty_generate(mobile_array)
if debug
  puts desktop_json
  puts mobile_json
end
File.open('blocked-content-desktop.json', 'w') { |f| f.write(desktop_json) }
File.open('blocked-content-mobile.json', 'w') { |f| f.write(mobile_json) }

FileUtils.mv('blocked-content-mobile.json', '../ios/content-blocker/blockerList.json', verbose: true)
