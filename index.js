
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

<li>
    <a class="us-nav-link" data-section="home">Home</a>
    <a class="js-nav-link" data-section ="about">About</a>
    <a class="js-nav-link" data-section ="contact">Contact</a>
</li>


<div id="about">
    <h1>About</h1>
</div>

<div id="contact">
    <h1>Contact</h1>
</div>


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

// 

// var start = null;
// var element = document.getElementById('SomeElementYouWantToAnimate');
// element.style.position = 'absolute';

// function step(timestamp) {
//   if (!start) start = timestamp;
//   var progress = timestamp - start;
//   element.style.left = Math.min(progress / 10, 200) + 'px';
//   if (progress < 2000) {
//     window.requestAnimationFrame(step);
//   }
// }

// window.requestAnimationFrame(step);
