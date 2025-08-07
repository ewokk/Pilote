# Attack Surface Management

> **Type** : concept 
> **Niveau** : avancé 
> **Contexte** : surveillance `#surveillance`, gouvernance, cloud

---

## Définition
> Le **Attack Surface Management (ASM)** est une discipline de cybersécurité visant à **identifier, inventorier, surveiller et réduire la surface d’attaque** d’une organisation, en particulier dans des environnements dynamiques comme le cloud ou les applications SaaS.

---

## Explication détaillée
- **Origine ou historique**  
  L’ASM est apparu avec la complexification des SI et la **démultiplication des actifs exposés sur Internet**, notamment avec le cloud, le BYOD, les API et le shadow IT.

- **Fonctionnement technique**  
  - Scan automatique et **cartographie des actifs exposés**
  - Découverte des services mal documentés ou oubliés
  - Surveillance continue de **changements, vulnérabilités, certificats**
  - Classement par **risque, criticité, conformité**

- **Rôles & fonctions**  
  - Réduire le périmètre d’exposition externe
  - Détecter le shadow IT et les actifs non conformes
  - Anticiper les attaques avant qu’elles ne surviennent
  - Fournir une **vue centralisée et exploitable** pour le RSSI

- **Avantages et limites**  
  + Visibilité globale des points faibles  
  + Surveillance automatisée en continu  
  – Dépend de la qualité des sources et du mapping DNS/IP  
  – Ne remplace pas une analyse humaine approfondie

- **Typologies ou variantes**  
  - ASM interne vs externe (vue organisation vs vue attaquant)
  - Intégration avec les outils de **Threat Intelligence** et **CMDB**
  - ASM via services managés (MSSP) ou en SaaS

---

## Cas d’usage & exemples concrets
- Découverte d’un sous-domaine oublié exposant une base MongoDB
- Alerte sur expiration d’un certificat TLS critique
- Visualisation de tous les ports/services ouverts liés à une organisation
- Intégration à un SOC ou à un programme Bug Bounty

---

## Vulnérabilités, risques et abus connus
- Shadow IT : services mis en place sans validation sécurité
- Actifs orphelins ou oubliés (databases, VM, sites tests…)
- Manque de visibilité sur les services déployés par des prestataires
- Réactivité insuffisante face à des changements dans le périmètre

---

## Mesures de sécurité & recommandations
- Intégrer l’ASM dans une gouvernance SSI claire
- Mettre à jour les référentiels d’actifs (CMDB, inventaires)
- Coupler ASM avec des outils de scan de vulnérabilités (SCA, DAST)
- Réaliser des revues régulières du périmètre exposé

---

## Standards, protocoles & normes associées
- ISO/IEC 27001 – gestion des actifs et de la sécurité réseau
- NIST CSF – Identify & Protect
- OWASP ASVS – exposition applicative
- RFC 1034/1035 (DNS), TLS, WHOIS, ASN

---

## Intégration dans un écosystème SSI
- Outil stratégique pour le **RSSI**, le **SOC**, ou les équipes cloud
- Alimenter les SIEM, outils CTI, ou dashboards GRC
- Intégré dans les démarches Zero Trust et d’hygiène cyber

---

## Liens avec d’autres notions
- [[Attack Surface]]
- [[Shadow IT]]
- [[Asset Management]]
- [[Cyber Threat Intelligence]]

---

## Sources, outils & références
- [Gartner – ASM Market Guide](https://www.gartner.com/en/documents/)
- [Outils ASM : ASM Microsoft Defender, Censys, Randori, CyCognito](https://www.microsoft.com/en-us/security/business/threat-protection/defender-external-attack-surface-management)
- [OWASP Attack Surface Analysis](https://owasp.org/www-community/Attack_Surface_Analysis)
- [ASM Explained (YouTube)](https://www.youtube.com/watch?v=b9p7idKQ_h8)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#ASM` `#attack_surface_management` `#shadow_IT` `#exposition` `#cloud`
