$(document).ready(function() {
		
		$('.payment').click(function(){
			binding();
		 });
	   
	  var flag = true
		var username = getQueryString('username');
		var code = getQueryString('code');
        var openid = "";
		if(code == null){
			window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbba4b3d497457d6b&redirect_uri=http://www.leagoohealth.com/wxdd/wechat.html?username="+username+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
		}else{
			 getHeadImg();
		}


	  	/**
		 * 用JS获取地址栏参数的方法
		 * @param name
		 * @returns {null}
		 * @constructor
		 */
		function getQueryString(name) {
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		    var r = window.location.search.substr(1).match(reg);
		    if (r != null) {
		        return unescape(r[2]);
		    }
		    return null;
		}

	
       
	    function getHeadImg() {
	    
	            var datail = {"username":username,"code":code}
		       	$.ajax({
			        type: "POST",
			        contentType: 'application/json;charset=UTF-8',
			        url: 'http://leagoohealth.com:18080/leagoo-health-manager/wechatuserinfo/getHeadImg',
		        	data: JSON.stringify(datail),
			        dataType: 'json',
			        success: function(data) {
			        	var isok = data.code;
			        	var headimgurl = data.data.headimgurl;
			        	var nickname = data.data.nickname;
						openid=data.data.openid;
			        	if(isok == 200){
			        		$('.uesename img').attr("src",data.data.headimgurl);
			        		$('.uesename p').text(data.data.nickname);
			        	}else {
			        		alert(data.msg)
			        	}
		            },
		            error: function (data) {
		                alert('获取用户失败，请重新扫码！')
		            }
		        });
				
	    }
		
		
		function binding() {
				if (flag) {
					var datail = {"username":username,"openid":openid}
		       	$.ajax({
			        type: "POST",
			        contentType: 'application/json;charset=UTF-8',
			        url: 'http://leagoohealth.com:18080/leagoo-health-manager/wechatuserinfo/binding',
		        	data: JSON.stringify(datail),
			        dataType: 'json',
			        success: function(data) {
			        	var isok = data.code;
			        	if(isok == 200){
			        		alert("绑定成功");
			        		flag = false;
			        		$('.bind').text('绑定成功');
			        	}else {
			        		alert(data.msg)
			        	}
		            },
		            error: function (data) {
		                alert('绑定失败，请重新扫码！')
		            }
		        });
				}
	          
				
	    }


	});
 
