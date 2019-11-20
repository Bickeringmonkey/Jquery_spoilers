// when button is pressed
$('.spoiler').on('click', 'button', function(event) {
    $(event.target).prev().show();
    //show spoiler text
   $(event.target).hide();
    
  });
  
  // Create Reveal Spoiler Button
  const $button = $('<button>Reveal Spoiler</button>');
  //Append to website - creates a button onto the html (the last line of the element)
  $('.spoiler').append($button);
  
  
  //Hide Spoiler on page load
  $('.spoiler span').hide();