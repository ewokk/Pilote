# Acteurs d’une PKI

## Vue d’ensemble

Une PKI repose sur plusieurs acteurs aux rôles bien définis :

```
     [ Root CA ]
         ↓
  [ Intermediate CA ]
         ↓
[ Utilisateur / Serveur ]
```

## Autorité de Certification (AC / CA)

- Entité qui **signe les certificats**
- Peut être publique (ex: Let's Encrypt, Certigna) ou privée (interne)
- Détient une **clé privée sensible** protégée (HSM recommandé)
- Peut être **racine** (auto-signée) ou **intermédiaire**

> [!warning]
> L’AC doit être sécurisée physiquement, auditée, et surveillée 24/7.

## Autorité d’Enregistrement (RA)

- Entité qui **valide l’identité** des demandeurs de certificats
- Peut être séparée de l’AC
- Vérifie :
  - Identité légale (KYC)
  - Contrôle d’un nom de domaine (DNS, HTTP, mail)
- Génère ou reçoit les CSR

## Utilisateur / Titulaire de certificat

- Serveur, personne, machine ou application
- Génère une paire de clés
- Soumet un CSR (via RA)
- Utilise le certificat pour signer / s’authentifier / chiffrer

## Répertoires et publication

| Élément | Description |
|---------|-------------|
| **CRL** (Certificate Revocation List) | Liste des certificats révoqués, signée par l’AC |
| **OCSP** (Online Certificate Status Protocol) | Vérification en ligne de validité (plus rapide que CRL) |
| **LDAP** / **HTTP** | Dépôt des certificats, CRL, chaînes, politiques CPS |

## Chaîne de certification

Un certificat utilisateur s’appuie sur :
- Une chaîne de certificats intermédiaires
- Une racine de confiance
- Un mécanisme de validation (trust store ou pinning)

## Rôles internes

| Rôle | Responsabilités |
|------|------------------|
| Responsable PKI | Déploiement, gouvernance, politique de certification |
| Administrateur CA | Opérations, sauvegarde, mise à jour |
| Auditeur SSI | Revue régulière des journaux et procédures |
| RSSI | Supervision de la sécurité globale de la PKI |

## Tiers de confiance

- Fournisseurs de certificats qualifiés (ex : Certinomis, Chambersign)
- Autorités accréditées (eIDAS, RGS, ETSI)
- Points d’enregistrement délégués (Guichet, prestataire)

---

> [!quote]
> Une PKI n’est pas qu’un outil technique : c’est un **écosystème de confiance** où chaque acteur a une responsabilité critique.
