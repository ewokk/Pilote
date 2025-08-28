# 11_Mise_Conformite

La mise en conformité avec l’IEC 62443 ne se limite pas à appliquer quelques contrôles techniques. Elle implique une **démarche progressive, documentée et auditable**, intégrant les volets organisationnels, techniques et contractuels.  

---

## Étapes d’une démarche de mise en conformité

### 1. Audit initial & Gap Analysis
- Identifier le périmètre OT et les systèmes critiques.  
- Réaliser un état des lieux par rapport aux exigences IEC 62443 (2‑1, 2‑4, 3‑2, 3‑3, 4‑1, 4‑2).  
- Évaluer les écarts entre pratiques actuelles et exigences de la norme.  
- **Livrables** : rapport de gap analysis, tableau des écarts, plan de priorisation.  

### 2. Définition des SL‑T et feuille de route
- Définir les Security Levels cibles (SL‑T) par zone et conduits.  
- Formaliser une feuille de route validée par le COMEX.  
- **Livrables** : matrice SL‑T, note stratégique, validation direction.  

### 3. Plan de remédiation & quick wins
- Prioriser les actions correctives :  
  - Quick wins (comptes partagés → MFA, segmentation de base).  
  - Actions structurantes (zoning complet, PRA OT, SOC OT).  
- **Livrables** : plan de remédiation, backlog d’actions, jalons de suivi.  

### 4. Implémentation et tests
- Déployer les correctifs organisationnels et techniques.  
- Organiser FAT et SAT pour valider la conformité.  
- **Livrables** : PV FAT/SAT, scripts de durcissement, rapports de test.  

### 5. Suivi & gouvernance
- Mettre en place des KPI OT (patching, incidents, PRA, comptes).  
- Organiser des revues périodiques IT/OT et des audits réguliers.  
- **Livrables** : tableau de bord KPI OT, comptes rendus de comités, rapports annuels au COMEX.  

---

## Exemple de calendrier type de mise en conformité (24 mois)

| **Phase**              | **Mois 1-6**                   | **Mois 7-12**                 | **Mois 13-18**                | **Mois 19-24**                 |
|-------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| Gap analysis            | ✔ Réalisée                     |                                |                                |                                |
| SL‑T & roadmap          | ✔ Validée COMEX                |                                |                                |                                |
| Quick wins              | MFA, segmentation de base       |                                |                                |                                |
| Actions structurantes   |                                | Zoning complet, PRA OT         | SOC OT, durcissement complet   | Test PRA, simulation incident  |
| FAT/SAT                 |                                | ✔ FAT plateforme               | ✔ SAT site                     |                                |
| Suivi KPI               | Tableau patchs & incidents     | Rapports PRA                   | Tableau comptes & PRA testés   | Bilan complet COMEX            |

---

## Exemple de matrice SL‑T vs SL‑A

| **Zone**          | **SL‑T visé** | **SL‑A mesuré** | **Preuves associées** |
|-------------------|---------------|-----------------|------------------------|
| SCADA             | 3             | 2               | Journaux MFA, PV SAT   |
| Automates (PLC)   | 3             | 3               | Certificats firmware signé, PV FAT |
| Historian         | 2             | 2               | Config TLS, journaux SIEM |
| Télégestion radio | 3             | 2               | Config VPN, tests de latence |

---

## Exemples de KPI OT à suivre

- **% patchs OT appliqués < 30 jours**.  
- **% comptes supprimés < 7 jours après départ utilisateur**.  
- **Taux de restauration PRA testée** (% de succès des tests de restauration).  
- **Délai moyen de détection d’incidents OT** (MTTD).  
- **Disponibilité SCADA/Historian (%)**.  

---

## Retours d’expérience et cas concrets

- **Eau potable** : un exploitant a mené une gap analysis révélant 70% de non‑conformité. En priorisant les quick wins (MFA, segmentation), il a pu réduire les risques critiques en 6 mois et planifier les mesures lourdes sur 2 ans.  
- **Agro‑alimentaire** : absence de plan de remédiation structuré. Résultat : des audits répétaient les mêmes constats. Depuis, la feuille de route IEC 62443 a été intégrée au plan directeur industriel.  
- **Énergie** : mise en conformité imposée par NIS2. L’opérateur a adopté la 62443 comme cadre et a pu démontrer à l’auditeur que chaque exigence réglementaire avait un contrôle associé.  

---

## Preuves d’audit attendues

- Rapports de gap analysis et tableaux d’écarts.  
- Feuille de route validée par la direction.  
- Plan de remédiation avec priorisation des actions.  
- PV FAT/SAT validant les implémentations.  
- Tableaux KPI OT avec suivi des patchs, incidents et PRA.  
- Matrice SL‑T vs SL‑A avec preuves associées.  
- Rapports de tests PRA OT.  

---

## Impacts organisationnels et gouvernance

- Le **COMEX** doit approuver la feuille de route et valider les SL‑T.  
- Le **RSSI OT** pilote la démarche et rend compte régulièrement.  
- Les **intégrateurs** doivent appliquer les correctifs et fournir les preuves FAT/SAT.  
- Les **fournisseurs** doivent fournir le SL‑C de leurs composants et s’aligner sur le plan de remédiation.  

---

## Comparaisons utiles

- **ISO 27001** : prévoit le plan de traitement des risques, équivalent de la gap analysis + plan de remédiation.  
- **NIS2** : impose un calendrier de mise en conformité, ce qui rend la feuille de route indispensable.  
- **DORA** : exige la démonstration de conformité via des preuves documentées et auditées, comme le prévoit la 62443.  

---

## Conséquences opérationnelles pour le RSSI

Le RSSI doit :  
- Lancer une gap analysis et identifier les quick wins.  
- Définir les SL‑T et présenter une feuille de route validée au COMEX.  
- Organiser la mise en œuvre et les tests FAT/SAT.  
- Suivre les KPI OT et en faire le reporting.  
- Préparer les preuves pour auditeurs et régulateurs.  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant devra être capable de :  
- Expliquer la démarche de mise en conformité IEC 62443.  
- Réaliser une gap analysis et identifier les quick wins.  
- Construire une feuille de route avec SL‑T et plan de remédiation.  
- Utiliser une matrice SL‑T vs SL‑A et des KPI OT pour piloter la conformité.  
- Préparer et présenter les preuves d’audit nécessaires.  

---

## Checklist RSSI

- [ ] Réaliser une gap analysis initiale.  
- [ ] Définir les SL‑T et les valider avec le COMEX.  
- [ ] Construire et suivre un plan de remédiation.  
- [ ] Exiger PV FAT/SAT pour valider les corrections.  
- [ ] Mettre en place un suivi KPI OT et présenter les résultats régulièrement.  
- [ ] Maintenir une matrice SL‑T vs SL‑A à jour avec preuves.  
