# AAD

> **Type** : acronyme
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : gouvernance, cloud `#cloud`, défensif

---

## Définition

> AAD signifie **Azure Active Directory**, un service de gestion des identités et des accès basé sur le cloud proposé par Microsoft. Il permet l’authentification, l’autorisation et la gestion centralisée des utilisateurs et des applications.

---

## Explication détaillée

- **Origine ou historique**  
  Lancé par Microsoft dans le cadre de sa stratégie cloud Azure, AAD est une extension cloud du service Active Directory traditionnel. Il est devenu un composant clé de Microsoft 365, Azure et d'autres services.

- **Fonctionnement technique**  
  - Fournit des services d’annuaire, d’authentification (OpenID Connect, OAuth 2.0, SAML) et de gestion des accès
  - Gère les identités internes (corporate) et externes (partenaires, clients)
  - Peut être synchronisé avec un AD local via Azure AD Connect

- **Rôles & fonctions**  
  - Contrôle de l'accès aux ressources cloud et SaaS
  - Authentification unique (SSO) sur les services Microsoft et tiers
  - Gestion des rôles, groupes, MFA, et politiques conditionnelles

- **Avantages et limites**  
  - Intégration forte avec l’écosystème Microsoft  
  - Supporte des scénarios hybrides (cloud + on-premise)  
  – Moins complet que l’AD classique pour la gestion fine des GPO  
  – Dépendance à Microsoft et à la connectivité Internet

- **Typologies ou variantes**  
  - Azure AD Free, Premium P1, Premium P2
  - Azure AD B2B (Business to Business) et B2C (Business to Consumer)

---

## Cas d’usage & exemples concrets

- Connexion sécurisée à Microsoft 365
- Accès conditionnel selon l’emplacement ou le terminal
- Portail d’authentification unifiée pour des applications SaaS
- Intégration avec des solutions tierces (Salesforce, ServiceNow...)

---

## Vulnérabilités, risques et abus connus

- Phishing ciblant la page de login Microsoft
- MFA mal configuré ou non activé
- Jetons OAuth volés ou mal protégés
- Mauvaise configuration des accès externes (B2B)

---

## Mesures de sécurité & recommandations

- Activer le MFA obligatoire pour tous les utilisateurs
- Utiliser les politiques d'accès conditionnel
- Surveiller les connexions suspectes via Microsoft Defender for Cloud
- Limiter les droits d’administrateurs globaux
- Superviser avec Azure AD Logs / SIEM

---

## Standards, protocoles & normes associées

- OAuth 2.0, OpenID Connect, SAML 2.0
- SCIM (pour la gestion des identités)
- Intégration avec NIST 800-63 (identité numérique)

---

## Intégration dans un écosystème SSI

- Pilier IAM cloud dans les entreprises Microsoft
- Intégration directe avec Microsoft Defender, Intune, Entra
- Rôle critique dans une stratégie Zero Trust

---

## Liens avec d’autres notions

- [[Active Directory]]
- [[IAM (Identity & Access Management)]]
- [[SSO (Single Sign-On)]]

---

## Sources, outils & références

- [Documentation officielle Microsoft](https://learn.microsoft.com/fr-fr/azure/active-directory/)
- [Azure AD Connect](https://learn.microsoft.com/fr-fr/azure/active-directory/hybrid/how-to-connect-install-custom)
- [Blog Microsoft sur Zero Trust](https://www.microsoft.com/security/blog/tag/zero-trust/)
- [Présentation vidéo Microsoft Entra](https://www.youtube.com/watch?v=RyYXjTHxT9I)
