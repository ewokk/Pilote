# Fonctionnement d’un annuaire Active Directory

## Structure logique d’AD

- **Domaines** : regroupement logique d’objets, avec une politique de sécurité commune
- **Forêts** : ensemble de domaines partageant une configuration et un catalogue global
- **Arbres** : hiérarchies de domaines liés par des relations de confiance

## Objets Active Directory

Chaque élément (utilisateur, groupe, ordinateur…) est un **objet LDAP**.

### Objets communs :
- `user`
- `group`
- `computer`
- `organizationalUnit`

> [!info]
> Chaque objet possède un **DN (Distinguished Name)** et un ensemble d’attributs (nom, SID, groupe, etc.).

## Partitionnement

Active Directory est structuré en **partitions** :
- Schema (structure des objets)
- Configuration (paramètres des services AD)
- Domain (objets du domaine)
- Application (si spécifique)

## Réplication et contrôleurs de domaine (DC)

- Les **DC (Domain Controllers)** stockent et synchronisent les données de l’annuaire.
- Le service de réplication **DFS-R ou FRS** permet une **cohérence entre DC**.

> [!warning]
> Une mauvaise configuration de la réplication peut provoquer des pertes de cohérence d’accès ou de permissions.

## Protocole LDAP

AD utilise :
- **LDAP v3** (port 389)
- **LDAPS** (port 636) pour les connexions chiffrées

> [!tip]
> Utilisez LDAPS en production pour sécuriser les échanges entre clients et l’annuaire.
