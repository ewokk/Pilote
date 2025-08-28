# Accès distants en environnement OT

## Pourquoi c’est critique

- Télémaintenance (automates, SCADA…)
- Intervention de prestataires externes
- Télédiagnostic de sites isolés

> [!danger]
> De nombreux ransomwares OT sont arrivés **via VPN ou session RDP mal sécurisée**.

---

## Bonnes pratiques

| Composant               | Bonne pratique                                 |
|-------------------------|------------------------------------------------|
| VPN                     | IP fixe, MFA, logs, certificat, pas de split  |
| Bastion d’accès         | Session enregistrée, accès temporaire         |
| Jumpbox OT              | Authentification forte, firewall, DMZ         |
| Authentification        | MFA obligatoire, certificat machine            |
| Supervision             | Connexion = événement critique + alerté        |

---

## Outils recommandés

- Apache Guacamole + LDAP
- Bastion industriel (Stormshield, WALLIX, Fudo…)
- Enregistreur de session + jeton d’accès
- Portail sécurisé centralisé (TOTP, traçabilité)

---

## Exemples

- Accès support Siemens = via bastion → tunnel TLS → SCADA
- Connexion à distance sur automate = via jumpbox avec firewall SPI + alerting

