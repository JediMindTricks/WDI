var buses

function preload() {
  buses = loadJSON("http://api.metro.net/agencies/lametro/routes/720/vehicles/")
}

function setup() {
  createCanvas(400, 400)
  console.log(map(800, 0, 2000, 0, 100))
}

function draw() {
  
}

function mousePressed() {
  var res = loadJSON("http://api.metro.net/agencies/lametro/routes/720/vehicles/")
  console.log(res)
}