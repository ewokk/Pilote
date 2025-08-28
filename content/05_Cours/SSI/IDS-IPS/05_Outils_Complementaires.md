# 05 - Outils IDS / IPS open-source et commerciaux

> [!info]
> Présentation des principales solutions IDS et IPS déployables en entreprise

---

## 1. Outils open-source

| Nom       | Type     | Caractéristiques principales |
|-----------|----------|-----------------------------|
| **Snort** | NIDS     | Référent historique, détection par signature |
| **Suricata** | NIDS/IPS | Multithreadé, supporte IDS+IPS, alertes JSON |
| **Zeek** (ex Bro) | NIDS | Analyse comportementale et protocolaire avancée |
| **OSSEC** | HIDS     | Journalisation système, intégration SIEM |
| **Wazuh** | HIDS+SIEM | Fork d’OSSEC, gestion centralisée, agent léger |

---

## 2. Outils commerciaux

| Nom                  | Fonction | Spécificités |
|----------------------|----------|---------------|
| Cisco Firepower      | IPS NGFW | Intégration réseau, blocage en ligne |
| Palo Alto Threat Prevention | IPS | Basé sur App-ID, Zero Trust, cloud |
| TrendMicro TippingPoint | IPS | Protection active réseau |
| McAfee NSM           | IDS/IPS  | Détection + orchestration |
| IBM QRadar + Sense   | SIEM+IDS | Couplage réseau / analyse temps réel |

---

## 3. Critères de choix

- Volume de logs / trafic
- Niveau de personnalisation
- Capacité à interagir avec SIEM
- Support des signatures communautaires
- Latence acceptable (IPS)

---

> [!tip]
> Un bon compromis entreprise PME : Suricata + Wazuh + serveur ELK ou SIEM léger (ex : TheHive / OpenSearch)

