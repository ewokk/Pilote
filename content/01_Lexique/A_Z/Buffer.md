# Buffer

> **Type** : concept 
> **Niveau** : #base  
> **Contexte** : #systèmes, #développement

---

## Définition
> Un buffer est une zone mémoire temporaire utilisée pour stocker des données en cours de traitement, souvent entre deux systèmes ou composants qui fonctionnent à des vitesses différentes.

---

## Explication détaillée
- **Origine ou historique**  
  - Notion de base en informatique présente depuis les premiers systèmes d’exploitation.
- **Fonctionnement technique**  
  - Le buffer sert à temporiser des données : il reçoit les données d’un processus producteur, et les transmet à un processus consommateur.
  - Implémenté souvent comme un tableau mémoire (ex : `char buffer[256];` en C).
- **Rôles & fonctions** dans la cybersécurité  
  - Permet une communication fluide entre composants.
  - Peut devenir une cible d’attaques (ex : overflow) si mal géré.
- **Avantages et limites**  
  - Avantage : efficacité de traitement, découplage des composants.
  - Limite : nécessite une gestion stricte de la taille et de l’accès.
- **Typologies ou variantes**  
  - Buffers circulaires, FIFO, double buffering, tampons réseau.

---

## Cas d’usage & exemples concrets
- Transfert de fichiers en streaming vidéo/audio.
- Tampon de réception d’un port série.
- File d’attente d’événements dans un OS ou un driver.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Risque majeur : [[Buffer Overflow]].
- Possibilité de fuite de données si mal initialisé.
- Risque de corruption mémoire (ex : écriture hors limites).

---

## Mesures de sécurité & recommandations
- Toujours vérifier les bornes et tailles des buffers.
- Utiliser des fonctions sûres (`strncpy`, `memcpy_s`, etc.).
- Pratiquer la programmation défensive.
- Analyser le code avec des outils de type static analysis.

---

## Standards, protocoles & normes associées
- OWASP pour la sécurité des langages bas-niveau.
- Guidelines de codage sécurisé (CERT C, MISRA, etc.).

---

## Intégration dans un écosystème SSI
- Présents dans tous les niveaux du système (drivers, OS, apps).
- Doivent être validés dans les phases de revue de code ou audit.
- Lié à la surface d’attaque mémoire.

---

## Liens avec d’autres notions
- [[Buffer Overflow]]
- [[Mémoire]]
- [[Overflow]]

---

## Sources, outils & références
- [Microsoft - Buffer security best practices](https://learn.microsoft.com/en-us/cpp/code-quality/buffer-security-check)
- [OWASP - Secure coding practices](https://owasp.org/www-project-secure-coding-practices/)
- [Buffer Explained (YouTube)](https://www.youtube.com/watch?v=U1ZBhxT7cZg)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#mémoire` `#buffer` `#sécuritécode`
