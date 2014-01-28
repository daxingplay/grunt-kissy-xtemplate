/*
 * grunt-kissy-xtemplate
 * https://github.com/daxingplay/grunt-kissy-xtemplate
 *
 * Copyright (c) 2013 daxingplay
 * Licensed under the MIT license.
 */

'use strict';

var Xtemplate = require('kissy-xtemplate'),
	fs = require('fs'),
    path = require('path'),
    os = require('os');

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('xtemplate', 'Compile KISSY XTemplates.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options();

        var xtemp = new Xtemplate({
            version: options.version
        });

        this.files.forEach(function (f) {
            f.src.forEach(function(src){
                xtemp.compileSync(src, f.dest);
//                grunt.log.ok('compiled ' + src + ' ===> ' + f.dest + ' successfully.');
            });
        });

    });

};
