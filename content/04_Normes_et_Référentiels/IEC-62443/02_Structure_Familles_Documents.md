# 02_Structure_Familles_Documents

La norme **IEC 62443** est structurée en quatre grandes familles de documents (1‑x, 2‑x, 3‑x, 4‑x) qui couvrent respectivement la **terminologie**, la **gouvernance organisationnelle**, les **exigences système** et les **exigences composant/développement sécurisé**. Toutefois, la simple énumération des parties ne suffit pas : pour être opérationnelle, cette structure doit être traduite en un **guide de lecture pratique**, indiquant clairement **quelle partie utiliser dans quel contexte** et **quelles sorties sont attendues**.  

---

## Guide de lecture opérationnel

Le tableau ci‑dessous synthétise les principaux cas d’usage de la norme et associe chaque besoin à la partie IEC 62443 correspondante ainsi qu’aux livrables attendus :

| **Besoin**            | **Partie IEC 62443** | **Sortie attendue**                                     |
|------------------------|----------------------|---------------------------------------------------------|
| Gouvernance OT         | 2‑1                  | Politique OT, rôles et responsabilités, procédures SSI  |
| Prestataires           | 2‑4                  | Exigences contractuelles pour intégrateurs et fournisseurs |
| Architecture système   | 3‑2                  | Modèle zones & conduits, définition des SL‑T            |
| Exigences système      | 3‑3                  | FR (Foundational Requirements) / SR (System Requirements) par niveau SL |
| Développement sécurisé | 4‑1                  | Processus SDL (Secure Development Lifecycle), plan d’assurance sécurité |
| Exigences composant    | 4‑2                  | Exigences SR pour composants, définition des SL‑C       |

---

## Retours d’expérience et cas concrets

- Dans une **entreprise pharmaceutique**, la partie **2‑1** a servi de base pour établir une politique OT validée par le COMEX, précisant les rôles (Responsable OT, intégrateur, fournisseur) et définissant des procédures de gestion des changements.  
- Dans un projet d’**automatisation automobile**, la partie **2‑4** a été intégrée directement aux contrats fournisseurs, obligeant les intégrateurs à respecter les contrôles de télémaintenance sécurisée et à livrer des preuves FAT/SAT.  
- Pour un **opérateur d’énergie**, les parties **3‑2 et 3‑3** ont permis de concevoir une architecture zones & conduits alignée sur les SL‑T, avec des matrices FR/SR utilisées comme référentiel d’audit.  
- Côté **fournisseurs industriels**, la partie **4‑1** a structuré leur cycle de développement sécurisé, et la **4‑2** a fixé les critères techniques de validation des composants avant mise en production.  

---

## Preuves d’audit attendues

Un auditeur demandera notamment :  
- **2‑1** : politiques OT signées, registre des rôles et responsabilités, procédures de gestion des changements.  
- **2‑4** : contrats fournisseurs intégrant des clauses sécurité, preuves de tests FAT/SAT, procès‑verbaux de recettes.  
- **3‑2** : schémas d’architecture zones & conduits, matrices de définition des SL‑T, preuves de segmentation effective (configurations de pare‑feu, VLAN/VRF).  
- **3‑3** : matrice FR/SR appliquée aux systèmes, rapports de conformité, logs démontrant l’application des contrôles.  
- **4‑1** : plan de développement sécurisé, journal de suivi des vulnérabilités, revues de code et résultats de tests de sécurité.  
- **4‑2** : rapports de conformité des composants, fiches techniques validées, tests d’interopérabilité et de durcissement.  

---

## Impacts organisationnels et gouvernance

L’utilisation de la norme implique des **adaptations organisationnelles fortes** :  
- La partie **2‑1** oblige à formaliser une gouvernance OT impliquant le **COMEX**, avec nomination d’un Responsable cybersécurité OT distinct du RSSI IT.  
- La partie **2‑4** renforce les processus **achats** en imposant que les clauses contractuelles intègrent systématiquement des exigences de cybersécurité OT.  
- Les parties **3‑2 et 3‑3** nécessitent une collaboration rapprochée entre **architectes OT**, **RSSI**, **équipes métiers** et **intégrateurs** pour définir les zones critiques et les niveaux SL.  
- Les parties **4‑1 et 4‑2** impactent directement la **supply chain industrielle**, en forçant les fournisseurs à mettre en œuvre un développement sécurisé (SDL) et à fournir des preuves tangibles de la robustesse de leurs composants.  

---

## Comparaisons utiles

- **ISO 27001** : fournit un cadre SMSI global, mais reste trop générique pour l’OT. La 62443 apporte le détail technique et organisationnel spécifique aux environnements industriels.  
- **NIST 800‑82** : complémentarité forte, car le NIST décrit les bonnes pratiques et l’architecture de défense en profondeur, tandis que la 62443 établit des exigences normatives et auditées.  
- **NIS2** : la directive européenne impose des mesures OT et renforce la responsabilité des dirigeants. La 62443 constitue le standard technique de référence pour démontrer la conformité.  
- **TIBER‑EU** : se positionne comme complément, en organisant des tests de pénétration pilotés par la menace (*Threat‑Led Penetration Testing*) qui viennent éprouver la mise en œuvre pratique des exigences 62443.  

---

## Conséquences opérationnelles pour le RSSI

Pour rendre la structure IEC 62443 exploitable, un **RSSI OT** doit :  
- Construire un **plan directeur SSI** OT basé sur la partie **2‑1**.  
- Intégrer la partie **2‑4** dans les contrats d’intégration et de maintenance.  
- Définir l’architecture zones/conduits avec la partie **3‑2** et cartographier les SL‑T.  
- Traduire les exigences en **matrices FR/SR par SL** selon la partie **3‑3**.  
- Vérifier que les fournisseurs appliquent un processus SDL conforme **4‑1** et que les composants sont validés selon **4‑2**.  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant devra être capable de :  
- Identifier les quatre familles de la norme IEC 62443 et leur rôle respectif.  
- Associer chaque besoin opérationnel (gouvernance, contrats, architecture, développement) à la partie correspondante.  
- Comprendre les sorties attendues et les preuves d’audit pour chaque partie.  
- Intégrer cette structure dans la gouvernance et les projets OT de son organisation.  

---

## Checklist RSSI

- [ ] Vérifier que la gouvernance OT est formalisée selon **62443‑2‑1**.  
- [ ] Intégrer des clauses contractuelles de sécurité basées sur **62443‑2‑4**.  
- [ ] Cartographier les zones & conduits OT selon **62443‑3‑2**.  
- [ ] Mettre en place une matrice FR/SR par SL conformément à **62443‑3‑3**.  
- [ ] Exiger des fournisseurs un processus SDL conforme **62443‑4‑1** et des composants validés selon **62443‑4‑2**.  
