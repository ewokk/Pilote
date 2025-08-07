# Authentification multifacteurs

> **Catégorie** : #authentification  
> **Type** : concept 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : défensif

---

## Définition
> L’authentification multifacteurs (MFA) est une méthode d’authentification qui combine au moins deux types de facteurs distincts pour vérifier l’identité d’un utilisateur, renforçant ainsi la sécurité des accès.

---

## Explication détaillée
- **Origine ou historique**  
  - Popularisée à la suite de nombreuses compromissions de comptes par vol de mots de passe, notamment dans les années 2010.
- **Fonctionnement technique**  
  - Trois grandes catégories de facteurs :
    - Ce que l’on sait : mot de passe, code PIN
    - Ce que l’on a : token physique, téléphone, carte
    - Ce que l’on est : empreinte, visage, iris
  - MFA exige au moins deux catégories différentes pour valider une authentification.
- **Rôles & fonctions**  
  - Réduit le risque de compromission en cas de vol d’un facteur.
  - Barrière essentielle contre le phishing, les attaques par force brute ou l’usurpation d’identité.
- **Avantages et limites**  
  - Grande efficacité en cybersécurité.
  - Peut être contournée si mal implémentée (ex : OTP intercepté par malware).
- **Typologies ou variantes**  
  - 2FA (deux facteurs), MFA (multi), authentification adaptative (basée sur le contexte).

---

## Cas d’usage & exemples concrets
- Connexion à un compte bancaire avec mot de passe + application mobile d’authentification.
- Accès au système d’information d’une entreprise avec carte d’accès + empreinte digitale.
- Utilisation d’un code reçu par SMS en complément d’un mot de passe.

---

## Vulnérabilités, risques et abus connus
- Interception de codes OTP par malware ou attaque SIM swap.
- MFA basé sur SMS considéré comme moins sécurisé.
- Fatigue MFA : les utilisateurs acceptent tout sans vigilance.

---

## Mesures de sécurité & recommandations
- Préférer des solutions MFA sans mot de passe (FIDO2, biométrie locale).
- Utiliser des applications d’authentification (TOTP) plutôt que les SMS.
- Surveiller les anomalies dans les tentatives d’authentification MFA.
- Sensibiliser les utilisateurs à la validation des demandes MFA.

---

## Standards, protocoles & normes associées
- RFC 6238 (TOTP), FIDO2, WebAuthn, OpenID Connect
- NIST 800-63B (Digital Identity Guidelines)
- eIDAS, DSP2

---

## Intégration dans un écosystème SSI
- S’inscrit dans les politiques de contrôle d’accès et IAM.
- Complète les mécanismes de Single Sign-On (SSO).
- Partie intégrante des architectures Zero Trust.

---

## Liens avec d’autres notions
- [[Authentification]]
- [[Authentification unique]]
- [[Gestion des identités]]

---

## Sources, outils & références
- [Documentation officielle](https://pages.nist.gov/800-63-3/sp800-63b.html)
- [Outils ou solutions associées](https://authy.com/)
- [Articles techniques, blogs spécialisés](https://www.csoonline.com/article/3251714/what-is-mfa-how-multi-factor-authentication-improves-security.html)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=2dA6KZJqI-Y)

---

## Mots-clés
`#authentification` `#lexique` `#concept` `#mfa` `#2fa` `#sécurité` `#identité`
