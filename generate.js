let quote_content = document.querySelector(".quote");
const apiURL = "https://api.kanye.rest/";

(function generateQuote(){
    fetch(apiURL)
    .then(data =>{
        return data.json();
    })
    .then(data => {
        quote_content.textContent = data.quote;
    })
})();



/*
{"quote":"Burn that excel spread sheet"}
*/