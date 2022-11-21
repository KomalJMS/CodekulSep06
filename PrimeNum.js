let x= 7;
let j=0;
for(let i =1;i<=x;i++)
{  
  let c=x%i;

  if(c==0)
    j++;

}
if(j==2)
console.log(x + " is prime");
else
console.log(x + " is not prime");