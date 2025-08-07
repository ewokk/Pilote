# Types de stockage : NAS, SAN, DAS, stockage objet

## DAS (Direct Attached Storage)

- Stockage directement relié au serveur (USB, SATA, SAS…)
- Performances locales, mais **pas mutualisé**
- Utilisé pour les postes de travail ou serveurs uniques

> [!failure]
> Limité en scalabilité et redondance.

---

## NAS (Network Attached Storage)

- Stockage **en réseau**, accessible via des protocoles (SMB, NFS)
- Géré comme un **partage de fichiers**
- Solution simple et économique pour PME

> [!tip]
> Idéal pour les fichiers utilisateurs, sauvegardes, archives.

---

## SAN (Storage Area Network)

- Réseau de stockage dédié, utilisant **Fibre Channel**, **iSCSI**
- Vue en bloc (comme un disque local)
- Haute performance, haute disponibilité, coûteux

| Critère        | DAS       | NAS        | SAN        |
|----------------|-----------|------------|------------|
| Connexion      | Directe    | Réseau     | Réseau dédié |
| Protocole      | SATA/SAS   | SMB/NFS    | iSCSI/FC   |
| Utilisation    | Localisée  | Partagée   | Critique   |

---


## RAID – Redundant Array of Independent Disks

RAID est une technologie qui permet de combiner plusieurs disques durs pour créer un volume logique redondant, performant ou les deux.

> [!info]
> Deux types de RAID existent :
> - **RAID matériel** : contrôleur dédié (carte RAID)
> - **RAID logiciel** : géré par l’OS (ex : Windows, Linux `mdadm`, ZFS…)

---

### Comparatif des niveaux RAID classiques

| Niveau   | Principe                             | Tolérance aux pannes | Capacité utile      | Performances         | Usage typique                        |
|----------|---------------------------------------|-----------------------|----------------------|-----------------------|--------------------------------------|
| RAID 0   | Striping (répartition)                | ❌ Aucune             | 100% (N disques)     | 🔼 Lecture/écriture rapide | Données temporaires, environnement test |
| RAID 1   | Mirroring (duplication)               | ✅ 1 disque           | 50% (N/2)            | 🔼 Lecture uniquement  | OS, serveurs critiques, PME          |
| RAID 5   | Parité répartie entre disques         | ✅ 1 disque           | (N-1)/N              | 🔼 Lecture / moyenne écriture | Fichiers partagés, stockage serveur  |
| RAID 6   | Double parité                         | ✅✅ 2 disques         | (N-2)/N              | 🔼 Lecture / 🔽 Écriture | Données critiques, tolérance élevée  |
| RAID 10  | RAID 1 + RAID 0 (striping + mirroring)| ✅ Jusqu’à 1 disque par paire | 50% (N/2)     | 🔼🔼 Très hautes       | Bases de données, systèmes intensifs |

---

### Détails supplémentaires

- **RAID 0** :
  - Écrit les données en parallèle sur plusieurs disques
  - ➕ Performant, ➖ aucun filet de sécurité : perte d’un disque = perte totale
- **RAID 1** :
  - Réplication exacte sur deux disques
  - Lecture plus rapide car possible sur les deux, mais écriture synchronisée
- **RAID 5/6** :
  - Bon compromis pour stocker beaucoup de données
  - Les performances en écriture sont moindres à cause des calculs de parité
- **RAID 10** :
  - Combine la redondance du RAID 1 et la performance du RAID 0
  - Nécessite un nombre pair de disques (≥ 4)

> [!warning]
> Le RAID protège contre la panne matérielle **mais ne remplace pas une vraie stratégie de sauvegarde**.

---

## Stockage objet

- Utilisé dans les environnements cloud (ex: Amazon S3)
- Données stockées sous forme d’objets avec métadonnées
- Très scalable, accès via API

> [!info]
> Le stockage objet n’est pas monté en tant que lecteur, mais utilisé pour des accès applicatifs.

