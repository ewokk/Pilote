# 12_Audit_Conformite_27018

L’audit de conformité ISO/IEC 27018 vise à vérifier que les fournisseurs Cloud mettent effectivement en œuvre les mesures promises dans les DPA et catalogues de TOMs.  
Pour un RSSI, un DPO ou un auditeur externe, l’enjeu est de s’appuyer sur des **checklists thématiques**, de demander des **preuves concrètes**, et de mettre en place une **stratégie d’échantillonnage** adaptée.

---

## Checklist d’audit par thème

### Contrats & gouvernance
- [ ] Vérifier la présence d’un DPA signé couvrant : finalités, transferts, sous-traitants, réversibilité.  
- [ ] Examiner les clauses SLA : délais de notification incidents PII, disponibilité logs, export intégral.  
- [ ] Contrôler la liste des sous-traitants et le processus de notification.  

### TOMs (Technical and Organisational Measures)
- [ ] Confirmer que le chiffrement est actif (repos et transit).  
- [ ] Vérifier que MFA est activé pour les comptes administrateurs.  
- [ ] Examiner les politiques de rétention automatisées (O365, AWS S3 Lifecycle).  

### Logs & traçabilité
- [ ] Vérifier l’activation des logs d’accès et d’administration (O365, CloudTrail, Azure Monitor).  
- [ ] Confirmer la conservation minimale (ex. 1 an) et l’export vers un SIEM interne.  
- [ ] Examiner les rapports d’accès administrateurs (Customer Lockbox, IAM Just-in-Time).  

### Transferts internationaux
- [ ] Vérifier la présence de SCCs dans le DPA.  
- [ ] Examiner les TIAs réalisés pour les transferts hors UE.  
- [ ] Confirmer la transparence sur la localisation des datacenters.  

### Sous-traitants
- [ ] Vérifier la liste publique de sub-processors.  
- [ ] Contrôler la réception des notifications de changement.  
- [ ] Examiner les preuves d’évaluations de sous-traitants secondaires.  

---

## Échantillons de preuves à demander

- **Contrats** : exemplaire signé du DPA, annexes, SLA sécurité.  
- **Configurations techniques** : captures d’écran des policies de rétention (O365, AWS S3), activation MFA, paramétrage KMS/HSM.  
- **Logs** : exports CloudTrail/Azure Monitor, journaux d’accès O365, rapports SIEM.  
- **Incidents** : registre interne des violations PII, formulaires de notification CNIL.  
- **Rapports indépendants** : certificats ISO 27018/27001, rapports SOC2 Type II, attestations PCI DSS.  

---

## Stratégie d’échantillonnage

Un audit efficace doit aller au-delà des déclarations générales.  
- **Tenants multiples** : si l’organisation utilise plusieurs tenants (par ex. O365 Europe + US), vérifier chaque tenant séparément.  
- **Régions Cloud** : exiger des preuves par région (AWS eu-west-1, us-east-1) pour confirmer la localisation des données.  
- **Environnements** : inclure dev, test et prod dans le périmètre, car des PII peuvent se retrouver dans des environnements non protégés.  
- **Échantillonnage temporel** : examiner plusieurs périodes (logs des 3 derniers mois, incidents des 12 derniers mois) pour vérifier la constance.  

---

## Cas concret

En 2022, un audit ISO 27018 chez un fournisseur SaaS a révélé que si les logs étaient bien activés en production, ils étaient désactivés en environnement de test. L’audit a conclu à une non-conformité car des PII fictives (utilisées pour tests) étaient exposées sans traçabilité. Cette situation illustre l’importance d’un échantillonnage couvrant dev/prod.

---

## Méthodologie et critères d’audit

Un audit ISO 27018 doit suivre une approche structurée inspirée de l’[[ISO 19011 (Guidelines for auditing management systems)]] :

1. **Préparation** : définir le périmètre (tenants, régions, environnements), collecter les DPA et registres.  
2. **Collecte de preuves** : obtenir documents contractuels, configurations techniques, exports logs, rapports incidents.  
3. **Entretiens** : interroger RSSI, DPO, responsables Cloud sur les processus (ex. notification 72h).  
4. **Tests** : vérifier la réversibilité par un export réel, analyser un échantillon de logs, tester l’activation MFA.  
5. **Rapport** : documenter constats, preuves, non-conformités et recommandations.  
6. **Plan d’actions** : définir actions correctives, responsables, échéances.

### Critères de conformité

- **Conforme** : toutes les exigences ISO 27018 vérifiées avec preuves solides (DPA signé, exports logs, captures configs).  
- **Partiellement conforme** : exigences respectées mais preuves incomplètes ou lacunaires (ex. pas de logs en dev/test).  
- **Non conforme** : exigences non respectées ou absence de preuves (ex. pas de SCC pour transferts hors UE).  

Cette grille permet de qualifier objectivement le niveau de conformité et de prioriser les actions correctives.

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Conduire un audit ISO 27018 avec une checklist par thème.  
- Identifier les preuves techniques, contractuelles et organisationnelles à demander.  
- Mettre en œuvre une stratégie d’échantillonnage multi-tenant, multi-régions, multi-environnements.  
- Appliquer une méthodologie d’audit rigoureuse et juger objectivement la conformité.  

---

## Checklist RSSI

- [ ] Centraliser tous les DPA signés et vérifier leur complétude.  
- [ ] Collecter les preuves techniques (policies, MFA, chiffrement).  
- [ ] Exporter et analyser les logs récents (CloudTrail, O365, Azure Monitor).  
- [ ] Vérifier la conformité des transferts hors UE (SCCs, TIAs).  
- [ ] Suivre les notifications et évaluations des sous-traitants.  
- [ ] Intégrer dev/test/prod dans le périmètre d’audit.  
- [ ] Évaluer la conformité selon critères : conforme / partiellement conforme / non conforme.  
