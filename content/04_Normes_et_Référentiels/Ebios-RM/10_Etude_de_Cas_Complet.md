# Étude de cas – Mise en œuvre complète d’EBIOS RM

Ce chapitre illustre la mise en œuvre intégrale de la méthode EBIOS RM, en la déclinant sur deux secteurs distincts : **Banque** et **Santé**.  
Chaque étude suit la séquence des ateliers 1 → 5 et montre comment adapter la démarche aux réalités sectorielles.  

---

## Étude de cas 1 – Secteur Banque

### Contexte

**Organisation** : Banque X (secteur bancaire international)  
**Enjeux** : sécurisation des paiements électroniques, conformité ACPR et Bâle III, protection des données clients (RGPD, DSP2).  
**Cas réel de référence** : attaque contre la Banque du Bangladesh (2016) – fraude SWIFT de 81 M$ via compromission du système de messagerie bancaire.

---

### Atelier 1 – Périmètre

- **Valeurs métier** : disponibilité des services e‑banking, intégrité des flux SWIFT, confidentialité des données clients.  
- **Événements redoutés** : fraude financière, fuite massive de données, indisponibilité des services.  
- **Biens supports** : plateforme e‑banking, infrastructure SWIFT, applicatifs internes, prestataires cloud.  

### Atelier 2 – Couples SR/OV

| Source de risque | Objectif visé | Motivation | Ressources | Activité |
|------------------|---------------|------------|------------|----------|
| Groupe APT étatique | Espionnage flux financiers | Forte | Élevées | Persistante |
| Cybercriminel | Détournement SWIFT | Forte | Moyennes | Fréquente |
| Sous-traitant négligent | Accès indirect aux systèmes | Moyenne | Basses | Occasionnelle |

### Atelier 3 – Stratégie de menace

- Compromission supply chain d’un logiciel bancaire.  
- Campagnes de phishing ciblant la direction financière.  
- Intrusion dans les flux SWIFT via un tiers négligent.  
- Référentiels : MITRE ATT&CK (T1195 Supply Chain), Cyber Kill Chain.  

### Atelier 4 – Scénarios opérationnels

| Étape | Action | Impact |
|-------|--------|--------|
| Phishing ciblé | Compromission d’un compte financier | Accès aux systèmes internes |
| Escalade | Mouvement latéral vers infrastructure SWIFT | Contrôle flux financiers |
| Exécution fraude | Ordres SWIFT frauduleux envoyés | Perte financière directe |
| Effacement traces | Suppression journaux | Difficulté d’audit et de réponse |

**Impact** : pertes financières massives, sanctions réglementaires, atteinte à la réputation.  

### Atelier 5 – Traitement du risque

- **Réduction** : segmentation réseau, MFA, supervision SWIFT.  
- **Transfert** : assurance fraude, clauses fournisseurs.  
- **ISO 27001 Annexe A** : A.5.15 Contrôles d’accès, A.5.19 Relations fournisseurs, A.8.16 Continuité d’activité.  

---

## Étude de cas 2 – Secteur Santé

### Contexte

**Organisation** : Hôpital Y (CHU français)  
**Enjeux** : continuité des soins, protection des données patients (RGPD, HDS), conformité NIS2.  
**Cas réel de référence** : cyberattaques contre plusieurs hôpitaux français (2020–2021) ayant paralysé les urgences et provoqué des retards critiques.  

---

### Atelier 1 – Périmètre

- **Valeurs métier** : disponibilité du SI hospitalier, confidentialité des dossiers patients, continuité des urgences.  
- **Événements redoutés** : indisponibilité des systèmes médicaux, perte ou altération des données patients.  
- **Biens supports** : SIH (système d’information hospitalier), messagerie médicale, prestataire HDS, postes connectés aux équipements OT médicaux.  

### Atelier 2 – Couples SR/OV

| Source de risque | Objectif visé | Motivation | Ressources | Activité |
|------------------|---------------|------------|------------|----------|
| Cybercriminel opportuniste | Chiffrement des SI pour rançon | Forte | Moyennes | Fréquente |
| Insider malveillant | Accès aux dossiers patients | Moyenne | Basses | Occasionnelle |
| Groupe APT | Sabotage ou espionnage sanitaire | Moyenne | Élevées | Rare |

### Atelier 3 – Stratégie de menace

- Phishing ciblant le personnel administratif.  
- Exploitation de VPN non patchés pour un accès distant.  
- Mouvement latéral vers les systèmes hospitaliers critiques.  
- Référentiels : MITRE ATT&CK (T1566 Phishing), Cyber Kill Chain.  

### Atelier 4 – Scénarios opérationnels

| Étape | Action | Impact |
|-------|--------|--------|
| Initial Access | Email piégé ouvre une porte d’entrée | Compromission poste RH |
| Escalade | Accès aux serveurs SIH | Perte de contrôle administratif |
| Exécution | Chiffrement des bases patients | Interruption soins |
| Exfiltration | Vol dossiers patients | Sanction CNIL / RGPD |

**Impact** : paralysie des soins, risque vital, sanctions réglementaires, perte de confiance publique.  

### Atelier 5 – Traitement du risque

- **Réduction** : sauvegardes hors ligne, segmentation IT/OT médical, EDR sur postes.  
- **Évitement** : abandon d’outils obsolètes non maintenus.  
- **ISO 27001 Annexe A** : A.8.13 Sauvegardes, A.5.7 Sécurité réseau, A.5.9 Sécurité physique, A.5.19 Relations fournisseurs.  

---

## Conclusion – Valeur pédagogique

Ces deux cas illustrent la **souplesse d’EBIOS RM** :  
- Dans la **banque**, l’accent est mis sur la fraude financière, les dépendances SWIFT et la conformité ACPR.  
- Dans la **santé**, la priorité est la continuité vitale des soins, la protection des données patients et la conformité NIS2/RGPD.  

En audit, la capacité à **adapter la méthode au secteur** est un critère clé de maturité. L’étude comparative montre que les RSSI doivent savoir **transposer les ateliers** à leur contexte tout en respectant la rigueur de la démarche.  

---

## Checklist RSSI – Étude de cas

- [ ] Adapter le périmètre au secteur (finance, santé, industrie).  
- [ ] Construire des couples SR/OV réalistes et validés par les métiers.  
- [ ] Élaborer des scénarios opérationnels plausibles et sectoriels.  
- [ ] Relier systématiquement les traitements aux mesures ISO 27001 Annexe A.  
- [ ] Documenter les preuves (cartes de menace, scénarios, plan de traitement).  
