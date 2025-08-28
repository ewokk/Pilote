# Stratégie Zero Trust appliquée au Cloud

## Pourquoi adapter Zero Trust au Cloud ?

Le Cloud :
- est **hors périmètre traditionnel**
- est **multi-tenant, élastique et exposé**
- repose sur une **configuration client** (erreurs fréquentes)

> [!warning]
> Le Cloud brise le modèle "périmètre = confiance" → **Zero Trust est indispensable**.

---

## Objectifs spécifiques en environnement Cloud

- Vérifier chaque connexion (API, utilisateur, VM, container…)
- Appliquer la **moindre autorité** (least privilege) sur tous les composants
- Segmenter par environnement (prod/dev/test)
- **Identifier les Shadow IT** (SaaS non contrôlés)

---

## Difficultés spécifiques

| Enjeu            | Risque sans ZT         |
|------------------|------------------------|
| API exposées     | Attaque directe, fuite |
| Configs erronées | Ouverture S3, SSH root |
| MFA absent       | Prise de contrôle      |
| Logs absents     | Aucune visibilité      |

---

## Stratégie recommandée

- Identification des **flux critiques**
- Mise en place d’un **IAM Cloud centralisé**
- Surveillance continue des logs + comportements
- Revue régulière des droits (revue d’habilitations)
- Automatisation des remédiations (SIEM/SOAR)

