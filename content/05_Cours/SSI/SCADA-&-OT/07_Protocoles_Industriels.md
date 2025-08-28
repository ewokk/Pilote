# Protocoles industriels — sécurité et usages

## 1. Modbus (TCP)

- Protocole ouvert de communication automate
- Aucun chiffrement, aucune authentification
- Très courant dans les SCADA
- Attaques : sniffing, injection de commandes, replay

## 2. OPC UA

- Standard moderne sécurisé
- Chiffrement TLS, contrôle d’accès par certificat
- Utilisé pour interopérabilité machine-to-machine

## 3. DNP3

- Réseaux électriques (USA, Canada…)
- Extensions de sécurité (Secure DNP3)
- Vulnérabilités dans la couche transport si non chiffrée

## 4. Profinet / EtherCAT / S7Comm / BacNet…

- Protocoles propriétaires (Siemens, Schneider…)
- Peu sécurisés par défaut
- Requiert cloisonnement réseau strict

---

## Recommandations générales

| Protocole      | Sécurisé ? | Remarques                       |
|----------------|------------|----------------------------------|
| Modbus         | ❌         | Cloisonner + surveiller         |
| OPC UA         | ✅         | Préférer vs Modbus              |
| DNP3 (non-sécu)| ❌         | Tunneliser ou filtrer fortement |
| S7Comm         | ❌         | Protocole Siemens très ciblé    |

> [!tip]
> Lorsqu’on ne peut pas sécuriser, on segmente et **supervise passivement**.

