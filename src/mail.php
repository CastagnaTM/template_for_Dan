<?php 
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['email'])) 
    die("Please make sure that Name and Email fields are filled out");

if($_POST) {
    
    http_response_code(200);
    $subject = $_POST['subject'];
    $to = "castagna.tm@gmail.com";
    $from = $_POST['email'];
    $message = $_POST['message'];

    $headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
    mail($to, $subject, $message, $headers);

    echojson_encode(array("sent" => true));


} else {

    echojson_encode(["sent" => false, "message" => "Something went wrong"]);

}
// $name = $_POST['name'];


// $message = $_POST['message'];
// $formcontent = "From: $name \n Message: $message";

// $mailheader = "From: $email \r\n";
// mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
// echo "Thank You!";
?>