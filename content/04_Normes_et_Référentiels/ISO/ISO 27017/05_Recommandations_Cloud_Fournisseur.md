# ISO/IEC 27017 – Recommandations Cloud pour le Fournisseur

## Responsabilités spécifiques du fournisseur

Dans un modèle de services Cloud, le fournisseur n’est pas seulement un prestataire technique : il est un **acteur clé de la sécurité**. L’ISO/IEC 27017 rappelle que les obligations du fournisseur incluent la mise en œuvre de mesures techniques robustes, la transparence vis-à-vis de ses clients et la capacité à fournir des preuves concrètes de conformité.  

Trop souvent, les incidents de sécurité ne proviennent pas uniquement d’une mauvaise configuration du client mais d’un manque de garanties ou de de visibilité offertes par le fournisseur. C’est pourquoi les recommandations ISO/IEC 27017 insistent sur la nécessité de cadrer le rôle du fournisseur via des exigences contractuelles et des audits indépendants.

---

## Obligations de sécurité côté fournisseur

### Preuves de certification  
Un fournisseur sérieux doit être en mesure de fournir des **preuves de certification tierces** telles que :  
- Une certification **ISO/IEC 27001** couvrant l’ensemble de ses infrastructures.  
- Des rapports **SOC 2 Type II** démontrant la conformité continue de ses pratiques.  
- En Europe et particulièrement en France, une conformité au référentiel **SecNumCloud** (ANSSI) lorsqu’il s’agit de services stratégiques.  

### Support du chiffrement BYOK (Bring Your Own Key)  
Le fournisseur doit offrir la possibilité au client de **gérer ses propres clés de chiffrement**, garantissant ainsi une meilleure maîtrise de la confidentialité. C’est un point essentiel pour les organisations soumises à des obligations réglementaires strictes (finance, santé, secteur public).

### Segmentation inter-tenant  
Étant donné que les environnements Cloud sont **multi-tenant**, le fournisseur doit garantir une **segmentation forte** entre les clients. Cela passe par des mécanismes de virtualisation sécurisée, des pare-feu logiques, une séparation stricte des bases de données et des contrôles réguliers de non-interférence.  

> [!warning]  
> **Points critiques côté fournisseur :**  
> – L’absence de certification indépendante crédible (SOC 2, ISO 27001, SecNumCloud).  
> – L’impossibilité d’utiliser ses propres clés de chiffrement.  
> – Des failles dans l’isolation multi-tenant pouvant provoquer des fuites de données entre clients.  

---

## Exemple concret d’audit fournisseur

Un **RSSI auditant un fournisseur Cloud** doit exiger :  
- La remise des rapports **SOC 2 Type II** récents (moins de 12 mois).  
- La présentation d’un certificat ISO/IEC 27001 valide et de son périmètre d’application.  
- La démonstration technique de la fonctionnalité **BYOK** (Bring Your Own Key).  
- La preuve que des tests de pénétration indépendants ont été menés sur les mécanismes de segmentation inter-tenant.  

---

## Cas pratiques & retours d’expérience

- **OVHcloud (2021 – incendie Strasbourg)** : cet incident a rappelé l’importance d’exiger des preuves concrètes de continuité et de résilience du fournisseur. Sans garanties contractuelles solides, certains clients n’ont pas pu récupérer leurs données.  
- **Affaire Capital One (2019)** : la faille exploitée venait d’une combinaison d’erreurs de configuration client et d’absence de transparence complète côté AWS. Cet exemple illustre la nécessité d’exiger des **rapports indépendants** et une communication claire des responsabilités.  

---

## Conseils opérationnels pour RSSI

- Exiger systématiquement les **preuves de certification** et les rapports d’audit indépendants.  
- Vérifier la présence et la faisabilité du **BYOK**.  
- Imposer des clauses de **segmentation forte inter-tenant** dans le contrat.  
- Documenter et archiver toutes les **preuves remises par le fournisseur** (rapports SOC 2, certificats ISO, attestations SecNumCloud).  

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Identifier les obligations de sécurité côté fournisseur Cloud.  
- Exiger et analyser des preuves de certification et d’audit (SOC 2, ISO/IEC 27001, SecNumCloud).  
- Vérifier la prise en charge du chiffrement BYOK.  
- Évaluer les mécanismes de segmentation inter-tenant et leurs preuves d’efficacité.  

---

## Checklist RSSI

- [ ] Vérifier que le fournisseur est certifié ISO/IEC 27001 et fournir les certificats.  
- [ ] Exiger un rapport SOC 2 Type II récent.  
- [ ] Confirmer la disponibilité du BYOK et tester son intégration.  
- [ ] Examiner les preuves d’isolation inter-tenant.  
- [ ] Archiver toutes les preuves et rapports remis par le fournisseur.  

---
