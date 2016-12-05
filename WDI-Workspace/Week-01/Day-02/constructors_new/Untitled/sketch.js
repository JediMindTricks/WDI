
function Robot (robotName, voltage, origin, colour, size, x, y, vx) {
  this.name = robotName;
  this.volt = voltage;
  this.country = origin
  this.stateFacts = function(){console.log("My name is " + this.name + "! My power level is: " + this.volt + "! My home is " + this.country + "!")}
  this.colour = colour
  this.size = size
  this.x = x
  this.y = y
  this.vx = vx
}


Robot.prototype.render = function() {
  rect(this.x, this.y, this.size,this.size)
  fill(this.colour)
}

Robot.prototype.move = function(){
  this.x = this.x + this.vx;
}



var myRobot, myRobot2;


function setup() {
  createCanvas(400, 400)
  myRobot = new Robot("Robot Jones", 900, 'Oakland', 'red', 100, 20, 20, 2);
  console.log(myRobot)
  myRobot.stateFacts()
  myRobot2 = new Robot("Mike Jones", 9000, 'Houston', 'black', 50, 10, 10, 1);
}

function draw() {
  myRobot.move()
  myRobot2.move()
  myRobot.render()
  myRobot2.render()
 
}