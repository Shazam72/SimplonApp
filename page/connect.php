<?php
try {
    $bd=new PDO('mysql:hostname=localhost; dbname=simplon; charset=utf8', 'root','');
} catch (PDOException $e) {
    echo 'Erreur'.$e->getMessage();
}
?>