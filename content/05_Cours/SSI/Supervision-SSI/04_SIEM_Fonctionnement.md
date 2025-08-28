# SIEM — Security Information and Event Management

## Rôle principal

- **Collecte et corrélation de logs**
- Fournir une **vision consolidée de l’activité sécurité**
- Générer des **alertes pertinentes et filtrées**
- **Stockage conforme** (ex. RGPD, LPM)

---

## Composants clés

| Fonction          | Description                            |
|-------------------|----------------------------------------|
| Collecte          | Agents, syslog, API                    |
| Parsing           | Extraction de champs utiles            |
| Corrélation       | Règles SIEM, moteurs de détection      |
| Alerting          | Notification en temps réel             |
| Dashboards        | Vue synthétique, KPI, MITRE coverage   |
| Investigation     | Requêtage, pivot, timelines            |

---

## Outils SIEM populaires

- **Splunk** (payant, très puissant)
- **ELK / Elastic SIEM** (open source, flexible)
- **Graylog**, **Wazuh**, **LogPoint**

---

## Limites SIEM

- Coût (licence ou stockage)
- Tuning complexe
- Risque de **trop ou pas assez d’alertes**

> [!tip]
> Un SIEM mal configuré devient une boîte noire inutile.

