# Architecture technique de surveillance

## Principes clés

- **Collecte des événements** : depuis les systèmes, réseaux, endpoints, Cloud
- **Centralisation** : tout est agrégé dans une plateforme SIEM ou data lake
- **Corrélation** : association de plusieurs événements pour créer une alerte
- **Visualisation & traitement** : tableau de bord, alerting, analystes SOC

---

## Architecture type

```ascii
[Agents / Sondes / Journaux]
          ↓
     [SIEM / NDR / EDR]
          ↓
  [Corrélation / Règles]
          ↓
 [Tableau de bord SOC / Alertes]
```

---

## Flux de supervision

1. **Événement brut** → agent / log
2. **Transmission** → syslog, API, agent
3. **Parsage & normalisation**
4. **Stockage + corrélation**
5. **Alerte / notification**
6. **Qualification (L1 → L2 SOC)**

> [!info]
> L’architecture doit être **fiable, résiliente, scalable et chronologique** (timestamp synchronisé !)

