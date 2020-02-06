try {
    const result = await makeHttpRequest('google.com');
    console.log(result);
}   catch (err) {
    console.log('Oh boy, an error');
}

async function makeHttpRequest(url) {
    // ...
}