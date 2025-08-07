# Solutions NIDS — Snort, Suricata, Zeek

## Snort

- Moteur de détection basé sur des règles (signature-based)
- Développé par Cisco
- Utilise des fichiers de règles `.rules` très spécifiques
- Support de déploiement en mode NIDS ou IPS

> [!example]
> Règle simple Snort :
> ```
> alert tcp any any -> any 80 (msg:"Connexion HTTP"; sid:1000001;)
> ```

---

## Suricata

- Projet open source maintenu par OISF
- Plus performant que Snort (multi-thread, JSON)
- Supporte IDS + IPS + NSM (Network Security Monitoring)
- Export JSON (EVE) natif vers SIEM/ELK

| Avantage | Description |
|----------|-------------|
| Multi-core | Threads parallèles pour analyser plus de trafic |
| Protocol parsing | Reconstitution des flux (HTTP, DNS, TLS…) |
| EVE JSON | Format standard pour SIEM |

---

## Zeek (ex Bro)

- Framework d’analyse de trafic basé sur des **scripts comportementaux**
- Oriented logs : pas d’alertes directes mais des fichiers `.log` très détaillés
- Idéal pour **NDR/NBA** ou SOC avec analystes

| Exemple de logs générés |
|--------------------------|
| `conn.log` — Connexions réseau |
| `dns.log` — Résolutions DNS |
| `http.log` — Requêtes HTTP |
| `ssl.log` — Certificats SSL analysés |

> [!tip]
> Zeek est souvent déployé **en parallèle de Suricata** pour enrichir la visibilité dans un SIEM.

---

## Intégration avec un SIEM

- **EVE JSON** de Suricata → Logstash → Elasticsearch → Kibana
- **Zeek logs** → ingestion directe dans Graylog / ELK
- **Snort** → via Unified2 ou syslog + Barnyard2

> [!info]
> Une bonne visibilité suppose :
> - horodatage correct (NTP)
> - nom d’hôte + interface réseau dédiée
> - corrélation entre flux réseau et alertes

