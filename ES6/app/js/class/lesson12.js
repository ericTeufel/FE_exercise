// 类和对象
{
	// 基本定义和生成实例
	class Parent{
		constructor(name='mukewang'){
			this.name = name;
		}
	}
	let v_parent = new Parent('v');
	console.log('构造函数和实例',v_parent);
}
// 继承
{
	class Parent{
		constructor(name='mukewang'){
			this.name = name;
		}
	}
	class Child extends Parent{

	}
	console.log('继承',new Child);
}
//继承传递参数
{
	class Parent{
		constructor(name='mukewang'){
			this.name = name;
		}
	}
	class Child extends Parent{
		constructor(name='child'){
			super(name);//super放在第一行
			this.type = 'child';//定义自身属性方法要放在super后面
		}
	}
	console.log('继承传递参数',new Child('hello'));
}

{
	// setter getter
	class Parent{
		constructor(name='mukewang'){
			this.name = name
		}

		get longName(){//属性
			return 'mk' + this.name;
		}

		set longName(value){
			this.name = value;
		}
	}

	let v = new Parent();
	console.log('getter',v.longName);

	v.longName = 'hello';
	console.log('setter',v.longName);
}
// 静态方法
{
	class Parent{
		constructor(name='mukewang'){
			this.name = name;
		}

		static tell(){//静态方法 通过类调用
			console.log('tell');
		}

	}
	Parent.tell();
}
// 静态属性
{
	class Parent{
		constructor(name='mukewang'){
			this.name = name;
		}

		static tell(){//静态方法 通过类调用
			console.log('tell');
		}
	}
	Parent.type = 'test';
	console.log('静态属性',Parent.ty); 
}
