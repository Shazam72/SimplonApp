<?php
require_once 'connect.php';
error_reporting(0);
$userIn=$_POST['id_userIn'];
$userUp=$_POST['id_userUp'];

$mdpIn=$_POST['id_mdpIn'];
$mdpUp=$_POST['id_mdpUp'];

$email=$_POST['email'];


if ( isset($userIn)&&!empty($userIn) && isset($mdpIn)&&!empty($mdpIn)) {
    $sql='SELECT * FROM admins WHERE username=:username';
    $req=$bd->prepare($sql);
    $req->execute(['username'=>$userIn]);
    $users=$req->fetchAll();
    if (count($users)>0) {
        foreach($users as $user){
            if (password_verify( $mdpIn ,$user['mdp'])){
                $rep='catchedInDB';
            } else $rep='PasswordNotGood';
        }
        echo $rep;
    } else {
        echo 'notCatchedInDB';
    }
}

if ( isset($userUp)&&!empty($userUp) && isset($mdpUp)&&!empty($mdpUp) ) {
    $sql='SELECT * FROM admins WHERE username=:username AND email=:email';
    $req=$bd->prepare($sql);
    $req->execute(['username'=>$userUp,'email'=>$email]);
    $users=$req->fetchAll();
    if (count($users)>0)
        $rep='alreadyInDB';
    else {
        $sql='INSERT INTO admins(username,mdp,email) VALUES (:username,:mdp,:email)';
        $req=$bd->prepare($sql);
        $req->execute(['username'=>$userUp,'mdp'=>password_hash($mdpUp,PASSWORD_DEFAULT),'email'=>$email]);
        $rep='userSaved';
    }
    echo $rep; 
}