<?php
require_once './utils/common.php';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accueil - pensebete </title>
  <link rel="stylesheet" href="style/pageAccueil.css">
  <link rel="stylesheet" href="style/Header.css">
  <link rel="stylesheet" href="style/footer.css">
  <?php include 'partials/header.php'; ?>
</head>
<body>
  <main>
    <section>
    <div class="conteneurTitre">
      <h1>Bienvenue sur PenseBete, </h1>
    </div>
      <div class="conteneur">
        <p class="titre"> 
          Votre outil pour ne plus perdre la tête.
        </p>
      </div>
    </section>
  
  </main>
  <footer><?php include 'partials/footer.php'; ?></footer>
</body>
</html>
