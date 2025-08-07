# Architecture réseau : modèles OSI et TCP/IP

Comprendre les modèles de référence OSI et TCP/IP est fondamental pour l’analyse, la conception et la sécurisation des réseaux informatiques. Ces modèles permettent de structurer les communications en couches logiques, de standardiser les protocoles, et de faciliter le diagnostic réseau.

> [!info]  
> Le modèle OSI est théorique et universel ; le modèle TCP/IP est celui réellement implémenté sur Internet.

---

## 1. Le modèle OSI : 7 couches conceptuelles

Le modèle **OSI (Open Systems Interconnection)** définit 7 couches hiérarchiques, chacune remplissant un rôle spécifique dans le traitement et le transport de l'information.

| N° | Couche                 | Rôle principal                                                  | Exemples de protocoles / équipements |
|----|------------------------|------------------------------------------------------------------|---------------------------------------|
| 7  | Application            | Interface avec l’utilisateur final                              | HTTP, FTP, DNS, SMTP, Telnet          |
| 6  | Présentation           | Formatage, chiffrement, compression des données                 | SSL/TLS, JPEG, ASCII, MPEG            |
| 5  | Session                | Ouverture, gestion et fermeture de sessions                     | NetBIOS, RPC                          |
| 4  | Transport              | Fiabilité, segmentation, contrôle d’erreur                      | TCP, UDP                              |
| 3  | Réseau                 | Adressage logique, routage des paquets                          | IP, ICMP, OSPF, BGP                   |
| 2  | Liaison de données     | Encapsulation en trames, détection d’erreurs                    | Ethernet, PPP, VLAN, MAC              |
| 1  | Physique               | Transmission électrique ou optique des bits                     | RJ45, fibre, Wi-Fi, USB               |

> [!example]  
> Lorsqu’un utilisateur visite un site web en HTTPS, les couches Application (HTTP), Présentation (TLS), Transport (TCP), Réseau (IP) et Liaison (Ethernet) sont toutes impliquées.

---

## 2. Le modèle TCP/IP : 4 couches opérationnelles

Le modèle TCP/IP est utilisé dans toutes les infrastructures Internet. Il regroupe les fonctions du modèle OSI en **4 couches plus pratiques** :

| Couche TCP/IP     | Correspondance OSI | Fonctions principales                            | Protocoles clés                   |
|-------------------|--------------------|--------------------------------------------------|----------------------------------|
| Application       | 7, 6, 5            | Interface utilisateur, formats de données       | HTTP, FTP, DNS, SMTP, DHCP       |
| Transport         | 4                  | Transmission de données fiable ou rapide        | TCP, UDP                         |
| Internet          | 3                  | Routage, adressage IP, fragmentation            | IP, ICMP, IGMP, ARP              |
| Accès réseau      | 2, 1               | Accès au support physique, format de trame      | Ethernet, Wi-Fi, DSL, PPP        |

> [!tip]  
> Le modèle TCP/IP est plus simple et reflète les protocoles réellement utilisés dans les réseaux d'entreprise et sur Internet.

---

## 3. Comparatif OSI vs TCP/IP

| Critère              | Modèle OSI                        | Modèle TCP/IP                    |
|----------------------|-----------------------------------|----------------------------------|
| Nombre de couches    | 7                                 | 4                                |
| Nature               | Théorique                         | Implémenté                       |
| Origine              | ISO (1984)                        | DARPA / IETF (années 70–80)      |
| Utilisation          | Référence pédagogique et analyse  | Architecture réelle des réseaux  |
| Protocoles associés  | Aucun spécifique                  | IP, TCP, UDP, etc.               |

> [!quote]  
> Le modèle OSI est un cadre d’analyse. Le modèle TCP/IP est le fondement des réseaux actuels.

---

## 4. Encapsulation des données

À chaque couche, les données sont encapsulées dans une unité structurée :

- Application → **Données**
- Transport → **Segment (TCP)** ou **Datagramme (UDP)**
- Internet → **Paquet**
- Liaison de données → **Trame**
- Physique → **Bits**

> [!example]  
> Un fichier téléchargé via HTTP sur TCP/IP sera découpé en segments TCP, encapsulés dans des paquets IP, puis dans des trames Ethernet avant d’être envoyés bit par bit.

---

## 5. Diagnostic réseau orienté couches

Pour résoudre une panne réseau, un RSSI ou administrateur peut raisonner couche par couche :

| Couche      | Symptôme typique                   | Outils de diagnostic                  |
|-------------|------------------------------------|---------------------------------------|
| Physique    | Câble débranché, interface down    | Testeur RJ45, LED NIC, ifconfig       |
| Liaison     | Collision, trame corrompue         | Wireshark, compteur d’erreurs switch |
| Réseau      | Problème de routage, adresse IP    | ping, traceroute, netstat             |
| Transport   | Perte de paquets, connexion lente  | tcpdump, nmap, Wireshark              |
| Application | Service inaccessible, timeout      | curl, navigateur, logs applicatifs    |

---

## 6. Mise en œuvre et audit

Un RSSI doit pouvoir :

- **Cartographier les flux réseau** selon les couches OSI/TCP-IP
- **Identifier les points de contrôle (pare-feu, proxy, NAT...)**
- **Appliquer le principe de moindre privilège couche 7**
- **Auditer les protocoles utilisés** (ex : bannir Telnet, forcer TLS)
- **Détecter les incohérences d’encapsulation** (ex : MTU incorrect)

---

> [!success]  
> Tu connais désormais la logique des modèles OSI et TCP/IP. Tu peux maintenant comprendre l'adressage IP, les sous-réseaux et le routage qui structurent les communications numériques.
