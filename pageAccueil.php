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
    <section>
      <div class="conteneurTitre">
        <h2> Grâce à notre outil pensebete, vous n'aller plus perdre la tête</h2>
      </div>
      <div class="conteneur">
        <p classe ="titre">
          En effet, grâce à sa prise en main facile, vous n'aller plus vous en faire
          en ce qui concerne votre organisation. Que ce soit pour un projet web ou de dev Vr,
          nous vous laissons vous organiser comme vous le souhaitez. 
        </p>
        <p classe ="titre">
          Ainsi, vous pourrez créer et modifier vos checkliste pour chacunes des étapes de vos projets afin de ne pas vous perdre. Un system de
          priorité des tâches vous est proposé afin de vous repérer dans vos actions à accomplir. Vous pourrez aussi trier vos tickets afin
          de mieux vous repérer.  
        </p>
      <div>
      </section>
  </main>
  <footer><?php include 'partials/footer.php'; ?></footer>
</body>
</html>
