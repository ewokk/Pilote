# AES

> **Type** : standard  `#standard`  
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : défensif, chiffrement `#chiffrement`, gouvernance

---

## Définition
> **AES (Advanced Encryption Standard)** est un algorithme de chiffrement symétrique adopté comme standard par le gouvernement américain. Il est largement utilisé pour sécuriser les données sensibles.

---

## Explication détaillée
- **Origine ou historique**  
  AES a été sélectionné en 2001 par le **NIST** après un processus de compétition publique. L’algorithme choisi est **Rijndael**, développé par Vincent Rijmen et Joan Daemen.

- **Fonctionnement technique**  
  - Algorithme de chiffrement **symétrique par blocs**
  - Taille de bloc : 128 bits
  - Clés : 128, 192 ou 256 bits
  - Fonctionne par **substitution-permutation** en plusieurs **tours** (10, 12 ou 14 selon la taille de la clé)
  - Chiffrement rapide, efficace en matériel et logiciel

- **Rôles & fonctions**  
  - Chiffrement des données au repos (disques, bases de données)
  - Chiffrement des communications (VPN, TLS)
  - Intégré dans de nombreux protocoles et solutions (SSL, IPsec, Wi-Fi, etc.)

- **Avantages et limites**  
  + Très robuste face aux attaques connues (résiste au brute-force)  
  + Performance élevée  
  – Sensible aux implémentations faibles (side-channel attacks)  
  – Nécessite une gestion sûre des clés (KMS, HSM)

- **Typologies ou variantes**  
  - Modes de fonctionnement : ECB, CBC, CTR, GCM...
  - AES-128, AES-192, AES-256 selon le niveau de sécurité requis

---

## Cas d’usage & exemples concrets
- Chiffrement des disques durs avec BitLocker ou VeraCrypt
- Chiffrement des VPN IPsec
- Protocole WPA2 pour le Wi-Fi sécurisé
- Applications cloud et bases de données sécurisées

---

## Vulnérabilités, risques et abus connus
- Mode ECB non recommandé (fuites d’information)
- Failles liées à des implémentations (ex : cache timing, Spectre)
- Gestion de clé faible ou compromise
- Mauvais choix de mode ou IV non aléatoire

---

## Mesures de sécurité & recommandations
- Privilégier AES avec un mode sécurisé (GCM, CBC avec IV aléatoire)
- Utiliser une clé d’au moins 128 bits (256 bits pour données sensibles)
- Recourir à des bibliothèques cryptographiques reconnues (OpenSSL, Libsodium…)
- Gérer les clés avec des KMS (Key Management System) ou HSM

---

## Standards, protocoles & normes associées
- FIPS 197 (standard AES)
- NIST SP 800-38A (modes de chiffrement)
- ISO/IEC 18033-3
- Intégré dans TLS, IPsec, WPA2/WPA3, etc.

---

## Intégration dans un écosystème SSI
- Brique centrale du chiffrement dans tout SI
- Présent dans les appliances réseau, HSM, OS, solutions cloud
- Compatible RGPD et exigences réglementaires

---

## Liens avec d’autres notions
- [[Chiffrement symétrique]]
- [[Rijndael]]
- [[TLS]]
- [[IPsec]]

---

## Sources, outils & références
- [FIPS 197 – AES Standard](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf)
- [OpenSSL – Implémentation AES](https://www.openssl.org/)
- [OWASP Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)
- [AES Explained (YouTube)](https://www.youtube.com/watch?v=O4xNJsjtN6E)

---

## Mots-clés
`#cryptographie` `#lexique` `#standard` `#AES` `#chiffrement` `#symétrique` `#FIPS` `#NIST` `#clé`
