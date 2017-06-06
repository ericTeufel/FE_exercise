/*
* @Author: Eric Jiang
* @Date:   2017-06-06 00:22:48
* @Last Modified by:   Eric Jiang
* @Last Modified time: 2017-06-06 00:50:52
*/

'use strict';
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build',gulpSequence('clean','css','page','scripts',['browser','server']))
