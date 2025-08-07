# ACL

> **Type** : acronyme
> **Niveau** : base
> **Contexte** : défensif, réseau, gouvernance

---

## Définition

> ACL signifie **Access Control List** (liste de contrôle d’accès). C’est un mécanisme qui permet de définir précisément qui peut accéder à une ressource donnée et de quelle manière.

---

## Explication détaillée

- **Origine ou historique**  
  Le concept d’ACL est apparu dès les débuts des systèmes Unix et des réseaux TCP/IP pour contrôler les permissions d’accès aux fichiers et aux flux réseau. Il est aujourd’hui utilisé dans divers contextes : OS, pare-feu, routeurs, systèmes de fichiers, etc.

- **Fonctionnement technique**  
  - Une ACL est une **liste de règles** appliquées à une ressource (fichier, interface réseau, etc.)
  - Chaque entrée associe un **sujet** (utilisateur, groupe, adresse IP...) à une **action** autorisée ou refusée (lecture, écriture, exécution, passage réseau…)
  - Elle est lue séquentiellement par le système pour déterminer si l’action demandée est permise

- **Rôles & fonctions**  
  - Restreindre ou permettre l’accès aux ressources
  - Filtrer les flux réseau
  - Appliquer des politiques de sécurité locales

- **Avantages et limites**  
  - Simple à comprendre et mettre en œuvre  
  - Efficace pour les systèmes à faible complexité  
  – Peu flexible à grande échelle (problèmes de maintenance)  
  – Non contextuel (pas de prise en compte d’attributs dynamiques)

- **Typologies ou variantes**  
  - ACL standard vs étendues (ex : sur routeurs Cisco)
  - ACL système (Linux, Windows), ACL réseau, ACL de stockage (NTFS, NFS...)

---

## Cas d’usage & exemples concrets

- Restreindre l’accès à un fichier à un seul groupe d’utilisateurs
- Bloquer le trafic IP d’une adresse spécifique sur un routeur
- Filtrage de paquets en entrée/sortie sur un pare-feu
- Définir les autorisations dans un système de fichiers partagés

---

## Vulnérabilités, risques et abus connus

- ACL mal configurée ou trop permissive
- Entrées en conflit ou ambiguës dans les règles
- Non actualisation des ACL après un changement de rôle
- Détournement d’ACL pour élever ses privilèges (ex : Windows)

---

## Mesures de sécurité & recommandations

- Documenter et auditer les ACL régulièrement
- Appliquer le principe du moindre privilège
- Automatiser la gestion des ACL si possible
- Privilégier des modèles plus dynamiques dans des environnements complexes

---

## Standards, protocoles & normes associées

- POSIX ACL (Linux/Unix)
- ACL Windows (NTFS)
- RFC 4949 (terminologie sécurité Internet)
- Intégration dans les firewalls, routeurs, NAS...

---

## Intégration dans un écosystème SSI

- Brique de base dans les politiques de contrôle d’accès
- Utilisée dans les pare-feu, routeurs, OS, NAS
- Peut être complétée par RBAC ou ABAC pour plus de flexibilité

---

## Liens avec d’autres notions

- [[RBAC]]
- [[ABAC]]
- [[Pare-feu]]
- [[Fichier système]]

---

## Sources, outils & références

- [POSIX ACL Linux](https://man7.org/linux/man-pages/man5/acl.5.html)
- [Gestion ACL Windows](https://learn.microsoft.com/fr-fr/windows/win32/secauthz/access-control-lists)
- [Cisco ACL guide](https://www.cisco.com/c/en/us/td/docs/security/asa/asa-command-ref/A-H/cmdref1.html)
- [ACL Explained (YouTube)](https://www.youtube.com/watch?v=V1n8qP1LShQ)
