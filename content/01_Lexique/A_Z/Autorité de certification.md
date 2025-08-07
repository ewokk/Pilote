# Autorité de certification

> **Type** : rôle  `#rôle`  
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : défensif

---

## Définition
> Une autorité de certification (CA – Certificate Authority) est une entité de confiance qui délivre des certificats numériques permettant de vérifier l’identité d’un site web, d’une organisation ou d’un individu, dans le cadre de la sécurité des échanges électroniques.

---

## Explication détaillée
- **Origine ou historique**  
  - Concept issu de la cryptographie à clé publique, formalisé dans les années 1990 avec le développement du protocole SSL/TLS.
- **Fonctionnement technique**  
  - Délivre des certificats X.509 signés numériquement, associés à une clé publique et une identité vérifiée.
  - Fonctionne dans une infrastructure à clé publique (PKI).
  - Peut gérer : émission, révocation, renouvellement, publication (CRL, OCSP).
- **Rôles & fonctions**  
  - Assure la confiance dans les communications chiffrées (ex : HTTPS).
  - Vérifie l’identité de l’entité demandeuse (validation de domaine, organisation, étendue).
- **Avantages et limites**  
  - Base de la sécurité Web (TLS/SSL).
  - Si une CA est compromise, la confiance dans de nombreux certificats est rompue.
- **Typologies ou variantes**  
  - CA publique (ex : Let's Encrypt, DigiCert) vs privée (interne entreprise).
  - CA racine vs CA intermédiaire.

---

## Cas d’usage & exemples concrets
- Délivrance d’un certificat TLS pour un site e-commerce.
- Infrastructure interne d’entreprise avec une CA privée pour VPN, mails, authentification.
- Signature d’un document PDF avec un certificat qualifié.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Compromission d’une autorité de certification (ex : DigiNotar, Comodo).
- Délivrance abusive ou erreur de validation.
- Usurpation d’identité si les contrôles sont faibles.

---

## Mesures de sécurité & recommandations
- Vérification régulière de la chaîne de certification.
- Utilisation de certificats à durée de vie courte.
- Surveillance des revocations et de la transparence (Certificate Transparency).
- Utilisation de HSTS, DANE, CAA pour renforcer la confiance.

---

## Standards, protocoles & normes associées
- X.509, RFC 5280
- OCSP, CRL, PKIX
- ISO/IEC 21188, eIDAS pour les certificats qualifiés

---

## Intégration dans un écosystème SSI
- Élément central de toute architecture PKI.
- Nécessaire pour les communications chiffrées, les signatures électroniques, l’authentification forte.
- Doit être protégée comme une brique critique.

---

## Liens avec d’autres notions
- [[PKI]]
- [[Certificat numérique]]
- [[HTTPS]]

---

## Sources, outils & références
- [Documentation officielle](https://letsencrypt.org/)
- [🛠️ Outils ou solutions associées](https://www.sslforfree.com/)
- [Articles techniques, blogs spécialisés](https://www.cloudflare.com/learning/ssl/what-is-an-ssl-certificate/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=mpQZVYPuDGU)

---

## Mots-clés
`#cybersécurité` `#lexique` `#rôle` `#certificat` `#PKI` `#https`
