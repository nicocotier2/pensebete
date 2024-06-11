

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;

DROP TABLE IF EXISTS `checkbox`;
CREATE TABLE IF NOT EXISTS `checkbox` (
  `id_check` int NOT NULL AUTO_INCREMENT,
  `id_liste` int NOT NULL,
  `contenu` varchar(256) NOT NULL,
  `checkbox` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_check`),
  KEY `id_liste` (`id_liste`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `liste`;
CREATE TABLE IF NOT EXISTS `liste` (
  `id_liste` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `priorité` enum('faible','forte','moyenne') NOT NULL,
  PRIMARY KEY (`id_liste`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mail` varchar(32) NOT NULL,
  `mdp` varchar(64) NOT NULL,
  `pseudo` varchar(32) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mail` (`mail`),
  UNIQUE KEY `pseudo` (`pseudo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE `checkbox`
  ADD CONSTRAINT `checkbox_ibfk_1` FOREIGN KEY (`id_liste`) REFERENCES `liste` (`id_liste`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `liste`
  ADD CONSTRAINT `liste_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

