# SSO et fédération : SAML, OIDC

## SSO (Single Sign-On)

- Permet à un utilisateur de **s’authentifier une seule fois** pour accéder à plusieurs applications
- L’authentification est **centralisée** par un Identity Provider (IdP)

---

## Protocoles de fédération

### SAML 2.0
- XML, basé sur des assertions signées
- Cas d’usage : intranet, apps d’entreprise, portail RH

### OIDC (OpenID Connect)
- JSON Web Tokens (JWT), basé sur OAuth2
- Plus léger et moderne
- Cas d’usage : applications web, SaaS, mobiles

### Kerberos
- Authentification native dans les environnements Active Directory
- Utilisé sur les réseaux internes

---

## Rôle des acteurs

| Rôle             | Fonction                         |
|------------------|----------------------------------|
| Identity Provider (IdP) | Authentifie l’utilisateur       |
| Service Provider (SP)   | Fournit le service/app demandé |

---

## Schéma SSO (OIDC ou SAML)

```ascii
Utilisateur → SP → Redirection → IdP
        ← Authentification ←
        → Token ou assertion →
        → Accès à l'application
```

---

## Intégration SSO

- Fichiers de métadonnées (SAML)
- Claims (OIDC) = attributs d’identité
- Mapping des groupes, rôles, email, nom, etc.

---

## Risques SSO

> [!danger]
> Si le compte IdP est compromis, **toutes les applications** sont exposées.

- Appliquer MFA sur l’IdP
- Journaliser les connexions
- Restreindre l’accès selon contexte (réseau, device, heure)

