# ISO/IEC 27017 – Contexte Cloud & SSI

## Le Cloud comme nouvel écosystème de la SSI

Le Cloud computing a transformé en profondeur la manière dont les systèmes d’information sont conçus, exploités et sécurisés. Les organisations s’appuient désormais massivement sur des services **SaaS (Software as a Service)**, **PaaS (Platform as a Service)** et **IaaS (Infrastructure as a Service)**, apportant des gains considérables en flexibilité et en rapidité de déploiement. Cependant, cette dépendance croissante s’accompagne de nouveaux risques spécifiques, qui diffèrent fortement des environnements traditionnels on-premise.
L’ISO/IEC 27017 a été développée précisément pour répondre à ces enjeux, en adaptant les contrôles de sécurité à la réalité des environnements Cloud, où la responsabilité est **partagée** entre client et fournisseur.

---

## Risques typiques liés au Cloud

### Perte de gouvernance  
Lorsqu’une entreprise externalise ses applications et données vers le Cloud, elle perd une partie de sa maîtrise technique et organisationnelle. Le RSSI doit s’assurer que des **contrats clairs** définissent qui est responsable de la sécurité des données, de la journalisation, du chiffrement ou encore des sauvegardes.

### API non sécurisées  
Les services Cloud reposent sur des **interfaces programmatiques (API)** exposées à Internet. Si ces API sont mal protégées (authentification faible, absence de limitation de requêtes, manque de chiffrement), elles deviennent des vecteurs d’attaques privilégiés. Des incidents comme la fuite de données de T-Mobile (2021) sont directement liés à l’exploitation d’API vulnérables.

### Multi-tenant et isolation  
Les environnements Cloud sont généralement **multi-tenant** : plusieurs clients partagent la même infrastructure. Un défaut d’isolation peut permettre à un attaquant d’accéder aux données d’un autre client, comme dans l’affaire « VENOM » (2015) qui exploitait une faille de virtualisation.

### Shadow IT  
L’adoption rapide d’outils Cloud par les métiers sans validation de la DSI ou du RSSI conduit au phénomène de **Shadow IT**. Des services non maîtrisés (stockages en ligne, applications SaaS gratuites) exposent les données à des risques majeurs de fuite et de non-conformité réglementaire.

> [!warning]  
> **Erreurs fréquentes dans les projets Cloud :**  
> – Mauvaise gestion des clés de chiffrement (ex : clés stockées en clair dans un dépôt GitHub).  
> – Dépendance excessive à un fournisseur unique, entraînant un risque de verrouillage (vendor lock-in).  
> – Absence de plan de sortie (exit plan), rendant difficile la réversibilité vers un autre fournisseur.  

---

## Impacts pour la SSI

Ces risques redéfinissent le rôle de la SSI :  
- Le **RSSI** doit passer d’un rôle purement opérationnel à un rôle de **gouvernance et de contractualisation**, en s’assurant que les clauses de sécurité sont intégrées dans les contrats Cloud.  
- Les **équipes techniques** doivent développer des compétences spécifiques (sécurisation d’API, gestion des environnements multi-tenant, surveillance des logs Cloud).  
- Le **COMEX** et la direction doivent être conscients des risques stratégiques liés à la dépendance Cloud, notamment dans le cadre de la **souveraineté numérique** (choix de fournisseurs européens vs hyperscalers américains).  

---

## Cas pratiques & retours d’expérience

- **Sony PlayStation Network (2011)** : compromission d’environ 77 millions de comptes, liée à une mauvaise gouvernance des environnements externalisés.  
- **AWS S3 misconfigurations (2017–2019)** : des milliers de bases de données exposées publiquement par défaut, conséquence d’un manque de sensibilisation aux responsabilités de configuration.  
- **Incident Code Spaces (2014)** : perte totale de l’entreprise à la suite d’une attaque ciblant ses environnements Cloud, faute de sauvegardes hors-ligne et d’un plan de continuité.  

---

## Conseils opérationnels pour RSSI

- Intégrer systématiquement une **analyse de risques Cloud** dans la stratégie SSI globale.  
- Vérifier la gestion des clés de chiffrement et envisager l’utilisation de **HSM (Hardware Security Module)** ou de services KMS managés.  
- Prévoir un **plan de sortie contractuel** pour éviter le verrouillage fournisseur.  
- Auditer régulièrement la sécurité des API Cloud.  
- Sensibiliser les métiers pour éviter le recours incontrôlé au Shadow IT.  

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Identifier les risques spécifiques aux environnements Cloud.  
- Comprendre les erreurs fréquentes et leurs conséquences opérationnelles.  
- Intégrer la gestion des risques Cloud dans un SMSI conforme à l’ISO/IEC 27017.  

---

## Checklist RSSI

- [ ] Identifier les risques Cloud majeurs (perte de gouvernance, API, multi-tenant, Shadow IT).  
- [ ] Vérifier la présence de clauses contractuelles couvrant ces risques.  
- [ ] Contrôler la gestion des clés et s’assurer qu’elles ne sont jamais exposées.  
- [ ] Évaluer le niveau de dépendance à un fournisseur unique et prévoir un plan de sortie.  
- [ ] Auditer la sécurité des API exposées par les services Cloud.  

---
