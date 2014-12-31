# generator-devpress

A generator for [Yeoman](http://yeoman.io).

A Yeoman generator for Wordpress including automatic database setup, the download and install of advanced custom fields, the download and install of Yoast SEO, install option for third party themes, and grunt script for minimising CSS/JS and compressing images.

This generator will:

* Setup Grunt (Copy package.json and Gruntfile.js to root folder)
* Create Wordpress database
* Download and unzip latest Wordpress version into root
* Download and install a third party theme if specified and rename it. (Theme name taken from site name at prompt)
* Rename TwentyFourteen theme if no third party theme is specified
* Download Advanced Custom Fields and move to plugins folder if requested
* Download Yoast SEO plugin and move to plugins folder if requested
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
## Grunt

Running grunt will minify CSS/JS files and compress your images before moving all of these files to a dist directory for deployment.
For your JS to be minified it must be called scripts.js and reside in the js folder in your theme directory. Don't forget to inlcude the scripts.js file in you project using wp_enqueue_scripts in your functions.php or including in the footer with script tags.

```
$ grunt build
```
## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
