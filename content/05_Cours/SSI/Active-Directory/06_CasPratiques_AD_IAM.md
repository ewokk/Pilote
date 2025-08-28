# Cas pratiques et bonnes pratiques AD/IAM

## Cas 1 — Onboarding d’un nouvel employé

> Situation : Sophie rejoint le service RH.

### Étapes :
1. Le RH remplit un formulaire d’arrivée.
2. Le système IAM déclenche automatiquement :
   - création du compte AD
   - rattachement au groupe `RH_Acces`
   - attribution d’un UPN, d’un mot de passe initial
   - génération automatique de la boîte mail

> [!success]
> Sophie peut se connecter, accéder à son dossier partagé RH, à Teams, à Outlook, dès son premier jour.

---

## Cas 2 — Application d’une stratégie GPO à une salle informatique

> Situation : les PC d’une salle doivent avoir un fond d’écran institutionnel, interdire le panneau de configuration et appliquer un proxy.

### Solution :
- Créer une OU `Salles_Info`
- Déplacer les ordinateurs dans l’OU
- Créer une GPO appliquée à cette OU avec les paramètres désirés

> [!tip]
> Tester la GPO avec un poste isolé avant déploiement large.

---

## Cas 3 — Départ d’un collaborateur

> Situation : Jean quitte l’entreprise.

### Étapes clés :
1. Désactivation immédiate du compte AD
2. Suppression des accès VPN, boîte mail, annuaires tiers
3. Archivage éventuel des données
4. Transfert des responsabilités (dossiers partagés, boîtes mail déléguées)

> [!protection]
> Une procédure de sortie bien rodée évite les comptes orphelins et les failles d’accès.

---

## Erreurs fréquentes à éviter

> [!failure]
> Attribution de permissions directement à un utilisateur (plutôt que via un groupe)

> [!failure]
> Absence de revue des accès (risque d’accumulation des droits au fil du temps)

> [!danger]
> Utilisation d’un seul compte admin partagé entre plusieurs personnes

---

## Recommandations clés

- Adopter une approche **RBAC claire** : qui a accès à quoi, selon quel poste
- Automatiser les processus **JML**
- Appliquer une **MFA généralisée**
- Auditer régulièrement les accès et les appartenances
- Centraliser la gestion des identités si possible

