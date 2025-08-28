# 07_Demarche_Projet_IEC62443

La mise en œuvre d’un projet conforme à l’IEC 62443 ne peut se limiter à une approche théorique. Elle doit suivre une **démarche projet structurée** intégrant des livrables précis à chaque phase, depuis le cadrage jusqu’à l’exploitation.  

---

## Phases et livrables d’un projet IEC 62443

### 1. Cadrage & définition des SL‑T
- **Objectif** : identifier le périmètre OT, analyser les menaces et définir les niveaux de sécurité cibles (**SL‑T**) pour chaque zone.  
- **Livrables** : analyse de risques OT, cartographie des actifs, tableau menace → SL‑T, note de cadrage validée par le COMEX.  

### 2. Zoning & conduits
- **Objectif** : concevoir une segmentation par zones de criticité et définir les conduits sécurisés entre elles.  
- **Livrables** : schémas réseaux avec zones et conduits, matrice de flux autorisés, justification documentaire.  

### 3. Design des mesures FR/SR
- **Objectif** : traduire les SL‑T en exigences concrètes via les Foundational Requirements (IAC, UC, SI, DC, RDF, TRE, RA).  
- **Livrables** : matrice FR/SR par zone, spécifications techniques, plan de mise en conformité.  

### 4. Implémentation & durcissement
- **Objectif** : déployer les mesures (pare‑feux, bastions, MFA, segmentation, durcissement applicatif, PRA).  
- **Livrables** : configurations appliquées, scripts de durcissement, rapports d’installation, preuves de conformité.  

### 5. FAT – Factory Acceptance Test
- **Objectif** : tester en plateforme les composants et leur intégration avant installation sur site.  
- **Livrables** : plan de tests FAT, rapports de résultats, procès‑verbaux signés, liste de non‑conformités corrigées.  

### 6. SAT – Site Acceptance Test
- **Objectif** : valider l’implémentation en conditions réelles sur site.  
- **Livrables** : plan de tests SAT, rapports, PV de validation, écarts documentés et corrigés.  

### 7. Run & suivi via KPI OT
- **Objectif** : piloter la sécurité dans la durée, via supervision et indicateurs OT.  
- **Livrables** : tableau de bord KPI (disponibilité, patching, incidents, comptes), rapports SOC OT, bilans annuels présentés au COMEX.  

---

> [!warning]  
> Ne jamais sauter les étapes **FAT** et **SAT**, même en contexte *brownfield*. Ces tests sont essentiels pour valider la conformité et éviter que des vulnérabilités non détectées en plateforme se propagent en production.  

---

## Retours d’expérience et cas concrets

- **Pharma** : un site a mis en production un SCADA patché sans FAT. Résultat : incompatibilité avec certains automates, arrêt de production. Depuis, les FAT sont obligatoires même en brownfield.  
- **Énergie** : un opérateur a sauté la phase SAT pour accélérer un déploiement. L’intégration mal configurée d’un proxy industriel a bloqué des flux critiques, entraînant une perte de visibilité. L’incident aurait été évité avec un SAT complet.  

---

## Preuves d’audit attendues

- Notes de cadrage avec SL‑T documentés et validés.  
- Schémas de zoning & conduits signés.  
- Matrices FR/SR par zone.  
- Procès‑verbaux FAT/SAT.  
- Rapports KPI OT et comptes rendus de comités de suivi.  

---

## Impacts organisationnels et gouvernance

- Le **COMEX** doit valider les niveaux SL‑T et la feuille de route du projet.  
- Le **RSSI OT** coordonne les phases avec intégrateurs, fournisseurs et métiers.  
- Les **intégrateurs** doivent livrer des preuves FAT/SAT et corriger les écarts avant mise en service.  
- Les **fournisseurs** doivent déclarer les SL‑C de leurs composants et participer aux tests FAT/SAT.  

---

## Comparaisons utiles

- **ITIL** : propose une gestion projet (Change/Release) mais sans spécificité OT.  
- **ISO 27001** : prévoit un cycle PDCA, cohérent avec la logique IEC 62443 mais moins détaillé.  
- **NIS2** : impose la traçabilité des mesures et justifie la formalisation de livrables par phase.  

---

## Conséquences opérationnelles pour le RSSI

Le RSSI doit :  
- Définir et documenter les SL‑T en phase de cadrage.  
- S’assurer que zoning, FR/SR et durcissement sont alignés avec les menaces.  
- Exiger les PV FAT/SAT comme prérequis à la mise en service.  
- Mettre en place un suivi KPI OT et présenter régulièrement les résultats au COMEX.  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant devra être capable de :  
- Décrire les phases d’un projet IEC 62443.  
- Associer chaque phase à des livrables précis et audités.  
- Comprendre l’importance des FAT/SAT même en brownfield.  
- Piloter un projet OT avec des KPI de sécurité.  

---

## Checklist RSSI

- [ ] Définir les SL‑T lors du cadrage et obtenir validation COMEX.  
- [ ] Vérifier l’existence de schémas zoning & conduits.  
- [ ] Valider les matrices FR/SR par zone.  
- [ ] Exiger des preuves FAT et SAT complètes.  
- [ ] Mettre en place un suivi KPI OT et rendre compte régulièrement.  
