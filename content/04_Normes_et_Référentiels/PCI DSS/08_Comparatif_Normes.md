
# 8 - Comparatif PCI DSS avec autres cadres normatifs

Ce chapitre positionne PCI DSS par rapport à d’autres normes et référentiels : **ISO 27001, NIST, RGPD, DORA**, etc.

___

## Tableau comparatif synthétique

| Cadre | Domaine | Obligatoire ? | Portée | Évaluation | Périmètre typique |
|-------|---------|---------------|--------|------------|-------------------|
| **PCI DSS** | Paiement (carte) | Oui (contractuel) | PAN/SAD | QSA / SAQ | e-commerce, banques |
| **ISO 27001** | SSI générale | Non (volontaire ou imposée client) | SI entier | Audit certifié | Entreprises multisites |
| **RGPD** | Données perso | Oui (légal) | Données à caractère perso | CNIL / auto | Toute entreprise traitant des données |
| **NIST CSF** | Cadre cybersécurité | Non (guide) | Organisationnelle | Interne / tiers | USA, multinationales |
| **DORA** | Finance / résilience | Oui (UE, 2025) | SI critiques financiers | Supervision nationale | Banques, assurances, PSF |

___

## Points communs et différences

- PCI DSS et ISO 27001 partagent des exigences communes : contrôle d’accès, gestion des logs, sécurité réseau
- RGPD impose une gouvernance documentaire proche de PCI (registre, accountability)
- DORA ajoute la dimension **résilience opérationnelle**, absente de PCI
- NIST est plus flexible (cadre) vs PCI (standard rigide)

___

## Intégration multi-normes (approche croisée)

| Domaine | Normes concernées | Harmonisation possible |
|---------|-------------------|------------------------|
| Authentification | PCI (8), ISO (A.9), NIST (IA-2), DORA (ICT) | MFA partout, logique RBAC |
| Journalisation | PCI (10), ISO (A.12.4), NIST (AU-2) | SIEM centralisé |
| Gouvernance | PCI (12), ISO (A.5), RGPD (art.24-30) | Politique unique, registres partagés |

> [!info]
> Une approche unifiée permet de **réduire les efforts de conformité**, en mutualisant les preuves, outils, audits et responsabilités.

___

## Conclusion

PCI DSS ne doit pas être traité isolément : il s’inscrit dans un **écosystème normatif**, souvent lié aux exigences contractuelles, réglementaires ou industrielles spécifiques.

