# 02_Liens_avec_ISO_27001

## Introduction

L’ISO/IEC 27005 ne vit pas isolée : elle constitue l’ossature méthodologique qui permet de satisfaire aux exigences explicites de l’ISO/IEC 27001 en matière de gestion des risques. Là où l’ISO 27001 prescrit « ce qu’il faut faire » (identifier, évaluer, traiter les risques), la 27005 décrit « comment le faire » (processus, vocabulaire, livrables). Pour un auditeur ou un RSSI, il est donc indispensable de comprendre le lien direct entre les clauses auditées de la 27001 et les activités de la 27005.

---

## Mapping ISO 27001 ↔ ISO 27005

Le tableau ci-dessous illustre la correspondance entre les clauses ISO 27001 et les activités couvertes par la 27005, avec les livrables attendus en sortie :

| ISO 27001 | Activité ISO 27005             | Sortie attendue |
|-----------|--------------------------------|-----------------|
| 6.1.2     | Appréciation du risque         | Registre des risques (brut/résiduel), critères d’impact et de vraisemblance |
| 6.1.3     | Traitement du risque           | Plan de traitement des risques, Déclaration d’applicabilité (SoA) |
| 8.2       | Mise en œuvre des actions      | Suivi des actions de traitement, preuves de mise en place |
| 9.x       | Revue et indicateurs           | KPI risques, rapports de surveillance, revues de direction |
| 10.1      | Amélioration continue          | Historique des décisions de risque, leçons apprises, ajustements |

---

## Rôle de la Déclaration d’applicabilité (SoA)

La SoA (Statement of Applicability) est un pivot entre l’analyse de risques (27005) et le choix des mesures (27002). Elle justifie pourquoi une mesure de sécurité est retenue, adaptée ou écartée. Sans SoA claire, le lien entre le registre de risques et les contrôles effectivement en place devient fragile, ce qui expose à une non-conformité lors d’un audit ISO 27001.

---

## Cas concrets

- **Exemple PME** : une entreprise identifie dans son registre de risques le scénario de perte de disponibilité de son ERP (impact critique). La clause 6.1.2 impose de documenter ce risque, et la 27005 fournit la grille d’évaluation. En clause 6.1.3, l’entreprise met en place un PRA et justifie dans la SoA le choix de mesures complémentaires (sauvegardes hors ligne).  
- **Exemple secteur santé** : un hôpital doit démontrer que ses décisions de risque (tolérance à une interruption de service de 2h maximum) sont alignées avec la clause 9.3 sur la revue de direction. Les KPI de disponibilité du SI sont directement issus des livrables 27005 (registre des risques, plans de traitement).  

---

## Objectifs pédagogiques

- Comprendre le lien direct entre clauses ISO 27001 et processus ISO 27005.  
- Être capable d’associer chaque exigence ISO 27001 à un livrable de la gestion des risques.  
- Savoir utiliser la SoA comme justificatif central des mesures de sécurité.  
- Illustrer ces liens par des cas concrets sectoriels.  

---

## Checklist RSSI

- [ ] Les clauses 6.1.2 et 6.1.3 sont-elles reliées à un registre de risques et à un plan de traitement documentés ?  
- [ ] Une SoA claire existe-t-elle, expliquant les mesures retenues ou écartées ?  
- [ ] Les clauses 9.x (revues et KPI) sont-elles alimentées par des indicateurs issus de la gestion des risques ?  
- [ ] Les revues de direction incluent-elles bien les décisions sur l’appétence et la tolérance au risque ?  
- [ ] Les preuves d’audit (registre, SoA, plans de traitement, rapports) sont-elles disponibles et à jour ?  
