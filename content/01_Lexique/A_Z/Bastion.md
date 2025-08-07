# Bastion

> **Type** : rôle  `#rôle`  
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : défensif

---

## Définition
> Un bastion est un serveur d’administration sécurisé servant de point d’accès unique et contrôlé pour administrer les systèmes d’un réseau. Il constitue une barrière renforcée entre les administrateurs et les ressources sensibles.

---

## Explication détaillée
- **Origine ou historique**  
  - Concept issu des architectures de défense en profondeur, renforcé avec les exigences de sécurité accrues dans les environnements critiques.
- **Fonctionnement technique**  
  - Tous les accès d’administration passent par le bastion.
  - Contrôle des identités, enregistrement des sessions, traçabilité complète.
  - Intègre souvent MFA, filtrage des commandes, journalisation vidéo.
- **Rôles & fonctions**  
  - Réduit la surface d’attaque en limitant les points d’entrée.
  - Permet un audit précis des actions d’administration.
- **Avantages et limites**  
  - Améliore la traçabilité et la sécurité.
  - Peut devenir un point de défaillance unique s’il n’est pas redondé.
- **Typologies ou variantes**  
  - Bastion local, cloud, avec ou sans agent, intégré à une PAM (Privileged Access Management).

---

## Cas d’usage & exemples concrets
- Administration de serveurs d’un data center via un bastion unique.
- Journalisation de toutes les connexions SSH dans un environnement sensible.
- Accès sécurisé aux équipements réseau pour un prestataire externe.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Compromission du bastion = accès à toute l’infrastructure.
- Mauvaise configuration ou absence de supervision.
- Comptes trop permissifs ou absence de séparation des rôles.

---

## Mesures de sécurité & recommandations
- Intégrer MFA et mécanismes de contrôle fort des accès.
- Activer l’enregistrement vidéo ou texte des sessions.
- Isoler le bastion sur un segment réseau dédié.
- Mettre en place une supervision en temps réel.

---

## Standards, protocoles & normes associées
- ISO/IEC 27001 – contrôle des accès
- ANSSI – Référentiel PAMS
- Recommandations CIS sur l’administration sécurisée

---

## Intégration dans un écosystème SSI
- Élément central de la stratégie de contrôle des accès à privilèges.
- Complète les outils IAM, PAM, SIEM.
- Doit être intégré aux plans de continuité et de réponse à incident.

---

## Liens avec d’autres notions
- [[PAM]]
- [[Contrôle d’accès]]
- [[Administration sécurisée]]

---

## Sources, outils & références
- [Documentation officielle](https://www.ssi.gouv.fr/guide/administration-securisee/)
- [🛠️ Outils ou solutions associées](https://www.wallix.com/fr/)
- [Articles techniques, blogs spécialisés](https://www.cyberuniversity.fr/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=slw1SK2n0nQ)

---

## Mots-clés
`#cybersécurité` `#lexique` `#rôle` `#bastion` `#administration` `#privilege`
