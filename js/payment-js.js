
function validatepayment()
{
	
	if(document.payment.cardHolderName.value == null && document.payment.cardHolderName.value =="" )
	{
				
		alert('Card Holder Name is required..!');
		return false;
				
	}
	
	
	
	//cardholder name validate
	  
     var letters = /^[A-Za-z]+$/;

     if(document.payment.cardHolderName.value.match(letters) && document.payment.cardHolderName.value.match(letters) )
     {
      
     }

     else
     {
		alert('Name should contain alphabet characters only..!');
		return false;
     }
	 
	 
	 
	 //card number
	 
	 var cardNumb = document.payment.cardNumber.value;
		
		if(cardNumb=="" || cardNumb==null)
		{
			alert("please Enter the Card Number");
			
			return false;
		}
		
		
		if(isNaN(cardNumb))
		{
			alert("Enter the valid card Number(Like : **** **** **** ****)");
			
			
			
			return false;
			
		}
		
		
			if(cardNumb.length !=16)
			{
			alert("Card Number have 16 Numbers, Check agian..!");
			
			return false;
			}


	 
	 
	 //exp month
	 
	 var exdate = document.payment.expDate.value;
	 
	 if (exdate == null || exdate == "")
	 {
		 
		 alert("Enter the expire date..!");
		 return false;
		 
	 }
	  
	  
	  
	 
		if(isNaN(exdate))
		{
			alert("Enter the valid expire date(Like : 1 to 31)");
			
			
			
			return false;
			
		}
		
		
			if(exdate <= 0 || exdate > 31)
			{
			alert(" It must be a day of a month..!");
			
			return false;
			}
	  
	
	//exp month
	
	 var expMonth = document.payment.expMonth.value;
	 
	 if (expMonth == null || expMonth == "")
	 {
		 
		 alert("Enter the expire month..!");
		 return false;
		 
	 }
	  
	  
	  
	 
		if(isNaN(expMonth))
		{
			alert("Enter the valid expire date(Like : 1 to 12)");
			
			
			
			return false;
			
		}
		
		
			if(expMonth <= 0 || expMonth > 12)
			{
			alert(" It must be a value from 1 to 12 ..!");
			
			return false;
			}
	  
	
	
		// cvv validate
		
		
		
		var cvv = document.payment.cvv.value;
	 
	 if (cvv == null || cvv == "")
	 {
		 
		 alert("Enter the CVV code..!");
		 return false;
		 
	 }
	  
	  
	  
	 
		if(isNaN(cvv))
		{
			alert("Enter the valid CVV code(Like : 123)");
			
			
			
			return false;
			
		}
		
		
			if(cvv <= 0 || cvv > 999)
			{
			alert("Check your card and try agian..!");
			
			return false;
			}
	  
     
	

}