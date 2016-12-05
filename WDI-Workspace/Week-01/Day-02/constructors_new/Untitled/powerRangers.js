function Ranger(name, x, y, powerColor, xv) {
  this.name = name
  this.x = x
  this.y = y
  this.powerColor = powerColor
  this.xv = xv
}

Ranger.prototype.render = function() {
  rect(this.x, this.y, this.size,this.size)
  fill(this.colour)
}

Ranger.prototype.move = function(){
  this.x = this.x + this.vx;
}

//name x, y. color, xv
var jason, billy, zach, trini, kim

function setup() {
  createCanvas(400, 400)
  jason = new Ranger('jason', 10, 10, 'red', 1)
  billy = new Ranger('jason', 10, 10, 'blue', 1)
  zach = new Ranger('jason', 10, 10, 'black', 1)
  trini = new Ranger('jason', 10, 10, 'yellow', 1)
  kim = new Ranger('jason', 10, 10, 'pink', 1)
}

function draw() {
  background(255)
  jason.move()
  jason.render()
  billy.move()
  billy.render()
 
}