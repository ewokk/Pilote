# 14 – Comparatif ISO 27005 / NIST RMF / EBIOS RM

## Objectif

Comparer les trois cadres majeurs de gestion des risques cyber :  
- [[ISO/IEC 27005 (ISO/IEC 27005 – Information security risk management)]].  
- [[NIST RMF (NIST Risk Management Framework)]].  
- [[EBIOS Risk Manager (EBIOS RM – Expression des Besoins et Identification des Objectifs de Sécurité, Risk Manager)]].  

Ce comparatif permet aux RSSI et auditeurs de comprendre comment articuler les démarches dans des environnements multi-référentiels.

---

## Tableau comparatif des étapes

| Étape | ISO/IEC 27005 | NIST RMF | EBIOS RM |
|-------|---------------|----------|----------|
| **Contexte / périmètre** | Définition du périmètre, identification des actifs | Catégorisation des systèmes (FIPS 199) | Atelier 1 : périmètre, valeurs métier, biens supports |
| **Identification risques** | Actifs, menaces, vulnérabilités | Sélection des contrôles initiaux (SP 800‑53) | Atelier 2 : couples SR/OV |
| **Analyse menaces** | Basée sur scénarios génériques | Contrôles de sécurité adaptés | Atelier 3 : stratégie de menaces (MITRE, Kill Chain) |
| **Scénarios opérationnels** | Pas de notion explicite | Documentation de menaces techniques | Atelier 4 : scénarios réalistes adverses |
| **Évaluation risque** | Gravité × vraisemblance | Évaluation continue, scoring contrôles | Probabilité × gravité sur scénarios |
| **Traitement** | Choix de mesures ISO 27001 | Mise en œuvre contrôles SP 800‑53 | Atelier 5 : options traitement (réduction, transfert, etc.) |
| **Exploitation** | Intégration SMSI (ISO 27001) | Continuous Monitoring | Restitution COMEX, KPI/KRI |

---

## Points communs

- Les trois approches suivent un **cycle logique** : contexte → analyse → traitement → suivi.  
- Les notions de **risque brut/résiduel** et de **preuve d’efficacité** sont présentes dans chaque cadre.  
- Tous insistent sur la **traçabilité et la gouvernance**.  

---

## Différences clés

- **ISO 27005** : cadre normatif, aligné ISO 27001, moins détaillé sur les scénarios adverses.  
- **NIST RMF** : très opérationnel et centré sur les **contrôles techniques** (SP 800‑53), utilisé massivement aux USA.  
- **EBIOS RM** : spécificité = modélisation des **scénarios adverses** et intégration forte au COMEX, plus pédagogique pour la direction.  

---

## Cas pratique – Banque internationale

Une banque multinationale doit répondre :  
- à l’**ISO 27005/27001** pour certification et harmonisation avec ses filiales européennes.  
- au **NIST RMF** pour ses activités aux États‑Unis et son reporting à la SEC.  
- à **EBIOS RM** pour ses activités en France et son dialogue avec l’ANSSI.  

Le RSSI construit une **cartographie unique** des risques, traduite ensuite dans les trois cadres :  
- Scénarios adverses (EBIOS RM).  
- Alignement ISO 27001 (mesures Annexe A).  
- Documentation NIST RMF (contrôles SP 800‑53).  

---

## Recommandations d’usage

- **Privilégier ISO 27005** : quand l’objectif est une **certification ISO 27001** et un cadre international harmonisé.  
- **Privilégier NIST RMF** : quand l’organisation est **exposée au marché US** ou dans un secteur fortement réglementé par le NIST.  
- **Privilégier EBIOS RM** : quand la priorité est de **sensibiliser la direction** et d’analyser des scénarios adverses réalistes (secteur public, régulé, OIV).  
- **Approche combinée** : pour les grandes organisations multi‑nationales, combiner les trois en construisant une **cartographie unique** et en assurant les mappings.  

---

## Preuves d’audit attendues

- Matrice de correspondance interne ISO 27005 / NIST RMF / EBIOS RM.  
- Preuve de l’utilisation des trois cadres (rapports internes, audits sectoriels).  
- Documentation d’équivalence (mesures ISO ↔ contrôles NIST ↔ scénarios EBIOS).  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant est capable de :  
- Expliquer les similitudes et différences entre ISO 27005, NIST RMF et EBIOS RM.  
- Construire une cartographie multi‑référentiels adaptée à une organisation internationale.  
- Recommander le cadre pertinent selon les contextes (certification, conformité US, pilotage COMEX).  

---

## Checklist RSSI – Comparatif

- [ ] Vérifier si l’organisation est soumise à plusieurs référentiels (ISO, NIST, ANSSI).  
- [ ] Construire une matrice de correspondance risques ↔ mesures ↔ contrôles.  
- [ ] Choisir le cadre de référence principal (ISO, NIST, EBIOS) selon le secteur et les obligations.  
- [ ] Documenter les mappings et les présenter en audit.  
