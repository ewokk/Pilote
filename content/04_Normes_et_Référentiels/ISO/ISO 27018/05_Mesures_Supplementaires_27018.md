# 05_Mesures_Supplementaires_27018

L’ISO/IEC 27018 impose des mesures supplémentaires spécifiques aux environnements Cloud publics pour encadrer le traitement des PII. Ces exigences complètent les contrôles généraux de l’[[ISO/IEC 27001 (ISMS – Information Security Management System)]] et de l’[[ISO/IEC 27002 (Mesures – Code of practice for information security controls)]], en introduisant des obligations adaptées aux relations **client (controller)** / **fournisseur (processor)**.  
Chaque mesure doit pouvoir être traduite en **mécanismes techniques et organisationnels vérifiables**.

---

## Consentement & finalité documentée

Le fournisseur ne peut traiter les PII que pour les finalités prévues au contrat.  
- **Implémentation Cloud :** registre des traitements fourni au client, DPA (Data Processing Agreement) annexé au contrat, clauses interdisant toute réutilisation non autorisée.  
- **Preuves attendues :** DPA signé, annexes contractuelles, registres exportables sur demande.  

**Exemple :** Google Cloud met à disposition un « Data Processing Amendment » (DPA) détaillant finalités et obligations de traitement.

---

## Séparation des clients

Les PII doivent être isolées entre clients afin d’éviter tout accès croisé.  
- **Implémentation Cloud :** isolation via tenants dédiés, VPC (Virtual Private Cloud) / VNet (Azure), séparation stricte des bases de données multi-tenant, contrôle renforcé des accès administrateurs côté fournisseur.  
- **Preuves attendues :** documentation de l’architecture multi-tenant, rapports d’audit internes, configurations de séparation réseau.  

**Exemple :** AWS propose des VPC distincts par client avec ACLs (Access Control Lists) et Security Groups pour garantir l’isolation.

---

## Traçabilité et audit

Le fournisseur doit garantir la traçabilité des actions liées aux PII.  
- **Implémentation Cloud :** audit logs activés (AWS CloudTrail, Azure Monitor, GCP Audit Logs), conservation définie (ex. 1 an), possibilité d’export vers un SIEM du client.  
- **Preuves attendues :** captures de configurations, exports de logs, rapports d’audit d’accès.  

**Exemple :** un RSSI peut connecter CloudTrail à Splunk pour analyser les accès aux PII et détecter des anomalies.

---

## Sous-traitants secondaires (sub-processors)

Tout recours à des sous-traitants doit être transparent et encadré.  
- **Implémentation Cloud :** publication d’une liste publique de sous-traitants, notification préalable au client en cas de changement, droit d’audit contractuel.  
- **Preuves attendues :** liste des sous-traitants publiée en ligne, notifications reçues, clauses contractuelles d’audit.  

**Exemple :** Microsoft publie régulièrement la liste de ses sub-processors O365 et notifie les clients avant tout ajout.

---

## Localisation et transferts internationaux

Les PII transférées hors UE doivent respecter les exigences du RGPD.  
- **Implémentation Cloud :** utilisation des SCCs (Standard Contractual Clauses), information client claire sur la localisation des données, réalisation de TIAs (Transfer Impact Assessments) pour évaluer les risques pays tiers.  
- **Preuves attendues :** clauses SCC intégrées au DPA, rapport TIA, documentation de la localisation des datacenters.  

**Exemple :** une entreprise européenne exige d’AWS Dublin un TIA validant que les transferts de journaux techniques vers les États-Unis respectent les garanties nécessaires.

---

## Tableau de synthèse

| Mesure                          | Implémentation Cloud                                   | Preuves attendues                         |
|---------------------------------|-------------------------------------------------------|-------------------------------------------|
| Consentement & finalité         | Registre traitements, DPA contractuel                 | DPA signé, annexes, exports de registre   |
| Séparation client               | Isolation tenant, VPC/VNet, contrôle admin            | Docs d’architecture, configs, rapports    |
| Traçabilité                     | Audit logs API, conservation/export                   | Exports de logs, captures configs         |
| Sous-traitants secondaires      | Liste publique, notification, droit d’audit           | Liste publiée, notifications, clauses     |
| Localisation & transferts       | SCCs, TIAs, info client sur datacenters               | SCC dans contrat, rapport TIA, docs site  |

---

## Cas concret

En 2020, l’autorité irlandaise de protection des données (DPC) a rappelé à un fournisseur SaaS qu’il devait notifier ses clients de tout changement de sous-traitant secondaire. L’absence de notification a été jugée contraire aux principes ISO 27018 et RGPD. Depuis, le fournisseur publie une liste actualisée de ses sub-processors et envoie un email systématique aux clients lors d’une mise à jour.

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Décrire les mesures supplémentaires imposées par ISO 27018.  
- Identifier les implémentations Cloud concrètes pour chaque mesure.  
- Vérifier les preuves attendues en audit (logs, DPA, SCC, registres).  
- Relier ces mesures aux obligations RGPD (transparence, sous-traitance, transferts).  

---

## Checklist RSSI

- [ ] Obtenir et archiver le DPA contractuel avec finalités explicites.  
- [ ] Vérifier l’isolation tenant/VPC et les contrôles d’accès admin.  
- [ ] Contrôler que les logs d’audit Cloud sont activés, conservés et exportables.  
- [ ] Suivre les notifications de changements de sous-traitants.  
- [ ] Vérifier la présence de SCCs et TIAs pour tout transfert hors UE.  
