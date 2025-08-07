# 07 - Intégrations avancées : UEBA, SOAR, Threat Intelligence

> [!info]  
> Ce chapitre explore les capacités de SIEM avancées, intégrées ou optionnelles, essentielles à un environnement moderne

---

## 🧠 UEBA (User and Entity Behavior Analytics)

- Analyse des comportements utilisateurs et machines
- Détection d’écarts par rapport à une base comportementale apprise
- Scoring de risque utilisateur
- Utilise l’intelligence artificielle (ML)

> [!example]  
> Détection de logon à 3h du matin depuis un pays inhabituel = alerte

---

## ⚙️ SOAR (Security Orchestration, Automation and Response)

- Playbooks automatisés (ex : blocage IP, désactivation compte…)
- Réduction du MTTR
- Intégration avec EDR, firewall, IAM, etc.

> [!tip]  
> Les SIEM modernes proposent des interfaces low-code/no-code pour créer des réponses automatiques.

---

## 🌐 Threat Intelligence

- Flux de renseignements sur les menaces (IP, domaines, hash…)
- Enrichissement des alertes SIEM
- Support des formats STIX/TAXII, OTX, etc.
- Corrélation avec les indicateurs réseau/système

> [!info]  
> Certaines plateformes proposent aussi l’injection de threat intel interne ou sectorielle.

---

## 🔗 Intégration des trois couches

- **UEBA** fournit le contexte comportemental
- **Threat Intel** fournit les IoC/IoA externes
- **SOAR** automatise la réponse en cas de détection

