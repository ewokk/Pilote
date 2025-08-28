# Atelier 5 – Définir le traitement du risque

## Objectif

L’atelier 5 conclut la démarche en définissant comment **traiter les scénarios de risque prioritaires**.  
Il s’agit de choisir les **mesures de sécurité les plus adaptées**, selon les principes :  
- D’efficacité ;  
- De proportionnalité ;  
- De résilience ;  
- De conformité réglementaire.  

Le plan de traitement doit être **documenté, validé et suivi** par la gouvernance.  

---

## Étapes

1. Regrouper les scénarios similaires.  
2. Identifier les mesures existantes.  
3. Déterminer les écarts par rapport aux bonnes pratiques et aux référentiels.  
4. Proposer des **mesures supplémentaires**.  
5. Élaborer un **plan de traitement** priorisé.  

---

## Options de traitement du risque

| Option | Description | Exemple |
|--------|-------------|---------|
| **Réduction** | Mettre en place des mesures techniques ou organisationnelles pour réduire la probabilité ou l’impact | Déploiement du MFA, segmentation réseau, EDR |
| **Transfert** | Déléguer tout ou partie du risque à un tiers (contractuel ou assurance) | Assurance cyber, clauses contractuelles avec un prestataire |
| **Acceptation** | Tolérer le risque résiduel car il est jugé acceptable au regard du coût ou de la stratégie | Accepter un faible risque de phishing car impact limité |
| **Évitement** | Supprimer l’activité ou le périmètre à risque | Abandon d’un service non critique trop vulnérable |

> [!info]  
> Chaque scénario doit être associé à une **option de traitement justifiée et validée**. Ne pas documenter ce choix est une **non‑conformité fréquente** en audit.  

---

## Typologie des mesures de sécurité

| Type | Exemple |
|------|---------|
| Préventive | MFA, segmentation réseau |
| Détective | IDS, journalisation centralisée |
| Corrective | Sauvegardes, PRA |
| Dissuasive | Charte d’usage, clauses contractuelles |

Une bonne stratégie combine **plusieurs types de mesures** réparties sur l’ensemble de la chaîne d’attaque.  

---

## Lien avec ISO/IEC 27001 – Annexe A

L’ISO/IEC 27001 (2022) propose 93 mesures de sécurité regroupées en 4 thèmes. Elles servent de **boîte à outils** pour traiter les risques identifiés.  

### Correspondance traitement ↔ mesures ISO 27001 Annexe A

| Option de traitement | Exemples de mesures ISO 27001 (Annexe A) |
|-----------------------|------------------------------------------|
| **Réduction** | A.5.15 Contrôles d’accès, A.8.23 Gestion des vulnérabilités techniques, A.5.7 Sécurité des réseaux |
| **Transfert** | A.5.19 Sécurité dans les relations avec les fournisseurs, A.5.20 Accord de traitement externalisé |
| **Acceptation** | Gouvernance du risque : justification documentée dans A.5.1 Politique de sécurité et A.5.2 Objectifs sécurité |
| **Évitement** | A.5.10 Suppression d’actifs non utilisés, A.5.18 Cycle de vie des informations |

> [!tip]  
> Lors des audits ISO 27001, les examinateurs vérifient que chaque **risque résiduel** est couvert par une mesure documentée ou par une justification d’acceptation explicite.  

---

## Analyse des écarts

Comparer les scénarios à :  
- L’état actuel de la sécurité.  
- Les référentiels (ISO 27001, ANSSI, guides sectoriels).  
- Les capacités réelles de l’organisation.  

---

## Preuves d’audit attendues

- Plan de traitement formalisé et validé par la direction.  
- Liste des mesures ISO 27001 retenues et justificatifs associés.  
- Écarts documentés et arbitrages consignés.  
- Justification claire pour chaque risque accepté ou transféré.  

---

## Cas pratiques & retours d’expérience

- **Banque** : après analyse d’un scénario de fraude SWIFT, option = réduction (segmentation + surveillance des transactions) et transfert (assurance fraude).  
- **Santé** : ransomware sur hôpital → réduction (sauvegarde hors ligne) + évitement (abandon d’un logiciel obsolète non maintenu).  
- **Industrie** : risque sabotage OT → réduction (contrôles d’accès physiques et segmentation IT/OT) + acceptation d’un faible risque résiduel documenté.  

---

## Objectifs pédagogiques

À l’issue de l’atelier 5, l’apprenant est capable de :  
- Identifier et appliquer les quatre options de traitement des risques.  
- Lier chaque option à des mesures ISO 27001 Annexe A pertinentes.  
- Documenter un plan de traitement clair et auditable.  
- Justifier les risques acceptés auprès de la gouvernance et des auditeurs.  

---

## Checklist RSSI – Atelier 5

- [ ] Associer chaque scénario critique à une **option de traitement** (réduction, transfert, acceptation, évitement).  
- [ ] Vérifier la cohérence avec ISO 27001 Annexe A.  
- [ ] Formaliser un plan de traitement priorisé avec jalons et responsables.  
- [ ] Documenter les écarts et arbitrages.  
- [ ] Obtenir validation COMEX/DSI sur les choix effectués.  
