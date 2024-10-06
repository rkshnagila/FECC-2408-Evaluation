function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object'){
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
        
      
         for (const key in obj) {
            if(obj.hasOwnProperty.call(obj.key)) {
                copiedObj[key] = deepCopy(obj[key]);
            }
        }
        return copiedObj;
    }

const obj = {
  name: "John",
  address: {
    city: "New York",
    zip: 10001
  }
};

const copy = deepCopy(obj);
console.log(copy);
// Output: { name: "John", address: { city: "New York", zip: 10001 } }


















