# Zero Trust Identity & Access Management (IAM)

## Principes clés

- L’identité est **l’élément central de décision**
- Les privilèges doivent être :
  - Minimes (least privilege)
  - Temporaires (Just-In-Time)
  - Traçables (audités)

---

## Bonnes pratiques IAM Cloud

| Élément                  | Bonne pratique |
|--------------------------|----------------|
| Comptes utilisateurs     | Nominatifs uniquement |
| Groupes / rôles          | Rôles par fonction, jamais globaux |
| Droits d’accès           | Revue trimestrielle, expiration automatique |
| MFA                      | Obligatoire pour toute action sensible |
| Secrets                  | Rotation automatique, chiffrage, stockage sécurisé |

---

## Technologies associées

- **RBAC** / **ABAC** / **PBAC**
- **SCIM** pour la synchronisation d’identités (HR-as-a-master)
- **Zero Standing Privileges (ZSP)** : aucun accès persistant
- **JIT Access** via plateformes comme Azure PIM, Okta, CyberArk

> [!example]
> Un administrateur n’obtient ses droits qu’après validation managériale et expiration automatique sous 1h.

---

## Outils

- Azure AD / Entra ID + PIM / Conditional Access
- AWS IAM Identity Center
- GCP IAM + Workload Identity Federation

---

## Surveillance

- Journalisation des connexions (CloudTrail, Sign-in logs)
- Intégration avec SIEM (Sentinel, Splunk, etc.)
- Alerte sur comportement suspect (localisation, volume, rôle)

