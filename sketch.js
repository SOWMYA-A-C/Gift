var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;

var database;
var allPlayers;
var form, player, game, bg, gb;
var video;
var flag=0
var positionFlag=0

function setup(){
  canvas = createCanvas(displayWidth - 30, displayHeight - 130);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bg = loadImage('images/bg.jpg');

  //https://www.online-convert.com/result#j=961d6eaa-38ef-4f71-950c-d288bedfbe9a
  // use above link to convert ur MP4 to mov file
 
  video = createVideo("images/mov_bbb.mov");

  // form.func();
}


function draw(){
  background(bg);
  if(positionFlag===1){
   console.log("in pos")
    video.position(width/2-150, height/2-250);
    positionFlag=0;
   }
  if(flag===1){
    console.log("in image")
        image(video, width/2-150, height/2-250);
  }
   
}


function mouseDragged() {
console.log("preessed")
if(flag===1){
  video.play();
  console.log("video staterd")
}
}
