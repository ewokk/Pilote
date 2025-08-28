# 03_Roles_Responsabilites

La norme **IEC 62443** distingue plusieurs rôles majeurs dans la cybersécurité industrielle :  
- **Asset owner (propriétaire d’actifs)** : l’exploitant de l’installation, responsable ultime de la sécurité et de la disponibilité des systèmes.  
- **Intégrateur** : l’acteur chargé d’assembler les composants, de concevoir l’architecture et de configurer les systèmes.  
- **Fournisseur** : le fabricant ou éditeur de composants matériels et logiciels (PLC, SCADA, firewalls industriels).  
- **Opérateur** : les utilisateurs finaux qui exploitent les systèmes OT au quotidien.  
- **Mainteneur** : les équipes internes ou externes qui assurent le support, le patching et la continuité opérationnelle.  

Dans la pratique, ces rôles sont souvent listés sans que leurs responsabilités précises soient clarifiées, ce qui génère des zones grises et des litiges en cas d’incident. Pour pallier ce problème, la 62443 doit être complétée par une répartition claire des responsabilités, par exemple sous forme de **matrice RACI** (Responsible, Accountable, Consulted, Informed).

---

## Matrice RACI des responsabilités OT

| **Activité clé**              | **Asset owner** (Exploitant) | **Intégrateur** | **Fournisseur** | **Opérateur** | **Mainteneur** |
|-------------------------------|------------------------------|-----------------|-----------------|---------------|----------------|
| Définition des SL‑T           | A (approuve)                | C (conseil)     | C               | I (informé)   | I              |
| Design zones & conduits       | A                           | R (réalise)     | C               | I             | I              |
| Durcissement des systèmes     | C                           | R               | R (composants)  | I             | I              |
| Patching correctif            | A                           | C               | R (fournit)     | I             | R (applique)   |
| Gestion des comptes           | A                           | R               | C               | R (utilise)   | I              |
| Accès distant sécurisé        | A                           | R               | C               | I             | C              |
| Change management             | A                           | R               | C               | I             | C              |
| Sauvegardes & restauration    | A                           | C               | C               | I             | R              |
| Tests FAT/SAT                 | A                           | R               | C               | I             | C              |

**R = Responsible (exécute), A = Accountable (décide/valide), C = Consulted (conseil), I = Informed (informé).**

---

## Retours d’expérience et cas concrets

- **Automobile** : un constructeur a subi une attaque de type ransomware exploitant une vulnérabilité non corrigée. L’intégrateur pensait que le patching relevait du mainteneur, tandis que le mainteneur considérait que c’était à l’exploitant de décider. Ce vide organisationnel a retardé l’application des correctifs et aggravé l’incident. Une matrice RACI validée aurait permis de clarifier les responsabilités et d’accélérer la réaction.  
- **Pharmaceutique** : lors d’un audit, l’absence de responsable clairement identifié pour les sauvegardes a conduit à une non‑conformité critique : aucun acteur n’était désigné comme garant de la validation des restaurations. Après adoption d’une RACI complète, le rôle de mainteneur a été clarifié et contractualisé, évitant une récidive.  

---

## Preuves d’audit attendues

- Matrice RACI documentée et validée par la direction ou le COMEX.  
- Procédures opérationnelles alignées avec la RACI (gestion des comptes, patch management, accès distant).  
- Registres de changements (change management) précisant les rôles de chaque acteur.  
- PV de tests FAT/SAT mentionnant explicitement les responsables de l’exécution et de la validation.  

---

## Impacts organisationnels et gouvernance

La mise en place d’une matrice RACI OT impose :  
- L’implication du **COMEX**, qui doit approuver la répartition des responsabilités et en assumer la responsabilité légale en vertu de NIS2.  
- Une articulation entre le **RSSI IT**, le **RSSI OT** et les métiers pour que la cybersécurité soit intégrée aux processus de production.  
- Une intégration contractuelle : la RACI doit figurer dans les contrats fournisseurs/intégrateurs (62443‑2‑4).  
- Un suivi en comité conjoint IT/OT pour s’assurer que les responsabilités définies sont respectées et mises à jour en fonction de l’évolution des systèmes.  

---

## Comparaisons utiles

- **ISO 27001** : mentionne la répartition des rôles (Annexe A), mais reste généraliste et non spécifique à l’OT.  
- **NIS2** : renforce la responsabilité pénale et financière du top management en cas de manquement.  
- **NIST CSF** : aborde la gouvernance mais ne propose pas de matrice RACI.  
- **IEC 62443** couplée à une matrice RACI offre un niveau de précision supérieur, en contractualisant et en opérationnalisant les responsabilités.  

---

## Conséquences opérationnelles pour le RSSI

Un RSSI doit :  
- S’assurer qu’une matrice RACI couvre toutes les activités OT (SL‑T, zones/conduits, patching, durcissement, comptes, accès distant, change management, sauvegardes).  
- Vérifier que cette RACI est validée par la direction et intégrée dans les contrats avec intégrateurs et fournisseurs.  
- Auditer régulièrement la conformité de l’organisation aux responsabilités définies.  
- Vérifier que les preuves (journaux, PV, registres) existent et sont accessibles en cas d’audit réglementaire.  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant devra être capable de :  
- Identifier les rôles majeurs définis par l’IEC 62443.  
- Construire une matrice RACI adaptée à son organisation OT.  
- Relier la répartition des responsabilités aux exigences contractuelles et réglementaires.  
- Préparer les preuves d’audit correspondantes.  

---

## Checklist RSSI

- [ ] Vérifier qu’une matrice RACI OT est formalisée et validée par la direction.  
- [ ] S’assurer que les contrats fournisseurs/intégrateurs incluent les responsabilités cybersécurité.  
- [ ] Auditer régulièrement la mise en œuvre des responsabilités (patching, comptes, accès distant).  
- [ ] Préparer et conserver les preuves d’audit (PV FAT/SAT, journaux, registres de changements).  
- [ ] Organiser un comité IT/OT pour suivre l’évolution des responsabilités OT.  
