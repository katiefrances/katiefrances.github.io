
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

// Loop throgh array infinitely 
 
const jobs = ['developer', 'designer', 'photographer'] ;

jobs.forEach(jobs => {
  return jobs++;
});
 
// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame || 
			window.webkitRequestAnimationFrame || 
			// window.mozRequestAnimationFrame || 
			// window.oRequestAnimationFrame || 
			// window.msRequestAnimationFrame || 
			function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element){
			  window.setTimeout(callback, 1000 / 60);
			};
  })();
  
  
  var elem = document.getElementById("anim");
  var startTime = undefined;
   
  function render(time) {
   
	if (time === undefined)
	  time = Date.now();
	if (startTime === undefined)
	  startTime = time;
   
	elem.style.left = ((time - startTime)/10 % 500) + "px";
  }
   
  elem.onclick = function() {
  
	  (function animloop(){
		render();
		requestAnimFrame(animloop, elem);
	  })();
		
  };





    // const jobArray = ["Photographer", "Designer", "Developer"];
    // var arrayLength = jobArray.length
    // var str = "Photographer"

    // infinite loop through array with timer 

    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
        
	// }
	
	

// Header loop
// $(document).ready(function() { 
// 	var $li = $('ul li');

// 	$li.hide()
// 		.first().show().addClass('active');

// 	function loop() {
// 		$('.active').each(function(index){
// 			$this = $(this);
// 			$next = $this.next().length > 0 ? $this.next() : $li.first();

// 			$this.hide().removeClass('active');
// 			$next.show().addClass('active');

// 			if( $next.index() == 0) {
// 				clearInterval(myTimer);
// 				setTimeout(function(){
// 					myTimer=setInterval(function(){loop()},1000);
// 				}, 100);
// 			}
// 		});
// 	}
// 	myTimer=setInterval(function(){loop()},1000); //timer running every 2 seconds
// });



// NAV HIDE / SHOW CONTENT ON CLICK
// Need to replace with JQuery

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

