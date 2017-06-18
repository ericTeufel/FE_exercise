// iterator  forof
{
	let arr = ['hello', 'world'];
	let map = arr[Symbol.iterator]();
	console.log(map.next());
	console.log(map.next());
	console.log(map.next());
}

{
	let obj = {
		start: [1, 3, 2],
		end: [7, 8, 9],
		[Symbol.iterator]() {
			let self = this,
				index = 0,
				arr = self.start.concat(self.end),
				len = arr.length;
			return {
				next() {
					if (index < len) {
						return {
							value: arr[index++],
							done: false
						}
					} else {
						return {
							value: arr[index++],
							done: true
						}
					}
				}
			}
		}
	}

	for (let key of obj) {
		console.log(key);
	}
}
// forof
{
	let arr = ['hello','world'];
	for (let value of arr) {
		console.log('val',value);
	}
}
