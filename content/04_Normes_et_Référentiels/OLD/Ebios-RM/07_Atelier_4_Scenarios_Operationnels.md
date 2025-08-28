# Atelier 4 – Élaborer les scénarios opérationnels

## Objectif

Définir des **chemins d’attaque réalistes et détaillés**, appelés **scénarios opérationnels**, à partir des couples SR/OV retenus.

## Étapes

1. Identifier les modes opératoires
2. Construire un **graphe d’attaque**
3. Coter la vraisemblance des scénarios
4. Prioriser les scénarios

## Graphe d’attaque

Chaque scénario est modélisé comme une **chaîne d’actions** :

```
[Initial Access] → [Privilege Escalation] → [Data Access] → [Exfiltration]
```

Les techniques peuvent être inspirées de frameworks comme MITRE ATT&CK :
- Phishing
- Exploit d’un service exposé
- Mouvement latéral
- Abus de privilèges

## Cotation de vraisemblance

| Critère | Exemple |
|--------|---------|
| Niveau de compétence requis | Faible à élevé |
| Ressources nécessaires | Temps, argent, outils |
| Visibilité/détection | Probabilité d’être repéré |

Les cotations sont souvent exprimées de 1 (peu probable) à 5 (très probable).

## Synthèse : matrice gravité x vraisemblance

On positionne chaque scénario sur une matrice pour guider les décisions :

```
         Gravité ↑
           5│       ●●
           4│   ●
           3│
           2│
           1│________________
              1  2  3  4  5 → Vraisemblance
```

> [!tip]  
> Ne pas hésiter à **fusionner des scénarios proches** pour simplifier la restitution.

## Livrables

- Scénarios opérationnels détaillés
- Graphe d’attaque pour chaque scénario
- Cotation de vraisemblance
- Matrice synthétique