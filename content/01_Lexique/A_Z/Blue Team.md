# Blue Team

> **Type** : rôle  `#rôle`  
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : défensif

---

## Définition
> La Blue Team désigne l’équipe chargée de défendre activement un système d’information contre les attaques, en surveillant, détectant, analysant et réagissant aux menaces en temps réel ou de manière proactive.

---

## Explication détaillée
- **Origine ou historique**  
  - Issue des exercices militaires de type "Red vs Blue" et transposée à la cybersécurité.
  - Complémentaire à la Red Team (attaquants simulés) et à la Purple Team (collaboration).
- **Fonctionnement technique**  
  - Supervision des logs via un SIEM.
  - Analyse comportementale et détection des anomalies (EDR, NDR).
  - Réponse aux incidents : containment, éradication, remédiation.
- **Rôles & fonctions**  
  - Maintenir la sécurité opérationnelle du système d’information.
  - Déployer les outils de défense et surveiller les alertes.
  - Participer à la gestion de crise en cas d’attaque.
- **Avantages et limites**  
  - Vision complète des infrastructures internes.
  - Moins exposée aux nouveautés offensives si pas formée régulièrement.
- **Typologies ou variantes**  
  - Blue Team SOC, Blue Team d’entreprise, MSSP (prestataires).

---

## Cas d’usage & exemples concrets
- Analyse d’une alerte de phishing via un SIEM.
- Containment rapide d’un poste infecté par ransomware.
- Audit de configuration des systèmes critiques.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Fatigue d’alerte : surcharge de faux positifs.
- Outils mal configurés ou sous-exploités.
- Manque de coordination avec la Red Team ou les développeurs.

---

## Mesures de sécurité & recommandations
- Formation continue en détection et investigation.
- Mise à jour régulière des règles de détection (IOC, YARA...).
- Automatisation des tâches répétitives via SOAR.
- Collaboration avec Red Team pour améliorer les défenses.

---

## Standards, protocoles & normes associées
- MITRE ATT&CK – techniques défensives associées
- ISO/IEC 27035 – gestion des incidents
- NIST SP 800-61 – Computer Security Incident Handling Guide

---

## Intégration dans un écosystème SSI
- Partie centrale des opérations de cybersécurité (SOC).
- En lien avec les RSSI, les analystes, les équipes réseau/systèmes.
- Collabore avec la gouvernance SSI et les plans de gestion de crise.

---

## Liens avec d’autres notions
- [[Red Team]]
- [[SOC]]
- [[Détection des incidents]]

---

## Sources, outils & références
- [Documentation officielle](https://www.ssi.gouv.fr/)
- [🛠️ Outils ou solutions associées](https://www.elastic.co/security/)
- [Articles techniques, blogs spécialisés](https://www.sans.org/blue-team/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=JkH2beNO5fU)

---

## Mots-clés
`#cybersécurité` `#lexique` `#rôle` `#blueteam` `#soc` `#détection`
