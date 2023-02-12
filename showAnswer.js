function showAnswer() {
    var x = document.getElementById("answer");


    var btnId = document.getElementById("myButton");

    if (btnId.innerHTML == "Click to show answer") {
        btnId.innerHTML = "Click to hide answer";
    } else {
        btnId.innerHTML = "Click to show answer";
    }

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}