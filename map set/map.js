let map = new Map ([[NaN, '123'],[Infinity, '321']]);
console.log(map);

let a = 10 / 0;
console.log(a);
console.log('map = ',map.get(a));