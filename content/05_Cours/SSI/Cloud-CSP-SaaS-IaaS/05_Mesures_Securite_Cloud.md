# Mesures de sécurité Cloud spécifiques

## Objectifs

- Réduire la surface d’attaque
- Contrôler les accès
- Auditer les actions
- Conserver la maîtrise des données

---

## Gouvernance et politiques

- Rédiger une **politique de sécurité Cloud**
- Documenter les responsabilités internes (PO, IT, RSSI…)
- Intégrer le Cloud dans le **PSSI** et la **PCA/PRA**

---

## IAM Cloud

- Comptes nominatifs uniquement
- Groupes de rôles, RBAC
- MFA obligatoire
- Accès délégués temporaires (Just-In-Time)

---

## Chiffrement

- Données **au repos** : chiffrées avec clés client ou fournisseur
- Données **en transit** : TLS obligatoire
- Données **en usage** (confidential computing) : technologies émergentes

---

## Journalisation

- Activer CloudTrail (AWS), Activity Log (Azure), AuditLog (Google)
- Export vers SIEM central
- Horodatage UTC + synchronisation NTP

---

## Supervision : CSPM & CNAPP

| Acronyme | Description                         |
|----------|-------------------------------------|
| CSPM     | Cloud Security Posture Management   |
| CNAPP    | Cloud-Native Application Protection Platform |

- Analyse des configurations, alertes en temps réel
- Contrôle de conformité (ISO 27017, CIS, etc.)

---

## Référentiels

- **ISO/IEC 27017** : sécurité du Cloud
- **ISO/IEC 27018** : protection des données personnelles dans le Cloud
- **CIS Benchmarks** : configurations sécurisées AWS/Azure/GCP
- **Zero Trust Cloud** : principe d’authentification continue + cloisonnement fort

