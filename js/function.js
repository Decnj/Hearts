function nextPage() {
    window.location.href = "../Sleek/html-pages/yes.html";
}


function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
    document.getElementById('noButton').style.left = x + 'px';
    document.getElementById('noButton').style.top = y + 'px';
}


// function moveButton(){
//     var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85;
//     var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
//     document.getElementById('noButton').style.left = 'S(x)px';
//     document.getElementById('noButton').style.left = 'S(y)px';
// }