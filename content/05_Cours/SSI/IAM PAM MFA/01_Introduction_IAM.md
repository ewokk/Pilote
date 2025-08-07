# Introduction à l'IAM (Identity & Access Management)

## Définition

L’IAM est l’ensemble des **processus, outils et politiques** visant à :
- gérer le cycle de vie des identités numériques (utilisateurs, machines…)
- contrôler l’accès aux ressources de manière sécurisée et conforme

> [!info]
> L’IAM est un **pilier fondamental de la cybersécurité** et une exigence des normes ISO 27001, NIS2, DORA, etc.

---

## Objectifs d’un système IAM

- Authentifier l’utilisateur
- Autoriser ou refuser l’accès aux ressources
- Assurer une **traçabilité complète**
- Fournir une gestion centralisée et automatisée

---

## Cycle de vie : JML (Joiner-Mover-Leaver)

| Phase   | Description                               | Exemples                           |
|---------|-------------------------------------------|------------------------------------|
| Joiner  | Arrivée d’un nouvel utilisateur           | Création du compte, boîte mail     |
| Mover   | Changement de poste ou mobilité           | Modification des rôles et accès    |
| Leaver  | Départ ou fin de contrat                  | Désactivation du compte, archivage |

---

## Modèles de contrôle d’accès

- **RBAC** (Role-Based Access Control) : accès basé sur le rôle (métier, service)
- **ABAC** (Attribute-Based Access Control) : conditions dynamiques (département, localisation…)
- **PBAC** (Policy-Based Access Control) : politiques écrites + moteur de règles

> [!tip]
> Il est recommandé de combiner RBAC et ABAC dans les SI complexes.

---

## Terminologie essentielle

| Terme             | Définition                                      |
|-------------------|--------------------------------------------------|
| Identité          | Représentation numérique d’un utilisateur        |
| Entitlement       | Ensemble des droits et permissions               |
| Provisioning      | Processus d’attribution ou retrait de droits     |
| Identity Provider | Système d’authentification central (ex : IdP SSO)|
| Habilitation      | Association d’un droit à une identité            |
