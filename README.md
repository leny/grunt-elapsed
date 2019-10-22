# grunt-elapsed

![NPM version](http://img.shields.io/npm/v/grunt-elapsed.svg) ![Dependency Status](https://david-dm.org/leny/grunt-elapsed.svg) ![Downloads counter](http://img.shields.io/npm/dm/grunt-elapsed.svg) [![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

> Compute approximate development time passed on a project, using logs from version control system.

* * *

## Warning : this plugin is deprecated!

You should use [tankipas](https://github.com/leny/tankipas) and [grunt-tankipas](https://github.com/leny/tankipas) instead.

* * *

## How it works ?

The plugin, according to his configuration, read the logs of the version control system and computes the difference between each commit timestamp.  
As the resulting time **can't** reflect the reality, *grunt-elapsed* plugin use a `gap` option, a number of minutes above wich the time between two commits is ignored.

* * *

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-elapsed --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-elapsed');
```

## The "elapsed" task

### Overview
**grunt-elapsed** is a simple task, called with no configuration or target. You can called it typing `grunt elapsed` in your console.

The task accepts up to three arguments : 

### Arguments

#### system
Type: `String`  
Default value: `'git'`  
Accepts: Currently, only `git` & `hg` (*mercurial*) are supported.

The version control system used on the project.

#### gap
Type: `Number` (minutes)  
Default value: `120`

Number of minutes above wich the time between two commits is ignored in the total.

#### user
Type: `String`  
Default value: `false`

Use the commit of only one given user.

### Usage Examples

#### Default Arguments

```
grunt elapsed
```

#### Custom Arguments

```
grunt elapsed:hg:60:leny
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

**2014/10/08:** v0.1.5 (last version, deprecation warning)
**2014/07/02:** v0.1.4 (increase buffer size)
**2014/01/21:** project starting & v0.1.1

## TODO

* Documenting code
* Unit tests
