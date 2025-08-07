# Cycle de vie des certificats et processus PKI

## Vue d’ensemble

Un certificat suit un cycle de vie strict :

```
[ Génération ] → [ Validation ] → [ Publication ]
         ↓              ↓               ↓
[ Révocation ] ← [ Surveillance ] ← [ Renouvellement ]
```

## Étapes du cycle

### 1. Génération

- Création d’une **paire de clés** (RSA ou ECC)
- Génération d’un **CSR**
- Transfert sécurisé du CSR à l’AC (via RA)

### 2. Validation

- Vérification de l’identité du demandeur (RA)
- Contrôle du domaine (ex : DNS-01, HTTP-01)
- Vérification d’autorité interne (pour PKI d’entreprise)

### 3. Signature et publication

- Signature du certificat par l’AC (avec sa clé privée)
- Publication dans un répertoire :
  - HTTP / LDAP
  - Fichiers CRL
  - OCSP responders

### 4. Révocation

> [!warning]
> Un certificat **révoqué** n’est plus valide même s’il n’est pas expiré.

Causes :
- Compromission de la clé privée
- Changement d’attributs (nom, domaine)
- Fin d’activité

Mécanismes :
- **CRL** : Liste signée des certificats révoqués (diffusée périodiquement)
- **OCSP** : Interrogation en temps réel de l’état d’un certificat

### 5. Renouvellement

- Géré manuellement ou automatiquement (ex : ACME)
- Génère généralement une **nouvelle paire de clés**
- Peut être soumis à revalidation

## Fréquence typique

| Type de certificat | Durée | Renouvellement conseillé |
|--------------------|--------|--------------------------|
| SSL public | 1 an max | 2 semaines avant l’expiration |
| Certificat interne | 2–3 ans | 1 mois avant l’expiration |
| Certificat CA | 5 à 10 ans | Audit annuel obligatoire |

## Automatisation (ACME)

- Protocole standard pour renouvellement automatique
- Utilisé par Let’s Encrypt, ZeroSSL, etc.
- Sécurise et simplifie le cycle de vie

---

> [!tip]
> Une PKI bien gouvernée implique une **traçabilité complète** de toutes les actions liées au cycle de vie.
