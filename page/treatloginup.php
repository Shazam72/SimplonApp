<?php


require_once 'connect.php';
if (count($_POST)==2) {
    $username=$_POST['username'];
    $mdp=$_POST['mdp'];

    if ( isset($username)&&!empty($username) && isset($mdp)&&!empty($mdp)) {
            $sql='SELECT * FROM admins WHERE username=:username';
            $req=$bd->prepare($sql);
            $req->execute(['username'=>$username]);
            $users=$req->fetchAll();
            if (count($users)>0) {
                foreach($users as $user){
                    if (password_verify( $mdp ,$user['mdp'])){
                        $rep='founded';
                    } else $rep='PasswordNotGood';
                }
                echo $rep;
            } else {
                echo 'notCatchedInDB';
            }
        }
    
} elseif (count($_POST)==4) {
    $username=htmlspecialchars($_POST['username']);
    $mdp=htmlspecialchars($_POST['mdp']);
    $email=htmlspecialchars($_POST['email']);
    $mdp_confirm=htmlspecialchars($_POST['mdp_confirm']);
        
    if (isset($mdp)&&!empty($mdp) && isset($mdp_confirm)&&!empty($mdp_confirm) && $mdp_confirm!=$mdp) {
        exit('mdpNotConfirmed');
    } elseif (isset($username)&&!empty($username) && isset($mdp)&&!empty($mdp) && isset($email)&&!empty($email)) {
        $sql='SELECT * FROM admins WHERE username=:username AND email=:email';
        $req=$bd->prepare($sql);
        $req->execute(['username'=>$username,'email'=>$email]);
        $users=$req->fetchAll();
        if (count($users)>0)
            $rep='alreadyInDB';
        else {
            $sql='INSERT INTO admins(username,mdp,email) VALUES (:username,:mdp,:email)';
            $req=$bd->prepare($sql);
            $req->execute(['username'=>$username,'mdp'=>password_hash($mdp,PASSWORD_DEFAULT),'email'=>$email]);
            $rep='userSaved';
        }
    }
    
    echo $rep; 
} else {
    echo 'error';
}
