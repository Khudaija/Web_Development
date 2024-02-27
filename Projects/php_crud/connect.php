<?php

$con = new mysqli('localhost', 'root', '', 'crud');

if(!$con){
    // echo "Connection Successfully";
    die(mysqli_error($con));
}
// else{
//     die(mysqli_error($con));
// }

?>