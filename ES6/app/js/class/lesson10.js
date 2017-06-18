// set-map
{
	let list =  new Set();
	list.add(5);
	list.add(7);
	console.log('list长度',list.size);//2
}

{
	let arr = [1,2,3,4,5,1];
	let list = new Set(arr);

	console.log(list.size);
	console.log('array=>set',list);
}

{//相同元素不会添加进去 可以去重 不会做数据类型转换
	let list = new Set();
	list.add(1);
	list.add(2);
	list.add(1);

	console.log(list);//1,2

	let arr = [1,'1',2,3,4];
	console.log('unique',new Set(arr));//1,'1',2,3,4
}
//判断是否包含 删除 清空
{
	let list = new Set();

	list.add(1);
	list.add(2);
	console.log(list.has(1));//true
	console.log(list.has(9));//false

	console.log('list',list);
	console.log(list.delete(1),list);
	console.log(list.clear(),list);//undefined 清空了list
}
//遍历
{
	let arr = [1,2,3,4,5]
	let list = new Set(arr);
	// console.log(list);

	for (let key of list.keys()) {
		console.log('key',key);
	}

	for (let val of list.values()) {
		console.log('val',val);  //key val 相同 都是元素名称 直接遍历也可以
	}

	for (let [key,val] of list.entries()){
		console.log('list',key,val);
	}

	list.forEach(function(item) {
		console.log(item);
	});
}


// weakSet 只能是对象 不能是基本类型 弱引用 不会检测有没有用过 不和垃圾回收机制关联
{
	let weakList = new WeakSet();

	let arg = {};

	weakList.add(arg);//has delete同set
	// weakList.add(0);//报错
//没有clear方法 没有size属性 不能遍历
	console.log('weakList',weakList);

}

//map
{
	let map = new Map();
	let arr = ['123'];

	map.set(arr,456);
	console.log(map,map.get(arr));//{["123"] => 456} 456
}

{
	let map = new Map([['a',123],['b',456]]);

	console.log(map);//{"a" => 123, "b" => 456}

	console.log("size",map.size);//2

	console.log('del',map.delete('a'),map);

	console.log('clear',map.clear(),map);

	//遍历和set相同
}

{
	let weakMap = new WeakMap();
	// 区别等同于set和weakSet

	let o = {};
	weakMap.set(o,123);
	console.log(weakMap.get(o));
}


//map、set分别于array横向对比

//Map和Array对比 grud
{
	let map = new Map();
	let arr = [];
	// 增
	map.set('t',1);
	arr.push({t:1});
	console.info('map-array',arr);


	// 改
	map.set('t',2);
	arr.forEach(item=>item.t? item.t=2 : '')
	console.log('update',map,arr);
	// 查
	let map_exist = map.has('t');//true
	let arr_exist = arr.find(item=>item.t);//Object（t:1）

	console.log('map_exist',map_exist,'arr_exist',arr_exist);


	// 删
	map.delete('t');
	let index = arr.findIndex(item=>item.t);
	arr.splice(index,1);
	console.log('delete',map,arr);
}
//set&array
{
	let set = new Set();
	let arr = [];

	// add
	let a = set.add({t:1});
	arr.push({t:1});
	console.log('add',set,arr);

	// get
	let set_exist = a.has({t:1});//false
	let arr_exist = arr.find(item=>item.t);
	console.log('get',set_exist,arr_exist);

	// update
	set.forEach(item=>item.t?item.t=2 : '');
	arr.forEach(item=>item.t?item.t=2 : '');

	console.log('update',set,arr);

	// del
	set.forEach(item => item.t?set.delete(item):'');
	let index = arr.findIndex(item=>item.t);
	arr.splice(index,1);

	console.log('del',set,arr);
}

// map、set&obj对比
{
	let item = {t:1};
	let map = new Map();
	let set = new Set();
	let obj = {};

	// add
	map.set('t',1);
	set.add(item);
	obj['t'] = 1;

	console.log('map_set_obj-add',map,set,obj);

	// get
	console.log({
		map_exist:map.has('t'),
		set_exist:set.has(item),
		obj_exist:'t' in obj
	});

	// update
	map.set('t',2);
	item.t = 2;//set存储的是引用 所以直接修改原地址的值
	obj['t'] = 2;
	console.log('update',map,set,obj);

	// del
	map.delete('t');
	set.delete(item);
	delete obj['t'];
	console.log('del',map,set,obj);

	// 能使用map  有唯一性要求用set  obj arr能不用就不用
}
