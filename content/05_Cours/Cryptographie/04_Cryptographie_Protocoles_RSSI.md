# Cryptographie - Protocoles Cryptographiques

---

## 5. Protocoles cryptographiques

### 5.1 Objectifs des protocoles
- Fournir des garanties : **confidentialité**, **intégrité**, **authenticité**, **non-répudiation**.
- Utilisation de briques cryptographiques : chiffrement, hachage, signature.

---

### 5.2 Authentification

#### 5.2.1 Protocoles simples
- **Mot de passe + hachage**
- **Challenge-réponse**
  - Le serveur envoie un défi (challenge).
  - Le client répond avec une fonction cryptée de ce défi.

#### 5.2.2 Problèmes
- Rejeu possible
- Vol de mot de passe (phishing, keylogger)

---

### 5.3 Signature numérique

#### 5.3.1 Principe
- Similaire à la signature manuscrite : garantir que le message vient bien du signataire.
- Processus :
  1. Hachage du message
  2. Chiffrement du hash avec la clé privée
  3. Vérification avec la clé publique

#### 5.3.2 Propriétés
- Authentification
- Intégrité
- Non-répudiation

---

### 5.4 Certificats numériques (PKI)

#### 5.4.1 Rôle
- Associer une **clé publique** à une identité.
- Signé par une **autorité de certification (CA)**.

#### 5.4.2 Contenu d’un certificat
- Identité, clé publique, période de validité, signature du CA

#### 5.4.3 Chaîne de confiance
- Basée sur une racine de confiance : certificat racine → intermédiaire(s) → certificat utilisateur.

---

### 5.5 Protocoles de communication sécurisée

#### 5.5.1 SSL/TLS
- **SSL** (ancien) remplacé par **TLS**.
- Garantit la sécurité des communications web.
- Utilise une négociation (handshake) avec chiffrement asymétrique, puis session symétrique.

#### 5.5.2 IPsec
- Sécurise les communications au niveau **IP** (réseau).
- Modes :
  - **Transport** : payload uniquement
  - **Tunnel** : tout le paquet IP

#### 5.5.3 PGP/GPG
- Utilisé pour sécuriser les **emails**.
- Fonctionne sans infrastructure centralisée.

---

### 5.6 Protocole Zero-Knowledge (ZKP)
- Prouver qu’on connaît un secret sans le révéler.
- De plus en plus utilisé dans la blockchain (ZK-SNARK, ZK-STARK).

---

> [!info] 
> Ces protocoles cryptographiques sont au cœur de la cybersécurité opérationnelle (VPN, HTTPS, S/MIME, etc.)
