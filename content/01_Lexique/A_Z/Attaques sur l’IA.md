# Attaques sur l’IA

> **Catégorie** : #ia  
> **Type** : concept 
> **Niveau** : avancé 
> **Contexte** : offensif

---

## Définition
> Les attaques sur l’intelligence artificielle visent à manipuler, tromper ou exploiter les systèmes d’IA (notamment les modèles d’apprentissage automatique) pour en compromettre la fiabilité, la confidentialité ou la sécurité.

---

## Explication détaillée
- **Origine ou historique**  
  - Ces attaques ont émergé avec la généralisation de l’IA dans des domaines critiques (vision, langage, cybersécurité) dès les années 2010.
- **Fonctionnement technique**  
  - Types d’attaques :
    - *Adversarial examples* : petites perturbations imperceptibles qui trompent le modèle.
    - *Poisoning* : injection de données malveillantes lors de l'entraînement.
    - *Model inversion* ou *extraction* : reconstitution ou vol du modèle ou des données.
    - *Backdoors* : modèles entraînés avec des déclencheurs malveillants.
- **Rôles & fonctions**  
  - Espionnage, sabotage, désinformation, contournement de détection.
- **Avantages et limites**  
  - Peu coûteuses mais très puissantes si mal anticipées.
  - Leur efficacité dépend de la connaissance du modèle (white box vs black box).
- **Typologies ou variantes**  
  - Attaques ciblées vs généralisées, bruit aléatoire vs optimisé, en ligne ou hors ligne.

---

## Cas d’usage & exemples concrets
- Tromper une IA de reconnaissance faciale avec des lunettes modifiées.
- Sabotage d’un système de détection d’intrusion basé sur l’IA.
- Espionnage industriel par extraction d’un modèle concurrent.

---

## Vulnérabilités, risques et abus connus
- Données d’entraînement biaisées ou corrompues.
- Faible robustesse aux entrées non attendues.
- Difficulté à détecter les manipulations subtiles.

---

## Mesures de sécurité & recommandations
- Entraînement robuste (data augmentation, adversarial training).
- Détection d’entrées anormales ou malicieuses.
- Validation rigoureuse des données d’entraînement.
- Cloisonnement des modèles critiques et chiffrement des paramètres.

---

## Standards, protocoles & normes associées
- NIST AI Risk Management Framework
- ISO/IEC 24028 (AI trustworthiness)
- OWASP Top 10 for ML

---

## Intégration dans un écosystème SSI
- Nécessite une analyse de risque spécifique pour les composants IA.
- Doit être intégré aux processus DevSecOps.
- Complémentaire à la sécurité logicielle classique.

---

## Liens avec d’autres notions
- [[Apprentissage automatique]]
- [[Adversarial attack]]
- [[Sécurité des systèmes intelligents]]

---

## Sources, outils & références
- [Documentation officielle](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf)
- [Outils ou solutions associées](https://cleverhans.readthedocs.io/en/latest/)
- [Articles techniques, blogs spécialisés](https://openai.com/research/robustness)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=ZGvZ3dtUirw)

---

## Mots-clés
`#ia` `#lexique` `#concept` `#attaque` `#adversarial` `#machinelearning` `#sécurité`
