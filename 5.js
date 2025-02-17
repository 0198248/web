n = Math.floor(Math.random() * 100) + 1
console.log(n)
do{
    a = prompt("число");
    if (a > n){
        alert("загадане число меньше");
    } else if (a < n){
        alert("загадане число більше");
    }
    else if(a==n){
        alert("ВИ ВІДГАДАЛИ ЧИСЛО");
    }
    else{
        console.error("неправильне число");
    }
}
while (a != n);