# ISO/IEC 27017 – Fiche Synthèse Révision


## Fiche de révision synthétique

Cette fiche est conçue comme un **aide-mémoire rapide** pour RSSI, auditeurs et candidats à une certification. Elle résume les principaux contrôles ISO/IEC 27017 avec leur objectif, leur rattachement et les preuves attendues.

| Contrôle | Côté concerné (Client / Fournisseur) | Objectif clé | Référence ISO/IEC 27002 | Preuves attendues |
|----------|---------------------------------------|--------------|--------------------------|-------------------|
| **C.9.5 – Séparation des clients** | Fournisseur | Garantir l’isolation inter-tenant. | 9.5 – Séparation des environnements | Rapports de tests, logs de segmentation, attestations d’isolation. |
| **C.10.1 – Gestion des clés (BYOK)** | Client + Fournisseur | Assurer chiffrement fort + rotation des clés. | 10.1 – Gestion cryptographique | Politique de gestion des clés, captures KMS/HSM, rapports de rotation. |
| **C.11.2 – Contrôle d’accès aux API** | Client | Sécuriser API exposées et authentification forte. | 11.2 – Contrôle des accès | Logs API, tests de charge, configuration IAM. |
| **C.12.4 – Journalisation Cloud** | Client + Fournisseur | Assurer traçabilité et rétention ≥ 12 mois. | 12.4 – Journalisation et surveillance | Exports CloudTrail/Azure Monitor, politiques de rétention, intégration SIEM. |
| **C.14.2 – Réversibilité / Exit Plan** | Client + Fournisseur | Permettre migration sans perte de données. | 14.2 – Portabilité et continuité | Procédures de migration, tests d’export, clauses contractuelles. |
| **C.15.3 – Surveillance et alertes** | Fournisseur + Client | Détection proactive d’incidents. | 15.3 – Surveillance continue | Tableaux SIEM, alertes documentées, rapports d’incidents. |
| **C.9.2 – Gestion des rôles et responsabilités** | Client + Fournisseur | Clarifier responsabilités de sécurité. | 9.2 – Organisation des rôles SSI | Contrats, matrice RACI, registres de responsabilités. |
| **C.12.3 – Sauvegardes Cloud** | Client | Garantir sauvegardes chiffrées et testées. | 12.3 – Sauvegardes et restauration | Rapports de tests de restauration, preuves de chiffrement. |
| **C.13.2 – Transfert sécurisé de données** | Fournisseur | Assurer sécurité lors des transferts. | 13.2 – Sécurité des communications | Protocoles TLS, preuves de chiffrement, journaux de transfert. |

---

> [!tip]  
> Cette fiche est pensée comme un **outil de révision rapide** : chaque ligne correspond à une question typique d’audit.  
> Exemple : *“Comment démontrez-vous la réversibilité Cloud (C.14.2) ?” → fournir le plan d’exit et les preuves de test de migration.*  

---

## Utilisation pratique

- **En examen** : apprendre par cœur la correspondance contrôle / objectif / preuve → format QCM ou oral.  
- **En audit** : utiliser la table comme checklist rapide pour vérifier les preuves du fournisseur ou du client.  
- **En entreprise** : adapter ce tableau comme un “registre Cloud” qui synthétise les obligations contractuelles et techniques.  

---
