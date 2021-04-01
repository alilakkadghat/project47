var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var rock,paper,scissor;
var rock_img,paper_img,scissor_img;
var p1_img,p1_img;
var player1score =0;
var player2score =0;

function preload(){
  rock_img=loadImage("images/Picture3.png")
  paper_img=loadImage("images/Picture2.png")
  scissor_img=loadImage("images/Picture1.png")
  back_img = loadImage("images/bg.png");
  p2_img = loadImage("images/p2.png");
  p1_img=loadImage("images/p1.png");
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
  // Add conditions for gameStates and playerCount

