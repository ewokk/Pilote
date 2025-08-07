# Solutions IAM (panorama technique)

## Critères de choix d’une solution IAM

- Nombre d’utilisateurs
- Intégration avec AD, SIRH, applications SaaS
- Support des protocoles standards (LDAP, SAML, OIDC, SCIM)
- Besoin de MFA, SSO, gouvernance des habilitations
- Budget, hébergement (on-prem vs cloud)

---

## Solutions Open Source

### Keycloak
- Solution IAM complète de Red Hat
- OIDC, SAML, LDAP, MFA, SSO, federation
- Interfaces web et API REST
- Extensible (custom flows, SPI, thèmes)

### WSO2 Identity Server
- IAM modulaire, orienté entreprise
- Fort en federation, SCIM, OAuth2

### Autres
- LemonLDAP::NG, Gluu, Authelia

> [!tip]
> Keycloak est aujourd’hui la solution open source la plus complète et populaire.

---

## Solutions commerciales (IAM as a Service)

| Nom     | Points forts                                 | Cible principale         |
|---------|----------------------------------------------|--------------------------|
| Okta    | Intégration SaaS, workflows JML, SSO, MFA    | Cloud, PME/ETI           |
| Ping Identity | IAM modulaire, federation poussée     | Entreprises complexes    |
| ForgeRock | Gouvernance et provisioning avancés       | Grands comptes           |
| Microsoft Entra ID (ex Azure AD) | SSO, MFA, gestion Azure | Clients Microsoft        |

---

## IAM dans Microsoft Entra (Azure AD)

- SSO + MFA + RBAC natif
- Synchronisation via Azure AD Connect
- Intégration avec plus de 3000 applications SaaS

---

## Outils de gouvernance IAM

- Définition des rôles
- Campagnes de revue d’habilitations
- Approbations, workflow de délégation
- Historique et justification des accès

