// 字符串扩展 有几个es7方法 需要安装和导入 babel-polyfill
{
  console.log('a', '\u0061');
  console.log('b', '\u20BB7'); //b ₻7 当成两个字符

  console.log('c', '\u{20BB7}'); //c 𠮷
  let s = '𠮷';
}

{
  let s = '𠮷';
  // es5
  console.log('length',s.length);//2 两个字节为一个长度 超过两个字节了
  console.log('0',s.charAt(0));//0 �
  console.log('1',s.charAt(1));//1 �
  console.log('at0',s.charCodeAt(0));//at0 55362
  console.log('at1',s.charCodeAt(1));//at1 57271

  // es6






   
}
