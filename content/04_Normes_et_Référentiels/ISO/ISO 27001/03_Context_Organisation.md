# Clause 4 – Contexte de l’organisation

## 4.1 Compréhension de l’organisation et de son contexte

L’analyse du contexte organisationnel n’est pas une simple formalité : elle conditionne la pertinence de l’ensemble du SMSI. Une organisation doit se poser les bonnes questions : quels sont ses actifs informationnels critiques ? quelles menaces sont réalistes dans son secteur ? quelles sont ses dépendances stratégiques (Cloud, prestataires, partenaires) ?  

Par exemple, une entreprise industrielle dépendante d’un fournisseur unique de solutions de supervision SCADA devra intégrer ce risque dans son SMSI, alors qu’un hôpital sera confronté en priorité à la protection des données de santé et à la continuité des services médicaux.  

En pratique, les organisations qui échouent à analyser correctement leur contexte se retrouvent avec des SMSI « hors sol », inapplicables et inutiles en cas d’incident.  

> [!warning]  
> Erreur fréquente : limiter l’analyse du contexte aux aspects techniques et juridiques, en oubliant des dimensions stratégiques comme la dépendance au Cloud, les acquisitions futures, ou les enjeux géopolitiques.

---

## 4.2 Compréhension des besoins et attentes des parties intéressées

L’ISO/IEC 27001 impose d’identifier et de hiérarchiser les attentes des parties prenantes. Il ne s’agit pas seulement de dresser une liste, mais de comprendre comment ces attentes influencent concrètement la sécurité.  

Ainsi, la **direction générale** attend que le SMSI protège l’image de marque et évite les sanctions financières, tandis que le **DPO** se concentre sur la conformité au RGPD. Les **utilisateurs métiers**, eux, recherchent un équilibre entre sécurité et praticité, et peuvent rejeter un SMSI trop contraignant.  

Un bon RSSI sait transformer ces attentes divergentes en un ensemble cohérent d’objectifs. Par exemple, un comité projet cybersécurité dans une banque doit concilier l’exigence de conformité Bâle III, la réduction du risque opérationnel et la fluidité des processus clients.  

Ignorer ces attentes conduit à un SMSI non adopté : c’est une source fréquente de non-conformité lors des audits.  

> [!warning]  
> Erreur fréquente : ne pas formaliser les attentes des parties prenantes, ou les réduire à une phrase générique (« conformité RGPD »). Les auditeurs attendent un registre détaillé et mis à jour.

---

## 4.3 Détermination du domaine d’application du SMSI

Le périmètre du SMSI est une décision stratégique qui doit être justifiée et validée par la direction. Trop restreint, il rend la certification artificielle. Trop large, il conduit à des projets ingérables.  

Par exemple, une entreprise de services numériques pourrait choisir de limiter son périmètre certifié à son datacenter principal, mais exclure certaines filiales étrangères. Une telle décision doit être explicitement documentée et justifiée auprès des auditeurs.  

Historiquement, plusieurs certifications ISO 27001 ont été critiquées dans la presse car le périmètre défini excluait justement les systèmes qui avaient subi des incidents. Les auditeurs exigent désormais une transparence totale sur les exclusions et leur justification.  

> [!warning]  
> Erreur fréquente : définir un périmètre « opportuniste » uniquement pour obtenir la certification, en excluant les zones les plus risquées. Cela entraîne des non-conformités majeures lors des audits de surveillance.

---

## 4.4 SMSI et mise en œuvre

Une fois le contexte et le périmètre définis, le SMSI doit être démontré comme étant en place et actif. Cela signifie qu’il doit être incarné dans les opérations quotidiennes : politiques appliquées, procédures suivies, incidents traités et revus.  

Par exemple, lors de l’attaque **WannaCry (2017)**, plusieurs hôpitaux britanniques ont été fortement perturbés car leur SMSI restait théorique : documentation existante mais non appliquée, correctifs non déployés, sensibilisation inexistante. Cette absence de mise en œuvre effective a transformé une faille logicielle en crise nationale.  

Ainsi, les auditeurs recherchent non seulement des documents, mais aussi des preuves que le SMSI est réellement **vivant** : comptes-rendus de comités, plans de sensibilisation exécutés, exercices de crise réalisés, etc.  

> [!warning]  
> Erreur fréquente : considérer que la rédaction d’une documentation suffit. Un SMSI « sur papier » sans preuves de mise en œuvre (logs, exercices, formations) est systématiquement sanctionné en audit.

---

## Cas concret historique

**Exemple : hôpital de Düsseldorf (2020).**  
Lorsqu’un rançongiciel a frappé cet hôpital allemand, le manque d’anticipation sur la dépendance aux prestataires IT a conduit à une paralysie prolongée des services médicaux. L’incident a démontré que l’analyse de contexte était insuffisante et que certaines parties prenantes clés n’avaient pas été intégrées dans le SMSI.  

Cet événement tragique illustre l’impact direct d’une clause 4 mal mise en œuvre : ce qui peut sembler purement documentaire est en réalité vital pour la continuité de service et la vie humaine.

---

## Preuves d’audit typiques

- Registre documenté des facteurs internes et externes.  
- Cartographie des parties prenantes et de leurs attentes.  
- Définition claire et validée du périmètre du SMSI, avec justification des exclusions.  
- Rapports démontrant la mise en œuvre effective du SMSI (comités, sensibilisation, exercices).  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant doit être capable de :  
- Expliquer pourquoi l’analyse du contexte est déterminante.  
- Identifier les attentes divergentes des parties prenantes et les intégrer.  
- Définir un périmètre de SMSI pertinent et justifié.  
- Comprendre, grâce à des cas historiques, l’impact opérationnel d’une clause 4 mal appliquée.  

---

## Checklist RSSI

- [ ] Documenter les facteurs internes et externes (veille, cartographie).  
- [ ] Maintenir un registre des parties prenantes et leurs attentes.  
- [ ] Définir un périmètre réaliste et justifié, validé par la direction.  
- [ ] Produire des preuves de mise en œuvre active du SMSI.  
- [ ] Préparer un argumentaire pour l’audit, intégrant cas pratiques et justifications.  
