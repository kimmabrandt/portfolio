$(function() {
  // Get the form
  var form = $('#ajax-contact');

  // Get the messages div
  var formMessages = $('#form-messages');


  // Event listener for form
  $(form).submit(function(event) {
    // Prevent default submit action
    event.preventDefault();
  });

  // Serialize form data
  var formData = $(form).serialize();

  // Submit the form using AJAX
  $.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
  })
  .done(function(response) { // if success
    // Set formMessages div with 'success'
    $(formMessages).removeClass('error');
    $(formMessages).addClass('success');

    // Set the message text
    $(formMessages).text(response);

    // Clear the form
    $('#name').val('');
    $('#email').val('');
    $('message').val('');
  })
  .fail(function(data) { //if fail
    // Set formMessages div with 'error'
    $(formMessages).removeClass('success');
    $(formMessages).addClass('error');

    // Set the message text
    if (data.responseText !== '') {
      $(formMessages).text(data.resposeText);
    } else {
      $(formMessages).text('Oops! An error occured and your message could not be sent.');
    }
  });

});
