<?php include('admin_session.php');
?>
<html>
    
    <head>
    <script src="jq.js" type="text/javascript"></script>
    <script>
        
    $(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("fast");
    });
        
        
    $("#ff").click(function(){
        $("#panel1").slideToggle("fast");
    });
    });    
        
    </script>
    <style> 
    #ff,#flip{
    
    padding: 5px;
    //text-align: center;
    background-color: #04B486;
    border: solid 1px #c3c3c3;
    color:white;
    
    
    }
    #panel,#panel1 {
    padding: 5px;
    //text-align: center;
    background-color: rgb(0,136,159);
    border: solid 1px #c3c3c3;
    color:white;
}

#panel,#panel1 {
    padding: 50px;
    display: none;
}
        
#ff:hover,#flip:hover { 
    background-color:red;
}
</style>
    </head>
    <body>
        <div id ='frame1'>
        <input type="button" id ="ff" value="generate report"><br>
        <form id="f1" action="viewer.php" method="post"> 
            <div id="panel1">
            <select id="pickerhtml"  name="select">
            <option>2015</option>  
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            </select>
            <input type="text" id="name">
         <input type="submit" id="ff" value="view report"><br>
        </form>
            
            
            
            </div>
            
        <input type="button" id="flip" value="Manage Links"><br>
        <div id="panel">
        <form action="block_conf_controller.php" method="post" >
        <input type="checkbox" name="jan" value="Bike">January<br>
            <input type="checkbox" name="feb" value="Car">Feburar<br>
            <input type="checkbox" name="mar" value="Bike">March<br>
            <input type="checkbox" name="apr" value="Car">April<br>
            <input type="checkbox" name="may" value="Bike">May<br>
            <input type="checkbox" name="jun" value="Car">June<br>
            <input type="checkbox" name="jul" value="Bike">July<br>
            <input type="checkbox" name="aug" value="Car">August<br>
            <input type="checkbox" name="sep" value="Bike">September<br>
            <input type="checkbox" name="oct" value="Car">October<br>
            <input type="checkbox" name="nov" value="Bike">November<br>
            <input type="checkbox" name="dec" value="Car">December<br>
            <input type="submit"  value="save" ></form>
        </div>
        

    </body>
    
</html>