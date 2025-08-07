# ARP

> **Type** : protocole  `#protocole`  
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : réseau, infrastructure `#infrastructure`, attaque

---

## Définition
> **ARP (Address Resolution Protocol)** est un protocole réseau qui permet de **traduire une adresse IP en adresse MAC** dans un réseau local (LAN). Il est essentiel pour que les machines puissent communiquer au niveau de la couche 2 (Ethernet).

---

## Explication détaillée
- **Origine ou historique**  
  Développé en 1982 (RFC 826), ARP est l’un des protocoles les plus fondamentaux dans les réseaux IP/Ethernet.

- **Fonctionnement technique**  
  - Lorsqu’un hôte veut communiquer avec une IP sur son réseau local, il envoie une **requête ARP broadcast**
  - L’hôte cible répond avec sa **MAC address**
  - Cette correspondance est **stockée temporairement** dans une table ARP (cache)

- **Rôles & fonctions**  
  - Résolution d’adresse IP vers MAC
  - Indispensable à la communication Ethernet
  - Utilisé en continu dans les réseaux d’entreprise ou domestiques

- **Avantages et limites**  
  + Très léger et simple  
  + Transparent pour l’utilisateur  
  – **Non sécurisé nativement** (pas d’authentification)  
  – Sensible à des attaques type spoofing ou poisoning

- **Typologies ou variantes**  
  - ARP statique (manuel, sécurisé) vs dynamique (automatique)
  - Gratuitous ARP (auto-annonce d’un hôte)

---

## Cas d’usage & exemples concrets
- Table ARP d’un routeur affichant les IP/MAC connectées
- Envoi automatique d’un ARP lorsqu’un PC démarre
- Résolution d’adresse entre une machine et sa passerelle
- Commandes : `arp -a`, `ip neighbour show`

---

## Vulnérabilités, risques et abus connus
- **ARP Spoofing / ARP Poisoning** : rediriger le trafic vers un attaquant
- Attaques MITM (Man-In-The-Middle) sur le réseau local
- Déni de service (flood ARP)
- Difficulté à détecter sans outils spécialisés

---

## Mesures de sécurité & recommandations
- Utiliser **des ARP statiques** sur les équipements critiques
- Déployer des outils de détection de spoofing (ARPwatch, IDS/IPS)
- Segmenter le réseau avec des VLAN
- Activer des protections switch (Dynamic ARP Inspection – DAI sur Cisco)

---

## Standards, protocoles & normes associées
- RFC 826 – Address Resolution Protocol
- Ethernet (IEEE 802.3)
- IPv4 (pas utilisé en IPv6, remplacé par NDP)

---

## Intégration dans un écosystème SSI
- Surface d’attaque réseau de niveau 2
- Doit être maîtrisé dans les architectures sécurisées (LAN, VLAN, DMZ)
- Intégré dans les journaux de surveillance réseau

---

## Liens avec d’autres notions
- [[ARP spoofing – usurpation ARP]]
- [[MITM]]
- [[Ethernet]]
- [[NDP]]

---

## Sources, outils & références
- [RFC 826 – ARP](https://datatracker.ietf.org/doc/html/rfc826)
- [Outils : arp, arpspoof, arpwatch, Ettercap](https://linux.die.net/man/8/arp)
- [Cisco – ARP Inspection](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-6500-series-switches/116367-technote-arp-00.html)
- [ARP Explained (YouTube)](https://www.youtube.com/watch?v=tR0mYVRM4D4)

---

## Mots-clés
`#cybersécurité` `#lexique` `#protocole` `#ARP` `#adresse_MAC` `#spoofing` `#MITM`
