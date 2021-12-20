let orignalArray = [1, 2, 3, 4, 5, [100, 200]];

let copyArray = orignalArray;

// console.log(orignalArray);
// console.log(copyArray);

// copyArray[0]="HelloWorld";
// console.log(orignalArray);
// console.log(copyArray);
///2no me bhi change hura essay rukne k leye

// copyArray=[...orignalArray]
// copyArray[0]="...Value"
// copyArray[5][0]="change value"
// console.log(orignalArray);
// console.log(copyArray);


///////////there used json.parse(json.strigify)//////



// copyArray = JSON.parse(JSON.stringify(orignalArray));


// copyArray[0] = "jsonChange";
// copyArray[5][0] = "deepChange"
// console.log(orignalArray)
// console.log(copyArray)

////////object shallow///////////

 let OrignalObject={
     name:"Ayaan",
     company:"tekisky",
     city:{
         add:"nanded"
     }

 }

 let duplicateObject=OrignalObject;

//  console.log(duplicateObject);

duplicateObject={...OrignalObject};

// duplicateObject.name="Shallow";
// console.log(OrignalObject)
// console.log(duplicateObject)


///////////deepShallow////////////

duplicateObject=JSON.parse(JSON.stringify(OrignalObject));
duplicateObject.city.add="Parbhani";
console.log(OrignalObject);
console.log(duplicateObject);




