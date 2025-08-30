# 03_Objectifs_27018

L’ISO/IEC 27018 poursuit plusieurs objectifs qui dépassent la simple énonciation de principes. Elle vise à rendre la protection des informations personnelles identifiables (PII) dans le Cloud **mesurable, vérifiable et auditable**. Chaque objectif doit se traduire par des livrables ou des résultats observables, permettant aux clients et auditeurs de juger de la conformité du fournisseur.

---

## Transparence du fournisseur

Un fournisseur Cloud conforme ISO 27018 doit être capable de démontrer une transparence totale sur la manière dont il traite les PII.  
Cela inclut :  
- Un **registre des traitements Cloud** explicitant la nature des PII traitées, leurs finalités, leur localisation et les sous-traitants impliqués.  
- Un **catalogue de mesures techniques et organisationnelles (TOMs – Technical and Organisational Measures)** mis à disposition des clients, couvrant la sécurité physique, logique, la gestion des accès et les plans de réponse aux incidents.  

**Exemple concret :** AWS publie régulièrement ses « Service Security Policies » et propose à ses clients des rapports d’audit tiers (SOC 2, ISO 27018) accessibles via AWS Artifact. Ces documents constituent des preuves tangibles de transparence.

---

## Renforcement du contrôle client

L’ISO 27018 vise également à **donner au client la maîtrise** des traitements qui concernent ses données personnelles.  
Cela implique que le fournisseur Cloud expose clairement :  
- Les **paramètres de sécurité configurables** : activation du [[MFA (Multi-Factor Authentication)]], durée de conservation des logs, chiffrement optionnel côté client.  
- Les **outils d’export et de réversibilité des données** permettant au client de récupérer l’intégralité des PII en cas de changement de fournisseur.  
- Les **journaux d’accès et d’administration** afin que le client puisse auditer en continu les traitements réalisés par le prestataire.  

**Exemple concret :** Microsoft 365 offre des « Customer Lockbox » permettant au client de valider explicitement toute intervention d’un technicien Microsoft sur ses données, renforçant ainsi le contrôle effectif du client sur les PII.

---

## Résultats vérifiables attendus

Un objectif ISO 27018 n’est atteint que si des **preuves d’audit** peuvent le démontrer.  
- **Pour la transparence fournisseur :** existence d’un registre à jour, publication régulière des TOMs, communication des sous-traitants et localisation des données.  
- **Pour le contrôle client :** disponibilité de fonctions de MFA, capacité de téléchargement/export complet des données, documentation claire sur la réversibilité, accès aux logs détaillés.  

Ces résultats doivent être **testés lors des audits** : un RSSI ou un DPO doit pouvoir vérifier que les fonctionnalités promises sont activées, que les registres sont complets et que les procédures contractuelles sont respectées.

---

## Cas concret

En 2021, une entreprise européenne a engagé un audit contractuel de son fournisseur SaaS RH. Bien que ce dernier affichait une conformité ISO 27018, l’audit a révélé l’absence d’outils d’export complets pour les PII. Le rapport d’audit a conclu que l’**objectif de contrôle client** n’était pas atteint. Suite à cette non-conformité, des clauses de réversibilité ont été ajoutées au contrat, illustrant que les objectifs ISO 27018 ne sont pas théoriques mais doivent se traduire par des mécanismes concrets.

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Relier les objectifs ISO 27018 à des résultats observables (registre, TOMs, MFA, logs, export).  
- Vérifier la transparence d’un fournisseur Cloud en analysant registres et rapports.  
- Contrôler que les outils de sécurité et de réversibilité sont effectivement accessibles au client.  
- Expliquer pourquoi un objectif non vérifiable ne peut pas être considéré comme atteint en audit.  

---

## Checklist RSSI

- [ ] Vérifier l’existence d’un registre de traitements Cloud fourni par le prestataire.  
- [ ] Demander le catalogue des TOMs mis à jour et les preuves associées (rapports, certifications).  
- [ ] Confirmer la disponibilité du MFA et autres paramètres de sécurité exposés au client.  
- [ ] Tester les mécanismes d’export et de réversibilité des données.  
- [ ] Vérifier la complétude et l’accessibilité des logs d’administration et d’accès.  
