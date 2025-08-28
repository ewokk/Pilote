# 1. Contexte réglementaire

> [!info]  
> Ce chapitre situe **DORA** dans l’écosystème réglementaire européen et clarifie ses **articulations** avec les cadres existants (NIS2, RGPD) afin d’éviter les doublons et de **mutualiser** les efforts de conformité.  

---

## 1.1. Pourquoi un nouveau règlement ?

Avant DORA, les règles en matière de cybersécurité et de continuité opérationnelle dans le secteur financier étaient **dispersées**, **inégales** selon les États membres et **peu adaptées** aux chaînes d’approvisionnement numériques modernes. Les incidents à large échelle et la dépendance croissante aux **prestataires Cloud** ont mis en évidence des **risques systémiques** (concentration, effet domino, perte de contrôle sur les preuves), d’où la nécessité d’un texte **directement applicable** et **auditable** à l’échelle de l’UE.

---

## 1.2. Un des piliers du Digital Finance Package (DFP)

Le règlement DORA s’inscrit dans le **Digital Finance Package** (2020) aux côtés de MiCA (crypto‑actifs), du cadre **Open Finance / Data** et de la stratégie pour les **paiements numériques**. L’objectif du DFP est d’accélérer l’innovation financière **sans compromettre** la **résilience opérationnelle** et la **confiance** des marchés.

---

## 1.3. Objectifs du législateur européen

> [!info]  
> Garantir la **résilience numérique du système financier européen**, y compris face aux défaillances de **prestataires tiers critiques** et aux incidents majeurs.  

DORA est **directement applicable** dans tous les États membres à partir du **17 janvier 2025**, avec une supervision sectorielle (EBA, ESMA, EIOPA) et des pouvoirs renforcés sur les tiers critiques.

---

## 1.4. Articulations avec les autres textes (vue générale)

DORA **complète** le **RGPD** pour la **sécurité** des traitements (sans se substituer aux obligations de protection des données) et est **cohérent** avec **NIS2** (nombre d’acteurs financiers sont couverts par les deux textes). Les obligations DORA portent sur la **résilience opérationnelle** et la **preuve** (gouvernance, risques TIC, incidents, tests, supervision des tiers).

---

## 1.5. Comparatif rapide DORA ↔ NIS2 ↔ RGPD (GDPR)

### 1.5.1. Lecture croisée en paragraphes

**DORA vs NIS2.** DORA est un règlement **sectoriel** dédié au **secteur financier**, avec une granularité élevée sur la **résilience opérationnelle numérique** (gouvernance, registres, tests, tiers critiques). **NIS2** est une directive **horizontale** couvrant de nombreux secteurs essentiels et importants ; elle impose des exigences de **cybersécurité organisationnelle** (gestion des risques, politiques, signalement), mais laisse aux États le soin de transposer. Pour un acteur financier, NIS2 fixe le **socle** cyber transversal ; DORA ajoute la **spécificité financière** et des **mécanismes de supervision** et **preuves** plus précis, notamment sur les **prestataires TIC critiques**.

**DORA vs RGPD.** Le RGPD porte sur la **protection des données personnelles** (licéité, droits, DPO, violations de données), tandis que DORA vise la **résilience opérationnelle** des services financiers (continuité, disponibilité, intégrité, capacité de rétablissement). Les deux textes se rencontrent lorsque des incidents TIC affectent des **données personnelles** : le **signalement RGPD** (violation de données à caractère personnel) peut coexister avec la **notification d’incident DORA** (incident opérationnel majeur). L’entreprise doit **orchestrer** les deux flux, avec des **seuils**, **délais** et **preuves** appropriés.

### 1.5.2. Tableau de synthèse

| Axe | DORA | NIS2 | RGPD (GDPR) |
|---|---|---|---|
| Nature | **Règlement** sectoriel finance (applicable tel quel) | **Directive** horizontale (transposée) | **Règlement** horizontal données perso |
| Périmètre | Résilience opérationnelle numérique des entités financières et **tiers critiques TIC** | Cybersécurité d’acteurs **essentiels/ importants** multi‑secteurs | Traitements de **données personnelles** |
| Gouvernance | Rôle explicite du Conseil/COMEX, responsabilités direction | Gouvernance cyber exigée, moins sectorielle | DPO, responsables/ sous‑traitants, accountability |
| Gestion des tiers | Supervision et clauses **renforcées** pour **fournisseurs TIC critiques** | Exigences de gestion des risques fournisseurs | Contrats de **sous‑traitance** (art. 28), transfert |
| Incidents | Notification **harmonisée** des incidents opérationnels | Signalement incidents de sécurité | Notification **violations de données** |
| Tests | Programme de **tests de résilience** (jusqu’à **TLPT**) | Tests attendus (selon transpo/guide) | Tests non imposés (sauf mesures sécurité) |
| Preuves | Registres, KPI/KRI, rapports, contrats, audits | Politiques, mesures, journaux, preuves | Registres traitements, DPIA, preuves conformité |

---

## 1.6. Conséquences opérationnelles (mutualiser sans dupliquer)

Un **RSSI** doit construire une **cartographie unique** des exigences et **mutualiser** les contrôles : politiques et comités communs (socle NIS2), registres et métriques **orientés DORA**, et un dispositif RGPD **orchestré** (DPO, DPIA, notification). Concrètement, on aligne le SMSI ISO/IEC 27001  pour servir de **châssis** documentaire, on ajoute les **preuves DORA** (gouvernance, tests de résilience, tiers critiques) et on raccorde les processus RGPD (registre, DPIA, violation). L’objectif est d’avoir **un corpus, plusieurs lectures** (DORA, NIS2, RGPD) plutôt que trois dispositifs parallèles.

---

## 1.7. Preuves d’audit attendues (exemples)

- Décisions du Conseil/COMEX sur l’**appétence au risque** et la **stratégie de résilience** ; ordres du jour et procès‑verbaux.  
- Registres **risques TIC**, **incidents**, **relations fournisseurs** (identification des **tiers critiques**), matrices RACI, cartographie des dépendances.  
- **Clauses contractuelles** spécifiques DORA (auditabilité, localisation, réversibilité, métriques pénalisées), et suivi **SLA/OLA**.  
- Rapports de **tests de résilience** (PRA/PCA, bascule, charge, TLPT si requis), plans d’actions et preuves de remédiation.  
- Traçabilité des **notifications d’incidents** (DORA, NIS2, RGPD) avec seuils, délais, canaux et dossiers d’escalade.

---

## 1.8. Checklist RSSI – Contexte réglementaire

- [ ] Établir la **matrice de correspondance** DORA ↔ NIS2 ↔ RGPD (processus, preuves, délais).  
- [ ] Définir un **corpus documentaire unique** (politiques, comités, registres) lisible sous les trois angles.  
- [ ] Identifier les **tiers critiques TIC** et réviser les **clauses** contractuelles au regard de DORA et NIS2.  
- [ ] Planifier les **tests de résilience** (dont TLPT si requis) et l’outillage de **KPI/KRI** consolidés.  
- [ ] Outiller la **double/ triple notification** d’incident (DORA, NIS2, RGPD) avec rôles, seuils, délais et canaux.

---

## 1.9. Objectifs pédagogiques (chapitre)

Comprendre **où se place DORA** dans le paysage réglementaire européen, savoir **le différencier** de NIS2 et du RGPD, et être capable de **concevoir un dispositif intégré** qui produise **une seule fois** les **bonnes preuves** pour répondre aux trois cadres.
