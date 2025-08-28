# ISO/IEC 27017 – Liste des contrôles

## Importance des contrôles Cloud

L’ISO/IEC 27017 reprend l’ossature de l’ISO/IEC 27002 mais y ajoute des **contrôles spécifiques au Cloud**. Ceux-ci permettent de clarifier la responsabilité entre fournisseur et client, et de définir des mécanismes techniques concrets pour sécuriser l’environnement.  

Un RSSI doit donc être capable de relier chaque contrôle à un **objectif précis**, à une **implémentation type**, et à des **preuves d’audit attendues**. Ces contrôles ne sont pas uniquement théoriques : ils répondent à des incidents réels, aux exigences du **RGPD**, de la **directive NIS2**, ou encore des référentiels comme le **SecNumCloud** (ANSSI) et le **Cloud Controls Matrix (CSA CCM)** de la Cloud Security Alliance.  

---

## Tableau des contrôles ISO/IEC 27017

| Contrôle | Objectif | Exemple d’implémentation | Preuves attendues |
|----------|----------|--------------------------|-------------------|
| **C.9.5 – Séparation des clients** | Garantir que les données et environnements des clients Cloud sont isolés (multi-tenant). | Mise en place d’un **VPC (Virtual Private Cloud)** dédié, segmentation réseau stricte, tests de pénétration inter-tenant. | Rapports de segmentation, résultats de tests d’intrusion, logs réseau démontrant l’isolation. |
| **C.10.1 – Gestion des clés** | Assurer la confidentialité et l’intégrité des données (RGPD art. 32). | Utilisation de **KMS (Key Management Service)**, BYOK (Bring Your Own Key) avec HSM, rotation périodique des clés. | Politiques de gestion des clés, preuves de rotation, journaux d’accès HSM, captures de configurations. |
| **C.11.2 – Contrôle d’accès aux API** | Sécuriser les API exposées et limiter les abus. | Implémenter **OAuth 2.0 / OpenID Connect**, limitation de requêtes (rate limiting), authentification multi-facteur. | Logs d’accès API, rapports de tests de charge, politiques IAM documentées. |
| **C.12.4 – Journalisation Cloud** | Assurer une traçabilité complète des actions (NIS2, RGPD accountability). | Activation de **AWS CloudTrail**, **Google Cloud Audit Logs**, **Azure Monitor**, conservation ≥ 12 mois. | Exports de journaux, politiques de rétention, intégration SIEM, preuves d’investigation d’incident. |
| **C.14.2 – Réversibilité et portabilité** | Garantir la possibilité de migration des données vers un autre fournisseur. | Mise en œuvre d’un **exit plan** testé (export VM, snapshots, données chiffrées transférables). | Rapports de tests de migration, clauses contractuelles, journaux d’export. |
| **C.15.3 – Surveillance et alertes** | Détecter les comportements anormaux et incidents de sécurité. | Intégration des logs Cloud dans un **SIEM** (Microsoft Sentinel, Splunk, Elastic). | Tableaux de bord SIEM, alertes documentées, rapports d’incident. |

> [!info]  
> Ces contrôles ne remplacent pas ceux de l’ISO/IEC 27002 : ils **les complètent** pour couvrir les risques spécifiques au Cloud. Ils sont alignés sur le **CSA CCM** et, pour la France, sur **SecNumCloud**.  

---

## Cas pratiques & retours d’expérience

- **Capital One (2019)** : si le contrôle C.9.5 avait été testé par des audits de segmentation inter-tenant, l’impact de la faille AWS aurait pu être limité.  
- **Hôpital français (2022)** : l’activation des journaux Cloud via Azure Monitor a permis de retracer une compromission d’accès administratifs, répondant aux obligations RGPD et NIS2.  
- **Audit fournisseur 2021** : un client hébergé sur AWS en France n’a pas pu démontrer de test de réversibilité (C.14.2). Les auditeurs ont noté une **non-conformité mineure**, preuve que ces contrôles doivent être régulièrement testés et documentés.  

---

## Conseils opérationnels pour RSSI

- Maintenir une **cartographie claire** des contrôles activés chez chaque fournisseur Cloud.  
- Exiger que chaque contrôle soit relié à une **preuve d’audit** : SLA signé, capture de configuration, logs exportés, rapport de test.  
- Vérifier la **durée de conservation des logs** (souvent exigée ≥ 12 mois, parfois 24 pour des environnements sensibles).  
- Intégrer les preuves Cloud dans le **cycle d’audit ISO/IEC 27001** classique pour éviter toute lacune lors d’une certification.  
- S’assurer que les obligations Cloud sont alignées avec le **RGPD**, **NIS2**, et, en France, le **SecNumCloud**.  

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Connaître les principaux contrôles spécifiques de l’ISO/IEC 27017.  
- Relier chaque contrôle à un objectif et à une mise en œuvre concrète.  
- Préparer des preuves d’audit adaptées (contrats, logs, captures, rapports).  
- Identifier les liens normatifs (RGPD, NIS2, SecNumCloud, CSA CCM).  

---

## Checklist RSSI

- [ ] Vérifier que la séparation inter-tenant (C.9.5) est documentée et testée.  
- [ ] Confirmer que la journalisation Cloud (C.12.4) est activée, centralisée et conservée ≥ 12 mois.  
- [ ] Vérifier la gestion des clés (C.10.1), la rotation et la compatibilité BYOK.  
- [ ] Examiner les contrôles d’accès aux API (C.11.2) et vérifier MFA + rate limiting.  
- [ ] Valider la faisabilité de l’exit plan (C.14.2) par des tests réguliers.  
- [ ] S’assurer que la surveillance et les alertes (C.15.3) sont intégrées dans le SIEM et testées.  
- [ ] Vérifier l’alignement avec RGPD, NIS2, CSA CCM et SecNumCloud.  

---
