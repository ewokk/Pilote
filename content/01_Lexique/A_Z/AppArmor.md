# AppArmor

> **Type** : outil  `#outil`  
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : défensif, système `#système`, Linux

---

## Définition
> **AppArmor** (Application Armor) est un **mécanisme de contrôle d’accès obligatoire (MAC)** pour le noyau Linux. Il permet de **restreindre les capacités des applications** via des profils de sécurité, limitant ce qu'elles peuvent faire ou à quoi elles peuvent accéder.

---

## Explication détaillée
- **Origine ou historique**  
  Développé initialement par Immunix en 1998, puis intégré dans Ubuntu par Canonical. AppArmor est désormais inclus dans plusieurs distributions Linux comme Ubuntu, Debian, SUSE…

- **Fonctionnement technique**  
  - Chaque application peut être associée à un **profil AppArmor**
  - Le profil définit ce que le programme peut faire : accès à des fichiers, sockets, capacités réseau…
  - Fonctionne en mode **“enforcement”** (bloque) ou **“complain”** (journalise uniquement)
  - S’appuie sur les chemins d’accès (file path-based), contrairement à SELinux

- **Rôles & fonctions**  
  - Limiter l’impact d’une compromission logicielle
  - Isoler des services critiques (nginx, MySQL, Docker…)
  - Appliquer le principe du moindre privilège au niveau applicatif

- **Avantages et limites**  
  + Plus simple à configurer que SELinux  
  + Lecture facile des profils  
  + Très utile sur des serveurs Linux exposés  
  – Moins granulaire que SELinux  
  – Dépendant des chemins d’accès (moins robuste face à certains exploits)

- **Typologies ou variantes**  
  - Profils manuels ou générés automatiquement  
  - Utilisation avec containers (Docker, LXD…)  
  - Modes complain vs enforce

---

## Cas d’usage & exemples concrets
- Restreindre un serveur web à ne lire que `/var/www` et bloquer l’accès à `/etc/passwd`
- Protéger une base de données en autorisant uniquement des connexions locales
- Journaliser les actions suspectes d’un programme inconnu
- Appliquer un profil minimaliste sur une API exposée

---

## Vulnérabilités, risques et abus connus
- Profils trop permissifs ou mal écrits
- Utilisation incorrecte du mode complain
- Attaques exploitant des chemins symboliques ou liens relatifs
- Non adoption dans certaines distributions ou environnements

---

## Mesures de sécurité & recommandations
- Créer des profils spécifiques par service critique
- Tester en mode complain avant enforcement
- Utiliser les outils comme `aa-genprof` et `aa-logprof`
- Surveiller les journaux AppArmor dans syslog ou journalctl

---

## Standards, protocoles & normes associées
- Intégré dans Linux Security Modules (LSM)
- Complémentaire à POSIX ACLs et capabilities
- ISO/IEC 27001 – contrôle d’accès technique

---

## Intégration dans un écosystème SSI
- Protection du système de base et des services Linux exposés
- Complément de durcissement avec firewall, auditd, sudo
- Utile dans les serveurs cloud, conteneurs et postes durcis

---

## Liens avec d’autres notions
- [[SELinux]]
- [[Linux]]
- [[Durcissement]]
- [[Contrôle d’accès]]

---

## Sources, outils & références
- [Documentation Ubuntu AppArmor](https://ubuntu.com/server/docs/security-apparmor)
- [Outils AppArmor : aa-genprof, aa-enforce, aa-complain](https://gitlab.com/apparmor/apparmor)
- [Blog sur la sécurité AppArmor](https://linux-audit.com/tag/apparmor/)
- [AppArmor Explained (YouTube)](https://www.youtube.com/watch?v=pgXoycHqShs)

---

## Mots-clés
`#cybersécurité` `#lexique` `#outil` `#AppArmor` `#Linux` `#MAC` `#durcissement` `#contrôle_daccès`
