module.exports = function(grunt) {


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            main: {
                files: [
                    {
                        src: ['./**',
                        '!./node_modules/**',
                        '!./Gruntfile.js',
                        '!./npm-debug.log',
                        '!./package.json',
                        '!./bower.json',
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
                    'dist/wp-content/themes/<%= themeName %>/js/scripts.js': ['wp-content/themes/<%= themeName %>/js/scripts.js']
                }
            }
        },
        cssmin: {
            my_target: {
                files: {
                  'dist/wp-content/themes/<%= themeName %>/style.css': ['wp-content/themes/<%= themeName %>/style.css']
                }
            }
        }
    });

    grunt.registerTask('build', [
        'copy',
        'imagemin',
        'uglify',
        'cssmin',
        
    ]);

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['build']);

};