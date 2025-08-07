# Architectures Zero Trust — composants et structures

## Micro-segmentation

- Cloisonnement logique des systèmes (par application, rôle, département…)
- Réduction de la portée des incidents (blast radius)
- Mise en œuvre via Security Groups, VLAN dynamiques, Network Policies

---

## Vérification continue

- Revalidation des accès à chaque action critique
- Prise en compte du **contexte** :
  - identité
  - appareil utilisé
  - localisation
  - comportement antérieur

---

## Modèle d’accès basé sur l’identité

- L’utilisateur devient le **centre de décision**
- Utilisation de SSO + MFA + SCIM
- Privilèges **dynamiques et réversibles**

---

## Flux typique (schéma ASCII)

```ascii
Utilisateur → Authentification MFA
        ↓
   Requête API ou appli SaaS
        ↓
Évaluation politique Zero Trust :
  - Rôle
  - Heure / IP
  - Device conforme ?
        ↓
  ✅ ou ❌ accès → journalisation
```

---

## Exemples d’architectures Zero Trust

- **M365 + AzureAD + Intune + Defender** (modèle Microsoft Zero Trust)
- **Google BeyondCorp** (proxy contextuel entre l’utilisateur et l’appli)
- **AWS avec IAM Identity Center + SCP + CloudTrail + GuardDuty**

> [!info]
> Zero Trust ne nécessite pas un Cloud unique. Il peut fonctionner **dans un environnement hybride**.

