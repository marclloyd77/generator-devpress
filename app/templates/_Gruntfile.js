module.exports = function(grunt) {


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            main: {
                files: [
                    {
                        src: ['./**',
                        '!wp-content/themes/<%= themeName %>/css/**',
                        '!wp-content/themes/<%= themeName %>/js/**',
                        '!./node_modules/**',
                        '!./Gruntfile.js',
                        '!./npm-debug.log',
                        '!./package.json',
                        '!./dist/**',
                        './.htaccess',
                    ], dest: 'dist/'},


                ]
            }
        },
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'wp-content/themes/<%= themeName %>/images/',
                    src: ['**/*.png'],
                    dest: 'dist/wp-content/themes/<%= themeName %>/images/',
                    ext: '.png'
                }]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'wp-content/themes/<%= themeName %>/images/',
                    src: ['**/*.jpg'],
                    dest: 'dist/wp-content/themes/<%= themeName %>/images/',
                    ext: '.jpg'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/wp-content/themes/<%= themeName %>/js/scripts.js': ['wp-content/themes/<%= themeName %>/js/**.js']
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'dist/wp-content/themes/<%= themeName %>/style.css': ['wp-content/themes/<%= themeName %>/style.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Using the 'grunt development' commando will autoprefix, compile sass, concatenate and activate the watch task
    grunt.registerTask('default', ['copy', 'uglify', 'imagemin', 'cssmin']);

};