# Authentification forte (MFA)

## Définition

La MFA (Multi-Factor Authentication) est une méthode d’authentification qui nécessite **au moins deux facteurs** distincts :

| Type        | Exemple                             |
|-------------|-------------------------------------|
| Connaissance| Mot de passe, code PIN              |
| Possession  | Smartphone, token OTP, carte à puce |
| Inhérence   | Empreinte, visage, iris             |

> [!info]
> On parle parfois aussi de 2FA (Two-Factor Authentication).

---

## Types de MFA

### OTP (One-Time Password)
- Code à usage unique généré toutes les X secondes
- TOTP (Time-Based), HOTP (counter-based)

### Token matériel
- Clés physiques USB (ex : YubiKey, RSA SecureID)

### MFA logiciel
- Applications comme Google Authenticator, Microsoft Authenticator, FreeOTP

### Biométrie
- Reconnaissance faciale, empreinte
- ⚠️ RGPD : données sensibles

### MFA adaptatif
- MFA déclenché selon le risque :
  - Adresse IP inconnue
  - Appareil inconnu
  - Heure inhabituelle

---

## Norme FIDO2/WebAuthn

- Authentification sans mot de passe
- Clé privée sur l’appareil, clé publique stockée côté serveur
- Compatible Windows Hello, YubiKey, biométrie

> [!success]
> FIDO2 + WebAuthn = futur de l’authentification forte

---

## Bonnes pratiques MFA

- MFA obligatoire pour :
  - Accès à distance
  - Comptes à privilèges
  - Données sensibles
- Stocker les secrets OTP de manière chiffrée
- Bloquer les MFA fatiguing (spamming push)

