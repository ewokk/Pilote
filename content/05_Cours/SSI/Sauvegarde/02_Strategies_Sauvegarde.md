# Stratégies de sauvegarde : full, incrémentielle, snapshot

## Objectif de la sauvegarde

- Préserver les données critiques
- Assurer une **restauration fiable**
- Se prémunir contre : pannes, erreurs humaines, ransomwares

---

## Types de sauvegarde

### Sauvegarde complète (Full)
- Copie **intégrale** de toutes les données
- Lente, consomme beaucoup d’espace

> [!success]
> Simple à restaurer, indépendante.

### Sauvegarde incrémentielle
- Copie uniquement des **modifications depuis la dernière sauvegarde** (full ou incrémentielle)
- Très rapide, faible volume

> [!failure]
> Restauration plus longue (enchaînement à suivre)

### Sauvegarde différentielle
- Copie toutes les modifications depuis la **dernière sauvegarde complète**
- Compromis entre volume et simplicité

---

## Snapshots

- Instantanés du système de fichiers (VM, NAS, SAN…)
- Très rapides, peu coûteux en espace si courts
- Ne remplacent pas une sauvegarde traditionnelle

---

## Rotation de sauvegarde

- Stratégie GFS (Grand-père, Père, Fils)
- Journalière, hebdomadaire, mensuelle
- Conservation à long terme

---

## Règle 3–2–1

> [!tip]
> Toujours appliquer la règle :
> - 3 copies de vos données
> - sur 2 supports différents
> - dont 1 hors site (cloud, bande)

