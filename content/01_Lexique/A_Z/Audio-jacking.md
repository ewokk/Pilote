# Audio-jacking

> **Type** : concept 
> **Niveau** : avancé 
> **Contexte** : offensif

---

## Définition
> L’audio-jacking désigne une attaque où un acteur malveillant intercepte, injecte ou manipule des flux audio (microphones ou haut-parleurs) d’un appareil à des fins d’espionnage, de perturbation ou d’ingénierie sociale.

---

## Explication détaillée
- **Origine ou historique**  
  - Concept émergent lié à la montée en puissance des assistants vocaux, objets connectés et microphones omniprésents.
- **Fonctionnement technique**  
  - Interception de signaux via malware ou exploit système.
  - Utilisation de signaux ultrasoniques inaudibles à l’humain pour injecter des commandes.
  - Hijacking de périphériques audio via failles (ex : CVE sur pilotes audio ou accès root).
- **Rôles & fonctions**  
  - Espionnage (enregistrement de conversations confidentielles).
  - Commande à distance (commande vocale malveillante).
  - Déni de service audio ou perturbation (bruits, interférences).
- **Avantages et limites**  
  - Discret et difficile à détecter.
  - Requiert un accès privilégié ou une proximité selon le vecteur.
- **Typologies ou variantes**  
  - Audio injection, ultrasonic injection, mic eavesdropping, audio fuzzing.

---

## Cas d’usage & exemples concrets
- Enregistrement d’un appel Zoom à l’insu de l’utilisateur via malware.
- Injection de commandes vocales dans un assistant (ex : “OK Google, ouvre la porte”).
- Perturbation d’une visioconférence via bruits injectés à distance.

---

## Vulnérabilités, risques et abus connus
- Accès non autorisé au microphone par des applications malveillantes.
- Exploitation de failles matérielles ou firmware sur les chipsets audio.
- Utilisation d’ultrasons pour piloter des assistants vocaux sans déclenchement visible.

---

## Mesures de sécurité & recommandations
- Désactiver ou restreindre l’accès au micro et haut-parleurs pour les applis inutiles.
- Utiliser des caches matériels (coupure physique).
- Suivi des processus utilisant les périphériques audio.
- Outils de détection d’injection ou d’écoute anormale.

---

## Standards, protocoles & normes associées
- RGPD (vie privée, surveillance)
- ISO/IEC 27001 – contrôle des accès aux équipements
- NIST SP 800-53 – protections contre les canaux cachés

---

## Intégration dans un écosystème SSI
- À intégrer dans les politiques de BYOD et de sécurité physique.
- À surveiller dans les environnements sensibles (conférences, espaces sécurisés).
- Complémentaire aux stratégies anti-espionnage.

---

## Liens avec d’autres notions
- [[Attaque de la chaîne d’approvisionnement]]
- [[Espionnage numérique]]
- [[Canaux auxiliaires]]

---

## Sources, outils & références
- [Documentation officielle](https://owasp.org/www-community/attacks/Audio_Jacking)
- [Outils ou solutions associées](https://github.com/serval-snt-uni-lu/Audioshield)
- [Articles techniques, blogs spécialisés](https://www.wired.com/story/voice-command-ultrasound-attacks/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=TiQNw0kJG3Y)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#espionnage` `#audio` `#attaque` `#surveillance`
