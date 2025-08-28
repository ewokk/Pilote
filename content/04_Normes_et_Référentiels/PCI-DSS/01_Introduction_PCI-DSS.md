# Introduction à PCI DSS

## Qu’est-ce Que PCI DSS ?

Le **Payment Card Industry Data Security Standard (PCI DSS)** est un standard international de sécurité de l'information destiné à protéger les **données des cartes de paiement** (PAN, SAD). Il est défini par le **PCI SSC (Payment Card Industry Security Standards Council)**.

> [!info]
> Le PCI DSS est applicable à **toute entité qui stocke, traite ou transmet** des données de cartes bancaires, quel que soit son secteur ou sa taille.

## Historique du PCI DSS

| Version | Date | Points clés |
|---------|------|-------------|
| 1.0 | 2004 | Première version, fusion des exigences des grandes marques |
| 2.0 | 2010 | Amélioration de la flexibilité d’implémentation |
| 3.x | 2013–2018 | Focus sur les tests de pénétration, segmentation, gestion des risques |
| **4.0** | **2022** | Nouveau paradigme basé sur les résultats ("customized approach"), renforcement des contrôles |

## Qui est concerné ?

- **Commerçants** (e-commerce, magasins physiques, marketplaces…)
- **Prestataires de services** (hébergement, traitement de paiements, Cloud)
- **Émetteurs, acquéreurs et processeurs de cartes**

## Objectifs de la norme

- Protéger les **données de carte** (PAN et SAD)
- Réduire la **surface d’attaque** des systèmes traitant ces données
- Fournir un cadre cohérent pour la **conformité et l’audit**

## Structure de la norme

PCI DSS repose sur :
- 6 objectifs de sécurité
- 12 exigences principales
- Plusieurs centaines de **sous-exigences techniques** détaillées

## PCI SSC et les marques de cartes

Le PCI SSC est soutenu par :
- Visa
- Mastercard
- American Express
- Discover
- JCB

Ce sont les **marques** qui exigent la conformité PCI DSS dans leurs contrats.

> [!quote]
> “PCI DSS is a security standard, not a law. However, its application is often contractually mandatory.” — PCI SSC
