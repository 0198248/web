let n = prompt("введіть числа");
n=n.split(" ");
for (let a = 0; a<n.length; a++) {
	n[a] = Number(n[a]);
}
console.log(n)
let p = 0;
let l = 0;
for (let a = 0; a<n.length; a++) {
	l += n[a];
	p++;
}
console.log(l/p)
let hight = n[0];
let low = n[0];
for (let a = 0; a<n.length; a++) {
	if(n[a]>hight){
		hight=n[a];
	}
	else if (n[a]<low){
		low=n[a];
	}
}
console.log("найбільше " + hight + "; найменше " + low);
let k = [hight, low]
n.splice(0,1)
n.splice((n.length-1),1)
for (let g = 0; n.length>0;g++){
	for (let a = 0; a<n.length; a++) {
		for(let b = 1; b<k.length; b++)
			if (n[a]<= k[b-1] && n[a]>=k[b]){
				k.splice(b,0,n[a]);
				n.splice(a,1);
		}
}
}
console.log(k)
