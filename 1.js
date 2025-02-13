let a = 1;
let b = "1";
let c = Boolean(false);
typeof a;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(parseInt(c));
a = a + b;
console.log(a + " " +typeof(a));
let j = {
	a: parseInt(a),
	b: Number(c)
};
console.log(j);
