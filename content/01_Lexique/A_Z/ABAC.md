# ABAC

> **Type** : concept
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : gouvernance, défensif, cloud `#cloud`

---

## Définition

> ABAC signifie **Attribute-Based Access Control** (contrôle d'accès basé sur les attributs). Il s'agit d'un modèle de gestion des droits qui accorde ou refuse l'accès à des ressources selon des **attributs** (utilisateur, ressource, environnement...).

---

## Explication détaillée

- **Origine ou historique**  
  Le modèle ABAC a été formalisé pour répondre aux limites des modèles RBAC (Role-Based Access Control) dans des environnements complexes et dynamiques. Il est promu notamment par le **NIST** comme modèle flexible et granulaire.

- **Fonctionnement technique**  
  - Chaque demande d'accès est évaluée en fonction d'attributs :
    - Attributs **de l’utilisateur** (poste, clearance, groupe…)
    - Attributs **de la ressource** (type, classification…)
    - Attributs **environnementaux** (heure, localisation, device…)
  - Une **politique** (policy) décide de l'accès en fonction d'une combinaison de ces attributs (généralement via un moteur de règles).

- **Rôles & fonctions**  
  - Autoriser ou refuser l’accès à des ressources
  - Appliquer des règles contextuelles (heures, localisation, etc.)
  - Permettre une gestion granulaire et dynamique des droits

- **Avantages et limites**  
  - Grande **flexibilité** et **précision** dans la gestion des droits  
  - Adapté aux environnements cloud et aux architectures Zero Trust  
  – Complexité de mise en œuvre et de maintenance  
  – Nécessite une **gouvernance rigoureuse** des attributs

- **Typologies ou variantes**  
  - Comparaison avec RBAC (rôles) et MAC (contrôle obligatoire)
  - Modèles hybrides : RBAC + ABAC

---

## Cas d’usage & exemples concrets

- Restreindre l’accès à des documents selon la classification et le niveau de clearance de l’utilisateur
- Autoriser l’accès à une application seulement durant les heures ouvrées et depuis des IP autorisées
- Gestion dynamique d’accès dans des environnements cloud multi-entités

---

## Vulnérabilités, risques et abus connus

- Attributs erronés ou obsolètes entraînant des accès non légitimes
- Débordement de complexité dans les politiques (difficile à auditer)
- Moteur de règles mal configuré ou contourné
- Risque de shadow IT si ABAC mal intégré

---

## Mesures de sécurité & recommandations

- Automatiser la mise à jour des attributs (HR, IAM…)
- Limiter la complexité des règles avec des modèles réutilisables
- Auditer régulièrement les politiques et leurs effets
- Monitorer les accès conditionnels

---

## Standards, protocoles & normes associées

- XACML (eXtensible Access Control Markup Language)
- NIST SP 800-162 (ABAC Framework)
- Intégration dans des solutions IAM avancées (Azure AD, ForgeRock, Okta)

---

## Intégration dans un écosystème SSI

- Utilisé dans les solutions IAM modernes
- Compatible avec les modèles Zero Trust
- Complémentaire du RBAC dans les grandes entreprises

---

## Liens avec d’autres notions

- [[RBAC]]
- [[IAM (Identity & Access Management)]]
- [[Zero Trust]]

---

## Sources, outils & références

- [NIST SP 800-162 - Guide to ABAC](https://csrc.nist.gov/publications/detail/sp/800-162/final)
- [OPA (Open Policy Agent)](https://www.openpolicyagent.org/)
- [Blog sur ABAC vs RBAC](https://www.strongdm.com/blog/abac-vs-rbac)
- [Présentation ABAC (YouTube)](https://www.youtube.com/watch?v=cC3TWHfJ7Vg)
