function foo(someNum: number): number {
    return someNum + 5;
}

good

console.log(foo(2)); // prints "7"

no good

console.log(foo("two")); // invalid TS code