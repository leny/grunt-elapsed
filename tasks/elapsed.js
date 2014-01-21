"use strict";
module.exports = function(grunt) {
  return grunt.registerMultiTask("elapsed", "Compute approximate development time passed on a project, using logs from version control system.", function() {
    var options;
    options = this.options({
      system: "git",
      cwd: false,
      gap: 120,
      user: false
    });
    return grunt.log.writeln("TODO");
  });
};
