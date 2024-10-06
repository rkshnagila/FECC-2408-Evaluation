function mergeObjects(obj1,obj2){
    const merge = {...obj1};
    for (const rksh in obj2) {
        if(obj2.hasOwnProperty(rksh)){
        merge[rksh] = obj2[rksh];
    }
}
return merge;
}

const obj1 = { name: "John", age: 30 };
const obj2 = { age: 40, city: "New York" };

const result = mergeObjects(obj1, obj2);
console.log(result);
// Output: { name: "John", age: 40, city: "New York" }
