n = prompt("Введіть числа для обчислення (наприклад 16 20 28)");
n = n.split(" ");
for (let a = 0; a < n.length; a++){
    n[a] = Number(n[a])
};
c = [];
l = 0;
m = [];
for (let a = 2;n[0]>1;a++){
    if (n[0]%a==0){
        n[0] = n[0] / a;
        c.push(a);
        a=1;
    } else {};
};
n.splice(0,1);
let base = c;
let len = base.length;
console.log(len)
c = [];
for(let b = 0; b<n.length; b++){
    for (let a = 2;n[b]>1;a++){ //створюємо опрацьовуванне число
        if (n[b]%a==0){
            n[b] = n[b] / a;
            c.push(a);
            a=1;
        } else {};
    }
    //console.log(c)
    //console.log(base)
    for (let h = 0; h < base.length; h++){ //порівнюємо 1ше число з опрацьовуванним
        for(let j = 0; j < c.length; j++){
            console.log(c);
            if (base[h] == c[j]){
                l++;
                c.splice(j,1);
                j--;
                break;
            } else {};
            
        };
        if (l == 0){
            base.splice(h,1)
            h--;
        } else {};
        l = 0;
    }
    c = [];
console.log(m);
}
let g = 1;
for (let o = 0; o<base.length; o++){
    g = g * base[o];
};
if (g == 1){
    alert("Нема такого числа");
} else {
    alert(g);
};
