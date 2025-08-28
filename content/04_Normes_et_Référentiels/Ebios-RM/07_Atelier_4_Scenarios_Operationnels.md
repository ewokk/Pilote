# Atelier 4 – Élaborer les scénarios opérationnels

## Objectif

L’atelier 4 transforme la stratégie de menace en **scénarios d’attaque concrets**.  
Ces scénarios sont des représentations réalistes, détaillant la séquence d’actions adverses permettant d’atteindre un objectif métier.  
Ils constituent un outil de dialogue efficace entre équipes techniques, métiers et direction, car ils rendent la menace **tangible**.

---

## Étapes de l’atelier

1. Identifier les **modes opératoires** les plus plausibles.  
2. Construire un **graphe d’attaque** ou une séquence narrative.  
3. Coter la **vraisemblance** des scénarios.  
4. Prioriser les scénarios en fonction de leur impact sur les valeurs métier.  

---

## Graphe d’attaque (générique)

```
[Initial Access] → [Privilege Escalation] → [Data Access] → [Exfiltration]
```

Inspiré des frameworks :  
- MITRE ATT&CK 
- Cyber Kill Chain (Lockheed Martin).  

---

## Exemple détaillé – Phishing RH

| Étape | Action de l’attaquant | Technique MITRE | Impact |
|-------|----------------------|-----------------|--------|
| 1. Initial Access | Envoi d’un email de phishing ciblant un employé RH | T1566 (Phishing) | L’utilisateur ouvre une pièce jointe malveillante |
| 2. Exécution | Malware s’exécute et installe un agent C2 | T1204 (User Execution) | L’attaquant établit un accès initial |
| 3. Privilege Escalation | Exploitation de failles AD pour obtenir des droits admin | T1068 (Exploitation for Privilege Escalation) | Contrôle de l’Active Directory |
| 4. Lateral Movement | Mouvement vers les serveurs RH | T1075 (Pass the Hash) | Accès aux bases de données RH |
| 5. Exfiltration | Extraction des dossiers RH sensibles | T1041 (Exfiltration over C2 Channel) | Perte de confidentialité, fuite massive de données |
| 6. Impact business | Données personnelles exposées | — | Sanctions RGPD, perte de confiance des employés |

> [!warning]  
> Impact direct : **atteinte à la confidentialité** et **sanction RGPD potentielle** (jusqu’à 4 % du CA annuel).  

---

## Mini-scénarios sectoriels

- **Santé** : un ransomware exploite un accès VPN non patché → chiffrement des dossiers patients → arrêt des services médicaux.  
- **Industrie** : un attaquant externe compromet un poste bureautique → pivot OT → sabotage des automates de production (scénario Stuxnet-like).  

Ces scénarios montrent que l’approche EBIOS RM couvre à la fois l’IT et l’OT, ainsi que les enjeux réglementaires.

---

## Matrice d’évaluation (probabilité x gravité)

Les scénarios doivent être cotés selon leur **vraisemblance** et leur **gravité**.  
La matrice suivante illustre un outil classique de priorisation :

| Gravité \ Probabilité | Faible | Moyenne | Forte |
|------------------------|--------|---------|-------|
| **Faible**             | Mineur | Modéré  | Significatif |
| **Moyenne**            | Modéré | Important | Majeur |
| **Forte**              | Significatif | Majeur | Critique |

- **Probabilité** : dépend de la motivation, des ressources et du niveau d’activité de l’adversaire.  
- **Gravité** : dépend de l’impact métier (financier, réglementaire, réputationnel, opérationnel).  

Cette matrice permet de prioriser les scénarios : ceux classés “Majeur” ou “Critique” doivent être traités en priorité dans l’Atelier 5.  

---

## Preuves d’audit attendues

- Description formelle des scénarios, datée et validée.  
- Références explicites aux techniques MITRE utilisées.  
- Indicateurs de vraisemblance (probabilité, ressources adverses).  
- Documentation des impacts métiers et réglementaires.  
- Matrice probabilité x gravité signée par le RSSI ou la gouvernance.  

---

## Cas pratiques & retours d’expérience

- Campagnes **Emotet/Trickbot** (2018–2020) : phishing massif, compromission d’AD, exfiltration de données sensibles → plusieurs ministères et entreprises françaises touchés.  
- **Hôpitaux français (2021)** : scénarios de rançongiciel combinant accès initial via email + chiffrement massif → impact direct sur la continuité des soins.  

---

## Objectifs pédagogiques

À l’issue de l’atelier 4, l’apprenant est capable de :  
- Construire un scénario opérationnel détaillé à partir d’un couple SR/OV.  
- Relier les étapes aux tactiques MITRE et à la Kill Chain.  
- Traduire les scénarios techniques en impacts métiers et réglementaires.  
- Utiliser une matrice **probabilité x gravité** pour prioriser les scénarios.  
- Préparer des preuves d’audit et des supports pédagogiques pour la direction.  

---

## Checklist RSSI – Atelier 4

- [ ] Construire au moins un scénario détaillé par couple critique.  
- [ ] Valider chaque étape du scénario avec les équipes techniques.  
- [ ] Relier le scénario à des impacts métiers (confidentialité, disponibilité, intégrité).  
- [ ] Vérifier la couverture du scénario dans MITRE ATT&CK.  
- [ ] Évaluer chaque scénario avec une matrice probabilité x gravité.  
- [ ] Préparer une documentation claire pour audits et sensibilisation COMEX.  
