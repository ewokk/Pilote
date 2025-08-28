# 6. Gestion des tiers et dépendances critiques

> [!info]  
> DORA consacre un axe entier à la **gestion des prestataires TIC**, en particulier les **fournisseurs cloud et infogérance critiques**. L’objectif est de réduire la dépendance systémique et d’assurer que les entités financières puissent continuer leurs activités même en cas de défaillance externe.  
> **Dernière mise à jour** : 25 août 2025

---

## 6.1. Clauses contractuelles obligatoires

Les contrats avec des prestataires TIC critiques doivent inclure :  
- **Droits d’audit** pour l’entité financière et, le cas échéant, pour les régulateurs,  
- **Localisation et portabilité des données**,  
- **Plans de sortie / exit strategy** documentés et testés,  
- **Réversibilité** en cas de rupture du contrat,  
- **SLA/OLA** mesurables, assortis de pénalités financières,  
- Clauses de **notification d’incidents** conformes aux délais DORA.  

**Preuves attendues** : contrats amendés, clauses DORA, dossiers de négociation, preuves d’exécution des tests de sortie.

---

## 6.2. Audits des prestataires et supervision

Les entités financières doivent :  
- réaliser des **audits réguliers** des prestataires critiques,  
- exiger des rapports de conformité (ISO 27001, SOC 2, attestations externes),  
- documenter les écarts et plans de remédiation,  
- informer le régulateur en cas de non-conformité majeure.  

**Preuves attendues** : rapports d’audit, comptes-rendus de comité fournisseurs, preuves de suivi des plans correctifs.

---

## 6.3. Dépendance aux cloud providers

Les fournisseurs **cloud hyperscale** concentrent une part majeure des infrastructures critiques (banques en core banking, PSP, fintech).  
Cette concentration crée un **risque systémique** : une panne peut avoir un effet domino sur tout un pan du secteur.  

> [!warning]  
> DORA introduit la notion de **prestataire TIC tiers critique supervisé au niveau européen** (par l’EBA, l’ESMA ou l’EIOPA).  

**Exemples d’obligations** :  
- diversification des fournisseurs,  
- contrats de sortie testés,  
- surveillance renforcée des SLA/OLA,  
- reporting régulier vers les autorités.

---

## 6.4. Exit strategy et réversibilité

Une **exit strategy** est un plan opérationnel qui doit permettre de :  
- migrer les données et services vers un autre fournisseur ou en interne,  
- valider la **réversibilité contractuelle** et technique,  
- tester régulièrement la faisabilité (preuve de transfert réussi, coût, délai, risques).  

**Preuves attendues** : plan de sortie validé par le Conseil/COMEX, test de migration documenté, preuves de remédiation après test.

---

## 6.5. Cas concrets et historiques

- **Panne AWS (2021)** : une indisponibilité majeure a touché les services cloud AWS US-East-1, affectant des PSP et plateformes de trading. Leçons pour DORA : exigence de diversification et de tests PRA/PCA sur dépendances cloud.  
- **Incendie OVH Strasbourg (2021)** : perte totale de données pour des clients n’ayant pas prévu de PRA multi-sites. Leçons : importance de l’exit strategy et de la duplication des données.  
- **SolarWinds (2020)** : compromission massive via un prestataire d’administration réseau, affectant banques et assureurs. Leçons : clauses d’audit et revues de sécurité obligatoires pour les fournisseurs.  
- **Visa Europe (2018)** : panne de plusieurs heures sur les paiements cartes, affectant des millions de clients. Leçons : nécessité de tests de charge et de plan de continuité supervisé.  

---

## 6.6. Checklist RSSI – Gestion des tiers

- [ ] Identifier et classer les **tiers critiques TIC** (Cloud, infogérance, PSP).  
- [ ] Réviser tous les contrats pour inclure les **clauses DORA** (audit, réversibilité, notification, SLA/OLA).  
- [ ] Mettre en place une **exit strategy** documentée et testée.  
- [ ] Réaliser des **audits réguliers** des prestataires, collecter preuves ISO/SOC et suivre les plans correctifs.  
- [ ] Prévoir une **diversification des dépendances Cloud** pour réduire le risque systémique.  
- [ ] Journaliser et tracer les **comités fournisseurs** et leurs décisions.  

---

## 6.7. Objectifs pédagogiques

À l’issue de ce chapitre, le lecteur :  
- connaît les **clauses contractuelles** essentielles imposées par DORA,  
- sait organiser un **audit fournisseur** et documenter les preuves,  
- comprend les enjeux liés à la **dépendance Cloud** et la notion de tiers critique supervisé,  
- sait concevoir et tester une **exit strategy**,  
- peut illustrer son dispositif par des **cas historiques réels** (AWS, OVH, SolarWinds, Visa).  
