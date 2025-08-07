# Asymétrie

> **Type** : concept 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : cryptographie `#cryptographie`, stratégie `#stratégie`, cyberdéfense

---

## Définition
> L’**asymétrie** en cybersécurité désigne toute situation où **les moyens, capacités ou efforts nécessaires entre l’attaquant et le défenseur sont déséquilibrés**. Elle s'applique aussi bien en **cryptographie** qu’en **stratégie défensive**.

---

## Explication détaillée
- **Origine ou historique**  
  Concept issu de la stratégie militaire (guerre asymétrique), appliqué à la cybersécurité pour décrire les **déséquilibres structurels** dans le cyberespace.

- **Fonctionnement technique ou stratégique**  
  - En **cryptographie asymétrique** (RSA, ECC), la **clé publique** chiffre, la **clé privée** déchiffre. Le chiffrement est facile, le déchiffrement sans clé est (théoriquement) impossible.
  - En **cyberdéfense**, un **attaquant peut exploiter une seule faille**, alors que le défenseur doit tout protéger.
  - Le coût d’une attaque peut être très faible face au coût de la protection ou de la remédiation.

- **Rôles & fonctions**  
  - Souligner les défis de la défense dans un écosystème ouvert
  - Justifier l’approche “zero trust”, la redondance, la surveillance continue
  - Rendre les systèmes plus robustes face à des adversaires imprévisibles

- **Avantages et limites**  
  + Exploité en cryptographie pour sécuriser les échanges  
  + Révèle les faiblesses organisationnelles à anticiper  
  – Peut être utilisé contre le défenseur (effet levier de l’attaquant)  
  – Rend difficile la répartition des ressources SSI

- **Typologies ou variantes**  
  - Asymétrie cryptographique (clé publique/clé privée)
  - Asymétrie économique (coût attaque vs coût défense)
  - Asymétrie informationnelle (l’attaquant a plus d’information que le défenseur)

---

## Cas d’usage & exemples concrets
- Utilisation d’un ransomware qui chiffre des milliers de fichiers en quelques minutes, alors que la restauration prendra des jours
- Piratage via une simple pièce jointe ouvrant un accès complet
- Utilisation d’un certificat public pour sécuriser un message sans divulguer la clé privée
- Stratégies asymétriques dans les doctrines militaires cyber (cyber commandements)

---

## Vulnérabilités, risques et abus connus
- Attaques à faible coût mais à fort impact (DDoS, spear phishing…)
- Manque de préparation face à des tactiques indirectes
- Déséquilibre de la chaîne de décision entre l’attaque et la réponse
- Défi du time-to-detect face au time-to-compromise

---

## Mesures de sécurité & recommandations
- Adopter une approche “assume breach”
- Renforcer la surveillance continue et le threat hunting
- Protéger par compartimentation et résilience (PCA/PRA)
- Former à la gestion de crise et à la riposte rapide

---

## Standards, protocoles & normes associées
- RFC 8017 (PKCS#1 - RSA)
- ISO/IEC 27001 – gestion des risques
- NIST SP 800-30 – gestion de l’asymétrie des menaces
- Doctrine militaire cyber française (LPM, COMCYBER)

---

## Intégration dans un écosystème SSI
- Pilier dans l’architecture Zero Trust
- Orienter les investissements sur les zones critiques
- Composante de la stratégie d’anticipation et de red teaming

---

## Liens avec d’autres notions
- [[RSA]]
- [[Zero Trust]]
- [[Cryptographie asymétrique]]
- [[Cybersécurité offensive]]

---

## Sources, outils & références
- [OWASP – Asymmetric Cryptography](https://owasp.org/)
- [ENISA – Threat Landscape](https://www.enisa.europa.eu/)
- [ANSSI – doctrine cyber militaire](https://www.ssi.gouv.fr/)
- [Explication asymétrie en cyber (YouTube)](https://www.youtube.com/watch?v=EMAT3vWJ7go)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#asymétrie` `#cryptographie` `#zero_trust` `#cyberdéfense` `#attaque`
