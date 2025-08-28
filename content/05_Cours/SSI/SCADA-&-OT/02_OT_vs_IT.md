# OT vs IT — différences fondamentales

## Objectifs différents

| Critère      | IT (Systèmes d’information)   | OT (Systèmes industriels)        |
|--------------|-------------------------------|----------------------------------|
| Priorité     | Confidentialité > Intégrité > Disponibilité | Disponibilité > Intégrité > Confidentialité |
| Exigence     | Performance, productivité     | Stabilité, continuité            |
| Mise à jour  | Fréquente                     | Rare, testée, validée            |
| Cycle de vie | 3 à 5 ans                     | 10 à 25 ans                      |
| Redondance   | RAID, virtualisation          | Matériel doublé, failover local  |

---

## Contraintes spécifiques de l’OT

- Équipements souvent non patchables
- Réseaux fragiles à la latence
- Périphériques sans capacité de chiffrement
- Utilisation de **protocoles non sécurisés** (Modbus, DNP3…)

---

## Risques liés à une mauvaise hybridation IT/OT

- Passage de malwares via VPN ou partages de fichiers
- Exposition des HMI sur Internet
- Utilisation de Windows XP / 7 dans les automates
- Mauvaise segmentation (flat network)

> [!warning]
> De nombreuses attaques ICS sont dues à des **erreurs de conception IT dans un environnement OT.**

