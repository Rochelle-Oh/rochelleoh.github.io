$(document).ready(function(){
	console.log("The page is ready!");

	var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

// Grid filter active class

	$('.filter-item').click(function(){
		$('.filter-item').removeClass('active')
		$(this).addClass('active');
	});

	var hideAll = function() {
		$('.grid-item').addClass('hide');
	}

	// Filter toggle

	$('.btn-artd').click(function(){
		hideAll();
		$('.artd').removeClass('hide');
	});

	$('.btn-illust').click(function(){
		hideAll();
		$('.illust').removeClass('hide');
	});

	$('.btn-print').click(function(){
		hideAll();
		$('.print').removeClass('hide');
	});

	$('.btn-photog').click(function(){
		hideAll();
		$('.photog').removeClass('hide');
	});

	$('.btn-cinemat').click(function(){
		hideAll();
		$('.cinemat').removeClass('hide');
	});

	$('.btn-animat').click(function(){
		hideAll();
		$('.animat').removeClass('hide');
	});

	$('.btn-identity').click(function(){
		hideAll();
		$('.identity').removeClass('hide');
	});

	$('.btn-all').click(function(){
		hideAll();
		$('.grid-item').removeClass('hide');
	});
});

