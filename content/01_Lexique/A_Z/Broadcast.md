# Broadcast

> **Type** : concept 
> **Niveau** : base 
> **Contexte** : réseau

---

## Définition
> Le broadcast désigne l’envoi d’un message réseau à tous les hôtes d’un segment donné. Dans un réseau IP, il s’agit d’une transmission destinée à toutes les machines partageant le même domaine de diffusion.

---

## Explication détaillée
- **Origine ou historique**  
  - Présent depuis les débuts de l’adressage IP (IPv4). Moins utilisé dans IPv6 au profit du multicast.
- **Fonctionnement technique**  
  - Le paquet est adressé à une adresse spéciale (ex : 255.255.255.255 ou x.x.x.255 pour les diffusions locales).
  - Tous les équipements du segment reçoivent et traitent le message.
  - Utilisé pour la découverte, le DHCP, ARP, NetBIOS...
- **Rôles & fonctions**  
  - Nécessaire pour des protocoles sans connaissance préalable du réseau.
  - Permet l’auto-configuration, la recherche d’équipements, etc.
- **Avantages et limites**  
  - Simple, immédiat, sans configuration.
  - Génère du bruit réseau et devient inefficace à grande échelle.
- **Typologies ou variantes**  
  - Unicast (1→1), Broadcast (1→tous), Multicast (1→groupe).

---

## Cas d’usage & exemples concrets
- Un client DHCP envoie un broadcast pour obtenir une adresse IP.
- Requête ARP pour résoudre une adresse MAC à partir d’une IP.
- Annonce NetBIOS sur un réseau local.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Utilisable pour des attaques de broadcast storm.
- Exploitable dans des attaques DDoS (amplification via broadcast).
- Révèle des informations sensibles à tout le réseau local.

---

## Mesures de sécurité & recommandations
- Segmenter les réseaux pour limiter les domaines de diffusion.
- Filtrer ou surveiller les paquets broadcast excessifs.
- Utiliser des alternatives sécurisées (ex : DHCP relay, IPv6 multicast).
- Bloquer les protocoles obsolètes si non utilisés (NetBIOS, SMBv1...).

---

## Standards, protocoles & normes associées
- RFC 919 / RFC 922 – Broadcasting Internet Datagrams
- RFC 826 – ARP
- IEEE 802.3 (Ethernet)

---

## Intégration dans un écosystème SSI
- Nécessite une vigilance dans les VLANs et les réseaux critiques.
- Source potentielle de bruit ou d’exploitation en pentest.
- À surveiller dans le cadre de l’analyse réseau en SOC.

---

## Liens avec d’autres notions
- [[Multicast]]
- [[DHCP]]
- [[ARP]]

---

## Sources, outils & références
- [Documentation officielle](https://datatracker.ietf.org/doc/html/rfc919)
- [🛠️ Outils ou solutions associées](https://www.wireshark.org/)
- [Articles techniques, blogs spécialisés](https://www.geeksforgeeks.org/what-is-broadcast-in-computer-network/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=omrY2YfcA9w)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#broadcast` `#ipv4` `#découverte`
