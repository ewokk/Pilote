# Beacon

> **Type** : concept 
> **Niveau** : avancé 
> **Contexte** : offensif

---

## Définition
> Un beacon est un composant logiciel implanté sur une machine compromise qui communique régulièrement avec un serveur de commande et contrôle (C2) pour recevoir des instructions, exfiltrer des données ou maintenir la persistance.

---

## Explication détaillée
- **Origine ou historique**  
  - Terme popularisé par les frameworks offensifs comme Cobalt Strike. Employé largement dans les attaques APT.
- **Fonctionnement technique**  
  - Après l’exploitation initiale, un malware installe un beacon.
  - Il communique de manière furtive (ex : HTTPS, DNS, HTTP POST) avec l’infrastructure de l’attaquant.
  - Peut être configuré pour se déclencher à intervalles spécifiques ou selon des conditions.
- **Rôles & fonctions**  
  - Maintenir un accès persistant.
  - Recevoir des commandes à distance (mouvement latéral, dump de mémoire, keylogging...).
  - Exfiltrer des données discrètement.
- **Avantages et limites**  
  - Très difficile à détecter si bien configuré (trafic normal, chiffré).
  - Peut être repéré par analyse comportementale ou corrélation réseau.
- **Typologies ou variantes**  
  - Beacon actif/passif, communication par HTTP, HTTPS, DNS tunneling, ICMP, etc.

---

## Cas d’usage & exemples concrets
- Utilisation de Cobalt Strike dans des attaques Red Team ou par des groupes APT.
- Beacon implanté via un document Word malveillant pour prise de contrôle différée.
- Malware dormant déclenché par un beacon tous les 6h pour évasion.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Présence prolongée dans le système à l’insu de l’utilisateur.
- Utilisé dans des attaques ciblées, souvent liées à l’espionnage.
- Contrôle distant pouvant durer des mois sans détection.

---

## Mesures de sécurité & recommandations
- Mettre en place une détection réseau avancée (NDR).
- Corréler les flux suspects dans un SIEM.
- Surveiller les communications sortantes inhabituelles.
- Segmenter le réseau et restreindre les accès sortants inutiles.

---

## Standards, protocoles & normes associées
- MITRE ATT&CK : T1071 (Application Layer Protocol), T1001 (Data Obfuscation)
- Recommandations ANSSI : détection des C2
- NIST SP 800-94 (Intrusion Detection and Prevention)

---

## Intégration dans un écosystème SSI
- Élément clé à détecter dans les chaînes d’attaque modernes.
- À intégrer dans les alertes SOC, avec des règles de détection spécifiques.
- Nécessite un couplage EDR + analyse réseau.

---

## Liens avec d’autres notions
- [[Cobalt Strike]]
- [[Command and Control]]
- [[Persistences]]

---

## Sources, outils & références
- [Documentation officielle](https://attack.mitre.org/)
- [🛠️ Outils ou solutions associées](https://www.cobaltstrike.com/)
- [Articles techniques, blogs spécialisés](https://unit42.paloaltonetworks.com/cobalt-strike-beacons/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=t4M-rS_Aq3M)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#beacon` `#c2` `#persistences` `#apt`
