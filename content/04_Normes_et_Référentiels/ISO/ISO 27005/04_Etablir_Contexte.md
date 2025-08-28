# 04_Etablir_Contexte

## Introduction

Établir le contexte est une étape déterminante de l’ISO/IEC 27005. Trop souvent négligée ou traitée de manière superficielle, elle conditionne pourtant la qualité de toute l’analyse de risques. Sans critères clairs ni seuils de référence, les résultats deviennent arbitraires et difficilement défendables en audit. L’objectif est donc de définir des **matrices d’impact et de vraisemblance**, ainsi que les notions d’appétence et de tolérance au risque, afin de garantir la cohérence des analyses.

---

## Livrables attendus

Un contexte bien établi doit produire :  

- Une matrice de critères d’impact (Confidentialité, Intégrité, Disponibilité, Traçabilité).  
- Des critères de vraisemblance adaptés au secteur.  
- La formalisation de l’appétence et de la tolérance au risque, validée par la gouvernance.  
- Des seuils de priorité définissant à partir de quand un risque devient « inacceptable ».  
- Un document de référence interne (« référentiel risques ») figé et réutilisé dans tous les projets.  

---

## Exemple de matrice d’impact

| Impact / Niveau | 1 | 2 | 3 | 4 | 5 |
|-----------------|---|---|---|---|---|
| **Disponibilité** | < 15 min | < 2 h | < 24 h | < 3 j | > 3 j |
| **Confidentialité** | Information publique | Données internes non sensibles | Données internes sensibles | Données clients critiques | Données réglementées (santé, financières) |
| **Intégrité** | Aucune conséquence | Légère altération réversible | Perturbation modérée | Altération critique des données | Corruption massive et irrécupérable |
| **Traçabilité** | Journaux complets | Journaux partiels | Retard dans la journalisation | Perte significative de logs | Aucune traçabilité possible |

---

## Exemple de critères de vraisemblance

| Niveau | Libellé   | Description |
|--------|-----------|-------------|
| 1      | Rare      | 1x/10 ans, pas d’antécédent interne |
| 2      | Peu probable | 1x/5 ans, déjà vu dans d’autres secteurs |
| 3      | Possible  | 1x/2 ans, déjà vu dans le secteur |
| 4      | Probable  | 1x/an, au moins un cas proche connu |
| 5      | Fréquente | Plusieurs fois par an, déjà constaté en interne |

---

## Appétence et seuils de priorité

L’organisation doit fixer son **appétence au risque** (niveau de risque accepté sans traitement supplémentaire) et ses **seuils de tolérance** (niveau maximum au-delà duquel le risque est jugé inacceptable). Ces éléments doivent être formalisés et validés par la gouvernance (comité de direction ou comité risques).

Par exemple :  
- Appétence : acceptation des risques « modérés » s’ils concernent des systèmes non critiques.  
- Tolérance : tout risque classé « élevé » ou « critique » doit être obligatoirement traité.  

---

> [!tip]  
> Figer ces échelles dans un document de référence risques et les réutiliser dans tous les projets.

---

> [!warning]  
> Risque d’incohérence si chaque projet définit ses propres échelles. Il est impératif de centraliser les matrices dans un référentiel unique validé par la gouvernance.

---

## Cas concrets

- **PME** : une société industrielle a défini un seuil d’appétence faible pour la disponibilité (< 2 h d’arrêt acceptable), mais tolère davantage de flexibilité sur la confidentialité de ses données internes.  
- **Santé** : un hôpital fixe une tolérance quasi nulle pour la disponibilité (arrêt maximum 15 min) en raison des conséquences vitales, et intègre cette exigence dans son PRA.  
- **Finance** : une banque a documenté des critères de vraisemblance basés sur les statistiques internes de fraudes, et les compare aux tendances sectorielles publiées par son CERT.  

---

## Objectifs pédagogiques

- Comprendre l’importance de l’établissement du contexte dans l’ISO 27005.  
- Savoir construire des matrices d’impact et de vraisemblance adaptées.  
- Formaliser l’appétence et la tolérance au risque.  
- Produire un document de référence stable et réutilisable.  

---

## Checklist RSSI

- [ ] Une matrice d’impact (CIDT) est-elle définie et validée ?  
- [ ] Les critères de vraisemblance sont-ils documentés et adaptés au secteur ?  
- [ ] L’appétence et la tolérance au risque sont-elles validées par la gouvernance ?  
- [ ] Les seuils de priorité sont-ils clairement définis et appliqués ?  
- [ ] Un document de référence risques est-il figé et diffusé à tous les projets ?  
