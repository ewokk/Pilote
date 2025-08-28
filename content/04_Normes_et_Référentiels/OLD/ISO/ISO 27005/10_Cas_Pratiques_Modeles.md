# Cas pratiques et modèles utiles

## Cas pratique 1 – PME multiservice avec un cloud unique

- Actifs : données clients, CRM SaaS, 5 laptops
- Risques : perte de confidentialité via vol de poste, indisponibilité SaaS
- Mesures mises en place :
  - Chiffrement disque dur
  - Sauvegarde journalière automatique
  - MFA sur accès SaaS

## Cas pratique 2 – Collectivité territoriale avec budget limité

- Cartographie manuelle des actifs sur tableur
- Identification des menaces avec les responsables métier
- Plan de traitement dans un fichier `.md` partagé
- Audit interne basé sur les grilles de l'ISO 27005

---

## Modèles à intégrer

> [!tip]  
> Voici les modèles qu'on peut joindre dans Obsidian ou Excel.

| Nom du modèle | Format | Description |
|---------------|--------|-------------|
| `registre_risques.md` | Markdown | Liste des risques avec cotations et statut |
| `matrice_cotation.xlsx` | Excel | Matrice probabilité × impact |
| `plan_traitement.md` | Markdown | Plan d'action par risque identifié |
| `contexte_risque.md` | Markdown | Critères, périmètre, parties prenantes |

> [!example]  
> Un bon registre `.md` peut contenir : ID, description, actif concerné, niveau de risque, décision, mesure prévue, statut.
