# Unités Organisationnelles (OU) et Stratégies de Groupe (GPO)

## OU : Organisation hiérarchique

Les **OU (Organizational Units)** permettent de :
- structurer logiquement les objets AD
- déléguer des droits administratifs (ex : RH administre uniquement son OU)

> [!info]
> Une OU n’a aucun effet fonctionnel à elle seule. Elle est un conteneur hiérarchique.

## GPO : Group Policy Object

Les **stratégies de groupe** permettent de configurer automatiquement :
- des paramètres système (fond d’écran, proxy, restrictions)
- des scripts de logon/logoff
- des autorisations

### Application

Une GPO peut être appliquée à :
- une **OU**
- un **domaine**
- un **site** AD

Les GPO sont traitées dans l’ordre :
1. Site
2. Domaine
3. OU (du haut vers le bas)

> [!warning]
> En cas de conflit, la dernière GPO appliquée prévaut (sauf blocage explicite ou héritage désactivé).

## Filtrage et ciblage

- **Security Filtering** : limite la GPO à certains groupes
- **WMI Filtering** : conditions sur la machine cible

> [!example]
> Une GPO applique une configuration proxy uniquement aux PC portables sous Windows 11.

## Boucle de rappel (Loopback)

Permet d’appliquer des paramètres utilisateur en fonction de l’ordinateur (ex : salle de réunion partagée).

## Bonnes pratiques

- Ne pas multiplier les GPO inutilement
- Structurer les OU selon l’organisation (métier ou géographique)
- Documenter les GPO critiques

