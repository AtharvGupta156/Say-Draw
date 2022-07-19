x = 0;
y = 0;

// To set the status
c = "";
r = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "Sytem is listening please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content  = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Speech has been recognized as : "+content;
    if (content == "circle") {
        x = Math.floor(Math.random()*850);
        y = Math.floor(Math.random()*550);
        document.getElementById("status").innerHTML = "Started drawing circle";
        c = "set";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random()*850);
        y = Math.floor(Math.random()*550);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        r = "set";
    }
}

function setup() {
    canvas= createCanvas(900,600)
}

function draw() {
    if (c == "set") {
        radius = Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        c = "";
    }
    if (r == "set") {
        rect(x,y,50,30);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        r = "";
    }
}