# Cadres et définitions essentiels

## Définition du risque

Le **risque** en cybersécurité correspond à la combinaison de plusieurs éléments :  
- Un **événement redouté** (dommage potentiel pour l’organisation).  
- Une **source de risque** (adversaire, menace, facteur).  
- Une **vraisemblance** (probabilité ou effort requis pour la matérialisation).  

Cette approche correspond à la logique d’[[ISO/IEC 27005 (ISO/IEC 27005 – Information security risk management)]] et du [[NIST RMF (NIST Risk Management Framework)]], mais EBIOS RM insiste davantage sur la modélisation des intentions adverses et des scénarios.

---

## Éléments clés de vocabulaire

| Terme              | Définition synthétique |
|--------------------|-------------------------|
| **Valeur métier**  | Élément essentiel au fonctionnement de l’organisation (données clients, continuité de service, propriété intellectuelle). |
| **Bien support**   | Ressource technique ou humaine qui porte la valeur métier (serveur, logiciel, employé, prestataire). |
| **Événement redouté** | Dommage ou perte qui menace une valeur métier (fuite de données, arrêt de production, indisponibilité). |
| **Source de risque** | Acteur ou facteur pouvant générer une menace (État, cybercriminel, sous-traitant défaillant, salarié mécontent). |
| **Objectif visé**  | Intention poursuivie par la source de risque (espionnage, gain financier, sabotage). |

---

## Notions développées

### Actif (Asset)
Un **actif** est tout élément – technique, informationnel ou humain – qui a de la valeur pour l’organisation.  
Par exemple, un **contrat client** dans une banque est un actif informationnel critique, tandis qu’un **contrôleur industriel (PLC)** dans une usine est un actif opérationnel.  
En pratique, la cartographie des actifs est la première étape pour relier les risques techniques aux impacts métiers.  

### Menace (Threat)
Une **menace** n’est pas seulement un risque théorique : elle combine **capacité** et **intention**.  
- Capacité : un groupe APT disposant de moyens techniques avancés.  
- Intention : par exemple voler de la propriété intellectuelle ou perturber une infrastructure critique.  
Ainsi, un ransomware opportuniste contre un hôpital français (2021) illustre une menace à la fois technique et sociétale.  

### Scénario opérationnel
Un **scénario opérationnel** est la mise en récit d’une attaque crédible, reliant une source de risque, un vecteur et un impact.  
Exemple : *un employé reçoit un email de phishing → ouvre une pièce jointe malveillante → l’attaquant prend le contrôle de son poste → latéralisation vers les serveurs de production → exfiltration de la base clients*.  
Ce concept est central dans EBIOS RM car il permet de rendre la menace tangible et de prioriser les mesures.  

### Risque brut vs risque résiduel
- **Risque brut** : niveau de risque évalué avant mise en place de mesures de sécurité. Ex : sans protection, un vol de données clients pourrait coûter 10 M€.  
- **Risque résiduel** : niveau de risque après application des mesures. Ex : après chiffrement et segmentation, le coût potentiel chute à 1 M€.  
Cette distinction est essentielle pour démontrer la **valeur ajoutée des investissements sécurité** auprès du COMEX et lors d’audits (preuve d’efficacité des contrôles).  

---

## Intégration avec d’autres cadres

- Dans **ISO 27005**, les notions d’*actifs* et de *sources de menace* sont présentes mais décrites de façon plus générique.  
- Le **NIST RMF** parle plutôt de *vulnerabilities* et *threat events*, avec un accent sur les contrôles techniques.  
- **FAIR** quantifie le risque financier en distinguant *Loss Event Frequency* (probabilité) et *Loss Magnitude* (impact), ce qui peut compléter la vision EBIOS RM.  

EBIOS RM se distingue par son équilibre : suffisamment technique pour les RSSI, mais assez stratégique pour les COMEX.  

---

## Cas pratiques & retours d’expérience

- **Banque** : un actif critique est la base de données clients. Un scénario opérationnel plausible est un accès non autorisé via un sous-traitant compromis (ex : attaque Target 2013 via un fournisseur HVAC).  
- **Industriel** : un automate programmable industriel (PLC) est un actif vital. La menace Stuxnet (2010) illustre comment un malware peut saboter la production.  
- **Santé** : pour un hôpital, l’actif essentiel est la disponibilité du système de gestion des patients. Les attaques ransomware de 2021 ont transformé une faille IT en crise sanitaire.  

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant sera capable de :  
- Définir clairement les concepts clés (actif, menace, scénario, risque brut/résiduel).  
- Relier ces notions aux impacts métiers et stratégiques.  
- Faire le lien entre EBIOS RM et d’autres cadres (ISO, NIST, FAIR).  
- Illustrer chaque notion par un exemple concret.  

---

## Checklist RSSI – Définitions

- [ ] Cartographier les actifs critiques (techniques, métiers, humains).  
- [ ] Identifier les menaces pertinentes (APT, cybercriminalité, erreurs internes).  
- [ ] Construire au moins un scénario opérationnel par actif majeur.  
- [ ] Évaluer séparément risque brut et résiduel pour justifier les mesures.  
- [ ] Comparer le vocabulaire utilisé avec ISO 27005 et NIST RMF pour assurer l’alignement multi-référentiels.  
