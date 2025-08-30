# 01_Introduction_ISO27018

L’ISO/IEC 27018 est une norme internationale qui constitue un **code de pratique pour la protection des informations personnelles identifiables (PII – Personally Identifiable Information)** traitées dans les environnements de **Cloud public**. Elle se distingue des autres normes de la famille 27000 par son objectif spécifique : offrir un cadre de gouvernance, de sécurité et de conformité dédié exclusivement aux données personnelles, lorsque celles-ci sont confiées à un prestataire Cloud.

---

## Périmètre et spécificité

Le périmètre de l’ISO/IEC 27018 se limite explicitement aux **données considérées comme PII**. Cela inclut toutes les informations permettant d’identifier directement ou indirectement une personne physique (nom, identifiant, adresse, données biométriques, données financières, adresse IP dynamique, etc.). En revanche, les données purement techniques ou anonymisées qui ne permettent plus l’identification d’un individu sortent du champ d’application.

Cette distinction est essentielle : une organisation peut traiter en Cloud à la fois des données PII (par exemple un fichier client contenant noms, emails et historiques d’achat) et des données non-PII (logs système techniques sans lien avec une personne). L’ISO/IEC 27018 ne s’appliquera que sur la première catégorie, afin d’éviter un élargissement artificiel de son périmètre.

---

## Positionnement dans la famille ISO 27000

| Norme | Objet |
|-------|-------|
| ISO/IEC 27000 | Concepts et vocabulaire |
| ISO/IEC 27001 | Exigences pour un système de management de la sécurité |
| ISO/IEC 27002 | Mesures de sécurité (code de bonnes pratiques) |
| ISO/IEC 27005 | Gestion des risques |
| ISO/IEC 27017 | Sécurité dans le Cloud (aspects généraux) |
| ==**ISO/IEC 27018**== | Protection des données personnelles (PII) dans le Cloud public |

---

## Rôle des acteurs : fournisseur vs client

La norme s’appuie sur la distinction juridique introduite par le [[Règlement général sur la protection des données (RGPD – General Data Protection Regulation)]] :

- Le **client** (organisation utilisatrice du service Cloud) agit en tant que **responsable de traitement (controller)**. C’est lui qui détermine les finalités et les moyens du traitement des PII.  
- Le **fournisseur Cloud** (Microsoft, AWS, Google, OVH, etc.) agit en tant que **sous-traitant (processor)**. Son rôle est de traiter les PII pour le compte du client, conformément aux instructions contractuelles et légales.  

L’ISO/IEC 27018 formalise les attentes à placer sur ce fournisseur en matière de transparence, de notification, de sécurité technique et de contractualisation. L’objectif est de réduire le déséquilibre entre client et fournisseur en imposant des contrôles vérifiables et audités.

---

## Compatibilité avec le RGPD

L’ISO/IEC 27018 est cohérente avec les principes du RGPD, bien que publiée avant lui (2014, révisée en 2019). Elle reprend notamment :

- Le principe de **limitation des finalités** (pas de réutilisation non autorisée des PII).  
- L’exigence de **transparence** (communication claire sur la localisation des données, les sous-traitants impliqués, les mesures techniques et organisationnelles).  
- L’obligation de **notification en cas d’incident de sécurité** impliquant des PII.  
- La reconnaissance de **clauses contractuelles types** et de DPA (Data Processing Agreements) comme instruments juridiques de conformité.  

En pratique, une organisation peut utiliser l’ISO/IEC 27018 comme **complément opérationnel** pour démontrer sa conformité au RGPD lors d’audits ou de certifications.

---

> [!tip]  
> Toujours différencier **données personnelles (PII)** et **données non-PII** dans vos registres et contrats. Cette séparation évite d’étendre artificiellement le champ d’application de l’ISO/IEC 27018 et clarifie vos obligations en cas d’audit.

---

## Cas concret

Lors de l’adoption d’Office 365 (SaaS), une entreprise européenne reste **responsable de traitement** vis-à-vis des PII de ses salariés et clients. Microsoft, en tant que **sous-traitant**, doit fournir un DPA conforme. L’ISO/IEC 27018 permet d’évaluer si les clauses contractuelles couvrent bien les points critiques : sécurité des données, sous-traitance ultérieure, transferts internationaux, délais de notification en cas d’incident.  
Un audit interne a montré que sans cette norme, certaines entreprises se contentaient d’évaluations partielles (contrôle des accès techniques uniquement), alors que l’ISO 27018 incite à un examen complet (juridique, organisationnel et technique).

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :

- Définir le périmètre de l’ISO/IEC 27018 et distinguer PII vs non-PII.  
- Expliquer la relation **controller/processor** dans le cadre Cloud.  
- Relier les exigences de la norme aux articles clés du RGPD.  
- Identifier les clauses contractuelles et preuves d’audit attendues dans un DPA Cloud.

---

## Checklist RSSI

- [ ] Distinguer les données PII des données non-PII dans vos systèmes.  
- [ ] Identifier le rôle de votre organisation (controller) et celui du fournisseur Cloud (processor).  
- [ ] Vérifier que les DPA intègrent les clauses ISO 27018 : finalités, sécurité, notification.  
- [ ] Cartographier les responsabilités légales entre ISO 27018 et RGPD.  
- [ ] Exiger des preuves d’audit ISO 27018 de la part des fournisseurs Cloud.  
