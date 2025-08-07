# BLAKE3

> **Type** : algorithme 
> **Niveau** : avancé 
> **Contexte** : défensif

---

## Définition
> BLAKE3 est un algorithme de hachage cryptographique moderne, conçu pour être extrêmement rapide, sécurisé, et hautement parallèle. Il succède à BLAKE2 et s’inspire de BLAKE2s, Merkle-Damgård et du design des arbres binaires.

---

## Explication détaillée
- **Origine ou historique**  
  - Lancé en 2020 par Jack O’Connor, Jean-Philippe Aumasson, Samuel Neves et Zooko Wilcox.
  - Conçu comme un remplacement universel des fonctions de hachage actuelles (SHA-2, SHA-3, BLAKE2).
- **Fonctionnement technique**  
  - Basé sur la permutation cryptographique de BLAKE2s.
  - Utilise une construction arborescente (Merkle tree) pour permettre un parallélisme massif.
  - Génère des hachages de longueur variable.
- **Rôles & fonctions**  
  - Fournir une fonction de hachage rapide et sécurisée adaptée aux environnements modernes (CPU, GPU, multicoeurs).
  - Vérification d’intégrité, dérivation de clés, usage dans les systèmes de fichiers, etc.
- **Avantages et limites**  
  - Jusqu’à 10x plus rapide que SHA-2 sur certains matériels.
  - Adapté au streaming et aux très gros fichiers.
  - Moins répandu que SHA-2/SHA-3 en 2025.
- **Typologies ou variantes**  
  - Unifiée : pas de version “b” ou “s” comme dans BLAKE2.

---

## Cas d’usage & exemples concrets
- Vérification d’intégrité dans des outils CLI (ex : `b3sum`).
- Hachage rapide dans des bases de données ou systèmes de fichiers.
- Calcul de hachages parallèles dans des clusters ou environnements multicœurs.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Pas de vulnérabilité connue à ce jour.
- Comme toute fonction de hachage : à ne pas utiliser directement pour stocker des mots de passe (préférer Argon2).

---

## Mesures de sécurité & recommandations
- Utiliser pour la vérification d’intégrité, dérivation de clés ou signatures.
- Ne pas utiliser sans précaution dans les contextes sensibles (ex : mot de passe).
- Toujours préférer une bibliothèque reconnue et à jour.

---

## Standards, protocoles & normes associées
- Spécification officielle : https://github.com/BLAKE3-team/BLAKE3
- Pas encore standardisé par le NIST ou l’ISO en 2025
- Alternatif à SHA-3, Argon2, BLAKE2

---

## Intégration dans un écosystème SSI
- Intégrable dans les logiciels de sécurité interne, les SIEM, les outils de calcul d’empreintes.
- Idéal pour les environnements contraints ou haute performance.

---

## Liens avec d’autres notions
- [[BLAKE2]]
- [[SHA-3]]
- [[Fonction de hachage]]

---

## Sources, outils & références
- [Documentation officielle](https://github.com/BLAKE3-team/BLAKE3)
- [🛠️ Outils ou solutions associées](https://github.com/BLAKE3-team/BLAKE3)
- [Articles techniques, blogs spécialisés](https://blog.cloudflare.com/blake3/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=NYnNtZ2cjUU)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#blake3` `#hash` `#hachage`
