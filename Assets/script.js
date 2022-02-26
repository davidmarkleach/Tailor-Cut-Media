//vars
var submitBtn = $('#userSubmit');
var targetRev = $('#userRevenueTarget');
var aov = $('#userAOV');
var totalOrders = $('.OrderNumber');



// what to do on submit
function onSubmit(event) {
	event.preventDefault();
	console.log('hello world');

	var userRev = targetRev.val();
	var useraov = aov.val();
	console.log(userRev);
	console.log(useraov);
	totalOrders.text(userRev / useraov);
	console.log(totalOrders.text());

}

// listen for submit
submitBtn.on('click', onSubmit);