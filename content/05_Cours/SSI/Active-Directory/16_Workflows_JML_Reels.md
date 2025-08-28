# Workflows JML (Joiner, Mover, Leaver) — Mise en œuvre réelle

## Objectif

Mettre en œuvre des processus robustes de gestion du cycle de vie des identités.

---

## Joiner — Arrivée

1. RH saisit l’entrée dans le SIRH
2. Connecteur IAM détecte le nouvel employé
3. Provisioning :
   - Compte AD
   - Boîte mail
   - Ajout aux groupes métiers
   - Attribution d’un PC et d’un logiciel

> [!example]
> Alice rejoint le département juridique : elle reçoit automatiquement un accès à l’OU `Juridique`, aux GPO correspondantes, et à un coffre-fort sécurisé.

---

## Mover — Mobilité interne

1. Changement de service
2. L’IAM :
   - Révoque les accès précédents
   - Applique le nouveau rôle RBAC
   - Archive les anciennes données si nécessaire

---

## Leaver — Départ

1. Notification de départ dans le SIRH
2. Automatisation immédiate :
   - Désactivation du compte
   - Révocation des accès SaaS
   - Archivage, délégation de boîte mail
   - Clôture MFA / VPN

> [!protection]
> L’automatisation JML limite les comptes orphelins, fuites de données et accès dormants.

---

## Outils d’automatisation

- **Okta Workflows**
- **Azure Identity Governance**
- **MIM Synchronization Rules**
- **Playbooks SIEM / SOAR (Splunk, Sentinel...)**

