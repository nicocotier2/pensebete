<?php
require_once "utils/common.php";
require_once "utils/database.php";
$pdo = connectToDbAndGetPdo();
// Récupérer les données JSON envoyées
$jsonData = file_get_contents('php://input');
$userId = $_SESSION['userId'];

try {
    // Préparer et exécuter la requête de mise à jour
    // pour chaque liste dans mon tableau
    $stmt = $pdo->prepare("UPDATE game SET plateau = :json, aqui = :aqui WHERE id_liste = :id");
    $stmt->bindParam(':json', $jsonData, PDO::PARAM_STR);
    $stmt->bindParam(':id', $gameId, PDO::PARAM_INT);
    $stmt->execute();
    echo "Données JSON mises à jour avec succès dans la base de données.";
} catch (PDOException $e) {
    die("Erreur : " . $e->getMessage());
}