/*
 * @Author: Eric Jiang
 * @Date:   2017-06-05 23:25:01
 * @Last Modified by:   Eric Jiang
 * @Last Modified time: 2017-06-05 23:27:24
 */

'use strict';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css', () => {
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public'))
        .pipe(gulpif(args.watch, livereload()))
})
