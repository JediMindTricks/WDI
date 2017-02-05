var theGDPTable
var countriesOfInterest = ['Spain', 'France', 'Germany', 'United States', 'Russia', 'China']

function preload(){
  theGDPTable = loadTable('gdp.csv', 'csv', 'header')
}

function setup() {
  createCanvas(600, 400)
  var countryRows = theGDPTable.rows
  var countriesForChart = []
  for (var i=0; i<countryRows.length; i++){
    var countryName = countryRows[i].get('country')
    if ( countriesOfInterest.indexOf(countryName) > -1 ){
      countriesForChart.push(countryRows[i])
    }
  }
  
  var barWidth = 100
  textSize(16)
  console.log(countriesForChart)
  for (var i=0; i<countriesForChart.length; i++){
    var gdp = countriesForChart[i].get('gdp_percap')
    fill('red')
    rect(i*(barWidth+10), height-gdp/250, barWidth, height)
    fill('black')
    text(countriesForChart[i].get('country'), i*(barWidth+10), 380)
  }

}

function draw() {
  
}