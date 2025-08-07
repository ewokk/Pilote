# Baiting

> **Type** : technique d’ingénierie sociale 
> **Niveau** : base 
> **Contexte** : offensif

---

## Définition
> Le baiting est une technique d’ingénierie sociale consistant à appâter la victime à l’aide d’un objet ou d’un contenu attractif (clé USB, lien alléchant, fichier gratuit), afin qu’elle exécute une action compromettante.

---

## Explication détaillée
- **Origine ou historique**  
  - Inspirée de la psychologie humaine (curiosité, appât du gain), cette méthode existe depuis les débuts du social engineering.
- **Fonctionnement technique**  
  - Scénario typique : une clé USB contenant un malware est laissée volontairement dans un lieu public.
  - Variante numérique : incitation à télécharger un logiciel “gratuit” infecté.
- **Rôles & fonctions**  
  - Permet d’initier une intrusion, une infection ou un vol d’identifiants.
  - Exploite les réflexes non sécurisés de l’utilisateur.
- **Avantages et limites**  
  - Très efficace si la cible est peu sensibilisée.
  - Faible coût de mise en œuvre.
  - Fonctionne moins bien sur des utilisateurs formés.
- **Typologies ou variantes**  
  - Baiting physique (clés USB), baiting numérique (pièces jointes, liens, contenus frauduleux).

---

## Cas d’usage & exemples concrets
- Clé USB infectée abandonnée dans un parking d’entreprise.
- Email contenant une fausse carte cadeau ou un “bon plan” téléchargeable.
- Téléchargement d’un crack de logiciel contenant un cheval de Troie.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Infection du poste via autorun, macros, ou exploit.
- Propagation latérale après initialisation du malware.
- Vol de données d’entreprise ou d’identifiants dès l’exécution.

---

## Mesures de sécurité & recommandations
- Sensibiliser les utilisateurs à ne jamais brancher de supports inconnus.
- Désactiver l’autorun sur les postes.
- Mettre en place des mécanismes d’analyse des périphériques amovibles.
- Surveiller les comportements inhabituels post-connexion.

---

## Standards, protocoles & normes associées
- ISO/IEC 27002 – contrôle des supports amovibles
- NIST SP 800-114 – guidelines utilisateur
- Recommandations ANSSI en sensibilisation

---

## Intégration dans un écosystème SSI
- Doit figurer dans les campagnes de sensibilisation annuelles.
- Intégré à la gestion des incidents comme vecteur d’intrusion probable.
- Complété par des mesures physiques de contrôle d’accès et de surveillance.

---

## Liens avec d’autres notions
- [[Ingénierie sociale]]
- [[Phishing]]
- [[USB Drop Attack]]

---

## Sources, outils & références
- [Documentation officielle](https://www.ssi.gouv.fr/)
- [🛠️ Outils ou solutions associées](https://www.nomoreransom.org/)
- [Articles techniques, blogs spécialisés](https://www.cybermalveillance.gouv.fr/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=r9QJfQ3H1jQ)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#baiting` `#ingénierie-sociale` `#attaque`
