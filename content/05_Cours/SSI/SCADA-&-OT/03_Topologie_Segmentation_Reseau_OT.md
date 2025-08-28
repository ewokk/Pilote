# Topologie et segmentation réseau OT

## Référence : modèle Purdue (ISA-95)

Le modèle Purdue structure l’architecture OT/IT en **6 niveaux** du capteur au SI :

```ascii
   NIVEAU 5 — Entreprise IT
       (ERP, SI décisionnel)
   -------------------------
   NIVEAU 4 — Systèmes MES
       (gestion production)
   -------------------------
   NIVEAU 3 — Supervision SCADA
   -------------------------
   NIVEAU 2 — Contrôle (PLC / HMI)
   -------------------------
   NIVEAU 1 — Capteurs et actionneurs
   -------------------------
   NIVEAU 0 — Processus physique
```

---

## Zones & Conduits

- **Zone** : ensemble cohérent (production, sûreté, bureau…)
- **Conduit** : canal contrôlé entre zones

> [!info]
> Les **flux entre zones** doivent être filtrés, journalisés, contrôlés (firewall, proxy, diode…).

---

## Exemples de segmentation

| Zone                    | Objectif                        |
|-------------------------|----------------------------------|
| Zone entreprise         | SI administratif                |
| Zone DMZ industrielle   | Accès à distance sécurisé       |
| Zone supervision        | SCADA, serveurs HMI             |
| Zone contrôle           | Automates, RTU, DCS             |
| Zone physique           | Capteurs, actionneurs           |

---

## Bonnes pratiques

- Interdire toute communication directe IT → OT
- Utiliser des **firewalls industriels** (deep packet inspection Modbus…)
- Déployer des **diodes de données** ou **brokers MQTT contrôlés**
- Gérer un **bastion** pour accès OT
