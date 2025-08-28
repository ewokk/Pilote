# Sécurisation d’Active Directory (Hardening)

## Objectif

Réduire la surface d’attaque, protéger les comptes à privilèges, et empêcher les compromissions de l’annuaire.

---

## Séparation des privilèges

- Comptes d’administration **séparés des comptes utilisateurs**
- Utilisation d’un **bastion d’administration (Jump Server)**
- Création de **comptes par niveau de sensibilité** :
  - `admin.local` (standard)
  - `admin.workstation`
  - `admin.domain`

---

## Tiering model (modèle à 3 niveaux)

| Niveau | Description                       | Exemples                           |
|--------|-----------------------------------|------------------------------------|
| Tier 0 | Contrôle total (forêt, domaine)   | Domain Admins, Enterprise Admins   |
| Tier 1 | Serveurs d’infrastructure         | Admins de serveurs, SCCM, Exchange |
| Tier 2 | Postes utilisateurs, bureautique  | Support, helpdesk, comptes locaux  |

> [!protection]
> Ne jamais utiliser un compte Tier 0 pour administrer un poste utilisateur.

---

## LAPS : Local Administrator Password Solution

- Gère automatiquement un mot de passe **unique** par machine pour le compte admin local
- Stocke le mot de passe chiffré dans AD

> [!tip]
> LAPS est **gratuit** et recommandé sur tous les postes membres.

---

## Restreindre les outils dangereux

- Désactiver l’accès à PowerShell interactif pour les non-admins
- Bloquer `psexec`, `wmic`, `rundll32`, etc. par GPO ou AppLocker

---

## Sécurisation des DC

- Journaux d’événements dédiés et redondés
- Aucun autre rôle (serveur d’impression, DHCP...) sur un DC
- Configuration réseau minimale, ports limités

