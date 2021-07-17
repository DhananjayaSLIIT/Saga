function validate(){
	 
	var fname, lname, mail, phno ;
	
	
	fname = document.formfeed.fullname.value;
	lname = document.formfeed.lastname.value;
	mail = document.formfeed.email.value;
	phno = document.getElementById('phone').value;
	
	
	
	
	
    if(fname == "" ||lname == "" ||mail == "" ||phno == "" )
    {
		
		alert("Fill all the mandatory fields");
		return false;
		
	}
	if(phno.length == 0){
		alert("Fill all the mandatory fields");
		return false;
	}
	
	if(phno.length != 10){
		alert("Enter valid phone number");
		return false;
	}
	
	if(!phno.match(/^[0-9]{10}$/)){
		
		alert("Enter valid phone number");
		return false;
	}
	
	else{
		
		alert("Feedback submitted successfully");
		return true;
		
	}
}



function submit(){
	
	
	var txt;
	  var r = confirm("Are you sure?");
	  
	  if (r == true) {
		txt = "You pressed OK!";
	  } else {
		txt = "You pressed Cancel!";
	  }
	  document.getElementById("demo").innerHTML = txt;

	
}
	