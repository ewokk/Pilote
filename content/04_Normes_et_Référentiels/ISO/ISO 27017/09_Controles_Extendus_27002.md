# ISO/IEC 27017 – Contrôles étendus de l’ISO/IEC 27002

## Introduction

L’ISO/IEC 27017 ne remplace pas l’ISO/IEC 27002, elle l’**étend** spécifiquement pour les environnements Cloud. L’idée est d’adapter des contrôles déjà connus (issus du référentiel général) aux réalités techniques et contractuelles du Cloud, en y ajoutant des précisions et responsabilités supplémentaires.  

Un RSSI doit donc comprendre à la fois le **contrôle générique (27002)** et sa **déclinaison Cloud (27017)**, ainsi que les preuves attendues en audit.  

---

## Comparatif ISO/IEC 27002 vs ISO/IEC 27017

| Thème | ISO/IEC 27002 (Général) | ISO/IEC 27017 (Spécifique Cloud) | Exemple concret | Preuves attendues |
|-------|--------------------------|----------------------------------|-----------------|-------------------|
| **Contrôle d’accès** | Définir politiques et mécanismes de contrôle d’accès internes. | Exiger une gestion des identités adaptée au **multi-tenant** (segmentation entre clients). | AWS IAM avec politiques distinctes par compte client. | Politiques IAM, logs d’accès, preuves de séparation des rôles. |
| **Gestion des clés** | Définir une politique de gestion des clés cryptographiques. | Introduit l’option **BYOK** (Bring Your Own Key) pour que le client gère ses propres clés. | Azure Key Vault BYOK avec HSM. | Politiques de rotation, captures KMS, preuves de BYOK actif. |
| **Journalisation** | Tenir des journaux des activités sensibles. | Oblige la mise en place de logs **fournisseur + client** accessibles et corrélables. | Activation CloudTrail (AWS) + SIEM client. | Exports de logs, durée de conservation ≥ 12 mois. |
| **Réversibilité** | Non couvert explicitement. | Obligation de prévoir un **exit plan** Cloud. | Migration Office 365 → Google Workspace. | Clauses contractuelles, tests de migration documentés. |
| **Séparation des environnements** | Contrôle général de séparation des environnements (prod/test/dev). | Exige en plus l’**isolation entre tenants** chez le fournisseur. | VPC dédié par client. | Rapports de tests inter-tenant, logs de segmentation. |
| **Disponibilité** | Définir une stratégie de continuité et de reprise. | Fournisseur doit garantir **multi-AZ / multi-region**. | AWS EC2 avec SLA multi-AZ. | SLA, rapports de disponibilité, tests PRA. |

---

## Cas pratiques & retours d’expérience

- **Office 365** : en audit ISO/IEC 27001, la présence de MFA répond au contrôle générique 27002, mais ISO/IEC 27017 impose en plus que le fournisseur fournisse les journaux d’accès pour audit externe.  
- **AWS IAM** : ISO/IEC 27002 demande une gestion des identités, mais ISO/IEC 27017 précise la nécessité de séparer strictement les comptes et privilèges entre clients Cloud.  
- **Migration SaaS ratée (2019)** : absence d’exit plan a conduit à la perte de données lors d’un changement de fournisseur → non-conformité ISO/IEC 27017.  

---

## Conseils opérationnels pour RSSI

- Toujours mapper les contrôles 27017 avec leur **équivalent 27002** pour identifier ce qui change réellement dans le Cloud.  
- Exiger que les fournisseurs Cloud documentent les **contrôles additionnels** (BYOK, isolation tenant, logs communiqués au client).  
- Vérifier la **portée contractuelle** : 27002 reste interne, 27017 engage le fournisseur.  

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Comparer les contrôles génériques de l’ISO/IEC 27002 et leurs extensions Cloud dans l’ISO/IEC 27017.  
- Identifier les preuves d’audit spécifiques attendues.  
- Utiliser ces différences pour cadrer les relations contractuelles avec un fournisseur Cloud.  

---

## Checklist RSSI

- [ ] Mapper chaque contrôle ISO/IEC 27002 avec son extension 27017.  
- [ ] Vérifier la présence d’un exit plan Cloud.  
- [ ] Contrôler l’activation du BYOK pour les données sensibles.  
- [ ] Auditer les journaux Cloud et leur conservation.  
- [ ] Confirmer l’isolation inter-tenant fournie par le fournisseur.  

---
