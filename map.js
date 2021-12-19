/*Array map function*/



const array = ["Ayaan", "dyaan", "sufiyaan", "Armaan", "muskaan", "Raheman", "Sultan"];


//  console.log(array[0]); 
//  console.log(array[1]); 
//  console.log(array[2]); 
//  console.log(array[3]); 
//  console.log(array[4]); 

const map = array.map((cvalue, index, array) => {
    // console.log(index);
    // console.log(array);
    return cvalue;
})
console.log(map);


//Array destructuring
const x= ['Ayaan', 'dyaan',
    'sufiyaan', 'Armaan',
    'muskaan', 'Raheman',
    'Sultan'];
    console.log(x[0]); //Ayaan

    
    const [name1,name2,name3,name4,name5,name6,name7]=x;

    console.log(name1); //call name1 result Ayaan