# Browser-in-the-Browser

> **Type** : attaque 
> **Niveau** : #intermédiaire  
> **Contexte** : #offensif, #socialengineering, #phishing

---

## Définition
> Le "Browser-in-the-Browser" est une technique d’attaque de type phishing qui simule une fenêtre de navigateur à l’intérieur d’une page web afin de tromper l’utilisateur et lui soutirer ses identifiants.

---

## Explication détaillée
- **Origine ou historique**  
  - Popularisée en 2022 par le chercheur en sécurité *mr.d0x*, cette attaque exploite les habitudes visuelles de l’utilisateur.
- **Fonctionnement technique**  
  - L’attaquant crée une fausse fenêtre de connexion (par exemple Google ou Steam) en HTML/CSS/JS qui imite parfaitement l’apparence d’une fenêtre de navigateur classique, y compris l’URL visible.
  - Elle est généralement affichée en superposition dans un site compromis ou malveillant.
- **Rôles & fonctions** dans la cybersécurité  
  - Technique avancée de phishing pour contourner les mécanismes classiques de détection visuelle.
- **Avantages et limites**  
  - Avantage : très crédible visuellement.
  - Limite : détectable avec vigilance et outils de sécurité (hover, inspecteur, etc.).
- **Typologies ou variantes**  
  - Simulation Steam, Microsoft, Google, ou toute autre plateforme populaire.

---

## Cas d’usage & exemples concrets
- Campagnes de phishing ciblées sur les joueurs Steam ou les employés via des liens piégés.
- Sites factices hébergeant une fausse fenêtre de connexion pour récolter les identifiants SSO.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Risque d’usurpation d'identité via récupération de mots de passe.
- Exploitation dans des attaques par spear-phishing.
- Contournement des vérifications visuelles d’URL.

---

## Mesures de sécurité & recommandations
- Ne jamais entrer d’identifiants dans une fenêtre qui ne peut pas être déplacée hors du navigateur.
- Activer des solutions anti-phishing sur le navigateur.
- Éducation des utilisateurs sur les faux pop-ups et les signaux d’alerte (pas de barre de titre, pas de vrai déplacement de la fenêtre).
- Utiliser un gestionnaire de mots de passe : il ne remplira pas les champs si le domaine est incorrect.

---

## Standards, protocoles & normes associées
- Aucun standard spécifique, mais cette attaque entre dans le cadre de la **détection des menaces de phishing** dans les référentiels NIST ou ANSSI.

---

## Intégration dans un écosystème SSI
- Requiert une sensibilisation des utilisateurs.
- Peut être couplée à d'autres attaques (ex : compromission initiale par phishing).
- Doit être détectée en amont via surveillance web et threat intelligence.

---

## Liens avec d’autres notions
- [[Phishing]]
- [[Social Engineering]]
- [[Authentification multifacteurs]]

---

## Sources, outils & références
- [Article original par mr.d0x](https://mrd0x.com/browser-in-the-browser-phishing-attack/)
- [Blog Malwarebytes sur le BITB](https://www.malwarebytes.com/blog/news/2022/03/browser-in-the-browser-phishing-technique-explained)
- [Démo vidéo YouTube](https://www.youtube.com/watch?v=exMP2yfJkck)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#phishing` `#browser` `#socialengineering`
