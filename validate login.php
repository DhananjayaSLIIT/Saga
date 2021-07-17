<?php

require 'config.php';





	// Define $mobileNumber and $password
	$mobile = $_POST['mobileNum'];
	$password = $_POST['password'];
	
	

	
	// Get the password to the current number
	
	$query = "SELECT Password FROM users WHERE Mobile_Number = '$mobile'  ";

	$result = mysqli_query($conn,$query); 
	
	
	$assingedPassword = 'abc';
	
	
	while ($row = mysqli_fetch_array($result)) 
	{
		 
       $assingedPassword =  $row['Password'];

	}
	
	
	
	
	
	// Check wether the user is a admin or a customer
	
	
	if($assingedPassword==$password)
	{
		if($mobile=="0774809190" && $password=="2#harshaM")
		{
			header("location: admin pannel.html");
			
		}
		
		else
		{
			header("location: food.php");
			
		}
		
		
	}
	
	else 
	{
		
		echo "<script> alert('Please register or check the login details..!'); </script> ";
		
		
	}
	
	
	
	
	$conn -> close();

?>