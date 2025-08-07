# Atelier 3 – Élaborer la stratégie de menace

## Objectif

Modéliser les **scénarios stratégiques** d’attaque, en tenant compte :
- Des **parties prenantes** de l’écosystème ;
- Des **chemins d’attaque indirects** (via partenaires, prestataires, sous-traitants) ;
- Des **motivations des adversaires**.

## Étapes

1. Identifier les parties prenantes
2. Cartographier l’écosystème
3. Positionner les couples SR/OV
4. Élaborer les **scénarios stratégiques**

## Parties prenantes

| Rôle | Exemple |
|------|---------|
| Interne | RH, DSI, utilisateurs métier |
| Externe directe | Prestataires IT, hébergeurs |
| Externe indirecte | Fournisseurs, partenaires, clients |

> [!info]  
> Une attaque peut viser une entité externe (ex : prestataire) pour atteindre indirectement la cible principale.

## Cartographie

On construit une **carte du système et de ses interactions**, pour visualiser :
- Les flux critiques ;
- Les points de contact ;
- Les dépendances techniques et humaines.

## Scénarios stratégiques

Chaque scénario décrit :
- La **source de risque** (ex : groupe APT)
- L’**objectif visé** (ex : exfiltration de données)
- Le **chemin plausible** pour y parvenir via les parties prenantes

> [!example]  
> Un APT pourrait compromettre un **sous-traitant hébergeant une base de données** avant d’atteindre les serveurs de production.

## Livrables

- Cartographie des parties prenantes
- Description des scénarios stratégiques
- Justification du choix des couples SR/OV retenus pour l’atelier suivant