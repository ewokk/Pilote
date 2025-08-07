# Introduction à la PKI

## Qu’est-ce qu’une PKI ?

Une **Infrastructure à Clé Publique (PKI)** est un ensemble de technologies, de politiques et de procédures permettant :
- la **gestion des identités numériques**,
- la **distribution de clés publiques**,
- la **signature électronique** et
- le **chiffrement des échanges**.

Elle repose sur la **cryptographie asymétrique** (paire de clés publique / privée) et des tiers de confiance appelés **autorités de certification (CA)**.

> [!info]  
> La PKI est à la base de la **confiance numérique** : HTTPS, messagerie sécurisée, authentification forte, etc.

## Pourquoi une PKI est-elle indispensable aujourd’hui ?

- Gestion d’identité forte
- Signature légale de documents
- Authentification machine-à-machine (IoT, API)
- Conformité réglementaire (RGPD, eIDAS, NIS2, RGS, ANSSI…)

## Contexte historique

| Période | Événement clé |
|--------|----------------|
| 1976 | Invention de la cryptographie asymétrique (Diffie-Hellman) |
| 1978 | RSA : premier algorithme à usage pratique |
| 1990s | Déploiement massif du protocole HTTPS |
| 2000s | PKI d’État, certificats qualifiés (France : RGS, IGCE) |
| 2020+ | ACME, automation, souveraineté, post-quantique |

## Cas d’usage typiques

- Signature de code et d’e-mails (S/MIME, DKIM)
- Authentification forte (cartes à puce, tokens)
- VPN/IPSec, TLS/SSL
- PKI interne pour machines/serveurs
