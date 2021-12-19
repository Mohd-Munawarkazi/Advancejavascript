//  callback function assign as a function to a variable,as an method

// var simple=function(){
//     console.log("hey hello and welcome");

// }

// simple();

// const  callback={
//     name:"Ayaan kazi",
//     Qulification:function(){
//         console.log("BE(Mechanical Engg)");
//     },
//     college:"mgm's JNEC ",
//     city:"Aurangabad"
// }
// console.log(callback.name)
// console.log(callback.city)

// console.log(callback.Qulification());


// callback function as a argument
/*
const myname=()=>{
    console.log("Ayaan");
}


const callBackfn=(myname,myqualification)=>{
    return ` my name is ${myname()} and my qulification is ${myqualification}`;
    // console.log(` my name is ${myname()} and my qulification is ${myqualification}`);
    // console.log(myname());
};
// console.log(callBackfn(myname));

const cllB=callBackfn(myname,"BE(Mechanical Engg)");
console.log(cllB);

*/
//higher order function
// function as arguments and return anather function as a result
// ek function dusre funtion ko return krra simply


const hOrderfn=(name)=>{
   if(name==="Yahooo"){
       return  function (topic){
        console.log(`${name} welcome ${topic}`);

       }
   }else if(name==="kazi"){
       return function(topic){
           console.log(`${name} welcome to our team ${topic}`)
       }
      
   }
   else {
    return function(){
        console.log(` ${name}😒😒😒🤷‍♂️🤷‍♂️✌🤞 plzz check username`);
    }

   }
};
const ch=hOrderfn("Yahooo")("UX/Ui");
console.log(ch);












