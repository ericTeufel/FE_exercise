// Symbol
{
	// Symbol提供一个独一无二的值

	// 声明
	let a1 = Symbol();
	let a2 = Symbol();

	console.log(a1===a2);//false

	let a3 = Symbol.for('a3');//先检查a3是否注册过
	console.log(a3);

	let a4 = Symbol.for('a3');
	console.log(a3===a4);//true
}
// 作用 用Symbol设置key值的话 forin letof 拿不到Symbol的值
{
	let a1 = Symbol.for('abc');
	let obj = {
		[a1]:'123',
		'abc':345,
		'c':456
	};
	console.log(obj);
	for(let [key,value] of Object.entries(obj)){
		console.log('let of',key,value);
	}

	Object.getOwnPropertySymbols(obj).forEach(function(item){
		console.log(item);
	});

	Reflect.ownKeys(obj).forEach(function(item){
		console.log('ownKeys',item,obj[item]);
	})

}
