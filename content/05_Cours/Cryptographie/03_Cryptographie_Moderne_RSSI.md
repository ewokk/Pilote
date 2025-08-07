# Cryptographie - Cryptographie Moderne

---

## 4. Cryptographie Moderne

### 4.1 Chiffrement symétrique

#### 4.1.1 Définitions
- Même clé pour chiffrement et déchiffrement.
- Rapide et adapté aux grands volumes de données.

#### 4.1.2 Modes d’opération
> Les blocs doivent être traités de manière sécurisée avec des modes adaptés :

- **ECB (Electronic Code Book)** : chaque bloc est chiffré indépendamment → vulnérable.
- **CBC (Cipher Block Chaining)** : chaque bloc dépend du précédent via un IV (vecteur d'initialisation).
- **CFB, OFB** : rétroactions pour transformer le bloc en flux.
- **CTR (Counter)** : compteur pour paralléliser les blocs.

#### 4.1.3 Exemples d’algorithmes
- **DES** : obsolète (56 bits).
- **3DES** : plus sécurisé mais lent.
- **AES** : standard actuel (128/192/256 bits), très sécurisé.

---

### 4.2 Chiffrement asymétrique

#### 4.2.1 Définitions
- Utilise une paire de clés : **publique (PK)** et **privée (SK)**.
- Chiffrement : PK ; Déchiffrement : SK.
- Authentification : signature avec SK, vérification avec PK.

#### 4.2.2 Algorithmes
- **RSA** : basé sur la factorisation d'entiers.
- **Diffie-Hellman** : échange de clés.
- **ElGamal** : dérivé de Diffie-Hellman.
- **ECC (Elliptic Curve Cryptography)** : sécurité équivalente avec des clés plus courtes.

#### 4.2.3 Comparaison symétrique / asymétrique
| Critère         | Symétrique         | Asymétrique        |
|-----------------|--------------------|--------------------|
| Vitesse         | Rapide             | Lent               |
| Clé             | Unique partagée    | PK/SK              |
| Distribution    | Difficile          | Facile             |
| Usage courant   | Données volumineuses | Échange de clés / signatures |

---

### 4.3 Fonctions de hachage

#### 4.3.1 Définition
- Fonction à sens unique produisant une **empreinte**.
- Résistance aux collisions et à la préimage obligatoire.

#### 4.3.2 Algorithmes
- **MD5** : obsolète.
- **SHA-1** : vulnérable.
- **SHA-2 (SHA-256, etc.)** : recommandé.
- **SHA-3** : alternative récente (Keccak).

---

> [!info] 
> Ces briques fondamentales permettent de construire des systèmes sécurisés : protocoles, authentification, certificats, signatures, etc.
