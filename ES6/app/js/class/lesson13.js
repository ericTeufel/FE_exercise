// Promise

{
	//基本定义
	let ajax = function (callback) {
		console.log('run');
		setTimeout(function(){
			callback&&callback.call();
		},1000);
	};
	ajax(function(){
		console.log('timeout1');
	});
}

{
	let ajax = function(){
		console.log('run2');
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve()
			},1000);
		})
	};
	ajax().then(function(){
		console.log('pomise','timeout2');
	},function(){});
}

{
	let ajax = function(){
		console.log('run3');
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve()
			},1000);
		})
	};

	ajax()
	.then(function(){
		return new Promise(function(resolve,reject){
			setTimeout(function() {
				resolve()
			},2000);
		})
	})
	.then(function(){
		console.log('timeout3');
	})
}
// catch
{
	let ajax = function(num) {
		console.log('run4');
		return new Promise(function(resolve,reject) {
			if (num>5) {
				resolve()
			}else {
				throw Error ('error');
			}
		});
	}

	ajax(6).then(function() {
		console.log('log',6);
	}).catch(function(err){
		console.log('catch',err);
	});

	ajax(3).then(function() {
		console.log('log',3);
	}).catch(function(err){
		console.log('catch',err);
	});
}


//几张图片加载完成后一同显示
{
	function loadImg(src){
		return new Promise((resolve,reject)=>{
			let img = document.createElement('img');
			img.src = src;
			img.onload= function() {
				resolve(img);
			}
			img.onerror = function(err){
				reject(err);
			}
		})
	}

	function showImg(imgs) {
		imgs.forEach(function(img){
			document.body.appendChild(img);
		})
	}

	Promise.all([
		loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
		loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
		loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png'),
	]).then(showImgs)
}

//三个图片来自三个地方 谁先加载完成先显示谁
{
	function loadImg(src){
		return new Promise((resolve,reject)=>{
			let img = document.createElement('img');
			img.src = src;
			img.onload= function() {
				resolve(img);
			}
			img.onerror = function(err){
				reject(err);
			}
		})
	}

	function showImgs(img) {
		let p = document.createElement('p');
		p.appendChild(img);
		document.body.appendChild(p);
	}
	Promise.race([
		loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
		loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
		loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png'),
	]).then(showImgs)
}
