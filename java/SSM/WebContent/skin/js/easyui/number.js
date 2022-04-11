$(function(){
	
	$("#et").numberbox({
		
		required : true,
		precision : 4,
		min : 10,
		max : 1000000000000,
		//decimalSeparator : "@",
		//groupSeparator : "!"
		prefix : "$",
		suffix : "$"
		
	});
	
});