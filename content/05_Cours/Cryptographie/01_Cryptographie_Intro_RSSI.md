# Cryptographie - Introduction

---

## 1. Introduction

### 1.1 Pourquoi la cryptographie ?
- Les échanges de données sont omniprésents.
- La sécurité est critique dans les réseaux d'entreprise.
- Les menaces :
  - **Accidentelles** : bugs, pannes, erreurs.
  - **Intentionnelles** :
    - *Passives* (écoute, audit)
    - *Actives* (modification, suppression, injection)

### 1.2 Modèles de sécurité
- **Modèle CIA** : Confidentialité, Intégrité, Disponibilité.
- **Protocole AAA** : Identification, Authentification, Autorisation, Audit.
- **Pentagone de confiance** (Piscitello) : inclut l’"admissibilité" du système.
- **Hexagone de Parker** : ajoute l’**utilité** comme critère.
- **Cube de McCumber** : ajoute la **méthode** et **l’état des données**.

## 2. Introduction à la cryptographie

### 2.1 Définitions clés
- **Cryptologie** = cryptographie + cryptanalyse
- **Chiffrement** : rendre un message illisible sans clé.
- **Déchiffrement** : retrouver le message avec la clé.
- **Clé** : paramètre secret utilisé pour chiffrer/déchiffrer.
- **Cryptosystème** = algorithme + clés + textes clairs/chiffrés.

### 2.2 Notation standard
```
M = D(E(M)) ; où M = message, C = chiffré, E = chiffrement, D = déchiffrement
```

### 2.3 Principe de Kerckhoff
> La sécurité repose sur la **clé**, pas sur l'algorithme.

### 2.4 Algorithmes publiés vs secrets
- **Algorithmes publiés** sont préférés : plus robustes grâce à l’audit collectif.

### 2.5 Types de cryptosystèmes

#### 2.5.1 Clé symétrique
- Même clé pour chiffrer et déchiffrer.
- Rapide, mais problème de distribution des clés.
- Exemples : DES, AES.

#### 2.5.2 Clé asymétrique
- Clé publique (PK) / Clé privée (SK).
- Lent mais évite le problème de distribution.
- Exemples : RSA, ElGamal.

#### 2.5.3 Fonction de hachage
- Produit une **empreinte unique** (ex : SHA256).
- Doit être unidirectionnelle et résistante aux collisions.

#### 2.5.4 Protocoles cryptographiques
Objectifs : garantir
- **Confidentialité**
- **Intégrité**
- **Authentification**

Utilisation :
- Hachage
- MAC
- Signature numérique

---

> [!info]  
> Pour chaque notion : ce fichier sert d’intro synthétique, les détails sont vus dans les chapitres suivants.
