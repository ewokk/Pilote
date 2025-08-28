# Maintenance Active Directory : Sauvegarde, Vérification, Outils

## Sauvegarde de l’annuaire

### 1. Sauvegarde système complète

Utiliser `Windows Server Backup` pour capturer :
- L’état système (`System State`)
- Le volume contenant `NTDS.dit`

> [!tip]
> L'état système inclut : le registre, AD, le service de certificats, les fichiers système critiques.

### 2. Fréquence

- **Quotidienne recommandée** (minimale : hebdo)
- Toujours tester les **restaurations régulières**

---

## Restauration

### Restauration autoritaire vs non autoritaire

| Type                  | Utilisation typique                         |
|-----------------------|---------------------------------------------|
| Non autoritaire       | Le DC récupère les données répliquées       |
| Autoritaire           | Force la réplication d’un objet supprimé    |

> Restauration avec `ntdsutil` ou depuis un `bare metal recovery`

---

## Surveillance et diagnostic

### Commandes utiles

- `dcdiag` : test du contrôleur de domaine
- `repadmin` : état de la réplication
- `netlogon.log`, `Directory Services Event Log`

> [!warning]
> Surveiller les erreurs de réplication en continu : elles peuvent causer des divergences entre DC.

---

## Outils complémentaires

- **RSAT (Remote Server Administration Tools)** :
  - Active Directory Users and Computers
  - Sites and Services
  - DNS, GPMC
- **AD Explorer (Sysinternals)** : exploration visuelle du contenu LDAP
- **ADAudit, Lepide, Purple Knight** : audit, monitoring, scoring sécurité

