<?php
session_start(); // Starting Session
$error=''; // Variable To Store Error Message
if (isset($_POST['submit'])) {
if (empty($_POST['username']) || empty($_POST['password'])) {
$error = "Username or Password is invalid";
}
elseif($_POST['emp']=="Employee")
{
// Define $username and $password
$username=$_POST['username'];
$password=$_POST['password'];
// Establishing Connection with Server by passing server_name, user_id and password as a parameter
$conn = new mysqli("localhost", "kshitij", "root","company");
// To protect MySQL injection for Security purpose
$username = stripslashes($username);
$password = stripslashes($password);
$username = $conn->real_escape_string($username);
$password = $conn->real_escape_string($password);
// Selecting Database
// SQL query to fetch information of registerd users and finds user match.
$query =$conn->query("select * from login where password='$password' AND username='$username'");
$rows = $query->num_rows;
if ($rows == 1) {
$_SESSION['login_user']=$username; // Initializing Session
header("location: employee.php"); // Redirecting To Other Page
} else {
$error = "Username or Password is invalid";
}
$conn->close(); // Closing Connection
}
elseif($_POST['emp']=="Admin")
{
// Define $username and $password
$username=$_POST['username'];
$password=$_POST['password'];
// Establishing Connection with Server by passing server_name, user_id and password as a parameter
$conn = new mysqli("localhost", "kshitij", "root","company");
// To protect MySQL injection for Security purpose
$username = stripslashes($username);
$password = stripslashes($password);
$username = $conn->real_escape_string($username);
$password = $conn->real_escape_string($password);
// Selecting Database
// SQL query to fetch information of registerd users and finds user match.
$query =$conn->query("select * from admin where password='$password' AND username='$username'");
$rows = $query->num_rows;
if ($rows == 1) {
$_SESSION['login_user']=$username; // Initializing Session
header("location: admin.php"); // Redirecting To Other Page
} else {
$error = "Username or Password is invalid";
}
$conn->close(); // Closing Connection
}
}
?>