//import my libraries 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 99 Bottles of Beer
//define my routes
app.get('/', (req, res) => {
    res.send(`
        <h1>99 Bottles of beer on the wall</h1>
        <a href="/98">"Take one down pass it around"</a>
    `);
});

// BONUS 99 little bugs
app.get('/debug', (req, res) => {
    res.send(`<h2>99 Little bugs in the code</h2><h2>99 Little bugs</h2>
    <a href="/debug/123">Take one down patch it around</a>
    `);
});

// 99 Bottles 
//define my route handler for the '/:number_of_bottles' 
app.get('/:number_of_bottles', (req, res) => {
    //parse the 'number_of_bottles' parameter from the request URL and subtract 1
    let nextPage = parseInt(req.params.number_of_bottles) - 1;
    
    //check if the 'number_of_bottles' is greater than 0
    if (parseInt(req.params.number_of_bottles) > 0) {
        //send a response with the number of bottles and a link to the next page
        res.send(`<h2>${req.params.number_of_bottles} Bottles of beer on the wall</h2>
        <a href='${nextPage}'>Take one down pass it around</a>`);
    } else {
        //send a response indicating that the beer is gone and a link to the store
        res.send(`
        <h1>The Beer is Gone!</h1>
        <a href="/">Who is going to the store!</a>`);
    }
});

// BONUS 99 Little Bugs Continued
	// define route to handle bug count
  app.get('/bug/:num', (req, res) => {
    //  random number between 1 and 50
    let random = Math.floor(Math.random() * 50) + 1;
    let nextPage = parseInt(req.params.num) - 1;  //trying to take one bug off 
    // calculate next bug count by adding random number to current bug count
    let nextBug = parseInt(req.params.num) + random;
    // send response with updated bug count and link to patch a bug
    res.send(`
        <h2>${req.params.num} Little bugs in the code</h2><h3>${req.params.num} Little bugs</h3>
        <a href='/bug/${nextBug}'>Take one down patch it around</a>
    `);
});
//app is  listening 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});