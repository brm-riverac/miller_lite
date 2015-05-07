	var clock;

			$(document).ready(function() {

				// Grab the current date
				var currentDate = new Date();

				// Set some date in the future. In this case, it's always Jan 1
				var futureDate  = new Date(currentDate.getFullYear() + 1, 0, 1);

				// Calculate the difference in seconds between the future and current date
				var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

				// Instantiate a coutdown FlipClock
			    var clock = $('.clock').FlipClock(7200 * 24 * 3, {
		        clockFace: 'DailyCounter',
		        language:'es-es',
		        countdown: true,
		        showSeconds: false
	            });
			});