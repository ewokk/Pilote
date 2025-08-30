# 06_Impacts_pour_RSSI

La **LPM 2024–2030** marque une étape décisive pour les **Responsables de la Sécurité des Systèmes d’Information (RSSI)**. Au‑delà des armées, elle entraîne des **obligations indirectes mais structurantes** pour les opérateurs critiques, leurs sous‑traitants et, par effet de chaîne, une grande partie du tissu économique. Pour un RSSI, l’enjeu est de traduire ces orientations nationales en **processus internes vérifiables**, en **preuves d’audit** opposables et en **capacités de résilience** alignées sur les attentes de l’État et des régulateurs.

---

> [!info]  
> LPM 2024–2030 = exigences accrues pour OIV/OSE, convergence avec **[[Directive NIS2 (NIS2 – Network and Information Security Directive)]]** et **[[Digital Operational Resilience Act (DORA – Digital Operational Resilience Act)]]**, coopération renforcée avec l’**[[Agence nationale de la sécurité des systèmes d’information (ANSSI – National Cybersecurity Agency of France)]]** et coordination avec le **[[Commandement de la cyberdéfense (COMCYBER – French Cyber Defense Command)]]**.

---

## Obligations de conformité renforcée pour les acteurs critiques

Les **[[Opérateur d’importance vitale (OIV – Operator of Vital Importance)]]** et **[[Opérateur de services essentiels (OSE – Operator of Essential Services)]]** voient leurs attentes relevées : dispositifs de **détection** et de **réponse** plus matures, **continuité d’activité** démontrable, gouvernance et **gestion de crise** documentées. Les contrôles deviennent plus fréquents et plus profonds, avec une exigence de **traçabilité** (journaux horodatés) et de **preuve** (rapports d’exercices, comptes rendus d’incident). La convergence **NIS2/DORA** formalise des exigences de **gestion des risques**, de **tests de résilience** et de **reporting** qui s’ajoutent aux référentiels nationaux.

---

## Coopération accrue avec l’ANSSI (tests de résilience, audits)

La coopération avec l’ANSSI s’intensifie : préparation d’**exercices de crise** (dont DEFNET), **tests de résilience** (incluant red teaming quand pertinent), audits documentés et échanges opérationnels entre **[[Centre opérationnel de sécurité (SOC – Security Operations Center)]]**, **[[Équipe de réponse aux incidents (CSIRT – Computer Security Incident Response Team)]]** et autorités. Pour le RSSI, cela implique d’**orchestrer les preuves** en amont (procédures, référentiels, cartographies, scénarios), de **caler les interfaces** d’alerte/notification et de prévoir des **canaux d’échange sécurisés** avec l’ANSSI et, le cas échéant, le COMCYBER lors d’incidents d’ampleur nationale.

---

## Signalements d’incidents (cadre renforcé type NIS2/DORA)

Le **signalement des incidents significatifs** est renforcé : pré‑alerte rapide, rapport consolidé, puis **retour d’expérience**. Le RSSI doit définir un **processus interne de notification** (critères de gravité, délais, responsabilités, gabarits de rapports), synchronisé avec les autorités et les donneurs d’ordre. La non‑conformité (retard, insuffisance, absence) expose à des **sanctions** (réglementaires, contractuelles, réputationnelles) et peut compliquer l’appui des autorités en situation de crise.

---

## Impacts pour les PME et fournisseurs Défense (cyber hygiene)

Les **PME/ETI** de la **supply chain Défense** doivent élever leur **hygiène cyber** : durcissement des accès (MFA), **patch management** discipliné, **segmentation** réseau (OT/IT), **sauvegardes chiffrées** testées, **réversibilité Cloud** contractuelle, **exportabilité des journaux** et délais d’alerte. L’accès aux marchés sensibles suppose une **maturité démontrable** (chartes SSI, sensibilisation, procédures d’escalade) et la capacité à **passer des audits** (ex. prérequis liés au **[[Cloud de Confiance (SecNumCloud – Trusted Cloud)]]**).

---

## Preuves d’audit attendues (exemples ciblés)

- **Journaux horodatés** (NTP), exhaustifs et exportables : authentification, privilèges, flux inter‑domaines, activités d’administration.  
- **Dossiers PCA/PRA** mis à jour et **éprouvés** (rapports d’exercices, temps objectifs de restauration atteints), incluant scénarios **cyber‑attaque militaire/hybride**.  
- **Processus de notification** ANSSI/COMCYBER : gabarits de pré‑alerte et de rapport consolidé, registres des communications, preuves d’envoi.  
- **Clauses contractuelles** : réversibilité Cloud, export des journaux, délais d’alerte, obligations d’audit et de tests de reprise chez les fournisseurs.  
- **Capacités SOC/CSIRT** : matrices d’escalade, playbooks, métriques (MTTD/MTTR), preuves d’intégration outillage (ticketing, SIEM, EDR).  

---

## Cas pratiques & retours d’expérience

Les **attaques hospitalières (2020–2022)** ont montré qu’un défaut de préparation au **reporting** et une documentation lacunaire prolongent la crise et mobilisent des arbitrages interministériels. Le cadre **DORA** dans la finance a démontré que des **processus normalisés** (scénarios de test, critères de matérialité, gabarits de rapports) améliorent la **réactivité** et la **qualité** des retours d’incident. Les exercices **DEFNET** confirment que l’entraînement inter‑acteurs facilite la montée en puissance conjointe **ANSSI ↔ COMCYBER ↔ opérateurs** et réduit les temps de décision.

---

## Conseils opérationnels pour RSSI

Le RSSI doit prioriser la **mise en cohérence** de sa gouvernance avec les attentes nationales : cartographie des actifs et dépendances, politique de **journalisation** et d’**horodatage**, **playbooks** de détection/réponse, **gouvernance de crise** (rôles, escalades, cellules), **PCA/PRA** réalistes et testés. Il doit sécuriser ses **contrats** (réversibilité, export des journaux, délais d’alerte) et ancrer un **rythme d’exercices** (dont DEFNET/sectoriels) pour transformer les obligations en **réflexes opérationnels** et en **preuves** prêtes à l’usage.

---

## Objectifs pédagogiques

À l’issue de ce chapitre, le lecteur est capable d’identifier les **obligations renforcées** qui découlent de la LPM, de comprendre la **convergence NIS2/DORA**, d’intégrer les **impacts supply chain** et de traduire ces exigences en **processus**, **contrats** et **preuves d’audit** concrets et opposables.

---

## Checklist RSSI – Chapitre 06

- [ ] Vérifier si l’organisation est **OIV/OSE** et lister les obligations associées.  
- [ ] Mettre à jour **PCA/PRA** avec des scénarios **cyber‑attaque militaire/hybride** et consigner les résultats d’exercices.  
- [ ] Préparer le **reporting ANSSI/COMCYBER** : critères, délais, gabarits, registres de communication.  
- [ ] Vérifier/renégocier les **clauses contractuelles** (État/fournisseurs) : réversibilité, journaux exportables, délais d’alerte, tests de reprise.  
