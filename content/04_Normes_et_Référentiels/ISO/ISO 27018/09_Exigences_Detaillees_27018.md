# 09_Exigences_Detaillees_27018

L’ISO/IEC 27018 formalise des exigences spécifiques pour protéger les informations personnelles identifiables (PII) dans le Cloud.  
Ces exigences doivent être **actionnables** : chaque point doit être relié à une responsabilité (client/fournisseur), à une implémentation concrète (SaaS, IaaS, PaaS) et à des **preuves vérifiables** lors d’un audit.  

---

## Tableau détaillé des exigences ISO 27018

| Exigence 27018 | Partie (Client/Fournisseur) | Implémentation type (SaaS/IaaS/PaaS) | Preuves attendues |
|----------------|-----------------------------|---------------------------------------|-------------------|
| Consentement & finalité limitée | Client + Fournisseur | SaaS O365 : DPA précisant finalités RH ; AWS : contrat limitant usage S3 à stockage client | DPA signé, registres traitements, annexes contractuelles |
| Minimisation des PII | Fournisseur | Logs Azure Monitor masquant IP ; GCP Logging avec champs anonymisés | Configs masquage, guides techniques, captures |
| Limitation de conservation | Fournisseur | AWS S3 Lifecycle supprimant backups à 90j ; O365 retention policies (emails RH) | Export policies, captures portail, logs suppression |
| Sécurité (chiffrement repos/transit) | Fournisseur + Client | TLS 1.2/1.3 obligatoire ; Azure Key Vault BYOK ; AWS KMS ; GCP CMEK | Rapports d’audit, configs KMS/HSM, preuves BYOK |
| Journalisation & traçabilité | Fournisseur | AWS CloudTrail activé ; export vers SIEM ; O365 audit logs admin | Exports logs, configs SIEM, registres conservation |
| Accès administrateurs fournisseur | Fournisseur | Customer Lockbox (O365) ; AWS IAM Roles with Just-in-Time access | Rapports d’accès admin, captures approbations |
| Droits des personnes (RGPD) | Client + Fournisseur | O365 portail RGPD → extraction des données sur demande ; GCP Data Subject Requests API | Export de données sujet, journal réponses, délais respectés |
| Transparence sous-traitants | Fournisseur | Liste publique sub-processors (Google, MS) + notifications | Liste publiée, mails de notification, historique |
| Notification incident PII | Fournisseur | O365 Security & Compliance → rapport incident ; AWS GuardDuty alerts ; SLA notification 72h | Registre violations, rapports incidents, formulaires CNIL |
| Réversibilité & portabilité | Fournisseur | Export PST O365 ; AWS Data Export ; GCP BigQuery Export | Procédure réversibilité, preuve suppression, captures |
| Transferts internationaux | Fournisseur | SCCs intégrées ; TIA pour transferts US ; info localisation datacenters | Clauses SCC, rapport TIA, docs localisation |
| Confidentialité communications | Fournisseur | TLS obligatoire ; VPN IPsec optionnel ; Private Link Azure/AWS | Tests TLS, configs VPN, rapports sécurité réseau |
| Usage interdit marketing | Fournisseur | Clause interdisant l’usage des PII à des fins commerciales | Clause DPA, preuves contractuelles |
| Suppression sécurisée en fin de contrat | Fournisseur | Wiping certifié NIST 800-88 ; preuve suppression VM/données | Attestations destruction, rapports effacement |
| Auditabilité & certifications | Fournisseur | SOC2, ISO 27018 rapport disponibles via portails (AWS Artifact, Azure Trust Center) | Certificats, rapports, preuves téléchargeables |

---

## Cas sectoriels

- **SaaS RH (O365, Workday)** :  
  Export complet des données salariés lors de la fin de contrat, masquage des IP dans logs d’accès RH.  
  → Preuves : export PST, captures des policies de masquage.

- **IaaS analytique (AWS S3 + Athena)** :  
  Lifecycle policies appliquées sur S3 pour suppression de datasets sensibles après 30 jours.  
  → Preuves : export policy JSON, logs suppression automatisée.

- **PaaS applicatif (Azure App Service)** :  
  Journalisation des API avec masquage des tokens utilisateurs, activation TLS obligatoire.  
  → Preuves : configuration TLS, exports logs anonymisés.

---

## Cas concret

En 2022, une société e-commerce européenne a subi un audit ISO 27018. L’auditeur a demandé :  
- La **preuve de suppression sécurisée** d’anciens paniers clients hébergés sur AWS.  
- L’**export des registres de sous-traitants** Azure.  
- La **configuration TLS** de ses microservices PaaS.  

Le fournisseur a pu fournir des exports S3 Lifecycle, un PDF listant les sub-processors Azure, et un test TLS Qualys. L’audit a conclu à une conformité démontrée.  

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Relier chaque exigence ISO 27018 à une responsabilité précise.  
- Identifier l’implémentation type dans les environnements SaaS/IaaS/PaaS.  
- Exiger les preuves attendues lors d’un audit (exports, rapports, captures).  
- Comprendre comment vérifier la conformité de bout en bout (contrat → technique → preuves).  

---

## Checklist RSSI

- [ ] Vérifier que le DPA intègre finalités, transferts, réversibilité et droits d’audit.  
- [ ] Contrôler que la minimisation et la rétention sont configurées (policies activées).  
- [ ] Vérifier le chiffrement repos/transit et l’usage BYOK.  
- [ ] Contrôler la gestion des accès administrateurs du fournisseur.  
- [ ] Exiger la liste des sub-processors et les notifications.  
- [ ] Maintenir un registre des violations PII avec SLA T+72h.  
- [ ] Tester la réversibilité des données en export complet.  
- [ ] Vérifier suppression sécurisée des données en fin de contrat.  
- [ ] Télécharger les rapports SOC2/ISO 27018 via les portails Cloud.  
