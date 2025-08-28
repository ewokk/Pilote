# Automatisation et réponse dans un modèle Zero Trust

## Pourquoi automatiser ?

- Réduire le temps de réaction
- Réagir à des incidents hors des horaires
- Standardiser les réponses
- Supprimer le facteur humain sur les tâches critiques

---

## Typologie d’actions automatisées

| Action                 | Exemple                                       |
|------------------------|-----------------------------------------------|
| Quarantaine d’un user  | Compte désactivé temporairement après détection |
| Suppression de token   | Révocation clé API après scan suspect         |
| Changement de rôle     | Restriction de droits après comportement anormal |
| Notification           | Slack, ticket, mail, webhook SOC              |

---

## Outils d’automatisation

- **SOAR** (Splunk SOAR, Microsoft Sentinel Playbooks, TheHive + Cortex)
- **SIEM avec règles actives** (alertes + actions)
- **CI/CD intégré sécurité** (DevSecOps + GitOps)

---

## Intégration DevSecOps

- Scan de code avant déploiement
- Policy-as-code (OPA, Sentinel, Azure Policy)
- Tests de sécurité automatisés (SAST, DAST)

---

## Exemple : Playbook MFA non activé

```yaml
Si (connexion sans MFA) ET (role = admin) ALORS :
  - suspendre accès
  - notifier RSSI
  - forcer réinitialisation credentials
```

> [!success]
> L’objectif est de créer une **boucle d’auto-défense** intégrée au Cloud.

