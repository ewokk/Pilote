# 06_Contrats_Responsabilites_ISO27018

Les contrats constituent le pivot de la mise en œuvre d’ISO/IEC 27018. Ils matérialisent les obligations du fournisseur Cloud (processor) envers le client (controller) et permettent d’assurer la conformité aux exigences du RGPD et aux bonnes pratiques de protection des PII.  
Un contrat conforme doit intégrer un **Data Processing Agreement (DPA)** détaillant les responsabilités, les mesures techniques et organisationnelles, ainsi que les garanties juridiques.

---

## Modèle de DPA (annexe à un contrat Cloud)

Un DPA doit contenir les clauses essentielles suivantes :

1. **Rôles et responsabilités**  
   - Le client est désigné comme **responsable de traitement (controller)**.  
   - Le fournisseur Cloud est désigné comme **sous-traitant (processor)**.  
   - Les sous-traitants secondaires (sub-processors) doivent être listés et autorisés explicitement.

2. **Finalités et types de PII**  
   - Description des traitements réalisés (ex. gestion RH, CRM, analytics).  
   - Catégories de données traitées (noms, adresses email, adresses IP, données financières, données de santé).  
   - Limitation stricte à ces finalités.

3. **Mesures techniques et organisationnelles (TOMs)**  
   - Sécurité physique, logique, accès administrateurs.  
   - Chiffrement au repos et en transit.  
   - MFA, gestion des clés (KMS/HSM, BYOK).  
   - Politiques de rétention et de suppression.  

4. **Sous-traitants autorisés & notification**  
   - Liste publique de sub-processors.  
   - Obligation de notification préalable en cas de changement.  
   - Droit du client de s’opposer ou de résilier en cas de désaccord.  

5. **Transferts internationaux & garanties**  
   - Application des [[Clauses contractuelles types (SCCs – Standard Contractual Clauses)]].  
   - Réalisation d’analyses d’impact transferts (TIAs).  
   - Engagement de transparence sur la localisation des datacenters.  

6. **Droits d’audit et de réversibilité**  
   - Droit d’audit du client (direct ou via tiers indépendant).  
   - Engagement de fournir toutes les preuves (rapports SOC 2, ISO 27018).  
   - Réversibilité : export complet des données en format lisible et suppression sécurisée en fin de contrat.  

---

## Encadré pratique

> [!tip]  
> Dans les contrats, préciser aussi les **SLA de sécurité et privacy** :  
> - Délais maximum de notification d’un incident PII (ex. 24h après découverte).  
> - Disponibilité garantie des logs d’audit.  
> - Support explicite du BYOK pour la gestion des clés.  
> - Possibilité d’export intégral et traçable des données à la demande.  

---

## Checklist d’examen contractuel

À utiliser par les équipes Achats, Juridique et Sécurité avant signature ou renouvellement d’un contrat Cloud :

- [ ] Les rôles controller/processor sont clairement définis.  
- [ ] Les finalités et types de PII sont listés et limités.  
- [ ] Les TOMs sont documentées et conformes (chiffrement, MFA, rétention).  
- [ ] Les sous-traitants autorisés sont listés et soumis à notification préalable.  
- [ ] Les transferts internationaux sont encadrés par SCCs et TIAs.  
- [ ] Un droit d’audit est garanti et contractuellement prévu.  
- [ ] La réversibilité des données est prévue (export + suppression sécurisée).  
- [ ] Les SLA incluent les délais de notification d’incidents et la disponibilité des logs.  

---

## Cas concret

En 2021, une entreprise française du secteur bancaire a renégocié son contrat SaaS CRM après un audit ISO 27018. Le contrat initial ne mentionnait pas la réversibilité des données ni les délais de notification en cas de fuite. Le nouveau DPA intègre désormais un SLA imposant 24h maximum pour notifier tout incident PII, un export intégral en format CSV/XML, et le support BYOK pour la gestion des clés de chiffrement. Cet exemple illustre comment ISO 27018 peut concrètement renforcer les contrats Cloud.

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Identifier les clauses essentielles d’un DPA conforme ISO 27018.  
- Exiger les SLA de sécurité et privacy dans les contrats Cloud.  
- Vérifier que les responsabilités controller/processor sont correctement définies.  
- Mettre en place une checklist contractuelle intégrant sécurité, conformité et réversibilité.  
