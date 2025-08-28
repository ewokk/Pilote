# Atelier 2 – Identifier les couples SR/OV

## Objectif

L’atelier 2 vise à associer chaque **source de risque (SR)** à un **objectif visé (OV)**, afin de comprendre **qui attaque**, **pourquoi** et **avec quels moyens**.  
Cette étape est déterminante : elle permet de modéliser les intentions adverses et de préparer la stratégie de menaces (Atelier 3).

---

## Étapes de l’atelier

1. Identifier les **sources de risque** (adversaires, facteurs de menace).  
2. Identifier les **objectifs visés** (valeurs ou actifs recherchés).  
3. Former les **couples SR/OV**.  
4. Évaluer chaque couple en fonction de la **motivation**, des **ressources** et du **niveau d’activité**.  

---

## Typologie des sources de risque

| Type                  | Exemple |
|-----------------------|---------|
| Cybercriminel         | Recherche de gain financier |
| Insider malveillant   | Vengeance, sabotage |
| État ou groupe APT    | Espionnage, déstabilisation |
| Sous-traitant négligent | Fuite par erreur humaine |

---

## Objectifs visés

- Accéder à des données sensibles.  
- Saboter un service ou une infrastructure critique.  
- Collecter des informations confidentielles pour espionnage.  
- Détourner des flux financiers.  

---

## Exemple complet de couple SR/OV

| Élément | Description |
|---------|-------------|
| **Source de risque (SR)** | Cybercriminel organisé opérant à l’international |
| **Objectif visé (OV)** | Base de données clients d’une banque (informations personnelles + numéros de compte) |
| **Motivation** | Forte : objectif financier direct via revente sur le Dark Web |
| **Ressources** | Moyennes à élevées : capacités de phishing, d’exploitation de vulnérabilités connues, achat d’outils malveillants |
| **Niveau d’activité** | Élevé : attaques fréquentes et organisées contre le secteur bancaire |

**Scénario associé :**  
Le cybercriminel lance une campagne de phishing ciblée contre les employés de la banque. Après compromission d’un poste interne, il se déplace latéralement vers les serveurs applicatifs, puis extrait la base de données clients pour la revendre.  

---

## Mini-exemples sectoriels

- **Banque** : groupe APT visant le système SWIFT → objectif = détourner des flux financiers.  
- **Santé** : insider malveillant visant les dossiers patients → objectif = falsification d’informations médicales.  
- **Industrie** : État hostile visant les automates OT → objectif = sabotage de la production.  

Ces exemples montrent que la variété des couples SR/OV reflète les spécificités sectorielles.

---

## Erreurs fréquentes

> [!warning]  
> Les erreurs les plus courantes dans l’atelier 2 :  
> - Formuler des **objectifs trop vagues** (“accéder aux données”) sans préciser la nature et la finalité.  
> - Ne pas valider les couples avec les **métiers** (risque de rester dans une vision purement IT).  
> - Se limiter aux **attaques techniques**, en oubliant les menaces internes, contractuelles ou réglementaires.  
> - Évaluer tous les couples comme également prioritaires, ce qui dilue l’analyse.  

---

## Preuves d’audit attendues

- Liste documentée des **sources de risque** et de leurs caractéristiques.  
- Inventaire des **objectifs visés**, validé par les métiers.  
- Tableaux de couples SR/OV avec date, auteur et méthode d’évaluation.  
- Historique des arbitrages (pourquoi certains couples sont jugés non pertinents).  

---

## Cas pratiques & retours d’expérience

- **Banque X** : en 2013, l’attaque contre Target est passée par un sous-traitant HVAC. SR = fournisseur négligent ; OV = données cartes bancaires. Conséquence : plus de 40 millions de cartes compromises.  
- **Hôpital Y** : en 2021, des rançongiciels ont visé directement les bases de données patients. SR = cybercriminel opportuniste ; OV = indisponibilité + revente de données.  
- **Industrie Z** : Stuxnet (2010) montre qu’un État peut viser un objectif industriel stratégique (centrifugeuses) via un scénario technique complexe.  

---

## Objectifs pédagogiques

À l’issue de l’atelier 2, l’apprenant est capable de :  
- Identifier et caractériser les sources de risque.  
- Relier ces sources à des objectifs métiers précis et stratégiques.  
- Construire des couples SR/OV exploitables pour la suite de la démarche.  
- Éviter les erreurs fréquentes de formulation et de validation.  

---

## Checklist RSSI – Atelier 2

- [ ] Lister toutes les sources de risque pertinentes (internes, externes, humaines, techniques).  
- [ ] Définir des objectifs visés précis et validés par les métiers.  
- [ ] Construire un tableau de couples SR/OV avec évaluation motivation/ressources/activité.  
- [ ] Documenter au moins un scénario détaillé par couple critique.  
- [ ] Vérifier la cohérence des couples avec les cas passés ou incidents sectoriels.  
