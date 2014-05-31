# generator-devpress

A generator for [Yeoman](http://yeoman.io).

A Yeoman generator for Wordpress including automatic database setup, the download and install of advanced custom fields, install of the stripped back Devpress theme and grunt script for minimising CSS/JS and compressing images.

This generator will:

* Copy package.json and Gruntfile.js to root folder
* Create Database
* Download and unzip latest Wordpress version into root
* Delete preinstalled themes if adding a third part theme
* Download / install a third party theme and rename as specified
* Download Advanced Custom Fields and move to plugins folder if requested
* Move wp-config file to root and update DB details. wp-config also includes environment detection
* Update theme name in stylesheet
* Set current theme in Database

## Getting Started

To install generator-devpress from npm, run:

```
$ npm install -g generator-devpress
```

Finally, initiate the generator:

```
$ yo devpress
```
## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
