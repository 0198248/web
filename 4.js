let n  = prompt("введіть дані для обчислення (наприклад 12 * 3 - 6 + 7 / 9)");
n=n.split(" ");
console.log(n)
let result = 0;
console.log(n.length);
let h = 0;
for (let a = 0; a < n.length; a++){
    if (n[a]== "*"){
        h = Number(n[a-1]) * Number(n[a+1]);
        n.splice((a-1),3, h);
        console.log(n);
    } else if (n[a] == "/"){
        h = Number(n[a-1]) / Number(n[a+1]);
        n.splice((a-1),3, h);
        console.log(n);
    };
};
for (let a = 0; a < n.length; a++){
    if (n[a]== "+"){
        h = Number(n[a-1]) + Number(n[a+1]);
        n.splice((a-1),3, h);
        console.log(n);
    } else if (n[a] == "-"){
        h = Number(n[a-1]) - Number(n[a+1]);
        n.splice((a-1),3, h);
        console.log(n);
    };
}
alert(n[0])

