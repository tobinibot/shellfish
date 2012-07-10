#!/usr/bin/env ruby

require 'rubygems'
require 'crxmake'

# zip file cannot contain update_url in the manifest
# crx file must contain update_url in the manifest

# create crx
# CrxMake.make(
#   :ex_dir => ".",
#   :pkey   => "./shellfish.pem",
#   :crx_output => "../shellfish-1.0.4.crx",
#   :verbose => true,
#   :ignorefile => /\.swp|\.rb|shellfish\.pem|old_|DS_Store/,
#   :ignoredir => /\.(?:svn|git|cvs)/
# )

#create zip for Google Extension Gallery
# CrxMake.zip(
#   :ex_dir => ".",
#   :pkey   => "./shellfish.pem",
#   :zip_output => "../shellfish-1.0.4.zip",
#   :verbose => true,
#   :ignorefile => /\.swp|\.rb|shellfish\.pem|old_|DS_Store/,
#   :ignoredir => /\.(?:svn|git|cvs)/
# )