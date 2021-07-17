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