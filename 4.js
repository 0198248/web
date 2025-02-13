function a(x){
	let a = x.split(" ");
	let s = a[0];
	let d = Number(a[1]);
	let f = a[2];
	let now = new Date();
	let year = now.getFullYear();
	console.log(s + ", your age is: " + (year-d))
	age = year - d
	if (age <= 12){
		alert("you are children")
	} else{
		if (age <= 18){
		alert("you are teenager")
	} else{
		if (age <= 65){
		alert("you are adult")
	} else{
			alert("you are old")
			};
		};
	};
	k = "Kyiv"
	if  (f.toLowerCase === k.toLowerCase){
		console.log("your city is a capital of Ukraine")
	} else {
		console.log("your city is not a capital of Ukraine")
	}
};