const urls = ['google.com', 'yahoo.com', 'aol.com', 'netscape.com'];
// note this is non blocking
urls.forEach(async (url) => {
    try {
        await makHttpRequest(url);
    }   catch (err) {
        console.log(`${err} bad practice`);
    }
});

const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

async function testCall() {
    // do async stuff here
}

for (let i = 0; i < 10; i += 1) {
    testCall();
}

const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
items.map(async (item) => {
    // do async stuff here
});

const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const allResults = await Promise.all(items.map(async (item) => {
       // do async stuff here 
}));
