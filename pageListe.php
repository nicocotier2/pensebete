<?php
    require_once 'utils/common.php';
?>
<link rel="stylesheet" href="style/header.css">
<link rel="stylesheet" href="style/footer.css">

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liste - pensebete </title>
  <link rel="stylesheet" href="style/pageListe.css">
  <link rel="stylesheet" href="style/Header.css">
  <link rel="stylesheet" href="style/footer.css">
  <?php include 'partials/header.php'; ?>
</head>
    <body>
        <!-- affichage de la page Jeu -->
        <div class="pageJeu">
            <!--affichage du titre de la page -->
            <div class="titre"> 
                <h1><?php echo "bienvenue sur vos projets"?> </h1>
            </div>
            <button id="add-rectangle-btn">Ajouter un pense bête</button>
            <button id="rebuild-rectangles-btn">mettre à jour les listes</button>
            <div id="rectangle-container"></div>
            <script src="script/main.js"></script>
        </div>
        <?php require_once SITE_ROOT . 'partials/footer.php'; ?>
    </body>
</html>