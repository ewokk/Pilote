# 06_Evaluation_Risques

## Introduction

L’évaluation des risques est l’étape pivot du processus ISO/IEC 27005. C’est elle qui permet de passer de la simple identification de scénarios à une hiérarchisation chiffrée et exploitable pour la prise de décision. Trop souvent réduite à un tableau sommaire, elle doit au contraire s’appuyer sur des méthodes de notation robustes, prenant en compte l’incertitude et permettant l’agrégation des résultats.  

---

## Méthode de notation : matrice 5×5

La méthode la plus utilisée consiste à croiser l’**impact** et la **vraisemblance** dans une matrice de 5 niveaux chacun, produisant une échelle de risque brut allant de 1 à 25.  

| Impact \ Vraisemblance | 1 (Rare) | 2 (Peu probable) | 3 (Possible) | 4 (Probable) | 5 (Fréquente) |
|--------------------------|----------|------------------|--------------|--------------|---------------|
| **1 (Mineur)**          | 1        | 2                | 3            | 4            | 5             |
| **2 (Limité)**          | 2        | 4                | 6            | 8            | 10            |
| **3 (Modéré)**          | 3        | 6                | 9            | 12           | 15            |
| **4 (Majeur)**          | 4        | 8                | 12           | 16           | 20            |
| **5 (Critique)**        | 5        | 10               | 15           | 20           | 25            |

Cette approche permet une lecture intuitive et rapide des scénarios de risques.  

---

## Risque brut vs résiduel

- **Risque brut** : niveau de risque calculé avant toute mesure de sécurité (impact × vraisemblance).  
- **Risque résiduel** : niveau de risque recalculé après application des mesures existantes ou prévues.  

Formule indicative :  
```
Risque brut = f(Impact, Vraisemblance)
Risque résiduel = Risque brut – efficacité des contrôles
```
Ou, plus rigoureusement, recalculer la vraisemblance après implémentation des mesures (exemple : passage de « fréquent » à « rare » grâce à un patch).  

---

## Exemple chiffré pas à pas

- Scénario : ransomware sur une base de données clients.  
- Impact évalué : 4 (Majeur).  
- Vraisemblance initiale : 3 (Possible).  
- **Risque brut** : 4 × 3 = 12 (élevé).  
- Contrôle ajouté : segmentation réseau + sauvegardes immuables.  
- Nouvelle vraisemblance estimée : 1 (Rare).  
- **Risque résiduel** : 4 × 1 = 4 (modéré, acceptable).  

Cet exemple montre concrètement la différence entre un risque brut et un risque résiduel.  

---

## Gestion de l’incertitude

Il est recommandé de documenter les marges d’incertitude dans l’évaluation (scoring en fourchette, avis d’experts, retour d’expérience limité). Cela évite de présenter les résultats comme des certitudes mathématiques alors qu’ils reposent souvent sur des estimations.  

---

## Agrégation par macro-risques

Une fois les risques évalués, il peut être utile de les agréger en **macro-risques** par thème ou par processus :  
- Risques liés à la continuité d’activité.  
- Risques liés à la protection des données personnelles.  
- Risques liés aux prestataires externes.  

Cette agrégation permet une présentation synthétique à la direction, tout en conservant le détail pour les équipes techniques.  

---

## Méthodes alternatives

Même si la matrice 5×5 reste la plus courante, d’autres approches existent :  
- **Qualitative simple** : niveaux « bas/moyen/haut » pour organisations débutantes.  
- **Semi-quantitative** : pondération chiffrée plus fine des impacts.  
- **Quantitative type FAIR** : estimation en valeur monétaire, utile pour discussions budgétaires avec la direction financière.  

Ces méthodes permettent d’adapter la granularité de l’analyse au niveau de maturité de l’organisation.  

---

## Lien avec l’ISO/IEC 27001

Cette étape alimente directement :  
- **Clause 6.1.2** (appréciation des risques) : registres de risques bruts et résiduels.  
- **Clause 6.1.3** (traitement des risques) : base pour décider des mesures et documenter la SoA.  
- **Clause 9.3** (revue de direction) : suivi des KPI risques et décisions associées.  

---

## Indicateurs / KPI de suivi

Un RSSI doit définir des indicateurs pour piloter l’évolution des risques :  
- % de risques critiques traités en moins de 3 mois.  
- % de risques résiduels supérieurs au seuil d’appétence.  
- Temps moyen de traitement d’un risque élevé.  

Ces KPI permettent de démontrer en audit que la gestion des risques n’est pas figée mais suivie dans le temps.  

---

> [!warning]  
> Biais fréquents : sur-notation pour « justifier » des projets de sécurité, sous-notation pour ne pas alerter la direction, double comptage de scénarios similaires, notation uniquement technique sans lien métier.  

---

> [!tip]  
> Organiser des ateliers de scoring pluridisciplinaires (RSSI, métiers, DSI, conformité) afin de croiser les points de vue et réduire les biais.  

---

## Cas concrets

- **Santé** : un hôpital a évalué comme risque brut 25 (impact critique × vraisemblance fréquente) l’indisponibilité de son DPI face aux rançongiciels, puis a recalculé un risque résiduel de 9 après mise en place de PRA et segmentation réseau.  
- **Finance** : une banque agrège ses risques liés aux prestataires cloud en un macro-risque « dépendance externe », afin d’alimenter la revue de direction ISO 27001 clause 9.3.  
- **Industrie** : un site de production évalue ses risques OT en atelier avec les équipes de maintenance et RSSI, afin de pondérer la vraisemblance par rapport à la réalité terrain.  

---

## Objectifs pédagogiques

- Savoir utiliser une matrice 5×5 pour évaluer les risques.  
- Comprendre la différence entre risque brut et résiduel.  
- Intégrer la notion d’incertitude dans l’évaluation.  
- Connaître les méthodes alternatives (qualitative, semi-quantitative, FAIR).  
- Relier l’évaluation des risques aux clauses 6.1.2, 6.1.3 et 9.3 de l’ISO 27001.  
- Piloter les risques par des KPI pertinents.  
- Savoir agréger les risques par macro-thématiques pour la gouvernance.  

---

## Checklist RSSI

- [ ] Une matrice de notation 5×5 est-elle utilisée et partagée ?  
- [ ] La distinction risque brut / résiduel est-elle documentée avec des exemples concrets ?  
- [ ] Les marges d’incertitude sont-elles prises en compte ?  
- [ ] Les méthodes alternatives (qualitative, FAIR) sont-elles connues et comprises ?  
- [ ] Les risques similaires sont-ils regroupés en macro-risques pour la gouvernance ?  
- [ ] Les KPI de suivi des risques sont-ils définis et suivis régulièrement ?  
- [ ] Des ateliers pluridisciplinaires de scoring sont-ils organisés régulièrement ?  
