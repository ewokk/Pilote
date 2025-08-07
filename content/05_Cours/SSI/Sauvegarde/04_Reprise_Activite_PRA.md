# Reprise d’activité : RTO, RPO, PRA, PCA

## Définitions clés

| Terme | Signification | Objectif |
|-------|---------------|----------|
| **RTO** | Recovery Time Objective | Délai maximal d’interruption acceptable |
| **RPO** | Recovery Point Objective | Perte maximale de données (temps depuis dernière sauvegarde) |

> [!example]
> RTO = 4h → Reprise attendue en moins de 4h  
> RPO = 1h → Perte acceptée de 60 minutes max

---

## PCA vs PRA

- **PCA (Plan de Continuité d’Activité)** : maintenir un niveau minimal d’activité pendant une crise
- **PRA (Plan de Reprise d’Activité)** : restaurer le système après l’incident

| Plan | Objectif | Exemple |
|------|----------|---------|
| PCA  | Continuer à travailler malgré l’incident | Serveur de secours, télétravail |
| PRA  | Restaurer l’environnement après coup | Reprise sur datacenter secondaire |

---

## Sites de secours

| Type de site       | Description                       | Délai de reprise |
|--------------------|-----------------------------------|------------------|
| Site froid         | Infrastructure vierge             | Plusieurs jours  |
| Site tiède         | Matériel prêt, données à restaurer| Quelques heures  |
| Site chaud         | Clone actif                       | Minutes          |

---

## Étapes d’un PRA

1. Analyse d’impact (BIA)
2. Définition des priorités et SLA
3. Définition des scénarios (incendie, ransomware, etc.)
4. Plan de bascule (manuel ou automatisé)
5. Plan de retour à la normale

> [!tip]
> Le PRA est un document **vivant**, à tester et mettre à jour régulièrement.

