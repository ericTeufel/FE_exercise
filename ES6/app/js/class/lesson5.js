// 数值扩展
{
  console.log(0b11100101); //二进制数值表示方法 不区分大小写
  console.log(0o23752); //八进制 不区分大小写
}

{
  console.log('15', Number.isFinite(15)); //true是否有尽
  console.log('NaN', Number.isFinite(NaN)); //false 不是数
  console.log('1/0', Number.isFinite(1 / 0)); //无尽

  console.log('12', Number.isNaN(12)); //false 是数字
  console.log('NaN', Number.isNaN(NaN)); //true 不是数字
}

{
  console.log('13', Number.isInteger(13)); //true 是否是整数
  console.log('1.3', Number.isInteger(1.3)); //false 不是
  console.log('13.00', Number.isInteger(13.00)); //true 是整数
  console.log('"13"',Number.isInteger('13'));//false 不是整数
}

{
  console.log(Number.MAX_SAFE_INTEGER);//9007199254740991 常量 上限
  console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991 下限
  console.log('10',Number.isSafeInteger(10));//true 是在范围之内
  console.log('"a"',Number.isSafeInteger('a'));//false 不是数
}

{
  console.log('4.1',Math.trunc(4.1));//4
  console.log('4.9',Math.trunc(4.9));//4 取整数部分
}

{
  console.log('-9',Math.sign(-9));//-1 负数
  console.log('0',Math.sign(0));//0 0
  console.log('9',Math.sign(9));//1正数
  console.log('"50"',Math.sign('50'));//1 自动转换了
  console.log('"aaa"',Math.sign("aaa"));//NaN
}

{
  console.log('-1',Math.cbrt(-1));//-1立方根
  console.log('8',Math.cbrt(8));//2
}
