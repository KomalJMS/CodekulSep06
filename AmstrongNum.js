
        let x= 153;
        let num=x;
        let j=0 , k=0 ,i=0;
        while(x>0)
        {   j=x % 10;
            k=j*j*j;
            i=i+k;
            x=parseInt( x/10);
         }

         if(i==num)
         console.log(num +" is armstrong number");
         else if(i!=num)
         console.log(num +" is not armstrong number");
