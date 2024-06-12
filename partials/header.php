<?php
require_once './utils/common.php';
require_once './utils/database.php';
$pdo = connectToDbAndGetPdo();
?>

<div class="header">
    <a href="#default" class="logo">
        <?php
        if (isset($_SESSION['userId'])) {
            $userID = $_SESSION['userId'];
            $pdoStatement = $pdo->prepare('SELECT * FROM `user` WHERE id = :id');
            $pdoStatement->execute([
                ':id' => $userID,
            ]);
            $utilisateur = $pdoStatement->fetch(); ?>
            <div class="utilisateur">
                <?php echo "Bonjour" ?>
                <span id="pseudo"><?php echo $utilisateur->pseudo ?></span>&nbsp;<?php echo " !" ?>
            </div>
        <?php
        } else {
            echo "Pas d'utilisateur connecté";
        }
        ?>
    </a>
    <div class="header-right">
        <?php if (isset($_SESSION['userId'])) : ?>
            <!-- Liens disponibles lorsque l'utilisateur est connecté -->
            <a href="pageAccueil.php">Accueil</a>
            <a href="pageListe.php">Liste</a>
            <a href="pageProfil.php">Profils</a>
            <a href="pageDeconnexion.php">Bye !</a>
        <?php else : ?>
            <!-- Liens disponibles lorsque l'utilisateur n'est pas connecté -->
            <a href="pageAccueil.php">Accueil</a>
            <a href="pageConnexion.php">Connexion</a>
            <a href="pageInscription.php">Inscription</a>
        <?php endif; ?>
    </div>
</div>
