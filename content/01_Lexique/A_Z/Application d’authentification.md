# Application d’authentification

> **Catégorie** : #authentification  
> **Type** : outil  `#outil`  
> **Niveau** : base 
> **Contexte** : défensif, accès `#accès`, MFA `#mfa`

---

## Définition
> Une **application d’authentification** est une application mobile ou desktop permettant de générer des **codes temporaires à usage unique (OTP)**, souvent utilisés dans les mécanismes de **double authentification (2FA/MFA)** pour renforcer la sécurité des connexions.

---

## Explication détaillée
- **Origine ou historique**  
  Popularisées à partir de 2010 avec la généralisation des attaques par vol de mot de passe. L’algorithme TOTP (Time-based One-Time Password) est un standard ouvert (RFC 6238) utilisé par la majorité des apps.

- **Fonctionnement technique**  
  - Utilise des **algorithmes cryptographiques (HMAC-SHA1)** combinés avec un **secret partagé** et une horloge
  - Le code change toutes les **30 secondes**
  - Fonctionne même hors ligne (contrairement au SMS)
  - Peut stocker plusieurs comptes avec QR code

- **Rôles & fonctions**  
  - Ajouter une couche de sécurité au mot de passe
  - Prévenir les accès non autorisés après compromission d’identifiants
  - Authentifier l’utilisateur sur de multiples services

- **Avantages et limites**  
  + Plus sécurisé que les SMS (pas interceptable par SIM swap)  
  + Gratuit, rapide, largement adopté  
  – Perte ou vol du téléphone = risque d’exclusion  
  – Nécessite une synchronisation précise de l’horloge système

- **Typologies ou variantes**  
  - TOTP (temps) vs HOTP (compteur)  
  - Apps mobiles : Google Authenticator, Microsoft Authenticator, Authy  
  - Apps intégrées dans les gestionnaires de mots de passe (Bitwarden, 1Password)

---

## Cas d’usage & exemples concrets
- Connexion à un compte Google avec code 2FA via Google Authenticator
- Authentification à GitHub, AWS ou Facebook avec Microsoft Authenticator
- Utilisation de Bitwarden pour générer un OTP après saisie du mot de passe maître

---

## Vulnérabilités, risques et abus connus
- Phishing ciblé demandant le code OTP
- Faux QR codes ou app compromise
- Attaque par malware sur mobile
- Mauvaise gestion du backup ou des secrets

---

## Mesures de sécurité & recommandations
- Sauvegarder les secrets via des apps comme Authy ou un gestionnaire sécurisé
- Ne pas scanner de QR code douteux
- Utiliser une app réputée, mise à jour régulièrement
- Préférer TOTP aux méthodes par SMS
- Activer des codes de récupération

---

## Standards, protocoles & normes associées
- RFC 6238 (TOTP), RFC 4226 (HOTP)
- NIST SP 800-63B – MFA guidelines
- Compatible avec FIDO2 dans des architectures plus avancées

---

## Intégration dans un écosystème SSI
- Pilier du MFA dans les entreprises
- Complément des systèmes SSO, IAM, PAM
- Requis pour les accès sensibles (admin, cloud, messagerie)

---

## Liens avec d’autres notions
- [[MFA]]
- [[TOTP]]
- [[FIDO2]]
- [[Gestionnaire de mots de passe]]

---

## Sources, outils & références
- [RFC TOTP (IETF)](https://datatracker.ietf.org/doc/html/rfc6238)
- [Google Authenticator, Authy, Microsoft Authenticator](https://authy.com/)
- [Guide ANSSI sur l’authentification forte](https://www.ssi.gouv.fr/publication/authentification-multifactorielle/)
- [Vidéo MFA & apps d’authentification](https://www.youtube.com/watch?v=J9y30gVQ1fI)

---

## Mots-clés
`#authentification` `#lexique` `#outil` `#MFA` `#2FA` `#TOTP` `#authenticator` `#otp` `#sécurité`
