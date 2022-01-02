let quote_content = document.querySelector(".quote");
let video_bg = document.querySelector("#myVideo");
const apiURL = "https://api.kanye.rest/";

video_bg.playbackRate  = 1.5;
function generateQuote(){
    fetch(apiURL)
    .then(data =>{
        return data.json();
    })
    .then(data => {
        quote_content.textContent = '"' +  data.quote + '."';
    })
}

document.querySelector("body").addEventListener("click", () => {
    generateQuote();
});

generateQuote();

/*
{"quote":"Burn that excel spread sheet"}
*/