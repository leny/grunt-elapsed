# grunt-elapsed

[https://github.com/Leny/grunt-elapsed](https://github.com/Leny/grunt-elapsed)

Copyright (c) 2014 Leny
Licensed under the MIT license.

* * *

    "use strict"

    OS = require "os"
    exec = require( "child_process" ).exec
    chalk = require "chalk"

Define task

    module.exports = ( grunt ) ->

        grunt.registerTask "elapsed", "Compute approximate development time passed on a project, using logs from version control system.", ( system = "git", gap = 120, user = no ) ->
            done = @async()
            commands =
                git:
                    logs: "git log"
                    filter: " --author %s"
                    dateKey: "Date:"
                hg:
                    logs: "hg log"
                    filter: " -u %s"
                    dateKey: "date:"
            return grunt.log.error "Unknown version control system '#{ system }' !" unless commands[ system ]
            command = commands[ system ].logs
            command += commands[ system ].filter.replace "%s", user if user
            exec command, ( error, stdOut, stdErr ) ->
                return grunt.log.error error if error
                total = 0
                prev = no
                gap *= 60000
                for sLine in stdOut.split( OS.EOL ).reverse()
                    if sLine.search( commands[ system ].dateKey ) isnt -1
                        current = ( new Date( sLine.substr( commands[ system ].dateKey.length ).trim() ) ).getTime()
                        total += difference if prev and prev < current and ( difference = current - prev ) < gap
                        prev = current
                total /= 1000
                minutes = if ( minutes = Math.floor( total / 60 ) ) > 60 then ( minutes / 60 ) % 60 else minutes
                hours = Math.floor total / 3600
                grunt.log.writeln "Time elapsed on project: ±#{ chalk.yellow( hours ) } hours, #{ chalk.yellow( minutes ) } minutes."
                done()
