# Alias

> **Catégorie** : #ia  
> **Type** : concept 
> **Niveau** : base 
> **Contexte** : traitement du langage `#nlp`, systèmes conversationnels, interaction utilisateur

---

## Définition
> En intelligence artificielle, un **alias** désigne une **autre forme, nom ou synonyme** utilisé pour référencer une même entité, commande ou donnée. Il permet de **reconnaître plusieurs formulations** pour une même intention ou élément.

---

## Explication détaillée
- **Origine ou historique**  
  Le concept d’alias est utilisé depuis longtemps en informatique (shells Unix, bases de données…). En IA, il est devenu crucial dans les assistants vocaux, les chatbots ou les systèmes de NLP.

- **Fonctionnement technique**  
  - Un alias est une **variante de texte ou d’intention**
  - Utilisé pour **reconnaître des formulations équivalentes**
  - Améliore l’interprétation des requêtes utilisateurs
  - Implémenté via des listes statiques ou via des modèles d’apprentissage (embedding)

- **Rôles & fonctions**  
  - Faciliter la compréhension des intentions utilisateur
  - Réduire les confusions dans le dialogue IA
  - Améliorer l’ergonomie des interfaces vocales ou textuelles

- **Avantages et limites**  
  + Améliore la flexibilité des interactions  
  + Rend les IA plus naturelles à utiliser  
  – Peut générer des conflits sémantiques si mal géré  
  – Nécessite une **bonne gestion du contexte**

- **Typologies ou variantes**  
  - Alias textuel (ex : "bonjour" = "salut")  
  - Alias fonctionnel (ex : commande vocale)  
  - Alias d’entité (ex : “GAFAM” = “Google, Apple, Facebook…”)

---

## Cas d’usage & exemples concrets
- Chatbot qui comprend “Réinitialise mon mot de passe” = “j’ai oublié mon mdp”
- Assistant vocal qui déclenche la même action pour “éteins la lumière” ou “coupe la lampe”
- Systèmes de FAQ intelligents
- Environnements de script avec alias de commandes

---

## Vulnérabilités, risques et abus connus
- Mauvaise reconnaissance de l’intention réelle
- Débordement sémantique (alias trop généraux)
- Usurpation ou contournement de sécurité dans les IA sensibles
- Conflits entre alias similaires

---

## Mesures de sécurité & recommandations
- Définir des alias avec validation humaine
- Utiliser des modèles d’IA robustes pour la désambiguïsation
- Tenir compte du **contexte conversationnel** dans le moteur NLP
- Logger et réviser les alias utilisés en production

---

## Standards, protocoles & normes associées
- NLU/NLP : SpaCy, Rasa, BERT
- Voice UX : Amazon Alexa Skills Kit, Google Dialogflow
- OWASP Top 10 for LLMs – risque d’interprétation erronée

---

## Intégration dans un écosystème SSI
- Alias dans les bots internes (RH, IT, sécurité)
- Importance dans la conception d’IA éthiques et explicables
- Utilisation dans les SI conversationnels et assistants contextuels

---

## Liens avec d’autres notions
- [[NLP (Natural Language Processing)]]
- [[Intent Recognition]]
- [[Chatbot]]
- [[Synonyme]]

---

## Sources, outils & références
- [Rasa – gestion des alias d’intention](https://rasa.com/)
- [Dialogflow – training phrases & alias](https://cloud.google.com/dialogflow/)
- [OpenAI sur la désambiguïsation](https://platform.openai.com/)
- [Tutoriel alias & NLP (YouTube)](https://www.youtube.com/watch?v=qkREkY5ozRA)

---

## Mots-clés
`#ia` `#lexique` `#concept` `#alias` `#nlp` `#intention` `#chatbot` `#interaction`
