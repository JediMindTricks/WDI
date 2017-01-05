class EnglishArray < Array
	def say_hi
		"Hello, I am an english array #{self}"
	end
	def first
		return self[0]
	end
	def second
		return self[1]
	end
	def penultimate
		return self[-2]
	end
	def last
		return self[-1]
	end
end

ea = EnglishArray.new

p ea
ea.push(7)
ea.push(23)
p ea.say_hi

p ea.second