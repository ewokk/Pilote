# Advanced Persistent Threat

> **Type** : concept  
> **Niveau** : avancé
> **Contexte** : offensif, défensif, gouvernance

---

## Définition

> Un **Advanced Persistent Threat (APT)** désigne une menace informatique sophistiquée, persistante et ciblée, généralement attribuée à des groupes organisés (souvent étatiques), visant à infiltrer durablement un système dans un but d’espionnage, de sabotage ou de vol de données.

---

## Explication détaillée

- **Origine ou historique**  
  Le terme APT est apparu dans les années 2000, utilisé par l’armée américaine pour désigner des cyberattaques complexes. Il est désormais largement utilisé pour désigner les groupes menant des attaques de type cyber-espionnage (ex : APT28, APT29…).

- **Fonctionnement technique**  
  - **Advanced** : exploitation de failles 0-day, techniques d’évasion, ingénierie sociale poussée
  - **Persistent** : maintien dans le système le plus longtemps possible via des mécanismes de rebond, backdoors, C2
  - **Threat** : les attaquants sont organisés, bien financés et ont des objectifs précis (étatiques, industriels, politiques…)

- **Rôles & fonctions**  
  - Espionnage industriel ou politique
  - Sabotage (ex : Stuxnet)
  - Désinformation, vol de propriété intellectuelle

- **Avantages et limites**  
  - Permet à l’attaquant un accès durable et discret  
  - Haute efficacité contre des cibles mal préparées  
  – Complexe à mettre en œuvre (coût, compétences)  
  – Risque élevé de détection à long terme

- **Typologies ou variantes**  
  - APT étatique vs APT cybercriminel
  - APT ciblant les infrastructures critiques (ICS/SCADA)

---

## Cas d’usage & exemples concrets

- **APT28 / Fancy Bear** : groupe russe, attaque contre les élections et institutions occidentales
- **APT29 / Cozy Bear** : groupe lié aux services russes, attaque de SolarWinds (2020)
- **Stuxnet** : sabotage de centrifugeuses iraniennes par un ver industriel (USA/Israël)
- **Equation Group** : lié à la NSA, opérations d’infiltration avancées

---

## Vulnérabilités, risques et abus connus

- Exploitation de failles 0-day
- Hameçonnage ciblé (spear phishing)
- Escalade de privilèges et mouvements latéraux
- Mise en place de backdoors persistants
- Évasion des antivirus/SIEM

---

## Mesures de sécurité & recommandations

- Mise en place d’un SOC performant
- Threat hunting et détection comportementale (EDR/XDR)
- Segmenter le réseau, utiliser des honeypots
- Appliquer les patchs de sécurité rapidement
- Surveiller les TTP via MITRE ATT&CK

---

## Standards, protocoles & normes associées

- MITRE ATT&CK : matrice des techniques APT
- TLP (Traffic Light Protocol) pour partager les IOC
- NIST SP 800-61 (gestion des incidents)
- ISO/IEC 27035 (réponse aux incidents)

---

## Intégration dans un écosystème SSI

- Requiert des capacités avancées de détection et réponse
- Coordination CERT/SOC/CTI
- Nécessite une cartographie précise des actifs et des flux

---

## Liens avec d’autres notions

- [[MITRE ATT&CK]]
- [[Threat Intelligence]]
- [[SOC (Security Operations Center)]]
- [[0-day]]

---

## Sources, outils & références

- [MITRE ATT&CK Framework](https://attack.mitre.org/)
- [Outils de détection (EDR, SIEM, YARA)](https://www.elastic.co/security)
- [Mandiant - rapports APT](https://www.mandiant.com/resources)
- [SolarWinds & APT29 – explication](https://www.youtube.com/watch?v=_9e5dnnVso4)
