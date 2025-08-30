# 02_Analyse_Strategique_Menaces

L’analyse stratégique des menaces cyber dans le cadre de la **LPM 2024–2030** doit dépasser les généralités pour se concentrer sur les acteurs, techniques et tendances qui façonnent concrètement le paysage de la menace. La France, en tant que puissance européenne disposant de capacités militaires, nucléaires et technologiques de premier plan, se trouve directement exposée à des adversaires étatiques, des groupes criminels organisés et des coalitions hybrides où les frontières entre espionnage, sabot...

Contrairement à la période 2019–2025 où l’accent était mis sur la montée en puissance interne, la nouvelle LPM identifie explicitement des **adversaires numériques** et prévoit des moyens adaptés pour contrer leurs stratégies. Cette reconnaissance traduit une maturité : la menace cyber n’est plus hypothétique, elle est constante, organisée et souvent intégrée dans des campagnes politico-militaires plus larges.  

---

## Menaces étatiques et groupes APT

Les **groupes APT (Advanced Persistent Threats)**, souvent liés à des États, constituent la menace la plus critique. Les campagnes attribuées à des acteurs russes (APT28, Sandworm) et chinois (APT10, Hafnium) illustrent la capacité de ces organisations à infiltrer des ministères, des opérateurs de défense et des infrastructures critiques avec des techniques sophistiquées (exploits zero-day, campagnes supply chain, opérations hybrides combinant cyber et influence).  

L’épisode **NotPetya en 2017**, initialement dirigé contre l’Ukraine mais ayant frappé Saint-Gobain, Maersk et d’autres entreprises européennes, illustre parfaitement le danger : un outil développé dans un cadre géopolitique peut causer des dommages massifs bien au-delà de la cible initiale.  

---

## Menaces criminelles : rançongiciels et fraude

Les **groupes cybercriminels organisés** exploitent la porosité des défenses pour cibler hôpitaux, collectivités locales et industries. Les campagnes de rançongiciels comme **Ryuk, Conti ou LockBit** ont entraîné l’arrêt de services hospitaliers français en 2020–2022, forçant des évacuations de patients et des bascules papier. La LPM prend acte de ces risques systémiques : un hôpital hors service n’est pas seulement un problème local, mais une atteinte à la continuité nationale.  

La fraude en ligne, notamment sur les systèmes financiers, reste également un enjeu stratégique : compromission de systèmes de paiement, détournements de transactions, fraudes au président, attaques contre les infrastructures de confiance (PKI, certificats). Ces actions, bien que motivées par le gain, peuvent converger avec les intérêts d’États hostiles, brouillant les lignes entre criminalité et guerre hybride.  

---

## Hacktivisme et opérations d’influence

Les **hacktivistes** exploitent les crises internationales pour mener des attaques symboliques : défacements de sites institutionnels, dénis de service distribués (DDoS), diffusion de messages de propagande. Les campagnes pro-russes menées depuis le début de la guerre en Ukraine ont multiplié les actions contre des sites publics européens, souvent plus pour marquer une présence médiatique que pour infliger des dommages techniques. Toutefois, ces actions testent la résilience des infrastructures, saturent les équipes de sécurité et participent à une guerre cognitive plus large.  

---

## Chaînes logistiques et dépendances technologiques

La **supply chain** est devenue l’un des vecteurs les plus critiques. L’affaire **SolarWinds (2020)** a démontré la capacité d’un acteur étatique à compromettre un fournisseur logiciel central pour accéder aux systèmes de centaines d’organisations. La dépendance de l’Europe à des technologies non souveraines (Cloud américain, composants électroniques asiatiques, solutions logicielles critiques hors contrôle européen) constitue un risque systémique.  

La LPM identifie la nécessité de développer des **capacités souveraines** : Cloud de confiance, filières cryptographiques nationales, production sécurisée de composants stratégiques. Pour les RSSI, cela se traduit par un impératif d’**auditer la chaîne de sous-traitance** et de démontrer une maîtrise des dépendances critiques.  

---

## Schéma ASCII – Acteurs et menaces

```
[États hostiles] ----> [Cyberattaques ciblées, espionnage, sabotage]
[Cybercriminels] ---> [Rançongiciels, fraude financière, extorsion]
[Hacktivistes]  ----> [DDoS, défacements, propagande]
[Chaînes logistiques] -> [Supply chain, dépendances Cloud/techno]
```

---

## Cas pratiques & retours d’expérience

- **Saint-Gobain (2017)** : impact financier de 250 M€ suite à NotPetya.  
- **CHU de Rouen (2019)** et **AP-HP (2020–2021)** : paralysie partielle des services médicaux après rançongiciels.  
- **SolarWinds (2020)** : 18 000 clients compromis, dont des agences gouvernementales et de grandes entreprises.  

Ces incidents démontrent que la menace cyber n’est plus un risque abstrait, mais une réalité avec des impacts économiques, opérationnels et humains.  

---

## Conseils opérationnels pour RSSI

Le RSSI doit construire une cartographie des menaces spécifique à son secteur, intégrer les scénarios APT dans ses analyses de risque, renforcer les mécanismes de détection sur les rançongiciels et formaliser des clauses contractuelles de sécurité dans la supply chain. Les exercices de crise doivent inclure non seulement des scénarios internes (panne, intrusion), mais aussi des scénarios **supply chain** ou **dépendances Cloud**. Enfin, la sensibilisation du COMEX doit insister sur la réalité des impacts : pertes financières, responsabilité légale, atteinte à la continuité nationale.  

---

## Objectifs pédagogiques

- Identifier les principaux acteurs de la menace : États, cybercriminels, hacktivistes, supply chain.  
- Analyser les cas concrets (NotPetya, rançongiciels hospitaliers, SolarWinds).  
- Comprendre les risques liés aux dépendances non-européennes et à la chaîne logistique.  
- Être capable de traduire ces menaces en scénarios concrets pour le PCA, PRA et les exercices de crise.  

---

## Checklist RSSI – Chapitre 02

- [ ] Mon analyse de risque intègre-t-elle les **APT étatiques** avec scénarios d’espionnage ou de sabotage ?  
- [ ] Mes dispositifs de détection et de réponse couvrent-ils les **rançongiciels** et autres attaques criminelles ?  
- [ ] Ai-je pris en compte les menaces **hacktivistes** et leur impact en communication de crise ?  
- [ ] Ai-je audité ma **supply chain** et mes dépendances Cloud pour identifier les risques systémiques ?  
