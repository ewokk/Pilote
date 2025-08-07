# Authentification unique

> **Catégorie** : #authentification  
> **Type** : concept 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : défensif

---

## Définition
> L’authentification unique (Single Sign-On ou SSO) est un mécanisme permettant à un utilisateur de s’authentifier une seule fois pour accéder à plusieurs applications ou services, sans avoir à ressaisir ses identifiants pour chaque ressource.

---

## Explication détaillée
- **Origine ou historique**  
  - Apparue avec le besoin de simplifier l’expérience utilisateur dans des environnements d’entreprise complexes (multiples applications internes).
- **Fonctionnement technique**  
  - Utilisation de jetons d’authentification (ex : SAML, OAuth) partagés entre fournisseurs d’identité et services.
  - Le fournisseur d'identité (IdP) valide l'identité de l'utilisateur et transmet un jeton aux services (SP) qui l’acceptent.
- **Rôles & fonctions**  
  - Simplifie l’accès aux ressources.
  - Renforce la sécurité par une centralisation du contrôle d’accès.
- **Avantages et limites**  
  - Moins de mots de passe à retenir.
  - Réduction des risques liés au phishing.
  - Un point de défaillance : si le SSO est compromis, tous les services le sont.
- **Typologies ou variantes**  
  - SSO basé sur navigateur (Web SSO), SSO fédéré (entre organisations), SSO cloud vs on-premise.

---

## Cas d’usage & exemples concrets
- Accès aux applications Microsoft 365 via un compte Azure AD.
- Utilisation de Google Workspace pour accéder à des apps tierces.
- Entreprise utilisant Keycloak ou Okta pour gérer les accès internes.

---

## Vulnérabilités, risques et abus connus
- Jetons d’authentification interceptés ou réutilisés.
- Mauvaise configuration des redirections (phishing via SSO).
- Compromission du compte maître (absence de MFA).

---

## Mesures de sécurité & recommandations
- Combiner le SSO avec une authentification multifacteurs.
- Vérifier les signatures et expirations des jetons.
- Segmenter les accès selon les rôles (RBAC).
- Mettre en place une surveillance des connexions anormales.

---

## Standards, protocoles & normes associées
- SAML 2.0, OAuth 2.0, OpenID Connect
- ISO/IEC 27001 – contrôle d’accès
- NIST SP 800-63

---

## Intégration dans un écosystème SSI
- Complète les mécanismes IAM et les annuaires d’entreprise.
- Renforce la sécurité des accès cloud et SaaS.
- Favorise la mise en place de stratégies Zero Trust.

---

## Liens avec d’autres notions
- [[Authentification]]
- [[Authentification multifacteurs]]
- [[Gestion des identités]]

---

## Sources, outils & références
- [Documentation officielle](https://openid.net/connect/)
- [Outils ou solutions associées](https://www.keycloak.org/)
- [Articles techniques, blogs spécialisés](https://auth0.com/learn/sso/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=w1_hC0nM2WI)

---

## Mots-clés
`#authentification` `#lexique` `#concept` `#sso` `#identité` `#accès`
