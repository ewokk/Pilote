# Adressage IP, sous-réseaux et routage

L’adressage IP est le fondement de toute communication dans les réseaux modernes. Comprendre les mécanismes d’attribution, de structuration et de routage des adresses IP est crucial pour concevoir des architectures efficaces, scalables et sécurisées.

> [!info]  
> Ce chapitre est orienté Bac+5 et RSSI. Il couvre l’IPv4, l’IPv6, le sous-réseautage, les plans d’adressage, le NAT/PAT, le routage, et les outils associés.

---

## 1. Adressage IPv4

### 1.1 Format d’une adresse IPv4

Une adresse IPv4 est une séquence de 32 bits, représentée en 4 octets séparés par des points (notation décimale pointée), ex. `192.168.1.10`.

| Champ | Description |
|-------|-------------|
| Adresse réseau | Identifie le réseau auquel appartient l’hôte |
| Adresse hôte   | Identifie l’équipement sur le réseau         |

Exemple :  
`192.168.1.0/24` → réseau  
`192.168.1.10/24` → adresse hôte

### 1.2 Classes d’adresses (obsolètes mais à connaître)

| Classe | Plage           | Usage         | Bits réseau |
|--------|------------------|---------------|-------------|
| A      | 0.0.0.0 – 127.255.255.255 | Très grands réseaux | 8 bits     |
| B      | 128.0.0.0 – 191.255.255.255 | Réseaux moyens      | 16 bits    |
| C      | 192.0.0.0 – 223.255.255.255 | Petits réseaux      | 24 bits    |
| D      | 224.0.0.0 – 239.255.255.255 | Multicast           | —          |
| E      | 240.0.0.0 – 255.255.255.255 | Réservé             | —          |

> [!quote]  
> La notion de classe est aujourd’hui remplacée par le CIDR (Classless Inter-Domain Routing).

---

## 2. Sous-réseaux et CIDR

Le **CIDR** permet de spécifier une plage d’adresses plus précisément avec un suffixe (ex. `/24`, `/16`, etc.).

| Suffixe | Masque               | Nombre d’adresses |
|---------|----------------------|-------------------|
| /8      | 255.0.0.0            | 16 777 216        |
| /16     | 255.255.0.0          | 65 536            |
| /24     | 255.255.255.0        | 256               |
| /30     | 255.255.255.252      | 4 (souvent pour point-à-point) |

> [!example]  
> Un réseau `192.168.1.0/24` contient 254 hôtes utilisables (256 – 2 pour réseau et broadcast).

---

## 3. Adresses spéciales IPv4

| Adresse              | Signification                   |
|----------------------|----------------------------------|
| 127.0.0.1            | Loopback (localhost)            |
| 0.0.0.0              | Adresse par défaut              |
| 169.254.0.0/16       | APIPA (auto-attribution)        |
| 255.255.255.255      | Broadcast local                 |
| 192.168.0.0/16       | Réseau privé                    |

> [!tip]  
> Les plages privées (RFC 1918) doivent être **filtrées en sortie Internet** pour éviter l’usurpation.

---

## 4. Introduction à IPv6

### 4.1 Format

Adresse de **128 bits** représentée en 8 groupes hexadécimaux :

Ex : `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

Raccourcis autorisés :
- Suppression des zéros initiaux : `2001:db8::8a2e:370:7334`
- Compression des séquences de 0 : `::1` (loopback)

### 4.2 Types d’adresses

| Type           | Préfixe                 | Description                          |
|----------------|--------------------------|--------------------------------------|
| Unicast        | —                        | Une seule interface                  |
| Anycast        | —                        | Routage vers le plus proche          |
| Multicast      | `ff00::/8`               | Un vers plusieurs                    |
| Link-local     | `fe80::/10`              | Portée locale                        |
| Global unicast | `2000::/3`               | Routable globalement                 |

> [!info]  
> L’IPv6 remplace le NAT par un adressage public massif + filtrage strict.

---

## 5. NAT et PAT

### 5.1 NAT (Network Address Translation)

Technique de translation entre adresses privées et publiques.

| Type       | Description                             |
|------------|-----------------------------------------|
| Static NAT | 1 IP privée ↔ 1 IP publique              |
| Dynamic NAT| Plage d’adresses publiques partagée     |
| PAT        | Traduction d’adresse + port (NAT overload) |

> [!example]  
> Le PAT permet à 200 machines internes de sortir via une seule IP publique (via les ports).

---

## 6. DHCP & DNS

### 6.1 DHCP

Le **Dynamic Host Configuration Protocol** attribue automatiquement une configuration IP :

- Adresse IP
- Masque de sous-réseau
- Passerelle par défaut
- Serveur DNS

> [!danger]  
> Un **rogue DHCP** (faux serveur) peut compromettre l’accès réseau d’une entreprise.

### 6.2 DNS

Le **Domain Name System** traduit un nom de domaine en adresse IP :

- `www.google.fr` → `142.250.184.67`

Types de requêtes : A, AAAA, MX, TXT, CNAME…

---

## 7. Routage IP

### 7.1 Routage statique

- Configuration manuelle des routes
- Contrôle total mais peu évolutif

Exemple :  
`ip route add 192.168.10.0/24 via 192.168.1.1`

### 7.2 Routage dynamique

Protocoles qui échangent les routes automatiquement :

| Protocole | Type        | Usage typique                   |
|-----------|-------------|---------------------------------|
| RIP       | Distance vector | Obsolète (limite de 15 sauts) |
| OSPF      | Link-state     | Réseaux d’entreprise           |
| BGP       | Path vector    | Routage inter-AS (Internet)    |
| EIGRP     | Hybride        | Cisco, usage interne           |

> [!quote]  
> Le routage dynamique est essentiel pour les grandes infrastructures avec haute disponibilité.

---

## 8. Plan d’adressage

Un plan d’adressage IP bien conçu :
- Sépare les zones fonctionnelles (serveurs, clients, Wi-Fi, invités…)
- Prévoit les VLAN, DMZ, interconnexions
- Évite les conflits et les broadcast storms
- Est documenté et auditable

> [!success]  
> Tu maîtrises maintenant les bases indispensables de l’adressage IP. Prochaine étape : les mécanismes Ethernet et la commutation réseau.
