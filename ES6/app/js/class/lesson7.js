//函数扩展
{//默认值 默认值之后不能有没有默认值的变量
	function test(x,y = 'world'){
		console.log('默认值',x,y);
	}
	test('hello');
	test('hello2','1')
}
// 作用域
{
	let x = 'test';
	function test2(x,y=x){//就近使用x的值
		console.log('作用域',x,y);
	}
	test2('kill');//kill kill
}
// rest参数 将所有传入的参数转化为数组 类似arguments  之后不能再有其他参数了
{
	function test3(...arg) {
		for (let v of arg) {
			console.log('rest',v);
		}
	}
	test3(1,2,3,4,51,"a");
}
// 扩展运算符 将数组转换为值 与rest相反
{
	console.log('a',...[1,2,4,5]);
}
// 箭头函数
{//函数名    函数参数   返回值
	let arrow = v => v*2;
	let arrow2 = ()=>5;
	console.log('arrow',arrow(3));
	console.log('arrow2',arrow2());
}
// 尾调用 函数式编程 提升性能
{
	function tail(x) {
		console.log('tail',x);
	}
	function fx(x) {
		return tail(x);
	}
	fx(123)
}
