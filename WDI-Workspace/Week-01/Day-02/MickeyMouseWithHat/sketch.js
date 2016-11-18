var tommy = {name: 'Tommy', color: "white", x: 0, speed: 1, zord: "Tigerzord"}
var zach = {name: 'Zach', color: "black", x: 0, speed: 1, zord: "Mastadon"}
var jason = {name: 'Jason', color: "red", x: 0, speed: 1.2, zord: "Dinozord"}
var trini = {name: 'Trini', color: "yellow", x: 0, speed: 1, zord: "Saberzord"}
var billy = {name: 'Billy', color: "blue", x: 0, speed: 1, zord: "Triceratop"}
var kim = {name: 'kim', color: "pink", x: 0, speed: 1, zord: "Crainezord"}



function setup() {
    createCanvas(480, 600);  // width and height
 
}

function draw() {
  
  // White Ranger
  fill(tommy.color);
  rect(tommy.x,0,100,50);
  tommy.x = tommy.x + tommy.speed;
  text(tommy.name, 0, 70);
  
  // Black Ranger
  fill(zach.color);
  rect(zach.x,100,100,50);
  zach.x = zach.x + zach.speed;
  
  //Red Ranger
  fill(jason.color);
  rect(jason.x,200,100,50);
  jason.x = jason.x + jason.speed;
  
  //Yellow Ranger
  fill(trini.color);
  rect(trini.x,300,100,50);
  trini.x = trini.x + trini.speed;
  
  //Blue Ranger
  fill(billy.color);
  rect(billy.x,400,100,50);
  billy.x = billy.x + billy.speed;
  
  //Pink Ranger
  fill(kim.color);
  rect(kim.x,500,100,50);
  kim.x = kim.x + kim.speed;
}