# grunt-elapsed

> Compute approximate development time passed on a project, using logs from version control system.

* * *

**!!! This plugin is currently in development, and is not yet published on npm !!!**

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
In your project's Gruntfile, add a section named `elapsed` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  elapsed: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.system
Type: `String`  
Default value: `'git'`  
Accepts: Currently, only `git` & `hg` (*mercurial*) are supported.

The version control system used on the project.

#### options.cwd
Type: `String` (path)  
Default value: `false` (*current project path*)

The path from where the `log` command for the current version control system is executed.

#### options.gap
Type: `Number` (minutes)  
Default value: `120`

Number of minutes above wich the time between two commits is ignored in the total.

#### options.user
Type: `String`  
Default value: `false`

Use the commit of only one given user.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  elapsed: {
    options: {}
  }
});
```

#### Custom Options

```js
grunt.initConfig({
  elapsed: {
    options: {
      system: 'hg',
      gap: 60,
      user: "leny"
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

**2014/01/21:** project starting
