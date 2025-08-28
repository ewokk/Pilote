# 07_Traitement_Risques

## Introduction

Le traitement des risques est l’étape qui transforme l’analyse théorique en décisions concrètes et actionnables. L’ISO/IEC 27005 énumère les options (réduction, transfert, acceptation, évitement), mais un simple inventaire ne suffit pas : il faut guider les organisations dans le **choix de la meilleure option**, en tenant compte des coûts, des bénéfices, des responsabilités et des échéances.  

---

## Options de traitement

- **Réduction** : mettre en œuvre des mesures de sécurité pour diminuer impact et/ou vraisemblance. Exemple : appliquer des correctifs, déployer un EDR.  
- **Transfert** : déléguer une partie du risque à un tiers (assurance, sous-traitance, hébergement). Attention : la responsabilité finale reste à l’organisation.  
- **Acceptation** : décider de vivre avec le risque si le coût de traitement dépasse les bénéfices attendus, dans les limites de l’appétence définie.  
- **Évitement** : supprimer l’activité à risque (ex. abandonner un service non sécurisé jugé trop coûteux à protéger).  

---

## Critères de choix

Pour décider entre ces options, les critères suivants doivent être pris en compte :  
- **Niveau de risque résiduel attendu** (post-traitement).  
- **Coût de la mesure** (financier, organisationnel, humain).  
- **Gain estimé** (réduction du risque, conformité réglementaire, image).  
- **Délai de mise en œuvre**.  
- **Appétence et tolérance au risque** fixées par la direction.  
- **Indicateurs de performance (KPI)** pour vérifier l’efficacité.  

---

## Plan de traitement des risques

Un plan de traitement doit être formalisé et inclure :  
- Propriétaire du risque (responsable désigné).  
- Mesures retenues et justification.  
- Budget alloué.  
- Échéance de mise en œuvre.  
- KPI de suivi.  

### Exemple de tableau

| Mesure                     | Risque ciblé                            | Coût   | Gain estimé                     | Propriétaire | Échéance   | KPI |
|----------------------------|-----------------------------------------|--------|---------------------------------|--------------|------------|-----|
| Segmentation réseau OT     | Rançongiciel sur automates industriels  | Moyen  | Réduction vraisemblance ×3      | RSSI OT      | 6 mois     | % machines segmentées |
| Sauvegardes immuables      | Perte de données clients                | Faible | Garantie restauration en 2h     | DSI          | 3 mois     | RTO PRA respecté |
| Assurance cyber            | Perte financière liée à rançongiciel    | Élevé  | Couverture jusqu’à 5 M€         | Direction    | 1 mois     | Montant couvert |
| Arrêt d’un service obsolète| Application legacy vulnérable           | Faible | Suppression du risque à la source | Métiers      | 2 mois     | Service arrêté |

---

## Cas concrets

- **Santé** : un hôpital a décidé de transférer une partie de ses risques de rançongiciels via une assurance cyber, tout en réduisant le risque résiduel par la mise en place de PRA/PCA robustes.  
- **Industrie** : une usine a évité un risque critique en abandonnant une application non maintenue, préférant migrer vers une solution SaaS sécurisée.  
- **Finance** : une banque combine réduction (chiffrement, EDR) et transfert (externalisation cloud sous contrat ISO 27001) pour gérer les risques liés aux données sensibles.  

---

## Objectifs pédagogiques

- Connaître les quatre options de traitement des risques.  
- Savoir appliquer des critères objectifs pour choisir la meilleure option.  
- Construire un plan de traitement complet et traçable.  
- Utiliser des KPI pour suivre l’efficacité des mesures.  

---

## Checklist RSSI

- [ ] Chaque risque critique a-t-il un propriétaire désigné ?  
- [ ] Les options de traitement (réduction, transfert, acceptation, évitement) ont-elles été évaluées avec critères de coût/gain ?  
- [ ] Le plan de traitement contient-il échéances, budgets et indicateurs ?  
- [ ] La SoA justifie-t-elle clairement chaque mesure retenue ou écartée ?  
- [ ] Les KPI de suivi des mesures sont-ils définis et suivis régulièrement ?  
