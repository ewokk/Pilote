# Mécanismes techniques de sauvegarde

## Outils de sauvegarde

### Outils propriétaires
- **Veeam Backup & Replication**
- **Acronis Cyber Protect**
- **Commvault**, **Veritas NetBackup**
- **Microsoft DPM** (Data Protection Manager)

### Outils open source
- **Bacula**, **UrBackup**, **Duplicati**
- **Rsnapshot**, **Restic**, **Amanda**

> [!tip]
> Choisir un outil compatible avec les systèmes à sauvegarder : VM, base de données, cloud, fichiers...

---

## Support de stockage

- **Disques durs externes**
- **NAS**
- **Bandes magnétiques (LTO)** : très bon coût/Go, longévité 30 ans
- **Stockage cloud** : Amazon S3, Azure Blob, Glacier

---

## Procédures de sauvegarde

### Scriptée / planifiée
- Cron (Linux), Planificateur de tâches (Windows)
- Tâches automatisées dans les logiciels

### Avec versioning
- Permet de revenir à des versions antérieures (anti-ransomware)

### Avec compression et chiffrement
- Réduction de l’espace utilisé
- Chiffrement AES 256 pour conformité RGPD

---

## Test de restauration

> [!danger]
> Une sauvegarde non testée est une sauvegarde inutile.

- Tester **au moins 1 fois/mois**
- Faire un **test complet de PRA 1 fois/an**
- Journaliser toutes les restaurations

