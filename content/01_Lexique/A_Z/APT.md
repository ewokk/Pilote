# APT

> **Type** : acronyme 
> **Niveau** : avancé 
> **Contexte** : offensif, espionnage `#espionnage`, renseignement

---

## Définition
> APT signifie **Advanced Persistent Threat**. Il s’agit d’un type de menace informatique **hautement ciblée, furtive et durable**, menée par des groupes souvent liés à des États ou des organisations criminelles avancées.

---

## Explication détaillée
- **Origine ou historique**  
  Le terme est utilisé dès les années 2000 par l’armée américaine. Il désigne des attaques sophistiquées visant à **infiltrer durablement** un système pour des fins d’espionnage, sabotage ou vol d’informations.

- **Fonctionnement technique**  
  - Utilise des techniques avancées (0-day, phishing ciblé, malware sur mesure)
  - Phase d’intrusion, d’ancrage (persistence) puis d’exfiltration
  - Maintien furtif avec mouvements latéraux et escalade de privilèges
  - Communication avec des serveurs C2 (Command & Control)

- **Rôles & fonctions**  
  - Espionner les institutions, entreprises ou infrastructures critiques
  - Rester invisible et présent pendant des mois ou années
  - Voler des données, perturber des systèmes, influencer

- **Avantages et limites**  
  + Difficulté de détection (attaques ciblées, faibles signaux)  
  + Capacités techniques élevées  
  – Coûteux, long à mettre en œuvre  
  – Peut être identifié et attribué (cyber attribution)

- **Typologies ou variantes**  
  - APT d’origine étatique (APT28, APT29, Lazarus Group…)
  - APT industriels ou cybercriminels
  - APT hybrides (cyber + guerre informationnelle)

---

## Cas d’usage & exemples concrets
- APT29 (Cozy Bear) – attaque de la chaîne SolarWinds
- APT28 (Fancy Bear) – cyberespionnage géopolitique
- Stuxnet – attaque ciblée contre des infrastructures nucléaires
- Equation Group – outils de la NSA révélés par Shadow Brokers

---

## Vulnérabilités, risques et abus connus
- Intrusion silencieuse via phishing ou vulnérabilité
- Persistence par backdoor, registry, scheduled tasks
- Attaques supply chain ou island hopping
- Exfiltration chiffrée, difficilement détectable

---

## Mesures de sécurité & recommandations
- Mise en place d’un SOC et d’une surveillance continue (SIEM, EDR)
- Threat intelligence et chasse aux menaces (threat hunting)
- Analyse comportementale (UEBA)
- Segmentation réseau, gestion des accès
- Formation et sensibilisation aux attaques ciblées

---

## Standards, protocoles & normes associées
- MITRE ATT&CK (modélisation des TTP)
- TLP pour le partage d’IOC
- ISO/IEC 27035 – réponse à incident
- NIST SP 800-61 – gestion des incidents

---

## Intégration dans un écosystème SSI
- Gestion par SOC, CERT, équipe CTI
- Appui sur outils SIEM, EDR, sandboxing
- Plan de réponse à incident critique

---

## Liens avec d’autres notions
- [[MITRE ATT&CK]]
- [[Threat Intelligence]]
- [[EDR]]
- [[Cyberespionnage]]

---

## Sources, outils & références
- [MITRE ATT&CK](https://attack.mitre.org/)
- [FireEye/Mandiant – rapports APT](https://www.mandiant.com/resources)
- [ENISA – état de la menace APT](https://www.enisa.europa.eu/)
- [SolarWinds Explained – YouTube](https://www.youtube.com/watch?v=9WuVvDGY4HY)

---

## Mots-clés
`#cybersécurité` `#lexique` `#acronyme` `#APT` `#espionnage` `#menace_avancée` `#MITRE` `#threat_intelligence`
