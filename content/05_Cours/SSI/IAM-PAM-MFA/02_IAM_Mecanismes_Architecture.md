# Architecture IAM : mécanismes, provisioning, référentiels

## Composants clés d’une architecture IAM

1. **Référentiel d’identités**
   - Source de vérité : SIRH, annuaire LDAP, base SQL
   - Contient les identifiants uniques et attributs (nom, service, email…)

2. **Moteur de provisioning**
   - Création/mise à jour/désactivation automatiques des comptes
   - Basé sur des règles ou des workflows

3. **Connecteurs**
   - Interfaces avec les systèmes cibles (AD, cloud, bases, ERP…)

4. **Catalogue de rôles/habilitations**
   - Liste exhaustive des droits autorisés
   - Base de tout contrôle d’accès logique

---

## Provisioning

| Type de provisioning  | Description                                   |
|------------------------|-----------------------------------------------|
| Manuel                 | Par les équipes IT, souvent avec erreurs      |
| Semi-automatisé        | Scripté, déclenché à la main                  |
| Automatisé             | Intégré avec le SIRH, en temps réel           |

> [!success]
> Un bon provisioning doit être **automatique, traçable et réversible**.

---

## Synchronisation d’annuaires

- LDAP ↔ AD ↔ AzureAD
- Outils : Microsoft Identity Manager, Keycloak, Okta, OpenLDAP, etc.
- Support des protocoles : LDAP, SCIM, API REST, SAML

---

## HR-as-master

Le SIRH (ou autre référentiel RH) est le **point d’entrée** du processus JML :
- une embauche crée automatiquement un compte dans l’IAM
- les changements contractuels (service, statut…) modifient les droits
- le départ désactive les comptes

---

## Journalisation et conformité

- Tous les changements doivent être **audités** (qui a changé quoi, quand ?)
- Journalisation centralisée (SIEM) recommandée
- Nécessaire pour la conformité RGPD, ISO 27001, etc.
