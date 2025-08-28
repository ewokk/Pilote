# Clause 6 – Planification

## 6.1 Actions face aux risques et opportunités

La planification d’un SMSI repose sur une analyse rigoureuse des risques, mais aussi sur l’anticipation des opportunités. La direction doit démontrer que la sécurité n’est pas seulement un centre de coûts mais aussi un levier de confiance et de compétitivité.  

L’ISO/IEC 27001 recommande de s’appuyer sur des méthodes reconnues : **ISO/IEC 27005** pour le cadre méthodologique international et **EBIOS RM** pour les organisations françaises, notamment dans les secteurs régulés.  

Un plan de traitement des risques doit détailler les menaces, vulnérabilités, scénarios d’incident et mesures retenues (acceptation, transfert, réduction, évitement).  

> [!warning]  
> Erreur fréquente : se limiter à une analyse de risques initiale lors de la certification. L’absence de mise à jour régulière après un incident majeur ou un changement d’organisation est une non-conformité courante.

---

## 6.2 Objectifs de sécurité de l’information et planification pour les atteindre

Les objectifs doivent être spécifiques, mesurables, atteignables, réalistes et temporellement définis (SMART). Ils sont traduits en indicateurs suivis par le RSSI et la direction.  

Exemple de tableau opérationnel :  

| Objectif             | Indicateur                           | Cible       | Responsable   |
|----------------------|--------------------------------------|-------------|---------------|
| Disponibilité SI     | Taux d’uptime des serveurs           | ≥ 99,9 %    | RSI           |
| Conformité           | % d’actions closes audit interne     | ≥ 90 %      | CISO          |
| Sensibilisation      | Taux de collaborateurs formés SSI    | 100 %       | RH / RSSI     |
| Gestion des incidents| Délai moyen de détection             | ≤ 1 heure   | SOC Manager   |

Ces objectifs doivent être suivis régulièrement et faire l’objet de rapports lors des revues de direction. Les auditeurs attendent une traçabilité claire entre l’analyse de risques, les objectifs définis et les résultats obtenus.  

> [!warning]  
> Erreur fréquente : fixer des objectifs trop vagues (« renforcer la sécurité ») ou inatteignables (« 0 incident de sécurité »). Les auditeurs exigent des indicateurs réalistes et vérifiables.

---

## 6.3 Planification des changements

La planification doit aussi inclure l’anticipation des changements affectant le SMSI. Les évolutions d’infrastructure, de fournisseurs, de réglementation ou de périmètre doivent être évaluées en amont et documentées.  

Exemple concret : lors de la migration vers un fournisseur Cloud, l’organisation doit anticiper les risques liés à la localisation des données, aux clauses contractuelles et aux dépendances critiques. Sans cette planification, le SMSI risque d’être dépassé par la réalité opérationnelle.  

Historiquement, de nombreux échecs de transformation numérique (comme la migration précipitée vers le Cloud pendant la pandémie de 2020) ont révélé des failles majeures, faute d’une planification adaptée des changements organisationnels.  

> [!warning]  
> Erreur fréquente : négliger la documentation des changements et se limiter à des échanges oraux. En audit, l’absence de preuves écrites d’évaluation et d’approbation des changements est une non-conformité fréquente.

---

## Cas concret historique

**Exemple : Equifax (2017).**  
La fuite massive de données (147 millions de personnes) est en grande partie due à une mauvaise gestion documentaire et organisationnelle. Le patch correctif était disponible mais la planification des changements était défaillante : aucune procédure claire n’identifiait les responsables de l’application des correctifs ni ne documentait le suivi. Cet échec de planification a eu des conséquences financières et réputationnelles majeures.  

---

## Preuves d’audit typiques

- Analyse de risques documentée et mise à jour régulière.  
- Plan de traitement des risques validé par la direction.  
- Objectifs de sécurité mesurables et suivis (rapports, KPI).  
- Documentation des changements majeurs et preuves de leur approbation.  
- Registre de décisions du COMEX ou de l’ISO Steering Committee concernant les évolutions du SMSI.  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant doit être capable de :  
- Expliquer le rôle de la planification dans le SMSI.  
- Réaliser une analyse de risques avec une méthode reconnue (ISO 27005, EBIOS RM).  
- Définir des objectifs de sécurité mesurables et réalistes.  
- Anticiper et documenter les changements impactant le SMSI.  
- Tirer des enseignements de cas historiques où la planification a échoué.  

---

## Checklist RSSI

- [ ] Tenir à jour un registre des risques et plan de traitement associé.  
- [ ] Définir des objectifs SMART et suivre les indicateurs.  
- [ ] Documenter systématiquement les changements impactant le SMSI.  
- [ ] Valider les évolutions en comité de direction ou Steering Committee.  
- [ ] Préparer les preuves documentées pour l’audit (analyses, KPI, décisions).  
