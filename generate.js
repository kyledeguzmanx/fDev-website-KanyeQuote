const apiURL = "https://api.kanye.rest/";

function generateQuote(){
    fetch(apiURL)
    .then(data =>{
        return data.json();
    })
    .then(data => {
        console.log();
    })
}
/*
{"quote":"Burn that excel spread sheet"}
*/