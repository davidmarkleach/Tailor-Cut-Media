//vars
var submitBtn = $('#userSubmit');
var targetRev = $('#userRevenueTarget');
var aov = $('#userAOV');
var totalOrders = $('.ordernumber');
var ctr = $('#ctr');
var cvr = $('.CVR');
var impressions = $('.impressions');
var cpm = $('.CPM');
var cpa = $('.CPA');
var budget = $('.budget');

console.log('ctr is ' + ctr.text());

// what to do on submit
function onSubmit(event) {
	if (event != null) {
		event.preventDefault();
	}
	console.log('hello world');

	// total # of orders
	var userRev = targetRev.val();
	var useraov = aov.val();
	console.log(userRev);
	console.log(useraov);
	totalOrders.text(parseInt(userRev / useraov));
	console.log(totalOrders.text());

	// calc impressions
	var impressionsNeeded = parseFloat(totalOrders.text()) / parseFloat(ctr.val()) / parseFloat(cvr.text());
	// console.log((totalOrders / ctr / cvr));
	console.log(impressionsNeeded);
	impressions.text((parseInt(impressionsNeeded) * 1000).toLocaleString("en-US"));

	// calc total ad spend
	var cpmValue = accounting.unformat(cpm.text());
	var budgetValue = cpmValue / 1000 * parseInt(impressionsNeeded) * 1000;
	console.log(budgetValue);
	budget.text(accounting.formatMoney(budgetValue, "$", 0));

	// calc CPA
	cpaValue = budgetValue / parseInt(totalOrders.text());
	cpa.text(accounting.formatMoney(cpaValue, "$", 2));

}

// listen for submit
submitBtn.on('click', onSubmit);

$(function () {
	$("#slider").slider({
		value: 1.5,
		min: 0,
		max: 3,
		step: .25,
		slide: function (event, ui) {
			$("#ctr").val(ui.value + "%");
			onSubmit();
		}
	});
	$("#ctr").val($("#slider").slider("value") + "%");
});