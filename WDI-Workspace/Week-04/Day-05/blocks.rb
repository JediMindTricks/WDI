def block_runner_is_cool
	yield
end

def testing_blocks
	p "I am testing"
end

def block_runner_with_ps
	p "Before the yield"
	yield
	p "Burn After Yielding"
end

def block_runner_3x
	p "Before the yield"
	yield
	p "Burn After Yielding First One"
	p "Before the yield"
	yield
	p "Burn After Yielding Second One"
	p "Before the yield"
	yield
	p "Burn After Yielding Third One"

end

def nice(a,b,c)
	p "argument a is: " + a.to_s
	p "argument b is: " + b.to_s
	p "argument c is: " + c.to_s
	yield(b)
end

def repeat(x)
	for i in 1..x
		yield
	end 
end

block_runner_is_cool { p "I'm the man!" }
block_runner_with_ps { testing_blocks }
block_runner_3x { p "Way too many shots of the Hennesy"}
nice(100,200,300) {|money| p "Thanks for this amount: " + money.to_s}