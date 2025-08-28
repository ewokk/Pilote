# ISO/IEC 27017 – Audit et conformité


## Introduction

L’audit ISO/IEC 27017 ne constitue pas une certification autonome : il s’intègre généralement dans le cadre d’un audit **ISO/IEC 27001**. L’auditeur évalue alors la mise en œuvre des contrôles spécifiques au Cloud définis par l’ISO/IEC 27017, ainsi que leur articulation avec les exigences générales de l’ISO/IEC 27002.  

L’objectif est de vérifier que l’organisation a non seulement compris le principe de **responsabilité partagée**, mais qu’elle peut également démontrer par des **preuves tangibles** que les exigences Cloud sont appliquées.  

---

## Différences avec un audit ISO/IEC 27001 classique

| Aspect | ISO/IEC 27001 (classique) | ISO/IEC 27017 (Cloud) |
|--------|----------------------------|------------------------|
| **Portée** | SMSI de l’organisation, processus internes. | Ajout des environnements Cloud (SaaS, PaaS, IaaS). |
| **Contrôles** | Basés sur ISO/IEC 27002. | Étendus : journalisation Cloud, BYOK, réversibilité, isolation tenant. |
| **Preuves** | Politiques, procédures, registres. | Logs Cloud, SLA fournisseurs, tests exit plan, preuves d’isolation. |
| **Parties prenantes** | Équipe interne, auditeurs ISO. | Clients + Fournisseurs Cloud impliqués (preuves partagées). |

---

## Preuves d’audit attendues

Un auditeur ISO/IEC 27017 demandera notamment :  
- **Contrôle d’accès SaaS** : activation MFA, rapports d’authentification, gestion des comptes dormants.  
- **Logs Cloud** : exports AWS CloudTrail, Azure Monitor ou Google Audit Logs, conservation ≥ 12 mois.  
- **BYOK** : preuves de configuration de clés managées par le client (captures HSM/KMS, journal de rotation).  
- **Isolation tenant** : résultats de tests d’intrusion ou attestations tierces du fournisseur.  
- **Exit plan** : rapports de migration testée et clauses contractuelles.  

> [!warning]  
> Les audits échouent souvent non pas par absence de mesures techniques, mais par **absence de preuves formelles** (logs non exportés, exit plan non documenté, SLA non archivés).  

---

## Cas pratiques & retours d’expérience

- **Audit bancaire (2021)** : l’auditeur a exigé la démonstration en direct de la rotation des clés BYOK sur Azure. L’absence de documentation de procédure a conduit à une observation mineure.  
- **PME SaaS française (2020)** : audit ISO 27001 élargi avec 27017 → constat : pas de test d’exit plan documenté, donc non-conformité partielle.  
- **Grande administration (2019)** : audit ISO/IEC 27017 sur Office 365 → non-conformité relevée car les logs d’Azure AD n’étaient pas centralisés dans le SIEM interne.  

---

## Conseils opérationnels pour RSSI

- Conserver un **registre des preuves Cloud** (SLA, exports logs, captures config).  
- Tester régulièrement la réversibilité (exit plan).  
- Vérifier que tous les journaux Cloud sont **archivés ≥ 12 mois**.  
- Intégrer les obligations ISO/IEC 27017 dans les **plans d’audit interne** pour éviter les surprises en certification.  
- Demander aux fournisseurs Cloud des rapports indépendants (SOC 2 Type II, attestations SecNumCloud).  

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Comprendre la différence entre un audit ISO/IEC 27001 classique et un audit incluant ISO/IEC 27017.  
- Identifier les preuves d’audit attendues côté client et fournisseur Cloud.  
- Préparer et documenter un registre de preuves Cloud.  
- Anticiper les points sensibles (exit plan, logs, BYOK, isolation tenant).  

---

## Checklist RSSI

- [ ] Conserver un registre des preuves Cloud (SLA, logs, certificats).  
- [ ] Vérifier la rotation et la traçabilité des clés BYOK.  
- [ ] Tester et documenter régulièrement l’exit plan.  
- [ ] Auditer la conservation des journaux (≥ 12 mois).  
- [ ] Vérifier les rapports indépendants fournis par le prestataire (SOC 2, SecNumCloud).  
- [ ] Intégrer 27017 dans les audits internes et préparations ISO 27001.  

---
