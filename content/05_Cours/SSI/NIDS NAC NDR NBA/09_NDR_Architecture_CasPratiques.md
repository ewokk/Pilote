# Architecture et cas pratiques — NDR / SOC

## Déploiement type (Zeek + ELK)

```ascii
           +-----------+          +----------+
           | Port SPAN | ----->   |   Zeek   |
           +-----------+          +----------+
                                       |
                                  EVE Logs (JSON)
                                       |
                                 Logstash → Elasticsearch → Kibana
```

---

## Exemple 1 — PME avec Zeek + Graylog

- SPAN sur le cœur réseau
- Zeek sur VM dédiée
- Ingestion vers Graylog
- Alertes sur comportement : DNS, HTTP, anomalies horaires

---

## Exemple 2 — Entreprise étendue avec Vectra AI

- Déploiement d’appliances capteurs
- Connexion NetFlow, Zeek, Suricata
- Intégration avec SIEM Splunk + EDR Crowdstrike
- Détection comportementale + réaction (SOAR)

---

## Exemple 3 — NDR + SIEM + EDR

- NDR = Zeek + Darktrace
- SIEM = Sentinel
- EDR = Crowdstrike
- Corrélation des événements via XDR

---

## Pièges à éviter

- Trop de faux positifs si absence de tuning
- Absence de contextualisation = alertes non actionnables
- Logs non horodatés ou non corrélés

> [!tip]
> Toujours contextualiser les logs réseau avec les logs endpoint, authentification, proxy, etc.


---

## Comparatif NDR vs EDR vs XDR

| Critère                   | NDR (Zeek, Vectra)     | EDR (Crowdstrike, SentinelOne) | XDR (Microsoft, Palo Alto…) |
|---------------------------|------------------------|----------------------------------|------------------------------|
| Portée                    | Trafic réseau          | Poste de travail / serveur       | Corrélation multi-canal      |
| Visibilité                | Est-Ouest (lateral)    | Endpoint, processus, fichiers    | Réseau + endpoint + cloud    |
| Collecte                 | SPAN, TAP, NetFlow     | Agent installé                   | Multi-sources                |
| Réponse intégrée         | Souvent limitée        | Très poussée (isolation, kill)   | Automatisée SOAR             |
| Déploiement              | Passif, sans agent     | Agent requis                     | Agent + collecte réseau      |
| Niveau SOC requis        | Avancé                 | Moyen                            | Avancé                       |

> [!tip]
> Un bon SOC associe **EDR + NDR + SIEM** pour une couverture complète.

---

## Retour d’expérience terrain (PME + SOC régional)

- Zeek déployé sur site industriel (600 postes) en parallèle de l’EDR SentinelOne
- Connexions anormales détectées entre imprimantes et IP publiques (C2 détecté uniquement par NDR)
- Corrélation via Graylog avec authentifications et logs proxy
- Actions manuelles (isolation VLAN + reset AD) avant mise en place SOAR

> [!example]
> Le NDR a permis de remonter une compromission "silencieuse" passée sous le radar de l’EDR faute d’exécution malveillante directe.

