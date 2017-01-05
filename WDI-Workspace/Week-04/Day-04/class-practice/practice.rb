class Fruit
	# def initialize color, origin, cost
	# 	@cost = cost
	# 	@origin = origin
	# 	@color = color
	# end
	# def color
	# 	"yellow"
	# end
	# def origin
	# 	@origin
	# end
	# def cost
	# 	@cost
	# end

	#Can read values on selected inputs
	attr_reader :color, :origin, :cost
	#Can write values on selected inputs
	attr_writer :color, :origin, :cost
	# Can read and write values
	attr_accessor :color, :origin, :cost
end

banana = Fruit.new("blue", "Ralphs", 1.25)
p banana.color
p banana.origin
p banana.cost