# 09 – Détail des 7 nouveaux contrôles ISO/IEC 27017

## 12.1.5 – Suppression sécurisée des actifs clients

> [!tip]
> Garantir que toutes les données du client sont supprimées de manière irréversible à la fin du contrat ou sur demande.

- **Objectif** : éviter les fuites post-résiliation.
- **Rôle concerné** : Fournisseur Cloud
- **Mise en œuvre** :
  - Procédures automatisées d'effacement
  - Preuve de suppression (certificats)
  - Journalisation de l’opération
- **Erreurs fréquentes** :
  - Pas de traçabilité
  - Conservation involontaire de backups

---

## 12.4.5 – Surveillance des activités des clients

> [!warning]
> Un fournisseur Cloud peut surveiller les actions des clients **uniquement dans un cadre défini, justifié, documenté et légal**.

- **Objectif** : assurer la sécurité sans violer la vie privée.
- **Rôle concerné** : Fournisseur Cloud
- **Mise en œuvre** :
  - Politique de surveillance transparente
  - Logs séparés par client
  - Limitation des accès internes aux journaux
- **Erreurs fréquentes** :
  - Absence de justification claire
  - Surveillance abusive non déclarée

---

## 13.1.4 – Séparation des environnements clients

> [!example]
> Ce contrôle vise à **prévenir la compromission croisée entre clients** dans les environnements mutualisés (multi-tenant).

- **Objectif** : isolation logique et physique
- **Rôle concerné** : Fournisseur Cloud
- **Mise en œuvre** :
  - Cloisonnement des VM / containers
  - Tests réguliers de rebond
  - Contrôle des flux inter-clients
- **Erreurs fréquentes** :
  - Partage d’instances
  - Isolation non testée

---

## 14.2.1.1 – Sécurité des configurations de machines virtuelles

> [!tip]
> Les clients doivent assurer que **leurs VM sont configurées de manière sécurisée**.

- **Objectif** : éviter les failles de configuration
- **Rôle concerné** : Client Cloud
-  **Mise en œuvre** :
  - Hardening OS
  - Contrôle des images de base
  - Accès limité aux interfaces d’administration
-  **Erreurs fréquentes** :
  - Utilisation d’images non vérifiées
  - Absence de mise à jour

---

## 14.2.7.1 – Durcissement des environnements Cloud

> [!info]
> Le fournisseur doit mettre en œuvre des pratiques de **"hardening"** à tous les niveaux de l’environnement Cloud.

- **Objectif** : réduire la surface d’attaque
- **Rôle concerné** : Fournisseur Cloud
- **Mise en œuvre** :
  - Minimise les services par défaut
  - Chiffrement des communications internes
  - Déploiement de correctifs
- **Erreurs fréquentes** :
  - Manque de cohérence dans les politiques de sécurité
  - Oublis dans les chaînes de dépendance

---

## 15.1.1.1 – Contrats de services Cloud

> [!quote]
> Ce contrôle insiste sur des **clauses contractuelles explicites** concernant la sécurité, la confidentialité et les responsabilités.

- **Objectif** : clarifier les attentes et responsabilités
- **Rôle concerné** : Client & Fournisseur
- **Mise en œuvre** :
  - Définir les SLA de sécurité
  - Spécifier les mesures à prendre en cas d’incident
  - Identifier les responsabilités partagées
- **Erreurs fréquentes** :
  - Contrats vagues ou génériques
  - Absence de clause de réversibilité

---

## 18.1.5.1 – Localisation des données et juridiction

> [!danger]
> Les clients et fournisseurs doivent connaître **où les données sont stockées** et sous quelle juridiction elles tombent.

- **Objectif** : conformité RGPD et autres réglementations
- **Rôle concerné** : Client & Fournisseur
- **Mise en œuvre** :
  - Mapping des datacenters
  - Clauses contractuelles sur la localisation
  - Limitation du transfert hors UE si nécessaire
- **Erreurs fréquentes** :
  - Absence de contrôle sur la localisation réelle
  - Non-respect des exigences de souveraineté

