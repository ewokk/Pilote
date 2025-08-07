# Balayage de ports

> **Type** : technique 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : offensif

---

## Définition
> Le balayage de ports (port scanning) est une technique utilisée pour détecter les ports ouverts d’un hôte ou d’un réseau, afin d’identifier les services actifs et potentiellement vulnérables.

---

## Explication détaillée
- **Origine ou historique**  
  - Utilisé dès les débuts de l’administration réseau, il est devenu un outil courant des phases de reconnaissance dans les tests d’intrusion et les attaques.
- **Fonctionnement technique**  
  - Envoi de paquets vers différents ports TCP/UDP pour identifier leur état : ouvert, fermé ou filtré.
  - Techniques courantes :
    - Scan TCP SYN, TCP connect
    - Scan UDP
    - Scan furtif (FIN, Xmas, Null)
- **Rôles & fonctions**  
  - Cartographier une cible avant attaque.
  - Déterminer les services exposés (HTTP, SSH, FTP, etc.).
- **Avantages et limites**  
  - Rapide, automatisable (via Nmap par exemple).
  - Peut être détecté par des IDS ou bloqué par des firewalls.
- **Typologies ou variantes**  
  - Scan horizontal (plusieurs IP, un port), vertical (une IP, plusieurs ports), intensif (tous les ports), ciblé.

---

## Cas d’usage & exemples concrets
- Un pentester utilise Nmap pour identifier les services exposés d’un serveur.
- Un malware balaye le réseau local à la recherche de ports RDP ouverts.
- Un attaquant prépare une attaque par brute force sur un service SSH détecté.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Détection de services vulnérables menant à une compromission.
- Outil souvent utilisé dans les premières phases d’une attaque.
- Certains scans mal configurés peuvent perturber les services (DoS involontaire).

---

## Mesures de sécurité & recommandations
- Filtrer les ports non utilisés avec un pare-feu.
- Mettre en place un système de détection d’intrusion (IDS).
- Journaliser les connexions entrantes suspectes.
- Limiter l’exposition réseau des services critiques.

---

## Standards, protocoles & normes associées
- RFC 793 (TCP), RFC 768 (UDP)
- NIST SP 800-115 – Technical Guide to Security Testing

---

## Intégration dans un écosystème SSI
- Étape de reconnaissance dans un audit de sécurité ou un test d’intrusion.
- Élément surveillé par les SOC via les IDS/IPS.
- Complémentaire des scans de vulnérabilités.

---

## Liens avec d’autres notions
- [[Reconnaissance]]
- [[Nmap]]
- [[Surface d’attaque]]

---

## Sources, outils & références
- [Documentation officielle](https://nmap.org/book/man-port-scanning-techniques.html)
- [🛠️ Outils ou solutions associées](https://nmap.org/)
- [Articles techniques, blogs spécialisés](https://www.hackerone.com/blog/Port-Scanning-What-You-Need-Know)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=6pkeJg-1F7E)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#scan` `#ports` `#reconnaissance`
