function toggle() {
  var element = document.getElementById("box");
  element.classList.toggle("move");
}

$('.marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 15000,
	//gap in pixels between the tickers
	gap: 100,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 1000,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
  // pauseOnHover: true,
  startVisible: true
});

function showonlyone(thechosenone) {
      var newboxes = document.getElementsByTagName("div");
            for(var x=0; x<newboxes.length; x++) {
                  name = newboxes[x].getAttribute("class");
                  if (name == 'newboxes') {
                        if (newboxes[x].id == thechosenone) {
                        newboxes[x].style.display = 'block';
                  }
                  else {
                        newboxes[x].style.display = 'none';
                  }
            }
      }
}
