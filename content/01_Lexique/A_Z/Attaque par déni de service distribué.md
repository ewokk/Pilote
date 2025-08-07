# Attaque par déni de service distribué

> **Type** : concept 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : offensif

---

## Définition
> Une attaque par déni de service distribué (DDoS) vise à rendre un service, un site web ou un réseau indisponible en le submergeant de requêtes provenant de multiples sources, souvent compromises. Cette approche rend la défense plus difficile qu’un DoS classique.

---

## Explication détaillée
- **Origine ou historique**  
  - Apparues dans les années 2000, les attaques DDoS ont explosé avec la prolifération de botnets comme Mirai.
- **Fonctionnement technique**  
  - Des milliers voire des millions d’appareils infectés (zombies) sont coordonnés pour envoyer des requêtes massives.
  - Types d’attaques : volumétriques (saturation bande passante), protocolaires (ex : SYN flood), applicatives (ex : HTTP GET flood).
- **Rôles & fonctions**  
  - Outil d’extorsion (ransom DDoS), sabotage, protestation (hacktivisme), diversion d’autres attaques.
- **Avantages et limites**
  - Avantage pour l’attaquant : difficilement traçable, puissant.
  - Limites : nécessite des ressources (botnet), contré par des CDN/proxies spécialisés.
- **Typologies ou variantes**  
  - Réseaux P2P DDoS, attaques DDoS via DNS amplification, attaque par réflection NTP, etc.

---

## Cas d’usage & exemples concrets
- Attaque contre des services bancaires ou de paiement en ligne pour perturber leur activité.
- Utilisation lors de mouvements activistes (ex : Anonymous contre des gouvernements ou entreprises).
- DDoS utilisé comme leurre pendant une exfiltration de données discrète.

---

## Vulnérabilités, risques et abus connus
- Utilisation de serveurs mal configurés (DNS, NTP, LDAP) comme amplificateurs.
- Botnets issus d’objets connectés (IoT) peu sécurisés.
- Exploitation de vulnérabilités dans les piles réseau ou applicatives.

---

## Mesures de sécurité & recommandations
- Utiliser des solutions d’atténuation DDoS (Cloudflare, Akamai, etc.).
- Mise en place de pare-feu applicatifs, de seuils de détection anormaux.
- Surveillance réseau en temps réel, segmentation des services critiques.
- Filtrage des IP, reverse proxy, anycast.

---

## Standards, protocoles & normes associées
- RFC 3882 (DDoS Protection Considerations)
- NIST SP 800-61 (Computer Security Incident Handling Guide)
- ISO/IEC 27035 (gestion des incidents)
- Cadres Zero Trust pour compartimenter l’accès

---

## Intégration dans un écosystème SSI
- À anticiper dans la cartographie des risques.
- Renforce la justification de solutions de haute disponibilité (HA).
- Doit être intégré dans les procédures de réponse à incident.

---

## Liens avec d’autres notions
- [[Attaque par déni de service]]
- [[Botnet]]
- [[Réseau de zombies]]

---

## Sources, outils & références
- [Documentation officielle](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/)
- [Outils ou solutions associées](https://www.projectshield.google.com/)
- [Articles techniques, blogs spécialisés](https://www.akamai.com/blog/security/what-is-a-ddos-attack)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=LsYQjlzXslg)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#ddos` `#attaque`
