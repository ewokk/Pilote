# 12 – Exigences réseau : Synthèse opérationnelle

Ce fichier résume toutes les **exigences fondamentales et avancées** d’un réseau sécurisé, structuré et opérationnel. Il est conçu pour servir de **checklist RSSI**, de base d’audit, ou d’aide-mémoire dans la conception d’une infrastructure.

---

## 🧩 Vue d’ensemble

| Domaine                     | Exigence technique |
|-----------------------------|--------------------|
| Adressage IP                | Plan IP documenté, cohérent, sans recouvrement |
| VLAN & segmentation         | Cloisonnement logique par zone/fonction |
| Routage                     | Contrôle strict des routes inter-VLAN, routage dynamique sécurisé |
| DMZ                         | Zone tampon pour services exposés, règles entrantes/sortantes contrôlées |
| Pare-feu                    | Modèle deny-by-default, règles explicites, logs activés |
| ACL                        | Filtrage inter-zones, sur interfaces ou équipements |
| NAT / PAT                   | Traduction IP maîtrisée, règles documentées |
| Authentification réseau     | 802.1X, port security, DHCP snooping |
| Résilience / disponibilité  | Redondance liens, HA firewall, spanning-tree maîtrisé |
| Sécurité Wi-Fi              | WPA2/3, SSID cloisonnés, portail captif invité |
| VPN                         | IPsec/SSL avec authentification forte, logs de connexion |
| IDS / IPS                   | Présents et supervisés, corrélation dans SIEM |
| Journalisation              | Logs horodatés, centralisés, intègres |
| Supervision                 | Zabbix/Nagios/Prometheus, sondes NetFlow, alertes seuils critiques |
| SIEM                        | Corrélation, remontée d’alertes, stockage à valeur légale |
| Protocoles sécurisés        | Interdiction des versions faibles (SSLv3, TLS1.0, FTP, Telnet…) |
| Équipements réseau          | Firmware à jour, accès SSH restreint, mots de passe hashés |
| Administration réseau       | Bastion, MFA, journalisation des actions |
| Sécurité physique           | Accès local restreint aux équipements (baie, switch, Wi-Fi) |
| Isolation OT                | VLAN, DMZ industrielle, diode unidirectionnelle si besoin |
| IoT                         | Authentification, segmentation, gestion OTA, supervision comportement |
| Interconnexion Cloud        | VPN, filtrage, bastion, logs, pas de flux direct ↔ LAN |
| Plans réseau                | Documentés, à jour, avec zones, flux, points critiques |
| Scénarios de PRA / PCS      | Tests réalisés, solutions de repli réseau prévues |
| Formation & sensibilisation | Sessions régulières pour IT, utilisateurs, OT |
| Tests d’intrusion / audits  | Réalisés annuellement, périmètre réseau inclus |

---

> [!success]  
> Cette synthèse est un outil de vérification rapide et rigoureux pour tout RSSI, administrateur réseau ou auditeur technique.
