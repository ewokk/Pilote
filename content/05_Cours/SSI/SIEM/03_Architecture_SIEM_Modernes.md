# 03 - Architecture des SIEM modernes

> [!info]  
> Cette section décrit l’architecture logique et fonctionnelle d’un SIEM nouvelle génération (NextGen SIEM).

---

## 🏗️ Vue d’ensemble

Un SIEM moderne repose sur une architecture modulaire, souvent orientée big data, avec plusieurs couches logiques :

```
          ┌──────────────────────────────┐
          │ Interface utilisateur (dash)│
          └──────────────────────────────┘
                       │
          ┌──────────────────────────────┐
          │ Moteur de workflows / SOAR   │
          └──────────────────────────────┘
                       │
          ┌──────────────────────────────┐
          │ Moteur analytique / UEBA     │
          └──────────────────────────────┘
                       │
          ┌──────────────────────────────┐
          │ Moteur de corrélation        │
          └──────────────────────────────┘
                       │
          ┌──────────────────────────────┐
          │ Collecte et agrégation de logs│
          └──────────────────────────────┘
                       │
          ┌──────────────────────────────┐
          │ Stockage (Data lake, archive)│
          └──────────────────────────────┘
```

---

## 🧱 Couches principales

### 1. **Collecte et agrégation**
- Agents, syslog, APIs, connecteurs cloud
- Normalisation multi-formats (CSV, JSON, CEF…)

### 2. **Corrélation**
- Règles de détection (temps réel, chaînes d’événements)
- Détection d’attaques complexes

### 3. **Analytics et UEBA**
- Machine Learning
- Profils de comportements utilisateurs, seuils dynamiques

### 4. **SOAR et réponse automatisée**
- Playbooks intégrés
- Appels API vers d’autres outils (EDR, pare-feu…)

### 5. **Interface utilisateur**
- Dashboards temps réel
- Rapports, tickets, visualisations

---

> [!tip]  
> Une architecture SIEM bien conçue permet d’absorber le volume croissant de logs tout en réduisant le bruit et les faux positifs.

