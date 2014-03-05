# generator-devpress

A generator for [Yeoman](http://yeoman.io).

A Yeoman generator for Wordpress including automatic database setup, the download and install of advanced custom fields, install of the stripped back Devpress theme and grunt script for minimising CSS/JS and compressing images.

This generator will:

* Setup Grunt (Copy package.json and Gruntfile.js to root folder)
* Create Wordpress database
* Download and unzip latest Wordpress version into root
* Download and install a third party theme and rename if specified (Theme name taken from site name at prompt)
* Rename TwentyFourteen theme if no third party theme is specified
* Download Advanced Custom Fields and move to plugins folder if requested
* Update wp-config with DB details and environment detection
* Update theme name in stylesheet
* Run Wordpress install script
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
