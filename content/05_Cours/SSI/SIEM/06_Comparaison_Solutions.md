# 06 - Comparaison des solutions et modèles de déploiement

> [!info]  
> Comparaison des modèles d’architecture SIEM et panorama des offres

---

## 🧱 Modèles de déploiement SIEM

| Modèle                       | Description                                                                 | Avantages                              | Inconvénients                         |
|-----------------------------|-----------------------------------------------------------------------------|----------------------------------------|---------------------------------------|
| **On-premise (legacy)**     | Déploiement local (serveur dédié, stockage interne)                        | Contrôle total, données locales         | Coût élevé, complexité, obsolescence  |
| **Cloud SIEM**              | SIEM hébergé (SaaS)                                                         | Facilité de déploiement, coûts réduits  | Données délocalisées, dépendance      |
| **Hybride**                 | Collecte sur site, traitement dans le cloud                                | Équilibre contrôle/coût/performance     | Complexité d’intégration              |
| **SIEM-as-a-Service (MSSP)**| SIEM opéré par un prestataire (infogérance complète)                       | Expertise externe, gestion déléguée     | Moins de personnalisation             |

---

## 🔍 Exemples de solutions du marché

| Solution         | Type      | Spécificités principales                           |
|------------------|-----------|----------------------------------------------------|
| Splunk           | On-prem/Cloud | Très scalable, puissant moteur de recherche         |
| IBM QRadar       | On-prem    | Corrélation poussée, très utilisé en entreprise     |
| Elastic SIEM     | Cloud/On-prem | Open source, flexible, API-first                  |
| Microsoft Sentinel | Cloud (Azure) | Intégré Microsoft, bon rapport prix/fonction       |
| Log360           | Hybride   | Intégration DLP/CASB, corrélation prête à l’emploi  |
| Sumo Logic       | Cloud     | Rapidité d’implémentation, analytique forte        |

---

## 🎛️ Critères de comparaison fonctionnelle

- Capacités de corrélation
- Modularité (SOAR, TI, UEBA…)
- Facilité de configuration
- Personnalisation des alertes et dashboards
- Prise en charge des logs non-standards
- Visualisation avancée

> [!example]  
> Un scoring multi-critères sur les cas d’usage internes est recommandé avant tout achat.

