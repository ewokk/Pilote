# Cryptographie - Attaques sur la cryptographie
---

## 6. Attaques sur la cryptographie

### 6.1 Types d'attaques

#### 6.1.1 Attaque par force brute
- Tester toutes les clés possibles.
- Défense : augmenter la taille des clés (ex : AES-256).

#### 6.1.2 Attaque par dictionnaire
- Utilise une liste de mots courants ou probables.
- Variante : rainbow tables (pré-calcul de hachages).
- Contre-mesure : salage (ajout d’un sel unique avant hachage).

---

### 6.2 Attaques sur les algorithmes

#### 6.2.1 Attaque sur les fonctions de hachage
- Collisions (même empreinte pour deux messages différents).
- Ex : MD5, SHA-1 → vulnérables

#### 6.2.2 Attaque de type birthday
- Trouver deux messages avec le même hash (collision).
- Probabilité plus élevée que prévu (~√n pour n possibilités).

---

### 6.3 Attaques sur les protocoles

#### 6.3.1 Rejeu
- Réutilisation d’un message capturé (ex : authentification).
- Contre-mesure : nonce, timestamp.

#### 6.3.2 Downgrade
- Forcer l’usage d’un algorithme faible (ex : SSL v2).
- Contre-mesure : désactiver les versions obsolètes.

#### 6.3.3 Man-in-the-Middle (MITM)
- Interception/modification de la communication.
- Contre-mesures : certificat, signature, chiffrement de bout en bout.

---

### 6.4 Attaques par canal auxiliaire

#### 6.4.1 Définition
- Exploite des fuites physiques : temps de calcul, consommation, rayonnement électromagnétique.

#### 6.4.2 Exemples
- **Timing attacks** : mesurer le temps d’exécution.
- **Power analysis** : analyse de la consommation électrique.
- **EM analysis** : champ électromagnétique émis.

#### 6.4.3 Défenses
- Masquage, équilibrage de consommation, introduire du bruit.

---

> [!info] 
> Comprendre ces attaques permet de renforcer les implémentations, pas seulement les algorithmes.
