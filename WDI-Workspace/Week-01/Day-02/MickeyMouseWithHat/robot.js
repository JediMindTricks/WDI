function robotMaker(){
  var robot = {name: 'nice', voltage: 220, country: 'Germany'};
  return robot;
}

function setup() {
  noCanvas()
  var robot1 = robotMaker()
  var robot2 = robotMaker()
  console.log(robot1)
  conosle.log(robot2)
}

function draw() {
  
}