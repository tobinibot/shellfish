#!/usr/bin/env ruby

require 'rubygems'
require 'crxmake'

# create crx
CrxMake.make(
  :ex_dir => ".",
  :pkey   => "./shellfish.pem",
  :crx_output => "../shellfish-0.9.7.crx",
  :verbose => true,
  :ignorefile => /\.swp|\.rb|shellfish\.pem/,
  :ignoredir => /\.(?:svn|git|cvs)/
)

#create zip for Google Extension Gallery
# CrxMake.zip(
#   :ex_dir => ".",
#   :pkey   => "./shellfish.pem",
#   :zip_output => "../shellfish-0.9.7.zip",
#   :verbose => true,
#   :ignorefile => /\.swp|\.rb|shellfish\.pem/,
#   :ignoredir => /\.(?:svn|git|cvs)/
# )