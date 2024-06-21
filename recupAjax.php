<?php
require_once "utils/common.php";
require_once "utils/database.php";

// Connexion à la base de données
$pdo = connectToDbAndGetPdo();
$userId = $_SESSION['userId'];
try {
    // Préparer et exécuter la requête pour récupérer le fichier JSON
    $stmt = $pdo->prepare("SELECT contenu FROM liste WHERE id_user = :id");
    $stmt->bindParam(':id', $userId, PDO::PARAM_INT);
    $stmt->execute();
    
    // Récupérer le fichier JSON
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    //var dump ($row);
    echo isset($row['plateau']) ? $row['plateau'] : false;

} catch (PDOException $e) {
    die("Erreur : " . $e->getMessage());
}