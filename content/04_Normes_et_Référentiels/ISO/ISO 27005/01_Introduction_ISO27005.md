# 01_Introduction_ISO27005

## Introduction

Le chapitre d’introduction de l’ISO/IEC 27005 a pour but de poser les bases communes de compréhension nécessaires à toute démarche de gestion des risques. Trop souvent, la gestion des risques reste cantonnée à un discours théorique, voire à une approche documentaire. Pour éviter ce travers, l’introduction doit apporter un vocabulaire opérationnel partagé par toutes les parties prenantes : RSSI, métiers, auditeurs, direction générale. Ce langage commun est essentiel pour assurer la cohérence des analyses,...

L’ISO 27005 se situe au cœur de la famille ISO 27000 : l’ISO 27001 impose l’identification et le traitement des risques, l’ISO 27002 décrit les mesures de sécurité à appliquer, et la 27005 fournit les concepts et la méthode pour relier ces deux mondes. Ainsi, dès l’introduction, il est nécessaire de comprendre que la 27005 n’est pas une norme « optionnelle », mais le socle permettant de justifier et de prioriser toutes les mesures de sécurité retenues dans le cadre d’un SMSI.

---

## La famille ISO/IEC 27000

> [!info]  
> La norme ISO/IEC 27005 s’inscrit dans une **famille de normes complémentaires**, avec des rôles bien distincts.

| Norme                 | Rôle                                                    |
| --------------------- | ------------------------------------------------------- |
| ISO/IEC 27000         | Terminologie, principes généraux                        |
| ISO/IEC 27001         | Exigences pour le SMSI                                  |
| ISO/IEC 27002         | Mesures de sécurité (guide de bonnes pratiques)         |
| ==**ISO/IEC 27005**== | Gestion des risques liés à la sécurité de l'information |
| ISO/IEC 27017         | Sécurité du cloud                                       |
| ISO/IEC 27018         | Données personnelles dans le cloud                      |
| ISO/IEC 27701         | Extension vie privée (PIMS)                             |

## Vocabulaire opérationnel de base

Afin de garantir une compréhension homogène, voici les définitions essentielles :

- **Actif** : tout élément de valeur pour l’organisation (données, applications, équipements, processus, image de marque). Exemple : une base de données clients ou un système de contrôle industriel.  
- **Menace** : cause potentielle d’un incident de sécurité. Exemple : cybercriminel externe, collaborateur négligent, sinistre physique.  
- **Vulnérabilité** : faiblesse exploitable d’un actif ou d’un dispositif de protection. Exemple : absence de correctif sur un serveur, mot de passe faible, configuration par défaut.  
- **Scénario de risque** : combinaison d’une menace exploitant une vulnérabilité sur un actif et provoquant un impact. Exemple : ransomware (menace) exploitant une faille non patchée (vulnérabilité) pour chiffrer un serveur de fichiers (actif).  
- **Risque brut** : niveau de risque évalué avant mise en place de mesures de traitement.  
- **Risque résiduel** : niveau de risque subsistant après la mise en œuvre des mesures de sécurité décidées.  

---

## Source de menace vs événement redouté

L’ISO 27005 insiste sur une distinction fondamentale :  

- **Source de menace** : l’origine possible d’un risque (acteur malveillant, aléa technique, catastrophe naturelle).  
- **Événement redouté** : la manifestation concrète de ce risque pour l’organisation (perte de disponibilité, fuite de données, fraude).  

Cette distinction est critique pour formuler correctement les scénarios et éviter les confusions lors des ateliers de risques. Exemple : la source de menace est un cybercriminel ; l’événement redouté est l’indisponibilité de la plateforme de réservation d’une compagnie aérienne, entraînant perte de chiffre d’affaires et atteinte à la réputation.

---

## Mini glossaire

- **Actif** : élément de valeur à protéger.  
- **Menace** : cause potentielle d’incident.  
- **Vulnérabilité** : faiblesse pouvant être exploitée.  
- **Scénario de risque** : combinaison menace + vulnérabilité + actif.  
- **Risque brut** : risque avant mesures.  
- **Risque résiduel** : risque après mesures.  
- **Source de menace** : origine potentielle de l’incident.  
- **Événement redouté** : conséquence concrète sur l’organisation.  

---

## Cas concrets

- **Industrie** : l’attaque Stuxnet (2010) a démontré comment une source de menace étatique pouvait exploiter des vulnérabilités d’automates industriels, provoquant l’événement redouté de sabotage d’infrastructures nucléaires.  
- **Santé** : des hôpitaux français victimes de ransomware ont illustré l’événement redouté d’indisponibilité vitale des systèmes médicaux, causé par une menace cybercriminelle exploitant la vulnérabilité de systèmes non patchés.  
- **Finance** : l’attaque NotPetya (2017) a touché des organisations financières et logistiques en exploitant un logiciel vulnérable. L’événement redouté fut la paralysie d’opérations mondiales critiques.  

---

## Objectifs pédagogiques

- Maîtriser le vocabulaire opérationnel de la gestion des risques.  
- Comprendre et expliquer la distinction entre source de menace et événement redouté.  
- Être capable d’illustrer chaque notion par des cas concrets sectoriels.  
- Poser les bases pour des analyses de risques homogènes, traçables et auditables.  

---

## Checklist RSSI

- [ ] Le vocabulaire de base (actif, menace, vulnérabilité, risque brut/résiduel) est-il documenté et partagé ?  
- [ ] La distinction entre source de menace et événement redouté est-elle comprise et utilisée dans nos analyses ?  
- [ ] Un mini glossaire interne est-il disponible pour éviter toute ambiguïté ?  
- [ ] Nos cas pratiques intègrent-ils bien des scénarios complets (actif, menace, vulnérabilité, impact) ?  
- [ ] Ces notions sont-elles intégrées dans nos formations internes et ateliers de risques ?  
