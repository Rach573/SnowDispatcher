-- SnowDispatcher - script d'installation de la base de données
-- Compatible MariaDB 10.4+ / MySQL 8+
-- Ce script recrée entièrement la base snowdispatcher.

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

DROP DATABASE IF EXISTS snowdispatcher;
CREATE DATABASE snowdispatcher
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

USE snowdispatcher;

CREATE TABLE departements (
  id INT NOT NULL AUTO_INCREMENT,
  nom_departement VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_departements_nom (nom_departement)
) ENGINE=InnoDB;

CREATE TABLE category (
  id INT NOT NULL AUTO_INCREMENT,
  nom_categorie VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_category_nom (nom_categorie)
) ENGINE=InnoDB;

CREATE TABLE privacy (
  id INT NOT NULL AUTO_INCREMENT,
  niveau_confidentialite VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_privacy_niveau (niveau_confidentialite)
) ENGINE=InnoDB;

CREATE TABLE staff (
  id INT NOT NULL AUTO_INCREMENT,
  nom_complet VARCHAR(255) NOT NULL,
  adresse_mail VARCHAR(255) NOT NULL,
  statut_hierarchique VARCHAR(100) NOT NULL,
  departement_id INT DEFAULT NULL,
  est_marie TINYINT(1) NOT NULL DEFAULT 0,
  nombre_enfants INT NOT NULL DEFAULT 0,
  genre ENUM('M', 'F', 'Autre') NOT NULL DEFAULT 'Autre',
  PRIMARY KEY (id),
  UNIQUE KEY uq_staff_adresse_mail (adresse_mail),
  KEY idx_staff_departement (departement_id),
  CONSTRAINT chk_staff_nombre_enfants CHECK (nombre_enfants >= 0),
  CONSTRAINT fk_staff_departement
    FOREIGN KEY (departement_id) REFERENCES departements(id)
    ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('admin', 'agent') NOT NULL DEFAULT 'agent',
  staff_id INT DEFAULT NULL,
  nombre_enfants INT NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE KEY uq_users_username (username),
  UNIQUE KEY uq_users_staff_id (staff_id),
  CONSTRAINT chk_users_nombre_enfants CHECK (nombre_enfants >= 0),
  CONSTRAINT fk_users_staff
    FOREIGN KEY (staff_id) REFERENCES staff(id)
    ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE mail (
  id INT NOT NULL AUTO_INCREMENT,
  objet VARCHAR(255) NOT NULL,
  contenu TEXT DEFAULT NULL,
  date_reception DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  expediteur_staff_id INT DEFAULT NULL,
  categorie_id INT DEFAULT NULL,
  privacy_id INT DEFAULT NULL,
  handler_user_id INT UNSIGNED DEFAULT NULL,
  PRIMARY KEY (id),
  KEY idx_mail_expediteur (expediteur_staff_id),
  KEY idx_mail_categorie (categorie_id),
  KEY idx_mail_privacy (privacy_id),
  KEY idx_mail_date_reception (date_reception),
  CONSTRAINT fk_mail_expediteur_staff
    FOREIGN KEY (expediteur_staff_id) REFERENCES staff(id)
    ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT fk_mail_categorie
    FOREIGN KEY (categorie_id) REFERENCES category(id)
    ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT fk_mail_privacy
    FOREIGN KEY (privacy_id) REFERENCES privacy(id)
    ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE stats_gender_mail_count (
  id INT NOT NULL AUTO_INCREMENT,
  genre ENUM('M', 'F', 'Autre') NOT NULL,
  mail_count INT NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE KEY uq_stats_gender (genre)
) ENGINE=InnoDB;

CREATE TABLE stat_mail_by_gender (
  stat_date DATE NOT NULL,
  gender ENUM('F', 'M', 'X', 'U') NOT NULL COMMENT 'U=Unknown/Null',
  mail_count INT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (stat_date, gender)
) ENGINE=InnoDB;

CREATE TABLE stat_mail_by_priority (
  stat_date DATE NOT NULL,
  priority_id INT UNSIGNED NOT NULL,
  mail_count INT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (stat_date, priority_id)
) ENGINE=InnoDB;

INSERT INTO departements (id, nom_departement) VALUES
  (1, 'Ressources Humaines'),
  (2, 'Informatique'),
  (3, 'Logistique');

INSERT INTO category (id, nom_categorie) VALUES
  (1, 'Support'),
  (2, 'Technique'),
  (3, 'Administratif');

INSERT INTO privacy (id, niveau_confidentialite) VALUES
  (1, 'Public'),
  (2, 'Interne'),
  (3, 'Confidentiel');

CREATE TABLE taches (
  id INT NOT NULL AUTO_INCREMENT,
  mail_id INT NOT NULL,
  agent_user_id INT DEFAULT NULL,
  statut_tache ENUM('Nouveau', 'Assigné', 'Résolu') NOT NULL DEFAULT 'Nouveau',
  priorite_calculee ENUM('Alerte Rouge', 'Urgent', 'Normale') NOT NULL DEFAULT 'Normale',
  date_attribution DATETIME DEFAULT NULL,
  commentaire TEXT DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_taches_mail_id (mail_id),
  KEY idx_taches_agent (agent_user_id),
  KEY idx_taches_statut (statut_tache),
  CONSTRAINT fk_taches_mail
    FOREIGN KEY (mail_id) REFERENCES mail(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_taches_agent
    FOREIGN KEY (agent_user_id) REFERENCES users(id)
    ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

INSERT INTO staff (id, nom_complet, adresse_mail, statut_hierarchique, departement_id, est_marie, nombre_enfants, genre) VALUES
  (1, 'Élodie Bernard', 'elodie.bernard@entreprise.com', 'Leader', 1, 1, 2, 'F'),
  (2, 'Mathieu Robert', 'mathieu.robert@entreprise.com', 'N+1', 2, 0, 0, 'M'),
  (3, 'Sofia Mendes', 'sofia.mendes@entreprise.com', 'Employé Lambda', 3, 1, 1, 'F'),
  (4, 'Hugo Lambert', 'hugo.lambert@entreprise.com', 'Employé Lambda', 2, 0, 0, 'M'),
  (5, 'Inès Garcia', 'ines.garcia@entreprise.com', 'N+1', 1, 1, 3, 'F'),
  (6, 'Camille Moreau', 'camille.moreau@entreprise.com', 'Employé Lambda', 3, 0, 0, 'F');

-- Mots de passe de démonstration :
-- admin / admin123
-- carol / agent123
-- Les mots de passe sont stockés sous forme de hash SHA-256, comme dans l'application.
INSERT INTO users (id, username, password_hash, role, staff_id, nombre_enfants) VALUES
  (1, 'admin', '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9', 'admin', NULL, 0),
  (2, 'carol', 'f44d1ac9bf0c69b083380b86dbdf3b73797150e3cca4820ac399f7917e607647', 'agent', 6, 0);

INSERT INTO mail (id, objet, contenu, date_reception, expediteur_staff_id, categorie_id, privacy_id) VALUES
  (1, 'Demande de congés', 'Bonjour, je souhaite poser deux jours de congé en décembre.', '2026-08-01 09:15:00', 1, 3, 2),
  (2, 'Question fiche de paie', 'Pouvez-vous vérifier ma dernière fiche de paie ?', '2026-08-02 10:30:00', 2, 3, 1),
  (3, 'Commande de fournitures', 'Nous avons besoin de fournitures pour l’équipe.', '2026-08-03 11:45:00', 3, 3, 2),
  (4, 'Badge défectueux', 'Mon badge ne permet plus d’ouvrir la porte principale.', '2026-08-04 08:20:00', 4, 1, 1),
  (5, 'Proposition d’amélioration', 'Voici une proposition pour améliorer le flux de validation.', '2026-08-05 14:10:00', 5, 2, 3),
  (6, 'Ticket support', 'Un problème récurrent apparaît dans l’application interne.', '2026-08-06 15:40:00', 6, 1, 2);

INSERT INTO taches (id, mail_id, agent_user_id, statut_tache, priorite_calculee, date_attribution) VALUES
  (1, 1, 2, 'Assigné', 'Alerte Rouge', '2026-08-06 16:00:00'),
  (2, 2, 2, 'Résolu', 'Normale', '2026-08-06 16:05:00'),
  (3, 3, NULL, 'Nouveau', 'Urgent', NULL),
  (4, 4, NULL, 'Nouveau', 'Normale', NULL),
  (5, 5, 2, 'Assigné', 'Normale', '2026-08-06 16:10:00'),
  (6, 6, NULL, 'Nouveau', 'Alerte Rouge', NULL);

SET FOREIGN_KEY_CHECKS = 1;
