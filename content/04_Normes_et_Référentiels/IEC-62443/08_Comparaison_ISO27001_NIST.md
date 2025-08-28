# 08_Comparaison_ISO27001_NIST

L’IEC 62443 est souvent utilisée en complément d’autres cadres internationaux tels que **l’ISO/IEC 27001 (Annexe A:2022)** et le **NIST Cybersecurity Framework (CSF v2.0)**. Pour les RSSI et auditeurs, disposer d’un **mapping clair** entre ces référentiels permet d’éviter les redondances, de démontrer la conformité simultanée et de parler un langage commun entre IT et OT.  

---

## Tableau de correspondance FR 62443 ↔ ISO 27001 Annexe A ↔ NIST CSF

| **FR IEC 62443** | **ISO 27001:2022 (Annexe A)** | **NIST CSF v2.0** |
|------------------|--------------------------------|-------------------|
| **IAC / UC** (Identification, Authentification, Contrôle d’usage) | A.5.15 (Gestion des identités), A.5.16 (Authentification), A.8.2 (Gestion des privilèges) | PR.AC (Identity Management, Authentication and Access Control) |
| **SI** (System Integrity) | A.8.8 (Sécurité des systèmes), A.8.9 (Protection contre le code malveillant) | PR.DS (Data Security), PR.IP (Protective Technology) |
| **DC** (Data Confidentiality) | A.8.24 (Cryptographie) | PR.DS (Data Security) |
| **RDF** (Restricted Data Flow) | A.8.20 (Segmentation réseau), A.8.21 (Filtrage réseau) | PR.AC (Access Control), PR.PT (Protective Technology) |
| **TRE** (Timely Response to Events) | A.8.16 (Journalisation), A.8.15 (Surveillance et détection) | DE.AE (Anomalies & Events), RS.AN (Analysis) |
| **RA** (Resource Availability) | A.5.29 (Plan de continuité), A.5.30 (Tests PRA/PCA) | RC.IM (Improvements), RC.RP (Recovery Planning) |

---

## Retours d’expérience et cas concrets

- **Audit croisé OT/IT** : un industriel de l’énergie a dû démontrer la conformité ISO 27001 pour son siège IT et 62443 pour ses sites OT. Le mapping FR ↔ ISO ↔ NIST a permis de montrer que les contrôles sur l’authentification (IAC/UC) et la segmentation (RDF) étaient communs, évitant de dupliquer les efforts.  
- **Banque/finance** : dans le cadre du **Digital Operational Resilience Act (DORA)**, les auditeurs ont exigé une cohérence entre ISO 27001 et NIST CSF. L’utilisation d’une matrice FR 62443 a aidé à aligner la sécurité OT des salles serveurs avec la gouvernance IT.  

---

## Preuves d’audit attendues

- Matrice de correspondance FR 62443 ↔ ISO 27001 ↔ NIST CSF.  
- Rapports d’audit montrant les exigences couvertes par plusieurs référentiels.  
- Tableaux croisés utilisés lors des comités de gouvernance.  
- PV de validation COMEX confirmant la stratégie d’alignement.  

---

## Impacts organisationnels et gouvernance

- Le **COMEX** comprend mieux la valeur ajoutée d’une démarche 62443 lorsqu’elle est reliée aux référentiels déjà connus (ISO/NIST).  
- Le **RSSI OT** et le **RSSI IT** disposent d’un langage commun pour justifier les investissements.  
- Les **auditeurs** peuvent réduire les efforts en auditant simultanément plusieurs référentiels grâce au mapping.  
- Les **fournisseurs et intégrateurs** doivent se conformer aux exigences croisées lorsqu’ils interviennent dans des environnements hybrides IT/OT.  

---

## Comparaisons utiles

- **ISO 27001** : SMSI global, couvre la gouvernance IT/OT mais sans spécificité industrielle.  
- **NIST CSF** : cadre de maturité orienté fonctions (Identify, Protect, Detect, Respond, Recover).  
- **IEC 62443** : se distingue par son approche OT granulaire (zones, conduits, SL) qui complète les deux autres.  

---

## Conséquences opérationnelles pour le RSSI

Le RSSI doit :  
- Construire et maintenir une **matrice FR ↔ ISO ↔ NIST** adaptée à son organisation.  
- Vérifier que les audits ISO/NIST incluent bien les zones OT.  
- Utiliser le mapping pour préparer les revues de conformité (NIS2, DORA, régulateurs).  
- Présenter au COMEX les synergies pour réduire les coûts de conformité.  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant devra être capable de :  
- Expliquer les recouvrements entre IEC 62443, ISO 27001 et NIST CSF.  
- Utiliser un tableau de correspondance pour éviter la duplication des efforts.  
- Préparer les preuves d’audit croisé.  
- Conseiller le COMEX sur la stratégie d’alignement réglementaire.  

---

## Checklist RSSI

- [ ] Vérifier l’existence d’une matrice FR ↔ ISO ↔ NIST.  
- [ ] Intégrer le mapping dans les audits annuels.  
- [ ] Contrôler que les zones OT sont couvertes par ISO/NIST.  
- [ ] Présenter la convergence des normes au COMEX.  
- [ ] Mettre à jour le tableau en cas d’évolution des normes (ISO 27001:2022, NIST CSF 2.0).  
