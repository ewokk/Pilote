# Définition du modèle Zero Trust

## Origine du concept

Le modèle **Zero Trust** a été théorisé par **John Kindervag (Forrester)** en 2010, en réaction à la sécurité périmétrique traditionnelle ("moat and castle").

Le terme "Zero Trust" a été introduit par **Forrester Research en 2010** puis formalisé dans :
- la norme **NIST SP 800-207**
- les modèles industriels : **Google BeyondCorp**, **Microsoft Zero Trust**, **CISA**

---

## Principe général

> [!quote]
> *"Never trust, always verify."*

Le Zero Trust **rejette le modèle de confiance implicite** basé sur la localisation réseau (LAN vs Internet).
Chaque requête ou tentative d’accès est considérée comme potentiellement hostile, même à l’intérieur du périmètre réseau.

---

## Objectifs de Zero Trust

- Supprimer la confiance implicite liée au réseau
- Authentifier et autoriser **chaque requête individuellement**
- Réduire la surface d’attaque (notion de "blast radius")
- Gérer dynamiquement les accès (contexte, posture, identité)

---

## Pourquoi Zero Trust ?

| Menace                          | Explication                                   |
|--------------------------------|-----------------------------------------------|
| Mobilité des utilisateurs      | Travail hybride, accès depuis l’extérieur     |
| Shadow IT                      | SaaS non validés, absence de visibilité       |
| Perte du périmètre réseau      | Cloud, VPN split, services distribués         |
| Compromission d’un poste local | Risque de propagation latérale rapide         |

---

## Les 7 piliers de Microsoft Zero Trust

| Pilier               | Objectif                                   |
|----------------------|--------------------------------------------|
| Identité             | Authentification forte, MFA, RBAC          |
| Appareils            | Posture, conformité, MDM, Endpoint Control |
| Applications         | Accès via proxy sécurisé, SSO, SCIM        |
| Données              | Classification, DLP, restriction d’usage   |
| Réseau               | Segmentation, accès conditionnel, ZTNA     |
| Infrastructure       | Cloisonnement, hardening, bastion          |
| Supervision          | Journalisation, détection, SOAR            |

> [!tip]
> Le modèle Zero Trust n’est **pas un produit**, c’est une **stratégie globale d’architecture sécurité**.

---

## Evolution vers le Cloud

Le Cloud a accéléré l’adoption du Zero Trust en rendant :
- la **segmentation physique impossible**
- les **flux réseau opaques** (chiffrement, proxy)
- la **centralisation de l’IAM indispensable**

> [!warning]
> Le Zero Trust n’est pas une technologie, mais un **modèle d’architecture globale**.
