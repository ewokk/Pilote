# PowerShell pour Active Directory — Bases

## Introduction

PowerShell est l’outil incontournable pour administrer AD de manière scriptée, reproductible, et automatisée.

### Module requis

```powershell
Import-Module ActiveDirectory
```

> [!info]
> Ce module est disponible via les RSAT ou installé directement sur un DC.

---

## Cmdlets essentielles

| Commande                  | Description                            |
|---------------------------|----------------------------------------|
| `Get-ADUser`              | Obtenir un utilisateur                 |
| `New-ADUser`              | Créer un nouvel utilisateur            |
| `Set-ADUser`              | Modifier un utilisateur existant       |
| `Remove-ADUser`           | Supprimer un utilisateur               |
| `Get-ADGroup`             | Obtenir un groupe                      |
| `Add-ADGroupMember`       | Ajouter un membre à un groupe          |
| `Get-ADOrganizationalUnit`| Voir les OU                            |

---

## Exemples pratiques

### Créer un utilisateur

```powershell
New-ADUser -Name "Jean Martin" -GivenName "Jean" -Surname "Martin" -SamAccountName "jmartin" -UserPrincipalName "jmartin@entreprise.local" -Path "OU=Utilisateurs,DC=entreprise,DC=local" -Enabled $true -AccountPassword (ConvertTo-SecureString "MotDePasse123!" -AsPlainText -Force) -ChangePasswordAtLogon $true
```

### Ajouter à un groupe

```powershell
Add-ADGroupMember -Identity "RH_Acces" -Members jmartin
```

### Modifier un attribut

```powershell
Set-ADUser jmartin -Title "Chargé de mission"
```

---

## Recherche d'utilisateurs

```powershell
Get-ADUser -Filter * -Properties Department | Where-Object { $_.Department -eq "Marketing" }
```

