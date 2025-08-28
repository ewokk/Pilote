# 09_Methode_MEALEE_EBIOS

## Introduction

L’ISO/IEC 27005 n’impose pas une méthode unique de gestion des risques : elle fournit un cadre flexible dans lequel peuvent s’inscrire différentes approches. Ce chapitre illustre comment utiliser les méthodes MEHARI, MEA/LEE et EBIOS RM, et comment les relier aux étapes ISO 27005.  

---

## Panorama des méthodes

- **MEHARI** : orientée catalogues de scénarios et questionnaires. Utile pour des organisations recherchant une démarche rapide, basée sur des référentiels prêts à l’emploi.  
- **MEA/LEE (Méthode harmonisée ANSSI)** : approche simple de notation Impact × Vraisemblance, adaptée aux petites structures ou comme point d’entrée.  
- **EBIOS RM** : méthode française reconnue internationalement, détaillée et structurée en ateliers. Pertinente pour les organisations nécessitant une analyse fine des menaces, notamment en contexte critique (secteur défense, opérateurs d’importance vitale).  

---

## Quand utiliser quoi ?

- **MEA/LEE** : contexte simple, peu de ressources, volonté de déployer vite une première approche.  
- **MEHARI** : besoin d’une bibliothèque de scénarios standardisés et d’outils concrets pour alimenter le registre.  
- **EBIOS RM** : besoin d’une méthode approfondie, de justifier la gestion des risques face à des régulateurs exigeants (ANSSI, OIV, secteur bancaire), ou d’intégrer des menaces complexes (APT, supply chain).  

---

## Paramétrage concret

Quelle que soit la méthode retenue, le RSSI doit veiller à :  
- Définir des échelles d’impact et de vraisemblance cohérentes avec le référentiel interne.  
- Fixer des seuils d’acceptation et de tolérance partagés avec la direction.  
- Produire des sorties comparables : registre des risques, plan de traitement, SoA.  

Un exemple d’alignement :  
- MEA/LEE produit directement un scoring impact × vraisemblance → intégrable dans la matrice ISO 27005.  
- EBIOS RM produit des scénarios enrichis → transposables dans le registre ISO 27005.  

---

## Mapping EBIOS RM ↔ ISO 27005

| Ateliers EBIOS RM                 | Étapes ISO 27005           |
|-----------------------------------|-----------------------------|
| Atelier 1 : Cadrage               | Établir le contexte         |
| Atelier 2 : Sources de menace     | Identification des risques  |
| Atelier 3 : Scénarios stratégiques| Analyse/évaluation des risques |
| Atelier 4 : Études de scénarios   | Évaluation détaillée        |
| Atelier 5 : Traitement des risques| Traitement + Plan d’action  |

---

> [!example]  
> Si l’organisation a déjà des ateliers EBIOS RM matures, ISO 27005 sert de cadre chapeau pour intégrer ces résultats au SMSI (27001).

---

## Cas concrets

- **PME** : déploie MEA/LEE pour une première vision des risques, puis intègre le registre dans ISO 27005.  
- **Banque** : réalise des ateliers EBIOS RM pour cartographier les menaces avancées (fraude, APT), et alimente le SMSI ISO 27001.  
- **Industriel OIV** : utilise MEHARI pour générer rapidement des scénarios, mais rattache les résultats au processus ISO 27005 pour garder une cohérence audit ISO.  

---

## Objectifs pédagogiques

- Connaître les principales méthodes (MEA/LEE, MEHARI, EBIOS RM).  
- Savoir quand appliquer chaque méthode selon la maturité et le contexte.  
- Paramétrer les échelles et seuils pour rester cohérent.  
- Intégrer EBIOS RM et autres méthodes dans le cadre ISO 27005.  

---

## Checklist RSSI

- [ ] Une méthode adaptée au contexte (MEA/LEE, MEHARI, EBIOS RM) est-elle choisie ?  
- [ ] Les échelles et seuils sont-ils cohérents avec le référentiel ISO 27005 ?  
- [ ] Les sorties de la méthode (scénarios, registres) sont-elles intégrées au SMSI ?  
- [ ] Les ateliers EBIOS RM sont-ils alignés sur les étapes ISO 27005 ?  
