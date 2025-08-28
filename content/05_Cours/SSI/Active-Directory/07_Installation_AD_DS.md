# Installation d’Active Directory Domain Services (AD DS)

## Prérequis

Avant d’installer AD :
- Système : Windows Server (2016+ recommandé)
- Nom de machine fixe
- Adresse IP statique
- Configuration DNS stable

## Étapes d’installation

### 1. Ajout du rôle AD DS

- Ouvrir le **Server Manager**
- Ajouter un rôle > **Active Directory Domain Services**
- Installer les dépendances (DNS inclus si souhaité)

### 2. Promotion en tant que contrôleur de domaine (DC)

> Choisir selon le scénario :
- **Nouvelle forêt** (si premier DC de l’organisation)
- **Nouveau domaine** dans une forêt existante
- **DC additionnel**

Configurer :
- Nom de domaine (ex: `entreprise.local`)
- Mot de passe du mode restauration (DSRM)
- Services DNS si besoin
- Réplication si autre DC existe

> [!tip]
> Utiliser `dcpromo` via PowerShell :
> ```powershell
> Install-ADDSForest -DomainName "entreprise.local"
> ```

### 3. Redémarrage automatique

Le serveur redémarre une fois la promotion terminée. Il devient alors **contrôleur de domaine**.

---

## Vérifications post-installation

- `dcdiag` : état du DC
- `netdom query fsmo` : rôles FSMO
- `nslookup` : test DNS
- `repadmin /replsummary` : si plusieurs DC

> [!warning]
> Une mauvaise configuration DNS est la source la plus fréquente d’erreurs AD.

