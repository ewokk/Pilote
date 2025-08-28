# Gestion des comptes à privilèges (PAM)

## Définition

Le PAM (Privileged Access Management) est un **sous-ensemble de l’IAM** dédié à la **sécurisation, supervision et contrôle des comptes à privilèges**.

> [!danger]
> Un seul compte admin compromis = compromission complète du SI.

---

## Types de comptes à privilégier

- `Administrateurs systèmes` (AD, Linux, VMware…)
- `Comptes de service`
- `Comptes d'application`
- `Comptes génériques partagés` (à éviter)
- `Comptes de secours`

---

## Objectifs d’un PAM

- Réduire le nombre de comptes à privilèges
- Supprimer les mots de passe connus statiquement
- Enregistrer et tracer chaque session sensible
- Appliquer le principe du moindre privilège

---

## Composants d’une solution PAM

1. **Vault (coffre-fort)**
   - Stockage sécurisé des mots de passe (chiffré, accès via politique)
   - Rotation automatique

2. **Bastion d’administration**
   - Saut sécurisé entre l’utilisateur et la cible
   - Enregistrements vidéo, audit complet

3. **Workflow d’approbation**
   - Demande d’accès à un système → validation → session limitée

4. **Session recording / keystroke logging**
   - Rejeu complet d’une session (preuve)

---

## Outils commerciaux

- CyberArk
- Wallix Bastion
- BeyondTrust
- Thycotic
- Senhasegura

## Outils open source

- HashiCorp Vault (stockage secrets)
- Teleport
- StrongDM (freemium)

---

## Intégration avec IAM

- Provisioning des comptes privilégiés
- Authentification forte requise (MFA)
- SSO pour PAM + logs centralisés (SIEM)

