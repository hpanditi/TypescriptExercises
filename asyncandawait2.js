makeHttpRequest('google.com').then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.log('Oh boy, an error');
});
