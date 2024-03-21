//select element by their ids
var header = document.getElementById("header");
const blockquote = document.getElementById("blockquote");
const authorname = document.getElementById("authorname");
const api_url = "https://api.quotable.io/random" //get the data from api

//create a async function which helps to get the api data
async function getquote(url){
    const response = await fetch(url); //fetch url
    var data = await response.json();//this data will get all info of api
    blockquote.innerHTML = " “ "+ data.content + "” ";
    authorname.innerHTML = data.author;
}
getquote(api_url); //call the function

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

