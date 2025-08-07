# Risques liés à la sécurité Cloud

## Risques transverses

| Risque                      | Impact potentiel                      |
|-----------------------------|----------------------------------------|
| Mauvaise configuration      | Données accessibles publiquement       |
| Perte de journalisation     | Aucune visibilité sur les incidents     |
| Mauvaise gestion des comptes | Droits excessifs, comptes orphelins   |
| Mauvais choix de modèle     | Confusion IaaS vs SaaS                 |
| Shadow IT                   | Utilisation non maîtrisée de SaaS     |
| CSP non souverain           | Problèmes de juridiction, RGPD        |

---

## Risques spécifiques par modèle

### IaaS
- OS non patché
- Firewall mal configuré
- Compte root sans MFA
- Accès SSH direct sans audit

### PaaS
- Secrets stockés en clair dans les environnements
- Manque de visibilité sur la couche système

### SaaS
- Mauvais paramétrage des accès (ex : partage public Google Drive)
- MFA non activé
- Utilisation par des collaborateurs sans validation IT

> [!failure]
> L’erreur humaine reste la **cause principale** des fuites de données en environnement Cloud.

---

## Risques liés au fournisseur

- Indisponibilité du service (ex : panne Azure)
- Changement de politique contractuelle
- Risque d’extraterritorialité (Cloud Act US, etc.)

