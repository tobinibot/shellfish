require 'css_parser'
require 'json'

parser = CssParser::Parser.new
parser.load_uri!('file:standard.css')

array = []

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
  array << hash
end

# domains
Dir.glob('domains/*.css').each do |file|
  parser = CssParser::Parser.new # make sure we reset the parser
  parser.load_uri!("file:#{file}")

  parser.each_selector() do |selector, declarations, specificity|
    domain_name = file.sub(/^.*\//, '').sub(/\.css$/, '').gsub(/\./, '\\.')
    hash = {
      action: {
        selector: selector,
        type: 'css-display-none'
      },
      trigger: {
        'url-filter' => ".*#{domain_name}/.*"
      }
    }
    array << hash
  end
end

# components
Dir.glob('components/*.css').each do |file|
  parser = CssParser::Parser.new # make sure we reset the parser
  parser.load_uri!("file:#{file}")

  parser.each_selector() do |selector, declarations, specificity|
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
    array << hash
  end
end

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
      array << hash
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

json = JSON.pretty_generate(array)
puts json
File.open('blocked-content.json', 'w') { |f| f.write(json) }
