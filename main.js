var circle = false;
var rect = false;
var ellipse = false;
function preload() {}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(600, 100);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
        fill("red");
        stroke("red")
        rect(49, 50, 30, 380);
        rect(561, 50, 30, 380);
        rect(49, 50, 530, 30);
        rect(49, 400, 530, 30);
        fill(10, 30, 34);
        stroke(10, 30, 34);
        circle(30, 40, 100);
        circle(610, 40, 100);
        circle(30, 440, 100);
        circle(610, 440, 100);
        fill("#F28500");
        stroke("#F28500");
        ellipse(330, 25, 100, 40);
        ellipse(330, 455, 100, 40);
        ellipse(615, 240, 40, 100);
        ellipse(25, 240, 40, 100);       
}

function download_img(){
    save('Filtered Photo.png');
}
 function apply_tint() {
    tint_color = document.getElementById("tint_input").value;
}