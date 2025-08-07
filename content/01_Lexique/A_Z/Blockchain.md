# Blockchain

> **Type** : concept 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : gouvernance

---

## Définition
> La blockchain est une technologie de stockage et de transmission d’informations sous forme de registre distribué, sécurisé et infalsifiable, structuré en blocs liés entre eux de manière cryptographique.

---

## Explication détaillée
- **Origine ou historique**  
  - Introduite en 2008 avec le Bitcoin (Satoshi Nakamoto), la blockchain s’est depuis généralisée à d’autres usages (contrats, identité, traçabilité).
- **Fonctionnement technique**  
  - Chaque bloc contient un ensemble de transactions, un horodatage, et le hash du bloc précédent.
  - Consensus distribué (preuve de travail, preuve d’enjeu, etc.) pour valider les blocs.
  - Transparente (accessible à tous) ou privée selon les implémentations.
- **Rôles & fonctions**  
  - Garantir l’intégrité, la traçabilité, et la non-répudiation des données.
  - Supprimer les tiers de confiance dans certains systèmes.
- **Avantages et limites**  
  - Résilience, transparence, auditabilité.
  - Consommation énergétique (PoW), lenteur, complexité réglementaire.
- **Typologies ou variantes**  
  - Blockchain publique (Bitcoin, Ethereum), privée (Hyperledger), hybride, permissionnée.

---

## Cas d’usage & exemples concrets
- Cryptomonnaies (Bitcoin, Ethereum).
- Certificats d’authenticité, vote électronique, traçabilité alimentaire.
- Stockage de logs inviolables pour la cybersécurité.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Attaque des 51 % (contrôle du réseau).
- Smart contracts vulnérables (ex : DAO hack).
- Confidentialité faible (pseudonymat ≠ anonymat).

---

## Mesures de sécurité & recommandations
- Auditer les smart contracts avant déploiement.
- Choisir un consensus adapté à l’usage.
- Sécuriser les clés privées (portefeuilles, HSM).
- Intégrer des couches de confidentialité (ZKP, cryptographie homomorphe).

---

## Standards, protocoles & normes associées
- ISO/TC 307 (standardisation de la blockchain)
- RFC sur les formats de transaction (ex : EIP)
- OWASP Blockchain Top 10

---

## Intégration dans un écosystème SSI
- Complément possible aux logs d’audit (intégrité).
- Intéressante pour la gouvernance de l’identité (SSI, DID).
- Nécessite une évaluation précise du risque et de la charge technique.

---

## Liens avec d’autres notions
- [[Cryptomonnaie]]
- [[Hash]]
- [[Contrat intelligent]]

---

## Sources, outils & références
- [Documentation officielle](https://www.iso.org/committee/6266604.html)
- [🛠️ Outils ou solutions associées](https://ethereum.org/)
- [Articles techniques, blogs spécialisés](https://www.blockchain-expert.fr/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=SSo_EIwHSd4)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#blockchain` `#registre` `#cryptographie`
