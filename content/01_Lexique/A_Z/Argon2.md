# Argon2

> **Type** : standard  `#standard`  
> **Niveau** : avancé 
> **Contexte** : chiffrement `#chiffrement`, mots de passe `#mots_de_passe`, sécurité applicative

---

## Définition
> **Argon2** est un **algorithme de dérivation de clé sécurisé** (KDF – Key Derivation Function) conçu pour le **hachage de mots de passe**. Il est le vainqueur du **Password Hashing Competition (PHC)** et est considéré comme l’un des algorithmes les plus robustes face aux attaques par force brute.

---

## Explication détaillée
- **Origine ou historique**  
  Argon2 a été développé par Alex Biryukov et Daniel Dinu en 2015. Il succède aux KDF plus anciens comme PBKDF2, bcrypt ou scrypt. Il est le **standard recommandé par l'IETF (RFC 9106)**.

- **Fonctionnement technique**  
  - Argon2 utilise des **ressources mémoire et CPU** pour ralentir les attaques
  - Trois variantes :
    - **Argon2d** : résistant aux attaques par canaux auxiliaires (side-channel)
    - **Argon2i** : résistant aux attaques par accès mémoire temporisé
    - **Argon2id** : hybride recommandé par défaut
  - Paramètres configurables : **temps, mémoire, parallélisme**

- **Rôles & fonctions**  
  - Protéger les mots de passe stockés
  - Rendre les attaques par brute force coûteuses
  - Dériver des clés à partir de secrets utilisateurs

- **Avantages et limites**  
  + Haute résistance aux attaques GPU/ASIC  
  + Paramétrable selon les ressources disponibles  
  – Plus complexe à implémenter que bcrypt  
  – Dépend du bon réglage des paramètres

- **Typologies ou variantes**  
  - Argon2d (défense CPU forte), Argon2i (protection mémoire), Argon2id (équilibré)
  - Intégration dans libsodium, Rust, Go, PHP >= 7.2+

---

## Cas d’usage & exemples concrets
- Stockage de mots de passe utilisateurs dans une application web sécurisée
- Implémentation dans des gestionnaires de mots de passe modernes
- Dérivation de clé pour chiffrer des données locales ou en base

---

## Vulnérabilités, risques et abus connus
- Paramétrage trop faible (temps ou mémoire minimal)
- Comparaison directe avec bcrypt : erreurs d’implémentation
- Rétrocompatibilité avec des systèmes plus anciens (ex : migration)

---

## Mesures de sécurité & recommandations
- Utiliser Argon2id avec une mémoire d’au moins 64 Mo, 3 passes, et 1 thread minimum
- Ne jamais stocker de mot de passe en clair
- Coupler à un bon générateur d’aléa (salt unique par mot de passe)
- Recalculer les empreintes sur changement de politique

---

## Standards, protocoles & normes associées
- RFC 9106 (Argon2)
- Recommandé par OWASP pour la gestion des mots de passe
- Intégré à ISO/IEC 30170 (via libsodium, NaCl)

---

## Intégration dans un écosystème SSI
- Brique essentielle du **stockage sécurisé des mots de passe**
- Complémentaire des politiques de MFA et de gestion de sessions
- Implémenté dans les frameworks modernes (Laravel, Django, Node.js…)

---

## Liens avec d’autres notions
- [[bcrypt]]
- [[PBKDF2]]
- [[Mots de passe]]
- [[Dérivation de clé]]

---

## Sources, outils & références
- [RFC 9106 – Argon2](https://datatracker.ietf.org/doc/html/rfc9106)
- [Libsodium – Argon2 implementation](https://doc.libsodium.org/)
- [OWASP – Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [Argon2 Explained (YouTube)](https://www.youtube.com/watch?v=1cNN1eOavXk)

---

## Mots-clés
`#cybersécurité` `#lexique` `#standard` `#Argon2` `#motdepasse` `#KDF` `#hash` `#cryptographie` `#RFC9106`
