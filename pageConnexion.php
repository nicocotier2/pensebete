<?php
require_once './utils/common.php';
require_once './utils/database.php';
$pdo = connectToDbAndGetPdo();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Connexion</title>
  <link rel="stylesheet" href="style/pageConnexion.css">
  <link rel="stylesheet" href="style/Header.css">
  <link rel="stylesheet" href="style/footer.css">
</head>
<body>
  <?php include 'partials/header.php'; ?>
  <main>
<div class="conteneurFormulaire">
<?php 

if (!empty($_POST)) {

    if (isset($_POST['email']) && isset($_POST['passe'])) {
        $pdoStatement = $pdo->prepare('SELECT id,pseudo,mdp FROM user WHERE mail = :email AND mdp = :mdp');
        $pdoStatement->execute([
            ':email' => $_POST['email'],
            ':mdp'   => hash('sha256', $_POST['passe']),
        ]);
        $user = $pdoStatement->fetch();

        if ($user) {
            $_SESSION['userId'] = (int) $user->id;
        }
    }
}

if (isset($_SESSION['userId'])) {
    $pdoStatement = $pdo->prepare('SELECT pseudo FROM user WHERE id = :id');
    $pdoStatement->execute([
        ':id' => $_SESSION['userId']
    ]);
    $user = $pdoStatement->fetch();

    if ($user) {
        $message_connexion = 'Connecté en tant que ' . $user->nom;
        header('Location: pageAccueil.php');
        exit;
    } 
}
?>
  <div class="conteneur">
    <h1 class="title">Connexion</h1>
    <form action="" method="post">
      <label for="username" class="sousTitre">Email</label>
      <input type="text" name="email" id="email"  required>
      <label for="password" class="sousTitre">Mot de passe</label>
      <input type="password" name="passe" id="passe" required>
      <button type="submit" name="submit">Connexion</button>
      <div class="erreur_php">
        <p>
            <?php
            if (isset($message_connexion)) {
                echo $message_connexion;
            } elseif (isset($_POST['email']) && isset($_POST['passe']) && !isset($message_connexion)) {
                echo "Mot de passe ou email incorrect";
            }
            ?>
        </p>
    </div>
    </form>
  </div>
  </main>
  <footer><?php include 'partials/footer.php'; ?></footer>
</body>
</div>
</html>