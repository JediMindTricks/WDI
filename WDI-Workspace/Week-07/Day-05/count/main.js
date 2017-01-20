var toolkit = require('./toolkit.js')
var fs = require('fs')
var express = require('express')

fs.readFile("./book.txt.rtf", "utf8", function(err, contents) {
	
	// take in contents of txt file.
	// turn txt to lowercase
	var bookInfo = contents.toString().toLowerCase()
	// split text into array
	var bookArray = bookInfo.split(" ")
	// run count function
	var print = toolkit.countedStringsInArray(bookArray)
	// print results to console
	console.log(print)
	})

