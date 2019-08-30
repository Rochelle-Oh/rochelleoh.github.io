$(document).ready(function(){
	console.log("The page is ready!");

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