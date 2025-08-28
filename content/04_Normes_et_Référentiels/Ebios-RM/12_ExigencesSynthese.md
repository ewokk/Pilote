# 12 – Exigences Synthèse opérationnelle

Cette synthèse regroupe les exigences de chaque atelier EBIOS RM sous forme de tableaux opérationnels.  
Chaque tableau précise :  
- **Acteur concerné** (qui est responsable ou impliqué).  
- **Preuves attendues** (documents, validations, éléments audités).  
- **Outils conseillés** (référentiels, logiciels, méthodes).  

---

## Atelier 1 – Périmètre de l’étude

| Exigence | Acteur | Preuves attendues | Outils conseillés |
|----------|--------|-------------------|------------------|
| Identifier les valeurs métier | Métiers, COMEX, RSSI | Liste validée et datée | Cartographie processus, entretiens métiers |
| Identifier les événements redoutés | RSSI + métiers | Document des événements redoutés | Guides ANSSI, retours incidents internes |
| Identifier les biens supports | DSI, RSSI | Inventaire des actifs techniques et organisationnels | CMDB, scans d’actifs |
| Évaluer la gravité | RSSI, COMEX | Matrice de gravité signée | Matrice impact ANSSI, RGPD/NIS2 référentiels |

---

## Atelier 2 – Couples SR/OV

| Exigence | Acteur | Preuves attendues | Outils conseillés |
|----------|--------|-------------------|------------------|
| Identifier les sources de risque | RSSI, analystes menace | Liste documentée des SR | Rapports CERT, ENISA Threat Landscape |
| Identifier les objectifs visés | Métiers, RSSI | Inventaire des OV validé | Interviews COMEX, plans stratégiques |
| Associer SR/OV | RSSI | Tableaux couples SR/OV | Modèles EBIOS RM, Excel/Obsidian |
| Évaluer motivation/ressources/activité | RSSI | Tableau d’évaluation justifié | Grilles EBIOS, matrices scoring |

---

## Atelier 3 – Stratégie de menaces

| Exigence | Acteur | Preuves attendues | Outils conseillés |
|----------|--------|-------------------|------------------|
| Cartographier l’écosystème | RSSI, DSI, métiers | Carte des dépendances validée | Schémas architecture, BPMN |
| Identifier les dépendances critiques | RSSI, métiers | Document cartographie dépendances | Analyse supply chain, audits fournisseurs |
| Construire stratégie de menace | RSSI, analystes cyber | Scénarios stratégiques documentés | MITRE ATT&CK, Cyber Kill Chain |
| Documenter hypothèses | RSSI | Liste des hypothèses datée | Modèles Obsidian, registre hypothèses |

---

## Atelier 4 – Scénarios opérationnels

| Exigence | Acteur | Preuves attendues | Outils conseillés |
|----------|--------|-------------------|------------------|
| Élaborer des scénarios plausibles | RSSI, analystes | Narratifs ou graphes d’attaque | MITRE ATT&CK Navigator, Obsidian |
| Évaluer probabilité et gravité | RSSI | Matrice probabilité x gravité | Matrices ANSSI, scoring interne |
| Relier scénarios aux impacts métier | RSSI, métiers | Scénarios validés par métiers | Ateliers croisés SSI/métiers |
| Documenter impacts RGPD/NIS2/DORA | RSSI, DPO | Fiches d’impact réglementaire | Outils conformité GRC |

---

## Atelier 5 – Traitement du risque

| Exigence | Acteur | Preuves attendues | Outils conseillés |
|----------|--------|-------------------|------------------|
| Choisir option traitement (réduction, transfert, acceptation, évitement) | RSSI, COMEX | PV arbitrage risques | Registre risques, PV comité |
| Lier à ISO 27001 Annexe A | RSSI | Tableau correspondance risques/mesures | ISO 27001 Annexe A, Obsidian template |
| Élaborer plan de traitement | RSSI, DSI, métiers | Plan priorisé avec jalons | Excel/Gantt, outils GRC |
| Valider plan avec COMEX | COMEX | Validation formelle | PV comité risques, budget approuvé |

---

## Exploitation des résultats

| Exigence | Acteur | Preuves attendues | Outils conseillés |
|----------|--------|-------------------|------------------|
| Produire tableau de synthèse risques | RSSI | Tableau validé et daté | Excel/Obsidian/PowerBI |
| Restituer au COMEX | RSSI, COMEX | Executive summary, PV COMEX | Tableau de bord HTML, heatmap |
| Suivre KPI/KRI | RSSI, DSI | Dashboard mensuel | SIEM, GRC tools |
| Conserver versions figées | RSSI, auditeurs | Archives datées des livrables | Outils GED, Obsidian vault |

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant est capable de :  
- Lier chaque exigence à un **acteur**, une **preuve** et un **outil**.  
- Préparer un **dossier complet pour audit** (ISO 27001, NIS2, RGPD).  
- Structurer la restitution EBIOS RM de manière **actionnable** pour les RSSI et les COMEX.  
