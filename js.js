/* Slider */
	$("[data-slider]").slick({
		infinite: true,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
});

	$("[data-slider]").mousedown(function(event){
  	event.stopPropagation();
  	event.preventDefault(); 
  	return false;
});