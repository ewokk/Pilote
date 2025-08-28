# Exigences techniques (série 4.x)

## Objectif des exigences 4.x

Les documents 62443-4-1 et 62443-4-2 définissent :
- les **exigences de sécurité applicables aux composants**
- les **capacités minimales à intégrer dans les produits** (automates, passerelles, HMI, etc.)

---

## Exemples de catégories d'exigences techniques (4-2)

| Domaine             | Exigences (exemples)                                  |
|---------------------|--------------------------------------------------------|
| Identification       | Authentification unique, gestion des identités        |
| Contrôle d'accès     | RBAC, séparation des rôles, verrouillage de session   |
| Intégrité            | Protection contre modification logicielle non autorisée |
| Chiffrement          | TLS, SSH, gestion des clés, stockage sécurisé         |
| Journalisation       | Audit des connexions, des changements de configuration |
| Continuité           | Redondance, tolérance aux pannes                      |

---

## Niveau de rigueur croissant par SL

- SL1 : protection minimale (accident)
- SL2 : identifiants + séparation des privilèges
- SL3 : MFA, audit complet, surveillance
- SL4 : conformité critique, isolation, durcissement fort

> [!tip]
> Ces exigences sont souvent intégrées dès **la phase de développement** du produit (Secure Development Lifecycle — SDLC)

