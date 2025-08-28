# Mise en œuvre d’un SMSI

## Introduction

La mise en place d’un **Système de Management de la Sécurité de l’Information (SMSI)** constitue une transformation stratégique pour toute organisation.  
Il ne s’agit pas uniquement d’un projet IT : le SMSI implique la direction générale, le COMEX, les métiers, les équipes IT, les fonctions de conformité et les prestataires.  

La norme ISO/IEC 27001 fournit un cadre, mais l’approche doit être adaptée aux spécificités sectorielles et alignée avec d’autres référentiels (RGPD, NIS2, NIST CSF, TIBER-EU, Digital Finance Package).  

---

## Roadmap de mise en place d’un SMSI

### 1. Analyse de l’existant
- **Explication** : recenser les pratiques déjà en place et mesurer la maturité SSI.  
- **Exemple concret** : Dans un CHU français, l’inventaire a révélé que des sauvegardes étaient faites mais non testées, un point qui a aggravé les attaques de rançongiciel en 2020.  
- **Impacts organisationnels** : mobilisation des équipes IT et métiers pour cartographier les pratiques.  
- **Comparaison** : proche de l’« Initial Profile » du NIST CSF.  
- **Preuves d’audit** : inventaire documentaire, entretiens, preuves des pratiques effectives.  
> [!warning]  
> Erreur fréquente : croire qu’il faut tout créer de zéro et ignorer les dispositifs existants.

---

### 2. Gap analysis
- **Explication** : comparer l’existant avec les exigences de la norme ISO/IEC 27001 et identifier les écarts.  
- **Exemple concret** : Une banque identifie que ses processus de gestion de risque existent mais ne sont pas formalisés → non-conformité probable.  
- **Impacts organisationnels** : COMEX et RSSI doivent prioriser les investissements.  
- **Comparaison** : similaire au « gap assessment » NIS2 ou PCI-DSS ROC.  
- **Preuves d’audit** : rapport gap analysis, plan d’action validé.  
> [!warning]  
> Erreur fréquente : checklist superficielle sans analyse de maturité.

---

### 3. Définition du périmètre
- **Explication** : définir les sites, applications, systèmes et données couverts par le SMSI.  
- **Exemple concret** : Dans le cas d’OVH (incendie 2021), un périmètre trop flou des datacenters a compliqué les responsabilités.  
- **Impacts organisationnels** : forte implication juridique et métiers pour déterminer la portée.  
- **Comparaison** : exigence similaire au RGPD (registre de traitements).  
- **Preuves d’audit** : document de définition du périmètre, schéma SI validé.  
> [!warning]  
> Erreur fréquente : périmètre restreint artificiellement, peu crédible pour un client ou auditeur.

---

### 4. Politique de sécurité de l’information
- **Explication** : formaliser une politique SSI alignée sur la stratégie de l’organisation.  
- **Exemple concret** : Airbus intègre sa politique SSI dans la gouvernance groupe, avec une diffusion mondiale obligatoire.  
- **Impacts organisationnels** : validation COMEX, communication large aux métiers.  
- **Comparaison** : exigence commune ISO 27001 / NIS2 / DORA.  
- **Preuves d’audit** : politique approuvée, registre de diffusion.  
> [!warning]  
> Erreur fréquente : documents copiés de modèles sans adaptation sectorielle.

---

### 5. Analyse de risques
- **Explication** : évaluer les menaces, vulnérabilités et impacts sur les actifs.  
- **Exemple concret** : L’ANSSI a constaté en 2020 que des hôpitaux avaient ignoré le risque lié au télétravail → compromissions massives.  
- **Impacts organisationnels** : RSSI anime les ateliers, COMEX valide les critères de risque.  
- **Comparaison** : méthode EBIOS RM (France), ISO 27005 (international), NIST RMF.  
- **Preuves d’audit** : registre risques, méthodologie, procès-verbaux.  
> [!warning]  
> Erreur fréquente : analyse réalisée une seule fois, jamais mise à jour.

---

### 6. Définition du SoA (Statement of Applicability)
- **Explication** : document listant les mesures de l’Annexe A retenues ou exclues, avec justification.  
- **Exemple concret** : Une fintech retient 90/93 mesures et justifie l’exclusion de la vidéosurveillance physique car elle est hébergée en Cloud.  
- **Impacts organisationnels** : articulation forte entre COMEX, RSSI et juridique pour valider les exclusions.  
- **Comparaison** : similaire au « Control Selection » dans le NIST CSF Implementation Tiers.  
- **Preuves d’audit** : SoA validé et signé, matrice risques ↔ mesures.  
> [!warning]  
> Erreur fréquente : SoA incomplet ou non justifié.

---

### 7. Implémentation des mesures
- **Explication** : déployer les mesures organisationnelles, humaines, physiques et techniques retenues.  
- **Exemple concret** : mise en place d’un SOC externalisé, déploiement EDR, création d’une politique BYOD, gestion documentaire centralisée.  
- **Impacts organisationnels** : nécessité de budget, coordination IT/métiers.  
- **Comparaison** : convergence avec DORA (résilience opérationnelle).  
- **Preuves d’audit** : procédures, configurations, preuves de déploiement.  
> [!warning]  
> Erreur fréquente : se limiter aux outils techniques sans gouvernance.

---

### 8. Audit interne
- **Explication** : simuler la certification en interne pour identifier les écarts restants.  
- **Exemple concret** : Une ESN organise un audit blanc avec un consultant externe avant certification.  
- **Impacts organisationnels** : RSSI coordonne, direction audite les plans de remédiation.  
- **Comparaison** : proche des « Internal Audits » ISO 9001 et du ROC PCI-DSS.  
- **Preuves d’audit** : rapports internes, plans correctifs.  
> [!warning]  
> Erreur fréquente : audits internes purement formels, sans suivi des actions.

---

### 9. Préparation à la certification
- **Explication** : préparer les preuves, choisir l’organisme certificateur, planifier l’audit externe.  
- **Exemple concret** : Une société logistique fait auditer son SMSI par LNE pour gagner des marchés publics.  
- **Impacts organisationnels** : COMEX valide la démarche, RSSI collecte les preuves.  
- **Comparaison** : équivalent aux certifications sectorielles (PCI-DSS ROC, DORA audit).  
- **Preuves d’audit** : calendrier certification, dossiers de preuves, comptes-rendus d’audit blanc.  
> [!warning]  
> Erreur fréquente : attendre l’audit externe pour corriger → échec assuré.

---

## Cas pratiques & retours d’expérience

- **Santé** : des hôpitaux français victimes de ransomware en 2020 ont échoué car la roadmap SMSI n’était pas appliquée (absence de PCA, tests de sauvegarde ignorés).  
- **Finance** : des banques ont obtenu leur certification ISO 27001 en intégrant ISO 27005 et NIS2 dans la roadmap, réduisant ainsi la redondance des audits.  
- **Industrie** : dans le secteur automobile, le SMSI a été intégré à la gouvernance fournisseurs pour répondre aux exigences clients (TISAX).  

---

## Conseils opérationnels pour RSSI

- Construire une roadmap claire et validée par le COMEX.  
- Éviter les périmètres artificiellement restreints.  
- Mettre à jour l’analyse de risques après chaque incident majeur.  
- Documenter le SoA de manière robuste (preuves, justifications).  
- Prévoir un audit blanc sérieux avant certification.  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant doit être capable de :  
- Construire une roadmap réaliste de mise en œuvre d’un SMSI.  
- Identifier les points de blocage fréquents et leurs solutions.  
- Comparer la démarche ISO 27001 avec NIS2, RGPD, NIST CSF.  
- Préparer son organisation à réussir l’audit de certification.  

---

## Checklist RSSI

- [ ] Réaliser une analyse de l’existant.  
- [ ] Effectuer une gap analysis complète.  
- [ ] Définir clairement le périmètre du SMSI.  
- [ ] Rédiger et diffuser la politique SSI.  
- [ ] Conduire une analyse de risques et documenter le SoA.  
- [ ] Implémenter les mesures organisationnelles, humaines, physiques, technologiques.  
- [ ] Organiser un audit interne sérieux.  
- [ ] Préparer les preuves pour l’audit de certification.  
