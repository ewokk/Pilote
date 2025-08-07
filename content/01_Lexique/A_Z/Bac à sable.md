# Bac à sable

> **Type** : concept 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : défensif

---

## Définition
> Un bac à sable (sandbox) est un environnement isolé utilisé pour exécuter, tester ou analyser des programmes ou fichiers suspects sans risque pour le système hôte. Il permet d’observer le comportement d’un code dans un cadre contrôlé.

---

## Explication détaillée
- **Origine ou historique**  
  - Concept emprunté à la sécurité des systèmes d’exploitation, il a été popularisé par les antivirus modernes et les plateformes d’analyse de malwares.
- **Fonctionnement technique**  
  - Création d’un environnement virtuel ou conteneurisé qui mime un système réel.
  - Permet l’exécution de fichiers sans interaction avec le reste du système.
  - Peut inclure une surveillance réseau, mémoire, registre, processus.
- **Rôles & fonctions**  
  - Détection de comportements malveillants ou d’activités anormales.
  - Test de logiciels ou scripts potentiellement dangereux.
- **Avantages et limites**  
  - Très utile pour détecter des menaces 0-day.
  - Certains malwares détectent l’environnement sandbox et modifient leur comportement (anti-VM, time bombs).
- **Typologies ou variantes**  
  - Bac à sable logiciel vs matériel.
  - Sandbox statique vs dynamique.

---

## Cas d’usage & exemples concrets
- Analyse automatique de fichiers en pièce jointe dans les emails.
- Exécution d’un logiciel inconnu dans un environnement isolé avant déploiement.
- Environnement sécurisé pour tester du code dans les systèmes critiques.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Bypasses de sandbox : détection d’environnement ou exploitation de failles.
- Faux négatifs si le comportement malveillant est déclenché avec délai ou condition.
- Risques si l’isolation n’est pas hermétique.

---

## Mesures de sécurité & recommandations
- Mettre à jour régulièrement les sandbox.
- Utiliser des techniques d’analyse comportementale complémentaires.
- Intégrer à des chaînes CI/CD pour analyse de code tiers.
- Associer à un SIEM pour corrélation d’événements.

---

## Standards, protocoles & normes associées
- Recommandations NIST sur l’analyse de malwares (SP 800-83)
- Normes de durcissement d’environnement (CIS Benchmarks)

---

## Intégration dans un écosystème SSI
- Utilisé par les SOC pour l’analyse automatisée d’incidents.
- Complète les antivirus et les solutions EDR.
- Peut servir d’environnement pour les campagnes de Bug Bounty internes.

---

## Liens avec d’autres notions
- [[Malware]]
- [[EDR]]
- [[Détection comportementale]]

---

## Sources, outils & références
- [Documentation officielle](https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-sandbox/windows-sandbox-overview)
- [🛠️ Outils ou solutions associées](https://www.cuckoosandbox.org/)
- [Articles techniques, blogs spécialisés](https://unit42.paloaltonetworks.com/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=Ofp6rdAgRrY)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#sandbox` `#malware` `#analyse`
