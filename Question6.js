function rearrangeFruits(fruits){
    if (fruits.length < 4) {
        return fruits;
    }
    const remove = fruits.splice(4);
    fruits.splice(0,0, ... remove);
    return fruits;
}

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

console.log(rearrangeFruits(fruits));
