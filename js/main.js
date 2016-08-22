function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};

$( document ).ready(function() {
    $('.toggle_animate').on('click', function(e){
		e.preventDefault();
		$('#header ul').toggleClass('open-menu-js');
		$('.sandwich').toggleClass('active');
	});
	
	$('.navigation-btn').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('navigation-btn-open');
		$('#navigation').toggleClass('navigation-open');
	});
	
	$('.zoom').hover(
	function() {
		$(this).find('.img-inner-text').fadeIn(700);
	},
	function() {
		$(this).find('.img-inner-text').css({'display': 'none'});
	}
	);

	
	var handler = function(){
	
		var viewport_wid = viewport().width;
	
		if (viewport_wid <= 900) {
			var removeTag = $('#s1').find('br');
			removeTag.remove();			
		}	
	}
	$(window).bind('load', handler);
	$(window).bind('resize', handler);
	
	
});