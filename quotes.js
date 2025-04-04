//select element by their ids
var header = document.getElementById("header");
const blockquote = document.getElementById("blockquote");
const authorname = document.getElementById("authorname");
const api_url = "https://dummyjson.com/quotes" //get the data from api

//create a async function which helps to get the api data
async function getquote(url) {
    try {
        const response = await fetch(url); //fetch the API
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); //parse JSON response
        const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)]; //pick a random quote
        blockquote.innerHTML = " “ " + randomQuote.quote + "” "; //update blockquote
        authorname.innerHTML = randomQuote.author; //update author name
    } catch (error) {
        console.error("Error fetching the quote:", error);
        blockquote.innerHTML = "Sorry, unable to fetch a quote at the moment.";
        authorname.innerHTML = "";
    }
}
//call function to fetch quote
getquote(api_url);

//create onclick function for twitter 
function tweet(){
    window.open(href="https://twitter.com/intent/tweet?text= " + blockquote.innerHTML); //open new window and run this url
}

//create onclick function for facebook 
function facebook(){
    window.open(href="https://facebook.com/intent/facebook?text= " + blockquote.innerHTML); //open new window and run this url
}

//create onclick function to copy the quotes
function copy(){
//copying the quote text on id copy button
    navigator.clipboard.writeText(blockquote.innerHTML);
//alert after clicking the button
    alert("Copied the text: " + blockquote.innerHTML);
}

//set the time which will depend on global time
function time() {
    //get time and date
    var currentTime = new Date();
    var dateTimeString = currentTime.toLocaleString();
    //add the date and time in header part
    header.innerHTML = dateTimeString;
    
    // Update the time every second
    setTimeout(time, 1000);
}

time();

