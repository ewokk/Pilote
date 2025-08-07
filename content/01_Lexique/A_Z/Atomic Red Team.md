# Atomic Red Team

> **Type** : outil  `#outil`  
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : détection `#détection`, offensive, blue team `#blueteam`, MITRE ATT&CK

---

## Définition
> **Atomic Red Team** est une **bibliothèque open-source de tests de simulation d’attaques**, permettant de vérifier l’efficacité des mécanismes de détection d’une organisation en reproduisant des **comportements malveillants simples et atomiques**, basés sur la **matrice MITRE ATT&CK**.

---

## Explication détaillée
- **Origine ou historique**  
  Créé par Red Canary, Atomic Red Team est conçu pour rendre les tests de simulation d’attaques accessibles et reproductibles, sans nécessiter de framework complexe de Red Team.

- **Fonctionnement technique**  
  - Chaque “test atomique” est une **représentation minimale d’une technique ATT&CK**
  - Scripts fournis pour Windows, Linux, macOS (PowerShell, Bash, etc.)
  - Tests exécutables manuellement ou via **Invoke-AtomicRedTeam**
  - Intégrable dans des pipelines d’automatisation ou de validation (CI/CD, SIEM)

- **Rôles & fonctions**  
  - Vérifier la capacité de détection d’un SOC
  - Améliorer les règles de corrélation SIEM ou EDR
  - Former les analystes à reconnaître des comportements suspects
  - Tester les cas d’usage de sécurité (Use Case Validation)

- **Avantages et limites**  
  + Léger, open source et très simple à utiliser  
  + Couvre une grande partie de MITRE ATT&CK  
  – Ce ne sont pas des attaques réelles (tests simplifiés)  
  – Ne remplace pas une vraie Red Team ou un pentest

- **Typologies ou variantes**  
  - Tests par technique ATT&CK (ex : T1059 – Command and Scripting Interpreter)
  - Execution manuelle ou orchestrée via Atomic Operator, Prelude, VECTR
  - Tests spécifiques OS (Windows, Linux, macOS)

---

## Cas d’usage & exemples concrets
- Tester la détection d’un `net user` local sur Windows
- Vérifier que l’EDR détecte la création de tâches planifiées
- Rejouer une attaque de type credential dumping avec mimikatz simulé
- Entraîner les analystes SOC à répondre à des événements simulés

---

## Vulnérabilités, risques et abus connus
- Mauvaise interprétation des résultats (test ≠ attaque réelle)
- Risques de perturbation si exécuté en production sans précaution
- Besoin de corrélation avec les logs SIEM pour exploiter les résultats
- Certaines techniques peuvent déclencher des alertes ou du blocage

---

## Mesures de sécurité & recommandations
- Exécuter dans un environnement de test ou contrôlé
- Coupler avec des outils de validation comme VECTR ou Security Canary
- Documenter les résultats et les gaps de détection
- Rejouer régulièrement les tests après mise à jour de la sécurité

---

## Standards, protocoles & normes associées
- MITRE ATT&CK (cadre de référence)
- TTP Red Teaming
- OWASP Security Testing Guide
- Intégrable dans le NIST CSF – fonction "Detect"

---

## Intégration dans un écosystème SSI
- Outil clé pour le **threat hunting** et le **SOC Maturity Model**
- Support de l’amélioration continue de la détection
- Aide à cartographier les capacités SOC selon ATT&CK

---

## Liens avec d’autres notions
- [[MITRE ATT&CK]]
- [[EDR]]
- [[SOC]]
- [[Red Team]]

---

## Sources, outils & références
- [Atomic Red Team GitHub](https://github.com/redcanaryco/atomic-red-team)
- [Invoke-AtomicRedTeam](https://github.com/redcanaryco/invoke-atomicredteam)
- [Red Canary – blog & docs](https://redcanary.com/atomic-red-team/)
- [Atomic Red Team Demo (YouTube)](https://www.youtube.com/watch?v=glEZmTwE87M)

---

## Mots-clés
`#cybersécurité` `#lexique` `#outil` `#AtomicRedTeam` `#MITRE` `#SOC` `#détection` `#simulation` `#ATTACK`
