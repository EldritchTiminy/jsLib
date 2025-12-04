// Fetch Boilerplate
// Fetch GET

fetch().then(response => { // sends request
  if (response.ok) {
    return response.json(); // converts response object to JSON
  }
  throw new Error('Request failed!'); // handles errors
}, networkError => { // handles errors
  console.log(networkError.message);
}).then(jsonResponse => { // handles success
  // code to execute with jsonResponse
});