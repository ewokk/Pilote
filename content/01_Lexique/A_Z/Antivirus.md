# Antivirus

> **Catégorie** : #défense  
> **Type** : outil  `#outil`  
> **Niveau** : base 
> **Contexte** : défensif, poste de travail `#poste_de_travail`, endpoint `#endpoint`

---

## Définition
> Un **antivirus** est un logiciel conçu pour **détecter, bloquer, et supprimer les programmes malveillants (malwares)** tels que les virus, chevaux de Troie, ransomwares, spywares, etc. Il fait partie des outils de base pour la protection des postes de travail.

---

## Explication détaillée
- **Origine ou historique**  
  Les premiers antivirus apparaissent dans les années 1980 pour lutter contre les premiers virus informatiques (ex : Brain). Leur rôle s’est étendu aux menaces modernes et à la protection en temps réel.

- **Fonctionnement technique**  
  - **Analyse par signature** : comparaison avec une base de malwares connus  
  - **Analyse heuristique** : détection de comportements suspects  
  - **Analyse en temps réel** : surveillance continue des processus  
  - **Scan à la demande ou planifié**  
  - Certains antivirus modernes intègrent des **fonctionnalités EDR** (détection et réponse)

- **Rôles & fonctions**  
  - Prévenir l’exécution de programmes malveillants
  - Supprimer les fichiers infectés
  - Alerter l’utilisateur ou l’équipe sécurité
  - Contribuer à la détection d’incidents

- **Avantages et limites**  
  + Facile à déployer et accessible au grand public  
  + Barrière de première ligne contre les menaces connues  
  – Inefficace contre les malwares inconnus ou très sophistiqués  
  – Peut être contourné par des techniques d’obfuscation ou des APT

- **Typologies ou variantes**  
  - Antivirus grand public vs professionnel  
  - Antivirus local vs basé sur le cloud  
  - Intégré dans une suite EPP (Endpoint Protection Platform)

---

## Cas d’usage & exemples concrets
- Détection d’un fichier .exe infecté téléchargé par l’utilisateur
- Blocage d’un ransomware lors de son exécution
- Scan hebdomadaire automatique des disques
- Antivirus installé sur des postes distants ou serveurs critiques

---

## Vulnérabilités, risques et abus connus
- Fausse détection de fichiers légitimes (faux positifs)
- Obsolescence des bases de signatures
- Consommation excessive de ressources système
- Confiance excessive dans l’antivirus seul

---

## Mesures de sécurité & recommandations
- Mettre à jour régulièrement les bases de signatures
- Coupler avec une solution EDR pour une couverture avancée
- Ne pas désactiver la protection temps réel
- Utiliser une stratégie centralisée pour les entreprises
- Former les utilisateurs à ne pas se reposer uniquement sur l’antivirus

---

## Standards, protocoles & normes associées
- NIST SP 800-83 (Guide de protection contre les malwares)
- ISO/IEC 27002 (Contrôles de sécurité liés aux logiciels malveillants)
- Tests indépendants : AV-TEST, Virus Bulletin, SE Labs

---

## Intégration dans un écosystème SSI
- Présent sur chaque poste utilisateur
- Supervision centralisée via console (ex : Kaspersky, Bitdefender GravityZone, Defender ATP…)
- Peut transmettre des alertes à un SIEM ou SOC

---

## Liens avec d’autres notions
- [[EDR]]
- [[Malware]]
- [[Sandboxing]]
- [[SIEM]]

---

## Sources, outils & références
- [NIST Guide to Malware Defense](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-83.pdf)
- [Antivirus open source et pro (ClamAV, Defender, Bitdefender, Kaspersky...)](https://www.av-comparatives.org/)
- [AV-TEST – Comparateur antivirus](https://www.av-test.org/)
- [Antivirus Explained (YouTube)](https://www.youtube.com/watch?v=z7uLytBrc8Y)

---

## Mots-clés
`#défense` `#lexique` `#outil` `#antivirus` `#poste_de_travail` `#EDR` `#malware` `#protection` `#endpoint`
