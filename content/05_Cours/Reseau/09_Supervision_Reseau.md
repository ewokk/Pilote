# 8 – Supervision réseau

La supervision réseau est un pilier essentiel de la cybersécurité. Elle permet de surveiller en temps réel l’état, la performance et les événements critiques des équipements réseau, tout en fournissant une capacité de détection rapide des anomalies et incidents.

> [!info]  
> Une bonne supervision permet de passer d’une posture réactive à une posture proactive : elle est indispensable au RSSI, au SOC, et à l’administrateur réseau.

---

## 1. Objectifs de la supervision réseau

| Objectif                    | Description |
|-----------------------------|-------------|
| Disponibilité               | Détecter les coupures ou pannes de service |
| Performance                 | Suivre les débits, temps de réponse, saturation |
| Sécurité                    | Identifier les comportements anormaux ou suspects |
| Traçabilité                 | Archiver les événements pour analyse ou conformité |
| Anticipation                | Prévenir les incidents par analyse de tendance |

---

## 2. Architecture typique de supervision

### Composants :

- **Sondes** : dispositifs ou agents qui collectent les données (ICMP, SNMP, logs, flux…)
- **Serveur de collecte** : centralise les métriques et événements
- **Moteur de corrélation** : détecte les anomalies ou règles déclenchées
- **Interface graphique** : dashboards, graphiques, alertes

> [!example]  
> Une sonde Zabbix interroge un switch via SNMP → envoie les métriques → une alerte s’affiche si le taux d’erreur dépasse 10 %.

---

## 3. Outils de supervision

| Outil       | Fonction                               | Spécificité principale |
|-------------|----------------------------------------|-------------------------|
| Nagios      | Supervision classique, simple et fiable | Écosystème très riche   |
| Zabbix      | Monitoring complet, agent ou agentless | Personnalisation poussée |
| Prometheus  | Collecte métrique en mode “pull”       | Requêtes dynamiques, Grafana |
| Grafana     | Visualisation temps réel               | Intégrable avec Prometheus, Zabbix |

---

## 4. Données supervisées

| Type de donnée          | Exemple                                  |
|--------------------------|-------------------------------------------|
| Disponibilité            | Ping, HTTP, SNMP                         |
| Matériel                 | Températures, voltage, CPU, RAM          |
| Réseau                   | Débit, erreurs, taux de collisions       |
| Services / ports         | Ouverture, latence, logs applicatifs     |
| Sécurité                 | Tentatives de connexion, anomalies, flux |

> [!tip]  
> Superviser les erreurs CRC, les drops et les disconnections permet de détecter des problèmes matériels avant l’incident.

---

## 5. Supervision de la sécurité réseau

### WIDS / WIPS (Wireless Intrusion Detection / Prevention)

- Analyse le trafic Wi-Fi
- Détecte les **evil twins**, clients inconnus, attaques de désauthentification, anomalies de canal

### Intégration avec SIEM :

- Les outils de supervision envoient leurs logs (Syslog, SNMP trap, API) vers un **SIEM**
- Le SIEM corrèle les données pour remonter des alertes plus intelligentes

---

## 6. Alerting et notifications

- Déclenchement selon seuils, règles, événements combinés
- Escalade d’alertes selon criticité
- Notifications par : mail, SMS, webhook, messagerie interne, ticketing
- Suivi des incidents : état, durée, cause, résolution

---

## 7. Bonnes pratiques pour le RSSI

| Pratique                          | Objectif |
|-----------------------------------|----------|
| Superviser toutes les zones réseau | Détection complète |
| Mettre en place des seuils pertinents | Réduction des faux positifs |
| Centraliser dans un SIEM         | Corrélation multi-source |
| Vérifier les logs et alertes     | Réactivité opérationnelle |
| Tester régulièrement les alertes | Fiabilité du dispositif |

> [!success]  
> Tu es maintenant capable de mettre en place ou piloter une supervision réseau efficace, combinant visibilité technique et cybersécurité.
