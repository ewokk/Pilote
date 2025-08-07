# Gestion des identités (IAM)

## Objectif de l’IAM

L’IAM (Identity & Access Management) vise à gérer le cycle de vie complet des identités numériques dans une organisation.

> [!info]
> L’IAM englobe à la fois la création, la modification, la désactivation et la suppression des comptes utilisateurs.

## Cycle de vie (JML)

- **Joiner** : arrivée d’un nouvel employé → création automatique du compte et des accès
- **Mover** : changement de poste → modification des accès
- **Leaver** : départ de l’entreprise → désactivation immédiate

## Provisioning / Déprovisioning

- **Manuel** (via scripts ou outils d’administration)
- **Automatisé** (via connecteurs IAM ou annuaire)

## Contrôle des accès

- **RBAC (Role-Based Access Control)** : accès en fonction du rôle (poste ou service)
- **ABAC** (Attribute-Based) : accès conditionné par des attributs (site, département)
- **PBAC** (Policy-Based) : politique explicite de gestion des accès

## Authentification et MFA

- **Authentification forte** : combinaison de plusieurs facteurs (mot de passe + OTP)
- **MFA** obligatoire pour les comptes à privilèges ou l’accès distant

## Traçabilité et audit

- Journaux d’authentification
- Audit des changements de groupes, permissions
- Revue périodique des accès

## Gouvernance

- Référentiel des habilitations
- Outils d’IAM (ex : Microsoft Identity Manager, OpenIAM, Okta, etc.)
- Comité d’habilitation

> [!warning]
> Une absence de gouvernance IAM peut exposer l’entreprise à des accès non maîtrisés et à des violations réglementaires.

