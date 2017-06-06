/*
* @Author: Eric Jiang
* @Date:   2017-06-05 23:27:40
* @Last Modified by:   Eric Jiang
* @Last Modified time: 2017-06-05 23:37:49
*/

'use strict';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('server', (cb) => {
  if(!args.watch) return cb();

  var server = liveserver.new(['--harmony','server/bin/www']);
  server.start();

  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    server.notify.apply(server,[file]);
  })

  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)()
  });
})




























