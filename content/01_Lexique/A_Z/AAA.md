# AAA

> **Type** : acronyme
> **Niveau** : base
> **Contexte** : gouvernance

---

## Définition

> AAA est un acronyme désignant **Authentication, Authorization and Accounting** (authentification, autorisation et journalisation). Il s’agit d’un modèle fondamental dans la gestion des accès en cybersécurité.

---

## Explication détaillée

- **Origine ou historique**  
  Le modèle AAA est issu des besoins croissants de contrôle des accès aux ressources informatiques, notamment avec l’expansion des réseaux. Il est devenu une base conceptuelle pour les solutions d'accès réseau comme RADIUS ou TACACS+.

- **Fonctionnement technique**  
  - **Authentication (Authentification)** : vérifie l’identité d’un utilisateur ou d’un appareil (via mot de passe, certificat, token…).
  - **Authorization (Autorisation)** : détermine les droits de l’utilisateur une fois identifié (accès à des services ou données).
  - **Accounting (Comptabilité ou journalisation)** : enregistre les activités (heures de connexion, services utilisés, volume de données…).

- **Rôles & fonctions**  
  AAA permet de sécuriser l’accès aux systèmes informatiques, de restreindre les privilèges selon les profils, et d’avoir une traçabilité.

- **Avantages et limites**  
  - Structure logique et modulaire
  - Base des solutions de gestion des accès
  - Nécessite une mise en œuvre rigoureuse
  - Peut devenir complexe à gérer à grande échelle

- **Typologies ou variantes**  
  - Protocoles AAA : RADIUS, TACACS+
  - Modèle centralisé vs décentralisé

---

## Cas d’usage & exemples concrets

- Contrôle d’accès aux réseaux d’entreprise via RADIUS
- Authentification VPN ou Wi-Fi d’entreprise
- Portails captifs dans les hôtels ou lieux publics
- Solution NAC (Network Access Control)

---

## Vulnérabilités, risques et abus connus

- Risques de vol d’identifiants (si authentification faible)
- Mauvaises configurations donnant trop de privilèges
- Journaux non supervisés ou altérés
- Attaques Man-in-the-Middle sur les protocoles non chiffrés

---

## Mesures de sécurité & recommandations

- Utiliser des méthodes d’authentification fortes (MFA, certificats)
- Limiter les droits par le principe du moindre privilège
- Superviser et centraliser les logs
- Chiffrer les communications AAA (ex : utiliser IPsec avec RADIUS)

---

## Standards, protocoles & normes associées

- RFC 2865 (RADIUS), RFC 1492 (TACACS)
- ISO/IEC 27002 : gestion des accès
- NIST SP 800-53 (contrôles AC, IA, AU)

---

## Intégration dans un écosystème SSI

- Pilier fondamental de l’IAM (Identity & Access Management)
- S’intègre dans les SIEM, pare-feux, solutions NAC, proxy, etc.
- Permet la mise en œuvre du Zero Trust

---

## Liens avec d’autres notions

- [[RADIUS]]
- [[TACACS+]]
- [[IAM (Identity & Access Management)]]

---

## Sources, outils & références

- [Documentation officielle RADIUS (RFC 2865)](https://datatracker.ietf.org/doc/html/rfc2865)
- [FreeRADIUS (serveur open-source)](https://freeradius.org/)
- [Article ANSSI sur l’authentification forte](https://www.ssi.gouv.fr/publication/authentification-multifactorielle/)
- [Explication AAA (Cisco)](https://www.youtube.com/watch?v=Gyoy1hZqQxI)
