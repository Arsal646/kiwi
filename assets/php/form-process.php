<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$message = '
<html>
<head>
  <title>Best Fixed Investments in New Zealand</title>
</head>
<body>
  <p>Enquiry received for Best Fixed Investments in New Zealand KIWI Term Deposits:</p>
  <table>
    <tr>
      <th>Name</th><td>'.$_POST["name"].'</td>
    </tr>
    <tr>
      <th>Phone</th><td>'.$_POST["phone"].'</td>
    </tr>
    <tr>
      <th>Email</th><td>'.$_POST["email"].'</td>
    </tr>
    <tr>
      <th>Investment Amount</th><td>'.$_POST["investment-amount"].'</td>
    </tr>
    <tr>
      <th>When to invest</th><td>'.$_POST["when-to-invest"].'</td>
    </tr>
  </table>
</body>
</html>
';
$to_email = 'info@kiwitermdeposits.com';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= "From:  Website <info@kiwitermdeposits.com> \r\n" .
            'Reply-To: '.  $to_email . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

$subject = 'Enquiry from KIWI Term Deposits from ' . $_POST['name'];
$success = mail($to_email,$subject,$message,$headers);
if (!$success) {
    $errorMessage = error_get_last()['message'];
	echo $errorMessage;
	die();
}
echo "success";