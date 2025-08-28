# Accueil — Cours sur la norme IEC 62443

Bienvenue dans ce cours consacré à la norme **IEC 62443**, cadre international de cybersécurité pour les systèmes industriels et les environnements OT (*Operational Technology*). Issu des travaux de l’**ISA (ISA‑99)** repris et harmonisés par l’**IEC**, ce corpus normatif répond à l’industrialisation des cybermenaces : interconnexions OT/IT, télémaintenance, migrations vers IP, virtualisation et Cloud industriel ont fait émerger des surfaces d’attaque inédites. L’objectif de ce cours est de fournir une compréhension **rigoureuse, contextualisée et actionnable** de la norme, avec des ponts clairs vers les exigences d’architecture (zones/conduits, niveaux de sécurité – *Security Levels*), les pratiques de développement sécurisé et la gouvernance OT.

> [!info]
> **Public cible** : RSSI, responsables/ingénieurs OT, intégrateurs, auditeurs, décideurs IT/OT  

## Sommaire

- [[04_Normes_et_Référentiels/IEC-62443/01_Introduction_IEC62443.md|Introduction à la norme IEC 62443]]
- [[04_Normes_et_Référentiels/IEC-62443/02_Structure_Familles_Documents.md|Structure et familles de documents]]
- [[04_Normes_et_Référentiels/IEC-62443/03_Roles_Responsabilites.md|Rôles : exploitant, intégrateur, fournisseur]]

- [[04_Normes_et_Référentiels/IEC-62443/04.1_Zones_Conduits_SL.md|Zones, conduits et niveaux de sécurité (SL)]]
- [[04_Normes_et_Référentiels/IEC-62443/04.2_Detail_SL_1a4.md|Détail des niveaux SL 1 à SL 4]]
- [[04_Normes_et_Référentiels/IEC-62443/05_Exigences_Techniques.md|Exigences techniques (séries 4.x)]]
- [[04_Normes_et_Référentiels/IEC-62443/06_Exigences_Organisationnelles.md|Exigences organisationnelles (séries 2.x, 3.x)]]

- [[04_Normes_et_Référentiels/IEC-62443/07_Demarche_Projet_IEC62443.md|Démarche projet IEC 62443 pas à pas]]
- [[04_Normes_et_Référentiels/IEC-62443/08_Comparaison_ISO27001_NIST.md|Comparaison avec ISO 27001 et NIST CSF]]
- [[04_Normes_et_Référentiels/IEC-62443/09_CasPratiques_IEC62443.md|Cas pratiques sectoriels (eau, agro, énergie)]]
- [[04_Normes_et_Référentiels/IEC-62443/10_Tests_Resilience.md|Tests de résilience, FAT/SAT et audit]]

- [[04_Normes_et_Référentiels/IEC-62443/11_Mise_Conformite.md|Mise en conformité (gap analysis, roadmap, KPI)]]
- [[04_Normes_et_Référentiels/IEC-62443/12_Sanctions_Surveillance.md|Sanctions et mécanismes de surveillance]]
- [[04_Normes_et_Référentiels/IEC-62443/13_Exigences_Synthese.md|Synthèse opérationnelle des exigences]]


---

## Contexte, origine et adoption OT

Les premières publications **ISA‑99** au début des années 2000 ont posé les bases conceptuelles de la segmentation OT, des niveaux de sécurité et de la responsabilité partagée entre **exploitant**, **intégrateur** et **fournisseur**. L’**IEC** a ensuite normalisé et étendu ces travaux pour former la série **IEC 62443**, aujourd’hui adoptée dans les secteurs **énergie**, **chimie/pharma**, **transport**, **automobile**, **agroalimentaire**, **santé** et **défense**. Cette adoption est tirée par des incidents OT majeurs et par les obligations croissantes issues de Directive NIS 2 et des cadres de management tels qu’Système de management de la sécurité de l’information (ISO 27001) ou [[Cadre de cybersécurité (NIST CSF – Cybersecurity Framework)]].

---

> [!info]
> **Famille IEC 62443**  
> Parties **1‑x** : terminologie et concepts 
> - **2‑x** : politiques/processus 
> - **3‑x** : exigences systèmes 
> - **4‑x** : exigences composants & développement sécurisé

---

## À qui s’adresse ce cours ?

Ce cours cible d’abord les **équipes OT** (exploitation, automatisme, sûreté de fonctionnement) et les **équipes cybersécurité** (RSSI, RSI OT, SecOps) qui doivent **co‑construire** une trajectoire de sécurité industrialisable. Il s’adresse aussi aux **intégrateurs** et **fournisseurs** qui veulent structurer leurs offres (conception de DMZ industrielles, *jump servers*, *remote maintenance*, gestion des versions firmware, durcissement d’images), ainsi qu’aux **auditeurs** qui recherchent des **preuves de conformité vérifiables**.

---

## Ponts internes à la 62443 et cohérence d’ensemble

Le cours mettra l’accent sur les articulations essentielles : **IEC 62443‑3‑3** pour les exigences système et *Security Levels* de capacité (**SL‑C**), **IEC 62443‑4‑2** pour les exigences composant et *Security Levels* d’atteinte (**SL‑T**), **IEC 62443‑4‑1** pour le développement sécurisé des produits, et **IEC 62443‑2‑1 / 2‑4** pour la gouvernance et les exigences d’intégration/maintenance. Cette lecture croisée est indispensable pour bâtir des architectures **zones/conduits** cohérentes, contractualiser les exigences **FR/SR** et **mapper SL‑C/SL‑T/SL‑A** dans les projets.

---

## Périmètre OT : exemples concrets d’application

Nous illustrons chaque axe par des cas **terrain** : **PLC/DCS**, **historians SCADA**, **DMZ industrielles** (L3/L4/L7), **pare‑feux d’inspection protocolaire** (ex. [[Pare‑feu industriel (IPS – Industrial Protocol Safeguards)]] si votre lexique le prévoit), **bastions / jump servers**, **VLAN/VRF** pour la ségrégation, **télémaintenance sécurisée** (bastion + MFA + enregistrement), **passerelles série/IP** et durcissement des **IHM**/stations d’ingénierie. L’objectif est d’aligner les **exigences normatives** avec des **patrons d’architecture** directement exploitables.

---

## Cas historiques marquants (OT réels)

**Stuxnet (2010)** a démontré la possibilité d’un **effet physique** via la compromission d’**automates programmables**. **BlackEnergy/Industroyer (2015‑2016)** a ciblé le réseau électrique ukrainien, révélant la nécessité de **zones critiques** strictement segmentées et d’une défense en profondeur OT. **Colonial Pipeline (2021)** a illustré les dépendances entre IT et OT : une compromission IT peut provoquer un **arrêt d’exploitation** s’il n’existe pas de **plans de continuité OT** découplés. Ces cas baliseront les chapitres ultérieurs (segmentation, niveaux SL, exigences FR/SR, opérations et audits).

---

## Objectifs pédagogiques

À l’issue du cours, vous serez capable d’**expliquer la structure** de la 62443, de **relier** les exigences entre **3‑3, 4‑1, 4‑2, 2‑1/2‑4**, de **concevoir** des architectures OT *zones/conduits* mappées aux **SL‑C/SL‑T/SL‑A**, et de **préparer des preuves d’audit** (politiques OT, dossiers d’architecture, registres d’actifs, analyses de risques, rapports FAT/SAT, rapports de durcissement et de tests).

---

## Checklist RSSI

- [ ] Valider le périmètre OT et l’inventaire des actifs industriels (PLC, DCS, IHM, passerelles, historians).  
- [ ] Confirmer la stratégie **zones/conduits** et les **SL** visés par zone.  
- [ ] Exiger des fournisseurs/intégrateurs le **mapping FR/SR ↔ SL‑C/SL‑T/SL‑A** et un **Plan d’Assurance Sécurité** conforme **62443‑4‑1/4‑2**.  
- [ ] Préparer les **preuves d’audit** : politiques OT, procédures de télémaintenance, journaux bastion, rapports FAT/SAT, plans de patching, configurations de pare‑feu.  
- [ ] Aligner la trajectoire 62443 avec Directive NIS 2 et Système de management de la sécurité de l’information (ISO 27001).

