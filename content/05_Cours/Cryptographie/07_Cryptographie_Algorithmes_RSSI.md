# Cryptographie - Référentiel exhaustif des algorithmes

---

## Algorithmes de chiffrement symétrique

### AES
- **Origine** : Standard NIST (2001), conçu pour remplacer DES.
- **Taille de clé** : 128, 192 ou 256 bits.
- **Type** : Bloc (128 bits), réseau SPN (Substitution-Permutation Network).
- **Usage** : HTTPS, VPN, disques, messagerie.

### DES
- **Origine** : IBM, standardisé en 1977.
- **Clé** : 56 bits → obsolète.
- **Attaques connues** : brute force trivial.

### Triple DES (3DES)
- **Extension de DES** : applique DES trois fois.
- **Statut** : déprécié, encore en usage dans certaines banques.

### RC4
- **Chiffrement par flot** → rapide mais aujourd’hui interdit.
- **Vulnérable** : biais statistiques, fuite de clé.

### Blowfish / Twofish
- **Blowfish** : rapide, clé jusqu’à 448 bits.
- **Twofish** : finaliste AES, robuste, bloc 128 bits.

### IDEA
- **Conçu en Suisse** : utilisé dans PGP.
- **Clé** : 128 bits.
- **Structure** : opérations sur 16 bits.

### Camellia
- **Conçu par Mitsubishi/Nippon**, recommandé par ISO.
- **Comparable à AES**, performant sur matériel contraint.

### Serpent
- **Finaliste AES** : très sécurisé mais lent.
- **Structure** : 32 tours.

### RC2 / RC5 / RC6
- **Famille RSA Labs**.
- **RC5** : structure à mots paramétrables.
- **RC6** : finaliste AES.

### CAST-128 / CAST-256
- **Utilisé par PGP**.
- **Structure** : Feistel, sécurité variable.

### ChaCha20
- **Google**, rapide, sécurisé, sans vulnérabilités connues.
- **Utilisé par** : WireGuard, TLS moderne.

### Autres stream ciphers :
- **Grain, HC-128, Rabbit** : conçus pour les environnements à faibles ressources.

---

## Algorithmes de chiffrement asymétrique

### RSA
- **Clé publique / privée**, basé sur la factorisation.
- **Taille recommandée** : ≥2048 bits.
- **Usage** : chiffrement, signature, échange de clé.

### Diffie-Hellman
- **Échange de clé** sécurisé sur canal non chiffré.
- **Base mathématique** : logarithme discret.

### ElGamal
- **Basé sur** Diffie-Hellman, version probabiliste.
- **Utilisé dans** GPG, OpenPGP.

### ECC (Elliptic Curve Cryptography)
- **Principe** : logarithme discret sur courbes elliptiques.
- **Avantage** : sécurité équivalente avec des clés bien plus courtes.
- **Exemples** : secp256r1, Ed25519, Curve25519.

### EdDSA / Ed25519
- **Très rapide**, résistant aux fautes.
- **Utilisé dans** SSH, Signal, libsodium.

### DSA
- **Signature uniquement**, basé sur le logarithme discret.
- **Remplacé par** EdDSA dans la plupart des systèmes.

### LUC, NTRUEncrypt, McEliece (post-quantiques)
- **Conçus pour résister aux attaques quantiques**.
- Moins utilisés en production aujourd’hui.

---

## Fonctions de hachage

### MD5
- **Obsolète**, collisions triviales.
- **Ne jamais utiliser**.

### SHA-1
- **Cassé** depuis 2017 (Google & CWI).
- **Utilisé historiquement** dans Git, certificats.

### SHA-2
- **SHA-224, SHA-256, SHA-384, SHA-512**
- **Standard actuel**, très solide.

### SHA-3 (Keccak)
- **Structure** : éponge.
- **Adopté** comme alternative robuste à SHA-2.

### RIPEMD-160
- **Hash européen**, moins répandu.
- **Compatibilité PGP/GPG**.

### Whirlpool / Tiger
- **Spécifiques à l’intégrité de fichiers**.

---

## Fonctions de dérivation de clé (KDF)

### PBKDF2
- **Basé sur HMAC**, norme RFC 2898.
- **Utilisé pour stocker des mots de passe**.

### Bcrypt
- **Ajoute du sel + facteur de coût**.
- **Résistant au brute force**.

### Scrypt
- **Consomme mémoire et CPU**, protection contre FPGA/ASIC.

### Argon2
- **Gagnant du Password Hashing Competition**.
- **Recommandé** pour les mots de passe modernes.

---

## Algorithmes post-quantiques (en cours de standardisation NIST)

### Kyber
- **Échange de clé**, remplace RSA/DH.
- **Basé sur** Lattices (LWE).

### Dilithium
- **Signature numérique**, très rapide.

### FALCON / SPHINCS+
- **Signatures sécurisées quantiquement**, tailles variables.

### Classic McEliece
- **Chiffrement**, très grande clé mais rapide à déchiffrer.

---

> [!success] 
> Cette liste couvre les **principaux algorithmes classiques, modernes et post-quantiques**, ainsi que les fonctions de hachage et dérivation. Elle est conçue comme une **référence longue durée pour RSSI et analystes sécurité**.
