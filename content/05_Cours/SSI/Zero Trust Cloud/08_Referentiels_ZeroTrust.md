# Référentiels et cadres pour Zero Trust

## NIST SP 800-207

- Référence principale pour l’architecture Zero Trust
- Définit :
  - le **Policy Enforcement Point** (PEP)
  - le **Policy Decision Point** (PDP)
  - la **Policy Engine** (PE)

> [!info]
> Le modèle NIST insiste sur le **découplage du contrôle et de l’accès**, avec supervision constante.

---

## Google BeyondCorp

- Approche initiée par Google après l’attaque Aurora (2009)
- Proxy inverse contextuel entre utilisateur et ressource
- Authentification par :
  - certificat machine
  - statut sécurité poste
  - rôle + IP + comportement

---

## Microsoft Zero Trust Architecture

- Implémentée dans M365, Azure, Defender, Entra ID
- Pilier central : **identité + device + contexte**
- Composants :
  - Azure AD / PIM / Intune
  - Conditional Access
  - Defender for Cloud / Identity / Endpoint

---

## CISA Zero Trust Maturity Model

- Modèle américain (CISA) pour guider les agences fédérales
- 5 piliers + 3 niveaux de maturité
- Adaptable à tout environnement hybride

---

## Autres normes pertinentes

| Norme / Référentiel | Description |
|---------------------|-------------|
| ISO/IEC 27017       | Sécurité du Cloud |
| ISO/IEC 27018       | Données personnelles Cloud |
| CIS Benchmarks      | Configurations sécurisées |
| CSA Cloud Controls Matrix | Mapping des exigences Zero Trust |

