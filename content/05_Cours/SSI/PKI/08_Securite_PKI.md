# Sécurité d’une PKI

## Risques et menaces

| Menace | Impact |
|--------|--------|
| Compromission de la clé privée Root | Effondrement de la chaîne de confiance |
| Emission frauduleuse de certificats | Usurpation, phishing, MITM |
| Revocation non fonctionnelle | Périmètre d’usage dangereux (ex : ex-collaborateur) |
| Mauvaise gestion des clés | Stockage non sécurisé, accès non tracé |
| Automatisation mal configurée | ACME mal protégé = certs gratuits à un attaquant |

## Cas réels

- **Diginotar (2011)** : AC compromise, certificats frauduleux pour Google émis → tous les navigateurs ont blacklisté Diginotar
- **Comodo (2011)** : Émission frauduleuse pour des domaines Gmail, Skype, Yahoo
- **Symantec (2017)** : Perte de confiance globale → transition vers Digicert

## Bonnes pratiques essentielles

- Clés privées :
  - Stockées dans un **HSM** (Hardware Security Module)
  - JAMAIS accessibles via le système de fichiers
- Root CA **hors ligne** (air-gapped), utilisée uniquement pour signer les Intermediates
- Répartition des rôles : RA ≠ AC ≠ gestion utilisateur
- Accès journalisés, limités, avec MFA + PAM
- Audit SSI annuel de la PKI

## Journalisation et audit

- Journal d’émission (certs, clés, séries)
- Journal de révocation
- Journaux de CRL/OCSP
- Journal d’accès aux secrets
- Centralisation dans un SIEM

## PRA d’une PKI

| Élément | Mesure |
|---------|--------|
| Compromission Intermediate CA | Révocation immédiate, rotation complète |
| Perte accès HSM | Sauvegarde offline, rotation par le root |
| Expiration root | Préparation d’un pré-root, notification 6 mois à l’avance |

> [!tip]
> Une PKI sans PRA, c’est comme un coffre-fort sans double des clés.

## Vérifications automatiques

- OCSP stapling
- Expiration monitoring (ex : via Prometheus, Zabbix)
- Surveillance des logs d’erreur / certificat refusé

---

> [!quote]
> La sécurité d’une PKI repose moins sur la technologie… que sur sa **discipline d’exploitation**.
