p [1,2,3,4,5].class

["Sean", "Joelle", "Matt", "Josh"].each {|students| p students + " is very cool!"}

# Create an array with the name of all the students and print
# the name
ga_students = ["Michael", "Nadia", "Yanny", "Justin", "Senny", "Matt", "Josh", "Rachel", "Joelle", "Kris", "Sean", "Dustin"]

# print how many letters each student name has
ga_students.each { |ga_students| p ga_students + "'s' name is " + ga_students.length.to_s + " characters long." }
# print the class of each element in the array
ga_students.each { |ga_students| p ga_students.class }
# print the name of the first student in the list using the message :first
p ga_students.first
# print the name of the last student in the list using the message :last
p ga_students.last
# print the methods to which the array of students respond to by using :methods

# choose 5 of this methods and find out what they do