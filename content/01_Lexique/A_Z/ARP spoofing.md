# ARP spoofing – usurpation ARP

> **Catégorie** : #attaque  
> **Type** : technique  `#technique`  
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : offensif, réseau, interception

---

## Définition
> L’**ARP spoofing** (ou **usurpation ARP**) est une **attaque réseau de type Man-in-the-Middle (MITM)** consistant à envoyer de **fausses réponses ARP** pour tromper un hôte et détourner le trafic réseau.

---

## Explication détaillée
- **Origine ou historique**  
  Apparu dès les années 90 avec les premières attaques MITM, l’ARP spoofing reste un classique des tests d’intrusion sur réseaux locaux.

- **Fonctionnement technique**  
  - L’attaquant envoie une **réponse ARP falsifiée** à une machine cible
  - Il associe sa propre adresse MAC à l’adresse IP du routeur ou d’un autre hôte
  - Le trafic destiné à cette IP est alors redirigé vers l’attaquant
  - Il peut **intercepter, modifier ou bloquer** les communications

- **Rôles & fonctions**  
  - Intercepter le trafic (sniffing)
  - Modifier les paquets à la volée (injection)
  - Mener une attaque par déni de service (DoS local)
  - Voler des identifiants, cookies ou sessions

- **Avantages et limites**  
  + Silencieuse et difficilement détectable sans outil  
  + Fonctionne sur tout réseau local sans sécurité de niveau 2  
  – Ne fonctionne pas à travers les routeurs (limité au LAN)  
  – Facilement bloquée avec de bonnes pratiques réseau

- **Typologies ou variantes**  
  - ARP cache poisoning (empoisonnement de cache)
  - DNS spoofing via ARP MITM
  - ARP DoS (flood de requêtes)

---

## Cas d’usage & exemples concrets
- Pentest d’un réseau d’entreprise avec interception du trafic HTTP
- Détournement de session administrateur via cookie hijacking
- Attaque sur un réseau Wi-Fi public sans protection
- Scénarios de Red Team internes

---

## Vulnérabilités, risques et abus connus
- Vol d’identifiants en clair (HTTP, FTP…)
- Usurpation d’identité sur des applications locales
- Bypass de filtrage IP/MAC
- Rupture de confidentialité et d’intégrité du trafic

---

## Mesures de sécurité & recommandations
- Activer **Dynamic ARP Inspection (DAI)** sur les switches
- Utiliser des **ARP statiques** sur les équipements critiques
- Surveiller les caches ARP avec arpwatch ou des IDS
- Chiffrer les communications (HTTPS, SSH, VPN)
- Segmenter les réseaux sensibles avec des VLAN

---

## Standards, protocoles & normes associées
- RFC 826 – ARP
- IEEE 802.1Q (VLAN)
- NIST SP 800-115 – guide de test d’intrusion

---

## Intégration dans un écosystème SSI
- Détecté dans les SIEM ou par des agents de sécurité réseau
- Risque spécifique à maîtriser dans les audits de LAN internes
- Pertinent pour les exercices Blue/Red Team

---

## Liens avec d’autres notions
- [[ARP]]
- [[MITM]]
- [[Sniffing]]
- [[DAI]]

---

## Sources, outils & références
- [RFC 826 – ARP Protocol](https://datatracker.ietf.org/doc/html/rfc826)
- [Outils : arpspoof, Ettercap, Bettercap](https://tools.kali.org/)
- [Guide ANSSI sur la sécurité des réseaux](https://www.ssi.gouv.fr/)
- [ARP Spoofing Attack Demo (YouTube)](https://www.youtube.com/watch?v=jU6tKRZ8rGk)

---

## Mots-clés
`#attaque` `#lexique` `#technique` `#ARPSpoofing` `#MITM` `#interception` `#LAN` `#sniffing`
