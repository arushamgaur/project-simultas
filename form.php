<?php
$name = $_POST['name'];
$visitoremail = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$emailform = 'info@simultas.com';
$emailsubject = 'New Form Submission';
$emailbody = "User Name: $name. \n".
             "User Email: $visitoremail. \n".
             "Subject: $subject. \n".
             "User Message: $message. \n";

$to = 'arushamgour771@gmail.com';
$headers = "From $emailfrom \r\n";
$headers .= "Reply-To: $visitoremail \r\n";
email($to,$emailsubject,$emailbody,$headers);
header("Location: contactus.html");
?>