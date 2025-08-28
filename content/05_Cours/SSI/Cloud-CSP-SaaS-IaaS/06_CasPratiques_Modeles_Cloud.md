# Cas pratiques — Modèles Cloud et erreurs fréquentes

## Cas 1 — PME avec IaaS (AWS EC2 + S3)

- Hébergement d’un site web sur EC2
- Fichiers média sur bucket S3
- Base de données sur RDS

**Erreurs courantes identifiées :**
- Bucket S3 public par défaut
- Absence de MFA sur compte admin
- Absence de rotation des clés API

> [!protection]
> Application de la politique de chiffrement par défaut, activation de CloudTrail + audit via AWS Config

---

## Cas 2 — Éditeur SaaS métier (CRM en PaaS)

- Frontend en Angular, backend sur Azure App Service
- Base de données managée (PostgreSQL)
- CI/CD via GitHub Actions

**Erreurs courantes identifiées :**
- Secret API en dur dans les variables d’environnement
- Aucun contrôle d’accès RBAC côté Azure
- Pas de sauvegardes exportables hors Cloud

> [!tip]
> Utilisation de Azure Key Vault + activation des sauvegardes geo-redondantes

---

## Cas 3 — Utilisation SaaS sans contrôle (Shadow IT)

- Employés utilisant Dropbox, WeTransfer, Google Drive perso
- Partage de fichiers contenant des données RH ou client

**Conséquences :**
- Non-conformité RGPD
- Aucune supervision
- Risque de fuite de données

> [!danger]
> Nécessité d’un **contrôle d’usage SaaS** via CASB, politique claire, MFA sur les comptes pro

---

## Recommandations générales

- Ne jamais activer de ressource sans politique IAM claire
- Ne pas oublier la **restitution des journaux**
- Exiger une **clause contractuelle RGPD**
- Utiliser **CSPM dès les premières VM**
- Tester son **PCA/PRA Cloud**

