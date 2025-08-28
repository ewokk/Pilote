# 12. Exigences – Synthèse opérationnelle

> [!info]  
> Cette synthèse regroupe les **exigences DORA** sous forme de **tableau actionnable** pour un pilotage projet (RSSI / PMO conformité). Chaque ligne précise le **responsable**, les **preuves**, les **outils/conseils** et une **échéance** indicative 2024–2026.  
> **Dernière mise à jour** : 25 août 2025

---

## Tableau multi‑colonnes

| Exigence | Responsable (R) | Preuves attendues | Outils / conseils | Échéance |
|---|---|---|---|---|
| Stratégie de **résilience TIC** validée | Conseil / COMEX | PV de validation, politique signée, KPI/KRI cibles | GRC, tableau de bord COMEX, NIST CSF pour ossature | **Q4 2024** |
| **Gouvernance** documentée (RACI) | DG / RSSI | Matrice RACI, chartes comités, calendrier | Modèle RACI, registre décisions | Q4 2024 |
| **Cartographie** des actifs, processus, dépendances | RSSI / DSI | Carte applicative, données, liens tiers, criticité | CMDB, carto dépendances, revue trimestrielle | Q1 2025 |
| **Registre risques TIC** tenu à jour | RSSI / Risk | Registre versionné, méthodologie, scoring | ISO 27005, EBIOS RM, revue comité risques | Q1 2025 |
| **PRA/PCA** alignés à la cartographie (RTO/RPO) | DSI / Métiers | Plans PRA/PCA, rapports de tests, décisions | Tests de bascule, exercices de crise | Q2 2025 |
| Programme **tests de résilience** (incl. TLPT si requis) | RSSI / DSI | Stratégie de test, ROE, rapports, re‑tests | Cadre TIBER‑EU, planning triennal TLPT | Q2–Q3 2025 |
| **Procédure incidents** & notification multi‑cadres | RSSI / SOC | Runbook 4h/24h/72h, gabarits rapports, journaux | SIEM/SOAR, modèle de rapport, registre incidents | Q1 2025 |
| **KPI/KRI** résilience définis et suivis | RSSI / Risk | Tableau de bord (MTTD, MTTR, dispo, latence) | Datawarehouse, seuils d’alerte, comités mensuels | Q2 2025 |
| **Gestion des vulnérabilités** & obsolescence | DSI / RSSI | Registre versions, plans patchs, preuves MAJ | Scanner vuln., patch mgmt, feuille route tech | Q2 2025 |
| **Gestion des tiers** : identification des **tiers critiques** | Achats / RSSI | Registre fournisseurs, criticité documentée | Grille criticité, scoring, due‑diligence | Q1 2025 |
| **Clauses DORA** dans les contrats (audit, réversibilité, SLA) | Achats / Juridique | Contrats amendés, pénalités, droits d’audit | Clauses modèles, check contractuelle | Q2 2025 |
| **Exit strategy** testée (réversibilité/migration) | DSI / RSSI | Plan de sortie, PV de test de migration | Tests techniques planifiés, coûts/délai évalués | Q3 2025 |
| **Partage d’information** sectoriel (ISAC, MISP) | RSSI / SOC | Preuves d’adhésion, IOC intégrés, CR réunions | FS‑ISAC, CERT‑EU, MISP | Q2 2025 |
| **Formation** administrateurs/dirigeants (accountability) | RH / RSSI | Feuilles d’émargement, supports, évaluation | Module court COMEX, cas sanctions | Q2 2025 |
| **Audit interne** de conformité DORA | Audit interne | Rapport, écarts, plans d’action | Programme annuel d’audit, suivi remédiation | Q4 2025 |
| **Communication régulateur** et inspections | Conformité / RSSI | Dossiers prêts, échanges, réponses | Dataroom, procédure réponses autorités | Continu |
| **Amélioration continue** (post‑mortem, re‑tests) | RSSI / DSI | RCA, plans datés, preuves d’efficacité | Calendrier re‑test, KPI de progrès | Continu |

---

## Notes d’utilisation

- Les **échéances** sont indicatives et doivent être adaptées au profil de l’entité.  
- Les **preuves** listées sont celles couramment demandées lors d’inspections (peuvent varier selon autorités).  
- Utiliser un **outil GRC** pour centraliser registres, contrats, KPI/KRI et pièces justificatives.

---

## Checklist de clôture (contrôle final)

- [ ] Tous les éléments **RACI / gouvernance** sont approuvés et versionnés.  
- [ ] Les **contrats** des tiers critiques comportent **toutes** les clauses DORA.  
- [ ] Les **tests** (PRA/PCA, charge, TLPT) ont un **rapport** et un **re‑test** planifié.  
- [ ] Les **runbooks incidents** incluent les jalons **4h/24h/72h** et les modèles de rapport.  
- [ ] Les **KPI/KRI** sont produits et revus en comité avec décisions consignées.  
- [ ] L’**audit interne** 2025 est réalisé et les actions sont suivies.  

---

## Objectif pédagogique

Fournir au RSSI et au COMEX une **vue consolidée** des exigences DORA, directement **pilotables** dans un plan d’actions et **auditées** par des preuves tangibles.
