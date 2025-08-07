# Cas d’usage de la PKI

## Vue d’ensemble

Une PKI permet de sécuriser un large éventail d’usages dans une organisation :

| Usage | Description |
|-------|-------------|
| TLS/SSL | Sécurisation des sites web, API, interconnexions |
| S/MIME | Chiffrement et signature d’e-mails |
| VPN/IPSec | Authentification machine et tunnel sécurisé |
| Wi-Fi entreprise | Authentification EAP-TLS via certificats |
| Signature de code | Vérification de l’éditeur de logiciels |
| Cartes à puce / badges | Authentification physique/logique |
| Certificats machine | Authentification automatique dans un domaine |
| IoT / M2M | Confiance entre appareils (ex : objets industriels) |
| Accès à distance | Identification forte sans mot de passe |
| Zero Trust | Base cryptographique d’une architecture Zero Trust |

## Exemple 1 — TLS (HTTPS)

- Un certificat est délivré pour `www.entreprise.com`
- Le navigateur vérifie :
  - La validité du certificat
  - La signature de l’AC
  - L’appartenance du domaine
- Une clé de session est ensuite échangée via TLS (ECDHE)

## Exemple 2 — Signature de code

- Un éditeur signe une application avec sa **clé privée**
- L’utilisateur vérifie l’intégrité avec la **clé publique** (ex : Microsoft Authenticode, Android, Java)
- Protège contre :
  - Malware injecté
  - Altération du binaire

## Exemple 3 — Wi-Fi entreprise (EAP-TLS)

- Chaque poste dispose d’un certificat machine
- Le contrôleur Wi-Fi demande une authentification TLS
- Avantage :
  - Pas de mot de passe à gérer
  - Révocation possible via CRL ou MDM

## Certificats courts vs longs

| Durée | Avantage | Risque |
|-------|----------|--------|
| 1–3 jours (ACME) | Moins de gestion manuelle | Rotation fréquente |
| 1–2 ans (interne) | Contrôle maîtrisé | Moins agile |

---

> [!success]
> Chaque usage de la PKI répond à un besoin métier **concret**, mais doit être correctement gouverné.
