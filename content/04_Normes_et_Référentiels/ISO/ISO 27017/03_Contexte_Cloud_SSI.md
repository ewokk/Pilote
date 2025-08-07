# 03 – Contexte et enjeux de la sécurité Cloud

> [!info]
> Cette section présente les **spécificités de la sécurité dans le Cloud**, afin de mieux comprendre pourquoi l’ISO/IEC 27017 est essentielle en complément de 27001 et 27002.

---

## 🌩️ Enjeux spécifiques au Cloud

- **Perte de maîtrise** : les données et services ne sont plus hébergés en interne.
- **Responsabilité partagée** : la sécurité est partagée entre le client et le fournisseur.
- **Multi-tenance** : plusieurs clients partagent les mêmes infrastructures.
- **Portabilité et réversibilité** : récupérer ses données ou changer de fournisseur.
- **Conformité** : localisation des données, obligations légales selon les pays.

---

## 🔁 Modèle de responsabilité partagée

| Élément | Client | Fournisseur |
|--------|--------|-------------|
| Sécurité des données | ✅ | ❌ (stockage, chiffrement côté client) |
| Systèmes d’exploitation | Partagé (PaaS) | ✅ (IaaS, PaaS) |
| Réseau et hyperviseur | ❌ | ✅ |
| Gestion des identités | ✅ | ❌ |

> [!tip]
> Le modèle dépend du type de service : **IaaS, PaaS ou SaaS**.

---

## ☁️ Typologies Cloud

| Modèle | Exemple | Gestion sécurité |
|--------|---------|------------------|
| IaaS (Infrastructure) | AWS EC2, Azure VM | Client gère l’OS, patchs, firewall |
| PaaS (Plateforme) | Google App Engine | Fournisseur gère l’OS et runtime |
| SaaS (Logiciel) | Microsoft 365 | Client gère les accès utilisateurs |

> [!example]
> Dans un service SaaS, la gestion des accès utilisateurs reste à la charge du client.

