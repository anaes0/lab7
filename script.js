//1.Create form to get user details 

function submitDetails(){
	//preventDefault() prevents default browser behaviour - page refresh
	event.preventDefault();
	var userFname = document.getElementById("userFname").value;
	var userLname = document.getElementById("userLname").value;
	var userEmail = document.getElementById("userEmail").value;
	var userPhone = document.getElementById("userPhone").value;
	submitOK = "true";
	
	//2. Hide form and button + Display message
	alert( userFname +" "+ userLname +", thank you for your details. We will be in touch via "+userEmail+ " or "+userPhone+" shortly.");
	hide();
	if (submitOK == "false") {
		return false;
	}
}

//hide function to hide form + button after submission
function hide(){
document.getElementById("form").style.display = "none";
document.getElementById("button").style.display = "none";
}