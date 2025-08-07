# Annexe — Exemple de playbook d’automatisation de veille

## Objectif

Télécharger chaque jour les 3 dernières alertes CERT-FR, parser les titres, envoyer sur Slack et archiver dans Obsidian.

---

## Outils

- `Python`
- `cron`
- `Slack API`
- `Feedparser`
- `Obsidian (local vault)`

---

## Étapes

1. Lire le flux RSS CERT-FR
2. Extraire les entrées du jour
3. Formater en Markdown
4. Enregistrer dans `02_Veille/YYYY/MM-DD_nom.md`
5. Envoyer résumé sur Slack

---

## Bénéfices

- Veille quotidienne sans intervention
- Archivage structuré et horodaté
- Diffusion ciblée automatique
