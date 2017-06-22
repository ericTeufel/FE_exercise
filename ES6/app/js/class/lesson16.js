//decorator 修饰器
{
	let readonly = function(target,name,descriptor){
		descriptor.writable = false;
		return descriptor
	};

	class Test{
		@readonly
		time(){
			return '2017-03-11'
		}
	}

	let test = new Test();

	// test.time = function(){
	// 	console.log('reset time');
	// }
	console.log(test.time());
}

{
	let typename = function(target,name,descriptor){
		target.myname = 'hello';
	}

	@typename
	class Test{

	}

	console.log('类修饰符',Test.myname);
}
//第三方库 修饰器  :core-decorators    npm install core-decorators

// 实例 日志
{
	let log = (type)=>{
		return function(target,name,descriptor){
			let src_method = descriptor.value;
			descriptor.value = (...arg)=>{
				src_method.apply(target,arg);
				console.info(`log${type}`);
			}
		}
	}

	class AD{
		@log('show')
		show(){
			console.log('ad');
		}
		@log('click')
		click(){
			console.log('click');
		}
	}

	let ad = new AD();
	ad.show();
	ad.click();
}
