# 14 – Synthèse des exigences et sélection opérationnelle

> [!info]
> Cette synthèse permet à une organisation d’identifier rapidement les exigences applicables selon son rôle (client ou fournisseur) et ses enjeux Cloud.

## Vue globale des exigences

| Réf. ISO 27018 | Description | Obligatoire pour | Impact |
|----------------|-------------|------------------|--------|
| A.6.2.1 | Définir les rôles PII | Fournisseur | Essentiel pour la gouvernance |
| A.8.1.3 | Marquage des actifs PII | Fournisseur | Permet l’identification claire des données sensibles |
| A.9.2.2 | Contrôle des accès PII | Fournisseur | Critique pour la sécurité des données |
| A.10.1.1 | Politique de chiffrement | Fournisseur | Fondamental pour la protection de la confidentialité |
| A.11.1.4 | Protection physique | Fournisseur | Garantit l’intégrité physique des systèmes |
| A.12.4.1 | Journalisation des accès | Fournisseur | Permet la traçabilité des opérations |
| A.12.7.1 | Suppression définitive | Fournisseur | Évite les récupérations non autorisées |
| A.13.1.3 | Séparation logique | Fournisseur | Limite les risques de confusion ou d’accès croisé |
| A.14.2.1 | Sécurité by design | Fournisseur | Intègre la sécurité dès la conception des services |
| A.15.1.4 | Notification sous-traitants | Fournisseur | Garantit la transparence sur la chaîne de traitement |
| A.16.1.4 | Notification incidents | Fournisseur | Permet une réaction rapide en cas de faille |
| A.18.1.5 | Localisation PII | Fournisseur | Aide au respect des législations locales |
| A.18.1.6 | Droit à l’audit client | Client | Offre un levier de vérification contractuel |

> [!tip]
> Pour chaque exigence, définissez :
> - Des responsables internes
> - Des preuves documentées
> - Une méthode de contrôle périodique

> [!warning]
> La mise en œuvre doit être formalisée dans un **plan de gouvernance PII** couvrant tout le cycle de vie des données.
