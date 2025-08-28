# ISO/IEC 27017 – Accueil

## Introduction générale

La norme **ISO/IEC 27017** est une norme internationale de la famille ISO/IEC 27000, spécifiquement conçue pour encadrer les mesures de sécurité dans les environnements de services Cloud. Contrairement à l’ISO/IEC 27001 , qui définit les exigences générales pour mettre en place un **SMSI**, l’ISO/IEC 27017 agit comme une **extension sectorielle** de l’ISO/IEC 27002 en adaptant ses recommandations aux réalités des environnements **SaaS (Software as a Service)**, **PaaS (Platform as a Service)** et **IaaS (Infrastructure as a Service)**.  

> [!info]  
> L’ISO/IEC 27017 est un **guide de sécurité pour services Cloud** qui s’adresse à la fois aux fournisseurs et aux clients. Elle n’est pas certifiable seule, mais est très fréquemment intégrée comme référentiel complémentaire dans les audits et certifications ISO/IEC 27001.  

## Sommaire

- [[04_Normes_et_Référentiels/ISO/ISO-27017/01_Introduction_ISO27017|Introduction à la norme]]
- [[04_Normes_et_Référentiels/ISO/ISO-27017/02_Famille_27000|Positionnement dans la série ISO/IEC 27000]]
- [[04_Normes_et_Référentiels/ISO/ISO-27017/03_Contexte_Cloud_SSI|Contexte et enjeux du Cloud en SSI]]
- [[04_Normes_et_Référentiels/ISO/ISO-27017/04_Recommandations_Cloud_Client|Contrôles pour les clients Cloud]]
- [[04_Normes_et_Référentiels/ISO/ISO-27017/05_Recommandations_Cloud_Fournisseur|Contrôles pour les fournisseurs Cloud]]
- [[04_Normes_et_Référentiels/ISO/ISO-27017/06_Liste_Contrôles_ISO27017|Liste complète des contrôles ISO/IEC 27017]]
- [[04_Normes_et_Référentiels/ISO/ISO-27017/07_Fiche_Synthese_Revision|Synthèse des exigences et obligations]]
- [[04_Normes_et_Référentiels/ISO/ISO-27017/08_Exigences_Detaillees_ISO27017|Exigences détaillées ISO/IEC 27017]]
- [[04_Normes_et_Référentiels/ISO/ISO-27017/09_Controles_Extendus_27002|Contrôles ISO/IEC 27002 étendus]]
- [[04_Normes_et_Référentiels/ISO/ISO-27017/10_Audit_ISO27017|Audit et conformité ISO/IEC 27017]]
- [[04_Normes_et_Référentiels/ISO/ISO-27017/11_Cas_Pratiques_ISO27017|Cas pratiques d’application]]
- [[04_Normes_et_Référentiels/ISO/ISO-27017/12_Exigences_Synthese_ISO27017|Synthèse opérationnelle des exigences]]

---

## Spécificité de la norme ISO/IEC 27017

L’ISO/IEC 27017 apporte des clarifications et des contrôles additionnels spécifiquement orientés vers le Cloud. Par exemple, la gestion des droits d’administration, la responsabilité partagée dans la sécurisation des données et la journalisation des activités Cloud (comme via AWS CloudTrail, Azure Monitor ou Google Cloud Audit Logs) y sont abordées. Là où l’ISO/IEC 27002 reste générique, l’ISO/IEC 27017 transpose les principes de sécurité dans des environnements virtualisés et distribués, ce qui permet d’éviter les malentendus contractuels fréquents entre clients et fournisseurs de Cloud.  

Historiquement, de nombreux incidents ont mis en évidence ce besoin : l’attaque sur Capital One en 2019, exploitant une mauvaise configuration d’AWS S3, ou encore la compromission de Microsoft Exchange Online en 2021. Ces cas démontrent que la sécurité Cloud ne peut pas être gérée uniquement par des principes généraux mais doit s’appuyer sur des **contrôles contextualisés et opérationnels** comme ceux fournis par l’ISO/IEC 27017.  

---

## Lien avec les autres normes

L’ISO/IEC 27017 est rarement appliquée seule. Elle s’intègre dans un écosystème normatif plus large :  

- Elle complète l’ISO/IEC 27001 et 27002 pour les SMSI.  
- Elle est directement liée à l’ISO/IEC 27018 qui se focalise sur les aspects de **protection des données personnelles** et sur les obligations des fournisseurs Cloud vis-à-vis du RGPD.  
- Elle est également mise en perspective avec des cadres comme le référentiel **SecNumCloud** de l’ANSSI, qui impose des critères plus stricts pour les prestataires Cloud opérant en France et en Europe.  
- Enfin, elle est en cohérence avec le **Cloud Controls Matrix (CSA CCM)** publié par la Cloud Security Alliance, et contribue à répondre aux attentes réglementaires européennes, notamment la directive NIS2.  

Cette articulation est fondamentale : un RSSI qui met en œuvre ISO/IEC 27017 doit être capable de démontrer la compatibilité de ses pratiques avec plusieurs cadres complémentaires.  

---

## Public concerné

Le référentiel s’adresse à plusieurs acteurs :  
- Les **fournisseurs Cloud**, qui doivent structurer et démontrer leurs mécanismes de sécurité.  
- Les **clients d’entreprises**, qui doivent comprendre leurs responsabilités dans un modèle de responsabilité partagée.  
- Les **auditeurs et certificateurs**, qui utilisent ISO/IEC 27017 pour enrichir les audits ISO/IEC 27001, en particulier dans les environnements Cloud complexes.  

---

## Objectifs pédagogiques

À l’issue de ce cours, l’apprenant doit être en mesure de :  

- Comprendre le rôle et la portée de l’ISO/IEC 27017.  
- Identifier les différences entre les contrôles de l’ISO/IEC 27002 et leur déclinaison Cloud dans l’ISO/IEC 27017.  
- Situer ISO/IEC 27017 dans l’écosystème normatif global incluant ISO/IEC 27018, NIS2, SecNumCloud et [[Cloud Controls Matrix (CSA CCM)]].  
- Être capable de présenter les obligations respectives du fournisseur Cloud et du client dans le cadre d’un audit.  

---

## Organisation du cours

Ce cours suivra la structure originale du référentiel ISO/IEC 27017, enrichie par :  
- Des **cas pratiques sectoriels** (SaaS, PaaS, IaaS).  
- Des **comparatifs avec d’autres normes** (ISO/IEC 27018, NIS2, CSA CCM, SecNumCloud).  
- Des **preuves d’audit attendues** pour chaque exigence (rapports d’accès, journaux d’activité, contrats).  
- Des **outils opérationnels** (checklists, tableaux de correspondance, modèles de clauses contractuelles).  

---

## Cas pratiques & retours d’expérience

L’étude de cas suivante illustre concrètement l’apport de l’ISO/IEC 27017 :  
- Une PME SaaS française utilisant AWS a pu, grâce à l’adoption de l’ISO/IEC 27017, clarifier contractuellement la gestion des incidents de sécurité. Lors d’une attaque par ransomware en 2020, la distinction précise des responsabilités entre AWS et la PME a permis de limiter l’impact légal et financier.  
- Dans le secteur hospitalier, l’application d’ISO/IEC 27017 a permis d’imposer une journalisation systématique des accès aux données médicales hébergées sur Microsoft Azure, facilitant ainsi la conformité RGPD.  

---

## Conseils opérationnels pour RSSI

Pour un RSSI, l’ISO/IEC 27017 ne doit pas être perçue comme un texte théorique mais comme un **outil contractuel et opérationnel**. Elle doit être utilisée pour cadrer les clauses contractuelles avec les fournisseurs Cloud et pour structurer les audits internes. Chaque contrôle doit être relié à une **preuve d’audit tangible** (exemple : configuration KMS pour le chiffrement, logs CloudTrail exportés, tableau de suivi des responsabilités).  

---

## Checklist RSSI

- [ ] Vérifier que les responsabilités partagées sont formalisées par écrit dans le contrat Cloud.  
- [ ] S’assurer que les journaux Cloud (AWS CloudTrail, Azure Monitor, etc.) sont activés et conservés pour une durée suffisante.  
- [ ] Contrôler que les données sensibles sont chiffrées avec une gestion des clés documentée (ex : [[Gestion des clés (KMS – Key Management Service)]]).  
- [ ] Comparer les pratiques internes avec les exigences de l’ISO/IEC 27018 pour le volet protection des données personnelles.  
- [ ] Évaluer la conformité des pratiques Cloud avec SecNumCloud et NIS2.  

---
