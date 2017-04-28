const fs = require('fs');
//readFile（文件名 回调函数）
fs.readFile('1.txt',function(err,data){
  if (err) {
    console.log('文件不存在');
  } else {
    console.log(data.toString());
  }
});
// writeFile(文件名，内容，回调函数)
// fs.writeFile('12.txt','asd',function(err){
//   console.log(err);
// });
