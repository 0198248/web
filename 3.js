function a(x){
	let a = x.split(" ");
	let s = Number(a[0]);
	let d = Number(a[1]);
	let f = Number(a[2]);
	if (s>d && s>f){
		console.log("first number bigger")
	} else{
		if (d>s && d>f){
		console.log("second number bigger")
		} else {
			if (f>d && f>s){
			console.log("third number bigger")
			};
		};
	};
	let u = 0;
	while(u < a.length){
		if ((Number(a[u])%2)>0){
			u ++;
		} else {
			console.log((u+1) + " is even number");
			u ++;
		};
	};
	if (s>d && d<f){
		console.log("complex condition is met");
	} else{
		console.log("complex condition is not met");
	};
	u = 0;
	while(u < a.length){
		if (Math.round((Number(a[u])))!=Number(a[u])){
			console.log((u+1) + " is not a prime number");
			u ++;
		} else {
			console.log((u+1) + " a prime number");
			u ++;
		};
	};
};