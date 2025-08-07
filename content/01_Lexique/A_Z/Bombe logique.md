# Bombe logique

> **Type** : attaque 
> **Niveau** : avancé 
> **Contexte** : offensif

---

## Définition
> Une bombe logique est un code malveillant inséré dans un logiciel ou un système, conçu pour se déclencher automatiquement lorsqu’une condition spécifique est remplie (date, action, événement), causant des effets nuisibles ou destructeurs.

---

## Explication détaillée
- **Origine ou historique**  
  - Utilisée dès les années 1980, notamment dans des attaques internes. Célèbre exemple : un employé licencié déclenchant une bombe logique en représailles.
- **Fonctionnement technique**  
  - Le code reste inactif jusqu’à ce qu’une condition définie soit remplie (ex : date spécifique, absence d’un utilisateur, suppression d’un fichier...).
  - Une fois activée, elle peut effacer des données, altérer des fichiers ou déclencher d’autres malwares.
- **Rôles & fonctions**  
  - Sabotage interne, vengeance, espionnage.
  - Acte de malveillance ciblée souvent difficile à détecter.
- **Avantages et limites**  
  - Très furtive jusqu’à l’activation.
  - Détection difficile sans analyse approfondie du code source ou du comportement.
- **Typologies ou variantes**  
  - Date bomb, event-based bomb, user-triggered bomb.

---

## Cas d’usage & exemples concrets
- Un développeur insère un code effaçant une base de données s’il est désactivé du système.
- Malware dormant déclenché uniquement si l’utilisateur ouvre un certain document.
- Logiciel légitime modifié pour exécuter un effacement à une date précise.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Exploitation en environnement industriel ou militaire.
- Intégration dans des bibliothèques tierces (supply chain).
- Dommages irréversibles sans possibilité de remédiation rapide.

---

## Mesures de sécurité & recommandations
- Contrôle d’intégrité régulier du code source et des binaires.
- Analyse statique et dynamique de logiciels internes.
- Limitation des droits des développeurs et séparation des responsabilités.
- Journalisation et supervision renforcée.

---

## Standards, protocoles & normes associées
- NIST SP 800-53 (SA-11, SI-10)
- ISO/IEC 27001 – contrôle du développement logiciel
- OWASP Secure Software Development Lifecycle (SSDLC)

---

## Intégration dans un écosystème SSI
- Intégré dans les scénarios de menace internes.
- À surveiller lors des audits de code et de gestion de versions.
- Composant potentiel de cyberattaques avancées (APT).

---

## Liens avec d’autres notions
- [[Malware]]
- [[Supply Chain Attack]]
- [[Sabotage numérique]]

---

## Sources, outils & références
- [Documentation officielle](https://www.ssi.gouv.fr/)
- [🛠️ Outils ou solutions associées](https://checkmarx.com/)
- [Articles techniques, blogs spécialisés](https://www.darkreading.com/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=REtiK8h7Qkc)

---

## Mots-clés
`#cybersécurité` `#lexique` `#attaque` `#bombelogique` `#sabotage` `#malware`
