# 13 – Fiches modèles pratiques

Ce chapitre propose des **fiches modèles** pour appliquer EBIOS RM.  
Chaque fiche est présentée en Markdown, **pré-remplie avec un cas fictif sectoriel (santé / hôpital)** pour illustrer l’usage.  
Ces modèles peuvent être copiés directement dans Obsidian ou adaptés dans Excel/CSV pour un usage opérationnel.

---

## Fiche 1 – Périmètre de l’étude

| Élément | Exemple (Hôpital fictif) |
|---------|--------------------------|
| Valeurs métier | Continuité des soins, confidentialité des dossiers patients, disponibilité des urgences |
| Événements redoutés | Indisponibilité du SIH, fuite de données patients, indisponibilité messagerie médicale |
| Biens supports | Système d’information hospitalier (SIH), messagerie médicale, hébergeur HDS, postes administratifs |
| Gravité (exemple) | Indisponibilité 24h = Critique (impact vital + réputationnel) |

---

## Fiche 2 – Couples SR/OV

| Source de risque | Objectif visé | Motivation | Ressources | Activité |
|------------------|---------------|------------|------------|----------|
| Cybercriminel opportuniste | Chiffrement SI hospitalier pour rançon | Forte | Moyennes | Fréquente |
| Insider malveillant | Accès dossiers patients | Moyenne | Basses | Occasionnelle |
| Groupe APT | Sabotage infrastructures critiques | Moyenne | Élevées | Rare |

---

## Fiche 3 – Stratégie de menaces

| Élément | Exemple |
|---------|---------|
| Parties prenantes internes | DSI, personnel médical, RH |
| Parties prenantes externes | Prestataire HDS, fournisseurs OT médicaux |
| Stratégie de menace | Compromission supply chain + phishing du personnel administratif |
| Référentiels utilisés | MITRE ATT&CK (T1566 Phishing), Cyber Kill Chain |

---

## Fiche 4 – Scénario opérationnel

| Étape | Action | Impact |
|-------|--------|--------|
| Initial Access | Email de phishing ouvert par un agent administratif | Compromission poste |
| Escalade | Exploitation droits Active Directory | Contrôle du SIH |
| Exécution | Chiffrement bases patients | Arrêt des soins |
| Exfiltration | Vol dossiers patients | Atteinte RGPD, CNIL |

**Impact global :** indisponibilité vitale des soins + sanctions réglementaires.  

---

## Fiche 5 – Traitement du risque

| Option de traitement | Mesures appliquées (ISO 27001 Annexe A) | Acteur | Preuves attendues |
|----------------------|------------------------------------------|--------|-------------------|
| Réduction | Sauvegardes hors ligne (A.8.13), segmentation IT/OT (A.5.7), MFA (A.5.15) | RSSI | Plan de traitement validé |
| Transfert | Clauses contractuelles avec prestataire HDS (A.5.19), assurance cyber | Direction + juridique | Contrats signés |
| Acceptation | Risque résiduel faible documenté | COMEX | PV comité risques |
| Évitement | Abandon d’un logiciel obsolète non maintenu (A.5.10) | DSI | Inventaire mis à jour |

---

## Recommandation pratique

Ces fiches modèles :  
- Peuvent être **importées directement dans Obsidian** comme trames.  
- Peuvent être **converties en CSV/Excel** pour un usage collaboratif (workshops EBIOS RM, audit, reporting).  
- Servent de **base pré-remplie** pour démarrer rapidement une analyse sectorielle.  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant est capable de :  
- Utiliser des fiches modèles pour cadrer un atelier EBIOS RM.  
- Pré-remplir et adapter les fiches à son propre secteur (banque, santé, industrie).  
- Produire des livrables exploitables en audit (ISO 27001, NIS2, RGPD).  
