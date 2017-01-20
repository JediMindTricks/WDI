function Animal(name) {
	var that = this
	this.name = name

	this.screech = function () {
		setTimeout(function () {
			console.log(self.name)
		}, 3000)
	}
}

var nemo = new Animal('Nemo')
nemo.screech()

function circumference(radius) {
	return 2 * Math.PI * radius
}