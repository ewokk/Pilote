# Modèles de service : IaaS, PaaS, SaaS

## Définitions

| Modèle | Acronyme | Fournisseur gère... | Client gère... |
|--------|----------|----------------------|----------------|
| IaaS   | Infrastructure as a Service | Matériel, hyperviseur, réseau | OS, middleware, applis, données |
| PaaS   | Platform as a Service       | + OS, middleware, runtime     | Applications, données |
| SaaS   | Software as a Service       | Tout sauf les usages          | Juste l’usage de l’application |

---

## Illustration ASCII

```
    +---------------------+------------------------+
    |                    |  Fournisseur            |
    +---------------------+------------------------+
    | Application SaaS     (M365, Salesforce...)   |
    | Plateforme PaaS      (Heroku, App Engine...) |
    | Infra IaaS           (VM, stockage, réseau)  |
    +---------------------+------------------------+
```

---

## Exemples concrets

| Modèle | Exemple              | Cas d’usage typique               |
|--------|----------------------|-----------------------------------|
| IaaS   | AWS EC2, Azure VM     | Héberger un OS, cluster Kubernetes |
| PaaS   | Google App Engine    | Développement web sans gérer l’OS |
| SaaS   | Dropbox, M365, Gmail | Utilisation bureautique ou métier |

---

## Modèle hybride

- Combinaison IaaS + SaaS : VM + outils collaboratifs
- Utilisation PaaS pour API internes + SaaS pour front-end

> [!tip]
> Le choix dépend du **niveau de contrôle**, de **l’agilité** requise, et du **niveau de maturité IT** de l’organisation.

