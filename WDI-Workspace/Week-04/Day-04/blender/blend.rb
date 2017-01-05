
#Fruit class that creates fruits
class Fruit 
	attr_accessor :cost, :color
	attr_reader :name, :origin

	def initialize name, color, origin, cost
		@name = name
		@color = color
		@origin = origin
		@cost = cost
	end
end

#Blender class that takes the fruits and blends the names together in one string
class Blender
	def initialize brand, model
		@brand = brand
		@model = model
	end

	attr_reader :brand, :model

	def blend(fruits)
	#Take fruits array and store it in a variable
	pitcher = fruits.join()
	pitcher = pitcher.split('')
	pitcher = pitcher.shuffle!
	pitcher.join()


	#Combine strings together into one variable string
	#Use the shuffle method on the string variable and return it
	end
end

my_fruit = [ "banana", "tomato", "kiwi"]

ninja = Blender.new("ninja", "gentsu")
p ninja.blend(my_fruit)

