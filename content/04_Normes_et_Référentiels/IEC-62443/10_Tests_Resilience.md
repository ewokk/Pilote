# 10_Tests_Resilience

Les tests et certifications sont une étape clé de la démarche IEC 62443. Ils permettent de valider que les mesures de cybersécurité sont non seulement définies, mais aussi **implémentées, testées et auditées**.  

---

## Typologie des certifications et périmètres

- **Produits / composants (IEC 62443‑4‑1 et 4‑2)**  
  Portent sur le cycle de développement sécurisé (SDL) et les exigences techniques des composants (PLC, IED, HMI, firewalls industriels).  
  - Livrables : certificats de conformité, fiches produit avec SL‑C déclaré.  

- **Systèmes (IEC 62443‑3‑3)**  
  Couvre l’intégration des composants dans un système OT complet et la conformité aux Foundational Requirements (FR).  
  - Livrables : rapports de conformité, matrices FR/SR par SL, PV FAT/SAT.  

- **Organisations / prestataires (IEC 62443‑2‑4)**  
  Évalue les intégrateurs et prestataires de services, notamment la gestion des accès distants, le patch management, la supervision.  
  - Livrables : contrats fournisseurs intégrant les exigences, audits organisationnels.  

---

## SL‑C, SL‑T et SL‑A dans l’audit

- **SL‑C (Capability)** : niveau de sécurité qu’un composant peut fournir (déclaré par le fournisseur).  
- **SL‑T (Target)** : niveau de sécurité cible fixé pour une zone ou un système, en fonction des menaces.  
- **SL‑A (Achieved)** : niveau réellement atteint, validé par les tests et l’audit.  

Un audit efficace doit vérifier que **SL‑A ≥ SL‑T** et que les composants choisis (SL‑C) sont cohérents avec les objectifs définis.  

---

## Checklists d’audit (échantillons de preuves)

- **Produits (4‑2)** : fiches techniques indiquant SL‑C, certificats de test indépendant, rapports de durcissement, SBOM.  
- **Systèmes (3‑3)** : schémas de zoning & conduits, matrices FR/SR appliquées, journaux d’authentification MFA, dumps de règles FW.  
- **Organisations (2‑4)** : procédures de patch management, formulaires de demandes d’accès, registres de revues périodiques, logs bastion.  

---

## Jeu d’essais FAT / SAT

- **FAT (Factory Acceptance Test)** : tests en plateforme avant mise en service.  
  - Vérifie la conformité des configurations, MFA, segmentation réseau, PRA.  
  - Livrables : plan FAT, PV de tests, corrections appliquées.  

- **SAT (Site Acceptance Test)** : tests en conditions réelles sur site.  
  - Vérifie l’intégration avec l’environnement de production, la résilience aux menaces réelles, la supervision.  
  - Livrables : plan SAT, PV signés, traçabilité des écarts corrigés.  

---

## Critères d’acceptation

- Tous les **SL‑T** sont atteints ou justifiés.  
- Les écarts entre **SL‑T et SL‑A** sont documentés et un plan correctif est établi.  
- Les composants respectent leurs **SL‑C** déclarés.  
- Les non‑conformités sont tracées, suivies et résolues avant mise en production.  

---

## Traçabilité des non‑conformités

- Chaque écart doit être consigné dans un **registre de non‑conformités**.  
- Les actions correctives doivent être attribuées à un responsable et suivies.  
- Les preuves de correction (nouveaux tests, configurations corrigées) doivent être archivées.  
- Les comités IT/OT doivent valider la clôture avant passage en production.  

---

## Retours d’expérience et cas concrets

- **Énergie** : un intégrateur a sauté le FAT et découvert en SAT que certains IED ne supportaient pas le chiffrement TLS. Conséquence : retard de 6 mois et coûts additionnels. Depuis, FAT est obligatoire et inclut des tests TLS.  
- **Pharma** : un site a constaté qu’un SL‑T=3 n’était pas atteint (SL‑A=2) car les automates ne supportaient pas le MFA. L’écart a été documenté et compensé par des mesures organisationnelles.  
- **Transport** : lors d’un audit, des accès fournisseurs n’étaient pas tracés. Le RSSI a imposé un bastion avec enregistrement de sessions pour atteindre le SL‑T=3.  

---

## Preuves d’audit attendues

- Certificats de conformité produits (4‑2).  
- Rapports FAT/SAT validés.  
- Registres de non‑conformités avec suivi.  
- Journaux de logs bastion, MFA, PRA.  
- PV de comités IT/OT validant les corrections.  

---

## Impacts organisationnels et gouvernance

- Le **COMEX** doit valider les critères d’acceptation (SL‑T).  
- Le **RSSI OT** pilote l’audit et assure le suivi des non‑conformités.  
- Les **intégrateurs** doivent fournir les preuves FAT/SAT et appliquer les corrections.  
- Les **fournisseurs** doivent publier les SL‑C de leurs composants et en prouver la conformité.  

---

## Comparaisons utiles

- **ISO 27001** : impose les audits mais sans granularité produit/système/organisation.  
- **NIST 800‑82** : recommande les tests OT mais n’apporte pas de processus d’acceptation aussi détaillé que la 62443.  
- **IEC 62443** se distingue par la traçabilité SL‑C / SL‑T / SL‑A et par la séparation claire FAT/SAT.  

---

## Conséquences opérationnelles pour le RSSI

Le RSSI doit :  
- Vérifier que les composants disposent de certificats SL‑C.  
- Définir les SL‑T pour les zones et systèmes.  
- Organiser FAT et SAT et exiger les PV complets.  
- Suivre la traçabilité des non‑conformités jusqu’à leur résolution.  
- Préparer les preuves pour l’audit réglementaire (NIS2, DORA, ISO).  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant devra être capable de :  
- Expliquer la différence de périmètre entre les certifications produits, systèmes et organisations.  
- Utiliser SL‑C, SL‑T et SL‑A dans un audit.  
- Définir et appliquer un plan de tests FAT/SAT.  
- Assurer la traçabilité des non‑conformités et organiser leur correction.  

---

## Checklist RSSI

- [ ] Vérifier la présence de certificats produits (SL‑C).  
- [ ] Définir les SL‑T pour chaque zone/système.  
- [ ] Organiser des FAT/SAT et valider les PV.  
- [ ] Maintenir un registre des non‑conformités.  
- [ ] Présenter les écarts et actions correctives au COMEX.  
