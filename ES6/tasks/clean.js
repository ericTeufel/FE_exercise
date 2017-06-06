/*
* @Author: Eric Jiang
* @Date:   2017-06-05 23:52:32
* @Last Modified by:   Eric Jiang
* @Last Modified time: 2017-06-06 00:48:48
*/

'use strict';
import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean',()=>{
  return del(['server/public','server/views'])
})
