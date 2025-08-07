# Maturité et erreurs fréquentes en supervision

## Typologie des erreurs courantes

| Erreur                          | Impact potentiel                         |
|--------------------------------|-------------------------------------------|
| Pas de synchronisation NTP     | Logs non exploitables                    |
| Journaux non collectés         | Angle mort dans la détection             |
| Règles trop bavardes           | Surcharge des analystes SOC              |
| Règles trop strictes           | Attaques silencieuses                    |
| Aucun retex sur alertes        | Répétition des erreurs                   |

---

## Indicateurs de maturité SOC

- Existence de KPI et tableaux de bord
- Mapping MITRE en cours ou terminé
- Règles maintenues et évaluées
- Simulation d’attaques régulières (ex : Atomic Red Team)
- Collaboration avec les équipes projet (DevSecOps)

---

## Évolutions possibles

- Ajout d’un **XDR** : corrélation multi-sources unifiée
- Intégration CTI, sandbox, EUBA
- SOC fusionné avec CERT, IR, forensic

> [!warning]
> Un SOC ≠ des outils. C’est **une équipe outillée avec des objectifs, des process et une amélioration continue**.

