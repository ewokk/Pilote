# 01 - Introduction aux IDS et IPS

> [!info]
> Présentation des concepts de base IDS / IPS, objectifs, contexte d’apparition, enjeux dans une architecture sécurité moderne

---

## Définition générale

- **IDS (Intrusion Detection System)** : système de **détection** d’intrusions (analyse passive, alerte uniquement)
- **IPS (Intrusion Prevention System)** : système de **prévention** d’intrusions (détection + blocage actif)

---

## Objectifs d’un IDS/IPS

- **Surveiller le trafic réseau ou système**
- **Détecter des comportements anormaux ou malveillants**
- **Réduire le temps de réaction face à une attaque**
- **Améliorer la visibilité sur les vecteurs de compromission**
- **Documenter les attaques pour une investigation forensic**

---

## Historique

- Fin des années 80 : premières recherches académiques (James Anderson, Dorothy Denning)
- Années 90 : premières implémentations (Snort, Bro)
- Années 2000 : émergence des **IPS** pour automatiser les réponses
- Aujourd’hui : solutions hybrides intégrées aux NGFW, SIEM, SOAR

---

## IDS vs IPS : tableau comparatif

| Critère                      | IDS                              | IPS                              |
|-----------------------------|----------------------------------|----------------------------------|
| Mode                        | Passif                           | Actif                            |
| Action                      | Détection, alerte                | Blocage, prévention              |
| Impact sur trafic           | Aucun                            | Possiblement intrusif            |
| Placement typique           | Hors flux (via TAP/SPAN)         | In-line (au cœur du flux)        |
| Exemple                     | Snort en mode alerte             | Suricata en mode blocage         |

> [!warning]
> L’IPS pouvant bloquer du trafic légitime, une mauvaise configuration peut provoquer des interruptions de service.

---

## Intérêt stratégique

- Complément des pare-feux : un IDS voit ce que le firewall laisse passer
- Intégration dans le SOC pour corrélation (via SIEM)
- Outil clé pour une approche **défense en profondeur**

