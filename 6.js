n = prompt("Введіть числа для обчислення");
n = n.split(" ");
n1 = Number(n[0]);
n2 = Number(n[1]);
b1 = [];
b2 = [];
for (let a = 2;n1>1;a++){
    if (n1%a==0){
        n1 = n1 / a
        b1.push(a)
        a=1
    } else {};
};
for (let a = 2;n2>1;a++){
    if (n2%a==0){
        n2 = n2/a
        b2.push(a)
        a=1
    } else {};
};
c=1;
console.log(b1);
console.log(b2);
for(let a = 0; a<b1.length; a++){
    for(let b = 0; b<b2.length; b++){
        if (b1[a]==b2[b]){
            c = c*b1[a];
            b1.splice(a,1);
            b2.splice(b,1);
            a--;
            b--;
        } else {};
    };
};
alert(c);

