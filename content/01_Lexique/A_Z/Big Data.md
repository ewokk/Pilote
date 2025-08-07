# Big Data

> **Type** : concept 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : gouvernance

---

## Définition
> Le Big Data désigne l’ensemble des technologies et pratiques permettant de stocker, traiter et analyser des volumes massifs de données, souvent en temps réel, provenant de sources diverses et hétérogènes.

---

## Explication détaillée
- **Origine ou historique**  
  - Le terme émerge dans les années 2000 pour désigner la croissance exponentielle des données numériques. Les 3V : Volume, Vitesse, Variété (parfois 5V avec Véracité et Valeur).
- **Fonctionnement technique**  
  - Infrastructures distribuées (ex : Hadoop, Spark, NoSQL).
  - Traitement parallèle des données (MapReduce).
  - Analyse prédictive, apprentissage automatique, corrélation d’événements.
- **Rôles & fonctions**  
  - Optimisation des processus métier, détection de tendances.
  - En cybersécurité : analyse des journaux (logs), détection d’anomalies, corrélation d’événements.
- **Avantages et limites**  
  - Permet de traiter de très grands ensembles de données hétérogènes.
  - Complexité de mise en œuvre, risques pour la vie privée.
- **Typologies ou variantes**  
  - Données structurées, semi-structurées, non structurées.
  - Traitement batch vs en temps réel.

---

## Cas d’usage & exemples concrets
- Analyse de millions de logs pour détecter des comportements suspects.
- Prévention de la fraude bancaire par analyse Big Data.
- Corrélation d’événements dans un SIEM pour anticiper une attaque.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Risques de fuite de données sensibles si mal protégées.
- Biais algorithmiques ou erreurs d’interprétation.
- Problèmes de conformité (RGPD, CNIL) en cas d’analyse abusive.

---

## Mesures de sécurité & recommandations
- Chiffrement des données en transit et au repos.
- Gestion rigoureuse des droits d’accès et des logs.
- Anonymisation ou pseudonymisation des données personnelles.
- Audits réguliers de conformité et d’intégrité.

---

## Standards, protocoles & normes associées
- ISO/IEC 20547 (Big Data reference architecture)
- ISO/IEC 27701 (protection des données personnelles)
- Règlement RGPD (UE)

---

## Intégration dans un écosystème SSI
- Source précieuse pour la détection proactive des menaces.
- Utilisé dans les SIEM, les systèmes de threat intelligence, les EDR avancés.
- Complémentaire des outils d’observabilité (logs, traces, métriques).

---

## Liens avec d’autres notions
- [[SIEM]]
- [[Threat Intelligence]]
- [[Machine Learning]]

---

## Sources, outils & références
- [Documentation officielle](https://www.iso.org/standard/72030.html)
- [🛠️ Outils ou solutions associées](https://spark.apache.org/)
- [Articles techniques, blogs spécialisés](https://www.databricks.com/blog/category/big-data)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=1iVVFShkP4g)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#bigdata` `#analyse` `#logs`
