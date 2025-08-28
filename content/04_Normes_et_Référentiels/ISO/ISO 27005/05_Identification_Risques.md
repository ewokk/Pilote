# 05_Identification_Risques

## Introduction

L’identification des risques est l’étape charnière du processus ISO/IEC 27005. Trop souvent réduite à une simple liste générique de menaces, elle doit au contraire s’appuyer sur des sources variées, un inventaire précis des actifs, et des méthodes structurées pour générer des scénarios complets. Un RSSI qui se limite à un tableau superficiel passe à côté de l’objectif : **documenter des risques concrets, traçables et actionnables**.  

---

## Sources pour l’identification des risques

L’efficacité de l’identification dépend directement de la qualité des sources mobilisées :  

- **Incidents internes** : analyse post-mortem, retours d’expérience, journaux SIEM.  
- **Audits et contrôles** : constats d’audit interne, résultats de pentests, écarts de conformité.  
- **Veille sectorielle** : CERT, rapports d’ANSSI, ENISA, bases de vulnérabilités (NVD, CVE).  
- **Cadres de menaces** : MITRE ATT&CK, OWASP Top 10, TIBER-EU pour le secteur financier.  

Ces sources permettent de détecter non seulement les menaces théoriques, mais aussi celles déjà observées et susceptibles de se reproduire.  

---

## Catalogue des actifs

Un registre de risques crédible commence par un **catalogue d’actifs** exhaustif :  

- **Applications** : ERP, CRM, outils métiers.  
- **Données** : fichiers clients, données personnelles, données de production.  
- **Infrastructure** : serveurs, réseaux, postes de travail, cloud.  
- **Prestataires et tiers** : fournisseurs critiques, hébergeurs, sous-traitants.  

Chaque actif doit faire l’objet d’une **fiche d’actif** mentionnant sa valeur métier, son propriétaire, ses dépendances et ses exigences de sécurité (disponibilité, confidentialité, intégrité, traçabilité).  

---

## Génération de scénarios de risques

Une identification sérieuse ne se limite pas à lister les actifs et menaces : elle consiste à générer des scénarios complets par combinaison :  

**Scénario = Actif + Menace + Vulnérabilité → Impact(s)**  

Par exemple :  
- Actif : base de données RH.  
- Menace : attaquant externe.  
- Vulnérabilité : absence de chiffrement au repos.  
- Scénario : vol de données sensibles des employés.  
- Impact : non-conformité RGPD, atteinte à la réputation, sanctions financières.  

---

## Exemple de tableau d’identification

| Actif                  | Valeur        | Menace                  | Vulnérabilité               | Scénario                                      | Impact(s)                            | Contrôles existants |
|-------------------------|--------------|-------------------------|-----------------------------|-----------------------------------------------|--------------------------------------|---------------------|
| Base de données clients | Critique     | Attaquant externe       | Absence de chiffrement      | Exfiltration de données clients               | Sanctions RGPD, perte de confiance   | Chiffrement en cours de déploiement |
| Système de production   | Élevée       | Rançongiciel            | Postes non patchés          | Blocage des lignes de production              | Arrêt usine, pertes financières      | Sauvegardes quotidiennes |
| Hébergeur cloud         | Élevée       | Défaillance prestataire | Manque de clauses contract. | Perte d’accès aux applications hébergées      | Indisponibilité prolongée, SLA non tenu | PRA externe en discussion |
| SI hospitalier          | Critique     | Rançongiciel            | Failles non corrigées       | Blocage du dossier patient informatisé (DPI)  | Menace vitale pour patients          | PCA en cours de mise à jour |

---

## Cas concrets

- **Finance** : un établissement bancaire alimente son registre de risques avec les scénarios MITRE ATT&CK liés aux menaces ciblant SWIFT.  
- **Santé** : un hôpital identifie comme actif critique son dossier patient informatisé (DPI), menacé par les rançongiciels, vulnérable faute de patch, et impacté par une indisponibilité vitale.  
- **Industrie** : une usine automobile documente ses actifs de production et crée des scénarios combinant menace ransomware et vulnérabilités des automates OT.  

---

## Objectifs pédagogiques

- Savoir collecter et exploiter des sources fiables pour l’identification des risques.  
- Construire un catalogue d’actifs détaillé et documenté.  
- Générer des scénarios de risques complets et exploitables.  
- Relier ces scénarios à des impacts métiers tangibles.  

---

## Checklist RSSI

- [ ] Les incidents internes et audits sont-ils exploités comme sources pour identifier les risques ?  
- [ ] Un catalogue d’actifs complet (applications, données, infrastructures, tiers) existe-t-il ?  
- [ ] Chaque actif critique dispose-t-il d’une fiche d’actif avec sa valeur et ses exigences de sécurité ?  
- [ ] Les scénarios de risques sont-ils construits avec la formule Actif + Menace + Vulnérabilité → Impact ?  
- [ ] Un tableau synthétique relie-t-il actifs, menaces, vulnérabilités, scénarios, impacts et contrôles existants ?  
