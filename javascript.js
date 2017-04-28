
  $("#laptop_button").click(function() {
      $('html,body').animate({
          scrollTop: $("#block1").offset().top},
          'slow');
  });

  $("#brain_button").click(function() {
      $('html,body').animate({
          scrollTop: $("#block2").offset().top},
          'slow');
  });

  $("#list_button").click(function() {
      $('html,body').animate({
          scrollTop: $("#block3").offset().top},
          'slow');
  });

  $("#smile_button").click(function() {
      $('html,body').animate({
          scrollTop: $("#block4").offset().top},
          'slow');
  });

  $(document).on('click', '.navlink', function(event){
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
  });
