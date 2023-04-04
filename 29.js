let i = 0;
let c = 0;

while(i<=100){
    i++;
    let d1 = Math.floor(Math.random() * 6 + 1);
    let d2 = Math.floor(Math.random() * 6 + 1);
    
    if(d1+d2 == 10)
        c++;
}
console.log(`Los dados sumaron ${c} veces 10`);
