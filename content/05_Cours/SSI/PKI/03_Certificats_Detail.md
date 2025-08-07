# Certificats numériques (X.509)

## Définition

Un **certificat numérique** est un fichier attestant qu’une **clé publique** appartient bien à une entité (personne, serveur, organisation). Il est délivré et signé par une autorité de certification.

## Structure d’un certificat X.509

| Champ | Description |
|-------|-------------|
| Version | Souvent v3 (X.509v3) |
| Numéro de série | Identifiant unique du certificat |
| Algorithme de signature | Algo utilisé pour signer (ex : SHA256withRSA) |
| Émetteur (Issuer) | CA ayant délivré le certificat |
| Validité | Dates de début et d’expiration |
| Sujet (Subject) | Entité détentrice du certificat |
| Clé publique | Clé publique liée au sujet |
| Extensions | Informations supplémentaires (voir ci-dessous) |
| Signature | Signature numérique de l’AC sur le certificat |

## Exemple (extrait OpenSSL)
```bash
Subject: CN=serveur.exemple.com
Issuer: CN=Root CA Pilote
Validity: Not Before: Jan 1 2024 / Not After: Jan 1 2026
Public-Key: (2048 bit)
Signature Algorithm: sha256WithRSAEncryption
```

## CSR — Certificate Signing Request

Avant d’obtenir un certificat, l’entité génère :
- une **paire de clés**
- un **CSR** contenant :
  - sa clé publique
  - des informations sur elle-même (CN, OU, email…)
  - une signature faite avec sa **clé privée**

Ce CSR est ensuite soumis à l’AC pour vérification.

## Usages de clés

| Usage | Description |
|-------|-------------|
| digitalSignature | Signature électronique |
| keyEncipherment | Chiffrement d’une clé (ex: TLS) |
| dataEncipherment | Chiffrement de données |
| keyAgreement | Diffie-Hellman (ex: VPN IPSec) |
| keyCertSign | Autorise la signature d'autres certificats |
| cRLSign | Autorise la signature de listes de révocation (CRL) |

## Extensions

Les extensions enrichissent un certificat :
- **KeyUsage** / **ExtendedKeyUsage**
- **SubjectAltName** : IP, DNS, URI, email…
- **BasicConstraints** : CA:true (autorité) ou CA:false
- **AuthorityKeyIdentifier** / **SubjectKeyIdentifier**

> [!example]
> SubjectAltName = DNS:example.com, DNS:www.example.com

## Formats de certificats

| Format | Extension | Description |
|--------|-----------|-------------|
| PEM | .pem / .crt | Encodé en Base64, lisible en texte |
| DER | .der | Encodé en binaire |
| PFX / PKCS#12 | .pfx / .p12 | Contient clé privée + certificat (protégé par mot de passe) |

## Période de validité

- Durée typique :
  - 1 an pour les certificats SSL/TLS publics
  - 2 à 3 ans pour les certificats internes
- Déterminée à l’émission
- Peut être **révoquée** avant échéance (CRL / OCSP)

## Empreintes

Chaque certificat a une **empreinte unique (fingerprint)** :
```bash
openssl x509 -in cert.pem -noout -fingerprint -sha256
```

---

> [!success]
> Un certificat est un **identifiant numérique sécurisé**, indispensable à la confiance dans un environnement distribué.
