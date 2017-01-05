class ItalianArray < Array
	def say_hi
		"Io sono una vera matrice italiana #{self}"
	end

	def primo
		return self[0]
	end

	def secondo
		return self[1]
	end

	def penultimo
		return self[-2]
	end

	def ultimo
		return self[-1]
	end
end

it = ItalianArray.new

p it 
p it.say_hi