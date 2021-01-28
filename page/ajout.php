<?php
require_once 'connect.php';
$nom=$_POST['nom'];
$prenom=$_POST['prenom'];
$email=$_POST['email'];
$formasuiv=$_POST['formasuiv'];
$formabase=$_POST['formabase'];
$genre=$_POST['genre'];
$appreciation=$_POST['appreciation'];
$ville=$_POST['ville'];
$notObligated=[$formabase,$genre,$appreciation,$ville];
$obligated=[$nom,$prenom,$email,$formasuiv];



$resultTestForObligatedValue;
$resultTestForNotObligatedValue;

foreach($obligated as $obligatedElement){
    if (isset($obligatedElement))
        $resultTestForObligatedValue=0;
    else $resultTestForObligatedValue=1;
}

foreach($notObligated as $notObligatedElement){
    if (isset($notObligatedElement)) {
        $resultTestForNotObligatedValue=0;
    } else $resultTestForNotObligatedValue=1;
}





if($resultTestForNotObligatedValue){
    
}






if($resultTestForObligatedValue){
    $req=$bd->prepare('SELECT * FROM apprenant WHERE nom=?,prenom=?,email=?,formasuiv=? ORDER BY nom ASC');
     $req->execute([$nom,$prenom,$email,$formasuiv]);
     if($req->fetch())
         echo 'Cet apprennant a déja été enregistré';
     else {



        $req=$bd->prepare('INSERT INTO apprenant(nom,prenom,email,formasuiv,genre,formabase,villeorigine,appreciation) VALUES (?,?,?,?,?,?,?,?)');
}


// if (isset($_POST['nom'])&&isset($_POST['prenom'])&&isset($_POST['formasuiv'])&&isset($_POST['email'])) {
//     $req=$bd->prepare('SELECT * FROM apprenant WHERE nom=?,prenom=?,email=?,formasuiv=? ORDER BY nom ASC');
//     $req->execute([$_POST['nom'],$_POST['prenom'],$_POST['email'],$_POST['formasuiv']]);
//     if($req->fetch())
//         echo 'Cet apprennant a déja été enregistré';
//     else {
           



//         $req=$bd->prepare('INSERT INTO apprenant(nom,prenom,email,formasuiv,genre,formabase,villeorigine,appreciation');
//     }
// } else {
//     # code...
// }

?>