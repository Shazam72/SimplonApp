-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 02 fév. 2021 à 16:02
-- Version du serveur :  10.4.17-MariaDB
-- Version de PHP : 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `simplon`
--

-- --------------------------------------------------------

--
-- Structure de la table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(60) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mdp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `apprenant`
--

CREATE TABLE `apprenant` (
  `id` int(11) NOT NULL,
  `nom` varchar(60) NOT NULL,
  `prenom` varchar(60) NOT NULL,
  `email` varchar(50) NOT NULL,
  `genre` varchar(1) NOT NULL,
  `villeorigine` varchar(60) NOT NULL,
  `formabase` varchar(60) NOT NULL,
  `formasuiv` varchar(60) NOT NULL,
  `appreciation` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `apprenant`
--

INSERT INTO `apprenant` (`id`, `nom`, `prenom`, `email`, `genre`, `villeorigine`, `formabase`, `formasuiv`, `appreciation`) VALUES
(1, 'CISSE', 'ABOUBAKARY', 'abou@gmail.com', 'm', 'ouagadougou', 'ANG', 'Dvelloppement Web', 'Bonne conduite.\r\n'),
(2, 'ALAKOUTOU', 'ARIANE', 'ariane@gmail.com', 'f', 'ouagadougou', 'COM', '', ''),
(3, 'DIEBRE', 'DAVY', 'davy@gmail.com', 'm', 'ouagadougou', 'ECO', '', ''),
(4, 'BAKYO', 'MAX AYMAR', 'max@gmail.com', 'm', 'ouagadougou', 'ANG', 'Inconnu', ''),
(5, 'BASSINA', 'REBECCA', 're@gmail.com', 'f', 'ouagadougou', 'ANG', '', ''),
(6, 'BAZIE', 'SARA', 'yidjabazie@gmail.com', 'f', 'ouagadougou', 'GC', '', '');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `apprenant`
--
ALTER TABLE `apprenant`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `apprenant`
--
ALTER TABLE `apprenant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
