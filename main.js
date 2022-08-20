function preload(){

}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();
}

function draw(){
    image(video, 0, 0, 400, 400);
} 