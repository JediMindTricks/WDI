
# Defining a method then calling it
def say_hello name
	p "Hello World! Nice to meet you " + name
end

say_hello "Michael"

def product a,b 
	return a * b
end

p product 5,5

i = 0
while i < 10
	p i
	i+=1
end