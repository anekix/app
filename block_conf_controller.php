<?php
        
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$months = array("jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec");
for ($i = 0;$i<12;$i++){
    if(isset($_POST[$months[$i]])){
echo $months[$i];
fwrite($myfile,$months[$i]." ");

}
}
    



fclose($myfile);


?>