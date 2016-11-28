function robotMaker() {
  var robot = {name: 'nice', voltage: 220, country: 'Germany'}
  return robot;
}

function myRobotMaker(theName, voltage, origin) {
  var myRobot = {name: theName, volt: voltage, country: origin}
  myRobot.sayMyName = function(){console.log('Say my name say my name....' + this.name) }
  return myRobot;
}


var robot1;
var robot2;

function setup() {
  noCanvas()
    robot1 = robotMaker()
    robot2 = robotMaker()
  console.log(robot1)
  console.log(robot2)
  myRobot = myRobotMaker('Mike', 90000, 'USA')
  console.log(myRobot)
}

function draw() {
  
}