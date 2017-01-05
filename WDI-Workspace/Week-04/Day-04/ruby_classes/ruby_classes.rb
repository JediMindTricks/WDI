class User
	def initialize
		@username = "zord"
		@password = "password1"
		@age = 26
		@telephone_number = "5558573261"
		@pictures = []
	end
	#Creating methods to be called

	def username
		return @username
	end

	def set_username(name)
		@username = name
	end

	def password
		return @password
	end

	def set_password(password)
		@password = password
	end

	def age
		return @age
	end

	def set_age(age)
		@age = age
	end

	def telephone_number
		return @telephone_number
	end

	def set_telephone_number(telnum)
		@telephone_number = telnum
	end

	def pictures
		return @pictures
	end

	def set_username(pic)
		@pictures = pic
	end

end

class Dog
	def initialize
		@breed = "German Shepard"
		@color = "Brown"
		@age = 4
		@edible = false
	end

	def breed 
		return @breed
	end

	def set_breed breed
		@breed = breed
	end

	def color
		return @color
	end

	def set_color color
		@color = color
	end

	def age 
		return @age
	end

	def set_age age
		@age = age
	end

	def edible
		return @edible
	end

	def set_edible edible
		@edible = edible
	end
end

class Car
	def initialize
		@brand = "Kia"
		@model = "Forte"
		@year = 2016
	end

	def brand
		return @brand
	end

	def set_brand newbrand
		@brand = newbrand
	end

	def model
		return @model
	end

	def set_model newmodel
		@model = newmodel
	end

	def year
		return @year
	end

	def set_year newyear
		@year = newyear
	end

end


zord = User.new
my_dog = Dog.new
my_car = Car.new

p my_car.model

