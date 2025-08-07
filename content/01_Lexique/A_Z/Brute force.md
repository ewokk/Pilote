# Brute force

> **Type** : attaque 
> **Niveau** : #base  
> **Contexte** : #offensif, #pentest

---

## Définition
> Une attaque par force brute consiste à essayer toutes les combinaisons possibles jusqu’à trouver la bonne, typiquement pour casser un mot de passe ou une clé cryptographique.

---

## Explication détaillée
- **Origine ou historique**  
  - Technique ancienne, utilisée depuis les débuts de la cryptographie moderne.
- **Fonctionnement technique**  
  - L’attaquant utilise un script ou outil automatisé pour tester toutes les combinaisons jusqu’à ce qu’il trouve la bonne.
  - Peut s’appliquer à des mots de passe, des clés de chiffrement, des PIN, etc.
- **Rôles & fonctions** dans la cybersécurité  
  - Méthode d’attaque typique dans les audits de sécurité ou les tests de robustesse.
- **Avantages et limites**  
  - Avantage : garantit le succès à terme.
  - Limite : extrêmement lent si le mot de passe est long ou bien protégé (temps exponentiel).
- **Typologies ou variantes**  
  - Force brute pure, dictionnaire, attaque hybride, force brute distribuée.

---

## Cas d’usage & exemples concrets
- Tentatives de connexion à un compte utilisateur en testant toutes les combinaisons.
- Brute force sur un mot de passe ZIP ou RAR.
- Attaque sur un hash MD5 prévisible.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Faiblesse des mots de passe simples ou non salés.
- Exposition des services sans limitation d’essai (SSH, RDP, etc.).
- Exploitation sur des bases de données de hash publiques (rainbow tables).

---

## Mesures de sécurité & recommandations
- Utiliser des mots de passe complexes et longs.
- Activer des mécanismes de verrouillage après plusieurs tentatives.
- Ajouter un délai entre les essais ou utiliser un CAPTCHA.
- Mettre en place une authentification multifactorielle.

---

## Standards, protocoles & normes associées
- Bonnes pratiques de sécurité ANSSI, NIST.
- RFC 7617 (Basic Auth), recommandations de durcissement des accès.

---

## Intégration dans un écosystème SSI
- Doit être détecté par des systèmes de monitoring ou un SIEM.
- Doit être limité par des mécanismes en périphérie (WAF, proxy, reverse proxy).
- Peut être testé lors de pentests réguliers.

---

## Liens avec d’autres notions
- [[Dictionnaire d’attaque]]
- [[Authentification]]
- [[Hash]]

---

## Sources, outils & références
- [🛠️ Hydra - outil de brute force](https://github.com/vanhauser-thc/thc-hydra)
- [🛠️ John The Ripper](https://www.openwall.com/john/)
- [OWASP - Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#attaque` `#motdepasse` `#authentification`
