# Adversarial attack

> **Type** : concept
> **Niveau** : avancé
> **Contexte** : offensif, IA, sécurité des modèles

---

## Définition

> Une **adversarial attack** est une attaque qui vise à tromper un modèle d’intelligence artificielle (souvent un modèle d’apprentissage automatique) en y injectant des données spécialement conçues pour provoquer une erreur de classification ou une décision incorrecte.

---

## Explication détaillée

- **Origine ou historique**  
  Le concept a émergé avec le développement des réseaux neuronaux profonds. En 2014, des chercheurs ont démontré que des images légèrement modifiées pouvaient tromper les réseaux de reconnaissance visuelle, sans que l’humain ne perçoive la différence.

- **Fonctionnement technique**  
  - Les attaquants créent des **perturbations quasi-invisibles** ajoutées aux entrées du modèle (image, texte, audio…)
  - Ces perturbations exploitent les **faiblesses mathématiques** du modèle (ex : gradients mal maîtrisés)
  - Types d’attaques :
    - **FGSM** (Fast Gradient Sign Method)
    - **PGD** (Projected Gradient Descent)
    - **Carlini & Wagner attack**
    - **Black-box vs White-box** (selon accès au modèle)

- **Rôles & fonctions**  
  - Tester la robustesse d’un modèle IA
  - Exploiter une faille dans un système automatique (reconnaissance faciale, véhicules autonomes…)
  - Entraîner une IA plus résiliente (via adversarial training)

- **Avantages et limites**  
  + Perturbations souvent imperceptibles par l’œil humain  
  + Permet d’améliorer la sécurité IA (recherche)  
  – Attaques parfois coûteuses en calculs  
  – Généralisation difficile (modèle spécifique)

- **Typologies ou variantes**  
  - Attaques sur modèles de classification (image, texte)
  - Attaques sur modèles séquentiels (NLP, audio)
  - Attaques physiques (pancarte modifiée trompant un véhicule)

---

## Cas d’usage & exemples concrets

- Modifier un panneau “STOP” pour qu’un véhicule autonome le voie comme “LIMIT 45”
- Tromper un système biométrique de reconnaissance faciale
- Attaques sur les filtres de modération de contenu (IA de modération)
- Entraîner des modèles plus robustes en cybersécurité (adversarial training)

---

## Vulnérabilités, risques et abus connus

- Systèmes IA dans les véhicules autonomes, sécurité, finance...
- Mauvaise généralisation des modèles → vulnérabilité exploitée
- Pas de traçabilité claire des attaques dans certains cas
- Rendu indétectable pour l’humain

---

## Mesures de sécurité & recommandations

- Adversarial training (exposition contrôlée à des attaques)
- Utilisation de défenses comme distillation défensive, régularisation
- Détection d’inputs suspects (statistiques, réseaux de détection)
- Tests de robustesse réguliers sur les modèles IA

---

## Standards, protocoles & normes associées

- NIST AI Risk Management Framework (AI RMF)
- OWASP Top 10 for LLMs (risques IA émergents)
- IEEE P7003 sur la transparence algorithmique

---

## Intégration dans un écosystème SSI

- Nécessite une collaboration entre experts cybersécurité et IA
- Intégré dans la sécurisation des pipelines MLOps
- Représente une surface d’attaque nouvelle dans les SI modernes

---

## Liens avec d’autres notions

- [[Machine Learning]]
- [[Adversarial training]]
- [[IA robuste]]
- [[Deep Learning]]

---

## Sources, outils & références

- [Explaining and Harnessing Adversarial Examples (Goodfellow, 2014)](https://arxiv.org/abs/1412.6572)
- [CleverHans (librairie de test)](https://github.com/cleverhans-lab/cleverhans)
- [MITRE ATLAS - IA & sécurité](https://atlas.mitre.org/)
- [Adversarial Attacks - Two Minute Papers](https://www.youtube.com/watch?v=QEhVf5l1V5g)
