/*
* @Author: Eric Jiang
* @Date:   2017-04-27 23:51:28
* @Last Modified by:   Eric Jiang
* @Last Modified time: 2017-04-28 09:05:03
*/
const http=require('http');
const fs = require('fs');
var server = http.createServer(function(req,res){
  console.log('someone is here  '+Date());
    var file_name = './www'+req.url;
    fs.readFile(file_name,function(err,data){
      if (err) {
        res.write('404');
      } else {
        res.write(data);
      }


      res.end();
    });



});
//监听
server.listen(8181);
