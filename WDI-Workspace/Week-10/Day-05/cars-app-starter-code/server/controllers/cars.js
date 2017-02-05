const
  Car = require('../models/Car.js')
  seeds = require('../seeds.js')

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
  seed
}

function index(req, res) {
  Car.find({}, (err, cars) => {
    var jsonResponse;
    if(err) { jsonResponse = {success: false, message: 'Could not get cars 😥'} }
    else { jsonResponse = {success: true, count: cars.length, cars: cars} }
    res.json(jsonResponse)
  })
}

function show(req, res) {
  Car.findById(req.params.id, (err, car) => {
    var jsonResponse;
    if(err) { jsonResponse = {success: false, message: 'Could not get car 😥'} }
    else { jsonResponse = {success: true, car: car} }
    res.json(jsonResponse)
  })
}

function create(req, res) {
  Car.create(req.body, (err, car) => {
    var jsonResponse;
    if(err) { jsonResponse = {success: false, message: 'Could not create car 😥'} }
    else { jsonResponse = {success: true, message: "Car created! 🚗", car: car} }
    res.json(jsonResponse)
  })
}

function update(req, res) {
  Car.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, car) => {
    var jsonResponse;
    if(err) { jsonResponse = {success: false, message: 'Could not update car 😥'} }
    else { jsonResponse = {success: true, message: "Car updated! 🚙", car: car} }
    res.json(jsonResponse)
  })
}

function destroy(req, res) {
  Car.findByIdAndRemove(req.params.id, (err) => {
    var jsonResponse;
    if(err) { jsonResponse = {success: false, message: 'Could not remove car 😥'} }
    else { jsonResponse = {success: true, message: "Car removed! 🚙", car: car} }
    res.json(jsonResponse)
  })
}

function seed(req, res) {
  Car.remove({}, (err) => {
    var jsonResponse;
    if(err) {
      jsonResponse = {success: false, message: 'Could not remove cars to seed. 😥'}
      res.json(jsonResponse)
    } else {
      Car.insertMany(seeds, (err, cars) => {
        if(err) { jsonResponse = {success: false, message: 'Could not seed cars after removing. 😥'} }
        else { jsonResponse = {success: true, message: "Cars created! 🚗 ", cars: cars} }
        res.json(jsonResponse)
      })
    }
  })
}
