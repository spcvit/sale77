jQuery(function($) {
	$(".a_top_menu").click(function (){
		$(".moduletableverh").toggle();
		return false;
	});
})


jQuery(function($) {
	$(".a_top_menu1").click(function (){
		$(".moduletablenapr.napr_left").toggle();
		return false;
	});
})






jQuery(document).ready(function($){
     $nav = $(".moduletableverh");
     $window = $(window);
    $h = $nav.offset().top;
    $window.scroll(function(){
        if ( $window.scrollTop() > 300) {
               $nav.addClass("sheensay_fixed");
        }else{
            $nav.removeClass("sheensay_fixed");
        }
  });
});