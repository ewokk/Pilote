# PowerShell pour Active Directory — Avancé

## Gestion en masse

### Créer plusieurs utilisateurs depuis un CSV

```powershell
Import-Csv .\users.csv | ForEach-Object {
  New-ADUser -Name $_.Name -SamAccountName $_.Login -UserPrincipalName $_.UPN -Path $_.OU -AccountPassword (ConvertTo-SecureString $_.Password -AsPlainText -Force) -Enabled $true
}
```

### CSV attendu :

```
Name,Login,UPN,OU,Password
Alice Martin,amartin,amartin@entreprise.local,"OU=RH,DC=entreprise,DC=local",P@ssw0rd!
```

---

## Audit et rapports

### Trouver les comptes inactifs depuis 90 jours

```powershell
Search-ADAccount -AccountInactive -TimeSpan 90.00:00:00 -UsersOnly
```

### Exporter les utilisateurs avec attributs

```powershell
Get-ADUser -Filter * -Properties Department,Title | Select-Object Name,Department,Title | Export-Csv ad_export.csv -NoTypeInformation
```

---

## Gestion avancée

### Réinitialiser un mot de passe

```powershell
Set-ADAccountPassword -Identity jmartin -NewPassword (ConvertTo-SecureString "NewPassword123!" -AsPlainText -Force) -Reset
```

### Forcer l’expiration à la prochaine connexion

```powershell
Set-ADUser jmartin -ChangePasswordAtLogon $true
```

### Supprimer des utilisateurs en masse

```powershell
Get-ADUser -Filter {Department -eq "Temporaire"} | Remove-ADUser -Confirm:$false
```

---

## Bonnes pratiques

> [!warning]
> Toujours **tester les scripts** sur un environnement de préproduction ou avec `-WhatIf`.

> [!tip]
> Documenter et versionner vos scripts PowerShell comme du code logiciel.

