# 15 – Cas réels et enseignements EBIOS RM

## Objectif

Illustrer la méthode EBIOS RM à travers des **incidents historiques réels**.  
Chaque cas montre comment les ateliers auraient permis d’anticiper ou de mieux gérer l’incident.  

---

## Cas 1 – Attaque TV5 Monde (2015)

En avril 2015, la chaîne TV5 Monde subit une attaque massive revendiquée par un groupe se présentant comme affilié à Daesh. Les attaquants ont pris le contrôle des systèmes de diffusion et des réseaux sociaux.  

- **Contexte** : organisation médiatique, forte dépendance à la disponibilité des systèmes.  
- **Scénario** : compromission via intrusion réseau et escalade de privilèges.  
- **Impact** : interruption de diffusion, atteinte à l’image internationale, suspicion d’acteurs étatiques.  
- **Enseignement EBIOS RM** : un périmètre incluant la **disponibilité des services de diffusion** et une cartographie SR/OV intégrant des groupes APT auraient permis de prioriser des mesures de segmentation et supervision renforcée.  

---

## Cas 2 – NotPetya (2017)

En juin 2017, le rançongiciel NotPetya se propage via une mise à jour compromise d’un logiciel comptable ukrainien (MeDoc). Rapidement, il se répand à l’international, frappant Maersk, Saint-Gobain, Merck et d’autres.  

- **Contexte** : attaque supply chain avec impact mondial.  
- **Scénario** : compromission d’un éditeur logiciel → mise à jour piégée → propagation massive.  
- **Impact** : pertes financières de plusieurs milliards, arrêts de production, indisponibilité SI.  
- **Enseignement EBIOS RM** : l’Atelier 3 (stratégie de menaces) aurait permis d’intégrer le risque supply chain ; l’Atelier 5 (traitement) aurait préconisé la segmentation et la validation des mises à jour logicielles.  

---

## Cas 3 – SolarWinds (2020)

En 2020, SolarWinds, fournisseur américain de solutions de supervision, est victime d’une compromission supply chain touchant plus de 18 000 clients, dont des agences gouvernementales américaines.  

- **Contexte** : dépendance critique à un fournisseur logiciel tiers.  
- **Scénario** : insertion d’une porte dérobée dans les mises à jour Orion.  
- **Impact** : espionnage de masse, compromission de réseaux sensibles.  
- **Enseignement EBIOS RM** : l’Atelier 2 (couples SR/OV) aurait identifié l’**objectif visé = espionnage** par des APT, et l’Atelier 3 aurait permis de formaliser la menace supply chain.  

---

## Cas 4 – Hôpitaux français (2020–2021)

Plusieurs hôpitaux français (ex : Dax, Villefranche-sur-Saône) ont été victimes de ransomwares ayant paralysé leurs SI hospitaliers.  

- **Contexte** : secteur santé, dépendance vitale aux SI pour les soins.  
- **Scénario** : phishing ou vulnérabilités VPN → chiffrement des SIH → exfiltration données patients.  
- **Impact** : interruption de soins, retard dans les urgences, sanctions RGPD.  
- **Enseignement EBIOS RM** : l’Atelier 1 aurait identifié la **continuité des soins** comme valeur critique, et l’Atelier 5 aurait priorisé des sauvegardes hors ligne et des PCA.  

---

## Cas 5 – Colonial Pipeline (2021)

En mai 2021, Colonial Pipeline, opérateur de transport de carburant aux États‑Unis, est paralysé par une attaque ransomware (DarkSide). L’attaque a provoqué des ruptures d’approvisionnement en carburant sur la côte Est.  

- **Contexte** : secteur énergie, dépendance forte à l’OT et aux flux logistiques.  
- **Scénario** : compromission via un compte VPN non sécurisé → chiffrement systèmes IT → arrêt par précaution des systèmes OT.  
- **Impact** : rupture d’approvisionnement, impact économique et politique majeur.  
- **Enseignement EBIOS RM** : l’Atelier 3 aurait intégré les dépendances IT/OT, et l’Atelier 5 aurait préconisé des contrôles renforcés d’accès distant et de segmentation IT/OT.  

---

## Tableau de synthèse

| Incident | Secteur | Scénario | Impact | Enseignement EBIOS RM |
|----------|---------|----------|--------|------------------------|
| TV5 Monde (2015) | Média | Intrusion + contrôle diffusion | Atteinte image + indispo | Atelier 1 + 2 : périmètre + APT |
| NotPetya (2017) | Industrie / Monde | Supply chain (logiciel comptable) | Pertes Mds € | Atelier 3 : supply chain, Atelier 5 : segmentation |
| SolarWinds (2020) | Fournisseur IT | Backdoor mise à jour Orion | Espionnage de masse | Atelier 2 : SR/OV espionnage, Atelier 3 : menace supply chain |
| Hôpitaux FR (2020–21) | Santé | Phishing/VPN → ransomware | Soins paralysés + RGPD | Atelier 1 : continuité soins, Atelier 5 : sauvegardes/PCA |
| Colonial Pipeline (2021) | Énergie | Compte VPN → ransomware | Rupture carburant | Atelier 3 : dépendances IT/OT, Atelier 5 : segmentation |

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant est capable de :  
- Illustrer chaque atelier EBIOS RM par des cas réels.  
- Relier les incidents majeurs aux failles de périmètre, de stratégie ou de traitement.  
- Utiliser le tableau de synthèse pour animer un atelier ou une restitution COMEX.  

---

## Checklist RSSI – Cas réels

- [ ] Étudier au moins un cas réel par secteur d’activité (médias, finance, santé, énergie).  
- [ ] Relier chaque cas à l’atelier EBIOS correspondant.  
- [ ] Produire un tableau de synthèse pour diffusion interne.  
- [ ] Utiliser les cas réels comme support de sensibilisation auprès des métiers/COMEX.  
