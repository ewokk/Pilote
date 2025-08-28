# 09 - Synthèse des exigences IDS / IPS

> [!info]
> Ce tableau permet de vérifier, comparer ou auditer une solution IDS/IPS selon les fonctionnalités essentielles

---

## Exigences fonctionnelles et techniques

| Domaine                | Exigences clés                                                                 |
|------------------------|---------------------------------------------------------------------------------|
| Collecte               | Trafic réseau (port mirroring, TAP), logs système (HIDS), agents légers         |
| Détection              | Signature (Snort/SID), comportemental (anomalie), protocolaire (RFC)            |
| Réaction               | Alerte (IDS), Blocage (IPS), génération de logs, escalation SIEM                |
| Corrélation            | Compatibilité SIEM, export JSON/Syslog, enrichissement d'événements             |
| Mise à jour            | Base de signatures à jour, custom rules, cron/automatisation                    |
| Performance            | Support haut débit (10 Gbps+), multithreading, faible latence                   |
| Administration         | Interface web/API, règles granulaires, alertes visuelles, logs consultables     |
| Gouvernance            | Journalisation, supervision, procédure de réponse, documentation                |
| Intégration            | EDR, pare-feu, SOAR, proxy, WAF                                                 |
| Conformité             | RGPD (logs, DPIA), ISO 27001, PCI-DSS                                           |

---

> [!tip]
> Utilise cette table comme grille d’évaluation dans un appel d’offre ou un audit interne.

