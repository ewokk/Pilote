# Évaluation des risques

> [!info]  
> Évaluer un risque consiste à **estimer sa gravité**, pour décider s’il est acceptable ou s’il doit être traité.

## 1. Évaluation de la vraisemblance (probabilité)

- Probabilité d’occurrence (fréquence ou scénario plausible)
- Échelles typiques : Très faible / Faible / Moyenne / Élevée / Très élevée
- Peut être quantitative (statistiques) ou qualitative (expertise)

## 2. Évaluation de l’impact (conséquence)

- Conséquences sur la confidentialité, l’intégrité, la disponibilité
- Impacts financiers, juridiques, opérationnels, réputationnels
- Même logique d’échelle graduée

## 3. Matrice de criticité des risques

> [!example]  
> Un risque avec une probabilité « élevée » et un impact « moyen » donne un risque « significatif ».

```
+------------+-----------+-----------+----------+-----------+
|            | Faible    | Moyen     | Élevé    | Critique  |
+------------+-----------+-----------+----------+-----------+
| Très faible| Très bas  | Très bas  | Bas      | Moyen     |
| Faible     | Très bas  | Bas       | Moyen    | Élevé     |
| Moyen      | Bas       | Moyen     | Élevé    | Critique  |
| Élevé      | Moyen     | Élevé     | Critique | Critique  |
+------------+-----------+-----------+----------+-----------+
```

## 4. Classification et acceptabilité

- Chaque niveau de risque est comparé à un **seuil d’acceptabilité** (défini au préalable)
- Résultat : risque **acceptable**, **tolérable sous condition**, ou **inacceptable**

> [!tip]  
> Documenter les règles de classification (par exemple : tout risque critique = non acceptable).
