# Backdoor

> **Type** : concept 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : offensif

---

## Définition
> Une backdoor (porte dérobée) est un accès secret ou non documenté à un système informatique, un logiciel ou un matériel, permettant à un acteur (légitime ou malveillant) de contourner les mécanismes de sécurité pour en prendre le contrôle.

---

## Explication détaillée
- **Origine ou historique**  
  - Initialement utilisées par des développeurs pour le débogage, les backdoors sont devenues un outil courant pour les attaquants dès les années 1990.
- **Fonctionnement technique**  
  - Peut être implantée via un code malveillant, une modification de firmware, ou un accès à distance dissimulé.
  - Les backdoors peuvent être installées par un malware, un attaquant, ou même par le constructeur (ex : télécoms).
- **Rôles & fonctions**  
  - Permet un accès persistant au système sans déclencher d’alerte.
  - Utilisée pour l’espionnage, l’exfiltration de données, le maintien d’accès après une compromission.
- **Avantages et limites**  
  - Difficiles à détecter si bien dissimulées.
  - Si découvertes, elles peuvent discréditer un éditeur ou un constructeur.
- **Typologies ou variantes**  
  - Logicielles (chevaux de Troie), matérielles (firmware modifié), système (comptes cachés, ports ouverts).

---

## Cas d’usage & exemples concrets
- Backdoor intégrée dans un logiciel piraté pour prendre le contrôle d’un poste.
- Implant dans le firmware d’un routeur pour espionner un réseau.
- Cas médiatisé : SolarWinds (2020), compromission d’une chaîne d’approvisionnement.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Maintien d’un accès secret même après un nettoyage apparent.
- Détection difficile via les outils classiques (antivirus).
- Exploitation de composants tiers (bibliothèques, drivers) contenant des portes dérobées.

---

## Mesures de sécurité & recommandations
- Analyse régulière des comportements et des flux réseau.
- Contrôle d’intégrité des systèmes (hash, signature).
- Surveillance des comptes utilisateurs et des ports réseau.
- Mise à jour et audit régulier du code source et des composants tiers.

---

## Standards, protocoles & normes associées
- NIST SP 800-53 (SI-7 : Software, Firmware, and Information Integrity)
- Recommandations ANSSI sur la sécurité logicielle
- OWASP Secure Coding Practices

---

## Intégration dans un écosystème SSI
- Risque à intégrer dans la gestion des vulnérabilités.
- Doit être couvert par des outils d’analyse statique/dynamique.
- Nécessite des procédures de réponse à incident adaptées.

---

## Liens avec d’autres notions
- [[Cheval de Troie]]
- [[Chaîne d’approvisionnement]]
- [[Persistance]]

---

## Sources, outils & références
- [Documentation officielle](https://nvd.nist.gov/)
- [🛠️ Outils ou solutions associées](https://www.chkrootkit.org/)
- [Articles techniques, blogs spécialisés](https://www.symantec.com/blogs/threat-intelligence)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=3geMhJzDbu0)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#backdoor` `#malware` `#espionnage`
