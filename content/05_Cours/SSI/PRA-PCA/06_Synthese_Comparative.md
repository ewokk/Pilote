# Tableaux comparatifs, synthèse et bonnes pratiques

## Différences clés entre PCA et PRA

| Critère | PCA | PRA |
|--------|-----|-----|
| Objectif | Maintenir l’activité sans interruption ou en mode dégradé | Reprendre l’activité après interruption |
| Portée | Organisationnelle (globale) | Technique (principalement SI) |
| Temporalité | Pendant la crise | Après la crise |
| Support métier | Oui (activités essentielles) | Non systématique |
| Scénarios typiques | Pandémie, grève, crise logistique | Cyberattaque, perte de SI, incendie |
| Supports techniques | Organisationnels, humains, logistiques | Sauvegardes, sites de secours, redémarrage SI |

## Erreurs fréquentes

> [!failure]
> - Ne pas tester les plans
> - Confondre sauvegarde et PRA
> - Élaborer des documents inutilisables (trop longs ou trop théoriques)
> - Ne pas intégrer les parties prenantes métiers
> - Se limiter à l’informatique

## Recommandations pratiques pour RSSI

- Intégrer la logique PCA/PRA à la **PSSI** et aux audits SSI
- Être force de proposition dans la **cellule de crise**
- Veiller à la cohérence entre **politique de sauvegarde** et objectifs RPO
- Mettre à jour le PCA/PRA après chaque changement majeur (fournisseur, SI, fusion…)

## Synthèse visuelle de la démarche PCA/PRA

```ascii
+-------------------+       +-------------------+       +-------------------+
|   Analyse BIA     | ----> |  Construction PCA | ----> |  Élaboration PRA  |
+-------------------+       +-------------------+       +-------------------+
         |                           |                           |
         v                           v                           v
+-------------------+       +-------------------+       +-------------------+
|  Scénarios de     |       |   Tests réguliers |       |  Mise à jour /    |
|   continuité      |       |   (techniques /   |       |  gouvernance MCO  |
+-------------------+       |   utilisateurs)   |       +-------------------+
                            +-------------------+
```

> [!success]
> Un PCA/PRA opérationnel est un **levier stratégique** pour la résilience, la conformité (ISO, NIS2…) et la confiance des partenaires.

