# Comptes et Groupes dans Active Directory

## Comptes utilisateurs

Un **compte utilisateur** permet à une personne d’accéder aux ressources d’un domaine. Il est unique, rattaché à un SID, et peut être :
- **utilisateur standard** (collaborateur)
- **administrateur** (membre de groupes privilégiés)

### Attributs importants :
- `sAMAccountName` : nom d’utilisateur (login)
- `userPrincipalName` (UPN) : identifiant complet (ex. prenom.nom@domaine.local)
- `pwdLastSet`, `accountExpires`, `memberOf`, etc.

> [!tip]
> Il est recommandé de désactiver les comptes inutilisés au lieu de les supprimer immédiatement.

## Groupes AD

### Deux types de groupes :
- **Sécurité** : pour appliquer des autorisations
- **Distribution** : pour les listes de diffusion (non utilisables pour la sécurité)

### Étendue des groupes :
- **Global** : pour regrouper les utilisateurs d’un domaine
- **Domaine local** : pour donner accès à des ressources dans un domaine spécifique
- **Universel** : utilisé entre domaines

> [!example]
> Un groupe "Marketing_Accès_Dossier" accorde l’accès à `\srv-fichiers\Marketing` à tous ses membres.

## Groupes intégrés

Certains groupes sont créés par défaut :
- `Domain Admins` : administration du domaine
- `Enterprise Admins` : administration de la forêt
- `Users`, `Guests`, `Backup Operators`, etc.

## Bonnes pratiques

> [!protection]
> Évitez les attributions directes d’autorisations aux utilisateurs. Utilisez des groupes pour une gestion centralisée.

- Groupes nommés clairement
- Pas de membres dans des groupes inutilisés
- Audit régulier des appartenances

