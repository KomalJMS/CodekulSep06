let a=5,b=6,c=7;

let s=(a+b+c)/2; // s=semiperimeter of triangle

//console.log(s +" is semiperimeter of triangle");

let area= Math.sqrt (s*((s-a)*(s-b)*(s-c)));

console.log(area +" is area of triangle");