# Attack Graphs

> **Type** : concept 
> **Niveau** : avancé 
> **Contexte** : modélisation `#modélisation`, sécurité offensive, analyse de risque

---

## Définition
> Les **Attack Graphs** (ou graphes d’attaque) sont des **représentations graphiques** qui modélisent l’ensemble des chemins possibles qu’un attaquant peut suivre dans un système pour atteindre un objectif malveillant.

---

## Explication détaillée
- **Origine ou historique**  
  Introduits dans les années 1990 dans les travaux de modélisation de la sécurité, les attack graphs sont utilisés en cybersécurité pour anticiper les mouvements d’un attaquant dans un système.

- **Fonctionnement technique**  
  - Un **nœud** représente un état du système (ex : machine compromise, accès à une ressource)
  - Un **arc** représente une action ou une exploitation de vulnérabilité
  - Le graphe permet de simuler des **enchaînements d’attaques**
  - Peut être **automatisé** à partir de scanners de vulnérabilités ou de règles formelles

- **Rôles & fonctions**  
  - Visualiser les vecteurs d’attaque possibles
  - Identifier les chemins critiques menant à un actif sensible
  - Prioriser les mesures de remédiation
  - Appuyer une démarche de threat modeling ou de red teaming

- **Avantages et limites**  
  + Aide à comprendre et visualiser les risques  
  + Permet une approche proactive  
  – Complexité élevée sur les grands systèmes  
  – Nécessite des données d’entrée précises et à jour

- **Typologies ou variantes**  
  - Graphes dirigés acycliques (DAG)
  - Attack Graphs probabilistes (Bayesiens)
  - Hybridation avec MITRE ATT&CK ou arbre de décision

---

## Cas d’usage & exemples concrets
- Simulation d’attaque dans un réseau d’entreprise
- Analyse du risque résiduel après patching
- Planification d’un exercice Red Team
- Génération automatique de chemins d’attaque avec outils comme MulVAL ou BloodHound

---

## Vulnérabilités, risques et abus connus
- Mauvaise interprétation du graphe (niveau de risque réel)
- Données obsolètes ou incomplètes faussant l’analyse
- Risque de surcharge cognitive pour des environnements complexes

---

## Mesures de sécurité & recommandations
- Utiliser des outils automatisés avec des données actualisées
- Compléter avec de l’intelligence humaine (CTI, pentest)
- Identifier et cartographier les **actifs critiques** en priorité
- Coupler avec des politiques de défense en profondeur

---

## Standards, protocoles & normes associées
- MITRE ATT&CK (modélisation des TTP)
- NIST SP 800-154 – threat modeling
- ISO/IEC 27005 – analyse de risques

---

## Intégration dans un écosystème SSI
- Utilisés dans la **cyber threat intelligence**, le **SOC** et les équipes **Red/Blue**
- Outils de simulation dans les plateformes de sécurité avancée
- Combinés avec des frameworks comme ATT&CK ou Kill Chain

---

## Liens avec d’autres notions
- [[Threat Modeling]]
- [[Kill Chain]]
- [[MITRE ATT&CK]]
- [[Attack Trees]]

---

## Sources, outils & références
- [NIST SP 800-154 – Threat Modeling](https://csrc.nist.gov/publications/detail/sp/800-154/final)
- [BloodHound, MulVAL, Cauldron](https://github.com/BloodHoundAD/BloodHound)
- [Attack Graph Analysis (ACM)](https://dl.acm.org/doi/10.1145/590063.590065)
- [Graph-based Threat Modeling (YouTube)](https://www.youtube.com/watch?v=HTJ4Yy_KbFE)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#attack_graphs` `#modélisation` `#MITRE` `#risque` `#threat_modeling`
