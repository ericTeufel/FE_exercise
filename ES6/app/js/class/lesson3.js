// 正则扩展
{
  let regex = new RegExp('xyz', 'i');
  let regex2 = new RegExp(/xyz/i);

  console.log(regex.test('xyz123'), regex2.test('xyz123'));

  // 第二个修饰符会覆盖第一个中的修饰符
  let regex3 = new RegExp(/xyz/ig, 'i')
  console.log(regex3.flags);

}

{
  let s = 'qqq_qqq_q';
  let a1 = /q+/g;
  let a2 = /q+/y;
  // 都是全局匹配 但是g是从上次匹配的位置开始匹配 中间匹配上也算 y 粘连模式是匹配上的下一个紧贴着的下一个
  console.log('one', a1.exec(s), a2.exec(s));
  console.log('two', a1.exec(s), a2.exec(s));
  // 检测是否开启粘连模式
  console.log(a1.sticky, a2.sticky);
}
// 第一个当成2个字符，u会当成一个字符
{
  console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
  console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));
  // 中间放的是编码 要加u才能识别
  console.log(/\u{61}/.test('a'));
  console.log(/\u{61}/u.test('a'));

  console.log(`\u{20BB7}`);

  let s = '𠮷';
  //.不能匹配任意字符 换行、回车 行分割 段分割不能识别 大于两个字节 要加u才能识别
  console.log('u-1', /^.$/.test(s)); //false
  console.log('u-2', /^.$/u.test(s)); //true

  console.log('test-1', /𠮷{2}/.test('𠮷𠮷')); //false
  console.log('test-2', /𠮷{2}/u.test('𠮷𠮷')); //true

  //.不能匹配任意字符 换行、回车 行分割 段分割不能识别  加s修饰符 但是s只是提案 没在es6中实现 
}
