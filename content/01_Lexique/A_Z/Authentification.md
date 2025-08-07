# Authentification

> **Catégorie** : #authentification  
> **Type** : concept 
> **Niveau** : base 
> **Contexte** : défensif

---

## Définition
> L’authentification est le processus par lequel un système vérifie l’identité d’un utilisateur, d’un appareil ou d’une entité avant de lui accorder l’accès à une ressource.

---

## Explication détaillée
- **Origine ou historique**  
  - Présente dès les débuts de l’informatique, avec les premiers mots de passe ; a évolué vers des méthodes plus robustes comme les certificats, les tokens, ou la biométrie.
- **Fonctionnement technique**  
  - Basée sur trois facteurs :  
    - Ce que l’on sait (mot de passe)  
    - Ce que l’on a (carte, téléphone)  
    - Ce que l’on est (empreinte, visage)
  - L’authentification peut être simple (un facteur) ou forte (deux facteurs ou plus).
- **Rôles & fonctions**  
  - Pilier fondamental de la sécurité d’accès.
  - Protège les ressources contre les accès non autorisés.
- **Avantages et limites**  
  - Simplicité d’utilisation (mot de passe) mais vulnérabilité (phishing, réutilisation).
  - Méthodes fortes plus sûres mais parfois contraignantes.
- **Typologies ou variantes**  
  - Authentification locale vs centralisée (LDAP, SSO)
  - Authentification manuelle vs automatique (certificats, biométrie)

---

## Cas d’usage & exemples concrets
- Connexion à un compte utilisateur sur un site web avec mot de passe + OTP.
- Accès sécurisé à une application via badge physique.
- Déverrouillage d’un smartphone par reconnaissance faciale.

---

## Vulnérabilités, risques et abus connus
- Vol ou interception de mots de passe (phishing, keylogging).
- Attaques par force brute ou dictionnaire.
- Usurpation d’identité si un second facteur n’est pas requis.

---

## Mesures de sécurité & recommandations
- Utiliser une authentification multifacteurs (MFA).
- Sensibiliser aux bonnes pratiques (pas de réutilisation de mots de passe).
- Déployer des solutions d’authentification centralisée et robustes.
- Journaux d’accès et détection d’anomalies de connexion.

---

## Standards, protocoles & normes associées
- RFC 6749 (OAuth 2.0), RFC 6238 (TOTP), FIDO2, SAML
- ISO/IEC 27001, NIST 800-63
- Directives européennes (eIDAS, DSP2)

---

## Intégration dans un écosystème SSI
- Premier rempart dans une stratégie de défense en profondeur.
- S’intègre avec les mécanismes d’autorisation, de journalisation et d’alerte.
- Critique pour les environnements cloud et Zero Trust.

---

## Liens avec d’autres notions
- [[Authentification multifacteurs]]
- [[Authentification unique]]
- [[Gestion des identités]]

---

## Sources, outils & références
- [Documentation officielle](https://pages.nist.gov/800-63-3/)
- [🛠️ Outils ou solutions associées](https://www.keycloak.org/)
- [Articles techniques, blogs spécialisés](https://www.okta.com/identity-101/authentication/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=In3a2rC6B7o)

---

## Mots-clés
`#authentification` `#lexique` `#concept` `#mfa` `#sécurité` `#identité`
