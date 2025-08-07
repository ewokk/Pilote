# 05 – Recommandations pour les fournisseurs Cloud

> [!info]
> Cette section regroupe les recommandations ISO/IEC 27017 à destination des **fournisseurs de services Cloud** (IaaS, PaaS, SaaS).

---

## 🧱 Isolation des clients

- Mise en œuvre de techniques de séparation (virtualisation, containers)
- Tests réguliers de cloisonnement entre tenants
- Limitation des effets de rebond en cas de compromission

---

## 🧾 Contrats et transparence

- Fournir au client :
  - Une documentation claire des responsabilités
  - Les emplacements de stockage (pays, région)
  - Les modalités de suppression des données

---

## 🔒 Journalisation et surveillance

- Activer la journalisation pour tous les composants critiques
- Séparer les journaux de chaque client
- Prévenir tout usage abusif de la surveillance client

---

## 🔁 Gestion du cycle de vie client

- Procédures de création, suspension, suppression de comptes
- Garantir la destruction sécurisée des actifs clients
- Proposer des outils d’export / migration des données

