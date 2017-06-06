/*
* @Author: Eric Jiang
* @Date:   2017-06-05 21:38:44
* @Last Modified by:   Eric Jiang
* @Last Modified time: 2017-06-06 01:11:39
*/

'use strict';
class Test{
  constructor(){
    this.a = 'hello';
  }
}

let test = new Test();

document.body.innerHTML = test.a;
