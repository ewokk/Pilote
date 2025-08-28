# 7. Notification et gestion des incidents

> [!info]  
> DORA impose une **détection**, une **classification** et une **notification** rapides des incidents TIC majeurs, avec une **traçabilité complète** et des rapports successifs (initial, intermédiaire, final).  
> **Dernière mise à jour** : 25 août 2025

---

## 7.1. Obligation de surveillance

Les entités financières doivent mettre en place une **capacité de détection, de gestion et de déclaration des incidents TIC** : outillage SOC (corrélation, SIEM, EDR), procédures d’escalade 24/7, astreinte RSSI/DSI, journalisation horodatée, playbooks et entrainements réguliers.

---

## 7.2. Classification des incidents

Les incidents sont classés selon : **gravité** (critique, majeur, significatif, mineur), **impact** (clients, opérations, données, finances), **effet systémique** potentiel, **périmètre** (interne, prestataire).  
> [!example]  
> Indisponibilité du système de paiement central pendant 2 heures en pointe = **incident critique** (DORA + possible NIS2).

---

## 7.3. Délais et séquence de notification (repères opérationnels)

| Cadre | Délais usuels | Qui notifier | Contenu attendu |
|---|---|---|---|
| **DORA** | **Initiale ≤ 4 h** après classification **majeur**, **Intermédiaire ≤ 24 h**, **Finale ≤ 72 h** (ou dès stabilisation) | Autorité nationale compétente et, le cas échéant, autorité européenne sectorielle | Faits, périmètre, cause présumée, impact, mesures prises, plan de remédiation, effets sur clients |
| **NIS2** | **Alerte précoce ≤ 24 h**, **Rapport d’incident ≤ 72 h**, **Rapport final** (≤ 1 mois typiquement) | CSIRT / autorité NIS compétente | Gravité, indicateurs techniques, impact, mesures d’atténuation, coopération |
| **RGPD** | **Notification ≤ 72 h** après découverte d’une **violation de données personnelles** | Autorité de protection des données (ex. CNIL) ; **information des personnes** si risque élevé | Nature des données, nombre de personnes, conséquences, mesures, contact DPO |

> [!warning]  
> Les délais exacts et déclencheurs peuvent dépendre des **RTS/ITS** applicables et des autorités. En pratique, alignez votre **runbook** sur ces repères et **documentez** l’heure de détection, de qualification et d’envoi pour prouver le respect des jalons.

---

## 7.4. Modèle de rapport de notification (template)

Copiez/collez ce canevas dans votre procédure et outillez‑le dans votre outil de ticketing / GRC.

**A. Métadonnées**
- Référence interne : `INC-YYYYMMDD-####`  
- Date/heure (UTC+1/+2) de détection : …  
- Date/heure de **qualification** (critique/majeur) : …  
- Cadres concernés : `DORA` / `NIS2` / `RGPD` (cochez)  
- Affecte un **prestataire tiers** : Oui / Non (si Oui : nom, contrat, criticité)

**B. Résumé exécutif (≤ 10 lignes)**
- Description factuelle, service/produit touché, état actuel (en cours, contenu, résolu)

**C. Contexte et périmètre**
- Systèmes/actifs impactés, environnements (prod/preprod), régions, clients concernés

**D. Chronologie (horodatée)**
- T0 détection, T1 qualification, T2 containment, T3 remédiation, T4 retour à la normale

**E. Impact**
- Disponibilité / Intégrité / Confidentialité / Traçabilité  
- KPIs : durée d’indisponibilité, transactions affectées, clients touchés, pertes estimées

**F. Cause présumée / vecteur**
- Technique/organisationnel/tiers ; IOC connus ; vulnérabilité exploitée (si applicable)

**G. Mesures prises**
- Containment, remédiation, correctifs déployés, communication clients/partenaires

**H. Plan d’actions et risques résiduels**
- Actions restantes, délais, responsables (RACI), suivi et vérification

**I. Annexes & preuves**
- Logs, captures, rapports EDR/SIEM, résultats de tests, PV de comités, références tickets

---

## 7.5. Suivi post‑incident (RCA et preuves)

- **Rapport final (≤ 72 h)** consolidant l’analyse des causes profondes (**RCA**) et les **leçons apprises**.  
- Plan d’actions **daté** et **priorisé**, indicateurs de suivi, vérification d’efficacité.  
- Traçabilité de la **communication** (autorités, clients, partenaires) et des décisions COMEX/Conseil.

---

## 7.6. Cas historiques (lecture utile)

- **British Airways (2018)** : incident affectant les données de paiement → multi‑cadres potentiels (RGPD, NIS).  
- **Equifax (2017)** : vulnérabilité non corrigée, brèche massive → exemplarité du RCA et gouvernance des correctifs.  
- **Pannes Cloud régionales (2019–2023)** : indisponibilités chez des hyperscalers → importance des délais de notification combinés DORA/NIS2 et de la communication clients.

---

## 7.7. Checklist RSSI – Incidents

- [ ] Runbook avec **jalons 4 h / 24 h / 72 h** et rôles RACI.  
- [ ] Gabarit de **rapport** intégré à l’outil (tickets, GRC) avec champs obligatoires.  
- [ ] Table de **correspondance** DORA / NIS2 / RGPD et destinataires.  
- [ ] Entrainements réguliers (exercices de crise) et **journalisation horodatée**.  
- [ ] Tableau de bord KPI/KRI (MTTD, MTTR, durée d’indispo, clients affectés).  

---

## 7.8. Objectifs pédagogiques

Savoir **classer** un incident, **respecter les délais** multi‑cadres, **notifier** avec un **rapport structuré**, et **apporter les preuves** d’un traitement conforme et efficace.
