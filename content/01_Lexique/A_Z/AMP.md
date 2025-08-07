# AMP

> **Type** : outil  `#outil`  
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : défensif, poste de travail `#poste_de_travail`, endpoint `#endpoint`

---

## Définition
> **AMP** (Advanced Malware Protection) est une solution de protection avancée contre les malwares développée par Cisco. Elle offre des fonctions d’analyse comportementale, de détection post-infection, et de traçabilité sur les postes de travail, serveurs et environnements cloud.

---

## Explication détaillée
- **Origine ou historique**  
  Cisco AMP a été introduit suite au rachat de Sourcefire en 2013. Il s’intègre à l’écosystème Cisco (Firepower, SecureX) et fait partie de leur suite de défense avancée.

- **Fonctionnement technique**  
  - Analyse **comportementale et heuristique** des fichiers
  - Suivi post-exécution (retrospective detection)
  - Sandboxing et détection de fichiers inconnus
  - Surveillance continue des endpoints
  - Intégration avec Threat Intelligence (Cisco Talos)

- **Rôles & fonctions**  
  - Détection de malwares connus et inconnus
  - Investigation post-infection
  - Traçabilité complète du cycle de vie d’un fichier
  - Bloquer, isoler ou supprimer automatiquement une menace

- **Avantages et limites**  
  + Détection avancée, y compris sur des fichiers initialement jugés “sains”  
  + Intégration cloud et EDR  
  – Solution propriétaire liée à l’écosystème Cisco  
  – Peut être verbeuse si mal configurée

- **Typologies ou variantes**  
  - Cisco AMP for Endpoints (poste utilisateur)
  - Cisco AMP for Networks
  - Cisco Secure Endpoint (nouveau nom commercial)

---

## Cas d’usage & exemples concrets
- Équipe SOC analysant l’origine d’un ransomware détecté avec AMP
- Suivi post-infection d’un poste compromis
- Intégration AMP + SIEM pour corrélation avancée
- Quarantaine automatique d’un fichier suspect téléchargé depuis le web

---

## Vulnérabilités, risques et abus connus
- Fausse détection ou faux négatif (si règles inadaptées)
- Requiert une **supervision humaine** pour tirer pleinement parti des capacités
- Peut être désactivé localement si l’agent n’est pas verrouillé
- Dépendance à la connectivité cloud (sandboxing et mises à jour)

---

## Mesures de sécurité & recommandations
- Compléter AMP avec une supervision SOC
- Activer le suivi des événements rétrospectifs
- Intégrer AMP aux flux de Threat Intelligence (Talos, MITRE…)
- Gérer les exceptions avec prudence
- Auditer régulièrement les règles d’analyse comportementale

---

## Standards, protocoles & normes associées
- MITRE ATT&CK – techniques de détection
- Intégration possible avec STIX/TAXII pour les IOC
- Conforme aux exigences NIST SP 800-83 (malware protection)

---

## Intégration dans un écosystème SSI
- Agent sur endpoints (Windows, macOS, Linux)
- Connexion avec Cisco SecureX, SIEM, outils de réponse à incident
- Complémentarité avec antivirus classique, pare-feu, proxies

---

## Liens avec d’autres notions
- [[EDR]]
- [[Malware]]
- [[Cisco Talos]]
- [[Endpoint Protection]]

---

## Sources, outils & références
- [Cisco AMP for Endpoints Documentation](https://www.cisco.com/c/en/us/products/security/amp-for-endpoints/index.html)
- [Cisco SecureX et AMP](https://www.cisco.com/c/en/us/products/security/securex/index.html)
- [Blog Talos Intelligence](https://blog.talosintelligence.com/)
- [Démo Cisco AMP (YouTube)](https://www.youtube.com/watch?v=ZY14z9Gu2Mo)

---

## Mots-clés
`#cybersécurité` `#lexique` `#outil` `#AMP` `#Cisco` `#endpoint` `#EDR` `#malware` `#détection`
