# Protocoles réseau essentiels

Les protocoles réseau permettent la communication et l’interopérabilité entre les équipements et applications sur Internet et dans les réseaux d’entreprise. Ce chapitre présente les protocoles fondamentaux du modèle TCP/IP, leur fonctionnement, leurs cas d’usage et leurs implications en matière de sécurité.

> [!info]  
> Un RSSI doit être capable de comprendre les protocoles utilisés dans le SI afin d’identifier les risques, de configurer les équipements correctement et de détecter les comportements anormaux.

---

## 1. Protocoles de la couche transport

### TCP (Transmission Control Protocol)
- Protocole **orienté connexion**, fiable, garantit la livraison dans l’ordre
- Utilise un **handshake en 3 étapes** (SYN, SYN-ACK, ACK)
- Assure la retransmission des paquets perdus
- Détection de congestion (algorithme de contrôle)

> [!example]  
> Utilisé par : HTTP, HTTPS, FTP, SSH, SMTP

### UDP (User Datagram Protocol)
- Protocole **non orienté connexion**, rapide mais sans garantie
- Pas de retransmission, ni contrôle d’ordre
- Moins de surcharge

> [!example]  
> Utilisé par : DNS, VoIP, jeux en ligne, streaming vidéo

---

## 2. Protocoles utilitaires réseau

### ICMP (Internet Control Message Protocol)
- Permet d’échanger des messages de contrôle et d’erreur
- Outils : `ping`, `traceroute`
- Sert à tester la connectivité ou diagnostiquer les problèmes de routage

> [!warning]  
> Peut être utilisé pour de la reconnaissance réseau ou des attaques de type ICMP flood.

### ARP (Address Resolution Protocol)
- Fait le lien entre une adresse IP (niveau 3) et une adresse MAC (niveau 2)
- Fonctionne uniquement sur un réseau local

> [!danger]  
> L’ARP est vulnérable à des attaques de type **ARP spoofing**, facilitant les attaques de type Man-in-the-Middle (MitM).

---

## 3. Protocoles de nommage et d’adressage

### DNS (Domain Name System)
- Traduit les noms de domaine (ex : `example.com`) en adresses IP
- Fonctionne sur UDP/53 (requêtes) et TCP/53 (zone transfer)

> [!quote]  
> Un DNS mal sécurisé permet l’usurpation ou la redirection malveillante.

### DHCP (Dynamic Host Configuration Protocol)
- Attribue dynamiquement des adresses IP, passerelle, DNS, etc.
- Fonctionne selon un cycle DORA : Discover, Offer, Request, Acknowledge

> [!tip]  
> Utiliser une **réservation DHCP** permet d’allouer toujours la même IP à un équipement donné.

---

## 4. Protocoles de communication applicative

| Protocole | Port par défaut | Description                                | Sécurité |
|-----------|------------------|--------------------------------------------|----------|
| HTTP      | TCP/80           | Transfert de pages web                     | ❌       |
| HTTPS     | TCP/443          | HTTP + chiffrement TLS                     | ✅       |
| FTP       | TCP/21 (control), TCP/20 (data) | Transfert de fichiers                | ❌ (en clair) |
| FTPS/SFTP | 990 / 22         | Versions sécurisées de FTP                 | ✅       |
| SSH       | TCP/22           | Accès distant chiffré                      | ✅       |
| Telnet    | TCP/23           | Terminal distant **non chiffré**           | ❌       |
| SMTP      | TCP/25 / 587     | Envoi d’e-mails                            | ✅/❌ selon config |
| POP3/IMAP | TCP/110 / 143    | Réception d’e-mails                        | ✅/❌     |
| SNMP      | UDP/161          | Supervision réseau                         | ✅/❌ selon version |

> [!danger]  
> Éviter Telnet, FTP, HTTP en production — privilégier les versions chiffrées (SSH, SFTP, HTTPS).

---

## 5. NAT / PAT : translation d’adresses

### NAT (Network Address Translation)
- Permet à plusieurs machines internes d’utiliser une **même IP publique**
- Traduction 1:1 ou dynamique

### PAT (Port Address Translation)
- Variante de NAT qui différencie les sessions via les **ports source**
- Permet à **plusieurs clients internes** de naviguer sur Internet via **une seule IP publique**

> [!example]  
> Très utilisé dans les box Internet, les firewalls d’entreprise ou les routeurs domestiques.

---

## 6. Synthèse des protocoles essentiels

| Couches TCP/IP     | Protocoles clés                        |
|--------------------|----------------------------------------|
| Application        | HTTP, HTTPS, FTP, SSH, SMTP, DNS       |
| Transport          | TCP, UDP                               |
| Internet           | IP, ICMP, ARP                          |
| Accès réseau       | Ethernet, Wi-Fi                        |

---

## 7. Bonnes pratiques pour RSSI

- Interdire les protocoles non chiffrés (ex : Telnet, FTP)
- Filtrer les ports inutiles sur les firewalls
- Journaliser les requêtes DNS, les flux SMTP et les connexions SSH
- Utiliser DNS sécurisé (DNSSEC, DoH, DoT)
- Bloquer les transferts ICMP excessifs ou suspects

> [!success]  
> Tu maîtrises maintenant les protocoles fondamentaux de la communication réseau. Le prochain chapitre portera sur les technologies sans fil et la mobilité.
