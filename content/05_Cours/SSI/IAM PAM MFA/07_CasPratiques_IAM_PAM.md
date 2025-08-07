# Cas pratiques IAM et PAM

## Cas 1 — IAM pour une PME

- Référentiel RH Excel ou SIRH léger
- Synchronisation vers AD locale via script PowerShell ou Keycloak
- MFA via application mobile (Microsoft Authenticator)
- SSO avec Keycloak (portail central)

> [!success]
> Budget < 5000€/an – 100 utilisateurs – MFA/SSO déployés

---

## Cas 2 — IAM pour entreprise multisites

- SIRH = source de vérité
- Provisioning automatique dans AD et AzureAD (via SCIM)
- RBAC défini par département + site
- MFA obligatoire + SSO OIDC (Okta)
- Campagnes de revue des droits tous les 6 mois

---

## Cas 3 — PAM pour SI critique

- Bastion Wallix ou CyberArk
- Enregistrement de toutes les sessions root
- Accès privilégié = demande via workflow + MFA + temps limité
- Rotation quotidienne des mots de passe de service
- Journalisation dans un SIEM (Splunk)

> [!protection]
> Aucun administrateur n’a accès direct aux systèmes de production sans passer par le bastion.

---

## Cas 4 — Réponse à un audit RGPD/NIS2

- Mise en place d’un coffre-fort PAM
- Suppression des comptes génériques
- MFA obligatoire pour tous les accès à privilèges
- Cartographie des droits automatisée (IAM)

> [!tip]
> Toujours croiser IAM/PAM avec les logs sécurité et les alertes SIEM

