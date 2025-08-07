# Cas pratiques IEC 62443

## Cas 1 — Intégrateur multisite (usines agroalimentaires)

- Objectif : harmoniser la sécurité de 5 sites
- Étapes :
  - SL-T = 2 pour la plupart des zones
  - Zoning basé sur production / supervision / IT
  - Choix de SCADA SL-C = 2, automates SL-C = 3
  - Documentation centralisée (MFA, procédures…)

> Résultat : audit TUV en cours, conforme aux attentes client ISO + IEC

---

## Cas 2 — Site SEVESO chimique

- Très haut niveau de criticité
- SL-T = 3 pour conduite des processus
- Mesures :
  - supervision passive Nozomi
  - audit 4-2 des fournisseurs HMI
  - diodes de sécurité interzones
  - segmentation type Purdue avec redondance

> Résultat : alignement avec exigences réglementaires, haute résilience aux intrusions

---

## Cas 3 — Fournisseur d’automates

- Objectif : rendre ses PLC “IEC 62443 ready”
- Implémentation :
  - contrôle d’accès intégré
  - chiffrement des trames
  - patchabilité documentée
  - certification en cours auprès de l’organisme IACS

> Résultat : gain commercial auprès de grands comptes OT (nucléaire, pharmaceutique)

