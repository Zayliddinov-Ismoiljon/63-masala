// Masala: a["ism"]= "Kamol", a["yoshi"]= 22, yana shunday 3ta toplam mavjud ularni yoshini farqini aniqlang

let a=[{ism : "Kamol", age: 22,}];
let b=[{ism : "Akmal", age: 30,}];
let c=[{ism : "Sobir", age: 28,}];
let d=[{ism : "Anvar", age: 25,}];
let e=[];
let ayirma=0;

e.push(a[0].age);
e.push(b[0].age);
e.push(c[0].age);
e.push(d[0].age);

for(i=0; i<=e.length; i++){
    ayirma = ayirma - i;
}

console.log(ayirma);