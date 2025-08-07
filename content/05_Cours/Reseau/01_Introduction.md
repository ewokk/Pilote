# Introduction aux réseaux

Les réseaux informatiques constituent la colonne vertébrale des systèmes d'information modernes. Ils permettent aux utilisateurs, aux systèmes et aux équipements de communiquer, d’échanger des données et de collaborer efficacement. Maîtriser l’architecture, les typologies, les composants et les objectifs d’un réseau est un prérequis pour tout RSSI, architecte ou administrateur de SI.

> [!info]  
> Ce cours vise un niveau Bac+5, avec une exigence de compréhension stratégique et opérationnelle. Il prépare à la conception, l’analyse, l’audit et la sécurisation d’infrastructures réseau complexes.

---

## Qu’est-ce qu’un Réseau informatique ?

Un **réseau informatique** est un ensemble de dispositifs interconnectés capables de s’échanger des données numériques à l’aide de protocoles de communication. Ces dispositifs peuvent être des ordinateurs, des smartphones, des serveurs, des équipements réseau (routeurs, switchs…), ou des objets connectés.

> [!example]  
> Un réseau d’entreprise relie des postes de travail, des imprimantes, des serveurs, des bornes Wi-Fi, des routeurs d’accès Internet, et intègre des mécanismes de sécurité et de gestion centralisée.

---

## Objectifs d’un réseau

| Objectif                  | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| Communication             | Faciliter les échanges d’informations entre utilisateurs et systèmes       |
| Partage de ressources     | Imprimantes, fichiers, bases de données, logiciels                         |
| Haute disponibilité       | Garantir un accès continu aux services malgré les pannes                   |
| Sécurité et contrôle      | Appliquer des politiques d'accès, tracer les actions, segmenter les flux   |
| Accès distant             | Connecter des utilisateurs nomades ou des sites distants via VPN ou tunnels |
| Centralisation            | Mutualiser les services dans des datacenters ou environnements cloud       |
| Interconnexion            | Relier des réseaux hétérogènes ou distants via MPLS, SD-WAN, VPN, etc.     |

> [!warning]  
> Un réseau mal conçu peut devenir un point de vulnérabilité majeur pour toute l’organisation.

---

## Typologies de réseaux

| Type de réseau | Étendue            | Exemples typiques                       |
|----------------|--------------------|-----------------------------------------|
| PAN            | Personnel (quelques mètres) | Bluetooth entre smartphone et casque |
| LAN            | Local (bâtiment ou étage)   | Réseau d’entreprise ou de campus       |
| MAN            | Métropolitain (zone urbaine) | Réseau entre plusieurs sites d'une ville |
| WAN            | Étendu (pays ou continents) | Internet, MPLS, VPN multinational      |

> [!quote]  
> La typologie d’un réseau influence directement son architecture, sa gouvernance, ses performances et ses exigences de sécurité.

---

## Topologies réseau

| Topologie     | Description                                                   | Avantages                            | Inconvénients                      |
|---------------|---------------------------------------------------------------|--------------------------------------|------------------------------------|
| Bus           | Tous les nœuds partagent un câble unique                      | Simple, peu coûteux                  | Collisions fréquentes, peu fiable  |
| Étoile        | Chaque nœud est relié à un switch ou hub central              | Facile à gérer, isolable             | Point de défaillance central       |
| Anneau        | Nœuds connectés en boucle circulaire                          | Moins de collisions, ordre garanti   | Difficulté de diagnostic           |
| Arbre         | Hiérarchie d'étoiles                                          | Bonne évolutivité                    | Nécessite gestion centralisée      |
| Maillée       | Nœuds interconnectés entre eux (partiellement ou totalement)  | Haute redondance, tolérance aux pannes | Coût élevé, configuration complexe |

> [!example]  
> Un backbone de datacenter critique utilise une **topologie maillée redondante** pour assurer la tolérance de panne réseau.

---

## Composants réseau essentiels

### Composants actifs

| Composant      | Rôle                                                                 |
|----------------|----------------------------------------------------------------------|
| NIC (carte réseau) | Interface physique et logique entre une machine et le réseau     |
| Switch         | Commutation Ethernet, segmentation de trafic, VLAN                  |
| Routeur        | Acheminement de paquets entre réseaux, translation d’adresses       |
| Firewall       | Contrôle d’accès aux flux, filtrage, inspection d’état              |
| Point d’accès  | Fourniture de connectivité Wi-Fi                                     |
| Load balancer  | Répartition de charge entre plusieurs serveurs                      |
| Contrôleur SDN | Orchestration centralisée des flux réseau dans une architecture SDN |

### Composants passifs

| Élément               | Rôle                                               |
|------------------------|----------------------------------------------------|
| Câble RJ45, fibre optique | Transport du signal (cuivre ou optique)         |
| Baie de brassage       | Organisation centralisée des liaisons physiques    |
| Panneau de brassage    | Interface de connexion structurée pour les ports   |
| Prises murales         | Connexion des terminaux                           |

> [!tip]  
> Une infrastructure réseau bien conçue repose autant sur une topologie logique solide que sur un câblage structuré de qualité.

---

## Cas d’usage concrets

- **Entreprise multisite** : VPN IPsec entre agences + SD-WAN pour routage intelligent
- **Télétravail** : accès distant sécurisé via tunnel VPN SSL ou client ZTNA
- **Environnement cloud hybride** : interconnexion VPC sur AWS avec réseau MPLS privé
- **Industrie** : réseau OT séparé avec VLAN et supervision SCADA isolée
- **Événementiel** : réseau Wi-Fi temporaire à haute densité d’utilisateurs

---

## Acteurs réseau dans une organisation

| Rôle                   | Responsabilités principales                                      |
|------------------------|------------------------------------------------------------------|
| Administrateur réseau  | Supervision, configuration, résolution d’incidents              |
| Exploitant réseau      | Maintenance opérationnelle, application des procédures          |
| Architecte réseau      | Conception d’infrastructure, choix technologiques, documentation |
| RSSI                   | Politique de sécurité, audits, gestion des risques               |

> [!quote]  
> "La collaboration entre administrateur, architecte et RSSI est essentielle pour garantir la résilience, la performance et la sécurité du réseau."

---

## Enjeux réseau pour un RSSI

- **Segmentation logique et physique** : éviter les mouvements latéraux
- **Visibilité des flux** : cartographie réseau dynamique
- **Maîtrise des points d’interconnexion** : pare-feux, proxy, IDS, bastions
- **Gestion des accès distants** : VPN, MFA, cloisonnement
- **Sécurité Wi-Fi** : chiffrement WPA3, filtrage d’AP non autorisés
- **Détection d’intrusions** : IDS/IPS, NetFlow, comportemental
- **Auditabilité** : journalisation des accès, horodatage, corrélation SIEM

> [!danger]  
> Un réseau non segmenté ou mal documenté est une cible idéale pour les attaquants : il empêche une réponse rapide et fiable en cas d'incident.

---

> [!success]  
> Tu disposes désormais d’une base solide pour aborder les modèles de référence OSI et TCP/IP. Le prochain chapitre t'expliquera comment les réseaux sont conceptualisés en couches.
