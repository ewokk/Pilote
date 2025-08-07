# Analyse comportementale

> **Type** : concept 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : défensif, détection `#détection`, surveillance `#surveillance`

---

## Définition
> L’**analyse comportementale** en cybersécurité désigne l’étude et la détection d’activités anormales dans un système d’information en comparant les comportements actuels aux **profils de comportement “normaux” ou attendus**.

---

## Explication détaillée
- **Origine ou historique**  
  Issue du monde de la sécurité physique et de la psychologie, elle a été adaptée à l’informatique pour détecter les menaces qui échappent aux règles statiques. Elle est utilisée depuis les années 2000 dans les systèmes d’intrusion (IDS), EDR et SIEM modernes.

- **Fonctionnement technique**  
  - Collecte de **logs**, **métriques système** et **flux réseau**
  - Construction de profils de comportements “habituels” (par machine, utilisateur, application…)
  - Détection des écarts significatifs (changements de fréquence, de volume, d’horaire, de géolocalisation…)
  - Utilisation d’**algorithmes de machine learning**, seuils statistiques, ou règles heuristiques

- **Rôles & fonctions**  
  - Identifier les attaques inconnues (zero-day)
  - Repérer des comportements suspects ou non autorisés
  - Améliorer la détection des compromissions internes

- **Avantages et limites**  
  + Permet de détecter des menaces sans signature connue  
  + Utile contre les APT et menaces internes  
  – Génère des faux positifs si les profils sont mal calibrés  
  – Besoin de données et de période d’apprentissage initial

- **Typologies ou variantes**  
  - Analyse comportementale utilisateur (UEBA)
  - Analyse de processus ou d’applications
  - Analyse réseau comportementale (NBA)

---

## Cas d’usage & exemples concrets
- Détection d’un administrateur accédant à un serveur en dehors des heures habituelles
- Processus inconnu s’exécutant sur un poste utilisateur
- Changement soudain de volume de données envoyées vers l’extérieur
- Accès simultané à un compte depuis deux localisations géographiques éloignées

---

## Vulnérabilités, risques et abus connus
- Mauvaise définition des seuils → faux positifs/alert fatigue
- Risque de non-détection en cas de normalisation mal entraînée
- Possibilité d’évasion si l’attaquant connaît les modèles
- Charge importante sur les systèmes collecteurs et analystes

---

## Mesures de sécurité & recommandations
- Combiner analyse comportementale et détection par signature
- Mettre en place des politiques de journalisation cohérentes
- Former les analystes à l’interprétation des comportements
- Déployer des outils de corrélation et de scoring de risques
- Auditer régulièrement les modèles d’apprentissage

---

## Standards, protocoles & normes associées
- NIST SP 800-94 (guide IDS)
- MITRE D3FEND – techniques de détection comportementale
- ISO/IEC 27035 – détection & gestion d’incidents

---

## Intégration dans un écosystème SSI
- Composante clé dans les SIEM, EDR, SOAR
- Complémentarité avec les mécanismes d’analyse de signature
- Base de fonctionnement des systèmes UEBA (User & Entity Behavior Analytics)

---

## Liens avec d’autres notions
- [[EDR]]
- [[SIEM]]
- [[UEBA]]
- [[Anomalie]]
- [[Threat Hunting]]

---

## Sources, outils & références
- [MITRE D3FEND – comportement](https://d3fend.mitre.org/)
- [Elastic SIEM, Sentinel – détection comportementale](https://www.elastic.co/security)
- [Article ANSSI – détection comportementale](https://www.ssi.gouv.fr/)
- [Analyse comportementale – explication vidéo](https://www.youtube.com/watch?v=ctM01xZtn_Y)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#analyse_comportementale` `#détection` `#anomalie` `#SOC` `#EDR`
