song = "";

function preload(){
    song = loadSound("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8RYmya_udEk&psig=AOvVaw0KJE65ap5rD7VO0K2QDBsO&ust=1636038745719000&source=images&cd=vfe&ved=2ahUKEwjgxL6zvfzzAhWwYWwGHY1DA3cQjRx6BAgAEAk");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
}