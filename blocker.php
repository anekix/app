<?php
$myfile = fopen("newfile.txt", "r") or die("Unable to open file!");
$my = fread($myfile,filesize("newfile.txt"));
$tags = explode(' ', $my);
fclose($myfile);

?>