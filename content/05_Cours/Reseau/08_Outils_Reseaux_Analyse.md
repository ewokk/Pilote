# 7 – Outils réseau et analyse de trafic

Les outils réseau permettent de diagnostiquer, analyser, surveiller et tester les composants d’un réseau informatique. Leur connaissance est indispensable à tout professionnel de la cybersécurité, de l’administration système ou du réseau.

> [!info]  
> Un RSSI doit non seulement connaître les outils, mais aussi être capable d’en interpréter les résultats dans un contexte de détection, d’investigation ou de durcissement.

---

## 1. Outils de base (connectivité & résolution)

| Outil        | Fonction principale                           | Exemple d’utilisation                |
|--------------|-----------------------------------------------|--------------------------------------|
| `ping`       | Tester la connectivité entre deux hôtes       | `ping 8.8.8.8`                       |
| `traceroute` / `tracert` | Suivre le chemin d’un paquet           | `traceroute google.com`             |
| `nslookup` / `dig` | Résolution DNS (adresse IP ↔ nom)          | `dig +short example.com`            |
| `arp`        | Afficher les correspondances IP ↔ MAC         | `arp -a`                             |
| `ip` / `ifconfig` | Afficher / modifier les interfaces réseau   | `ip addr`                            |
| `netstat` / `ss` | Lister les connexions actives et ports ouverts | `ss -tulpn`                         |

---

## 2. Capture et inspection de paquets

### Wireshark
- Interface graphique très complète
- Permet de **capturer et analyser chaque trame réseau**
- Filtres puissants (ex : `http`, `ip.src == 192.168.1.10`)

### Tcpdump
- Équivalent en ligne de commande
- Plus léger, idéal pour les serveurs
- Exemple : `tcpdump -i eth0 port 80`

> [!tip]  
> Toujours capturer en `.pcap` pour analyse ultérieure dans Wireshark.

---

## 3. Scan, port mapping et reconnaissance

### Nmap
- Scanner réseau très puissant
- Capable de :
  - Lister les ports ouverts
  - Détecter les services, OS, versions
  - Faire du scan furtif (SYN, FIN)

> [!example]  
> `nmap -sS -T4 -A 192.168.1.0/24`

### Netcat
- Outil polyvalent (scanner, shell, transfert)
- Peut écouter ou se connecter sur un port
- Exemple : `nc -v -l 4444` (écoute) / `nc ip 4444` (connexion)

> [!warning]  
> Netcat est aussi utilisé par les attaquants pour créer des backdoors.

---

## 4. Outils d’audit SNMP, DNS, DHCP

| Outil         | Description                                |
|---------------|--------------------------------------------|
| `snmpwalk`    | Interroger une MIB SNMP                    |
| `onesixtyone` | Scanner SNMP en masse                      |
| `dnsenum`     | Énumérer les enregistrements DNS           |
| `dhcpdump`    | Lire les offres d’adresses DHCP reçues     |

---

## 5. Surveillance du trafic (flow, métriques)

### NetFlow / sFlow / IPFIX
- Protocoles de **collecte de flux réseau**
- Fournissent :
  - IP source/destination
  - Ports
  - Volume (bytes/packets)
  - Durée

> [!tip]  
> Utilisé pour la **détection d’exfiltration**, le **capacity planning** ou l’analyse comportementale.

### Outils associés :
- **ntopng** : analyse graphique
- **Elastiflow** : intégration avec ELK
- **pmacct**, **FlowViewer**, etc.

---

## 6. Outils de surveillance continue

| Outil       | Fonction                             |
|-------------|--------------------------------------|
| Nagios      | Supervision classique (ICMP, SNMP)   |
| Zabbix      | Monitoring complet, haute granularité |
| Prometheus  | Relevés métriques, alertes dynamiques |
| Grafana     | Visualisation temps réel             |

---

## 7. Recommandations d’usage RSSI

- Utiliser des outils légitimes pour auditer ses propres systèmes
- Centraliser les logs et exports PCAP
- Comparer les résultats avec la cartographie réseau attendue
- Automatiser la supervision et l’analyse (ex : Nmap + diff)
- Séparer les outils offensifs (audit) et défensifs (SIEM, IDS)

> [!success]  
> Tu maîtrises maintenant les outils indispensables pour observer, diagnostiquer et comprendre les comportements réseau. À combiner avec la supervision pour une protection continue.
