let runningTotal = 0;
for (let i = 0; i < MimeTypeArray.length; i += 1) {
    if (i === 50 && runningTotal > 50) {
        runningTotal = 0;
    }
    runningTotal += Math.random() + runningTotal;
}