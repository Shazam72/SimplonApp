<?php
require_once 'connect.php';

$req=$bd->query('SELECT * FROM apprenant ORDER BY nom ASC');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/bootstrap.min.css" />
    <link rel="stylesheet" href="../fonts/css/all.css">
    <link rel="stylesheet" href="../css/DIASIM.css">
    <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon">
    <title>DIASIM - Liste des apprenants</title>
</head>
<body>
<input type="checkbox" id="myMenu">
      <div class="side-container d-flex align-items-center flex-column">
        <header>
            <label for="myMenu" id="myMenuCancel"> <i class="fas fa-times"></i> </label>
            <h3>Menu</h3>
        </header>
        <nav>
            <li><a href="">Accueil</a></li>
            <li><a href="">Ajouter un apprenant</a></li>
            <li><a href="">Modifier/Supprimer <br>un apprenant </a></li>
            <li><a href="">Lister les apprenants</a></li>
        </nav>
      </div>
    <div class="main-block">
    <div class="voile"></div>
      <header
        class="container-fluid d-flex justify-content-center align-items-center"
      >
        <label for="myMenu" id="myMenuBtn"> <i class="fas fa-bars"></i> </label>
        <h1 class="d-flex align-items-center flex-column">
          SIMPLON BURKINA <a href="#"><img src="../images/logo.png" alt="" /></a>
        </h1>
      </header>
    <h2>
        Liste des apprenants<br>
        <span><span class="violet">DIA</span><span class="red">SIM</span></span>
        
    </h2>
    <form>
            <table>
                <tr>
                    <td>
                        <input type="text" name="rechercher" id="rechercher" placeholder="Rechercher..." size="20" maxlength="10"/>
                    </td>
                    <td><i class="fas fa-search"></i></td>
                </tr>
            </table>
    </form>
    <table id="table">
        <tr>
            <th>NOM</th>
            <th>PRENOM</th>
            <th>EMAIL</th>
            <th>GENRE</th>
            <th>FORMATION DE BASE</th>
            <th>FORMATION SUIVIE</th>
            <th>VILLE D'ORIGINE</th>
            <th>APPRECIATION</th>
        </tr>
        <?php
        while ($data=$req->fetch()) {
                echo '<tr class="nom">' ;

                echo '<td>'.$data['nom'].'</td>';
                echo '<td>'.$data['prenom'].'</td>';
                echo '<td>'.$data['email'].'</td>';
                echo '<td>'.$data['genre'].'</td>';
                echo '<td>'.$data['formabase'].'</td>';
                echo '<td>'.$data['formasuiv'].'</td>';
                echo '<td>'.$data['villeorigine'].'</td>';
                echo '<td>'.$data['appreciation'].'</td>';
                echo '</tr>';
        }
         ?>
        
    </table>
    <footer>
        <div class="container2">
            <h2><span class="violet">DIA</span><span class="red">SIM</span></h2>
            <img src="../images/favicon.ico" alt="SIMPLON">
        </div>
    </footer>
    </div>
    <script src="../js/DIASIM.js"></script>
</body>
</html>
<?php 
$req->closeCursor(); 
?>