$(function(){
	
	$("#et").calendar({
		
		fit : true,
		/*formatter : function(date){
			return date.getDate() + "@@###";
		}*/
		onSelect : function(date){
			alert(date.getFullYear() + 
					"-" + 
					(date.getMonth() + 1) + 
					"-" + 
					date.getDate());
		}
	
	});
	
});