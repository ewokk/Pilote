# 15. Cas pratique : Mise en œuvre du NIST CSF dans un groupe international

## Objectif du chapitre

Ce chapitre montre comment une **entreprise de grande taille multisite et multinationale** peut mettre en œuvre le NIST CSF à l’échelle de son système d’information global.

---

## 1. Contexte de l’organisation

- Groupe industriel de 20 000 employés
- Présence dans 12 pays
- SI hétérogène (cloud, on-premise, usines, filiales)
- Équipe SSI centrale + RSSI régionaux
- Exigences ISO 27001 + conformité RGPD + DORA (filiale financière)

---

## 2. Gouvernance mise en place

- Adoption du **NIST CSF comme cadre commun** pour toute la stratégie cyber
- Constitution d’un **comité de gouvernance SSI Groupe**
- Mise en place d’un **référentiel de profils CSF** :
  - 1 profil central
  - Profils locaux adaptés par entité
- Suivi trimestriel par KPI / reporting consolidé

---

## 3. Approche de déploiement

### Étape 1 : Cartographie & évaluation initiale

- Diagnostic CSF des entités critiques
- Mappings existants vers ISO 27001 + CIS Controls
- Identification des gaps majeurs (détection, réponse)

### Étape 2 : Définition de profils cibles

- Par entité (ex : site de production, siège, centre R&D)
- Objectifs adaptés aux enjeux métiers

### Étape 3 : Déploiement progressif

- Renforcement MFA, EDR, SOC, PRA
- Acculturation métier via CSF visuels
- Intégration CSF dans plans directeurs SI

### Étape 4 : Pilotage & amélioration

- Automatisation du scoring via GRC
- Indicateurs comparables entre pays
- Intégration des REX dans les profils CSF

---

## 4. Outils et architecture

| Besoin | Outil/Choix |
|--------|-------------|
| Référentiel | Eramba avec import CSF JSON |
| Cartographie | CMDB ServiceNow |
| Sensibilisation | Wombat / CyberRange interne |
| SOC | Opéré en 24/7 via MSSP |
| Journalisation | Splunk + SIEM local redondant |
| Cloud Security | CSPM intégré (Prisma Cloud) |

---

## 5. Bénéfices observés

- Alignement des filiales hétérogènes autour d’un socle commun
- Valorisation de la maturité cyber auprès des clients et partenaires
- Détection plus précoce des incidents
- Raccourcissement des délais de réponse (MTR divisé par 2)
- Traçabilité de la gouvernance

> [!success]
> Le CSF a servi de langage commun pour harmoniser les pratiques sans rigidité excessive.

---

## Conclusion

Le NIST CSF est **parfaitement adapté aux grandes organisations complexes**, en apportant :
- Une **standardisation fédératrice**
- Une **souplesse d’adaptation locale**
- Un **cadre de pilotage transverse**

