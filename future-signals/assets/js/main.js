$(document).ready(function(){
	console.log("The page is ready!");

//NAV FILTERS
	// Toggle large research item
	$('.research-item').click(function(){
		$(this).toggleClass('large')
	});

	//toggle active class on nav item
	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active')
		$(this).addClass('active');
	});

	var hideAll = function() {
		$('.research-item') .addClass('hide');
	}

	//toggle filtered items

	$('.btn-oldnudes').click(function(){
		hideAll();
		$('.oldnudes').removeClass('hide');
	});

	$('.btn-newnudes').click(function(){
		hideAll();
		$('.newnudes').removeClass('hide');
	});

	$('.btn-badnudes').click(function(){
		hideAll();
		$('.badnudes').removeClass('hide');
	});

	$('.btn-notporn').click(function(){
		hideAll();
		$('.notporn').removeClass('hide');
	});

	$('.btn-comments').click(function(){
		hideAll();
		$('.comments').removeClass('hide');
	});

	$('.btn-all').click(function(){
		$('.research-item').removeClass('hide');
	});

});

//not safe

$(function(){  // $(document).ready shorthand
  $('.notsafe').fadeIn('slow');
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.notsafe').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},200);
                    
            }
            
        }); 
    
    });
    
});

//POP UP WINDOW
$(function(){  // $(document).ready shorthand
  $('.popup').fadeIn('slow');
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.popup').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},2000);
                    
            }
            
        }); 
    
    });
    
});
