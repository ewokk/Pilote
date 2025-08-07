# Analyse prédictive

> **Type** : concept 
> **Niveau** : avancé 
> **Contexte** : défensif, détection `#détection`, anticipation `#anticipation`

---

## Définition
> L’**analyse prédictive** en cybersécurité consiste à utiliser des **données historiques et actuelles** ainsi que des algorithmes statistiques ou d’apprentissage automatique pour **anticiper des événements futurs**, tels que des incidents de sécurité ou des comportements à risque.

---

## Explication détaillée
- **Origine ou historique**  
  L’analyse prédictive est issue du domaine de la data science et s’est progressivement imposée dans la cybersécurité à mesure que les données collectées devenaient massives (SIEM, logs, réseau, utilisateurs...).

- **Fonctionnement technique**  
  - Collecte et structuration de **données historiques** (logs, alertes, indicateurs, contexte…)
  - **Nettoyage et sélection** des variables pertinentes
  - Application de modèles statistiques ou de **machine learning supervisé/non-supervisé**
  - Génération de **scénarios probables** ou **niveaux de risque prédits**

- **Rôles & fonctions**  
  - Détecter les signes précurseurs d'une attaque
  - Prioriser les vulnérabilités à corriger
  - Prédire les utilisateurs ou ressources à risque
  - Renforcer les mécanismes proactifs de sécurité

- **Avantages et limites**  
  + Permet une **approche proactive** de la cybersécurité  
  + Réduction du temps de réponse et meilleure allocation des ressources  
  – Forte dépendance à la **qualité des données**  
  – Risques de **biais algorithmiques** ou surapprentissage

- **Typologies ou variantes**  
  - Modèles basés sur la détection d’anomalies
  - Prédiction de score de risque utilisateur ou actif (UEBA)
  - Moteurs de recommandation pour le patch management

---

## Cas d’usage & exemples concrets
- SIEM prédictif anticipant un comportement de ransomware
- Système prédisant les comptes à risque (UEBA)
- Outil priorisant les vulnérabilités à corriger en fonction du contexte
- Prédiction des périodes d’attaque selon les tendances historiques

---

## Vulnérabilités, risques et abus connus
- Prédictions erronées conduisant à des alertes injustifiées
- Dépendance excessive aux outils algorithmiques
- Biais introduits par des données déséquilibrées ou incomplètes
- Risques de faux sentiment de sécurité

---

## Mesures de sécurité & recommandations
- Vérifier la qualité, l’intégrité et la représentativité des données
- Coupler l’analyse prédictive avec des mécanismes de validation humaine
- Mettre à jour régulièrement les modèles selon l’évolution des menaces
- Effectuer des tests de robustesse et des audits des modèles

---

## Standards, protocoles & normes associées
- NIST AI Risk Management Framework
- ISO/IEC 27001 (prévention proactive)
- MITRE ATT&CK (modèle d'entrée pour enrichir l’analyse)
- ENISA – AI Threat Landscape

---

## Intégration dans un écosystème SSI
- Complément aux outils SIEM, SOAR et EDR
- Utilisé dans les systèmes UEBA, XDR, CTI
- Alimente les stratégies de prévention et de réponse à incident

---

## Liens avec d’autres notions
- [[UEBA]]
- [[Threat Intelligence]]
- [[Machine Learning]]
- [[SIEM]]

---

## Sources, outils & références
- [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework)
- [Microsoft Sentinel – analytics prédictifs](https://azure.microsoft.com/en-us/products/microsoft-sentinel/)
- [ENISA AI Threat Landscape](https://www.enisa.europa.eu/)
- [Analyse prédictive et cybersécurité (YouTube)](https://www.youtube.com/watch?v=z5DjpbOa1kg)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#analyse_prédictive` `#ml` `#détection` `#anticipation` `#proactivité`
