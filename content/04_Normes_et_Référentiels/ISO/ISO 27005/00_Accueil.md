# 00_Accueil

## Introduction générale

L’ISO/IEC 27005 est la norme de référence pour la gestion des risques en sécurité de l’information. Elle constitue la brique essentielle du Système de management de la sécurité de l’information (SMSI) défini par l’ISO/IEC 27001. Alors que la 27001 fixe les exigences de mise en place d’un SMSI et que l’ISO/IEC 27002 propose un catalogue de mesures, la 27005 fournit la méthodologie structurée de gestion des risques permettant d’alimenter le cycle PDCA (Plan–Do–Check–Act) et de justifier objectivement les mesures retenues. En ce sens, elle est la passerelle entre la gouvernance et l’opérationnel : sans analyse de risques robuste, le SMSI devient une simple boîte administrative déconnectée de la réalité.

Historiquement, plusieurs incidents majeurs ont rappelé l’importance d’une gestion des risques fondée sur des critères explicites d’impact et de vraisemblance. L’attaque Stuxnet (2010) a montré que l’absence d’une cartographie des risques adaptée aux environnements industriels pouvait provoquer une catastrophe stratégique ; des automates Siemens ont été sabotés sans que les opérateurs n’aient identifié ce scénario dans leur analyse. De la même manière, les cyberattaques massives par ransomware (WannaCry en 2017, NotPetya la même année) ont démontré que la non-prise en compte de vulnérabilités connues, combinée à une absence de priorisation des actifs critiques, peut paralyser en quelques heures des hôpitaux, des ports maritimes ou des usines. L’ISO 27005 vise précisément à doter les organisations d’une démarche rationnelle, répétable et auditable pour anticiper ce type de scénarios, puis les traduire en contrôles au travers de la Déclaration d’applicabilité (SoA).

---

> [!info]  
> ISO 27005 fournit la méthode de gestion des risques soutenant les exigences du SMSI ISO 27001 (clauses 6, 8, 9, 10).

---

## Sommaire

- [[04_Normes_et_Référentiels/ISO/ISO-27005/01_Introduction_ISO27005|Introduction à la norme ISO/IEC 27005]]
- [[04_Normes_et_Référentiels/ISO/ISO-27005/02_Liens_avec_ISO_27001|Lien avec ISO 27001 et le SMSI]]
- [[04_Normes_et_Référentiels/ISO/ISO-27005/03_Structure_Norme_27005|Structure et logique de la norme]]
- [[04_Normes_et_Référentiels/ISO/ISO-27005/04_Etablir_Contexte|Établir le contexte de gestion du risque]]
- [[04_Normes_et_Référentiels/ISO/ISO-27005/05_Identification_Risques|Identification des risques]]
- [[04_Normes_et_Référentiels/ISO/ISO-27005/06_Evaluation_Risques|Évaluation des risques]]
- [[04_Normes_et_Référentiels/ISO/ISO-27005/07_Traitement_Risques|Traitement et acceptation des risques]]
- [[04_Normes_et_Référentiels/ISO/ISO-27005/08_Communication_Surveillance|Communication, suivi et amélioration]]
- [[04_Normes_et_Référentiels/ISO/ISO-27005/09_Methode_MEALEE_EBIOS|EBIOS, MEHARI, MEALEE et autres méthodes]]
- [[04_Normes_et_Référentiels/ISO/ISO-27005/10_Cas_Pratiques_Modeles|Modèles et scénarios pratiques]]
- [[04_Normes_et_Référentiels/ISO/ISO-27005/11_Synthese_Exigences|Synthèse des exigences]]

---

## Positionnement dans l’écosystème et exigences connexes

La 27005 est indissociable des autres briques de la famille 27000 : l’ISO/IEC 27001 impose d’identifier, d’évaluer et de traiter les risques (piliers du SMSI), tandis que la 27002 fournit le référentiel de mesures à sélectionner et à justifier via la SoA. La 27005 est donc le fil conducteur méthodologique qui relie l’évaluation des risques au Plan de traitement des risques (RTP), puis à la surveillance et à l’amélioration continue du cycle PDCA.

Comparativement, la directive NIS2 et le règlement DORA imposent une gestion systématique des risques et de la résilience, mais sans prescrire une méthode unique. En audit réglementaire, s’aligner sur l’ISO 27005 reste un moyen robuste de démontrer une maturité méthodologique et de piloter des indicateurs comme les KPI de réduction du risque résiduel ou de temps de traitement des risques élevés.

---

## Ce que vous trouverez dans ce cours (réponse aux points faibles identifiés)

Ce cours renforce l’opérationnalisation en proposant des critères chiffrés d’évaluation (impact, vraisemblance), des échelles calibrées par contexte et une clarification des notions d’appétence au risque et de tolérance au risque. Les méthodologies sont mises en perspective (par exemple EBIOS Risk Manager) pour guider un choix outillé et reproductible, en fournissant des matrices et des modèles directement exploitables (registre des risques, plan de traitement, SoA). Les cas pratiques sont sectorisés (industrie, santé, finance) avec des **exemples remplis** et les **preuves d’audit attendues** (procédures, journaux, rapports, décisions de risque). Enfin, une synthèse en tableau actionnable conclut le cours, structurée par **Responsable**, **Preuves**, **Outils** et **Échéance**, afin d’outiller le RSSI au quotidien.

---

## Objectifs pédagogiques du chapitre

Comprendre le rôle de la 27005 comme colonne vertébrale de l’analyse de risques, saisir son articulation avec la 27001 (exigences auditables) et la 27002 (mesures), relier la norme à des incidents historiques qui ont révélé l’importance d’une gestion robuste, et situer la 27005 par rapport aux cadres réglementaires contemporains (NIS2, DORA).

---

## Checklist RSSI

- [ ] Expliquer en interne que la 27005 **alimente** le SMSI (et n’est pas une norme de certification autonome).  
- [ ] S’assurer que la démarche de risques est intégrée au cycle PDCA.  
- [ ] Disposer d’une **échelle d’impact** et de **vraisemblance** documentées, ainsi que des seuils d’acceptation (appétence/tolérance) approuvés par la gouvernance.  
- [ ] Maintenir un registre des risques et un plan de traitement tenus à jour, reliés à la SoA.  
- [ ] Préparer les **preuves d’audit** associées : politiques, décisions d’acceptation, logs, rapports de comité, retours d’expérience.  
