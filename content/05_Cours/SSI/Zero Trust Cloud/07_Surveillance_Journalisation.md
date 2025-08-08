# Journalisation et supervision dans un modèle Zero Trust

## Pourquoi journaliser ?

- Traçabilité complète des accès (par utilisateur, par rôle)
- Détection des comportements anormaux
- Obligation légale (conformité RGPD, ISO, etc.)

> [!warning]
> Sans logs fiables, un modèle Zero Trust n’est **ni prouvable ni vérifiable**.

---

## Journaux à collecter

| Type de log         | Exemple                                       |
|---------------------|-----------------------------------------------|
| Authentification    | Azure AD Sign-In, AWS CloudTrail              |
| Configuration       | IAM changes, firewall rules, GCP Config logs  |
| Réseau              | NetFlow, Zeek, VPC Flow Logs                  |
| SaaS                | Admin logs Google Workspace, M365 audit logs  |
| API                 | API Gateway, App Service, Lambda              |

---

## Intégration SIEM

- Agrégation centralisée (Sentinel, Splunk, Elastic…)
- Corrélation temporelle (recherche multi-logs)
- Alerte en cas de :
  - accès depuis pays inhabituel
  - élévation de privilège
  - comportement anormal

---

## Visualisation

- Dashboards personnalisés par rôle
- Cartographie des flux
- Heatmaps des événements critiques

> [!tip]
> Privilégier des logs **JSON standardisés** pour faciliter l’automatisation et la corrélation.

