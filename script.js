console.log("check");
let fullText = "Are you ok?";
let i = 0;



// // HTML Elements
let vidArea = document.getElementById("vid-area");
let movie = document.getElementById("movie");
let textArea = document.getElementById("text-area");
let screenText = document.getElementById("text-content");
let respArea = document.getElementById("response-area");
let respPrompt = document.getElementById("response-prompt");
let respField = document.getElementById("response-field");
let respSubmit = document.getElementById("response-submit");
let contactArea = document.getElementById("contact-area");



// // Event listeners
vidArea.addEventListener("click", function() {window.setInterval(appendText,200)});
movie.addEventListener("ended", inputPopup);
respSubmit.addEventListener("click", inputPopout);



// // Function definitions
function appendText() {
    if (i < 11) {
        screenText.textContent += fullText[i];
        i++;
    }
    else {
        window.clearInterval()
        vidArea.removeEventListener("click", function() {window.setInterval(appendText,200)});
        vidArea.addEventListener("click", function() {
            screenText.classList.add("fade");
            window.setTimeout(playMovie, 4000);
        });
    }
}
function playMovie() {
    movie.play();
}
function inputPopup() {
    respArea.style.display = "block";
}
function inputPopout() {
    respArea.style.display = "none";
    window.setTimeout(function() {contactArea.style.display = "block"}, 1000)
}