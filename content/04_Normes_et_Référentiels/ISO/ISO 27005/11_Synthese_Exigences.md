# 11_Synthese_Exigences

## Introduction

La synthèse des exigences ISO/IEC 27005 est utile pour disposer d’une vision d’ensemble, mais elle doit être rendue directement actionnable par les RSSI et auditeurs. Un tableau opérationnel permet de lister les étapes clés, les exigences associées, les responsabilités, les preuves attendues, les outils mobilisables et les échéances recommandées.  

---

## Tableau opérationnel des exigences ISO 27005

| Étape                  | Exigence principale                                         | Responsable         | Preuves attendues                              | Outils / Support                  | Échéance |
|------------------------|-------------------------------------------------------------|---------------------|-----------------------------------------------|----------------------------------|----------|
| Contexte               | Définir périmètre, critères impact/vraisemblance, appétence | RSSI + Direction    | Document référentiel risques validé COMEX      | Matrices CIDT, référentiel interne| Annuel   |
| Identification         | Cartographier actifs, menaces, vulnérabilités, scénarios    | RSSI + Métiers      | Registre risques (actifs, menaces, scénarios)  | Catalogue actifs, MITRE ATT&CK    | Continu  |
| Analyse                | Calculer niveaux bruts (impact × vraisemblance)             | RSSI                | Matrice 5×5 remplie, scoring validé            | Outil GRC, Excel, Obsidian        | Continu  |
| Évaluation             | Comparer aux seuils, décider traitement/acceptation         | Comité risques      | Décisions documentées dans registre            | Procès-verbal comité, KPI         | Trimestriel |
| Traitement             | Définir plan, choisir mesures (réduction, transfert…)       | RSSI + Propriétaires| Plan traitement, SoA, budget alloué            | Excel, Outil GRC, SoA             | Continu  |
| Communication/Surv.    | Assurer reporting COMEX, revue risques, suivi KPI/KRI       | RSSI + Comité       | Tableaux de bord, rapports de revue            | Dashboard GRC, PowerBI, Excel     | Mensuel/Trimestriel |
| Amélioration continue  | Ajuster seuils, intégrer retours incidents/audits           | RSSI + Audit interne| Historique décisions, REX, plans mis à jour    | Rapports audit, lessons learned   | Annuel   |

---

## Recommandations générales

- Toujours **centraliser les référentiels de risques** (matrices impact/vraisemblance, seuils d’appétence).  
- Associer les **métiers** aux ateliers pour garantir la pertinence des scénarios.  
- Documenter systématiquement les **preuves d’audit** (registre, SoA, PV comité).  
- Utiliser des **outils GRC** ou, a minima, des tableurs structurés pour assurer la traçabilité.  
- Prévoir un **cycle de revue régulier** : mensuel (KPI), trimestriel (comité), annuel (revue direction).  

---

## Objectifs pédagogiques

- Fournir une vision globale des exigences ISO 27005.  
- Transformer la synthèse en outil opérationnel de pilotage.  
- Faciliter l’audit et la certification ISO 27001 par des preuves tangibles.  

---

## Checklist RSSI

- [ ] Les étapes ISO 27005 sont-elles couvertes par un tableau opérationnel interne ?  
- [ ] Les responsabilités (RSSI, métiers, direction) sont-elles définies et assumées ?  
- [ ] Les preuves attendues sont-elles documentées et disponibles ?  
- [ ] Les outils et échéances sont-ils identifiés et suivis ?  
