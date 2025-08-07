# 04 - Architecture et déploiement IDS/IPS

> [!info]
> Description des architectures courantes et recommandations de déploiement

---

## 1. Emplacement réseau des capteurs

| Positionnement | Description | Objectifs |
|----------------|-------------|-----------|
| **Avant pare-feu** | Voit tout le trafic brut | Analyse brute (rare) |
| **Après pare-feu (DMZ)** | Voit ce que le FW laisse passer | IDS logique, corrélé |
| **Sur backbone / cœur réseau** | Voit l’ensemble du LAN | Surveillance interne (latéralisation) |
| **Sur machine (HIDS)** | Journalisation locale | Visibilité sur le système |

> [!tip]
> En entreprise, on privilégie des capteurs NIDS stratégiques + des HIDS sur les serveurs sensibles.

---

## 2. Types de déploiement

- **In-line (IPS)** : agit directement sur le flux, nécessite tolérance à la latence
- **Out-of-band (IDS)** : en écoute passive, aucun impact

---

## 3. Architecture centralisée vs distribuée

| Type          | Description                                | Avantages |
|---------------|--------------------------------------------|-----------|
| Centralisée   | Un serveur maître (correlation, alerting)  | Facile à gérer |
| Distribuée    | Plusieurs nœuds (edge, DMZ, cloud…)        | Résilience, scalabilité |

---

## 4. Intégration avec l’écosystème sécurité

- SIEM : corrélation et alerte centralisée
- SOAR : déclenchement d’actions automatiques
- EDR : corrélation endpoint + réseau
- Firewall : blocage contextuel (IPS)

---

## 5. Schéma d’architecture IDS/IPS typique

```
         +--------+        +--------+        +-----------+
Internet |        |        | IPS/NIDS|        | Firewall  |
---------> Switch +--------> Inline  +------->           |
         |        |        |        |        |           |
         +--------+        +--------+        +-----------+
                                 |
                          +-------------+
                          | Serveur SIEM |
                          +-------------+
```

