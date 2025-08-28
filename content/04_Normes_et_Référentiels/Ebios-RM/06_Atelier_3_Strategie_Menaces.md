# Atelier 3 – Élaborer la stratégie de menace

## Objectif

L’atelier 3 vise à transformer les couples **Sources de Risque / Objectifs de Valeur (SR/OV)** en une **stratégie de menaces crédible**.  
Il s’agit d’identifier comment un adversaire peut exploiter l’écosystème de l’organisation (partenaires, sous-traitants, flux critiques) pour atteindre ses objectifs.  

Cet atelier permet de passer du **“qui et pourquoi”** (Atelier 2) au **“comment à haut niveau”**, en s’appuyant sur des référentiels internationaux comme **[[MITRE ATT&CK (MITRE ATT&CK – Adversarial Tactics, Techniques & Common Knowledge)]]** et la **Cyber Kill Chain**.

---

## Étapes

1. Identifier les **parties prenantes** internes et externes (fournisseurs, partenaires, hébergeurs).  
2. Cartographier les **interactions et dépendances** (flux critiques, prestataires, accès distants).  
3. Positionner les couples **SR/OV** sur cette carte.  
4. Élaborer les **scénarios stratégiques** d’attaque (par où l’adversaire peut passer).  

---

## Parties prenantes

| Rôle | Exemple |
|------|---------|
| Interne | DSI, RH, direction financière, métiers |
| Externe directe | Prestataires IT, hébergeurs cloud, infogérance |
| Externe indirecte | Fournisseurs de logiciels, partenaires, clients |

> [!info]  
> Une attaque peut viser une entité externe (ex. un sous-traitant) pour atteindre indirectement la cible principale : c’est le principe d’attaque par **supply chain**.

---

## Référentiels utiles

- **MITRE ATT&CK** : propose un catalogue mondialement reconnu de **tactiques** et **techniques** utilisées par les adversaires (ex : T1195 – Compromised Supply Chain).  
- **Cyber Kill Chain (Lockheed Martin)** : décrit les étapes d’une intrusion, de la reconnaissance à l’exfiltration/destruction.  
- **Lien avec EBIOS RM** : ces référentiels aident à donner du réalisme aux scénarios de menace et à s’assurer qu’aucune étape n’est oubliée.

---

## Exemple complet : APT et supply chain

**Source de risque (SR)** : Groupe APT soutenu par un État.  
**Objectif visé (OV)** : Propriété intellectuelle sensible d’un industriel européen.  
**Stratégie de menace** : Compromission de la **supply chain logicielle** (fournisseur tiers).  

**Déroulé plausible :**  
- L’APT cible un fournisseur de logiciels utilisé par l’industriel.  
- Compromission de mises à jour logicielles → introduction de malwares dans l’écosystème.  
- Déploiement silencieux du malware chez l’industriel.  
- Accès privilégié aux systèmes internes → exfiltration des données de R&D.  

**Référentiels mobilisés :**  
- MITRE ATT&CK : T1195 (*Supply Chain Compromise*).  
- Cyber Kill Chain : *Delivery* → *Exploitation* → *Installation* → *Command & Control* → *Actions on Objectives*.  

---

## Cas pratiques & retours d’expérience

- **SolarWinds (2020)** : compromission de la chaîne d’approvisionnement logicielle, permettant l’accès à des milliers d’organisations dans le monde.  
- **Colonial Pipeline (2021)** : attaque par ransomware sur un système IT qui a paralysé la distribution de carburant aux États-Unis.  
- **NotPetya (2017)** : initialement diffusé via un logiciel de comptabilité ukrainien compromis → propagation mondiale.  

Ces incidents démontrent la pertinence d’intégrer les tiers et la supply chain dans la stratégie de menace.  

---

## Preuves d’audit attendues

- Cartographie des dépendances internes et externes, validée par les métiers et la DSI.  
- Documentation des couples SR/OV associés aux scénarios stratégiques.  
- Référentiels utilisés (MITRE, Kill Chain) mentionnés explicitement.  
- Hypothèses et limites de l’analyse consignées.  

---

## Objectifs pédagogiques

À l’issue de l’atelier 3, l’apprenant est capable de :  
- Construire une **stratégie de menace** réaliste intégrant les dépendances et la supply chain.  
- Utiliser **MITRE ATT&CK** et la **Cyber Kill Chain** pour modéliser les modes d’action adverses.  
- Documenter les hypothèses et préparer les scénarios opérationnels de l’Atelier 4.  

---

## Checklist RSSI – Atelier 3

- [ ] Cartographier les parties prenantes (internes, externes, tiers).  
- [ ] Identifier les dépendances critiques (logiciels, flux, prestataires).  
- [ ] Positionner les couples SR/OV sur cette carte.  
- [ ] Construire des stratégies adverses réalistes (supply chain, APT, ransomware).  
- [ ] Valider l’analyse avec des référentiels (MITRE, Kill Chain).  
