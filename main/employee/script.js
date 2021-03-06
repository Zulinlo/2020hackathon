$(function() {
	$("#time").hide();
	$("#popup").hide();
	var yes = 0;

	$("#start").click(function() {
		$("#start").hide();
		$("#time").fadeIn("fast");
		function startTimer(duration, display) {
		    var timer = duration, minutes, seconds;
		    setInterval(function () {
				if (yes == 0) {
			        minutes = parseInt(timer / 60, 10);
			        seconds = parseInt(timer % 60, 10);

			        minutes = minutes < 10 ? "0" + minutes : minutes;
			        seconds = seconds < 10 ? "0" + seconds : seconds;

			        display.text(minutes + ":" + seconds);

			        if (--timer < 0) {
						yes = 1;
						display.text("120:00");
			            timer = duration;
						$("#popup").fadeIn("slow");
			        }
				}
		    }, 1000);
		}

		jQuery(function ($) {
		    var fiveMinutes = 10,
		    display = $('#time');
		    startTimer(fiveMinutes, display);
		});

		$(".hide").click(function() {
			$("#popup").fadeOut("slow");
		});
	});
});
