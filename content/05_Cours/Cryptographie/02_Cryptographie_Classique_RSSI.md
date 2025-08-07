# Cryptographie - Cryptographie Classique

---

## 3. Cryptographie classique

### 3.1 Substitution monoalphabétique

#### Chiffre de César
- Décalage des lettres dans l’alphabet.
- Facile à casser (25 clés possibles).
- Exemple : `C = (p + k) mod 26`.

#### Analyse de fréquence
- Les lettres les plus fréquentes (ex : E, A, S) aident à casser ces chiffrements.
- Contournement :
  - Homophones : plusieurs symboles pour une même lettre.
  - Bigrammes/trigrammes : substitution par paires ou triplets.

#### Chiffre affine
- Fonction affine : `y = (a*x + b) mod 26`.
- Exemple de clé : (a=3, b=11).
- 312 clés possibles.

---

### 3.2 Chiffrement polygraphique

#### Chiffre de Playfair
- Chiffre digrammique (paires de lettres).
- Grille 5x5 remplie à partir d’un mot-clé.
- Plusieurs règles selon la position des lettres.

#### Chiffre de Hill
- Utilise une matrice pour coder plusieurs lettres en même temps.
- Exemple : `(C1, C2) = matrice * (P1, P2) mod 26`.
- Nécessite une matrice inversible.

---

### 3.3 Substitution polyalphabétique

#### Chiffre de Vigenère
- Amélioration du César avec une clé répétée.
- Carré de Vigenère.
- Analyse de fréquence beaucoup moins efficace.

#### Cryptanalyse de Kasiski
- Analyse des séquences répétées pour estimer la longueur de la clé.

#### Test de Friedman
- Utilise l’indice de coïncidence (IC) pour distinguer mono/polyalphabétique.
- Estimation de la longueur de la clé avec la formule de Friedman.

---

### 3.4 Chiffre de Vernam (One-Time Pad)
- Clé aussi longue que le message, utilisée une seule fois.
- Théoriquement inviolable.
- Clé parfaitement aléatoire et jamais réutilisée.

---

### 3.5 Transpositions
- On change l’ordre des lettres, sans les modifier.
- Exemple : transposition rectangulaire avec mot-clé.

---

### 3.6 Machines à rotor

#### Enigma
- Substitution polyalphabétique mécanisée.
- Utilisée par l’Allemagne pendant la Seconde Guerre mondiale.
- Très grand nombre de configurations possibles.
- Cassée par Turing (Bombe de Turing) avec analyse statistique et erreurs humaines (mots communs).

---

> [!info] 
> Ces méthodes historiques posent les bases des concepts cryptographiques modernes (substitution, permutation, complexité, clefs).
