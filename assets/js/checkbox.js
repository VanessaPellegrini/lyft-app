$(document).ready(function(){
	var rules={'q2[]':{required:true,'minlength':1}}
	$("#form1").validate({'rules':rules});
		
	function hidesubmit(){
	  $("#submitButton").closest("div").hide();
	  $("#q2_0").hide();
	}
	function showsubmit(){
	  $("#submitButton").closest("div").show();
	}
setTimeout(hidesubmit, 0);
setTimeout(showsubmit, 2700);

});