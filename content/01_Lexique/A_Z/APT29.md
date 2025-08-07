# APT29

> **Type** : acronyme 
> **Niveau** : avancé 
> **Contexte** : offensif, renseignement `#renseignement`, cyberespionnage

---

## Définition
> **APT29**, aussi connu sous les noms **Cozy Bear** ou **The Dukes**, est un groupe d’attaquants **sponsorisés par l’État russe**, spécialisé dans des campagnes de **cyberespionnage** ciblées et persistantes.

---

## Explication détaillée
- **Origine ou historique**  
  Attribué aux services de renseignement russes (FSB, SVR), APT29 est actif depuis au moins 2008. Il est connu pour ses attaques très furtives contre des cibles politiques, diplomatiques et technologiques dans les pays occidentaux.

- **Fonctionnement technique**  
  - Utilisation d’attaques ciblées via phishing ou chaînes d’exploitation complexes
  - Déploiement de malwares sur mesure (CozyDuke, MiniDuke, WellMess…)
  - Techniques d’évasion poussées (chiffrement, steganographie, fileless)
  - Maintien à long terme dans les SI compromis

- **Rôles & fonctions**  
  - Vol de données confidentielles et stratégiques
  - Espionnage de gouvernements, ONG, institutions scientifiques
  - Surveillance discrète sur plusieurs mois/années

- **Avantages et limites**  
  + Haute furtivité et capacité à rester longtemps sous les radars  
  + Évolution constante des outils et méthodes  
  – Attribution publique de certaines campagnes (ex : SolarWinds)

- **Typologies ou variantes**  
  - Campagnes ciblées : diplomatie, santé (ex : recherche COVID), défense
  - Usage de malware dormant activé à distance
  - TTP documentées dans MITRE ATT&CK

---

## Cas d’usage & exemples concrets
- Attaque de la chaîne d’approvisionnement SolarWinds (2020)
- Campagnes contre les ministères des affaires étrangères
- Espionnage d’instituts de recherche sur les vaccins COVID-19
- Compromission d’agences gouvernementales américaines et européennes

---

## Vulnérabilités, risques et abus connus
- Utilisation de failles 0-day (ex : Outlook, Exchange)
- Phishing extrêmement crédible et ciblé
- Exploitation de fournisseurs tiers (chaîne d’approvisionnement)
- Persistence par création de services Windows et scheduled tasks

---

## Mesures de sécurité & recommandations
- Détection des comportements (EDR, UEBA)
- Surveillance des accès externes (VPN, fournisseurs SaaS)
- Mise à jour rigoureuse des systèmes
- Threat Intelligence active (IOC, TTP)
- Segmentation réseau et journalisation renforcée

---

## Standards, protocoles & normes associées
- MITRE ATT&CK – Groupe APT29 (G0016)
- TLP pour le partage de renseignement (STIX/TAXII)
- Normes ISO/IEC 27035 – gestion d’incidents

---

## Intégration dans un écosystème SSI
- Suivi actif par les CERT, CTI et agences (ANSSI, CISA, NCSC…)
- Référence dans les exercices de simulation d’attaque (Red Team)
- Modélisation dans MITRE ATT&CK Navigator

---

## Liens avec d’autres notions
- [[APT]]
- [[MITRE ATT&CK]]
- [[SolarWinds]]
- [[Cyberespionnage]]

---

## Sources, outils & références
- [MITRE ATT&CK – APT29](https://attack.mitre.org/groups/G0016/)
- [IOC & rapports Mandiant, CrowdStrike, Microsoft](https://www.microsoft.com/security/blog/)
- [CISA - Alertes sur APT29](https://www.cisa.gov/)
- [Explication SolarWinds et Cozy Bear (YouTube)](https://www.youtube.com/watch?v=96iVqLn0V9s)

---

## Mots-clés
`#cybersécurité` `#lexique` `#acronyme` `#APT29` `#espionnage` `#renseignement` `#SolarWinds` `#russie`
