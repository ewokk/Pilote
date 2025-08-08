# Cas pratiques — Mise en œuvre Zero Trust Cloud

## Cas 1 — PME avec Microsoft 365 + Azure

- Utilise :
  - M365 (Exchange, Teams)
  - Azure AD + Intune
  - OneDrive
- Actions mises en place :
  - MFA + Conditional Access
  - Appareils contrôlés uniquement
  - PIM pour l’administrateur
  - Logs intégrés à Sentinel

> [!success]
> Couverture complète des 7 piliers avec outils Microsoft

---

## Cas 2 — Groupe international sur AWS

- Multi-compte AWS + applications critiques
- Actions :
  - IAM Identity Center
  - MFA + accès temporaire
  - VPC isolés, peering limité
  - CloudTrail + GuardDuty + SCP

> [!tip]
> Mise en œuvre progressive : d’abord IAM, ensuite réseau, puis supervision

---

## Cas 3 — Entreprise avec Shadow IT massif

- Découverte via CASB : Dropbox, WeTransfer, outils non référencés
- Réponse :
  - Blocage DNS + proxy filtrant
  - Campagne sensibilisation Zero Trust
  - Déploiement Google Workspace managé + BeyondCorp

---

## Table de validation Zero Trust

| Pilier         | Objectif atteint ? | Outils utilisés        |
|----------------|--------------------|------------------------|
| Identité       | ✅                 | Azure AD, AWS IAM     |
| Appareils      | ✅                 | Intune, certificat     |
| Applications   | ✅                 | Proxy, PIM, SSO        |
| Données        | ✅                 | DLP, OneDrive, S3      |
| Réseau         | ✅                 | VPC, ZTNA, NAC         |
| Infrastructure | ✅                 | Bastion, SCP           |
| Supervision    | ✅                 | Sentinel, GuardDuty    |

