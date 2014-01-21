# grunt-elapsed

[https://github.com/Leny/grunt-elapsed](https://github.com/Leny/grunt-elapsed)

Copyright (c) 2014 Leny
Licensed under the MIT license.

* * *

    "use strict"

    module.exports = ( grunt ) ->

        grunt.registerMultiTask "elapsed", "Compute approximate development time passed on a project, using logs from version control system.", ->
            options = @options
                system: "git"
                cwd: no
                gap: 120
                user: no

            grunt.log.writeln "TODO"
