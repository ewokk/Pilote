# Active Directory

> **Type** : outil 
> **Niveau** : intermédiaire
> **Contexte** : gouvernance, défensif, réseau

---

## Définition

> **Active Directory (AD)** est un service d'annuaire développé par Microsoft. Il centralise l’authentification, l’autorisation et la gestion des ressources dans un réseau Windows.

---

## Explication détaillée

- **Origine ou historique**  
  Lancé en 1999 avec Windows 2000 Server, AD a révolutionné la gestion des réseaux d’entreprise en offrant une structure centralisée pour gérer utilisateurs, groupes, machines et ressources.

- **Fonctionnement technique**  
  - Utilise le protocole **LDAP** pour l’accès aux informations d’annuaire
  - Intègre **Kerberos** pour l’authentification
  - Organisation hiérarchique : **domaines**, **unités organisationnelles (OU)**, **contrôleurs de domaine**
  - Gère les **stratégies de groupe (GPO)** pour appliquer des règles à grande échelle

- **Rôles & fonctions**  
  - Authentifier les utilisateurs et les ordinateurs
  - Appliquer des politiques de sécurité
  - Gérer les droits d’accès aux ressources
  - Support de la gestion centralisée dans les environnements Windows

- **Avantages et limites**  
  - Centralisation puissante de la gestion IT  
  - Intégration native avec Windows Server et clients Windows  
  – Cible prioritaire des attaquants (pivot, élévation de privilèges)  
  – Complexité croissante dans les environnements hybrides ou étendus

- **Typologies ou variantes**  
  - Active Directory Domain Services (AD DS)  
  - Active Directory Certificate Services (AD CS)  
  - Azure AD (équivalent cloud, différent dans sa structure)

---

## Cas d’usage & exemples concrets

- Authentification des utilisateurs dans une entreprise
- Application automatique de règles de sécurité (via GPO)
- Intégration des imprimantes, serveurs, partages réseau dans un domaine
- Création d’unités organisationnelles par service/département

---

## Vulnérabilités, risques et abus connus

- Attaques Kerberoasting, Pass-the-Hash, Golden Ticket
- Délégations excessives ou mauvaises configurations
- Compromission d’un contrôleur de domaine = prise de contrôle du SI
- Persistence via GPO malveillantes ou SIDHistory

---

## Mesures de sécurité & recommandations

- Limiter les privilèges des comptes admins (Tiering)
- Segmenter le réseau et surveiller les accès AD
- Durcir les GPO et activer la journalisation
- Utiliser LAPS, détection via SIEM, audits réguliers
- Intégrer des solutions de détection d’attaques AD (BloodHound, Purple Knight)

---

## Standards, protocoles & normes associées

- LDAP (RFC 4511), Kerberos (RFC 4120)
- NIST SP 800-53 (contrôles AC-2 à AC-6)
- Intégration dans ISO 27001/27002 (contrôle d’accès)

---

## Intégration dans un écosystème SSI

- Cœur de l’IAM en environnement Windows
- Interconnecté avec les antivirus, SIEM, VPN, proxy, etc.
- Rôle stratégique dans la posture Zero Trust (authentification et contrôle)

---

## Liens avec d’autres notions

- [[Kerberos]]
- [[IAM (Identity & Access Management)]]
- [[GPO (Group Policy Object)]]
- [[Azure AD]]

---

## Sources, outils & références

- [Documentation Microsoft Active Directory](https://learn.microsoft.com/fr-fr/windows-server/identity/active-directory-domain-services)
- [BloodHound (outil d’analyse AD)](https://github.com/BloodHoundAD/BloodHound)
- [Purple Knight - outil d’audit AD](https://www.semperis.com/purple-knight/)
- [Formation AD (YouTube)](https://www.youtube.com/watch?v=QJ6VRgmFeLk)
