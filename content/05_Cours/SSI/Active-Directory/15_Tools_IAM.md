# Outils IAM (Identity & Access Management)

## Outils Open Source

### Keycloak
- Solution IAM open source de Red Hat
- Supporte SSO, OIDC, SAML, LDAP, Kerberos
- Interface de gestion des utilisateurs et des rôles

### WSO2 Identity Server
- Orienté entreprise, très modulaire
- Support complet SAML, OAuth2, SCIM

---

## Outils propriétaires

### Microsoft Identity Manager (MIM)
- IAM pour AD / Azure
- Provisioning, workflow JML, synchronisation

### Okta
- Plateforme SaaS IAM complète
- MFA, SSO, lifecycle management
- Intégration avec +7000 applications

### Ping Identity / ForgeRock / Saviynt
- IAM d’entreprise, support avancé
- Gouvernance, rôles, approbations, intégration SIEM

---

## Comparatif simplifié

| Outil     | Open Source | SSO | MFA | Provisioning | Cible          |
|-----------|-------------|-----|-----|--------------|----------------|
| Keycloak  | ✅          | ✅  | ✅  | Moyen         | Dev, infra     |
| MIM       | ❌          | ✅  | ✅  | Fort          | AD / Azure     |
| Okta      | ❌          | ✅  | ✅  | Très fort     | SaaS / Cloud   |

> [!tip]
> Le choix dépend du contexte : AD local, hybridation Azure, SaaS pur, conformité RGPD, etc.
