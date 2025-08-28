# 3 - Les 6 objectifs & 12 exigences PCI DSS v4.0

## Introduction

Le standard PCI DSS repose sur une structure claire et rigoureuse, organisée autour de **6 grands objectifs de sécurité**.  
Ces objectifs sont déclinés en **12 exigences principales**, chacune subdivisée en plusieurs sous-exigences.

Cette structuration permet d’aligner les exigences PCI avec les bonnes pratiques de cybersécurité et les objectifs métier de réduction des risques.

---

## Les 6 objectifs fondamentaux de sécurité

| Objectif n° | Objectif de sécurité |
|------------:|----------------------|
| 1 | Construire et maintenir une infrastructure réseau sécurisée |
| 2 | Protéger les données des titulaires de carte |
| 3 | Maintenir un programme de gestion des vulnérabilités |
| 4 | Mettre en œuvre des mesures de contrôle d’accès strictes |
| 5 | Surveiller et tester régulièrement les réseaux |
| 6 | Maintenir une politique de sécurité de l’information |

> [!info]
> Chaque objectif est atteint grâce à une ou plusieurs **exigences** obligatoires, listées dans la section suivante.

---

## Vue globale des 12 exigences PCI DSS

| N° | Exigence PCI DSS | Résumé |
|----|------------------|--------|
| 1 | Installer et maintenir des contrôles de sécurité réseau | Utilisation de pare-feu, filtrage, segmentation |
| 2 | Configurer les systèmes en toute sécurité | Éviter les paramètres par défaut, durcissement |
| 3 | Protéger les données de titulaires stockées | Chiffrement, masquage, durée de rétention |
| 4 | Protéger les données pendant leur transmission | Protocoles sécurisés, VPN, TLS |
| 5 | Protéger tous les systèmes contre les malwares | Anti-malware, protection des terminaux |
| 6 | Développer et maintenir des systèmes sécurisés | Gestion des correctifs, dev sécurisé |
| 7 | Restreindre l’accès aux données par besoin métier | Moindre privilège, rôles définis |
| 8 | Identifier et authentifier les utilisateurs | MFA, gestion des identifiants |
| 9 | Restreindre l’accès physique aux données | Badge, contrôle physique, surveillance |
| 10 | Suivre et surveiller tous les accès réseau | Logs, SIEM, alertes, corrélation |
| 11 | Tester régulièrement les systèmes de sécurité | Scan vulnérabilité, tests d’intrusion |
| 12 | Maintenir une politique de sécurité | Gouvernance, sensibilisation, documentation |

---

## Vue schématique (ASCII)

```
+-------------------------------------------------------------+
| Objectifs PCI DSS        | Exigences associées              |
+--------------------------+----------------------------------+
| Réseau sécurisé          | 1. Pare-feu                      |
|                          | 2. Configs sécurisées           |
| Protection des données   | 3. Données stockées              |
|                          | 4. Données en transit            |
| Gestion vulnérabilités   | 5. Anti-malware                  |
|                          | 6. Sécurité applicative          |
| Contrôle des accès       | 7. Accès logique                 |
|                          | 8. Authentification              |
| Supervision & logs       | 9. Accès physique                |
|                          | 10. Surveillance & alertes       |
| Gouvernance SSI          | 11. Tests sécurité               |
|                          | 12. Politique sécurité           |
+--------------------------+----------------------------------+
```

---

## Logique pédagogique

- Les exigences sont **cumulatives et interdépendantes** : un défaut sur une seule peut invalider la conformité.
- Le **niveau d’exigence augmente** dans PCI DSS v4.0 (ex. : MFA obligatoire dans plus de cas, preuve continue requise).
- La norme permet désormais une approche **personnalisée** (customized approach), à condition de démontrer l’atteinte de l’objectif.

---

## Exigences personnalisées vs standards

| Approche | Description | Exemple |
|---------|-------------|---------|
| **Approche standard** | Mise en œuvre des exigences telles qu’écrites | Utiliser un pare-feu + segmentation réseau |
| **Approche personnalisée** | Dériver une solution technique différente atteignant le même objectif | Architecture Zero Trust avec micro-segmentation validée par preuves formelles |

> [!warning]
> L’approche personnalisée **exige une documentation rigoureuse** et est soumise à validation par un **QSA (Qualified Security Assessor)**.

---

## Transition entre PCI DSS v3.2.1 et v4.0

| Domaine | Évolution majeure en v4.0 |
|--------|----------------------------|
| MFA | Obligatoire pour plus de cas |
| Documentation | Preuves continues requises |
| Gouvernance | Rôle du RSSI renforcé |
| Flexibilité | Ajout de l'approche personnalisée |
| Journalisation | Refonte des exigences sur les logs |
| Tests sécurité | Recommandations plus poussées sur les scans et pentests |

> [!tip]
> La version 3.2.1 reste valide jusqu’au 31 mars 2024.  
> La v4.0 devient obligatoire **à partir du 1er avril 2024**.

---

## Conclusion

Ce chapitre constitue la **colonne vertébrale** du standard PCI DSS.  
Les exigences seront désormais détaillées **une par une** dans la partie suivant avec un focus technique et organisationnel.

> [!attention]
> Il est **essentiel de comprendre la logique des objectifs** pour réussir un audit ou une mise en conformité efficace.
