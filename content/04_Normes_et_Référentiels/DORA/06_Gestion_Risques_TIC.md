# 5. Gestion des risques liés aux TIC

> [!info]  
> La gestion des risques TIC sous DORA doit être **documentée, continue et proportionnée**, intégrée dans la **gouvernance d’entreprise** au même titre que les risques financiers ou opérationnels.  
> **Dernière mise à jour** : 25 août 2025

---

## 5.1. Démarche de gestion des risques

Les entités doivent adopter une approche structurée :  

1. **Identification** des actifs et processus critiques (cartographie des systèmes, dépendances, données sensibles).  
2. **Évaluation** des menaces (cyberattaques, pannes, erreurs humaines, dépendances Cloud).  
3. **Mise en œuvre** de mesures de protection adaptées (contrôles techniques, organisationnels, juridiques).  
4. **Surveillance et suivi** des vulnérabilités, incidents, KPI/KRI.  
5. **Réévaluation** régulière et amélioration continue (retour d’expérience, post‑mortem, mise à jour cartographie).  

**Preuves attendues** : registre des risques TIC, cartographie validée, matrices RACI, indicateurs suivis en comité, rapports d’audit, PRA/PCA documentés.

---

## 5.2. Cartographie des risques et dépendances

La **cartographie des risques TIC** est au cœur de DORA :  
- inventaire des **actifs critiques** (applications, infrastructures, données, prestataires),  
- identification des **chaînes de dépendances** (internes/externes),  
- classification par criticité (impact business, réglementaire, réputation).  

> [!tip]  
> Une cartographie claire est une **preuve d’audit majeure** : elle doit être validée par le Conseil/COMEX et régulièrement mise à jour.

---

## 5.3. Intégration PRA/PCA

DORA impose que la gestion des risques soit **connectée** aux dispositifs de **continuité** :  
- **PRA (Plan de reprise d’activité)** et **PCA (Plan de continuité d’activité)** doivent être alignés avec la cartographie,  
- inclure des scénarios de panne Cloud, cyberattaques massives, indisponibilités prestataires,  
- prévoir des objectifs de temps et de point de reprise (**RTO/RPO**).  

**Preuves** : plans PRA/PCA approuvés, rapports de tests de bascule, comptes‑rendus d’exercices de crise.

---

## 5.4. Gestion de l’obsolescence

L’obsolescence logicielle, matérielle ou contractuelle constitue un **risque majeur** :  
- logiciels non patchés, systèmes en fin de vie, matériels obsolètes,  
- contrats périmés ou incomplets avec prestataires TIC,  
- dépendances à des technologies propriétaires sans plan de sortie.  

**Attendus DORA** : registre des versions, plan de mise à jour, plan de sortie documenté.  
**Preuves** : inventaire des versions, feuille de route de mise à jour, décisions Conseil/COMEX.

---

## 5.5. Surveillance des risques émergents

- Veille réglementaire et technique,  
- Prise en compte des vulnérabilités **zero‑day**,  
- Intégration des leçons des incidents internes et sectoriels,  
- Actualisation des scénarios PRA/PCA.  

> [!example]  
> Après l’attaque **SolarWinds**, plusieurs institutions ont révisé leurs plans de gestion des prestataires et renforcé leurs clauses contractuelles.

---

## 5.6. Outils et référentiels méthodologiques

La démarche DORA doit être **adossée à des référentiels reconnus** :  

| Outil / Référentiel | Finalité | Atouts | Preuves d’audit |  
|---|---|---|---|  
| [[ISO/IEC 27005 (ISO 27005 – Information Security Risk Management)]] | Gestion des risques SSI alignée ISO 27001 | Norme internationale reconnue | Registre risques, matrices, rapports |  
| [[EBIOS Risk Manager (EBIOS RM – Expression des Besoins et Identification des Objectifs de Sécurité)]] | Méthode ANSSI centrée sur scénarios | Cas d’usage opérationnels, ateliers collaboratifs | Grilles d’analyse, scénarios, livrables ateliers |  
| [[NIST Cybersecurity Framework (NIST CSF – Cybersecurity Framework)]] | Cadre structurant (Identify, Protect, Detect, Respond, Recover) | Lisible par COMEX, transversal | KPI/KRI, indicateurs de maturité |  

---

## 5.7. Cas concrets

- **Banque** : identification d’un datacenter unique sans PRA → ajout d’un second site, PRA testé et validé.  
- **Assureur** : obsolescence d’un applicatif sinistre → plan de migration validé, feuille de route suivie.  
- **PSP** : incident API paiement → mise à jour cartographie, ajustement PRA, communication clients.  

---

## 5.8. Checklist RSSI – Gestion des risques TIC

- [ ] Maintenir un **registre des risques TIC** et une **cartographie validée** par le Conseil/COMEX.  
- [ ] Associer la **cartographie** aux dispositifs PRA/PCA (RTO/RPO définis et testés).  
- [ ] Tenir un **registre des versions** pour suivre l’obsolescence logicielle/matérielle/contractuelle.  
- [ ] Utiliser un **référentiel reconnu** (ISO 27005, EBIOS RM, NIST CSF) et documenter les livrables.  
- [ ] Réaliser des **tests PRA/PCA** réguliers et consigner les preuves.  
- [ ] Intégrer les **incidents sectoriels** et vulnérabilités émergentes (veille, post‑mortem) dans la réévaluation.  

---

## 5.9. Objectifs pédagogiques

À l’issue de ce chapitre, le lecteur :  
- sait construire une **cartographie des risques TIC** complète et validée,  
- comprend le lien entre gestion des risques et **plans PRA/PCA**,  
- intègre la **gestion de l’obsolescence** dans son dispositif,  
- connaît les **référentiels méthodologiques** à mobiliser (ISO 27005, EBIOS RM, NIST CSF),  
- est capable d’alimenter les **preuves d’audit** attendues par les régulateurs.  
