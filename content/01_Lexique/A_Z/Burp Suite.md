# Burp Suite

> **Type** : outil  `#outil`  
> **Niveau** : #intermédiaire  
> **Contexte** : #offensif, #pentest, #audit

---

## Définition
> Burp Suite est un outil de test d’intrusion pour applications web, permettant d’analyser, d’intercepter et de manipuler le trafic HTTP/S entre un navigateur et un serveur.

---

## Explication détaillée
- **Origine ou historique**  
  - Développé par PortSwigger, Burp est devenu un standard dans les tests de sécurité web.
- **Fonctionnement technique**  
  - Fonctionne comme un proxy HTTP local, interceptant les requêtes pour les modifier ou les rejouer.
  - Dispose de nombreux modules : Repeater, Intruder, Scanner (version Pro), Decoder, Comparer, etc.
- **Rôles & fonctions** dans la cybersécurité  
  - Permet d’identifier des failles comme XSS, SQLi, CSRF, IDOR.
  - Utilisé dans le pentest, le bug bounty, l’audit de code web.
- **Avantages et limites**  
  - Avantages : très complet, interface intuitive, extensible.
  - Limites : version Pro payante pour certaines fonctionnalités clés.
- **Typologies ou variantes**  
  - Version Community vs Pro, extensions personnalisées (BApp Store).

---

## Cas d’usage & exemples concrets
- Analyse de formulaire de connexion vulnérable à une injection SQL.
- Rejeu de requêtes HTTP avec paramètres modifiés pour tester l’authentification.
- Test d’une API REST mal sécurisée.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Outil neutre, mais peut être utilisé à des fins malveillantes s’il est mal encadré.
- Utilisation non autorisée = intrusion illégale.

---

## Mesures de sécurité & recommandations
- Réserver son usage à des environnements autorisés/test.
- Sensibiliser à l’éthique du pentest.
- Limiter le proxy aux adresses locales ou testées.

---

## Standards, protocoles & normes associées
- OWASP Top 10 (outil privilégié d’analyse).
- HTTPS, HTTP/2, REST, SOAP (protocoles testables).
- Peut s’inscrire dans les normes ISO/IEC 27002 (contrôle des vulnérabilités).

---

## Intégration dans un écosystème SSI
- S’intègre à des pipelines de CI/CD pour du test automatisé.
- Couplé à des outils comme ZAP, Nikto, etc.
- Peut alimenter des rapports d’audit de vulnérabilités.

---

## Liens avec d’autres notions
- [[Pentest]]
- [[Fuzzing]]
- [[OWASP]]

---

## Sources, outils & références
- [Site officiel PortSwigger](https://portswigger.net/burp)
- [Documentation Burp](https://portswigger.net/burp/documentation)
- [Formation Web Security Academy](https://portswigger.net/web-security)

---

## Mots-clés
`#cybersécurité` `#lexique` `#outil` `#burp` `#pentest` `#proxy`
