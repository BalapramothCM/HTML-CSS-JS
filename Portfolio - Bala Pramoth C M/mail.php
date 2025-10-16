<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["mail"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Your email where you want to receive messages
    $to = "cm.balapramoth@gmail.com";
    $subject = "A new portfolio Contact Form Message from $name";

    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
