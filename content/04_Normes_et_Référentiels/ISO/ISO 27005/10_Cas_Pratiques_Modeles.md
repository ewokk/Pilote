# 10_Cas_Pratiques_Modeles

## Introduction

Les cas pratiques sont essentiels pour passer de la théorie à l’opérationnel. Ce chapitre propose trois scénarios sectoriels complets (PME SaaS, hôpital, industrie) avec des matrices d’impact/vraisemblance remplies, un registre de risques partiel et un plan de traitement illustratif. Ces exemples peuvent servir de modèles pour les RSSI et les auditeurs.  

---

## Cas pratique 1 : PME SaaS

### Contexte
Une PME de 150 personnes fournit une solution SaaS de gestion RH. Ses principaux actifs : plateforme SaaS, données clients, infrastructure cloud.  

### Matrice d’impact (extrait)

| Impact / Niveau | 1 | 2 | 3 | 4 | 5 |
|-----------------|---|---|---|---|---|
| **Disponibilité** | < 15 min | < 2 h | < 24 h | < 3 j | > 3 j |
| **Confidentialité** | Publique | Données internes | Données sensibles | Données clients | Données RGPD critiques |

### Registre de risques (extrait)

| Actif            | Menace           | Vulnérabilité           | Scénario                              | Impact | Vraisemblance | Risque brut | Contrôles existants | Risque résiduel |
|------------------|-----------------|-------------------------|---------------------------------------|--------|---------------|-------------|---------------------|-----------------|
| Plateforme SaaS  | Rançongiciel     | Patch manquant          | Blocage complet des clients           | 5      | 3             | 15          | Sauvegardes quotidiennes | 9 |
| Données clients  | Attaquant externe| Chiffrement non activé  | Vol de données sensibles              | 4      | 2             | 8           | Chiffrement en cours | 4 |

### Plan de traitement (extrait)

| Mesure                 | Risque ciblé                 | Coût  | Gain estimé                   | Propriétaire | Échéance | KPI |
|------------------------|------------------------------|-------|-------------------------------|--------------|----------|-----|
| Déploiement EDR        | Rançongiciel plateforme SaaS | Moyen | Réduction vraisemblance ×3    | RSSI         | 6 mois   | % postes couverts |
| Chiffrement base client| Vol de données sensibles     | Faible| Conformité RGPD, réduction risque | DSI      | 3 mois   | % tables chiffrées |

---

## Cas pratique 2 : Hôpital

### Contexte
Un hôpital régional de 500 lits dépend fortement de son SI médical (DPI, imagerie, laboratoire).  

### Registre de risques (extrait)

| Actif           | Menace          | Vulnérabilité           | Scénario                            | Impact | Vrais. | Brut | Contrôles | Résiduel |
|-----------------|----------------|-------------------------|-------------------------------------|--------|--------|------|-----------|----------|
| Dossier patient | Rançongiciel    | Failles non corrigées   | Blocage du DPI                      | 5      | 5      | 25   | PRA en cours | 12 |
| Imagerie        | Panne matérielle| Matériel obsolète       | Indisponibilité examens critiques   | 4      | 3      | 12   | Contrat support | 8 |

### Plan de traitement (extrait)

| Mesure             | Risque ciblé        | Coût  | Gain estimé         | Propriétaire | Échéance | KPI |
|--------------------|---------------------|-------|---------------------|--------------|----------|-----|
| PRA renforcé       | Blocage DPI         | Élevé | RTO < 2h vital      | DSI + Médical| 12 mois  | Temps reprise |
| Renouvellement HW  | Panne imagerie      | Moyen | Réduction pannes    | Biomédical   | 6 mois   | % matériels remplacés |

---

## Cas pratique 3 : Industrie

### Contexte
Un site de production automobile intègre IT et OT.  

### Registre de risques (extrait)

| Actif         | Menace            | Vulnérabilité             | Scénario                         | Impact | Vrais. | Brut | Contrôles existants | Résiduel |
|---------------|------------------|---------------------------|----------------------------------|--------|--------|------|---------------------|----------|
| Automates OT  | Rançongiciel      | Réseau non segmenté       | Blocage ligne production         | 5      | 4      | 20   | Sauvegardes configs | 12 |
| ERP industriel| Attaquant externe | Accès VPN mal configuré   | Vol données supply chain         | 4      | 3      | 12   | MFA partiel         | 6 |

### Plan de traitement (extrait)

| Mesure            | Risque ciblé              | Coût  | Gain estimé       | Propriétaire | Échéance | KPI |
|-------------------|---------------------------|-------|-------------------|--------------|----------|-----|
| Segmentation OT   | Rançongiciel automates    | Moyen | Réduction vraisemblance ×4 | RSSI OT | 9 mois   | % automates segmentés |
| MFA complet VPN   | Vol supply chain ERP      | Faible| Suppression vulnérabilité   | DSI     | 2 mois   | % accès couverts MFA |

---

## Livrables exportables

Pour exploitation pratique, les registres et plans de traitement peuvent être exportés en :  
- **CSV** pour intégration dans Excel.  
- **MD** pour intégration dans Obsidian.  
- **XLSX** pour suivi formel dans les comités de direction.  

---

## Objectifs pédagogiques

- Illustrer la mise en œuvre concrète d’ISO 27005 dans trois secteurs.  
- Fournir des matrices et registres pré-remplis utilisables comme modèles.  
- Montrer comment construire un plan de traitement complet avec KPI.  
- Donner au lecteur des livrables réutilisables directement.  

---

## Checklist RSSI

- [ ] Des cas pratiques sectoriels sont-ils utilisés en formation interne ?  
- [ ] Un registre de risques exportable est-il disponible (CSV/Excel) ?  
- [ ] Des plans de traitement pré-remplis servent-ils de modèles ?  
- [ ] Les KPI de suivi sont-ils intégrés aux plans de traitement ?  
