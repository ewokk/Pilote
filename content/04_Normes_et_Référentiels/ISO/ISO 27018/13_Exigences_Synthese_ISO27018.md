# 13_Exigences_Synthese_ISO27018

Cette synthèse regroupe les principales exigences d’ISO/IEC 27018 sous une forme **opérationnelle et imprimable**, directement exploitable par les RSSI, DPO et juristes. Elle permet de savoir **qui fait quoi**, **quelles preuves** collecter, **avec quels outils** et **à quelle échéance**.

---

## Tableau opérationnel des exigences (prêt à imprimer)

| Exigence | Côté | Responsable | Preuves | Outils | Échéance |
|----------|------|-------------|---------|--------|----------|
| Consentement & finalité | Client + Fournisseur | DPO + RSSI | DPA signé, registre des traitements | DPA, registre CNIL, annexes contractuelles | À la signature / mise à jour |
| Minimisation | Fournisseur | Admin Cloud | Configs de masquage, logs tronqués | Azure Monitor, GCP Logging | Continu (surveillance logs) |
| Limitation de conservation | Fournisseur | Admin Cloud + RSSI | Export des policies de rétention | Microsoft 365 Retention, AWS S3 Lifecycle, GCP Object Lifecycle | Revue annuelle |
| Sécurité (repos/transit) | Fournisseur + Client | RSSI | Paramétrage KMS/HSM, BYOK, preuves TLS | AWS KMS, Azure Key Vault, GCP CMEK, tests TLS | Continu |
| Journalisation & traçabilité | Fournisseur | Admin Cloud | Exports de logs, config SIEM, conservation | AWS CloudTrail, Azure Monitor, O365 Audit, SIEM (Splunk/QRadar) | Mensuel |
| Accès administrateurs fournisseur | Fournisseur | Opérations fournisseur + RSSI client | Rapports d’accès admin, approbations | O365 Customer Lockbox, IAM JIT/Privileged Access | Continu |
| Droits des personnes | Client + Fournisseur | DPO | Exports DSR / réponses sujet | O365 GDPR Portal, GCP DSR API | À la demande |
| Transparence sous-traitants | Fournisseur | Juridique + RSSI | Liste publique, notifications reçues | Portails MS/Google/AWS, mailing notifications | À chaque mise à jour |
| Notification incidents PII | Fournisseur | RSSI + DPO | Registre violations, formulaires, post-mortem | O365 Compliance Center, GuardDuty, Service Health | T+72h max |
| Réversibilité & portabilité | Fournisseur | Admin Cloud + RSSI | Export complet + preuve de suppression | O365 Export PST, AWS Data Export, BigQuery Export | Fin de contrat |
| Transferts internationaux | Fournisseur | Juridique + DPO | SCCs signées, TIA, localisation DC | Clauses SCC, TIA, docs datacenter | À la signature & à chaque changement |
| Suppression sécurisée | Fournisseur | Opérations fournisseur | Attestations d’effacement | Procédures NIST 800-88 / outils de wiping | Fin de contrat |
| Auditabilité & certifications | Fournisseur | RSSI | Certificats ISO 27018/27001, rapports SOC2 | AWS Artifact, Azure Trust Center, Compliance Manager | Annuel |

---

> [!tip]
> Imprime ce tableau et utilise-le comme **grille de revue fournisseur** : une ligne par exigence, coche les preuves présentes et note les écarts à corriger.

---

## Annexe (optionnelle) — Version enrichie pour le suivi continu

Cette variante ajoute des colonnes **RGPD** et **critères de passage**, ainsi que le **statut** et un **lien/emplacement de la preuve** (chemin Obsidian, URL portail).

| Exigence | Réf. RGPD | Critère de passage (audit) | Statut | Lien / Emplacement de la preuve |
|----------|-----------|----------------------------|--------|----------------------------------|
| DPA & finalités | Art. 28 | DPA signé + finalités limitées et cohérentes | ☐ / ☑ | `Vault/Contrats/DPA_fournisseur_X.pdf` |
| Rétention | Art. 5(1)(e) | Policy active + export des règles + logs de purge | ☐ / ☑ | Capture O365 / Export S3 Lifecycle |
| Chiffrement & clés | Art. 32 | Chiffrement repos/transit + KMS/HSM/BYOK configuré | ☐ / ☑ | Portail KMS / Key Vault (capture) |
| Logs & traçabilité | Art. 5(2) / 24 | Logs admin & accès activés, conservation ≥ 12 mois, export SIEM | ☐ / ☑ | Export CloudTrail / Azure Monitor |
| Transferts | Art. 44–49 | SCCs signées + TIA disponible + info localisation | ☐ / ☑ | Dossier juridique / Portail fournisseur |
| Incidents PII | Art. 33/34 | Registre violations + délai T+72h respecté | ☐ / ☑ | Registre incidents / Formulaires |
| Sous-traitants | Art. 28(2) | Liste publique + notifications reçues & archivées | ☐ / ☑ | Emails & page sub-processors |

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- **Piloter** la conformité ISO 27018 via un tableau imprimable et exploitable.  
- **Attribuer** clairement les responsabilités (client/fournisseur).  
- **Collecter** et **archiver** les preuves attendues au bon endroit.  
- **Planifier** les revues selon des échéances réalistes (mensuel, annuel, fin de contrat).

---

## Checklist RSSI

- [ ] Compléter le tableau opérationnel et l’archiver dans le vault.  
- [ ] Associer un **lien direct vers chaque preuve** (portail/API ou chemin Obsidian).  
- [ ] Mettre à jour le **statut** à chaque revue (conforme / partiel / non).  
- [ ] Programmer les revues (mensuelles/annuelles) dans le calendrier d’audit.  
