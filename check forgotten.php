<?php
		
		
		require 'config.php';
		
		//get the number to reset the password
		
		$entered_Mobile_number = $_POST['mobileNum'];
		$newPassword = $_POST['newpassword'];
		
		
		function checkNumber()
		{
			
			$result = $mysqli->query( "SELECT Password FROM users WHERE Mobile_Number = '$entered_Mobile_number' ") ;
			
			if($result->num_rows == 0) 
			{
					echo "<script>alert('Number not found please check..!')" ;
			} 
			
			else 
			{
				echo "<script>alert('Number found please enter the new password..!')" ;
			}
			
		}
		
		
		
		$query = "ALTER TABLE users SET Password = '$newPassword' WHERE Mobile_Number = '$entered_Mobile_number' ";
		
		$result = mysqli_query($conn,$query); 
		
		
		/*
		while ($row = mysqli_fetch_array($res)) 
		{
			 
			 
			 $number =  $row['Mobile_Number'];
			 
			 
			 
			 
			 
			 
			 
			 
			if ($number == $entered_Mobile_number)
			{
				
				
				echo "ok";
				
			
			}
			
			
			if ($number != $entered_Mobile_number)
			{
				echo "no";
				
			}
			
			
		
		
			

		}
		
		
		
		
		
		
	/*	
			 if ($row['Mobile_Number'] != $entered_Mobile_number)
				{
				
					echo "<script>alert('This number is not registered yet..!') ;</script>";
					
				}
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 $newPassword = $_POST['newpassword'];
				
				$sql = "ALTER TABLE users SET Password = '$newPassword' WHERE Mobile_Number = '$entered_Mobile_number' " ;
			
				mysqli_query($conn , $sql);
				
				echo "hi";
			 
			 
			 
			 
			 
			 
			 
			 
		
		
		*/
		
		
		
		$conn->close();
				
		
		
		
		
		
		
		
		
		
	



?>