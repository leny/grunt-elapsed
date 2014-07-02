"use strict";
var OS, chalk, exec;

OS = require("os");

exec = require("child_process").exec;

chalk = require("chalk");

module.exports = function(grunt) {
  return grunt.registerTask("elapsed", "Compute approximate development time passed on a project, using logs from version control system.", function(system, gap, user) {
    var command, commands, done;
    if (system == null) {
      system = "git";
    }
    if (gap == null) {
      gap = 120;
    }
    if (user == null) {
      user = false;
    }
    done = this.async();
    commands = {
      git: {
        logs: "git log",
        filter: " --author %s",
        dateKey: "Date:"
      },
      hg: {
        logs: "hg log",
        filter: " -u %s",
        dateKey: "date:"
      }
    };
    if (!commands[system]) {
      return grunt.log.error("Unknown version control system '" + system + "' !");
    }
    command = commands[system].logs;
    if (user) {
      command += commands[system].filter.replace("%s", user);
    }
    return exec(command, {
      maxBuffer: 1024 * 1024
    }, function(error, stdOut, stdErr) {
      var current, difference, hours, minutes, prev, sLine, total, _i, _len, _ref;
      if (error) {
        return grunt.log.error(error);
      }
      total = 0;
      prev = false;
      gap *= 60000;
      _ref = stdOut.split(OS.EOL).reverse();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        sLine = _ref[_i];
        if (sLine.search(commands[system].dateKey) !== -1) {
          current = (new Date(sLine.substr(commands[system].dateKey.length).trim())).getTime();
          if (prev && prev < current && (difference = current - prev) < gap) {
            total += difference;
          }
          prev = current;
        }
      }
      total /= 1000;
      minutes = (minutes = Math.floor(total / 60)) > 60 ? Math.floor(minutes / 60) % 60 : minutes;
      hours = Math.floor(total / 3600);
      grunt.log.writeln("Time elapsed on project: ±" + (chalk.yellow(hours)) + " hours, " + (chalk.yellow(minutes)) + " minutes.");
      return done();
    });
  });
};
