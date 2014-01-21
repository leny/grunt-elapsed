###
 * grunt-elapsed
 * https://github.com/Leny/grunt-elapsed
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

module.exports = ( grunt ) ->

  grunt.initConfig
    coffee:
      compile:
        options:
          bare: yes
        files:
          "tasks/elapsed.js": "src/elapsed.coffee.md"
    jshint:
      task: [
        "tasks/elapsed.js"
      ]
      options:
        jshintrc: ".jshintrc"

  grunt.loadNpmTasks "grunt-contrib-jshint"
  grunt.loadNpmTasks "grunt-contrib-coffee"

  grunt.registerTask "default", [
    "coffee"
    "jshint"
  ]
