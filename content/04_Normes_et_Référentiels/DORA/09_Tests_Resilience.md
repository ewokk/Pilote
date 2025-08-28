# 8. Tests de résilience numérique

> [!info]  
> Les tests de résilience sous DORA vont **du socle** (sauvegardes, PRA/PCA, tests de charge, exercices de crise) jusqu’aux **tests avancés** inspirés de TIBER‑EU (**TLPT** et **Red Teaming**). L’objectif est de **valider en conditions réelles** la capacité de l’organisation à **détecter**, **répondre** et **se rétablir**.  
> **Dernière mise à jour** : 25 août 2025

---

## 8.1. Finalité et principes directeurs

La stratégie de test doit être **programmée**, **documentée** et **proportionnée** au profil de risque. Elle couvre la chaîne **Prévention → Détection → Réponse → Rétablissement**, inclut la **communication de crise** et s’appuie sur des **indicateurs** (MTTD, MTTR, RTO/RPO). Les résultats alimentent l’**amélioration continue** (post‑mortem, remédiation, re‑test).

---

## 8.2. Panorama des tests (progressivité)

Le dispositif combine : tests de **sauvegarde/restauration**, **bascule** inter‑sites, **PRA/PCA**, **tests de charge et de performance**, **exercices de gestion de crise** multi‑métiers, **tests de vulnérabilité/pentest** classiques, et pour les entités désignées, des **tests avancés** (voir ci‑dessous). L’important n’est pas d’additionner les exercices, mais de construire un **programme cohérent** qui couvre les fonctions critiques et leurs dépendances (internes et **tiers**).

---

## 8.3. Red Teaming (tests adverses encadrés)

Le **Red Teaming** évalue la détection et la réponse face à un **adversaire réaliste**. Il repose sur :  
- un **contexte renseigné** (menaces pertinentes, chemins d’attaque probables),  
- des **règles d’engagement (ROE)** claires (heures, périmètre, données sensibles, **kill‑switch**),  
- une **White Team** (pilotage, sécurité, déconfliction) et une **Blue Team** (défense),  
- un **débriefing** structuré (traces détectées vs non détectées, délais, actions, points aveugles),  
- un **plan de remédiation** et un **re‑test** ciblé sur les faiblesses identifiées.  

**Preuves attendues** : ROE signées, journaux d’exécution, éléments de détection, rapport de débriefing, plan d’actions daté.

---

## 8.4. TLPT – Threat‑Led Penetration Testing (inspiré TIBER‑EU)

Le **TLPT** est un test d’intrusion **piloté par la menace**, réservé aux entités **désignées** par l’autorité compétente. Il s’appuie sur :  
- une **Threat Intelligence** dédiée (profil d’adversaires, TTP probables, techniques MITRE ATT&CK),  
- une **séparation** des prestataires (fournisseur **TI** vs **Red Team**),  
- un **périmètre centré** sur les **fonctions critiques** (crown jewels, parcours paiements, marchés),  
- une **supervision** par l’autorité durant tout le cycle,  
- une **périodicité de référence** d’**au moins 3 ans**, ajustée au profil de risque.  

**Livrables clés** : Plan TI, Plan de test, ROE, Journal d’exécution, Rapport final, Plan de remédiation, preuves de re‑test.

> [!tip]  
> Le TLPT est **complémentaire** des pentests classiques : il vise l’**effet bout‑en‑bout** (détection & réponse), pas seulement la découverte de vulnérabilités.

---

## 8.5. Lien avec le cadre **TIBER‑EU**

Le **cadre TIBER‑EU** (Threat Intelligence‑Based Ethical Red Teaming) fournit la **méthodologie de référence** pour conduire des TLPT en Europe :  
- **Deux prestataires** indépendants : **TI Provider** (renseignement) et **Red Team Provider** (exécution),  
- **Rôles** : White Team (pilotage, sécurité), Blue Team (défense), Red Team (attaque),  
- **Confidentialité & sécurité** : data‑handling, preuves, effacement sécurisé, traçabilité,  
- **Cycle** : TI → Plan → Exécution → Débriefing → Remédiation → Re‑test, avec **supervision** de l’autorité.  

**Alignements utiles** : [[NIST Cybersecurity Framework (NIST CSF – Cybersecurity Framework)]] pour l’ossature « Identify/Protect/Detect/Respond/Recover » et [[ISO/IEC 27001 (ISO 27001 – Information Security Management)]] pour l’intégration documentaire (politiques, journaux, preuves).

---

## 8.6. Documentation, sécurité et conformité

Un programme de tests avancés exige :  
- **Autorisation** et **ROE** validées par la direction/Conseil,  
- **Gestion légale et RH** (clauses de test, NDA, cadre disciplinaire),  
- **Sécurité des données** (masquage, environnements, effacement des artefacts),  
- **Déconfliction** (coordination production, change, fournisseurs tiers),  
- **Traçabilité complète** (journaux, captures, décisions, comités).  

**Preuves d’audit** : ROE, PV de comités, registres de risques liés aux tests, journaux, rapports et plans d’actions.

---

## 8.7. Cas historiques & retours d’expérience (lecture utile)

- **Incidents Cloud régionaux (2019–2023)** : indisponibilités chez des hyperscalers ont révélé des **angles morts** de détection et de bascule. Les exercices de **Red Teaming/TLPT** ont depuis intégré des **injects Cloud** (identités, réseaux, storage).  
- **Chaîne d’approvisionnement (type SolarWinds, 2020)** : tests adverses ont mis l’accent sur la **détection latérale** et la **gestion des secrets**, souvent absentes des pentests classiques.  
- **Paiements/cartes** : des exercices supervisés ont montré des **écarts de MTTD/MTTR** sur les fonctions critiques et conduit à des **runbooks** spécifiques paiements (réseaux, HSM, bascule).  

---

## 8.8. Modèle de plan de test avancé (extrait à intégrer)

**Sections minimales** : Objectifs & hypothèses de menace ; Périmètre & fonctions critiques ; Parties prenantes & rôles (White/Blue/Red, TI) ; **Règles d’engagement** ; Gestion des données & confidentialité ; Sécurité & kill‑switch ; Déconfliction & fenêtre de tir ; Planning & jalons ; **Critères de succès** (détection/temps/réponse) ; Plan de remédiation & re‑test ; Livrables & archivage des preuves.

---

## 8.9. Checklist RSSI – Tests de résilience

- [ ] Construire un **programme pluriannuel** couvrant PRA/PCA, bascule, charge, crise, vulnérabilités, pentest, Red Teaming et, si désigné, **TLPT**.  
- [ ] Définir **RTO/RPO**, **MTTD/MTTR** cibles et les mesurer à chaque exercice.  
- [ ] Établir des **ROE** standard et un modèle de **plan de test** ; valider les aspects juridiques et RH.  
- [ ] Intégrer les **tiers** (Cloud, prestataires critiques) et prévoir des **tests de sortie**.  
- [ ] Organiser un **débriefing** formel, un **plan d’actions** daté et un **re‑test** des faiblesses.  

---

## 8.10. Objectifs pédagogiques

À l’issue du chapitre, le lecteur :  
- distingue pentest, **Red Teaming** et **TLPT**, et sait quand les mobiliser,  
- comprend le **lien TIBER‑EU** et la logique **menace‑centrée**,  
- sait **documenter** un test avancé (ROE, sécurité des données, livrables),  
- peut **intégrer les résultats** au dispositif DORA (preuves, KPI/KRI, gouvernance) et **piloter le re‑test**.
