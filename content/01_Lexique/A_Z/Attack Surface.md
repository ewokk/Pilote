# Attack Surface

> **Type** : concept 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : gestion des risques `#risques`, sécurité applicative `#applicatif`, cloud

---

## Définition
> La **surface d’attaque** (ou **Attack Surface**) désigne **l’ensemble des points d’entrée potentiels** par lesquels un attaquant pourrait compromettre un système, une application ou une infrastructure.

---

## Explication détaillée
- **Origine ou historique**  
  Concept fondamental en sécurité informatique depuis les premiers audits réseau. Il s’est élargi avec l’avènement du cloud, des API, et du shadow IT.

- **Fonctionnement technique**  
  - Englobe les **interfaces exposées** : ports réseau, pages web, API, identifiants faibles, services tiers
  - Comprend les **composants logiciels vulnérables** (frameworks, bibliothèques)
  - Prend en compte les **comportements humains et erreurs de configuration**
  - Peut être **interne ou externe**, **connue ou inconnue**

- **Rôles & fonctions**  
  - Permet d’évaluer la **surface d’exposition au risque**
  - Oriente la **priorisation des mesures de protection**
  - Sert de base aux audits et à la surveillance proactive

- **Avantages et limites**  
  + Outil structurant pour la stratégie sécurité  
  + Permet de visualiser les zones critiques  
  – Difficile à maintenir à jour (dérive, shadow IT)  
  – Souvent sous-estimée dans les audits manuels

- **Typologies ou variantes**  
  - Surface d’attaque **numérique** (app, infra, cloud)
  - Surface **physique** (accès bâtiment, USB…)
  - Surface **humaine** (phishing, ingénierie sociale)

---

## Cas d’usage & exemples concrets
- Audit de l’exposition externe d’une application web
- Inventaire des ports ouverts sur un périmètre cloud
- Détection d’API non documentées (shadow API)
- Identification de failles dans les dépendances logicielles

---

## Vulnérabilités, risques et abus connus
- Services oubliés exposés (shadow IT)
- Ports mal configurés accessibles depuis Internet
- Composants non patchés accessibles depuis l’extérieur
- Données sensibles exposées par erreur

---

## Mesures de sécurité & recommandations
- Maintenir un **inventaire dynamique des actifs**
- Utiliser des outils de **scan continu** (ASM, SCA, NMAP…)
- Réduire la surface d’attaque en désactivant les services inutiles
- Intégrer des outils de surveillance et de détection en continu
- Pratiquer une hygiène de configuration rigoureuse

---

## Standards, protocoles & normes associées
- NIST SP 800-30 – évaluation des risques
- OWASP ASVS / OWASP Top 10
- ISO/IEC 27001 – gestion des actifs et des vulnérabilités
- MITRE ATT&CK – pour la simulation d’attaques sur cette surface

---

## Intégration dans un écosystème SSI
- Indicateur fondamental pour la gestion des risques
- Base des programmes de Bug Bounty, Pentest et ASM
- À surveiller en priorité dans les environnements cloud

---

## Liens avec d’autres notions
- [[Attack Surface Management]]
- [[Shadow IT]]
- [[Exposition externe]]
- [[Asset Management]]

---

## Sources, outils & références
- [NIST SP 800-30](https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final)
- [Outils : NMAP, ASM Microsoft Defender, Censys, Shodan](https://www.shodan.io/)
- [OWASP Attack Surface Analysis](https://owasp.org/www-community/Attack_Surface_Analysis)
- [Surface d’attaque & gestion (YouTube)](https://www.youtube.com/watch?v=3ofjWXoPffE)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#attack_surface` `#exposition` `#gestion_des_risques` `#ASM`
