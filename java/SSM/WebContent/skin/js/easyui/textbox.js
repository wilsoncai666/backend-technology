$(function(){
	//自定义效验
	$.extend($.fn.validatebox.defaults.rules, {
		lenScope : {
			/**
			 * value表示获取组件输入的值信息
			 * param表示定义效验名称（lenScope）的参数 
			 * 调用方式：lenScope[5,10]
			 * 可以使用param[0]获取5
			 *    使用param[1]获取10
			 * 
			 * validator函数返回true表示通过  false表示不通过
			 * message validator函数返回false时触发message
			 * message可以使用{0}获取参数下标为0的数据
			 * 例如lenScope[5,10]
			 * 	  {0}获取参数5
			 *    {1}获取参数10
			 * */
			validator : function(value,param){
				var len = value.length;
				return len >= param[0] && len <= param[1];
			},
			message : "大于等于{0}，小于等于{1}"
		}
	}); 
	
	//初始化组件对象
	$("#et").textbox({
		width : 200,
		height : 40,
		iconCls : 'icon-lock',
		required : true,    //必填项 不能为空
		missingMessage : "必填项,不能为空!",
		validType : "lenScope[5,10]"
		//invalidMessage : "请输入正确的邮箱格式!"
	});
	
	/**
	 * easyui调用方法必须先初始化对象
	 * 
	 * 第一个参数表示调用方法
	 * 第二个参数表示给方法赋值   
	 * 	文档中参数属性出现none表示无参数，直接调用方法即可
	 * */
	//$("#et").textbox('setValue',"etoak-et1703");
	
});

//赋值
function setVal(){
	$("#et").textbox("setValue","etoak");
}

//取值
function getVal(){
	var v = $("#et").textbox("getValue");
	alert(v);
}

//禁用
function disable(){
	$("#et").textbox("disable");
}

//启用
function enable(){
	$("#et").textbox("enable");
}

//重置
function reset(){
	$("#et").textbox("reset");
}