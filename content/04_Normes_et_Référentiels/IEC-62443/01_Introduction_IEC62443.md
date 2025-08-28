# 01_Introduction_IEC62443

L’IEC 62443 s’impose aujourd’hui comme la référence mondiale en matière de cybersécurité industrielle, mais il est essentiel d’en comprendre le **contexte historique** et le **positionnement stratégique**. Cette norme a émergé au croisement de plusieurs dynamiques : l’augmentation des menaces ciblant les environnements OT, la convergence croissante entre IT et OT, et la pression accrue des régulateurs qui imposent des standards de sécurité homogènes pour les infrastructures critiques. Les incidents ré...

Au fil des années, les attaques se sont multipliées : **Stuxnet (2010)** a démontré la vulnérabilité des automates programmables industriels, **BlackEnergy (2015)** et **Industroyer (2016)** ont visé les réseaux électriques ukrainiens, et des ransomwares tels que **Ekans/Snake (2020)** ou **Colonial Pipeline (2021)** ont rappelé que l’interconnexion IT/OT crée des points d’entrée critiques. Ces événements ont conduit les États et les régulateurs (UE, États-Unis, ANSSI, ENISA) à recommander, voire exiger...

---

## Pourquoi IEC 62443 ?

La norme répond à plusieurs défis clés. Elle permet de **normaliser** le langage de la cybersécurité OT entre fournisseurs, intégrateurs et exploitants, de **structurer** des exigences techniques et organisationnelles adaptées aux environnements industriels, et de **permettre l’audit** et la certification de systèmes OT critiques, en s’alignant sur les attentes réglementaires (NIS2, directives sectorielles énergie/transport/santé). Elle constitue ainsi un **cadre contractuel, technique et organisationnel...

---

## IT vs OT : des priorités différentes

La principale différence réside dans la hiérarchie des besoins de sécurité. Là où l’IT met traditionnellement l’accent sur la **Confidentialité**, suivie de l’**Intégrité** puis de la **Disponibilité** (CIA), l’OT fonctionne à l’inverse. Dans un environnement industriel, **la Disponibilité est la priorité absolue**, car l’arrêt d’une ligne de production ou d’un réseau électrique entraîne des conséquences physiques, économiques et sociales immédiates. L’**Intégrité** des données de process vient en second...

Cette inversion des priorités explique pourquoi les méthodes et outils issus de l’IT doivent être adaptés avant d’être appliqués dans les environnements industriels.

---

## Chaîne fonctionnelle OT (schéma simplifié)

Voici une représentation simplifiée des couches OT et de leur articulation avec l’IT :

```
Terrain (Capteurs / Actionneurs)
          │
          ▼
      Automates (PLC)
          │
          ▼
     Supervision (SCADA / Historian)
          │
          ▼
        MES (Manufacturing Execution System)
          │
          ▼
        ERP (Enterprise Resource Planning)
```

Chaque couche introduit des enjeux de cybersécurité spécifiques : durcissement des PLC, cloisonnement des systèmes SCADA, journalisation des accès MES, intégrité des flux ERP/OT. L’IEC 62443 fournit des modèles et des exigences permettant de sécuriser l’ensemble de cette chaîne.

---

## Retours d’expérience et cas concrets

- **Stuxnet (2010)** : montre l’impact d’un code malveillant ciblant des centrifugeuses industrielles.  
- **BlackEnergy/Industroyer (2015‑2016)** : a révélé la fragilité des infrastructures électriques ukrainiennes et l’importance de la segmentation OT.  
- **Colonial Pipeline (2021)** : illustre la dépendance entre IT et OT et la nécessité de plans de continuité OT découplés de l’IT.  

Ces cas soulignent l’importance d’adopter une approche normative comme l’IEC 62443, qui formalise la gouvernance, les processus et les contrôles techniques pour éviter la répétition de telles crises.

---

## Preuves d’audit attendues

Un auditeur cherchant à évaluer la conformité vis‑à‑vis de la norme IEC 62443 dans une organisation OT attendra notamment :  
- Des **registres d’actifs industriels** (PLC, SCADA, MES, ERP).  
- Des **politiques de sécurité OT** intégrant la hiérarchie Disponibilité > Intégrité > Confidentialité.  
- Des **rapports d’analyse de risques** OT/IT documentant les menaces spécifiques.  
- Des **journaux d’événements** montrant la traçabilité des accès et des incidents OT.  
- Des **rapports FAT/SAT** validant la conformité des systèmes intégrés et la robustesse des configurations.  

---

## Impacts organisationnels et gouvernance

L’adoption de l’IEC 62443 implique une gouvernance claire. Le **COMEX** doit reconnaître l’OT comme un actif stratégique, le **RSSI** doit travailler en lien étroit avec le **Responsable OT** pour assurer la convergence IT/OT, et les métiers doivent être impliqués dans la définition des priorités. L’articulation juridique est également clé : contrats avec les intégrateurs et clauses de sécurité basées sur IEC 62443‑2‑4, responsabilités légales en cas d’incident, et alignement avec les exigences réglementa...

---

## Comparaisons utiles

La norme IEC 62443 doit être comparée à d’autres cadres :  
- **ISO 27001** : apporte un SMSI global, mais moins granulaire pour l’OT.  
- **NIST CSF** : fournit une approche orientée fonctions (Identify, Protect, Detect, Respond, Recover), compatible avec la 62443.  
- **NIS2** : impose aux opérateurs de services essentiels de sécuriser leurs environnements OT, ce qui fait de la 62443 un cadre de mise en œuvre pertinent.  
- **TIBER‑EU** : complète la 62443 en proposant des tests de pénétration pilotés par la menace (TLPT).  

---

## Conséquences opérationnelles pour le RSSI

Concrètement, un RSSI doit :  
- Adapter ses politiques de sécurité IT aux priorités OT.  
- Documenter et cartographier la chaîne fonctionnelle OT (terrain → ERP).  
- Définir et exiger des preuves d’audit auprès des intégrateurs et fournisseurs.  
- Préparer des contrôles de sécurité spécifiques OT (durcissement PLC, segmentation SCADA, bastions de télémaintenance).  
- Aligner son plan directeur SSI avec les exigences de l’IEC 62443, en l’intégrant dans le pilotage global des risques.  

---

## Objectifs pédagogiques

À l’issue de cette introduction, l’apprenant devra être capable de :  
- Situer historiquement l’IEC 62443 et expliquer pourquoi elle s’est imposée.  
- Comprendre l’impact de la convergence IT/OT et des menaces associées.  
- Expliquer les différences fondamentales entre les priorités IT et OT.  
- Identifier les différentes couches d’une architecture OT et les enjeux de sécurité correspondants.  
- Connaître les preuves d’audit attendues et les comparer avec d’autres cadres normatifs.  

---

## Checklist RSSI

- [ ] Identifier les systèmes OT présents dans son organisation et leurs interconnexions IT.  
- [ ] Vérifier que la stratégie de sécurité prend bien en compte la hiérarchie **Disponibilité > Intégrité > Confidentialité**.  
- [ ] S’assurer que les menaces OT réelles (Stuxnet, Industroyer, ransomwares ciblant OT) sont connues et intégrées dans l’analyse de risques.  
- [ ] Préparer une cartographie de la chaîne fonctionnelle OT (terrain → ERP) pour identifier les zones critiques.  
- [ ] Vérifier l’alignement avec les attentes des régulateurs et les normes connexes (NIS2, ISO 27001, NIST 800‑82, TIBER‑EU).  
