// in decreasing relevancy :0
const urls = ['google.com', 'yahoo.com', 'aol.com', 'netscape.com'];
const resultingPromises = urls.map((url, index) => makHttpRequest(url, index));
const results = await Promise.all(resultingPromises);
