
function a(x){
	let a = x.split(" ");
	if (a.length==1){
		let b = Number(a[0]);
		console.log(b%5)
		console.log("Модуль числа: " + Math.abs(b));
		console.log("Округлення вниз: " + Math.floor(b));
		console.log("Округлення вверх: " + Math.ceil(b));
		console.log("це чилсо в степені 2: " + Math.floor(b));
		if((b%5)==0){
			q = "так"
		} else{
			q = "ні"
		};
		console.log("чи ділиться на 5: " + q);
	} else{
		alert((Number(a[0]) + Number(a[1]) + Number(a[2]))/3);
		let s = Number(a[0]);
		let d = Number(a[1]);
		let f = Number(a[2]);
		if (((s+d)>f) && ((s+f)>d) && ((f+d)>s)){
			console.log("Трикутник існує")
		} else {
			console.log("Трикутник неіснує")
		};
	};
};