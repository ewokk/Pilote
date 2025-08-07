# ASVS

> **Type** : standard  `#standard`  
> **Niveau** : avancé 
> **Contexte** : sécurité applicative `#applicatif`, développement sécurisé `#devsecops`, audit

---

## Définition
> L’**ASVS (Application Security Verification Standard)** est un **standard de l’OWASP** qui fournit une **checklist complète de bonnes pratiques de sécurité applicative**. Il est utilisé pour vérifier la robustesse d'une application à différents niveaux de criticité.

---

## Explication détaillée
- **Origine ou historique**  
  Créé par OWASP, l’ASVS est une alternative ou un complément à l’OWASP Top 10. Il vise un **cadre structuré, exhaustif et vérifiable** pour la sécurité des applications.

- **Fonctionnement technique**  
  - Organisé en **niveaux de sécurité** :
    - **Niveau 1** : basique (applications de faible criticité)
    - **Niveau 2** : recommandé par défaut (applications avec données sensibles)
    - **Niveau 3** : haut niveau (applications critiques, sensibles, réglementées)
  - Divisé en **sections thématiques** : authentification, gestion des sessions, logique métier, cryptographie, logging…
  - Fournit des **critères de test** vérifiables pour les auditeurs, développeurs et pentesters

- **Rôles & fonctions**  
  - Évaluer ou concevoir des applications sécurisées
  - Normaliser les exigences de sécurité logicielle
  - Servir de base pour les audits, spécifications ou appels d’offres

- **Avantages et limites**  
  + Très détaillé et structurant  
  + Compatible avec les démarches DevSecOps  
  – Nécessite une expertise pour être correctement appliqué  
  – Moins connu que l’OWASP Top 10 dans les petites structures

- **Typologies ou variantes**  
  - OWASP ASVS v4.0.3 (version actuelle)
  - Intégration dans des outils SAST/DAST, pipelines CI/CD
  - Checklists personnalisables selon les besoins du projet

---

## Cas d’usage & exemples concrets
- Spécifier des exigences sécurité dans un cahier des charges applicatif
- Valider la sécurité d’une API RESTful avant mise en production
- Réaliser un audit de conformité interne DevSecOps
- Alignement avec les exigences RGPD, PCI-DSS ou ISO 27001

---

## Vulnérabilités, risques et abus connus
- Mauvaise interprétation des niveaux requis
- Application partielle ou superficielle du standard
- Risque de dérive documentaire (trop complexe ou non maintenu)
- Faux sentiment de sécurité si non testé réellement

---

## Mesures de sécurité & recommandations
- Intégrer ASVS dès la phase de conception (Security by Design)
- Former les équipes techniques à ses exigences
- Utiliser les critères comme base de tests automatisés
- Coupler avec l’OWASP Top 10 et les outils de revue de code

---

## Standards, protocoles & normes associées
- OWASP ASVS v4.x
- OWASP Top 10
- ISO/IEC 27034 – sécurité des applications
- NIST SP 800-218 – SSDF (Secure Software Development Framework)

---

## Intégration dans un écosystème SSI
- Utilisé dans les stratégies DevSecOps
- Référentiel interne pour les audits et la qualité logicielle
- Appui aux RSSI dans la gouvernance applicative

---

## Liens avec d’autres notions
- [[OWASP Top 10]]
- [[Secure Coding]]
- [[DevSecOps]]
- [[Audit de sécurité]]

---

## Sources, outils & références
- [OWASP ASVS GitHub](https://github.com/OWASP/ASVS/)
- [ASVS PDF officiel (v4.0.3)](https://owasp.org/www-project-application-security-verification-standard/)
- [Cheat sheet OWASP ASVS & SDLC](https://cheatsheetseries.owasp.org/)
- [Présentation ASVS – OWASP Summit](https://www.youtube.com/watch?v=5BFU53nHfJg)

---

## Mots-clés
`#cybersécurité` `#lexique` `#standard` `#ASVS` `#OWASP` `#sécurité_applicative` `#DevSecOps` `#vérification`
