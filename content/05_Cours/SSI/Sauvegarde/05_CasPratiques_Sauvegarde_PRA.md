# Cas pratiques de sauvegarde et de PRA

## Cas 1 — PME locale avec NAS

- Serveur de fichiers Windows + NAS Synology
- Sauvegarde quotidienne incrémentielle via `Veeam Agent`
- Snapshots NAS toutes les 6h
- Copie mensuelle sur disque dur externe déconnecté

> RTO = 1 jour / RPO = 6h  
> Budget ≈ 1000 €/an

---

## Cas 2 — Infrastructure Cloud (SaaS + IaaS)

- Données CRM dans Salesforce + VM dans Azure
- Sauvegardes automatiques via outils natifs (Azure Backup, Salesforce Export)
- Snapshot de VM Azure toutes les 4h + journaux exportés
- PRA défini pour restauration automatique dans un autre AZ

> [!success]
> Plan validé avec MFA, chiffrage, rétention de 6 mois

---

## Cas 3 — Ransomware sur site Windows

- Chiffrement du serveur de fichiers
- Restauration depuis bande (LTO-8) déconnectée
- Test de PRA effectué 2 mois avant : RTO réel = 5h

> [!protection]
> Règle 3-2-1 appliquée : NAS local, bande externe, sauvegarde chiffrée cloud

---

## Bonnes pratiques générales

- Documenter tous les scénarios de reprise
- Isoler physiquement au moins un support
- Réaliser des tests de restauration **réels** régulièrement
- Surveiller les journaux et alertes de l’outil de sauvegarde

