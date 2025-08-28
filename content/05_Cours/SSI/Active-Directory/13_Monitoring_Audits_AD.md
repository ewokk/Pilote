# Audit et surveillance d’Active Directory

## Objectifs de l’audit

- Détecter les **accès non autorisés**
- Tracer les **modifications critiques**
- Conformité réglementaire (ISO 27001, RGPD...)

---

## Journaux à surveiller

| Source                    | Utilité principale                           |
|---------------------------|----------------------------------------------|
| Security (ID 4624/4625)   | Connexions réussies / échouées                |
| Directory Services        | Modifications d’objets AD                    |
| DFS Replication           | Réplication, erreurs                         |
| DNS Server                | Anomalies de résolution ou injections        |

> [!warning]
> Pense à activer la journalisation avancée via GPO (Object Access, Directory Access...).

---

## Surveillance en temps réel

- **SIEM** : Splunk, ELK, Microsoft Sentinel
- **Outils AD spécialisés** : ADAudit Plus, Purple Knight, BloodHound (graphes de privilèges)

---

## Alertes critiques

- Membre ajouté à `Domain Admins`
- Création d’un compte avec privilèges
- Modifications des GPO
- Utilisation d’outils suspects (Mimikatz, Rubeus...)

---

## Centralisation des logs

> [!tip]
> Utiliser `Windows Event Forwarding (WEF)` ou un agent SIEM sur les DC.

