// for password miss match span message

var check = function() 

{
  if (document.getElementById('password').value ==document.getElementById('confirm_password').value)
	{
		document.getElementById('message').style.color = 'green';
		document.getElementById('message').innerHTML = 'Password is matching';
	
		 
	} 
  
  
  else 
	  {
		document.getElementById('message').style.color = 'red';
		document.getElementById('message').innerHTML = 'Password is not matching';
		

	  }
	  
}
		

//Full validation JS


function validateForm()  
{


	// Fname & Lname Validation
	
	
	if(document.RegForm.txtlname.value == null && document.RegForm.txtfname.value == null && document.RegForm.txtlname.value =="" && document.RegForm.txtfname.value == "")
	{
				
		alert('Name is required..!');
		return false;
				
	}
	
	

       
     var letters = /^[A-Za-z]+$/;

     if(document.RegForm.txtlname.value.match(letters) && document.RegForm.txtfname.value.match(letters) )
     {
      
     }

     else
     {
		alert('Name should contain alphabet characters only..!');
		return false;
     }
	  
	  
	  
	
     
     



	//Mobile number validation


		var MobileNumber = document.RegForm.mobile.value;
		
		if(MobileNumber=="" || MobileNumber==null)
		{
			alert("please Enter the Contact Number");
			
			return false;
		}
		
		
		if(isNaN(MobileNumber))
		{
			alert("Enter the valid Mobile Number(Like : 077123456)");
			
			
			
			return false;
			
		}
		
		
			if(MobileNumber.length !=10)
			{
			alert(" Your Mobile Number must have 10 Integers");
			
			return false;
			}









	//e-mail validation


	
	var x=document.RegForm.email.value;
	
	var atposition=x.indexOf("@");  
	
	var dotposition=x.lastIndexOf("."); 
	
	
	if ( x == null || x=="")
		{  
		  alert("Email can't be blank");  
		  return false;  
		}
	
	if(atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
		{  
		  alert("Please enter a valid e-mail address");  
		  return false;  
		}






	// DOB validate 
	
	if (document.RegForm.dob.value == null || document.RegForm.dob.value == "")
	{
		
		alert('Date of birth is required..!');
		return false;
		
	}
	
	
	




	//password matching and required 
	
	if(document.RegForm.password.value == null || document.RegForm.password.value == "")
	{
				
		alert('Password is required..!');
		return false;
				
	}
	
	  
	if (document.getElementById('password').value != document.getElementById('confirm_password').value)
	{
		
		alert("Passwords do not match.");
		 return false;
	}

	



	
	
	
	//Privacy policy required
	
	
	if(!this.RegForm.privacy.checked)
	{
		alert('You must agree to the terms first.');
		return false;
	}

		
}  




