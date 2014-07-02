###
 * grunt-elapsed
 * https://github.com/Leny/grunt-elapsed
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

module.exports = ( grunt ) ->

  grunt.loadNpmTasks "grunt-coffeelint"
  grunt.loadNpmTasks "grunt-contrib-coffee"

  grunt.initConfig
    coffeelint:
      options:
        arrow_spacing:
          level: "error"
        camel_case_classes:
          level: "error"
        duplicate_key:
          level: "error"
        indentation:
          level: "ignore"
        max_line_length:
          level: "ignore"
        no_backticks:
          level: "error"
        no_empty_param_list:
          level: "error"
        no_stand_alone_at:
          level: "error"
        no_tabs:
          level: "error"
        no_throwing_strings:
          level: "error"
        no_trailing_semicolons:
          level: "error"
        no_unnecessary_fat_arrows:
          level: "error"
        space_operators:
          level: "error"
      task:
        files:
          src: [ "src/*.coffee" ]
    coffee:
      compile:
        options:
          bare: yes
        files:
          "tasks/elapsed.js": "src/elapsed.coffee.md"

  grunt.registerTask "default", [
    "coffeelint"
    "coffee"
  ]
