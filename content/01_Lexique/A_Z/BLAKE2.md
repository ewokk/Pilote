# BLAKE2

> **Type** : algorithme 
> **Niveau** : avancé 
> **Contexte** : défensif

---

## Définition
> BLAKE2 est un algorithme de hachage cryptographique rapide, sécurisé et moderne, conçu comme une alternative plus performante que SHA-2 tout en offrant un niveau de sécurité équivalent.

---

## Explication détaillée
- **Origine ou historique**  
  - Développé en 2012 par Jean-Philippe Aumasson et d'autres chercheurs, issu de la famille BLAKE (finaliste du concours SHA-3).
- **Fonctionnement technique**  
  - BLAKE2 est basé sur le chiffre de stream ChaCha.
  - Deux versions principales :
    - BLAKE2b (optimisé pour les systèmes 64 bits)
    - BLAKE2s (optimisé pour les systèmes 8 à 32 bits)
  - Supporte le salage, la clé secrète (MAC), les contextes personnalisés.
- **Rôles & fonctions**  
  - Fournit un condensat unique pour l’intégrité des données.
  - Utilisé pour la signature, le stockage sécurisé de mots de passe, les systèmes de fichiers, etc.
- **Avantages et limites**  
  - Plus rapide que SHA-2, sécurisé, simple à implémenter.
  - Moins répandu que SHA-2 ou SHA-3, donc support encore partiel dans certains systèmes.
- **Typologies ou variantes**  
  - BLAKE2b, BLAKE2s, BLAKE2bp, BLAKE2sp (parallélisés).

---

## Cas d’usage & exemples concrets
- Hachage de fichiers dans des systèmes de fichiers modernes (ZFS, IPFS).
- Validation de l’intégrité dans des dépôts de paquets.
- Fonction de hachage dans des systèmes embarqués (via BLAKE2s).

---

## ⚠️ Vulnérabilités, risques et abus connus
- Pas de vulnérabilité connue à ce jour (à condition d'une bonne implémentation).
- Risques en cas d'usage inadapté (ex : hachage simple de mot de passe sans sel).

---

## Mesures de sécurité & recommandations
- Privilégier BLAKE2 avec salage et clé si disponible.
- Pour le stockage de mots de passe, préférer Argon2 (du même auteur).
- S’assurer d’utiliser une bibliothèque cryptographique fiable.

---

## Standards, protocoles & normes associées
- RFC 7693 – BLAKE2 Cryptographic Hash and MAC
- Utilisé dans les bibliothèques libsodium, OpenSSL (partiellement)
- Succédé par BLAKE3 (version plus rapide et parallèle)

---

## Intégration dans un écosystème SSI
- Alternative moderne aux fonctions SHA dans les produits développés en interne.
- Intégrable dans des processus de vérification d’intégrité, signature, ou dérivation de clés.

---

## Liens avec d’autres notions
- [[BLAKE3]]
- [[SHA-2]]
- [[Fonction de hachage]]

---

## Sources, outils & références
- [Documentation officielle](https://blake2.net/)
- [🛠️ Outils ou solutions associées](https://github.com/BLAKE2/BLAKE2)
- [Articles techniques, blogs spécialisés](https://eprint.iacr.org/2013/322.pdf)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=9HYOJkJ0EvM)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#blake2` `#hash` `#cryptographie`
