<?php
include('login.php'); // Includes Login Script

if(isset($_SESSION['emp_user'])){
header("location:profile.php");
}
if(isset($_SESSION['admin_user'])){
header("location: admin_profile.php");
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Web app Login</title>
<!--<link href="style.css" rel="stylesheet" type="text/css">-->
</head>
<body>
<div id="login">
<h2>Login Form</h2>
<form action="" method="post">
<label>UserName :</label>
<input id="name" name="username" placeholder="username" type="text">
<label>Password :</label>
<input id="password" name="password" placeholder="**********" type="password">
<br><label>Employee Type</label>
<select name="emp" id="emp">
<option>Admin</option>
<option>Employee</option>
<input name="submit" type="submit" value=" Login ">
<span><?php echo $error; ?></span>
</form>
</div>
</body>
</html>
