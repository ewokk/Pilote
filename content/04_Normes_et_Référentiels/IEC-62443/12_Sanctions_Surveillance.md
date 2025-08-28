# 12_Sanctions_Surveillance

La mise en conformité à l’IEC 62443 s’inscrit dans un cadre réglementaire plus large (NIS2, DORA, GDPR) où les régulateurs imposent non seulement des **sanctions** en cas de non‑respect, mais aussi une **surveillance continue** des organisations critiques.  

---

## Tableau comparatif des sanctions

| **Cadre**           | **Type de sanction**                                   | **Montant / Niveau**                                   | **Responsabilité** |
|----------------------|-------------------------------------------------------|-------------------------------------------------------|--------------------|
| **IEC 62443**       | Non‑conformité détectée lors d’un audit ou d’un contrat (2‑4, 3‑3, 4‑2) | Dépend des clauses contractuelles (exclusion, pénalités financières, non‑renouvellement) | Asset owner / intégrateur / fournisseur |
| **NIS2 (UE, 2023)** | Sanctions administratives pour opérateurs essentiels   | Jusqu’à 10 M€ ou 2% du CA annuel mondial               | Direction & COMEX (responsabilité personnelle possible) |
| **GDPR (UE, 2018)** | Protection des données personnelles                   | Jusqu’à 20 M€ ou 4% du CA annuel mondial               | Responsable du traitement, sous‑traitants |
| **DORA (UE, 2025)** | Résilience opérationnelle numérique (banque/finance)   | Amendes proportionnées, interdiction d’activité en cas de manquement critique | COMEX, prestataires TIC |
| **Autres (Énergie, Transport, Santé)** | Sanctions sectorielles spécifiques (ANSSI, régulateurs nationaux) | Amendes, retrait d’agrément, interdiction d’exploiter | Exploitant / Direction légale |

---

## Mécanismes de surveillance

- **Audits réguliers** : vérification périodique des zones OT, FAT/SAT, gap analysis.  
- **Reporting COMEX** : bilans annuels sur la conformité OT (KPI patchs, incidents, PRA).  
- **Contrôles des régulateurs** : inspections ANSSI, ENISA, régulateurs énergie/transport/santé.  
- **Supervision continue** : SOC OT, SIEM, corrélation d’événements, détection en temps réel.  
- **Revue périodique des non‑conformités** : chaque écart doit être consigné, attribué, corrigé.  

---

## Exemple de registre des non‑conformités

| **Référence** | **Description**                       | **Gravité** | **Action corrective**           | **Responsable** | **Échéance** | **Statut** |
|---------------|---------------------------------------|-------------|---------------------------------|-----------------|--------------|------------|
| NC‑2025‑01    | Accès fournisseur sans MFA            | Majeure     | Mise en place MFA + bastion     | RSSI OT         | 30 j         | ✔ Corrigée |
| NC‑2025‑02    | Sauvegardes OT non testées            | Critique    | Test PRA + rapport validé       | Mainteneur OT   | 60 j         | En cours   |
| NC‑2025‑03    | Absence de matrice SL‑T vs SL‑A       | Majeure     | Création matrice + preuves FAT  | Intégrateur     | 45 j         | Ouverte    |

---

## Preuves d’audit attendues

- Rapports d’audit externe et interne.  
- Registres de non‑conformités avec actions correctives.  
- Logs SOC OT / SIEM démontrant la supervision continue.  
- KPI présentés en comité de direction.  
- PV de contrôles régulateurs et attestations de conformité.  

---

## KPI de conformité OT

- **% de non‑conformités corrigées dans les délais (< 60 j)**.  
- **Nb d’audits internes/externe réalisés par an**.  
- **Taux de conformité des accès distants MFA (%)**.  
- **% de PRA testés avec succès**.  
- **Délai moyen de traitement d’une non‑conformité**.  

---

## Retours d’expérience et cas concrets

- **Énergie** : un opérateur n’a pas corrigé dans les délais des non‑conformités critiques relevées en audit ANSSI. Résultat : suspension temporaire de l’autorisation d’exploitation.  
- **Banque (DORA)** : un établissement a dû prouver la traçabilité de ses non‑conformités à l’ABE (Autorité Bancaire Européenne). La création d’un registre formalisé a permis de satisfaire aux exigences.  
- **Pharma** : absence de reporting COMEX structuré. L’audit a révélé un décalage entre la réalité terrain et le discours de la direction. La mise en place de KPI OT standardisés a résolu le problème.  

---

## Impacts organisationnels et gouvernance

- Le **COMEX** engage sa responsabilité en cas de manquement grave (NIS2, DORA).  
- Le **RSSI OT** pilote la détection, le suivi et la correction des non‑conformités.  
- Les **intégrateurs/fournisseurs** doivent contractualiser la gestion des écarts (62443‑2‑4).  
- Les **auditeurs internes** doivent produire des rapports exploitables par les régulateurs.  

---

## Comparaisons utiles

- **ISO 27001** : prévoit audits et traitement des non‑conformités mais sans sanctions financières automatiques.  
- **NIST CSF** : insiste sur l’amélioration continue (RC.IM), sans cadre de sanctions.  
- **IEC 62443** : se distingue par sa granularité OT, mais les sanctions dépendent du cadre réglementaire sectoriel (NIS2, DORA, énergie, transport).  

---

## Conséquences opérationnelles pour le RSSI

Le RSSI doit :  
- Maintenir un registre des non‑conformités à jour.  
- Suivre les KPI de conformité et les présenter au COMEX.  
- Vérifier que les actions correctives sont réalisées dans les délais.  
- Préparer les preuves pour les audits externes et régulateurs.  
- Anticiper les sanctions en contractualisant les obligations avec intégrateurs et fournisseurs.  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant devra être capable de :  
- Identifier les sanctions possibles (IEC 62443, NIS2, GDPR, DORA).  
- Décrire les mécanismes de surveillance continue (audits, SOC OT, reporting).  
- Construire un registre des non‑conformités exploitable en audit.  
- Définir et suivre des KPI de conformité.  
- Anticiper les impacts organisationnels et contractuels.  

---

## Checklist RSSI

- [ ] Maintenir un registre des non‑conformités avec suivi des actions.  
- [ ] Définir et suivre des KPI OT de conformité.  
- [ ] Vérifier la présence de preuves d’audit (rapports, logs, PV).  
- [ ] Organiser le reporting COMEX régulier.  
- [ ] Anticiper les sanctions en contractualisant les exigences avec les fournisseurs.  
