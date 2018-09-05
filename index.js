
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
    const jobArray = ["Photographer", "Designer", "Developer"];
    var arrayLength = jobArray.length
    var str = "Photographer"

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



// 

var start = null;
var element = document.getElementById('SomeElementYouWantToAnimate');
element.style.position = 'absolute';

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.left = Math.min(progress / 10, 200) + 'px';
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
