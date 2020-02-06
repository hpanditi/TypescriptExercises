const obj1 = { dog: 'woof' };
const obj2 = { cat: 'meow' };
const merged = Object.assign({}, obj1, obj2);
console.log(merged) // prints { dog: 'woof', cat: 'meow' }

const obj1 = { dog: 'woof' };
const obj2 = { cat: 'meow' };
console.log({ ...obj1, ...obj2 }); // prints { dog: 'woof', cat: 'meow' }

const arr1 = [1, 2];
const arr2 = [3, 4];
console.log([ ...arr1, ...arr2 ]); // prints [1, 2, 3, 4]