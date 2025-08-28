# Fédération et SSO (Single Sign-On)

## Objectifs

- Unifier l’authentification entre systèmes hétérogènes
- Améliorer l’expérience utilisateur
- Renforcer la sécurité via centralisation

---

## SSO

- L’utilisateur s’authentifie **une seule fois** auprès d’un IdP (Identity Provider)
- Accès ensuite à toutes les applications fédérées

---

## Protocoles de fédération

| Protocole | Description | Cas d’usage principal |
|----------|-------------|------------------------|
| **SAML 2.0** | XML, basé sur des assertions signées | Applications web classiques |
| **OIDC** (OpenID Connect) | Sur OAuth2, JSON Web Token | Applications modernes/API |
| **Kerberos** | Utilisé dans AD | Intranet Windows, GPO, SMB... |

> [!info]
> SAML reste très utilisé dans les environnements entreprise, mais OIDC est plus courant pour les apps cloud/API.

---

## Fonctionnement typique

```ascii
Utilisateur → App → Redirection vers IdP
        ← Authentification ←
        → App retourne un token d’accès
```

---

## Fournisseurs d’identité (IdP)

- Azure AD
- Keycloak
- Okta
- Google Workspace
- ADFS (Active Directory Federation Services)

---

## Risques et recommandations

> [!warning]
> Si l’IdP est compromis, toutes les applications fédérées le sont aussi.

- Activer MFA pour toute authentification IdP
- Mettre en place des **claims-based rules** strictes
- Monitorer les connexions et anomalies

