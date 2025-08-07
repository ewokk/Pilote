# Attack Simulation

> **Type** : concept 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : détection `#détection`, offensif, audit

---

## Définition
> Une **Attack Simulation** est une **technique de test de sécurité** qui consiste à **reproduire les comportements d’un attaquant réel** afin d’évaluer la résilience d’un système informatique, d’un réseau ou d’une organisation face à une intrusion ou à une compromission.

---

## Explication détaillée
- **Origine ou historique**  
  Popularisée avec les concepts de Red Teaming, l’attack simulation se distingue des pentests classiques par sa **portée plus réaliste et stratégique**. Elle s’est professionnalisée avec les outils BAS (Breach & Attack Simulation).

- **Fonctionnement technique**  
  - Exécution de **scénarios d’attaque contrôlés** simulant des techniques réelles (TTP)
  - Tests d’intrusion physique, social engineering, ou exploitation logique
  - Mesure des capacités de détection, réponse et remédiation
  - Peut être réalisée **manuellement (Red Team)** ou **automatiquement (BAS)**

- **Rôles & fonctions**  
  - Tester les capacités SOC, EDR, SIEM
  - Identifier les lacunes de détection ou réponse
  - Améliorer la posture de cybersécurité globale
  - Éduquer et entraîner les équipes Blue Team

- **Avantages et limites**  
  + Réaliste, représentatif des menaces modernes  
  + Peut être ciblé sur des objectifs critiques  
  – Peut causer des perturbations si mal préparé  
  – Coût potentiellement élevé (ressources humaines ou outils BAS)

- **Typologies ou variantes**  
  - Red Team (humaine) vs Purple Team (collaborative) vs BAS (automatisée)
  - Simulation ciblée (phishing, ransomware, lateral movement…)
  - Tests sur SI, cloud, Active Directory…

---

## Cas d’usage & exemples concrets
- Simuler une attaque de spear phishing pour voler des identifiants
- Reproduire un lateral movement via SMB dans un réseau d’entreprise
- Valider la détection MITRE ATT&CK TTP dans un EDR
- Exécuter une campagne de simulation via AttackIQ ou SafeBreach

---

## Vulnérabilités, risques et abus connus
- Mauvaise isolation du périmètre de test
- Déclenchement involontaire de mécanismes de sécurité (alarme, verrouillage)
- Utilisation d’outils mal maîtrisés pouvant nuire au SI
- Risques juridiques sans accord explicite ou cadre contractuel

---

## Mesures de sécurité & recommandations
- Définir un **scope strict** et validé
- Impliquer les équipes sécurité dans le processus
- Utiliser des outils reconnus et sécurisés
- Préparer un **plan de remédiation immédiat**
- Documenter et analyser chaque résultat

---

## Standards, protocoles & normes associées
- MITRE ATT&CK (cadre de référence)
- NIST SP 800-115 – test de sécurité technique
- ISO/IEC 27035 – gestion d’incidents
- OWASP Security Testing Guide

---

## Intégration dans un écosystème SSI
- Étroitement liée au **SOC**, **CTI** et **gestion des risques**
- Apporte des preuves concrètes d’efficacité ou de défaillance
- Complément au pentest, audit, et scan de vulnérabilité

---

## Liens avec d’autres notions
- [[Red Team]]
- [[Purple Team]]
- [[EDR]]
- [[MITRE ATT&CK]]

---

## Sources, outils & références
- [NIST SP 800-115](https://csrc.nist.gov/publications/detail/sp/800-115/final)
- [BAS tools : AttackIQ, SafeBreach, Cymulate](https://attackiq.com/)
- [MITRE ATT&CK & Simulations](https://attack.mitre.org/)
- [Attack Simulation Demo (YouTube)](https://www.youtube.com/watch?v=AyDAHn6D2yA)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#attack_simulation` `#red_team` `#bas` `#test_de_sécurité` `#MITRE`
