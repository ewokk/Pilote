# 9. Partage d’information et coopération sectorielle

> [!info]  
> DORA impose aux entités financières de mettre en place des **mécanismes de partage d’information** sur les menaces, incidents et vulnérabilités, dans un cadre sécurisé, encadré et **mutualisé**.  
> **Dernière mise à jour** : 25 août 2025

---

## 9.1. Finalité et enjeux

Le partage d’information vise à :  
- **anticiper** les menaces émergentes par la mise en commun des indicateurs,  
- **accélérer** la détection et la réaction face aux incidents,  
- **réduire** l’asymétrie d’information entre grands acteurs et petites structures,  
- **renforcer** la résilience collective et la confiance dans le secteur financier.

---

## 9.2. Information Sharing and Analysis Centers (ISACs)

Les **ISACs** (Information Sharing and Analysis Centers) sont des structures sectorielles dédiées au **partage d’information** entre pairs et avec les autorités.  
- Exemple en Europe : **FS‑ISAC** (Financial Services ISAC), réseau mondial d’échange d’informations financières critiques.  
- Les ISACs permettent un **canal structuré** (bulletins, alertes, IOC, bonnes pratiques) et offrent un cadre **neutre** pour le partage de signaux faibles.  
- DORA encourage les entités à adhérer ou à créer des ISACs nationaux/sectoriels afin de mutualiser la détection et la réponse.

**Preuves attendues** : adhésion à un ISAC, relevés de participation, comptes‑rendus de réunions, IOC intégrés aux SIEM/SOC.

---

## 9.3. Coopération avec CERT‑EU et CSIRTs nationaux

La coopération avec :  
- **CERT‑EU** (Computer Emergency Response Team de l’Union européenne), qui agit comme point de coordination et de mutualisation pour les institutions et, dans certains cas, pour les entités financières transfrontalières.  
- Les **CSIRTs nationaux** désignés par NIS2, qui recevront notifications et alertes.  

**Attendus DORA** : les entités financières doivent démontrer qu’elles participent aux mécanismes de coopération et qu’elles alimentent le retour d’expérience sectoriel.

**Preuves** : échanges avec CERT‑EU, tickets CSIRT, IOC partagés, PV de comités sectoriels.

---

## 9.4. Modalités pratiques du partage

- **Types d’information** : IOC (indicators of compromise), tactiques MITRE ATT&CK, alertes sectorielles, bonnes pratiques de durcissement, leçons post‑incident.  
- **Canaux** : bulletins ISAC, portails sécurisés, plateformes MISP (Malware Information Sharing Platform), comités inter‑banques/assureurs.  
- **Cadre juridique** : respect du secret professionnel, anonymisation si nécessaire, compatibilité RGPD.

---

## 9.5. Cas concrets et historiques

- **FS‑ISAC (2010s‑2020s)** : a permis la détection anticipée de campagnes frauduleuses ciblant les banques en ligne.  
- **Opération Avalanche (2016)** : démantèlement international d’un botnet bancaire grâce au partage d’IOC entre CERT‑EU, FS‑ISAC et plusieurs banques européennes.  
- **Campagnes de rançongiciel 2020‑2022** : informations sectorielles partagées par les ISACs et CERT‑EU ont permis de bloquer des indicateurs avant propagation massive.  

---

## 9.6. Checklist RSSI – Partage d’information

- [ ] Adhérer à un **ISAC sectoriel** (FS‑ISAC ou équivalent national/UE).  
- [ ] Mettre en place un **processus d’intégration des IOC** reçus dans les outils de détection (SIEM/SOC, MISP).  
- [ ] Documenter les **échanges avec CERT‑EU/CSIRTs** (tickets, comptes‑rendus, IOC partagés).  
- [ ] Définir une **procédure interne** de partage (qui, quoi, comment, quand), incluant l’anonymisation et la conformité RGPD.  
- [ ] Former les équipes à l’usage des plateformes de partage (MISP, portails sécurisés, bulletins ISAC).  

---

## 9.7. Objectifs pédagogiques

À l’issue du chapitre, le lecteur :  
- comprend le rôle des **ISACs** et sait démontrer son adhésion,  
- connaît la coopération avec **CERT‑EU** et **CSIRTs nationaux**,  
- est capable de mettre en œuvre un **processus structuré de partage**,  
- sait produire les **preuves d’audit** (adhésion, IOC reçus/intégrés, comptes‑rendus, tickets).  
