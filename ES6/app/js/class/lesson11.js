// proxy、reflect 用法相同
{
	let obj = {
		time:'2017-06-17',
		name:'net',
		_r:123
	};

	let monitor = new Proxy(obj,{
		//拦截对象属性的读取
		get(target,key){
			return target[key].replace('2017',"2018");
		},

		// 拦截对象设置属性
		set(target,key,val){
			if (key === 'name') {
				return target[key] = val;
			}else {
				return target[key];
			}
		},

		// 拦截key in obj
		has(target,key){
			if (key ==='name') {
				return target[key];
			}else {
				return false;
			}
		},
		//拦截删除
		deleteProperty(target,key){
			if (key.indexOf('_')>-1) {
				delete target[key];
				return true;
			}else {
				return target[key];
			}
		},
		//拦截object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
		ownKeys(target){
			return Object.keys(target).filter(item=>item!='time')
		}
	});

	console.log("get",monitor.time);
	monitor.time = '2018';
	monitor.name = 'hello';
	console.log('set',monitor.time,monitor);

	console.log('has','name' in monitor);//true
	console.log('has2','time' in monitor);//false

	// delete monitor.time;
	// console.log('del',monitor);
	// delete monitor._r;
	// console.log('del2',monitor);
	console.log('oenKeys',Object.keys(monitor));//隐藏time
}

// reflect
{
	let obj = {
		time:'2017-06-17',
		name:'net',
		_r:123
	};

	console.log('reflect get',Reflect.get(obj,'time'));

	Reflect.set(obj,'name','hello');
	console.log('reflect set',obj.name);//'hello'

	console.log('reflect has',Reflect.has(obj,'name'));//true
}

// 实际应用
{
	function validator(target,validator) {
		return new Proxy(target,{
			_validator:validator,
			set(target,key,value,proxy){
				if (target.hasOwnProperty(key)) {
					let va = this._validator[key];
					if (!!va(value)) {
						return Reflect.set(target,key,value,proxy);
					}else {
						throw Error(`不能设置${key}到${value}`)
					}
				}else {
					throw Error(`${key}不存在`)
				}
			}
		});
	}
//配置选项
	const personValidator = {
		name(val){
			return typeof val ==='string'
		},
		age(val){
			return typeof val === 'number' && val >18;
		}
	}

	class Person{
		constructor(name,age){
			this.name = name;
			this.age = age;
			return validator(this,personValidator);
		}
	}

	const person = new Person('mike',30);
	console.log(person);

	person.name = '123';
	console.log(person);
}
