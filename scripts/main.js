var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc ==='images/genius.png') {
        myImage.setAttribute('src', 'images/genius2.jpg');
    } else {
      myImage.setAttribute('src', 'images/genius.png')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to EvilGenius.cn, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcome to EvilGenius.cn, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}