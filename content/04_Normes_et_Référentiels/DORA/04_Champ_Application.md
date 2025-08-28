# 3. Champ d’application : entités concernées

> [!info]  
> DORA couvre un périmètre **large et précis** d’acteurs financiers **et** leurs **prestataires TIC tiers critiques**. Cette page fournit une lecture **concrète** par catégories, avec exemples d’activités et implications opérationnelles.  
> **Dernière mise à jour** : 25 août 2025

---

## 3.1. Portée générale du règlement

DORA s’applique à plus de **20 catégories d’entités financières** opérant dans l’UE. Au‑delà de l’énumération officielle, l’enjeu pour un RSSI est d’identifier **où et comment** l’activité tombe dans le périmètre et **quelles preuves** seront attendues.

---

## 3.2. Liste concrète par grands blocs, avec exemples

### A. **Établissements de crédit (banques)**  
**Exemples d’activités** : banque de détail (comptes, cartes, virements), banque en ligne, banque de financement et d’investissement, services de paiement adossés au compte.  
**Implications DORA** : continuité 24/7 des paiements et canaux clients, tests de bascule entre datacenters, supervision des prestataires de core banking et cartes, seuils et délais de **notification d’incident** harmonisés.  
**Preuves typiques** : registres incidents, KPI/KRI de disponibilité, rapports de **tests de résilience**, contrats cartographiant les dépendances critiques.

### B. **Entreprises d’assurance et de réassurance**  
**Exemples d’activités** : gestion des contrats vie/non‑vie, indemnisation sinistres, plateaux de déclaration en ligne, tarification et scoring.  
**Implications DORA** : PRA/PCA sur la chaîne indemnisation (pics post‑catastrophes), contrôle des délégataires et courtiers connectés, gestion des risques modèles (pricing) et des dépendances Cloud.  
**Preuves** : registres des tiers, SLA/OLA, rapports de charge/sinistralité en crise, dossiers d’escalade et communication régulateur.

### C. **Entreprises d’investissement / sociétés de gestion d’actifs**  
**Exemples** : front‑to‑back (exécution, règlement‑livraison), gestion OPC/ETF, robo‑advisors.  
**Implications** : résilience du **trade lifecycle**, dépendances aux plateformes de marché, exigences de **journalisation** et d’horodatage, TLPT possible pour acteurs systémiques.  
**Preuves** : cartographie des processus critiques, journaux d’incident marché, rapports de bascule et de tests d’intégrité des ordres.

### D. **Établissements de paiement et établissements de monnaie électronique**  
**Exemples** : PSP, wallets, initiation de paiement (PIS), information sur les comptes (AIS) via DSP2/Open Banking.  
**Implications** : disponibilité des APIs, sécurité des parcours d’authentification forte, gestion **temps réel** des incidents affectant les paiements.  
**Preuves** : KPIs d’API uptime/latence, registres fraude et disponibilité, notifications coordonnées (DORA/NIS2).

### E. **Prestataires de services sur actifs numériques (PSAN / MiCA)**  
**Exemples** : plateformes d’échange, conservation/custody, émission de jetons, services de staking/collatéral.  
**Implications** : résilience des **plateformes** en forte charge, sécurité des **portefeuilles** (HSM, MPC), gestion des mises à jour protocolaires, scénarios de crise (forks, attaques 51%).  
**Preuves** : politiques d’admin clés, preuves de **segregation** des actifs, rapports de tests (charge, scénario incident), plans de sortie/preuves de réversibilité.

### F. **Infrastructures de marché financier**  
**Exemples** : chambres de compensation (CCP), dépositaires centraux (CSD), systèmes de règlement brut en temps réel (RTGS), plateformes de négociation.  
**Implications** : très forte **criticité systémique**, exigences renforcées de TLPT, coordination multi‑autorités, procédures d’escalade inter‑juridictions.  
**Preuves** : rapports d’exercices de crise, métriques de **recovery time objective (RTO)** / **recovery point objective (RPO)**, décisions du Conseil/COMEX.

### G. **Autres catégories représentatives**  
- **Fournisseurs d’informations financières / agences de notation**, **dépositaires**, **opérateurs de transfert de fonds**, **courtiers‑grossistes**, **intermédiaires d’assurance** connectés.  
- **Fintech** (prêts P2P, agrégateurs, scoring alternatif) entrant dans les catégories réglementées précédentes.  
**Implications** : proportionalité appliquée mais **périmètre DORA maintenu** si l’activité relève d’une catégorie couverte.  
**Preuves** : registres risques/tiers, sécurité des API, contrats et plans de sortie.

---

## 3.3. Prestataires **TIC tiers critiques** (périmètre DORA)

DORA fait entrer dans la **supervision sectorielle** des **prestataires TIC** identifiés comme **critiques** (Cloud, infogérance, paiement, sécurité managée).  
**Exemples** : hyperscaler Cloud hébergeant le core banking ; opérateur de switching cartes ; SOC managé supervisant détection/réponse 24/7.  
**Attendus** : clauses contractuelles DORA (auditabilité, localisation, réversibilité, métriques pénalisées), **plans de sortie** testés, audits tiers, reporting régulier vers l’entité financière et, le cas échéant, vers l’autorité.

---

## 3.4. Application extraterritoriale

Un fournisseur **non‑UE** tombe dans le champ DORA s’il fournit un service couvert à une entité financière **de l’UE**.  
**Conséquences** : adaptation contractuelle, localisation éventuelle des données, droit d’audit, conformité aux exigences de **notification** et de **tests** convenus.

---

## 3.5. Cas concrets rapides

- **Banque de détail** : panne prolongée du core banking hébergé → bascule inter‑sites, communication clients, notification DORA, preuves de tests PRA réalisés avant crise.  
- **Assureur** : afflux massif de sinistres après catastrophe naturelle → montée en charge plateforme de déclaration, délégataires supervisés, priorisation des services critiques.  
- **PSP** : indisponibilité API PIS/AIS → conformité aux seuils de notification, analyse post‑mortem, plan de remédiation et publication des indicateurs.  
- **Plateforme crypto (PSAN)** : incident de custody → déclenchement procédure de crise, preuves de segregation, communication régulatoire, test de réversibilité.  

---

## 3.6. Preuves d’audit attendues (exemples)

- Cartographie des **processus critiques** par catégorie (banque, assurance, PSP, PSAN, infrastructures).  
- Registre des **tiers** avec identification des **tiers critiques** et justification de criticité.  
- Contrats amendés avec **clauses DORA** (auditabilité, localisation, réversibilité, pénalités), **SLA/OLA** et métriques suivies.  
- Rapports de **tests de résilience** (bascule, PRA/PCA, charge, TLPT si requis) et preuves de remédiation.  
- Journalisation des **notifications d’incidents** (seuils, délais, canaux), dossiers d’escalade/com et décisions de gouvernance.

---

## 3.7. Checklist RSSI – Champ d’application

- [ ] Confirmer la **catégorie réglementaire** de l’entité et des filiales/branches (y compris activités annexes).  
- [ ] Identifier les **prestataires TIC** et qualifier la **criticité** ; documenter les plans de sortie.  
- [ ] Aligner les **contrats** sur DORA (clauses, audit, localisation, réversibilité, métriques pénalisées).  
- [ ] Mettre en place les **KPI/KRI** par catégorie (disponibilité, latence, débit, intégrité).  
- [ ] Outiller la **notification** d’incidents selon les seuils harmonisés et coordonner avec NIS2/RGPD.

---

## 3.8. Objectifs pédagogiques

Être capable d’**identifier concrètement** si une activité tombe dans le périmètre DORA, de **catégoriser** les dépendances **tiers critiques**, d’anticiper les **preuves** à produire et d’organiser une **trajectoire de conformité** adaptée au modèle d’affaires (banque, assurance, PSP, PSAN, infrastructures).
