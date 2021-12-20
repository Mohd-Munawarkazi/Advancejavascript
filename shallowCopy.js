let orignaiCopy=[1,2,3,4,5,[100,200]];

console.log(orignaiCopy)
let  copiesArray=[...orignaiCopy];
console.log(copiesArray)

//here we used shallw copy

// copiesArray[0]="nike"
// copiesArray[5][0]="Ayaan"
// console.log(orignaiCopy)
// console.log(copiesArray)

////nowy  used to deep shallow copy for changes in cpy array only
let deepcopy=JSON.parse(JSON.stringify(orignaiCopy))
deepcopy[0]="nike"
deepcopy[5][0]="Ayaankazi"

console.log(orignaiCopy);
console.log(deepcopy)


//////object ////////////

let orignal_obj={
    name:"Ayaan",
    lastname:"kazi",
    age:26
}
console.log(orignal_obj.name)
orignal_obj.name="Tekisky"
console.log(orignal_obj.name)

let copied_obj=orignal_obj;

// console.log(orignal_obj)
// console.log(copied_obj)

copied_obj.name="Ayaan";
console.log(orignal_obj)
console.log(copied_obj)


////////shalolow object copy//////////
 copied_obj={...orignal_obj}
copied_obj.name="helloe world";

console.log(orignal_obj)
console.log(copied_obj)
///////////////Object.assign used for nested object////////////
let deepcopy_obj=Object.assign({},orignal_obj)

deepcopy_obj.name="deepcopy";
console.log(orignal_obj)
console.log(deepcopy_obj);

let deepOrignal_copy={
    name:"Munawar kazi",
    company:"Tekisky",
    city:{
        jobprofile:"Software devloper",
        add:"Nanded"
    }
    
}


let deepCopy=deepOrignal_copy;
console.log(deepCopy);
console.log(deepOrignal_copy);
deepCopy.name="Ayaan kazi here";

console.log(deepCopy);
console.log(deepOrignal_copy);


let DeepAssign=Object.assign({},deepOrignal_copy)
DeepAssign.name="DeepAsign chnge ",
DeepAssign.city.jobprofile="Associate software Engineer";

console.log(deepCopy);
console.log(deepOrignal_copy);
/////////////////////////json/////////////
DeepAssign=JSON.parse(JSON.stringify(deepOrignal_copy));
DeepAssign.name="DeepAsign chnge by json parse strigify ";
DeepAssign.city.jobprofile="Associate software Engineer......><<><><><><";

console.log(DeepAssign);
console.log(deepOrignal_copy);


