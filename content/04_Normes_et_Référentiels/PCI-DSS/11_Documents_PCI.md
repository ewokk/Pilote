
# 11 - Liste des documents PCI DSS à produire et maintenir

Ce chapitre recense les **documents essentiels** à conserver pour démontrer votre conformité PCI DSS.  
Chaque document est associé à l’exigence concernée, à sa forme typique, et à sa fréquence de mise à jour.

___

## 1. Politiques et procédures

| Document | Exigences associées | Type | Fréquence |
|----------|----------------------|------|-----------|
| Politique de sécurité PCI DSS | 12 | PDF signé | Annuelle |
| Procédure de gestion des accès | 7, 8 | Markdown ou PDF | Trimestrielle |
| Procédure de revue de logs | 10 | Documentation technique | Trimestrielle |
| Politique de rétention des données | 3 | Tableau, fiche | Annuelle |

___

## 2. Registres et preuves

| Élément | Contenu attendu | Forme |
|--------|------------------|--------|
| Registre PAN | Table des systèmes contenant du PAN | Excel, CSV |
| Revue des accès | Liste nominative + signature de validation | PDF signé |
| Formation PCI | Liste des participants, contenu, date | Attestations, LMS |
| Évènements de sécurité | Journal d’incidents PCI | SIEM, ticketing |

___

## 3. Fichiers de configuration

- Dump firewall (exigence 1)
- Configuration TLS / SSH (exigence 4)
- Configuration SIEM et alertes (exigences 10, 11)
- Règles de suppression des PAN (exigence 3)

> [!tip]
> Toutes les preuves techniques doivent être horodatées et versionnées.

___

## 4. Rapports d’audit et de tests

| Type | Contenu attendu | Fréquence |
|------|------------------|-----------|
| Rapport de scan ASV | Résultat signé par prestataire agréé | Trimestriel |
| Rapport de test d’intrusion | Interne ou externe, avec plan d’action | Annuel |
| Rapport ROC | Produit par un QSA, complet | Annuel |
| SAQ | Questionnaire d’auto-évaluation | Annuelle |

___

## 5. Cartographies et documents structurels

- Cartographie du réseau PCI (CDE)
- Schéma des flux PAN
- Modèle de responsabilité Cloud (si applicable)
- Cartes des flux inter-sites (VPN, DMZ…)

> [!warning]
> Toute cartographie obsolète = non-conformité immédiate.

___

## 6. Historique de conformité

- Historique des écarts corrigés
- Planning de remédiation
- Suivi des audits précédents
- Registre des décisions techniques (custom approach…)

