# 09 – Exigences détaillées ISO/IEC 27018

> [!info]
> Voici la liste des exigences spécifiques à ISO/IEC 27018, enrichies de descriptions techniques, conseils de mise en œuvre et cas concrets pour chaque point.

---

## A.6.2.1 – Définition des rôles liés aux PII

> [!tip]
> Distinguez bien **PII Controller** (client) et **PII Processor** (fournisseur Cloud). Définissez ces rôles formellement dans les politiques internes et contrats.

**Implémentation :**
- Ajouter un tableau de correspondance des responsabilités dans les procédures internes.
- Utiliser un **RACI** pour clarifier les responsabilités en interne et vis-à-vis des clients.

---

## A.8.1.3 – Marquage des actifs PII

> [!example]
> Chaque VM, base de données ou bucket contenant des PII doit être explicitement marqué (`tag: PII=true`) dans les consoles Cloud ou CMDB.

**Conseils :**
- Mettre en place un **processus automatisé de classification** des données (ex : avec Azure Information Protection, Google Labels).
- Vérifier la propagation correcte des labels PII sur les sauvegardes, exports, logs.

---

## A.9.2.2 – Contrôle des accès aux PII

> [!warning]
> Ce contrôle est critique. Le moindre accès non autorisé constitue un incident de sécurité (potentiellement à notifier RGPD).

**Mise en œuvre :**
- Accès **par rôles et par besoin métier uniquement**.
- Audits réguliers des droits via des outils comme IAM Analyzer, AWS Access Advisor.
- Détection automatique des comptes avec accès inactif ou excessif.

---

## A.10.1.1 – Politique de chiffrement

**Techniquement** :
- Chiffrement au repos : AES-256 minimum (ex : EBS, S3, Cloud SQL).
- Chiffrement en transit : TLS 1.2 minimum avec Perfect Forward Secrecy.
- Clés : rotation régulière, HSM ou KMS avec accès restreint.

---

## A.11.1.4 – Protection physique

**Implémentation Cloud typique** :
- Centres de données certifiés ISO/IEC 27001, avec badge, vidéosurveillance, contrôles biométriques.
- Pour les clients : exiger ces garanties dans les **clauses contractuelles SLA**.

---

## A.12.4.1 – Journalisation des accès

> [!info]
> Tous les accès aux PII doivent être journalisés, et les journaux protégés contre l’altération.

**Outils recommandés** :
- AWS CloudTrail, Azure Monitor, Google Cloud Logging.
- Mise en place d’**alertes en temps réel** (ex : accès root, exports massifs).

---

## A.12.7.1 – Suppression définitive des PII

> [!danger]
> Une simple désactivation ne suffit pas. Il faut garantir une suppression **effective et irrécupérable**.

**Techniques** :
- `DELETE` + vérification (`GET` = 404)
- Overwrite ou `shred` si stockage local.
- Ajout d’un statut “Supprimé” dans les bases avec TTL automatique.

---

## A.13.1.3 – Séparation logique des clients

> [!tip]
> Évitez que deux clients Cloud puissent accéder aux mêmes données par erreur ou par injection.

**Mécanismes possibles** :
- Séparation par VPC / réseau virtuel
- Auth multi-tenants avec des IDs de locataire distincts dans l’application
- Aucun champ `client_id` exposé ou modifiable par un utilisateur

---

## A.14.2.1 – Sécurité by design

**Implémentation :**
- Utiliser le modèle **DevSecOps**
- Checklist de sécurité dès la phase de conception
- Revue de code spécifique PII (ex : pas de log de données sensibles)

---

## A.15.1.4 – Notification des sous-traitants

> [!quote]
> "Le client doit être informé de tout changement significatif dans la chaîne de sous-traitance affectant les PII."

**Exemples** :
- Ajout d’un nouveau DPA (Data Processor Agreement)
- Remplacement d’un fournisseur de stockage
- Nécessité de mise à jour du registre RGPD

---

## A.16.1.4 – Notification des incidents

**À inclure** :
- Procédure de détection, réponse et notification en <72h
- Liste des personnes notifiables par rôle
- Journal centralisé des incidents avec métriques de détection/résolution

---

## A.18.1.5 – Localisation des PII

> [!tip]
> Indiquez explicitement dans les contrats où sont stockées les PII (UE, États-Unis, Asie…), et mettez en place une alerte sur tout transfert inter-région.

**Mesures techniques** :
- Restriction de zones géographiques dans les policies (ex : IAM Conditions)
- Interdiction d’accès depuis des IP hors UE si nécessaire

---

## A.18.1.6 – Droit à l’audit client

**Prévoir dans les contrats** :
- Modalités d’audit : fréquence, type (papier, sur site, virtuel)
- Respect des limites légales / sécurité de l’hébergeur
- Référentiel utilisé pour l’audit (ISO/IEC 27001, ISAE 3000…)

