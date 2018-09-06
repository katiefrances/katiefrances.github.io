
// NAVBAR
/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// HEADER
    // const jobArray = ["Photographer", "Designer", "Developer"];
    // var arrayLength = jobArray.length
    // var str = "Photographer"

    // infinite loop through array with timer 

    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];


        
	// }
	
	

// Header loop
$(document).ready(function() { 
	var $li = $('ul li');

	$li.hide()
		.first().show().addClass('active');

	function loop() {
		$('.active').each(function(index){
			$this = $(this);
			$next = $this.next().length > 0 ? $this.next() : $li.first();

			$this.hide().removeClass('active');
			$next.show().addClass('active');

			if( $next.index() == 0) {
				clearInterval(myTimer);
				setTimeout(function(){
					myTimer=setInterval(function(){loop()},1000);
				}, 100);
			}
		});
	}
	myTimer=setInterval(function(){loop()},1000); //timer running every 2 seconds
});

// NAV HIDE / SHOW CONTENT ON CLICK



$('.js-nav-link').click(function(e) {
    e.preventDefault();
    // Get the clicked object
    var _this = e.currentTarget();
    var section = $(_this).data("section");
    // section should be a string ie home or about

    // Animate navigation away
    $('#myNav').css('height','0%');

    // Smooth scroll stuff
    $('#' + section).smoothScrollHere();
})

