# Attack Trees

> **Type** : concept 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : modélisation `#modélisation`, gestion des risques `#risques`, sécurité logique

---

## Définition
> Les **Attack Trees** (arbres d’attaque) sont une méthode de **modélisation des menaces** représentant les différentes façons dont un attaquant peut atteindre un objectif spécifique, sous forme d’un arbre logique décomposé en sous-étapes ou préconditions.

---

## Explication détaillée
- **Origine ou historique**  
  Popularisé par **Bruce Schneier** dans les années 1990, le concept d’Attack Tree provient du domaine militaire et de la sûreté de fonctionnement, adapté à la sécurité informatique.

- **Fonctionnement technique**  
  - L’objectif de l’attaquant est à la **racine de l’arbre**
  - Les **nœuds intermédiaires** décrivent des sous-objectifs ou des étapes
  - Les **feuilles** représentent des actions élémentaires
  - Les relations peuvent être **logiques** (AND/OR), **séquentielles**, **pondérées**

- **Rôles & fonctions**  
  - Comprendre la logique d’un scénario d’attaque
  - Identifier les points faibles du système
  - Aider à la priorisation des contre-mesures
  - Appuyer les analyses de risque ou de sûreté

- **Avantages et limites**  
  + Visuel, structuré, pédagogique  
  + Favorise la compréhension des attaques complexes  
  – Peut devenir complexe à grande échelle  
  – Nécessite des hypothèses fiables et actualisées

- **Typologies ou variantes**  
  - Attack Trees classiques (AND/OR)
  - Attack-Defense Trees (ajout de contre-mesures)
  - Probabilistic Attack Trees (pondération des risques)

---

## Cas d’usage & exemples concrets
- Analyse du scénario “vol de données client”
- Décomposition d’une attaque contre un système SCADA
- Identification des chemins les plus courts ou les plus probables
- Simulation de stratégie défensive (par ajout de contre-mesures)

---

## Vulnérabilités, risques et abus connus
- Arbres incomplets ou trop simplifiés
- Sous-estimation de certaines attaques “non techniques”
- Risque de confiance excessive dans le modèle
- Manque de mise à jour face à l’évolution des menaces

---

## Mesures de sécurité & recommandations
- Impliquer des profils variés (techniques, métiers, SSI)
- Croiser avec d’autres sources (MITRE ATT&CK, CTI…)
- Évaluer l’impact et la vraisemblance des branches
- Utiliser des outils spécialisés pour la visualisation et l’analyse

---

## Standards, protocoles & normes associées
- ISO/IEC 15408 (Common Criteria)
- NIST SP 800-30 – Risk Assessment
- Intégration possible dans EBIOS RM (surtout phase 2 et 3)
- Compatibilité avec la modélisation SysML ou UML

---

## Intégration dans un écosystème SSI
- Méthode utilisée dans l’analyse de risque, threat modeling, audits
- Support des réflexions tactiques et défensives (Red/Blue Team)
- Utile pour démontrer la valeur des contre-mesures

---

## Liens avec d’autres notions
- [[Threat Modeling]]
- [[Attack Graphs]]
- [[EBIOS RM]]
- [[Risk Analysis]]

---

## Sources, outils & références
- [Schneier – Attack Trees](https://www.schneier.com/academic/archives/1999/12/attack_trees.html)
- [Outils : ADTool, SeaMonster, SecurITree](https://satoss.uni.lu/software/adtool/)
- [NIST SP 800-30](https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final)
- [Attack Trees Explained (YouTube)](https://www.youtube.com/watch?v=dcl2TkXvTT4)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#attack_tree` `#modélisation` `#analyse_de_risques` `#threat_modeling` `#EBIOS`
