// in decreasing relevancy :0
const urls = ['google.com', 'yahoo.com', 'aol.com', 'netscape.com'];
const resultingPromises = urls.map((url) => makHttpRequest(url));
const results = await Promise.all(resultingPromises);
