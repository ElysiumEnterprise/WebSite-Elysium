<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';

    $nome=$_POST['nome'];
    $email=$_POST['email'];
    $msg=$_POST['msg'];

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->CharSet='UTF-8';
        $mail->isSMTP();
        $mail->Host       = 'smtp.elasticemail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'elysium.business01@gmail.com';
        $mail->Password   = '8571494A2843B3D1802C8A1A2B1E8C2D037C';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    
        //Recipients
        $mail->setFrom('elysium.business01@gmail.com', 'Suporte Técnico Elysium');
        $mail->addAddress('elysium.business01@gmail.com', 'Admin Elysium');     //Add a recipient
        $mail->addReplyTo($email, $nome);
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Mensagem de Usuário';
        $mail->AddEmbeddedImage('../img/logo-nome.png','logo_ref');
        $body="<img src='cid:logo_ref'><br>
                <h1>Mensagem de Usuário</h1><br>
                Nome: ".$nome."<br>".
                "Email: ".$email."<br>".
                "Mensagem: ".$msg;
        $mail->Body    =  $body;
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    
        $mail->send();
        header('Location:../html/thanks.html');
    } catch (Exception $e) {
        echo "Erro no envio da mensagem. Mailer Error: {$mail->ErrorInfo}";
    }
    
    die();
?>