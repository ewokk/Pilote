# Commutation Ethernet et VLAN

La commutation réseau constitue le cœur des infrastructures LAN modernes. Ce chapitre couvre les concepts fondamentaux d’Ethernet, les adresses MAC, les switches, la segmentation via VLAN, le balisage IEEE 802.1Q, et les mécanismes de redondance et d’agrégation de lien.

> [!info]  
> Pour un RSSI ou un architecte réseau, la compréhension fine de la commutation est essentielle pour bâtir des réseaux performants, résilients et segmentés.

---

## 1. Ethernet : historique et principe

**Ethernet** est un protocole de niveau 2 du modèle OSI standardisé par l’IEEE (802.3). Il définit le format des trames, les règles d’accès au média, et les débits.

- Débits standards : 10 Mbps (Ethernet), 100 Mbps (Fast), 1 Gbps (Gigabit), 10/40/100 Gbps (Ethernet évolué)
- Support : câble cuivre (RJ45 - Cat 5e/6/7), fibre optique (multimode/monomode)

---

## 2. Adressage MAC

Chaque carte réseau possède une **adresse MAC (Media Access Control)** unique sur 48 bits (ex. : `00:1A:2B:3C:4D:5E`).

- Format : 6 octets (12 hexadécimaux)
- MAC source / MAC destination dans chaque trame Ethernet
- Attribution par le constructeur (OUI + identifiant)
- Peut être usurpée (spoofing)

> [!warning]  
> Contrairement à l’IP, la MAC n’est pas routable : elle n’est utilisée que localement sur le LAN.

---

## 3. Structure d’une trame Ethernet

| Champ             | Taille     | Description                                     |
|------------------|------------|-------------------------------------------------|
| Préambule         | 7 octets   | Synchronisation                                |
| Délimiteur (SFD)  | 1 octet    | Début de trame                                 |
| MAC destination   | 6 octets   | Adresse du destinataire                        |
| MAC source        | 6 octets   | Adresse de l’émetteur                          |
| Type / Longueur   | 2 octets   | Protocole de couche supérieure (ex : IPv4 = 0x0800) |
| Données           | 46–1500    | Charge utile (payload)                         |
| CRC / FCS         | 4 octets   | Contrôle d’erreur (vérification d’intégrité)   |

> [!example]  
> Une trame transportant un paquet IPv4 encapsule ce paquet dans la zone "Données", précédée des adresses MAC.

---

## 4. Switch Ethernet : rôle et fonctionnement

Un **commutateur (switch)** fonctionne en couche 2. Il :

- **Apprend dynamiquement** les adresses MAC via les trames entrantes
- **Construit une table de commutation** : MAC → Port
- **Transmet uniquement sur le port concerné** (unicast), ou sur tous (broadcast/multicast)

| Type de trafic | Destination MAC         | Comportement du switch                |
|----------------|--------------------------|---------------------------------------|
| Unicast        | MAC connue               | Transmet sur un seul port             |
| Unicast        | MAC inconnue             | Diffuse sur tous les ports (flood)    |
| Broadcast      | FF:FF:FF:FF:FF:FF         | Transmet à tous les ports             |
| Multicast      | Adresse 01:00:5E:...     | Selon configuration IGMP snooping     |

---

## 5. VLAN (Virtual LAN)

Un **VLAN** est un domaine de broadcast logique. Il permet de **segmenter un réseau physique** en plusieurs sous-réseaux logiques indépendants.

### Avantages :

- Séparation des flux (ex. : admin / prod / visiteurs)
- Sécurité accrue par cloisonnement
- Réduction du domaine de broadcast
- Meilleure organisation du réseau

> [!example]  
> Un switch peut séparer les utilisateurs d’un même bâtiment en plusieurs VLANs : VLAN 10 (Finance), VLAN 20 (RH), VLAN 99 (admin).

---

## 6. Balisage VLAN – IEEE 802.1Q

Le standard **802.1Q** permet d’identifier un VLAN dans une trame Ethernet via une **étiquette VLAN (Tag)** insérée après l’en-tête MAC.

| Champ 802.1Q        | Taille     | Description                        |
|---------------------|------------|------------------------------------|
| TPID (Tag Protocol ID) | 2 octets   | 0x8100                             |
| TCI (Tag Control Info) | 2 octets   | 3 bits de priorité + 12 bits VLAN ID |

- VLAN ID : 0 à 4095 (les VLANs 0, 1 et 4095 sont réservés)
- Un **port trunk** peut transporter plusieurs VLANs
- Un **port access** transporte un seul VLAN

> [!tip]  
> Le balisage est transparent pour les hôtes finaux, mais essentiel pour les équipements intermédiaires.

---

## 7. STP – Spanning Tree Protocol

Le **Spanning Tree Protocol (STP)** permet d’**éviter les boucles réseau** en désactivant dynamiquement certains liens redondants.

- Algorithme de type arbre couvrant
- Un seul chemin actif entre deux switches
- Protocoles : STP (802.1D), RSTP (802.1w), MSTP (802.1s)

> [!warning]  
> Sans STP, une boucle de broadcast peut saturer tout le réseau LAN (tempête de broadcast).

---

## 8. Agrégation de liens – LACP

Le **Link Aggregation Control Protocol (LACP)** permet de **regrouper plusieurs liens physiques** entre deux équipements en un seul lien logique.

- Augmente la bande passante
- Fournit de la redondance
- Standard IEEE 802.3ad

---

## 9. Bonnes pratiques et audit

- Ne jamais laisser le VLAN 1 actif en production
- Utiliser un VLAN dédié pour la gestion des switches (ex : VLAN 99)
- Appliquer un contrôle d’accès sur les ports (port-security)
- Désactiver les ports inutilisés
- Surveiller les trames STP (root bridge inconnu = danger)
- Documenter tous les VLANs et leurs affectations

---

> [!success]  
> Tu maîtrises maintenant les fondements de la commutation et de la segmentation réseau. Le prochain chapitre portera sur les protocoles de communication réseau.
