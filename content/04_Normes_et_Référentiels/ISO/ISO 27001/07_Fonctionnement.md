# Clause 8 – Fonctionnement

## 8.1 Planification et contrôle opérationnels

La mise en œuvre opérationnelle du SMSI doit être planifiée et contrôlée. Cela signifie que les procédures de sécurité doivent être intégrées dans les processus métiers et IT. Les contrôles documentés doivent couvrir la gestion des accès, les sauvegardes, le patch management, et la gestion des incidents.  

Par exemple, un cycle de patching doit être planifié (hebdomadaire ou mensuel), contrôlé par des indicateurs de conformité, et documenté pour prouver aux auditeurs que les systèmes critiques sont protégés. De même, les sauvegardes doivent être testées régulièrement et inclure des restaurations de preuve.  

> [!warning]  
> Erreur fréquente : se limiter à rédiger des procédures sans les appliquer. Les auditeurs exigent des preuves (tickets, journaux, rapports d’incidents).

---

## 8.2 Appréciation des risques de sécurité de l’information

L’organisation doit mettre en œuvre, au quotidien, l’analyse de risques définie dans la Clause 6. Cela implique de documenter les évaluations de risques lors de chaque changement majeur (nouvelle application, nouveau fournisseur, migration Cloud).  

La gestion des accès est un exemple concret : chaque nouvelle demande d’accès doit faire l’objet d’une analyse de risque proportionnée. Le RSSI doit vérifier si l’accès est justifié, limiter les droits et s’assurer que la révocation est bien planifiée en cas de départ.  

> [!warning]  
> Erreur fréquente : traiter l’analyse de risques comme une simple formalité annuelle. En pratique, elle doit être intégrée dans chaque processus opérationnel.

---

## 8.3 Traitement des risques de sécurité de l’information

Le traitement des risques implique l’application effective des mesures de sécurité choisies. Cela couvre notamment :  
- **Gestion des accès** : mise en place d’un workflow documenté.  
- **Sauvegardes** : sauvegardes régulières et tests de restauration.  
- **Patching** : processus régulier de mise à jour des systèmes et suivi des correctifs.  
- **Procédures d’incident** : gestion, traçabilité et retour d’expérience.  

### Exemple concret : workflow de gestion des accès

1. Demande initiale par un utilisateur via un outil ou un formulaire.  
2. Validation par le manager hiérarchique.  
3. Approbation du RSSI ou de l’IT Security.  
4. Création du compte par l’IT avec droits minimaux.  
5. Revue périodique des droits (au moins annuelle).  
6. Révocation immédiate en cas de départ ou changement de poste.  

Ce type de workflow constitue une preuve solide en audit et permet de réduire significativement les risques liés aux comptes orphelins ou aux privilèges excessifs.  

> [!warning]  
> Erreur fréquente : absence de processus formalisé de révocation des accès. C’est l’une des non-conformités les plus fréquentes relevées en audit ISO 27001.

---

## Cas concret historique

**Exemple : fuite de données Snowden (2013).**  
L’affaire Snowden illustre l’impact d’un workflow d’accès mal géré. Un sous-traitant disposait de droits excessifs et insuffisamment contrôlés, ce qui lui a permis d’exfiltrer des données massives de la NSA.  
Cet exemple montre que même une organisation dotée d’un budget considérable peut échouer si les processus opérationnels de gestion des accès ne sont pas appliqués avec rigueur.

---

## Preuves d’audit typiques

- Procédures documentées pour la gestion des accès, patching, sauvegardes, incidents.  
- Tickets d’incidents et rapports de résolution.  
- Preuves de tests de restauration des sauvegardes.  
- Registre des demandes et révocations d’accès.  
- Rapports de conformité de patch management.  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant doit être capable de :  
- Expliquer comment la planification se traduit en opérations concrètes.  
- Mettre en œuvre un workflow de gestion des accès.  
- Démontrer l’importance des sauvegardes testées et du patch management.  
- Intégrer la gestion des incidents et retours d’expérience dans le SMSI.  

---

## Checklist RSSI

- [ ] Vérifier l’existence de procédures documentées (accès, sauvegardes, patching, incidents).  
- [ ] Assurer un suivi des tickets et preuves d’exécution.  
- [ ] Mettre en place un workflow d’accès avec validation et révocation.  
- [ ] Tester régulièrement les sauvegardes et consigner les résultats.  
- [ ] Intégrer la gestion des incidents dans l’amélioration continue du SMSI.  
