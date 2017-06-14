// 对象扩展
{
	// 简洁表示法
	let o = 1;
	let k = 2;

	let es5 = {
		o:o,
		k:k
	};

	let es6 = {
		o,
		k
	};

	console.log(es5,es6);

	let es5_method = {
		hello:function(){
			console.log('hello');
		}
	}

	let es6_method = {
		hello(){
			console.log('hello');
		}
	}

	console.log(es5_method.hello(),es6_method.hello());
}

// 属性表达式
{
	let a = 'b';
	let es5_obj = {
		a:'c',
		b:'c'
	};

	let es6_obj = {
		[a]:'c'
	};

	console.log(es5_obj,es6_obj);
}
// 常用新增api
{
	console.log('字符串',Object.is('as','as'),'abc' === 'abc');
	console.log('数组',Object.is([],[]),[]===[]);//数组也是引用类型 虽然为空 但是引用地址不同

	console.log('拷贝',Object.assign({a:'a'},{b:'b'}));//两数组合一 属性有限制 浅复制 只拷贝自身属性 继承的不拷贝 不可枚举也不拷贝


	let test = {k:123,o:456};
	for (let [key,value] of Object.entries(test)) {
		console.log([key,value]);
	}
}
// 扩展运算符
{
	// let {a,b,...c} = {a:'test',b:'kill',c:'ddd',d:'ccc'}; es2017的内容 babel支持不好
}
