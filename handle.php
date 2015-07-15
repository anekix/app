<?php
//start the session to get username(which is our userid) 
session_start();
$userid=$_SESSION['login_user'];

// associative array structure to hold json the data passed from javascript file(mm.js)
$new_data=array();

//populate the $new_data array

foreach ($_POST as $key => $value)
        $new_data[ $key ] = $value; 

//establish a link to database

$link = mysqli_connect("localhost", "kshitij", "root", "company");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

foreach($new_data as $key => $value){
$sql = "UPDATE userdata SET $key='$value' WHERE id=2";

if(mysqli_query($link, $sql)){
   echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
}
// Close connection
mysqli_close($link);
?>