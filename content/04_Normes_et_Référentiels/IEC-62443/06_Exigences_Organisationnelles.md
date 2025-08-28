# 06_Exigences_Organisationnelles

La série **IEC 62443‑2‑1 et 62443‑2‑4** définit les exigences organisationnelles et procédurales de cybersécurité OT. Contrairement aux exigences techniques, il s’agit ici d’intégrer la cybersécurité dans la gouvernance quotidienne : politiques, procédures, processus de gestion et contrôles périodiques.  

L’objectif est de garantir que les mesures définies dans les chapitres précédents soient réellement appliquées, suivies et auditées.  

---

## Politiques OT à mettre en place

Une organisation conforme à la 62443 doit disposer de politiques OT documentées et appliquées sur :  

- **Comptes et habilitations** : création, suppression, revue périodique, séparation des comptes admin/ops.  
- **Accès distants** : usage obligatoire d’un bastion/jump server, MFA, enregistrement des sessions.  
- **Gestion des changements (Change management)** : toute modification OT documentée, validée, testée avant mise en prod.  
- **Patching et mises à jour** : calendrier défini, validation en environnement de pré‑production, tests FAT/SAT.  
- **Vendor access (accès fournisseurs)** : autorisation limitée dans le temps, supervision obligatoire, contractualisation des exigences (62443‑2‑4).  
- **Sauvegardes et restaurations** : stratégie 3‑2‑1, tests périodiques, documentation PRA/PCA OT.  
- **Revues périodiques** : audits réguliers des comptes, correctifs, configurations et plans de continuité.  

---

## Modèles de procédures et outils opérationnels

### 1. Checklist de procédure d’accès distant

- [ ] Demande formelle d’accès (formulaire signé).  
- [ ] Validation par le Responsable OT et le RSSI OT.  
- [ ] Accès via bastion/jump server uniquement.  
- [ ] MFA activé et obligatoire.  
- [ ] Session enregistrée et tracée.  
- [ ] Débrief post‑intervention et clôture des droits.  

---

### 2. Exemple de matrice d’habilitation

| **Rôle**             | **Accès SCADA** | **Accès PLC** | **Accès Historian** | **Accès ERP** | **Commentaires** |
|-----------------------|-----------------|---------------|----------------------|---------------|------------------|
| Opérateur             | Lecture         | Aucun         | Lecture              | Aucun         | Limité aux besoins de supervision |
| Mainteneur interne    | Lecture/Écriture | Maintenance   | Lecture              | Aucun         | Accès validé sur demande planifiée |
| Fournisseur externe   | Aucun           | Maintenance   | Aucun                | Aucun         | Accès via bastion + MFA, limité dans le temps |
| Responsable OT        | Lecture         | Lecture       | Lecture              | Lecture       | Supervision générale, pas de droits admin |
| Administrateur OT     | Lecture/Écriture | Écriture totale | Lecture/Écriture    | Lecture       | Accès restreint, traçabilité complète |

---

### 3. Formulaire de demande d’accès OT (exemple simplifié)

- **Nom / Société** : …  
- **Rôle** : …  
- **Système ciblé** : … (SCADA / Historian / PLC / Autre)  
- **Durée de l’accès** : …  
- **Motif** : …  
- **Validation Responsable OT** : ✔/✖  
- **Validation RSSI OT** : ✔/✖  
- **Compte temporaire créé le** : …  
- **Compte supprimé le** : …  

---

### 4. Exemple de calendrier de patching

| **Semaine** | **Activité prévue**                 | **Fenêtre de maintenance** | **Responsable** |
|-------------|-------------------------------------|-----------------------------|-----------------|
| S1          | Mises à jour SCADA (correctifs OS) | Samedi 02h‑06h              | Intégrateur OT  |
| S2          | Patching PLC (firmware)            | Dimanche 04h‑08h            | Mainteneur OT   |
| S3          | MAJ antivirus/EDR Historian        | Vendredi 22h‑02h            | RSSI OT         |
| S4          | Revue globale des patchs           | Samedi 01h‑05h              | Comité IT/OT    |

---

## Retours d’expérience et cas concrets

- **Énergie** : un opérateur n’avait pas de calendrier patching OT. Les correctifs Windows n’étaient jamais appliqués aux serveurs SCADA. Une exploitation d’EternalBlue a paralysé le réseau. La mise en place d’une politique de patching planifiée (fenêtres de maintenance validées) a permis de corriger la faille et d’éviter une récidive.  
- **Pharmaceutique** : absence de revue périodique des comptes. Des identifiants d’un fournisseur externe restaient actifs après la fin du contrat. Cette faille a été détectée en audit et corrigée par l’instauration d’une matrice d’habilitation et de revues trimestrielles.  
- **Transport** : un prestataire a eu un accès VPN illimité au réseau OT. Cet accès non supervisé a permis l’introduction d’un ransomware. Depuis, la politique impose MFA + bastion et session enregistrée pour tout accès fournisseur.  

---

## Preuves d’audit attendues

- Politiques OT signées et diffusées.  
- Registres des comptes et rapports de revue périodique.  
- Formulaires de demandes d’accès archivés.  
- Logs bastion/jump server avec enregistrement des sessions.  
- PV de comités Change management.  
- Calendrier patching validé et rapport de mise en œuvre.  
- Rapports de tests de restauration PRA/PCA OT.  

---

## Impacts organisationnels et gouvernance

- Le **COMEX** doit valider et financer la mise en place de politiques OT obligatoires.  
- Le **RSSI OT** coordonne les procédures, contrôle leur application et assure le reporting.  
- Les **intégrateurs et fournisseurs** doivent accepter contractuellement les processus définis (62443‑2‑4).  
- Les **opérateurs** doivent être formés à l’application des politiques et procédures OT.  

---

## Comparaisons utiles

- **ISO 27001** : couvre des politiques similaires mais avec une approche générique, non spécifique OT.  
- **ITIL** : fournit des processus de Change/Incident management proches, mais non adaptés aux contraintes industrielles.  
- **NIS2** : impose la mise en place de procédures documentées et auditées dans les environnements critiques.  

---

## Conséquences opérationnelles pour le RSSI

Le RSSI doit :  
- Vérifier que toutes les politiques OT sont documentées, validées et appliquées.  
- S’assurer que les formulaires, matrices et calendriers sont conservés comme preuves d’audit.  
- Organiser des revues périodiques (comptes, patchs, PRA) et présenter les résultats au COMEX.  
- Intégrer ces exigences dans les contrats fournisseurs/intégrateurs.  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant devra être capable de :  
- Identifier les politiques OT à mettre en œuvre selon la 62443.  
- Utiliser des modèles opérationnels (checklists, matrices, formulaires, calendriers).  
- Préparer les preuves d’audit nécessaires.  
- Intégrer les processus OT dans la gouvernance de cybersécurité globale.  

---

## Checklist RSSI

- [ ] Vérifier l’existence de politiques OT formelles (comptes, accès, patchs, vendor access).  
- [ ] Contrôler que des checklists, matrices et formulaires sont utilisés et archivés.  
- [ ] Auditer régulièrement l’application des procédures OT.  
- [ ] Vérifier que le calendrier patching est respecté.  
- [ ] Présenter les résultats de revue au COMEX et intégrer les actions dans le plan directeur SSI.  
