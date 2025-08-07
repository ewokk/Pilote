# Bombardement de courriels

> **Type** : attaque 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : offensif

---

## Définition
> Le bombardement de courriels (email bombing) est une attaque consistant à inonder la boîte mail d’une victime de milliers de messages en un temps réduit, dans le but de la saturer, de masquer des messages importants ou de provoquer un déni de service.

---

## Explication détaillée
- **Origine ou historique**  
  - Connu depuis les années 1990, souvent utilisé à des fins de nuisance, sabotage ou diversion.
- **Fonctionnement technique**  
  - Génération de multiples messages via scripts ou services automatisés.
  - Exploitation de formulaires en ligne, d’abonnements à la volée, ou de services de newsletters.
  - Peut être combiné à une attaque de fraude ou de phishing pour en dissimuler les traces.
- **Rôles & fonctions**  
  - Noyer les informations utiles dans une masse de messages.
  - Détourner l’attention, bloquer un workflow automatisé.
  - Nuisance psychologique ou organisationnelle.
- **Avantages et limites**  
  - Facile à réaliser avec peu de moyens.
  - Inefficace si des filtres sont bien configurés.
- **Typologies ou variantes**  
  - Bombing aléatoire, bombing ciblé, flooding via scripts ou botnets.

---

## Cas d’usage & exemples concrets
- Inondation d’une boîte mail RH pour faire rater un message de recrutement.
- Masquage d’un email de phishing par une avalanche de notifications.
- Saturation d’un formulaire de contact ou d’un ticketing.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Blocage de boîtes mail professionnelles critiques.
- Perte de messages importants ou délais de traitement.
- Usurpation d’identité ou désinscription massive non désirée.

---

## Mesures de sécurité & recommandations
- Mettre en place des filtres antispam adaptatifs.
- Utiliser des boîtes mail avec capacité d’analyse automatique.
- Bloquer ou limiter les envois depuis des sources anormales.
- Surveiller les pics d’activité et mettre en quarantaine les messages.

---

## Standards, protocoles & normes associées
- RFC 5321 / 5322 – standards email
- DMARC, SPF, DKIM – lutte contre l’usurpation
- Recommandations CERT-FR sur la messagerie sécurisée

---

## Intégration dans un écosystème SSI
- Intégré à la surveillance des menaces via le SOC.
- Doit faire partie des scénarios de tests de robustesse messagerie.
- Peut être atténué par segmentation ou délestage des flux entrants.

---

## Liens avec d’autres notions
- [[Phishing]]
- [[Spam]]
- [[Déni de service]]

---

## Sources, outils & références
- [Documentation officielle](https://www.cert.ssi.gouv.fr/)
- [🛠️ Outils ou solutions associées](https://www.proofpoint.com/)
- [Articles techniques, blogs spécialisés](https://www.bleepingcomputer.com/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=dohNn5bA6H8)

---

## Mots-clés
`#cybersécurité` `#lexique` `#attaque` `#emailbombing` `#spam` `#messagerie`
