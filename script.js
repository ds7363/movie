console.log("check");
let fullText = "Are you okay?";
let i = 0;



// // HTML Elements
let vidArea = document.getElementById("vid-area");
let movie = document.getElementById("movie");
let textArea = document.getElementById("text-area");
let screenText = document.getElementById("text-content");
let beginText = document.getElementById("begin");
let respArea = document.getElementById("response-area");
let respPrompt = document.getElementById("response-prompt");
let respField = document.getElementById("response-field");
let respSubmit = document.getElementById("response-submit");
let contactArea = document.getElementById("contact-area");



// // Event listeners
document.body.addEventListener("click", function() {window.setInterval(appendText,200)});
movie.addEventListener("play", function() {textArea.style.display = "none"});
movie.addEventListener("ended", inputPopup);
// respField.addEventListener("keyup", function(event) {if(event.key === "enter") {}})
respSubmit.addEventListener("click", inputPopout);



// // Function definitions
function appendText() {
    if (i < 11) {
        screenText.textContent += fullText[i];
        i++;
    }
    else {
        document.body.removeEventListener("click", function() {window.setInterval(appendText,200)});
        window.clearInterval();
        document.body.addEventListener("click", function() {
            screenText.classList.add("fade");
            beginText.classList.add("fade");
            window.setTimeout(playMovie, 4000);
        });
        window.setTimeout(function () {beginText.style.display = "block"}, 1000);
    }
}
function playMovie() {
    document.body.removeEventListener("click", function() {screenText.classList.add("fade");beginText.classList.add("fade");window.setTimeout(playMovie, 4000);});
    if (movie.style.display != "none") {
        movie.play();
    }
}
function inputPopup() {
    movie.classList.add("fade");
    window.setTimeout(function() {
        movie.style.display = "none"; 
        movie.setAttribute("src","./assets/movie.mp4"); 
        movie.volume = 0;
        respArea.style.display = "block"
    }, 2000);    
}
function inputPopout() {
    respArea.style.display = "none";
    window.setTimeout(function() {contactArea.style.display = "block"}, 1000)
}
