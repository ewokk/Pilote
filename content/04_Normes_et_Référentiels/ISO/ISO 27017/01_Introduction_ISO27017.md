# ISO/IEC 27017 – Introduction


## Contexte de la norme

L’ISO/IEC 27017 a été publiée pour la première fois en **2015** afin de répondre à l’essor massif des services Cloud et au besoin d’un cadre spécifique de sécurité. Contrairement aux normes plus anciennes comme l’ISO/IEC 27002, qui s’appliquent à tout type d’environnement informatique, cette norme est dédiée à la sécurisation des environnements **Cloud public, privé, hybride et communautaire**.  

Depuis sa publication initiale, le Cloud est devenu un pilier de la transformation numérique mondiale. Cette réalité a conduit à une **mise à jour du référentiel pour l’aligner sur l’ISO/IEC 27002:2022**, garantissant ainsi que les contrôles proposés reflètent les dernières bonnes pratiques en matière de cybersécurité. Cette évolution répond également aux nouvelles menaces, comme les attaques par compromission de configuration Cloud (ex : incidents AWS S3 non sécurisés en 2017–2019) et les enjeux liés à la souveraineté numérique.  

> [!info]  
> L’ISO/IEC 27017 n’est pas une norme de certification autonome. Elle agit comme un **guide de bonnes pratiques** à appliquer conjointement avec un SMSI certifié selon ISO/IEC 27001.  

---

## Objectifs principaux

L’objectif premier de l’ISO/IEC 27017 est de fournir des **directives de mise en œuvre de contrôles de sécurité adaptés au Cloud**. Là où l’ISO/IEC 27002 fournit une liste générique de mesures, l’ISO/IEC 27017 introduit des clarifications propres à la relation client-fournisseur dans un modèle de **responsabilité partagée**.  

Par exemple, la norme précise qui, du client ou du fournisseur, doit assurer la journalisation des accès administratifs, la gestion des sauvegardes ou encore la configuration de la haute disponibilité. Cette clarification réduit les zones d’ombre contractuelles qui ont été à l’origine de nombreux litiges lors d’incidents de sécurité.  

---

## Complémentarité avec ISO/IEC 27018

L’ISO/IEC 27017 et l’ISO/IEC 27018 sont souvent mentionnées ensemble mais elles n’ont pas le même objet.  

- **ISO/IEC 27017** : sécurité générale des services Cloud, couvrant les aspects techniques et organisationnels (accès, journalisation, chiffrement, configuration).  
- **ISO/IEC 27018** : protection des données personnelles dans le Cloud, orientée spécifiquement sur la **vie privée et la conformité au RGPD**.  

Un RSSI doit donc utiliser ces deux normes de manière **complémentaire** : 27017 pour sécuriser l’environnement Cloud au sens large, 27018 pour garantir que les données personnelles traitées dans le Cloud respectent les exigences légales et réglementaires. Dans un audit, les deux normes sont souvent examinées ensemble.  

Cas concret : une entreprise de santé utilisant un service SaaS hébergeant des données de patients doit démontrer, grâce à l’ISO/IEC 27017, que les accès sont correctement gérés et les sauvegardes sécurisées, tout en prouvant via l’ISO/IEC 27018 que les données de santé bénéficient de mesures renforcées de confidentialité.  

---

## Intérêt stratégique pour les organisations

L’adoption de l’ISO/IEC 27017 est stratégique pour toute organisation migrante vers le Cloud. Elle permet de :  
- Donner confiance aux clients et partenaires en prouvant que la sécurité est intégrée dans les contrats Cloud.  
- Répondre aux exigences réglementaires (RGPD, NIS2, SecNumCloud en France).  
- Réduire les risques de litiges liés à une mauvaise compréhension de la répartition des responsabilités.  

Historiquement, des entreprises comme **Dropbox (2011–2012)** ou **Evernote (2013)** ont été critiquées pour des failles de sécurité ou de confidentialité dans leurs environnements Cloud. Si l’ISO/IEC 27017 avait été appliquée, la transparence contractuelle et les preuves d’audit attendues auraient permis de mieux anticiper ces crises.  

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  

- Expliquer l’historique et l’évolution de l’ISO/IEC 27017 depuis 2015.  
- Identifier la complémentarité entre l’ISO/IEC 27017 et l’ISO/IEC 27018.  
- Comprendre en quoi l’ISO/IEC 27017 constitue une extension pratique de l’ISO/IEC 27002.  
- Relier cette norme aux enjeux stratégiques actuels du Cloud (réglementations, incidents de sécurité, attentes contractuelles).  

---

## Cas pratiques & retours d’expérience

- **Capital One (2019)** : fuite de données de 106 millions de clients à cause d’une mauvaise configuration AWS. L’ISO/IEC 27017 aurait imposé une clarification contractuelle sur la configuration des accès et des pare-feu Cloud, réduisant le risque.  
- **Office 365** : en 2020, un audit interne dans une grande banque européenne a révélé des lacunes dans la journalisation des accès administratifs Cloud. L’adoption de l’ISO/IEC 27017 a permis de structurer une stratégie de preuves d’audit.  

---

## Conseils opérationnels pour RSSI

Pour un RSSI, ce chapitre doit se traduire en actions concrètes :  
- Formaliser les clauses contractuelles avec les fournisseurs Cloud pour couvrir les responsabilités de sécurité.  
- Vérifier que les mesures de l’ISO/IEC 27017 et celles de l’ISO/IEC 27018 sont **intégrées simultanément**.  
- Aligner les contrôles de sécurité Cloud avec les attentes des auditeurs ISO/IEC 27001.  

---

## Checklist RSSI

- [ ] Identifier si les contrats Cloud de l’organisation mentionnent explicitement les responsabilités de sécurité (ISO/IEC 27017).  
- [ ] Vérifier si la protection des données personnelles est encadrée par l’ISO/IEC 27018.  
- [ ] S’assurer que les équipes techniques connaissent la révision ISO/IEC 27002:2022 et ses impacts sur la mise en œuvre des contrôles Cloud.  
- [ ] Évaluer si les preuves d’audit (logs, rapports d’accès, sauvegardes chiffrées) sont disponibles et exploitables.  

---
