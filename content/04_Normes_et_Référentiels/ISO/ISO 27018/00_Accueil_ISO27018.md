# 00_Accueil_ISO27018

L’ISO/IEC 27018 constitue un **code de pratique dédié à la protection des informations personnelles identifiables (PII – Personally Identifiable Information)** traitées dans les environnements de **Cloud public**, lorsque le fournisseur agit en tant que **sous-traitant** pour le compte de ses clients. Elle s’inscrit dans la continuité de l’[[ISO/IEC 27001 (ISMS – Information Security Management System)]] et de l’[[ISO/IEC 27002 (Mesures – Code of practice for information security controls)]], en apportant de...

L’objectif principal est d’assurer que les organisations clientes puissent déléguer à un fournisseur Cloud le traitement de leurs données personnelles en bénéficiant d’un **cadre contractuel et technique aligné avec les obligations légales**, notamment celles du [[Règlement général sur la protection des données (RGPD – General Data Protection Regulation)]].

---

## Sommaire

- [[04_Normes_et_Référentiels/ISO/ISO-27018/01_Introduction|Introduction à la norme ISO/IEC 27018]]
- [[04_Normes_et_Référentiels/ISO/ISO-27018/02_Definitions_Concepts|Définitions et concepts clés]]
- [[04_Normes_et_Référentiels/ISO/ISO-27018/03_Objectifs_27018|Objectifs spécifiques de la norme]]
- [[04_Normes_et_Référentiels/ISO/ISO-27018/04_Principe_Protection_PII|Principes de protection des données personnelles (PII)]]
- [[04_Normes_et_Référentiels/ISO/ISO-27018/05_Mesures_Supplementaires_27018|Mesures supplémentaires de sécurité ISO/IEC 27018]]
- [[04_Normes_et_Référentiels/ISO/ISO-27018/06_Contrats_Responsabilites|Contrats, rôles et responsabilités]]
- [[04_Normes_et_Référentiels/ISO/ISO-27018/07_Gestion_Incidents_PII|Gestion des incidents de données personnelles]]
- [[04_Normes_et_Référentiels/ISO/ISO-27018/08_Transparence_Fournisseur|Transparence et obligations du fournisseur Cloud]]
- [[04_Normes_et_Référentiels/ISO/ISO-27018/09_Exigences_Detaillees_27018|Liste détaillée des exigences ISO/IEC 27018]]
- [[04_Normes_et_Référentiels/ISO/ISO-27018/10_Comparaison_27001_27018|Comparatif ISO/IEC 27001 vs 27018]]
- [[04_Normes_et_Référentiels/ISO/ISO-27018/11_Implementation_Pratique|Conseils d’implémentation pratique]]
- [[04_Normes_et_Référentiels/ISO/ISO-27018/12_Audit_Conformite_27018|Audit et vérification de conformité]]
- [[04_Normes_et_Référentiels/ISO/ISO-27018/13_Exigences_Synthese|Synthèse des exigences clés et critères de sélection]]
  
---

## Contexte et positionnement

Contrairement à l’[[ISO/IEC 27017 (Cloud – Security controls for cloud services)]] qui se concentre sur la **sécurité des services Cloud** en général, l’ISO/IEC 27018 se focalise exclusivement sur la **protection des données personnelles** et introduit des exigences contractuelles, organisationnelles et techniques visant à garantir :

- la **transparence des traitements**,  
- la **limitation des finalités** et de la réutilisation des données,  
- la **notification en cas d’incident impliquant des PII**,  
- l’existence de **clauses contractuelles et DPA (Data Processing Agreements)** encadrant la sous-traitance,  
- la capacité de fournir des **preuves d’audit** (rapports tiers, certifications, registres).  

L’adoption de cette norme est devenue stratégique à partir de 2014 (année de sa première publication) et plus encore après 2018, date d’application du RGPD, qui a fortement accru la responsabilité des fournisseurs et des sous-traitants Cloud.

---

## Utilité opérationnelle

L’ISO/IEC 27018 sert à la fois de **référentiel technique et juridique**. Elle aide :

- les **RSSI** à vérifier la robustesse des mesures de protection PII mises en place par les prestataires,  
- les **DPO** à assurer la conformité légale et la gestion des droits des personnes,  
- les **équipes Achats et Juridiques** à négocier et contrôler les contrats Cloud,  
- les **équipes Cloud** à implémenter des mesures de sécurité alignées sur les bonnes pratiques internationales.

---

## Liens avec d’autres normes et règlements

- Avec l’[[ISO/IEC 27017 (Cloud – Security controls for cloud services)]] : complémentarité entre exigences de sécurité Cloud générales (27017) et exigences spécifiques sur les PII (27018).  
- Avec l’[[ISO/IEC 27001 (ISMS – Information Security Management System)]] et l’[[ISO/IEC 27002 (Mesures – Code of practice for information security controls)]] : l’ISO 27018 fournit un approfondissement ciblé sur la protection des PII.  
- Avec le [[Règlement général sur la protection des données (RGPD – General Data Protection Regulation)]] : cohérence forte, notamment sur les notions de responsable de traitement, sous-traitant, registre de traitement, droits des personnes concernées et obligations de notification d’incidents.  
- Avec [[NIS2 (Network and Information Security Directive)]] : pour les opérateurs essentiels/secteurs critiques utilisant massivement le Cloud, l’ISO 27018 peut renforcer la conformité.

---

> [!info]  
> **Public cible :** RSSI, DPO, responsables achats/juridiques, équipes Cloud.  
> **Sorties attendues :** exigences contractuelles (DPA, TOMs), contrôles PII côté fournisseur, preuves d’audit exploitables.

---

## Cas concret historique

Un cas marquant illustre la pertinence d’ISO 27018 : en 2019, **Capital One**, utilisant massivement AWS, a subi une fuite de données affectant plus de 100 millions de clients aux États-Unis et au Canada. L’incident a mis en évidence l’importance des **clauses contractuelles précises** (sécurité des buckets S3, gestion des accès, notification) et des preuves d’audit. Dans un tel contexte, un alignement strict sur ISO 27018 aurait permis de renforcer les responsabilités et de réduire le flou entre client et fournisseur sur la gestion des PII.

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  

- Comprendre le rôle et la spécificité de l’ISO/IEC 27018 dans l’écosystème ISO 27000.  
- Identifier les différences entre ISO 27017, ISO 27018 et RGPD.  
- Expliquer les enjeux contractuels et opérationnels liés à la protection des PII dans le Cloud.  
- Situer l’importance des preuves d’audit pour un RSSI ou un DPO lors de la sélection et du suivi d’un fournisseur Cloud.

---

## Checklist RSSI

- [ ] Vérifier que le fournisseur Cloud est conforme ISO/IEC 27018.  
- [ ] Obtenir et analyser le DPA (Data Processing Agreement) proposé par le fournisseur.  
- [ ] Identifier les preuves d’audit disponibles (rapports, certificats, journaux).  
- [ ] Comparer la couverture 27018 avec le RGPD et l’ISO 27017.  
- [ ] Intégrer ces exigences dans le processus d’achat et de gouvernance Cloud.  
