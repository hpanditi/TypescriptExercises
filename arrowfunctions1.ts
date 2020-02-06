someMethod(1, function () { // has no name
    console.log('called');
});

someMethod(1, () => { // has no name
    console.log('called');
});

const added = [0, 1, 2, 3, 4].map((item) => item + 1);
console.log(added) // prints "[1, 2, 3, 4, 5]"

