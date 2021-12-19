let numbers=[0,1,20,10,40,8,60]
//console.log(numbers);

numbers.sort();
//console.log(numbers);
//output is[  0,  1, 10, 20,40, 60,  8     ]

//using camparision

numbers.sort(function(a,b){
    if(a>b){
        // console.log(a);
        //console.log(b); 
 
         return 1;
     } else if(a<b){
       // console.log(a);
        // console.log(b);
 
         return -1;
     }else if(a==b){
        // console.log(a);
         console.log(b);
 
         return 0;
     }

    /*if(a==b){
        return 0;
    }*/
   
});
console.log(numbers);