# 03 - Mécanismes de détection : signature, comportement, protocole

> [!info]
> Exploration des techniques d’analyse employées par les IDS et IPS

---

## 1. Détection par signature

- Basée sur des **empreintes connues** d’attaques (payloads, patterns, shellcodes…)
- Nécessite une **base de signatures à jour**
- Comparable à un antivirus réseau

### Avantages :
- Très rapide
- Peu de faux positifs
- Facile à maintenir

### Inconvénients :
- Inefficace face aux 0-day
- Évasion facile (obfuscation, encoding)

---

## 2. Détection comportementale (anomaly-based)

- Analyse les **écarts par rapport à un comportement attendu**
- Nécessite un **modèle de base normal** (trafic, connexions, fichiers…)

### Techniques utilisées :
- Apprentissage statistique (ML simple)
- Seuils dynamiques (ex : nombre de connexions par minute)
- Score d’anomalie

### Avantages :
- Détecte les menaces inconnues
- Adaptable à l’environnement

### Inconvénients :
- Faux positifs fréquents
- Période d’apprentissage critique

> [!example]
> Suricata peut fonctionner avec des plugins de détection comportementale (ex : Scirius, SELKS)

---

## 3. Analyse de protocole (stateful protocol analysis)

- Vérifie la **conformité des paquets** au protocole attendu (ex : HTTP, SMTP)
- Analyse la structure, la séquence, les flags, etc.

### Avantages :
- Détecte des attaques sophistiquées (buffer overflow, evasion TCP)
- Utile pour les attaques slowloris, split-packet, etc.

### Inconvénients :
- Très consommateur en ressources
- Complexité d’implémentation

---

## Schéma récapitulatif

```
        +----------------------+
        |      Source réseau   |
        +----------------------+
                  |
            [ Collecte ]
                  |
     +--------------------------+
     | Mécanisme de détection   |
     +--------------------------+
     | Signature | Comportement | Protocole |
     +-----------+--------------+-----------+
```

