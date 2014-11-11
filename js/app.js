$(document).ready(function() {

	function numbersOnly() {
		$('input').keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 57)
        return false;
    	});
	}

	var fizzBuzz = function () {
		$('.enter').on('click', (function() {
			var input = $('input').val();
			if (input === "") {
				alert('Please enter a value between 1 and 100');
			}
			var number = +input;
			$('.output').show();
			for (var i = 1; i <= number; i++) {
				if ((i % 3 === 0) && (i % 5 === 0)) {
					$('.output').append('fizz-buzz ');
				} else if (i % 3 === 0) {
					$('.output').append('fizz ');
				} else if (i % 5 === 0) {
					$('.output').append('buzz ');
				} else {
					$('.output').append(i + " ");
				}
			} 
		}))
	}

	numbersOnly();
	fizzBuzz();

	$('.clear').on('click', (function() {
		$('input').val('');
		$('.output').remove();
	}))

})

