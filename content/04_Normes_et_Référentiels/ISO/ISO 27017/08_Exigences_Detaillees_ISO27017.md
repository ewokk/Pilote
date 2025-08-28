# ISO/IEC 27017 – Exigences détaillées


## Importance des exigences détaillées

L’ISO/IEC 27017 traduit les recommandations de l’ISO/IEC 27002 dans un **contexte Cloud**. Elle distingue les **responsabilités du client** et celles du **fournisseur**, afin d’éviter toute ambiguïté contractuelle et opérationnelle. Chaque exigence doit être mise en œuvre avec des preuves tangibles pour les audits ISO/IEC 27001, en cohérence avec ISO/IEC 27018 et les obligations de NIS2.  

---

## Exigences côté Client (exemple SaaS – Office 365)

Un client utilisant un service SaaS comme **Microsoft Office 365** conserve un rôle actif dans la sécurité, même si l’infrastructure est gérée par le fournisseur.  

**Exigences clés** :  
- **Authentification multifacteur (MFA)** obligatoire pour tous les comptes, en particulier les administrateurs.  
- **Logs et supervision** : activer l’**Azure AD Sign-in logs** et les centraliser dans un SIEM (ex. Sentinel).  
- **Gestion des accès** : appliquer le principe du moindre privilège, revoir régulièrement les droits et supprimer les comptes dormants.  
- **Exit plan** : planifier la récupération des mails, documents SharePoint et Teams en cas de migration vers un autre fournisseur.  

**Preuves attendues** : captures de configuration MFA, exports de journaux (conservés ≥ 12 mois), rapports d’audit Azure AD, clauses contractuelles de réversibilité testées au moins une fois par an.  

---

## Exigences côté Fournisseur (exemple IaaS – AWS EC2)

Un fournisseur offrant de l’**IaaS** comme AWS (EC2, S3, VPC) doit garantir un socle robuste sur lequel le client peut bâtir son environnement.  

**Exigences clés** :  
- **Isolation tenant** : garantir l’isolation réseau entre clients via VPC et hyperviseur sécurisé.  
- **Disponibilité** : assurer une redondance multi-AZ (Availability Zones) avec SLA documenté.  
- **Chiffrement du stockage** : activer par défaut le chiffrement des volumes EBS et des buckets S3.  
- **Journalisation** : fournir des journaux CloudTrail et VPC Flow Logs accessibles et exploitables par le client.  

**Preuves attendues** : rapports de segmentation inter-tenant, SLA garantissant 99,9 % de disponibilité, preuves de chiffrement activé par défaut, exports de journaux CloudTrail.  

---

## Exigences côté Fournisseur PaaS (exemple Google Cloud App Engine)

Le modèle **PaaS (Platform as a Service)** implique que le fournisseur gère davantage de couches (OS, middleware), tandis que le client se concentre sur l’application.  

**Exigences clés** :  
- **Mises à jour de sécurité automatisées** : le fournisseur doit garantir patching continu.  
- **Journalisation applicative** : fournir au client des logs centralisés (ex. Google Cloud Logging).  
- **Portabilité** : permettre au client de migrer son application vers un autre environnement PaaS.  

**Preuves attendues** : documentation du cycle de patching, exports de journaux applicatifs, tests de migration vers un autre environnement.  

---

## Tableau comparatif synthétique

| Modèle | Exemple | Exigences clés | Preuves attendues |
|--------|---------|----------------|-------------------|
| **SaaS** | Office 365 | MFA, logs AD, gestion des accès, exit plan | Configurations MFA, journaux AD ≥ 12 mois, rapports audit, clauses réversibilité |
| **PaaS** | Google App Engine | Patchs auto, logs applicatifs, portabilité | Documentation patching, exports journaux, tests migration |
| **IaaS** | AWS EC2 | Isolation tenant, disponibilité, chiffrement storage, journaux réseau | Rapports segmentation, SLA 99,9 %, preuves chiffrement, logs CloudTrail |

---

## Cas pratiques & retours d’expérience

- **Office 365 (Banque européenne, 2020)** : un audit a révélé que le MFA n’était pas activé sur 30 % des comptes administrateurs. Non-conformité ISO/IEC 27017 → plan correctif imposant MFA obligatoire.  
- **AWS EC2 (PME SaaS française, 2021)** : une attaque via mauvaise configuration VPC a révélé l’absence de preuve d’isolation tenant. Non-conformité ISO/IEC 27017.  
- **Google App Engine (Start-up, 2019)** : un audit RGPD a souligné l’absence de plan de migration documenté, compromettant la réversibilité exigée par l’ISO/IEC 27017 et l’ISO/IEC 27018.  

---

## Conseils opérationnels pour RSSI

- Toujours distinguer **responsabilités client vs fournisseur** dans les contrats.  
- Documenter et tester régulièrement MFA, logs, chiffrement et exit plan.  
- Vérifier les preuves fournies par le fournisseur (certifications, SLA, rapports).  
- Exiger une durée de **conservation des logs ≥ 12 mois** pour alignement RGPD et NIS2.  
- Intégrer SaaS, PaaS et IaaS dans la même matrice de responsabilités.  

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Expliquer les différences d’exigences entre SaaS, PaaS et IaaS.  
- Identifier les preuves d’audit attendues pour chaque modèle.  
- Relier ISO/IEC 27017 aux obligations de l’ISO/IEC 27018 et de la directive NIS2.  
- Préparer un plan de conformité concret avec cas pratiques.  

---

## Checklist RSSI

- [ ] Vérifier que le MFA est activé sur tous les comptes SaaS.  
- [ ] Centraliser les logs Cloud dans un SIEM avec conservation ≥ 12 mois.  
- [ ] Confirmer l’existence d’un exit plan documenté et testé.  
- [ ] Exiger du fournisseur IaaS des preuves d’isolation tenant et de chiffrement par défaut.  
- [ ] Vérifier les SLA de disponibilité (IaaS, PaaS).  
- [ ] Examiner la documentation de patching PaaS et les preuves de migration.  

---
