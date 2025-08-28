# Modes de détection : signature, comportement, IA

## Détection par signature

- Basée sur des **empreintes connues** (hash, regex, IOC)
- Très efficace pour les menaces **connues**
- Exemples : antivirus classique, Snort, YARA

> [!warning]
> Inefficace contre les variantes, attaques inédites, malware polymorphes.

---

## Détection comportementale

- Basée sur l’**analyse du comportement**
- Détecte les anomalies (ex : exécution PowerShell inhabituelle)
- Utilise souvent des moteurs de règles ou heuristiques

---

## Détection par IA / ML

- Apprentissage supervisé ou non
- Utilise des **modèles statistiques**, du clustering, des corrélations temps réel
- Exemple : détection d’un compte dormant qui accède soudain à des fichiers sensibles

> [!info]
> L’IA est de plus en plus présente, notamment via l’analyse **UEBA** (User & Entity Behavior Analytics)

---

## Détection hybride

La plupart des outils modernes **mêlent ces approches** :
- Règles SIGMA pour le SIEM
- TTP MITRE ATT&CK pour corrélation comportementale
- IA pour enrichir ou auto-apprendre (cas des XDR)

