# Architecture Active Directory : Forêts, Domaines, Sites, FSMO

## Forêt (Forest)

La **forêt** est l’unité de sécurité et d’administration maximale. Elle contient :
- un **schéma commun**
- un **catalogue global (GC)**
- une **confiance implicite** entre ses domaines

> Une organisation n’a **en général qu’une seule forêt**.

## Domaine (Domain)

Un **domaine** est une partition logique :
- utilisateurs, groupes, politiques GPO
- autorité d’authentification unique

Chaque domaine possède :
- un **SID propre**
- un **contrôleur de domaine (DC)**

## Site

Un **site** représente une **topologie physique** (ex : bureaux distants). Il permet :
- une **réplication optimisée**
- des **attributions de GPO spécifiques**

## Arbres

Un **arbre** est un ensemble de domaines enfants :
```
entreprise.local
├── rh.entreprise.local
└── it.entreprise.local
```

> [!example]
> `user@it.entreprise.local` peut accéder à des ressources sur `entreprise.local` via une relation de confiance interne.

---

## Relations de confiance

> Relations entre forêts ou domaines :
- **Trust implicite** (au sein d’une forêt)
- **Trust explicite** (entre forêts ou domaines isolés)

---

## Rôles FSMO (Flexible Single Master Operations)

AD utilise 5 rôles FSMO critiques :

| Rôle FSMO              | Niveau         | Fonction principale                       |
|------------------------|----------------|-------------------------------------------|
| Schema Master          | Forêt          | Modifie le schéma LDAP                    |
| Domain Naming Master   | Forêt          | Gère les noms de domaines                 |
| RID Master             | Domaine        | Attribue les identifiants SID             |
| PDC Emulator           | Domaine        | Synchronisation temporelle, GPO, NTLM     |
| Infrastructure Master  | Domaine        | Mises à jour d’appartenances inter-domaines |

> [!info]
> Les rôles FSMO peuvent être déplacés avec `Move-ADDirectoryServerOperationMasterRole`

---

## Outils de vérification

- `netdom query fsmo`
- `repadmin /showrepl`
- `sites and services.msc`

