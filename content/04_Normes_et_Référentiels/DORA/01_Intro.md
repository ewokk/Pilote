# Introduction au cours DORA

> [!info]  
> Ce cours fournit une compréhension **complète et opérationnelle** du **règlement DORA (Digital Operational Resilience Act)**, pierre angulaire de la résilience numérique du secteur financier dans l’Union européenne.  
> **Dernière mise à jour** : 25 août 2025

---

## Pourquoi DORA ? (contexte historique et raisons d’être)

Avant DORA, le paysage européen souffrait d’une **fragmentation** des exigences de résilience numérique : des guides nationaux hétérogènes, des attentes différentes selon les autorités de supervision et une mosaïque d’obligations d’**incident reporting** difficilement comparables. Dans le même temps, le secteur financier a connu une **dépendance croissante** à des **prestataires Cloud et services TIC** en forte **concentration** (hyperscalers), créant des **risques systémiques** : panne d’un fournisseur critique, indisponibilité transfrontalière, clauses contractuelles insuffisantes, absence de test de bascule, opacité sur la chaîne d’approvisionnement logicielle ou sur la localisation des données, et faiblesse des plans de sortie (exit strategy).

Les **incidents majeurs** et campagnes à large échelle ont mis en lumière des **lacunes** : continuité d’activité insuffisamment éprouvée, **gestion des tiers** focalisée sur le coût plutôt que la résilience, **gouvernance** qui ne relie pas toujours l’appétence au risque du Conseil/COMEX aux contrôles opérationnels, et **reporting** peu actionnable pour les superviseurs. DORA naît de ce constat : **harmoniser**, **rendre vérifiables** les exigences, et **étendre la supervision** jusqu’aux **fournisseurs tiers critiques** (notamment Cloud).

---

## Ce que DORA change concrètement

DORA impose des **obligations contraignantes** et **auditées** : une **gouvernance** explicite de la résilience numérique (rôle du Conseil/COMEX, responsabilités de la direction), une **gestion des risques TIC** documentée et mesurée, un **cadre d’incident reporting** harmonisé, des **tests de résilience** réguliers et proportionnés (jusqu’aux exercices de type TLPT – Threat‑Led Penetration Testing), et une **surveillance des prestataires tiers critiques** (obligations contractuelles renforcées, plans de sortie, réversibilité, exigences de transparence). L’ensemble vise à assurer qu’une entité financière **résiste**, **répond** et **se rétablit** rapidement, tout en **démontrant** sa maîtrise aux régulateurs.

Sur le plan des **alignements**, DORA se lit en cohérence avec [[Directive NIS2 (NIS2 – Network and Information Security 2)]], [[ISO/IEC 27001 (ISO 27001 – Information Security Management)]], [[RGPD (GDPR – General Data Protection Regulation)]] et le [[NIST Cybersecurity Framework (NIST CSF – Cybersecurity Framework)]]. Ces cadres restent utiles pour la structuration interne (SMSI, registres, contrôles), tandis que DORA apporte les **exigences sectorielles** et la **logique de supervision** propres aux services financiers.

---

## Impacts organisationnels et de gouvernance

La **responsabilité** de la résilience numérique est portée au **plus haut niveau** : le Conseil/COMEX fixe l’**appétence au risque**, valide la **stratégie de résilience** et suit des **indicateurs** consolidés (KPI/KRI). Le **RSSI** pilote la **mise en œuvre** (cartographie des actifs et dépendances, registres des risques TIC et incidents, définition des contrôles, collecte des **preuves**), tandis que les **achats**, le **juridique** et les **métiers** renforcent les **contrats** et **SLA/OLA** avec les fournisseurs tiers critiques, intègrent des clauses DORA et prévoient des **plans de sortie** réalistes et testés.

En **exploitation**, le dispositif combine **prévention**, **détection**, **réponse** et **rétablissement** : scénarios d’incidents priorisés, procédures d’escalade, communication réglementaire coordonnée, exercices de crise multi‑métiers, et amélioration continue alimentée par les retours d’expérience (post‑mortem).

---

## Preuves d’audit attendues (vue d’ensemble)

- Politiques et procédures approuvées en gouvernance de la résilience numérique ; procès‑verbaux et décisions du Conseil/COMEX.  
- Registres **risques TIC**, **incidents**, **relations fournisseurs** (dont fournisseurs tiers critiques), matrices RACI, cartographie des dépendances et des données.  
- **Clauses contractuelles** DORA (localisation, réversibilité, auditabilité, métriques), **SLA/OLA** et mécanismes de suivi (KPI/KRI, pénalités).  
- Rapports de **tests de résilience** (PRA/PCA, tests de bascule, tests de charge, TLPT le cas échéant), plans d’action et preuves de remédiation.  
- Journaux de **notification d’incident** (délais, seuils, canaux), dossiers d’escalade et communication inter‑autorités lorsque requis.

---

## Cas concrets (lecture guidée)

Le cours détaillera, chapitre par chapitre, des **scénarios sectoriels** : indisponibilité prolongée d’un fournisseur Cloud touchant les paiements ; compromission d’un prestataire d’administration à distance ; panne de datacenter couplée à une bascule inopérante ; incident logiciel en chaîne (fournisseur → intégrateur → entité). Pour chacun, nous relierons les **exigences DORA**, les **preuves** et les **décisions de gouvernance** attendues.

---

## Conséquences opérationnelles pour un RSSI

Dès l’introduction, un RSSI doit **cartographier ses dépendances** (internes/externes), identifier les **fournisseurs tiers critiques**, vérifier la **tenue des registres** (risques TIC, incidents, contrats), préparer un **programme de tests de résilience** proportionné et définir les **seuils de notification**. La trajectoire 2025–2026 s’organise autour de jalons validés en comité (gouvernance, contrats, tests, preuves).

---

## Checklist RSSI – Introduction

- [ ] Confirmer la **périmètre** DORA (activités, entités, services TIC et dépendances), et identifier les **tiers critiques**.  
- [ ] Lancer/mettre à jour les **registres** : risques TIC, incidents, relations fournisseurs, cartographie des dépendances et des données.  
- [ ] Vérifier et compléter les **clauses DORA** dans les contrats : auditabilité, localisation, réversibilité, métriques et pénalités.  
- [ ] Définir un **programme de tests de résilience** proportionné (bascule, PRA/PCA, charge, TLPT si requis) et un calendrier 2025–2026.  
- [ ] Formaliser les **seuils et délais de notification** d’incidents, outiller la collecte et la traçabilité (journaux, dossiers d’escalade).  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, le lecteur :  
- comprend **pourquoi** DORA a été conçu et **quels problèmes** il corrige ;  
- identifie les **leviers** qui changent par rapport aux pratiques antérieures (gouvernance, fournisseurs tiers critiques, tests, reporting) ;  
- sait **par où commencer** (cartographie, registres, contrats, tests, notification) et **quelles preuves** constituer dès l’amorçage.
