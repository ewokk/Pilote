# Blowfish

> **Type** : algorithme 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : défensif

---

## Définition
> Blowfish est un algorithme de chiffrement symétrique par bloc conçu pour être rapide, sécurisé et libre d’utilisation. Il chiffre des blocs de 64 bits avec des clés allant jusqu’à 448 bits.

---

## Explication détaillée
- **Origine ou historique**  
  - Créé en 1993 par Bruce Schneier comme alternative libre aux algorithmes brevetés comme DES ou IDEA.
  - A ouvert la voie à son successeur : Twofish.
- **Fonctionnement technique**  
  - Algorithme Feistel à 16 tours.
  - Utilise une clé variable (jusqu’à 448 bits).
  - Fonctionne sur des blocs de 64 bits.
- **Rôles & fonctions**  
  - Chiffrement rapide des données sur des systèmes à ressources limitées.
  - Stockage sécurisé de données ou de mots de passe (ex : dans certains CMS).
- **Avantages et limites**  
  - Très rapide et flexible.
  - Bloc de 64 bits considéré comme trop petit pour les systèmes modernes (vulnérabilité au birthday attack).
- **Typologies ou variantes**  
  - Implémentations dans de nombreuses bibliothèques (OpenSSL, GnuPG...).

---

## Cas d’usage & exemples concrets
- Utilisé dans des produits de sécurité comme GnuPG.
- Anciennement intégré à certaines bases de données ou CMS pour chiffrer les mots de passe.
- Alternative à DES dans des systèmes embarqués.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Bloc de 64 bits vulnérable aux collisions dans les grands volumes de données.
- Substitué par AES ou Twofish dans les nouveaux projets.
- Possible faiblesse en cas de mauvaise implémentation ou gestion des clés.

---

## Mesures de sécurité & recommandations
- Ne pas utiliser Blowfish pour de nouveaux développements.
- Préférer AES (128 ou 256 bits) ou ChaCha20 pour une meilleure robustesse.
- Vérifier la gestion des vecteurs d’initialisation et des modes de chiffrement.

---

## Standards, protocoles & normes associées
- Pas un standard officiel (non sélectionné dans le concours AES).
- Documenté dans Schneier's Applied Cryptography.
- Supporté par de nombreux protocoles anciens.

---

## Intégration dans un écosystème SSI
- Historiquement utilisé dans des outils open source.
- Peu adapté aux exigences modernes (RGPD, NIST).
- À maintenir uniquement pour rétrocompatibilité contrôlée.

---

## Liens avec d’autres notions
- [[AES]]
- [[Twofish]]
- [[Chiffrement symétrique]]

---

## Sources, outils & références
- [Documentation officielle](https://www.schneier.com/academic/blowfish/)
- [🛠️ Outils ou solutions associées](https://www.openssl.org/)
- [Articles techniques, blogs spécialisés](https://www.khanacademy.org/computing/computer-science/cryptography)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=2z0dG7k3ZwA)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#blowfish` `#chiffrement` `#algorithme`
