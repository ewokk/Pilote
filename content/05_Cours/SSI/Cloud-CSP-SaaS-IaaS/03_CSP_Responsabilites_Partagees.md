# Responsabilités partagées avec le fournisseur Cloud (CSP)

## Principe fondamental

Dans le Cloud, **la sécurité est partagée** entre :
- le **fournisseur de services Cloud** (CSP)
- le **client / locataire**

> [!info]
> Le modèle varie selon que vous êtes en **IaaS, PaaS ou SaaS**.

---

## Modèle de responsabilité partagée

| Élément                    | IaaS     | PaaS     | SaaS     |
|----------------------------|----------|----------|----------|
| Matériel, datacenter       | CSP      | CSP      | CSP      |
| Réseau physique            | CSP      | CSP      | CSP      |
| Hyperviseur / VM           | CSP      | CSP      | CSP      |
| Système d’exploitation     | Client   | CSP      | CSP      |
| Middleware / runtime       | Client   | CSP      | CSP      |
| Applications               | Client   | Client   | CSP      |
| Données / identité         | Client   | Client   | Client   |
| Configuration / IAM        | Client   | Client   | Client   |

> [!tip]
> Plus on monte dans la pile, plus **le CSP est responsable**. Plus on descend, plus **le client a le contrôle**.

---

## Variantes selon fournisseur

- **AWS** : fournit ses propres matrices par service (EC2 ≠ S3 ≠ Lambda)
- **Azure** : modèle semblable, mais avec intégration profonde d’AD et Intune
- **Google Cloud** : CSP très en retrait (client gère beaucoup)

---

## Implication RGPD

- Le **client reste responsable du traitement des données** au sens du RGPD
- Le CSP est **sous-traitant**, sauf en mode SaaS pur
- Obligation de :
  - Choisir un CSP conforme
  - Vérifier les clauses contractuelles
  - Conserver la traçabilité des traitements

---

## Tableau synthèse sécurité / données / juridique

| Dimension        | CSP (AWS/Azure/GCP) | Client                     |
|------------------|---------------------|-----------------------------|
| Sécurité physique| ✅                  | ❌                          |
| OS / VM          | Partiel              | ✅ (en IaaS)               |
| Configuration    | ❌                  | ✅                         |
| Données          | ❌                  | ✅                         |
| Journalisation   | Fournie              | Doit être activée          |
| Conformité RGPD  | Assistance           | Responsable final           |

