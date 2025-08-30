# 05_Organisation_Acteurs

L’efficacité de la cyberdéfense française ne repose pas uniquement sur les moyens financiers et techniques, mais sur une **organisation claire des acteurs** et une coopération éprouvée entre institutions militaires, régulateurs civils et écosystèmes industriels. La LPM 2024–2030 confirme une gouvernance où chaque maillon (État, armées, régulateurs, OIV/OSE, industriels/PME) prend des responsabilités précises et partage les informations utiles à la continuité nationale. Cette articulation civilo‑militaire doit permettre d’absorber des crises hybrides, de limiter les dépendances non souveraines et de prouver la conformité lors des contrôles et audits.

---

## Rôle de l’ANSSI (pilier civil, régulateur OIV/OSE)

L’**[[Agence nationale de la sécurité des systèmes d’information (ANSSI – National Cybersecurity Agency of France)]]** est le **pilier civil** de la résilience nationale. Elle définit et contrôle les exigences applicables aux **[[Opérateur d’importance vitale (OIV – Operator of Vital Importance)]]** et **[[Opérateur de services essentiels (OSE – Operator of Essential Services)]]**, pilote les référentiels (ex. **[[Cloud de Confiance (SecNumCloud – Trusted Cloud)]]**), anime le dispositif **[[Équipe de réponse aux incidents (CSIRT – Computer Security Incident Response Team)]]** et la communauté **CERT‑FR**, et coordonne les notifications d’incident. Dans le cadre LPM, son action s’étend à la préparation/responsabilisation des supply chains critiques : exigences de journalisation exportable, clauses d’alerte et de réversibilité, capacité à coopérer en crise avec les autorités nationales. Les RSSI civils s’appuient sur l’ANSSI pour cadrer leurs politiques, valider leurs architectures (Cloud de confiance) et aligner leur preuve de conformité.

---

## Rôle du COMCYBER (opérations militaires cyber)

Le **[[Commandement de la cyberdéfense (COMCYBER – French Cyber Defense Command)]]** conduit les **opérations militaires** de cyberdéfense : protection des réseaux du ministère des Armées, intégration de la cyber dans la planification opérationnelle, et **lutte informatique offensive (LIO)** sous contrôle politique. La LPM 2024–2030 accroît ses effectifs et modernise ses capacités de détection, de manœuvre et de commandement/contrôle (C2 cyber). En situation de menace majeure touchant des intérêts vitaux, le COMCYBER coordonne avec l’ANSSI les mesures de réaction et d’appui, pour éviter les effets de cascade entre périmètres militaires et civils (énergie, santé, transport, télécoms).

---

## Coopération industriels / PME (supply chain défense)

La **supply chain défense** combine des maîtres d’œuvre (grands industriels) et un tissu dense de **PME/ETI** innovantes. Cette profondeur apporte agilité et spécialisation mais crée des **points d’entrée** pour les adversaires (compromission de bureaux d’études, pipelines CI/CD, dépendances Cloud non souveraines). La LPM renforce les attendus : durcissement des environnements de développement, contrôles d’accès à privilèges, segmentation OT/IT, obligations de **réversibilité contractuelle** et de **partage d’indicateurs de compromission**. L’accès aux marchés sensibles suppose une capacité démontrée à passer des audits exigeants (SecNumCloud, évaluations ANSSI, exigences OIV/OSE) et à **fournir des preuves** (journaux horodatés, procédures de crise, résultats d’exercices).

---

## Schéma ASCII – Gouvernance et flux de coopération

```
[Gouvernement] --> [Ministère des Armées] --> [COMCYBER]
      │                          │
    [ANSSI] <------------------> [OIV / OSE]
      │
[Industriels / PME de la supply chain]
             (contrats, preuves, échanges IOC)
```

---

## « Qui fait quoi » (opérationnel, synthèse)

| Acteur | Rôle principal | Interactions clés | Sorties attendues (preuves) |
|---|---|---|---|
| ANSSI (civil) | Référentiels, contrôle OIV/OSE, coordination CERT‑FR/CSIRT | OIV/OSE, industriels, autorités sectorielles, COMCYBER | Politiques validées, rapports de conformité, notifications, IOC partagés |
| COMCYBER (militaire) | Défense des SI du MinArm, LIO, C2 cyber | Ministère des Armées, OTAN/UE, ANSSI | Plans de défense, comptes‑rendus d’opérations, leçons apprises |
| OIV/OSE | Continuité des services essentiels | ANSSI, COMCYBER (en crise), prestataires | Journaux exportables, PCA/PRA testés, rapports d’incidents |
| Industriels/PME | Développement/MAINT des solutions, innovation | OIV/OSE, MinArm, ANSSI | Dossiers d’homologation, preuves d’audit, attestations de sécurité |
| MinArm (Ministère des Armées) | Programmation (LPM), arbitrage, supervision | COMCYBER, ANSSI, industriels | Directives, budgets, tableaux de bord nationaux |

---

## Preuves d’audit attendues (exemples ciblés)

- Dossiers d’architecture et d’homologation incluant **réversibilité Cloud** et cartographie des dépendances.  
- **Journaux horodatés** (NTP), exploitables et exportables, couvrant authentification, actions à privilèges, flux inter‑domaines OT/IT.  
- Procédures **PCA/PRA** réellement **testées** (CR d’exercices, objectifs de restauration atteints), intégrant liaisons ANSSI/COMCYBER.  
- Clauses contractuelles **supply chain** : obligations d’alerte, partage d’IOC, tests de reprise, gestion des vulnérabilités.  

---

## Cas pratiques & retours d’expérience

Les exercices **DEFNET** démontrent l’intérêt d’une mise en situation **civilo‑militaire** : synchronisation des cellules de crise, partage d’IOC, bascule en mode dégradé sur des périmètres OT/IT. Les attaques contre les hôpitaux (2020–2022) ont confirmé qu’un **pilotage centralisé** (ANSSI) combiné à des **appuis spécialisés** (COMCYBER) et à des **prestataires contractuellement cadrés** (journaux, réversibilité) conditionne la restauration rapide des services essentiels. Ces retours ont été intégrés aux attendus LPM pour consolider les mécanismes d’alerte, d’enquête et de reprise multi‑acteurs.

---

## Conseils opérationnels pour RSSI

Le RSSI doit **formaliser la carte des acteurs** (points de contact ANSSI, autorités sectorielles, appuis COMCYBER), intégrer les **exigences supply chain** dans ses contrats (journaux, réversibilité, délais d’alerte), et organiser au moins un **exercice inter‑acteurs** annuel (OIV/OSE ↔ ANSSI ↔ prestataires), avec restitution des écarts et plan d’action. La documentation de crise doit prévoir les **escaliers décisionnels** et les **canaux d’échange** avec l’État, afin de gagner des heures critiques lors d’un incident grave.

---

## Objectifs pédagogiques

À l’issue de ce chapitre, le lecteur sait **décrire l’architecture des acteurs**, distinguer les rôles **ANSSI (civil)** et **COMCYBER (militaire)**, positionner les **industriels/PME** dans la supply chain défense et traduire cette organisation en **preuves** attendues et **processus de coopération** actionnables.

---

## Checklist RSSI – Chapitre 05

- [ ] Mes **points de contact** ANSSI / autorités sectorielles / COMCYBER sont identifiés et à jour.  
- [ ] Mes contrats **prestataires/Cloud** imposent réversibilité, export de journaux et délais d’alerte.  
- [ ] Un **exercice civilo‑militaire** (type DEFNET) est planifié et documenté chaque année.  
- [ ] Mes PCA/PRA prévoient la **coordination** avec ANSSI/COMCYBER et des **preuves** vérifiables (CR d’exercices, KPIs).  
