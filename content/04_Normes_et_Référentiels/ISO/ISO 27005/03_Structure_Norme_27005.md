# 03_Structure_Norme_27005

## Introduction

L’ISO/IEC 27005 s’appuie sur une structure de processus claire et cyclique qui permet de gérer les risques de manière continue. Là où certains documents se contentent d’un schéma théorique, il est essentiel de traduire cette structure en un enchaînement opérationnel, avec des intrants et des livrables identifiés à chaque étape. Cette approche évite que la gestion des risques reste un exercice ponctuel ou abstrait : elle devient un véritable outil de pilotage de la sécurité.

---

## Processus global

Le cycle de la norme peut être représenté de manière simplifiée ainsi :

```
Contexte → Identification → Analyse → Évaluation → Traitement
                  ↘ Communication/Surveillance (en continu)
```

Ce schéma illustre que, parallèlement à chaque étape, des activités transverses de communication et de surveillance alimentent le processus. La gestion des risques n’est donc pas linéaire mais itérative et vivante.

---

## Intrants et sortants par étape

**1. Établissement du contexte**  
- Intrants : objectifs métier, exigences réglementaires, périmètre du SMSI, cartographie des actifs.  
- Sortants : critères d’impact et de vraisemblance, seuils de tolérance, définition des responsabilités.  

**2. Identification des risques**  
- Intrants : liste des actifs, sources de menace, vulnérabilités connues.  
- Sortants : scénarios de risques documentés (actif + menace + vulnérabilité + impact).  

**3. Analyse des risques**  
- Intrants : scénarios de risques identifiés, critères établis au préalable.  
- Sortants : niveaux de risque brut (combinaison impact × vraisemblance).  

**4. Évaluation des risques**  
- Intrants : résultats de l’analyse, seuils d’acceptabilité fixés au contexte.  
- Sortants : décision sur l’acceptation, le traitement ou le transfert du risque.  

**5. Traitement des risques**  
- Intrants : liste des risques à traiter.  
- Sortants : plan de traitement des risques, mise à jour de la Déclaration d’applicabilité (SoA), actions de suivi.  

**Activités transverses : Communication et surveillance**  
- Intrants : informations des étapes précédentes, incidents, retours d’expérience.  
- Sortants : indicateurs (KPI), rapports périodiques, décisions d’amélioration continue.  

---

## Cas concrets

- **Banque** : une institution financière établit son contexte à partir des contraintes réglementaires (Bâle III, LCB-FT), identifie ses risques via la cartographie des processus de paiement, et produit en sortie un plan de traitement détaillant la mise en œuvre d’un SOC et la révision régulière de ses KPI.  
- **Santé** : un hôpital définit son contexte par la criticité des données patient, identifie les menaces liées aux rançongiciels, analyse leur impact (indisponibilité vitale), puis met en place un PRA, avec communication régulière vers la direction médicale.  

---

## Objectifs pédagogiques

- Comprendre la structure du processus ISO 27005 et ses interactions.  
- Savoir identifier les intrants et sortants attendus à chaque étape.  
- Relier le cycle de gestion des risques à des cas concrets sectoriels.  
- Insister sur le rôle transversal de la communication et de la surveillance continue.  

---

## Checklist RSSI

- [ ] Le processus de gestion des risques est-il documenté avec ses étapes et ses livrables ?  
- [ ] Les critères de contexte (impact, vraisemblance, tolérance) sont-ils définis et validés ?  
- [ ] Chaque risque identifié est-il formalisé dans un scénario complet ?  
- [ ] Les niveaux de risque brut et résiduel sont-ils calculés et justifiés ?  
- [ ] Les résultats (plans de traitement, SoA) sont-ils communiqués et suivis régulièrement ?  
