console.log("check");
let fullText = "Are you ok?";
let i = 0;


// // HTML Elements
let screenText = document.getElementById("text-content");



// // 



// // Function definitions
function appendText() {
    if (i < 11) {
        screenText.textContent += fullText[i];
        console.log(fullText[i]);
        i++;
    }
    else {window.clearInterval()}
}