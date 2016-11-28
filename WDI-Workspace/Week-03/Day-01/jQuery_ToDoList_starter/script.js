var $submit = $('button');
var $input = $('#todo');
var $list = $('.list');
var checkedValue = $('input[type=checkbox]').val();

// Make a function to delete item after a click to the X button
$list.on('click', '.glyphicon-remove', function(){
	// Selects the list, and if any element inside of the parent element it will remove it once clicked
	$(this).parent().fadeOut()
})


// Toggle star from on to off
$list.on('click','.glyphicon-star', function() {
  $(this).toggleClass('active');
});


// Create checkbox function to draw a line in list
// When you click on the checkbox inside of the list do this
$list.on('click', 'input', function(){
	//Make a var to check if box is checked in specific element
	var isChecked = $(this).is(':checked');
	//Conditional to add and remove classes
	if (isChecked) {
		//Will append the parent element (which is the P element), and will add the class
		$(this).parent().addClass('line-through');
	} else if (!isChecked) {
		$(this).parent().removeClass('line-through')
	}

})


// When you click on the submit button
$submit.on('click', function(e){
	// Prevent default form submission to stay on page.
	e.preventDefault()
	// the text that is in the input field
	var todoText = $input.val()

	// take new element styling
	// Adding styling to the last element to make one variable that has all the styling
	var newItem = '<p><input type="checkbox"> ';
	newItem += '<i class="glyphicon glyphicon-star"></i>';
	newItem += '<span>'+ todoText +'</span>';
	newItem += '<i class="glyphicon glyphicon-remove"></i>';
	newItem += '</p>';

	//Add item to the top of the list
	$list.prepend(newItem)
	//Reset the value of the form to empty
	$input.val('')
	//Log to console what just got added
	console.log(todoText + ": Was just added to list")
})
