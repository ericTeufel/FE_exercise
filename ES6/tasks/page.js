/*
 * @Author: Eric Jiang
 * @Date:   2017-06-05 23:20:43
 * @Last Modified by:   Eric Jiang
 * @Last Modified time: 2017-06-05 23:24:14
 */

'use strict';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('page', () => {
    return gulp.src('app/**/*.ejs')
        .pipe(gulp.dest('server'))
        .pipe(gulpif(args.watch, livereload()))
})
