# 6 - Mesures Techniques par Exigence (Version enrichie et complète)

Ce fichier présente les **mesures techniques clés** à mettre en œuvre pour satisfaire **chacune des 12 exigences PCI DSS v4.0**.

---

## Exigence 1 – Contrôles réseau

| Élément | Outil recommandé | Vérification |
|--------|------------------|--------------|
| Pare-feu | pfSense, Fortigate, Checkpoint | Dump des règles, logs de blocage |
| Segmentation | VLAN, SDN | Test Nmap, script segmentation |

> [!failure]
> Évitez les règles ANY-ANY, même temporaires.

___

## Exigence 2 – Configurations sécurisées

| Cible | Méthode | Exemple |
|-------|---------|---------|
| OS / Réseau | Benchmark CIS/ANSSI | Lynis, Chef InSpec |
| Application | Configuration durcie | OWASP SecureConfig, audit YAML/INI |

> [!tip]
> Automatisez avec Ansible + scripts d’audit réguliers.

___

## Exigence 3 – Données stockées (PAN)

| Élément | Mesure | Outil |
|---------|--------|-------|
| PAN | AES-256 + rotation clé | Hashicorp Vault, LUKS |
| SAD | Suppression après autorisation | Cron wipe, suppression BDD auto |

> [!danger]
> Le stockage du CVV est **strictement interdit** après autorisation.

___

## Exigence 4 – Données transmises

| Protocole | Configuration | Vérification |
|-----------|---------------|--------------|
| TLS | Version ≥ 1.2 | SSL Labs, testssl.sh |
| SSH | Durci (`sshd_config`) | `sshd -T`, Lynis |

> [!tip]
> Activez HSTS et désactivez TLS 1.0/1.1.

___

## Exigence 5 – Anti-malware

| Poste cible | Outil | Vérification |
|-------------|-------|--------------|
| Endpoint | Crowdstrike, Wazuh | Console + détection EICAR |
| Serveur Linux | CrowdSec, Falco | Journal syslog, alertes |

___

## Exigence 6 – Développement et correctifs

| Élément | Action | Exemple |
|---------|--------|---------|
| Dev sécurisé | SAST/DAST | SonarQube, ZAP |
| Patch management | Ansible, WSUS | `apt list`, reports WSUS |

> [!tip]
> Intégrer `npm audit`, `pip-audit`, `safety` dans vos CI/CD.

___

## Exigence 7 – Accès par besoin métier

| Contrôle      | Exemple             | Outil                          |
| ------------- | ------------------- | ------------------------------ |
| RBAC          | Groupes AD, IAM     | Keycloak, Azure AD             |
| Audit d’accès | Revue trimestrielle | Tableur, audit automatique IAM |
>[!info]
>RBAC signifie **Role-Based Access Control**, ou en français : **contrôle d’accès basé sur les rôles**.
>## Définition simple
>
RBAC est une méthode de gestion des autorisations dans un système informatique.  
Plutôt que d’attribuer des **droits directement à chaque utilisateur**, on leur assigne des **rôles** (ex. : "comptable", "admin", "auditeur"), et chaque rôle possède un ensemble défini de permissions.

___

## Exigence 8 – Authentification forte

| Élément | Mesure | Vérification |
|---------|--------|--------------|
| MFA | Duo, TOTP, Yubikey | Logs d’authentification |
| Sessions | Timeout, verrouillage | Captures, scripts test |

> [!danger]
> Le MFA par SMS seul est vulnérable (SIM swap).

___

## Exigence 9 – Accès physique

| Contrôle | Exemple | Vérification |
|----------|---------|--------------|
| Badge | RFID, double badge | Journal d’accès, vidéos |
| Destruction | Broyeur certifié | PV destruction, enregistrement |

___

## Exigence 10 – Surveillance & logs

| Élément | Mesure | Outil |
|---------|--------|-------|
| Logs centralisés | Syslog, Rsyslog | Wazuh, Graylog |
| SIEM | Corrélation, alertes | Splunk, Sentinel |

> [!failure]
> L’absence d’horodatage NTP = **non-conformité majeure**.

___

## Exigence 11 – Tests de sécurité

| Test | Fréquence | Outil |
|------|-----------|-------|
| Scan vulnérabilité | Trimestriel | OpenVAS, Nessus |
| Pentest | Annuel | Rapport externe ou interne |

> [!example]
> Scans internes + externes exigés selon votre SAQ/ROC.

___

## Exigence 12 – Politique et gouvernance

| Élément | Outil | Vérification |
|---------|-------|--------------|
| Politique SSI | Markdown, PDF signé | Validation annuelle |
| Sensibilisation | LMS, e-learning | Preuves de suivi |

> [!tip]
> Intégrez vos exigences PCI dans votre PSSI centrale.
