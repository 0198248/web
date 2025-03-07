let s = 60;
let t = null;
document.getElementById("timer").innerText = s;
function b(){
	s++
	document.getElementById("timer").innerText = s;
}
function c(){
	s--
	document.getElementById("timer").innerText = s;
}
function n(){
	clearInterval(t);
	t = null
}
function ti() {
		console.log(123)
		s--;
		document.getElementById("timer").innerText = s;
		if (s == -1){
			alert("навіщо вам був цей таймер?");
			n();
		};
};
function a(){
	if (t == null){
	t = setInterval(ti,1000);
	}
};
document.getElementById("a").addEventListener("click", a);
document.getElementById("b").addEventListener("click", b);
document.getElementById("c").addEventListener("click", c);
document.getElementById("n").addEventListener("click", n);
