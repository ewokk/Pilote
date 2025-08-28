# Vue d’ensemble de la démarche EBIOS RM

Cette section présente la **logique globale** d’EBIOS RM, depuis la définition du périmètre jusqu’à l’exploitation décisionnelle des résultats. L’objectif est d’offrir une compréhension **transversale** de la méthode avant d’entrer dans le détail de chaque atelier. La démarche s’adresse autant aux équipes techniques qu’aux directions métiers et à la gouvernance, afin d’aligner la sécurité sur les **enjeux business** et sur les contraintes réglementaires (NIS2, DORA, RGPD, LPM).

> [!info]  
> La force d’EBIOS RM réside dans l’enchaînement *cohérent* de cinq ateliers, qui assurent la traçabilité entre les **valeurs métiers**, les **sources de risque**, les **scénarios adverses** et les **décisions de traitement**. Cette structuration facilite les échanges avec les auditeurs et les autorités (ANSSI) et soutient la priorisation au COMEX.

---

## Pipeline de la démarche

Le pipeline suivant synthétise l’enchaînement logique de la méthode jusqu’à l’**exploitation des résultats** :

```
Atelier 1  →  Atelier 2  →  Atelier 3  →  Atelier 4  →  Atelier 5  →  Exploitation
Périmètre     Couples SR/OV  Stratégie      Scénarios      Traitements    Décisions,
de l’étude    (Sources de    de menaces     opérationnels  du risque      feuilles de route,
              Risque /       (adversaires,  crédibles      (réduction,    indicateurs,
              Objectifs de   intentions,                   transfert,     communication)
              Valeur)        cibles)                       acceptation)
```

---

## Ce que produit chaque atelier

**Atelier 1 – Périmètre de l’étude.** L’organisation définit les **valeurs métiers**, identifie les **biens supports** et fixe les **frontières** de l’analyse (systèmes inclus, dépendances critiques, tiers essentiels). Le résultat attendu est une vue de contexte solide, indispensable pour relier les enjeux techniques aux objectifs business.

**Atelier 2 – Couples Sources de Risque / Objectifs de Valeur (SR/OV).** L’équipe met en regard les **intentions d’adversaires plausibles** et les **cibles métiers prioritaires**. On caractérise ici les motivations (espionnage, fraude, sabotage), les capacités et les opportunités, afin de préparer la modélisation de menaces.

**Atelier 3 – Stratégie de menaces.** On construit la **cartographie des menaces** : quelles familles d’adversaires sont réalistes, quels vecteurs d’attaque sont privilégiés, quelles chaînes d’intrusion sont crédibles au regard du périmètre. C’est une passerelle entre les intentions adverses et les scénarios concrets.

**Atelier 4 – Scénarios opérationnels.** Les menaces se matérialisent en **récits d’attaque** alignés sur le périmètre et les couples SR/OV. Chaque scénario décrit le déroulé plausible : point d’entrée, élévation de privilèges, latéralisation, exfiltration ou sabotage, impacts sur les valeurs métiers, et éléments de détection possibles.

**Atelier 5 – Traitement du risque.** L’organisation **hiérarchise** les risques et décide des **mesures** (prévention, détection, réponse, résilience), en vérifiant l’adéquation coût/bénéfice et la cohérence avec les obligations (contrôles ISO 27001/27002, exigences NIS2/DORA). Le livrable est une **feuille de route** priorisée avec indicateurs de suivi.

**Exploitation des résultats.** Les conclusions alimentent la **gouvernance** (tableaux de bord, indicateurs), les **plans d’investissement**, les **exercices de crise** et les **audits**. Cette exploitation garantit que l’analyse de risques ne reste pas théorique mais oriente des décisions concrètes.

---

## Articulation avec ISO 27005, NIST RMF et FAIR

La démarche EBIOS RM se superpose aisément aux cycles de gestion des risques internationaux. Avec **ISO/IEC 27005**, elle correspond à l’identification des risques, l’analyse, l’évaluation et le traitement, mais ajoute une focale **adversaire/scénarios** particulièrement utile pour les environnements exposés. Le **NIST RMF** met l’accent sur la sélection et l’évaluation des contrôles ; EBIOS RM enrichit cette étape en amont par une compréhension fine des intentions adverses. **FAIR** peut être mobilisé en complément pour **quantifier** financièrement certains scénarios à fort enjeu.

---

## Preuves d’audit attendues (exemples)

- Cartographie du **périmètre** validée par les métiers et la DSI (Atelier 1).  
- Liste des **couples SR/OV** argumentée et datée (Atelier 2).  
- **Cartographie des menaces** et hypothèses d’adversaires, avec sources (CERT/ANSSI/sectorielles) (Atelier 3).  
- Dossiers de **scénarios opérationnels** : hypothèses, déroulé, impacts, indicateurs de détection (Atelier 4).  
- **Plan de traitement** priorisé, chiffré et tracé vers les exigences (ISO, NIS2, DORA), avec critères d’acceptation (Atelier 5).  
- Tableau d’**exploitation** : décisions COMEX, jalons, KPI/KRI, responsabilités.

---

## Cas pratiques & retours d’expérience

Dans une **banque**, le pipeline éclaire la dépendance à des prestataires critiques : le périmètre inclut les flux SWIFT, les couples SR/OV mettent en évidence la fraude et l’espionnage, la stratégie de menaces tient compte d’acteurs organisés, les scénarios couvrent le détournement de paiements, et les traitements combinent **segmentation, MFA, supervision** et **revues de tiers**.  
Dans un **hôpital**, les couples SR/OV priorisent l’**indisponibilité** des services vitaux ; les scénarios de type ransomware conduisent à renforcer la **continuité d’activité** (PCA), la **sauvegarde hors ligne** et l’**entraîner la cellule de crise**.  
Dans l’**industrie**, la stratégie de menaces considère des adversaires capables d’atteindre l’OT ; les scénarios opérationnels alignent **intrusion IT → pivot OT → sabotage**, les traitements privilégient la **segmentation IT/OT**, la **gestion des accès privilégiés** et la **télémaintenance sécurisée**.

---

## Objectifs pédagogiques

À l’issue de cette vue d’ensemble, l’apprenant comprend l’**enchaînement logique** des ateliers, sait **relier** les livrables entre eux et peut **positionner** EBIOS RM vis‑à‑vis des cadres internationaux. Il est prêt à dérouler la méthode de façon cohérente, en gardant la traçabilité des décisions jusqu’à l’exploitation.

---

## Checklist RSSI – Vue d’ensemble

- [ ] Valider le **périmètre** avec les métiers, la DSI et les tiers critiques.  
- [ ] Justifier les **couples SR/OV** par des menaces plausibles et des sources fiables.  
- [ ] Documenter la **stratégie de menaces** et ses hypothèses (sources, dates, responsables).  
- [ ] Maintenir des **scénarios opérationnels** à jour, mappés aux contrôles existants.  
- [ ] Piloter un **plan de traitement** priorisé avec jalons, KPI/KRI et responsables.  
- [ ] Assurer l’**exploitation** des résultats : reporting COMEX, exercices, audits de conformité.  
