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
  console.log('length', s.length); //2 两个字节为一个长度 超过两个字节了
  console.log('0', s.charAt(0)); //0 �
  console.log('1', s.charAt(1)); //1 �
  console.log('at0', s.charCodeAt(0)); //at0 55362
  console.log('at1', s.charCodeAt(1)); //at1 57271

  // es6
  let s1 = '𠮷a';
  console.log('length',s1.length); //3
  console.log('code0',s1.codePointAt(0));//134071
  console.log('code0',s1.codePointAt(0).toString(16));//20bb7
  console.log('code1',s1.codePointAt(1));//57271
  console.log('code2',s1.codePointAt(2));//97
}

{
  console.log(String.fromCharCode("0x20bb7"));//ஷ
  console.log(String.fromCodePoint("0x20bb7"));//𠮷
}
// 字符串遍历器
{
  let str = '\u{20bb7}abc';
  for (var i = 0; i < str.length; i++) {
    console.log('es5',str[i]);//��abc
  }
// 使用频率高
  for (let code of str) {
    console.log('es6',code);//𠮷abc
  }
}

{
  let str = "string";
  console.log('includes',str.includes('r'));
  console.log('start',str.startsWith('str'));
  console.log('end',str.endsWith('ing'));
}
{
  let str ='abc';
  console.log(str.repeat(2));
}
// 模板字符串
{
  let name = 'list';
  let info = 'hello World';
  let m = `i am ${name},${info}`;
  console.log(m);//i am list hello World
}
// es7草案
{
  console.log('1'.padStart(9,'0'));// 000000001  长度为2 不足的用0补足
  console.log('1'.padEnd(8,'0'));//往后补 10000000
}
//标签模板 作用  过滤字符串 防止xss攻击 多语言返回
{
  let user = {
    name:'list',
    info:'hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`);//i am ,,,listhello world 转换为字符串
  function abc(s,v1,v2){
    console.log(s,v1,v2);
    return s+v1+v2;
  }
}

{
  console.log(String.raw`Hi\n${1+2}`);//Hi\n3 转义 、不生效
  console.log(`Hi\n${1+2}`);//Hi 换行 3

}
