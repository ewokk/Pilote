# Architecture informatique

> **Type** : concept 
> **Niveau** : base 
> **Contexte** : gouvernance, infrastructure `#infrastructure`, conception

---

## Définition
> L’**architecture informatique** désigne la **structure globale d’un système d’information**, incluant ses composants matériels, logiciels, réseaux et leurs interactions, dans un objectif de performance, de sécurité, de résilience et d’évolutivité.

---

## Explication détaillée
- **Origine ou historique**  
  Le concept d’architecture vient du génie logiciel et de l’ingénierie système. Il s’est étendu aux SI pour répondre à la complexité croissante des infrastructures modernes.

- **Fonctionnement technique**  
  - Définition des **composants clés** (serveurs, bases de données, réseaux, pare-feux…)
  - Choix des **modèles de déploiement** (on-premise, cloud, hybride)
  - Définition des **flux de données** et des règles de sécurité
  - Prise en compte de la scalabilité, redondance, continuité

- **Rôles & fonctions**  
  - Fournir une vue cohérente et planifiée du système
  - Garantir la sécurité et l’interopérabilité
  - Servir de base aux évolutions techniques ou réglementaires
  - Accompagner les projets IT et métiers

- **Avantages et limites**  
  + Vision globale du système  
  + Facilite l’analyse de risques, les audits et la conformité  
  – Peut être rigide ou obsolète si non maintenue  
  – Nécessite une gouvernance technique active

- **Typologies ou variantes**  
  - Architecture **monolithique** vs **microservices**
  - Architecture **centralisée** vs **décentralisée**
  - Architecture **orientée services (SOA)**, **Zero Trust**, **Cloud-native**

---

## Cas d’usage & exemples concrets
- Cartographie d’un SI pour auditer les flux réseau
- Conception d’une DMZ pour isoler les serveurs exposés
- Déploiement d’une architecture microservices dans le cloud
- Migration d’un ERP vers une architecture hybride sécurisée

---

## Vulnérabilités, risques et abus connus
- Points de concentration (SPOF)
- Manque de segmentation réseau
- Dépendances mal identifiées
- Absence de cartographie ou de documentation à jour

---

## Mesures de sécurité & recommandations
- Appliquer les principes de défense en profondeur
- Maintenir une **cartographie des actifs et flux**
- Réaliser des revues régulières de l’architecture
- Intégrer la sécurité dès la conception (security by design)
- Documenter et faire valider les choix d’architecture

---

## Standards, protocoles & normes associées
- ISO/IEC 27001 & 27005 (analyse de risques, sécurité SI)
- TOGAF (framework d’architecture)
- NIST SP 800-160 – systèmes sûrs par conception
- Zachman Framework

---

## Intégration dans un écosystème SSI
- Cœur de la gestion des risques, des audits et de la conformité
- Pilier pour les PSSI, PCA/PRA et plans d’urbanisation
- Source de vérité pour les équipes techniques, sécurité et métiers

---

## Liens avec d’autres notions
- [[Cartographie du SI]]
- [[Défense en profondeur]]
- [[Cloud hybride]]
- [[Urbanisation du SI]]

---

## Sources, outils & références
- [TOGAF – Open Group](https://www.opengroup.org/togaf)
- [Outils de modélisation (ArchiMate, Draw.io, Lucidchart)](https://archimatetool.com/)
- [ANSSI – Cartographie des systèmes critiques](https://www.ssi.gouv.fr/)
- [Architecture IT expliquée (YouTube)](https://www.youtube.com/watch?v=BXY6Mg3Mx5c)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#architecture` `#conception` `#SI` `#cartographie` `#infrastructure` `#urbanisation`
