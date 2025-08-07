# Attaque de la chaîne d’approvisionnement

> **Type** : technique  `#technique`  
> **Niveau** : avancé 
> **Contexte** : offensif, risque systémique `#risque`, conformité

---

## Définition
> Une **attaque de la chaîne d’approvisionnement** (supply chain attack) est une attaque qui cible **un fournisseur, partenaire ou composant externe** utilisé par une organisation afin de **compromettre indirectement** sa cible finale.

---

## Explication détaillée
- **Origine ou historique**  
  Ce type d’attaque est devenu très médiatisé avec des cas comme **SolarWinds** ou **NotPetya**. Il reflète la dépendance croissante aux prestataires, bibliothèques tierces, et logiciels en mode SaaS.

- **Fonctionnement technique**  
  - L’attaquant identifie une **chaîne de dépendance** (logiciel, MAJ, matériel, service cloud…)
  - Il compromet ce maillon pour **introduire du code malveillant** ou exploiter un accès légitime
  - L’effet peut être massif si le fournisseur est très diffusé

- **Rôles & fonctions**  
  - Viser des **organisations inaccessibles directement**
  - Maximiser l’impact en utilisant la **confiance implicite**
  - Exploiter la **complexité et l’opacité des interconnexions**

- **Avantages et limites**  
  + Permet une **compromission furtive et à large échelle**  
  + Parfois difficile à détecter (confiance, signature valide…)  
  – Complexe à orchestrer techniquement  
  – Peut laisser des traces visibles à grande échelle

- **Typologies ou variantes**  
  - Logicielle : MAJ piégée, dépendance tierce (ex : npm, PyPI)
  - Matérielle : routeurs, firmwares, circuits piégés
  - Humaine : sous-traitant négligent ou compromis
  - SaaS : services cloud mal sécurisés

---

## Cas d’usage & exemples concrets
- **SolarWinds (2020)** : mise à jour Orion piégée impactant des agences gouvernementales
- **NotPetya (2017)** : malware injecté dans un logiciel de comptabilité ukrainien
- Compromission de bibliothèques npm/JavaScript largement utilisées
- Attaque sur un éditeur de drivers ou de firmwares

---

## Vulnérabilités, risques et abus connus
- Signature numérique compromise
- Dépendances non surveillées ou obsolètes
- Contrôles faibles sur les prestataires
- Manque de visibilité sur les composants open source

---

## Mesures de sécurité & recommandations
- Cartographier les dépendances (SBOM – Software Bill of Materials)
- Appliquer le **principe de moindre confiance** (Zero Trust Supply Chain)
- Auditer et superviser les fournisseurs critiques
- Automatiser la **vérification d’intégrité** (hash, signature)
- Mettre à jour en continu les composants tiers

---

## Standards, protocoles & normes associées
- NIST SP 800-161 – Supply Chain Risk Management
- ISO/IEC 27036 – sécurité des relations fournisseurs
- SBOM (SPDX, CycloneDX)
- Directives NIS2, DORA

---

## Intégration dans un écosystème SSI
- Doit être intégré dans le **PCA/PRA**, PSSI, stratégie d’achat
- Soumis à **conformité réglementaire** pour les OIV et OSE
- Priorité dans les audits de dépendances logicielles et matérielles

---

## Liens avec d’autres notions
- [[SBOM]]
- [[SolarWinds]]
- [[Zero Trust]]
- [[Gestion des fournisseurs]]

---

## Sources, outils & références
- [NIST SP 800-161](https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final)
- [Dependency-Track, Snyk, CycloneDX, Sigstore](https://owasp.org/www-project-dependency-track/)
- [ENISA – Threat Landscape Supply Chain](https://www.enisa.europa.eu/)
- [SolarWinds Explained (YouTube)](https://www.youtube.com/watch?v=Jj-Rjl2MfZ4)

---

## Mots-clés
`#cybersécurité` `#lexique` `#technique` `#supply_chain` `#attaque` `#risque` `#zero_trust` `#SBOM` `#SolarWinds`
