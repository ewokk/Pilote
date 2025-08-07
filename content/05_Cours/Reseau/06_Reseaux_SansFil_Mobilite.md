# Réseaux sans fil et mobilité

Les réseaux sans fil jouent un rôle central dans les environnements modernes, en particulier dans les entreprises, l’IoT et les architectures hybrides. Ce chapitre traite des technologies Wi-Fi (802.11), des architectures sans fil, des mécanismes de sécurité (WPA2/WPA3), du roaming, ainsi que des notions liées à la mobilité (LTE, 5G).

> [!info]  
> Un RSSI doit comprendre les risques spécifiques aux technologies sans fil, afin de sécuriser efficacement les accès et les flux.

---

## 1. Normes Wi-Fi IEEE 802.11

| Norme       | Débit théorique max | Fréquence       | Portée typique | Année |
|-------------|---------------------|------------------|----------------|-------|
| 802.11b     | 11 Mbps             | 2,4 GHz          | ~35 m          | 1999  |
| 802.11g     | 54 Mbps             | 2,4 GHz          | ~38 m          | 2003  |
| 802.11n     | 600 Mbps            | 2,4 / 5 GHz      | ~70 m          | 2009  |
| 802.11ac    | >1 Gbps             | 5 GHz            | ~50 m          | 2014  |
| 802.11ax    | >10 Gbps            | 2,4 / 5 / 6 GHz  | ~50 m          | 2019  |

> [!tip]  
> La norme 802.11ax (Wi-Fi 6/6E) apporte des améliorations majeures en environnement dense : OFDMA, MU-MIMO, TWT.

### 1.1 Technologies clés du Wi-Fi 6 (802.11ax)

#### OFDMA (Orthogonal Frequency Division Multiple Access)

OFDMA est une évolution du **OFDM** utilisé dans les normes précédentes (comme 802.11ac).  
Il permet de **diviser un canal Wi-Fi en sous-canaux plus petits appelés RU (Resource Units)**.

> [!info] 
> Au lieu qu’un seul terminal utilise toute la bande passante d’un canal pendant un instant donné, plusieurs terminaux peuvent se **partager ce canal simultanément**, chacun sur une portion dédiée.

> [!tip]
>Cela réduit la latence, améliore l’efficacité et optimise les performances dans les environnements denses (salles de classe, open space, gares…).

---

#### MU-MIMO (Multi-User Multiple Input Multiple Output)

MU-MIMO permet à un point d’accès d’envoyer (et dans Wi-Fi 6, de **recevoir également**) des données **vers plusieurs clients en parallèle**, grâce à plusieurs flux spatiaux.

> [!info] 
> Avant MU-MIMO, un point d’accès envoyait les données à un seul client à la fois, en file d’attente.

Avec MU-MIMO, le point d’accès peut :

- envoyer **4 à 8 flux simultanés** à des clients différents
    
- optimiser la bande passante disponible
    
- mieux servir des utilisateurs très mobiles
    

---

#### TWT (Target Wake Time)

TWT est une technologie d’**optimisation de l’autonomie des terminaux sans fil**, notamment les objets connectés (IoT).

Elle permet à un point d’accès de **négocier avec les clients des plages horaires précises pendant lesquelles ils peuvent se “réveiller” pour communiquer**, et rester en veille le reste du temps.

 Cela :

- réduit la consommation d’énergie des clients
    
- diminue la congestion du réseau
    
- améliore les performances globales
- 
---

## 2. Architecture d’un réseau Wi-Fi

### Composants principaux :
- **Point d’accès (AP)** : diffuse le signal sans fil, relie les clients au réseau filaire
- **Client Wi-Fi** : terminal utilisateur (PC, mobile, imprimante, etc.)
- **Contrôleur Wi-Fi (WLC)** : gestion centralisée des AP (entreprise)
- **SSID (Service Set Identifier)** : nom du réseau visible par les clients

### Modes :
- **Infrastructure** : les clients communiquent via l’AP (standard)
- **Ad-hoc** : communication directe entre clients (rarement utilisé)
- **Mesh** : réseau maillé entre APs (auto-organisation)

---

## 3. Sécurité des réseaux Wi-Fi

| Protocole | Chiffrement       | Authentification            | Statut actuel |
|-----------|-------------------|------------------------------|----------------|
| WEP       | RC4 (faible)      | Clé partagée (statique)     | Obsolète ❌    |
| WPA       | TKIP              | Clé partagée (PSK)          | Obsolète ❌    |
| WPA2      | AES (CCMP)        | PSK ou 802.1X                | Standard ✅    |
| WPA3      | AES (SAE)         | Amélioration PSK + Forward Secrecy | Recommandé ✅ |

> [!warning]  
> Le protocole WEP est cassé en quelques secondes. WPA2-PSK est vulnérable sans complexité de mot de passe.

### Recommandations :
- Utiliser **WPA3** si disponible
- Isoler les réseaux invités dans un VLAN dédié
- Désactiver WPS
- Mettre en place un **portail captif** sécurisé

---

## 4. Roaming Wi-Fi et mobilité

- Un client Wi-Fi passe d’un AP à un autre via le processus de **roaming**
- Critères : puissance du signal, politique du contrôleur
- Normes d’optimisation : 802.11r (Fast BSS Transition), 802.11k/v

> [!example]  
> Dans une entreprise avec plusieurs étages, le roaming permet à un utilisateur de conserver sa session VPN sans interruption.

---

## 5. Menaces spécifiques aux réseaux sans fil

| Menace                  | Description                                               | Mitigation                        |
|-------------------------|-----------------------------------------------------------|-----------------------------------|
| Evil twin               | AP malveillant imitant un réseau légitime                | Contrôle des SSID, 802.1X         |
| Sniffing                | Interception de trames (réseau ouvert ou faible crypto)   | WPA2+, VPN                        |
| Jamming                 | Perturbation volontaire des fréquences                    | Surveillance radio, analyse spectre |
| Déni de service         | Saturation des AP via flood de requêtes d’association     | Filtrage MAC, détection d’anomalie |
| Captive portal bypass   | Détournement du portail via tunneling ou DNS              | Pare-feu, DNS sécurisé            |

---

## 6. Mobilité cellulaire (2G à 5G)

| Génération | Débit        | Technologie principale     | Services clés                  |
|------------|--------------|----------------------------|--------------------------------|
| 2G         | < 100 Kbps   | GSM, GPRS, EDGE            | SMS, voix                     |
| 3G         | ~1 Mbps      | UMTS, HSPA                 | Navigation, VoIP              |
| 4G         | ~100 Mbps    | LTE                        | Vidéo HD, jeux mobiles        |
| 5G         | >1 Gbps      | NR (New Radio)             | IoT massif, VR, latence faible|

> [!tip]  
> Les réseaux 5G introduisent des mécanismes de segmentation réseau (**network slicing**) et une architecture virtualisée (5G Core).

---

## 7. Bonnes pratiques Wi-Fi en entreprise

- Appliquer une politique d’authentification forte (802.1X, RADIUS)
- Isoler les flux invités, BYOD, IoT par des VLANs spécifiques
- Mettre en place un monitoring radio (WIDS/WIPS)
- Sécuriser les contrôleurs d’AP (WLC) et segmenter le trafic de gestion
- Définir une politique de mot de passe et de renouvellement SSID

> [!success]  
> Tu maîtrises désormais les principes des réseaux sans fil, les standards de sécurité associés et les bases de la mobilité. Le prochain chapitre entame la sécurité réseau approfondie.
