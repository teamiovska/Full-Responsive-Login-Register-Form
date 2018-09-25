$(document).ready(function() {

// Function for opening a modal
	$('.modal').modal({

// Function for hide login_form when model open
		onOpenStart(){
			$('.login_form').css('opacity', '0');
		},

// Function for show login_form when model close
		onCloseStart() {
			$('.login_form').css('opacity', '1');
		}
	});

// keyup function for add class on button if inputs not empty
	$('.login_inputs').keyup(function(event) {
		var username = $('#username').val()
		var password = $('#password').val()

		if (username != '' && password != '') {
			$('#btn_login').addClass('pulse');
		}
		else {
			$('#btn_login').removeClass('pulse');
		}
	});

// click function for validation of inputs
	$('#btn_login').click(function(event) {
		var username = $('#username').val()
		var password = $('#password').val()

		if (username == '') {
			 alertify.set('notifier','position', 'bottom-left');
			alertify.error('Username is empty');
			return false
		}
		if (password == '') {
			alertify.set('notifier','position', 'bottom-left');
			alertify.error('Password is empty');
			return false
		}

		alertify.set('notifier','position', 'bottom-left');
		alertify.success('Success Login');
		$(this).removeClass('pulse');
		$('#username').val('');
		$('#password').val('');

	});

// keyup function for add class on button if inputs not empty
	$('.register_div_input input').keyup(function(event) {
		var reg_username = $('#reg_username').val();
		var reg_fullname = $('#reg_fullname').val();
		var reg_country = $('#reg_country').val();
		var reg_email = $('#reg_email').val();
		var reg_password = $('#reg_password').val();
		var reg_repeat_password = $('#reg_repeat_password').val();

		if (reg_username != '' && reg_fullname !='' && reg_country !='' && reg_email !='' && reg_password !='' && reg_repeat_password != '') {
			$('#btn_register_modal').addClass('pulse');
		}
		else {
			$('#btn_register_modal').removeClass('pulse');
		}
	});

// click function for validation of inputs, validation for email and validation for password
	$('#btn_register_modal').click(function(event) {
		var reg_username = $('#reg_username').val();
		var reg_fullname = $('#reg_fullname').val();
		var reg_country = $('#reg_country').val();
		var reg_email = $('#reg_email').val();
		var reg_password = $('#reg_password').val();
		var reg_repeat_password = $('#reg_repeat_password').val();

		if (reg_username == '' || reg_fullname =='' || reg_country =='' || reg_email =='' || reg_password =='' || reg_repeat_password == '') {
			alertify.set('notifier','position', 'bottom-left');
			alertify.error('All fields are required');
			return false
		}

		if( !validateEmail(reg_email)) { 
			alertify.set('notifier','position', 'bottom-left');
			alertify.error('Enter a valid email address');
			return false;
 		}

 		if (reg_password != reg_repeat_password) {
 			alertify.set('notifier','position', 'bottom-left');
 			alertify.error('Passwords dont match');
			return false;
 		}

		alertify.set('notifier','position', 'bottom-left');
		alertify.success('Successful registerd');
		$('.register_div_input input').val('');
		$(this).removeClass('pulse')

	});


	// Function that validates email address through a regular expression.
	function validateEmail($email) {
	  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	  return emailReg.test( $email );
	}

	// Slide downo Login form
	$('#login-forma').slideDown(1000);

});