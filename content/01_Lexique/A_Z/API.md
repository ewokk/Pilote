# API

> **Type** : acronyme 
> **Niveau** : base 
> **Contexte** : applicatif `#applicatif`, sécurité web `#web`, développement

---

## Définition
> Une **API (Application Programming Interface)** est un **ensemble de fonctions, règles et formats** permettant à des applications de **communiquer entre elles**. En cybersécurité, les API représentent à la fois un vecteur fonctionnel majeur et une surface d’attaque critique.

---

## Explication détaillée
- **Origine ou historique**  
  Les API existent depuis les débuts de l’informatique, mais ont pris une importance stratégique avec la montée des architectures web, cloud et microservices. Elles sont omniprésentes dans les applications modernes.

- **Fonctionnement technique**  
  - Permettent l’**exposition de services** ou de données à des clients internes ou tiers
  - Utilisent des **protocoles standardisés** (HTTP/HTTPS, REST, GraphQL, SOAP…)
  - Définissent des **points d’entrée (endpoints)** accessibles avec des méthodes (GET, POST, PUT, DELETE…)
  - Peuvent être **authentifiées, chiffrées, journalisées**

- **Rôles & fonctions**  
  - Faciliter l’intégration entre systèmes
  - Exposer des services (paiement, identification, analyse, etc.)
  - Supporter l’automatisation, l’interopérabilité

- **Avantages et limites**  
  + Flexibilité et modularité  
  + Favorise l’innovation (API ouvertes / publiques)  
  – Surface d’attaque étendue (API non documentées, non protégées)  
  – Risques liés à l’authentification, au contrôle d’accès ou aux erreurs de logique

- **Typologies ou variantes**  
  - API REST (Représentation d’état)  
  - API GraphQL (requêtes personnalisées)  
  - API SOAP (XML structuré, plus rigide)  
  - API internes vs externes (ouvertes)

---

## Cas d’usage & exemples concrets
- API d’un site e-commerce pour la gestion du panier
- API d’authentification OAuth pour la connexion via Google
- API REST pour accéder à une base de données météo
- API web d’un IoT communiquant avec le cloud

---

## Vulnérabilités, risques et abus connus
- API exposées sans authentification
- Injection (SQL, XML, NoSQL, command injection…)
- Mauvaise gestion des permissions (IDOR)
- Manque de journalisation ou de limitation de débit (rate limiting)
- Utilisation de versions obsolètes ou non maintenues

---

## Mesures de sécurité & recommandations
- Authentifier toutes les API (OAuth2, JWT…)
- Limiter les droits par utilisateur (RBAC, ABAC)
- Implémenter du chiffrement (HTTPS obligatoire)
- Valider strictement les entrées/sorties
- Documenter et inventorier toutes les API (shadow API)
- Protéger avec un API Gateway ou WAF spécialisé

---

## Standards, protocoles & normes associées
- OWASP API Security Top 10
- OAuth 2.0, OpenID Connect
- REST, GraphQL, SOAP
- JSON Web Tokens (JWT)
- NIST SP 800-204

---

## Intégration dans un écosystème SSI
- Surface d’exposition essentielle dans les architectures modernes
- Cible de tests de sécurité réguliers (SAST, DAST, fuzzing)
- Pilotées par les équipes DevSecOps et CTI

---

## Liens avec d’autres notions
- [[OWASP API Security]]
- [[OAuth]]
- [[Microservices]]
- [[WAF]]

---

## Sources, outils & références
- [OWASP API Security Project](https://owasp.org/www-project-api-security/)
- [Postman, Burp Suite, 42Crunch](https://www.postman.com/)
- [NIST API Security Guide](https://csrc.nist.gov/publications/detail/sp/800-204/final)
- [OWASP API Security – YouTube](https://www.youtube.com/watch?v=-9UoSbQTXz0)

---

## Mots-clés
`#cybersécurité` `#lexique` `#acronyme` `#API` `#REST` `#GraphQL` `#OAuth` `#web` `#surface_dattaque`
