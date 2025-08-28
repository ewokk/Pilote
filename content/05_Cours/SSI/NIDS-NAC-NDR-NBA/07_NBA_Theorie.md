# Analyse comportementale réseau (NBA)

## Fondements

La NBA repose sur l’idée que tout hôte ou application a un **comportement réseau normal** identifiable :
- Fréquence des connexions
- Protocoles utilisés
- Destinations habituelles
- Ports sources/destinations

Une **anomalie** est donc une **déviation statistique durable ou brutale** de ce comportement.

---

## Types de détection

| Type                  | Exemple                                     |
|-----------------------|---------------------------------------------|
| Anomalie statistique  | Délai TCP inhabituel, taille de paquet anormale |
| Beaconing             | Communication régulière vers une IP C2     |
| Scan lent             | Port scanning étalé sur plusieurs heures    |
| Tunneling             | Données HTTP/ICMP contenant du binaire      |
| Usage rare de protocole | SNMP, DNS en volume élevé                  |

---

## Méthodes utilisées

- **Baselines par hôte**
- Analyse de **séries temporelles**
- **Clustering**, scoring, arbres de décision
- Corrélation entre anomalies (score cumulé)
- Visualisation comportementale (graphes, heatmap)

> [!example]
> Une machine d’un utilisateur RH qui contacte un serveur DNS tous les 2s avec un payload binaire compressé = score de 95/100 = alerte NDR

