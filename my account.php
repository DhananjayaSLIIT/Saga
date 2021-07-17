<?php

	require 'config.php';
	
	
	$Fname = $_POST['txtfname'];
	
	$Lname = $_POST['txtlname'];
	
	$Gender = $_POST['gender'];

	$Number = $_POST['mobile'];
	
	$email = $_POST['email'];
	
	$dob = $_POST['dob'];
	
	$password = $_POST['password'];
	
	
	
	$Sql = "INSERT INTO users ( Mobile_Number, First_Name, Last_Name, Sex, e_mail, Date_of_birth, Password ) 
			
				VALUES ('$Number', '$Fname', '$Lname', '$Gender', '$email' , '$dob' , '$password') "  ;
			
			
		if($conn -> query ($Sql))
		{
			
			echo "<script> alert  ('Welcome to saga eats..!') </script>";
			
		}
		else
		{
			
			echo "<script> alert  ('Register error..!') </script>";
			
		}

		
		$conn -> close();

?>



<html>

	<head>
	
		<title> My Account </title>
		
		<link rel ="stylesheet" type="text/css" href= "css/myaccount.css"> 		</link>
		<script src="js/my account-js.js"> </script>
		
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		
	
	<head>
	
	<body>
	
	
		
			<div class ="topnav">
					
						<div class="mainLogo">
							
							<a href="home.html" > <img src="img/saga-eat.png"> </a>
							
						</div>
						
						
						
						<ul class="topnavlist">
						
							<li class="active">	<a href="my account.php"> My Account </a>  </li>
							
							&nbsp &nbsp
							
							<img src="img/myacclogo.png" alt="Avatar" class="avatar">
							   
							 
						</ul>
			
						
					
		
		</div> 
		
		
			<div class="container">
			
				<div class="outer">
			
				<div class="details">
				
					<br>

				
				<div class="form_div_left">
				
							<form class="form1" method ="post">   
												
							<div><h2 align="center"> Update Information </h2></div>
							
							<br><hr>
							
							<br>
							
							<label>First Name
							<input type="text" name="txtlname" required pattern=".*[a-zA-Z]" /> </label>  <br><br>
							
							<label>Last Name
							 <input type="text" name="txtfname" required pattern=".*[a-zA-Z]"/>  </label><br><br>
							 
							 <label>Old Password
							
							<input name="password" type="password" onkeyup='check();'  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,16}"/>
							
							</label />
							
							<br/><br/>
							 
							<label>New Password
							
							<input name="password" id="password" type="password" onkeyup='check();'  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,16}"/>
							
							</label />
							
							<br><br>
												
							<label>Re-enter Password
							<input type="password"  id="confirm_password"  onkeyup='check();' /></label><br/>
							
							<span id='message'></span>
							
							<br><br>
							<label>Update Address</br></br>
							<textarea type="textarea" rows="8" cols="50"  name="address" ></textarea></label> </br></br>
							
							<label >Email Address
							<input type="text" name="emailAddress" pattern="[a-zA-Z0-9._%$-]+@+[a-zA-Z0-9]+\.[a-z]{2,3}" value="<?php $query = $mysqli->query("SELECT e_mail FROM users"); ?> "/>  </label> <br><br>
							
							<label>Mobile Number<br/><br/> 
							<input class="mob_num" name="mobile" required pattern="[0-9]{10}" /> </label> <br><br>
													
							
							
											
							<br><br> 
							
							
							
							<a href="my account.html"><button>Save Changes</button> </a>
						
						
						
						
						</form>  
						
													
				
				
			</div>
			
						<div class="foot">
						<footer> <font class="copyright"> Copyright 2019 © SAGA. All Rights Reserved. &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <br> <br><a href="about us.html" > About Us</a>	&nbsp &nbsp <a href="feedback.html" > Feedback</a>	&nbsp &nbsp <a href="contactus.html" > Contact Us</a>
															
															 										
																					 										
									<div class="social">
															
											<a href="www.fb.com"><img src="img/fb.png"> </a>
											<a href="www.instagram.com"><img src="img/insta.png"> </a>
											<a href="www.twitter.com"><img src="img/twitter.png"> </a>
											<a href="www.whatsapp.com"><img src="img/whatsapp.png"> </a>
											<a href="www.gmail.com"><img src="img/gmail.png"> </a>
																
																
									</div>		
	
						</footer>
						
						
			</div>
			
		</div>
			
								
			

			
		</div>
		
		
		
			
	</body>

			

</html>
