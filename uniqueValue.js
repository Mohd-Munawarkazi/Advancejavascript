let Array=["a","b","c","d","e","a","c","a","f"];
// console.log(Array);

let Array1=["g","h","i","j","k","g","h","i","l","m"];
// console.log(Array1);

let spread=[...Array,...Array1];  //using spread operator for concatonation two or more arrays
console.log(spread);
let unique=[];
// unique.push("ayaan","kazi","ayaan");
// console.log(unique)

// Array.forEach(element => {
//     if(!unique.includes(element)){
//         unique.push(element)
//     };
    
// });
// console.log(unique);

spread.forEach(element=>{               //separated unique value inludes
    if(!unique.includes(element)){
        unique.push(element)
    }
});

console.log(unique);

// for(key in unique){
//     console.log(unique[key]);
// }


// let arr=["a","a","b","b","c"]
let arr=[1,2,1,1,1,3,5,4,4,5,6,7,8,9]    //new Set() method is used to remove duplicate array

//  arr=new Set(["a","a","b","b","c"])
arr=new Set(arr)
console.log(arr)


// let notSame=[];
// arr.forEach((e)=>{
//     console.log(e)
//     if(!notSame.includes(e)){
//         notSame.push(  e )
//         // console.log(notSame)

//     }

// });
// console.log(notSame)
