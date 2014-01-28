'use strict';

//1) Copy package.json and Gruntfile.js to root folder
//2) Download and unzip latest Wordpress version in to root
//3) Download html5blank theme and move to themes folder using theme name entered
//4) Download Advanced Custom Fields and move to plugins folder
//5) Move wp-config file to root and update with DB details entered
//6) Move reset stylsheet to theme folder and update theme name (Using a separate reset file to the downloaded one so that we can update the theme name)


var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var shell = require('shell');


var DevpressGenerator = module.exports = function DevpressGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(DevpressGenerator, yeoman.generators.Base);

DevpressGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
        type: 'input',
        name: 'dbName',
        message: 'Database Name',
    },
    {
        type: 'input',
        name: 'dbUser',
        message: 'Database Username',
        default: 'root'
    },
    {
        type: 'input',
        name: 'dbPass',
        message: 'Database Password',
        default: 'root'
    },
      {
          type: 'input',
          name: 'themeName',
          message: 'Enter a name for your theme (The default twentyfourteen theme will be downloaded and renamed)',
          default: ''
      }
  ];

    this.prompt(prompts, function (props) {
        this.dbName = props.dbName;
        this.dbUser = props.dbUser;
        this.dbPass = props.dbPass;
        this.installTheme = props.installTheme;
        this.themeName = props.themeName;

        if(!this.themeName){
            this.themeName = 'twentyfourteen';
        }

    cb();
  }.bind(this));
};

DevpressGenerator.prototype.gruntFiles = function gruntFiles() {
    this.copy('_package.json', 'package.json');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
};

DevpressGenerator.prototype.LatestWordpress = function LatestWordpress() {
    var cb   = this.async()
        , self = this

    this.log.writeln('Let\'s download the latest Wordpress Version.')
    this.tarball('http://wordpress.org/latest.zip', './', cb)
};

DevpressGenerator.prototype.removeThemes= function removeThemes() {

    this.log.writeln('Let\'s delete the default Wordpress themes.');

    shell.rm('-rf', './wp-content/themes/*')

};

DevpressGenerator.prototype.twentyfourteenTheme = function twentyfourteenTheme() {

    var cb   = this.async()
        , self = this
    this.log.writeln('Let\'s download the twentyfourteen Wordpress theme and rename it.')
    this.tarball('http://wordpress.org/themes/download/twentyfourteen.1.0.zip', 'wp-content/themes/' + this.themeName, cb)

};

DevpressGenerator.prototype.acfWordpress = function acfWordpress() {
    var cb   = this.async()
        , self = this

    this.log.writeln('Now we\'ll download the latest advanced custom fields and add it to the plugins folder.')
    this.tarball('https://github.com/elliotcondon/acf/archive/master.tar.gz', 'wp-content/plugins/advanced-custom-fields', cb)
};

DevpressGenerator.prototype.updateWpConfig = function updateWpConfig() {
    this.copy('wp-config.php.tmpl', 'wp-config.php');
};

//move css template and update theme name
DevpressGenerator.prototype.moveCss = function moveCss() {
    this.copy('_style.css', 'wp-content/themes/' + this.themeName + '/style.css');
};