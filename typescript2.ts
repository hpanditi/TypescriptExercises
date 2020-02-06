function myAPI(someNum, someString) {
    if (someNum > 0) {
        leakCredentials();
    } else {
        console.log(someString);
    }
}

function myAPI(someString, someNum) {
    if (someNum > 0) {
        leakCredentials();
    } else {
        console.log(someString);
    }
}