/* global $, window */



    // Show Nav-links
    $('.fa-bars').click(function () {
        
       $('.Nav-links').slideToggle(400);
        
    });

    // Centerlaize Body Section
    $('.body').css('marginTop', ($(window).height() - $('.body').height()) / 2);

    // Smoothly Scroll To Elements
    $('.Navbar li, button').click(function () {
        
       $('html, body').animate({
           
           scrollTop : $('#' + $(this).data('scroll')).offset().top + 1
           
       }, 1000);
        
    });
    
    
    // Sunc Navbar Links With Sections
    $(window).scroll(function () {
        
       $('.block').each(function () {
           
          if($(window).scrollTop() > $(this).offset().top) {
              
              var blockID = $(this).attr('id');
              
              $('.Navbar li').removeClass('active');
              $('.dots li').removeClass('filled');
              
              $('.Navbar li[data-scroll="' + blockID + '"]').addClass('active');
              $('.dots li[data-scroll="' + blockID + '"]').addClass('filled');
              
          }
           
       });
        
    });

    $('.Contact-us').height($(window).height());


    // Auto Change Header BackgroundImage
    let header = document.querySelector('.header');
        
    //Array Of Images
    let imgArray = ['7.jpg', '16.jpg', '17.jpg'];
    
    
    setInterval(function () {
        
        // Get Random Number
        let randomNumber = Math.floor(Math.random() * imgArray.length);
        
        header.style.backgroundImage = 'url("../Photos/' + imgArray[randomNumber] +'")';
        
    }, 5000);


     // Hide Placeholder
    var placeAtrr = '';
    
    $('[placeholder]').focus(function () {
        
        placeAtrr = $(this).attr('placeholder');
        
        $(this).attr('placeholder', '');
        
    }).blur(function () {
        
       $(this).attr('placeholder', placeAtrr);
        
    });



