$(function(){
	/**
	 * 异步加载  意思就是用的数据才会去后台加载数据信息
	 * 
	 * 注意事项
	 *    发送请求url访问后台 tree自带一个参数id
	 *    第一次发送请求url 自带参数id为空
	 *    第二次节点加载完毕，触发节点折叠会发送请求url 
	 *    自带参数id不能空
	 *    
	 *    tree id值必须唯一
	 * */
	$("#et").tree({
		url : contextPath + "/tree/tree",
		animate : true,
		lines : true,
		queryParams : {
			etoak : "et1703"
		},
		onClick : function(node){
			console.log(node.id + " |" + node.text);
			
			var url = node.attributes.url
			console.log(url);
		}
	});
	
});