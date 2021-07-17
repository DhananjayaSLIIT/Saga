
	
	function validateLogIn()
	{
	
	//Mobile number validation


		var a = document.LogForm.mobileNum.value;
		
		if(a=="" || a==null)
		{
			alert("Please Enter the number that you used to register..!");
			
			return false;
		}
		
		
		if(isNaN(a))
		{
			alert("Enter the valid Mobile Number (Like : 077123456)");
			
			
			
			return false;
			
		}
		
		
		if(a.length !=10)
		{
			alert(" Your Mobile Number must have 10 Integers");
			
			return false;
		}
		
		
		// Password required
		
		if(document.LogForm.password.value == null || document.LogForm.password.value == "")
		{
				
			alert('Password is required..!');
			return false;
				
		}
		
	
	//Privacy policy required
	
	
		if(!this.LogForm.robot.checked)
		{
			alert('Confirm that you are not a robbot..!');
			return false;
		}
		
		
		
		
	
			
			
	}
	
	
	
	
	
	
	
	
	