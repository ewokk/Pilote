# ISO/IEC 27017 – Exigences Synthèse

---

## Introduction

Ce chapitre propose une **synthèse opérationnelle** des exigences ISO/IEC 27017.  
L’objectif est de fournir un outil directement réutilisable par les **RSSI**, les **auditeurs** et les **équipes projet**, sous forme de tableau multi-colonnes permettant de relier chaque exigence à son responsable, son objectif et ses preuves attendues.  

---

## Tableau de synthèse des exigences

| Exigence | Responsable (Client / Fournisseur) | Objectif | Preuves attendues | Outils / Références |
|----------|-------------------------------------|----------|-------------------|---------------------|
| **C.9.5 – Séparation des clients** | Fournisseur | Garantir l’isolation inter-tenant. | Rapports de segmentation, tests d’intrusion, attestations indépendantes. | VPC, pare-feu logiques, SecNumCloud |
| **C.10.1 – Gestion des clés (BYOK)** | Client + Fournisseur | Assurer chiffrement fort des données en repos/transit. | Politique KMS/HSM, rotation clés, journaux d’accès. | AWS KMS, Azure Key Vault, HSM |
| **C.11.2 – Contrôle d’accès aux API** | Client | Sécuriser les API exposées. | Logs API, politiques IAM, tests de charge. | OAuth 2.0, OpenID Connect, rate limiting |
| **C.12.4 – Journalisation Cloud** | Client + Fournisseur | Garantir traçabilité complète et conservation ≥ 12 mois. | Exports CloudTrail/Azure Monitor, intégration SIEM, politique de rétention. | SIEM (Splunk, Sentinel), NIS2 |
| **C.14.2 – Réversibilité (Exit Plan)** | Client + Fournisseur | Assurer migration possible sans perte de données. | Tests de migration, clauses contractuelles, journaux d’export. | Procédures PRA, migration SaaS |
| **C.15.3 – Surveillance et alertes** | Fournisseur + Client | Détecter comportements anormaux et incidents. | Tableaux SIEM, alertes documentées, rapports d’incidents. | SOC, Sentinel, Splunk |
| **C.9.2 – Rôles et responsabilités** | Client + Fournisseur | Clarifier responsabilités sécurité Cloud. | Contrats, matrice RACI, registre responsabilités. | SLA, ISO 27001, CSA CCM |
| **C.12.3 – Sauvegardes Cloud** | Client | Garantir sauvegardes chiffrées et testées. | Rapports restauration, preuves chiffrement. | Outils de sauvegarde managés |
| **C.13.2 – Transfert de données** | Fournisseur | Sécuriser transferts réseau. | Protocoles TLS, journaux de transfert, preuves chiffrement. | TLS 1.2/1.3, VPN IPSec |
| **Disponibilité / SLA** | Fournisseur | Garantir continuité de service. | SLA documentés, rapports disponibilité, tests PRA. | Multi-AZ, multi-région, SecNumCloud |
| **Protection des données personnelles** | Client + Fournisseur | Respecter RGPD et ISO/IEC 27018. | Registre traitement, preuves chiffrement, logs d’accès. | RGPD, ISO 27018, NIS2 |

---

## Conseils opérationnels pour RSSI

- Utiliser ce tableau comme **checklist d’audit interne**.  
- Exiger la mise à jour régulière des preuves (SLA, journaux, certificats).  
- Relier systématiquement les contrôles ISO/IEC 27017 avec ISO/IEC 27018 (privacy) et NIS2 (journalisation, reporting incidents).  
- Centraliser les preuves dans un **registre Cloud** pour faciliter les audits externes.  

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Maîtriser la vue d’ensemble des exigences ISO/IEC 27017.  
- Associer chaque exigence à son responsable et aux preuves attendues.  
- Utiliser la synthèse comme outil d’audit ou de préparation à la certification.  

---

## Checklist RSSI

- [ ] Vérifier la couverture de toutes les exigences ISO/IEC 27017.  
- [ ] Contrôler la mise à jour et l’archivage des preuves (logs, SLA, rapports).  
- [ ] Relier les exigences avec ISO/IEC 27018 et NIS2.  
- [ ] Tester régulièrement exit plan, PRA et sauvegardes.  
- [ ] Maintenir un registre Cloud consolidant toutes les preuves.  

---
