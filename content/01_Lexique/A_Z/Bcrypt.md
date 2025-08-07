# Bcrypt

> **Type** : algorithme 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : défensif

---

## Définition
> Bcrypt est un algorithme de hachage conçu pour le stockage sécurisé des mots de passe. Il inclut un facteur de coût (work factor) modulable et une protection contre les attaques par dictionnaire et force brute grâce à sa lenteur volontaire.

---

## Explication détaillée
- **Origine ou historique**  
  - Développé en 1999 par Niels Provos et David Mazières, basé sur l’algorithme de chiffrement Blowfish.
- **Fonctionnement technique**  
  - Intègre un salt unique à chaque mot de passe haché.
  - Utilise un facteur de complexité ("cost") qui augmente le temps de calcul.
  - Produit un hash de 60 caractères incluant : identifiant, cost, salt, hash.
- **Rôles & fonctions**  
  - Empêche la récupération d’un mot de passe même si la base de données est compromise.
  - Rend inefficace l’utilisation de tables arc-en-ciel.
- **Avantages et limites**  
  - Adaptable aux capacités matérielles modernes (coût ajustable).
  - Plus lent que les alternatives modernes comme Argon2.
- **Typologies ou variantes**  
  - Implémentations disponibles dans de nombreux langages : PHP, Python, Go, etc.

---

## Cas d’usage & exemples concrets
- Stockage des mots de passe d’utilisateurs dans une base de données web.
- Vérification sécurisée d’identifiants à chaque connexion utilisateur.
- Mise à niveau d’une application pour remplacer SHA-1 par Bcrypt.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Si le cost est trop faible, Bcrypt devient vulnérable aux attaques GPU.
- Sensible aux attaques par timing si mal implémenté.
- Moins adapté à la sécurisation de gros volumes (ex : fichiers entiers).

---

## Mesures de sécurité & recommandations
- Utiliser un cost élevé adapté à la puissance actuelle (~12 ou plus).
- Ne jamais réutiliser de salt.
- Ne pas comparer les hash avec `==` (préférer des fonctions sécurisées).
- Envisager Argon2 pour de meilleures protections mémoire.

---

## Standards, protocoles & normes associées
- OWASP Password Storage Cheat Sheet
- Recommandations NIST SP 800-63B
- Remplacé progressivement par Argon2 dans certaines normes récentes

---

## Intégration dans un écosystème SSI
- Doit être intégré aux fonctions d’authentification sécurisée.
- Complète les politiques de gestion des identités et des accès.
- Associé à des systèmes de MFA pour renforcer la protection.

---

## Liens avec d’autres notions
- [[Hash]]
- [[Mot de passe]]
- [[Argon2]]

---

## Sources, outils & références
- [Documentation officielle](https://www.usenix.org/legacy/event/usenix99/provos/provos_html/)
- [🛠️ Outils ou solutions associées](https://github.com/pyca/bcrypt)
- [Articles techniques, blogs spécialisés](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=8ZtInClXe1Q)

---

## Mots-clés
`#cryptographie` `#lexique` `#concept` `#bcrypt` `#hash` `#motdepasse`
