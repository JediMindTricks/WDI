# Creating a superclass for animals to call later on other subclasses
class AnimalKingdom
	def initialize(name)
		@name = name
		@moves = true
		@cell_type = "Eukariotic"
		@health_level = 100.0
	end
	
	attr_accessor(:name, :health_level)
	attr_reader(:cell_type, :moves)
end

class Dog < AnimalKingdom
	def initialize(name, breed)
		# "Super" keyword allows you to retrieve info from superclass
		super(name)
		@breed = breed
	end

	attr_reader(:breed)
end


class Fish < AnimalKingdom
	def initialize(name, species)
		super(name)
		@species = species
	end
	
	attr_reader(:species)
end


class Animal < AnimalKingdom
	def initialize(name)
		super name
		@health_level = 100.0
		@mamals = true
	end
	
	attr_accessor(:name, :health_level)
	attr_reader(:mamals)
end


class Chimpanzee < Animal
	def initialize(name, type)
		super(name)
		@type = type
	end
	
	attr_reader(:name ,:type)
end

class Person < Animal 
	def initialize(name, occupation)
		super name
		@occupation = occupation
	end
	
	attr_reader(:occupation)
end



sparky = Dog.new("Sparky McSparkerson", "Corgi Doge (Such Awesome)")
nemo = Fish.new("Nemo Bottoms", "Clownass Fish")
p sparky
p nemo


ceasar = Chimpanzee.new("Ceasar", "Chimpanzee")
che = Person.new("Che Guevara", "Freedom Fighter")
p ceasar
p che

p ceasar.class.superclass.superclass

