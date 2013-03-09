
function run() {

	var open_count = 0;
	var open_sum = 0;
	$('td[_state="Open"] div[data-name="Story points"]').each(function() {
		if ($.isNumeric($(this).html())) {
			open_sum = open_sum + parseInt($(this).html());
		}
		open_count++;
	});

	var progress_count = 0;
	var progress_sum = 0;
	$('td[_state="In Progress"] div[data-name="Story points"]').each(function() {
		if ($.isNumeric($(this).html())) {
			progress_sum = progress_sum + parseInt($(this).html());
		}
		progress_count++;
	});

	var fixed_count = 0;
	var fixed_sum = 0;
	$('td[_state="Fixed"] div[data-name="Story points"]').each(function() {
		if ($.isNumeric($(this).html())) {
			fixed_sum = fixed_sum + parseInt($(this).html());
		}
		fixed_count++;
	});

	var verified_count = 0;
	var verified_sum = 0;
	$('td[_state="Verified"] div[data-name="Story points"]').each(function() {
		if ($.isNumeric($(this).html())) {
			verified_sum = verified_sum + parseInt($(this).html());
		}
		verified_count++;
	});


	$('#board th.sb-column-title a').each(function() {

		if ($(this).html().indexOf("Open") >= 0) {
			$(this).append("("+open_count+" tasks, "+open_sum+" story points)");
		}
		else if ($(this).html().indexOf("In Progress") >= 0) {
			$(this).append("("+progress_count+" tasks, "+progress_sum+" story points)");
		}
		else if ($(this).html().indexOf("Fixed") >= 0) {
			$(this).append("("+fixed_count+" tasks, "+fixed_sum+" story points)");
		}
		else if ($(this).html().indexOf("Verified") >= 0) {
			$(this).append("("+verified_count+" tasks, "+verified_sum+" story points)");
		}
	});
}

run();

document.addEventListener("drop", function( event ) {
      alert('document changed');
  }, false);