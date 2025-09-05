# PASSI RGS : Audit de Sécurité Qualifié par l'ANSSI

## 1. Définition et articulation PASSI – RGS

Le **PASSI** ([[Prestataire d'audit de la sécurité des systèmes d'information (PASSI – Information Systems Security Audit Service Provider)]]) est un label officiel de qualification délivré par l’[[Agence nationale de la sécurité des systèmes d'information (ANSSI – National Cybersecurity Agency of France)]]. Il garantit que les audits de cybersécurité sont réalisés par des experts indépendants, compétents et soumis à des obligations strictes de neutralité, de confidentialité et de rigueur méthodologique. Cette qualification s’inscrit dans le cadre du **RGS** ([[Référentiel général de sécurité (RGS – General Security Framework)]]) qui impose aux administrations et organismes publics des règles de sécurité pour protéger leurs données et assurer la confiance numérique.

En pratique, un audit PASSI n’est pas un simple audit technique : c’est un **acte réglementé**, reconnu par l’État, intégré aux politiques publiques de cybersécurité (LPM, Code de la défense, directive [[Directive NIS2 (NIS2 – Network and Information Security Directive)]]). Il fournit des livrables valorisables lors des homologations officielles de sécurité, notamment pour les [[Opérateur d’importance vitale (OIV – Operator of Vital Importance)]] et [[Opérateur de services essentiels (OSE – Operator of Essential Services)]].

---

## 2. Objectifs et enjeux stratégiques

Le dispositif PASSI RGS vise à instaurer une **chaîne de confiance institutionnelle** entre l’État, les opérateurs critiques et les prestataires d’audit. Les enjeux principaux sont décrits ci-dessous dans un niveau opérationnel :

Un premier enjeu est de **fiabiliser les audits**, en garantissant qu’ils sont menés selon une méthodologie alignée sur la norme [[Audit de management (ISO 19011 – Guidelines for Auditing Management Systems)]]. Un second enjeu est d’assurer la **résilience nationale**, puisque la LPM et NIS2 imposent que les secteurs stratégiques (énergie, transports, santé, défense) se fassent auditer par un PASSI qualifié. Enfin, ces audits contribuent à **accroître la confiance numérique** en fournissant des rapports reconnus par les autorités, pouvant servir lors des homologations de sécurité, ou comme preuves devant des organismes de régulation.

> [!example]  
> Exemple réel : en 2020, un audit PASSI réalisé dans un hôpital a révélé des serveurs exposés à Internet avec des configurations par défaut. L’audit a permis de corriger ces failles avant qu’un ransomware n’affecte le système de soins, illustrant l’impact direct sur la continuité de service et la sécurité des patients.

---

## 3. Domaines d’audit couverts

Un prestataire PASSI peut être qualifié sur une ou plusieurs des **5 portées officielles** définies par l’ANSSI. Chacune correspond à un angle d’analyse de la sécurité :

- **Organisationnel et physique** : gouvernance SSI, politiques internes, sécurité des locaux sensibles.  
- **Configuration** : conformité des équipements, systèmes et logiciels aux guides ANSSI et bonnes pratiques.  
- **Architecture** : segmentation réseau, interconnexions externes, conformité des flux aux principes de cloisonnement.  
- **Code source** : détection des vulnérabilités logicielles et conformité aux pratiques de développement sécurisé.  
- **Intrusion (Pentest)** : simulation d’attaques contrôlées, internes et externes, en boîte noire, grise ou blanche.  

> [!info]  
> Ces portées sont complémentaires : l’audit organisationnel garantit que les politiques sont en place, tandis que l’audit d’intrusion vérifie leur efficacité dans un scénario réel.

---

## 4. Processus de qualification

La qualification PASSI repose sur un processus strict en plusieurs étapes :  

1. **Candidature** : le prestataire choisit ses portées et monte un dossier complet démontrant sa conformité.  
2. **Évaluation** : un organisme accrédité audite le prestataire (revue documentaire + audit sur site).  
3. **Examen des auditeurs** : les auditeurs passent des épreuves écrites et orales, valables trois ans.  
4. **Décision et surveillance** : l’ANSSI délivre la qualification pour trois ans, avec un audit de suivi à mi-parcours.  

Cette rigueur assure une homogénéité et une fiabilité des prestations, quels que soient les prestataires.

---

## 5. Obligations et responsabilités d’un PASSI qualifié

Un prestataire qualifié a des obligations strictes :  

- **Indépendance et impartialité** : interdiction de conflit d’intérêt avec les clients audités.  
- **Confidentialité** : les informations traitées sont protégées au minimum au niveau *Diffusion Restreinte*.  
- **Compétence continue** : les auditeurs doivent maintenir leur expertise et suivre une veille active.  
- **Méthode rigoureuse** : respect des normes et référentiels ANSSI.  
- **Éthique** : signalement des failles critiques découvertes auprès de l’ANSSI.  

---

## 6. Comparaisons et synergies

Le PASSI s’articule avec d’autres cadres :  

- Avec [[Système de management de la sécurité de l'information (ISO 27001 – Information Security Management System)]] : le PASSI évalue la sécurité réelle, là où ISO 27001 certifie un système de management.  
- Avec [[Mesures de sécurité de l'information (ISO 27002 – Information Security Controls)]] : les mesures proposées sont vérifiées par les audits PASSI.  
- Avec NIS2 : l’obligation de prestataires qualifiés pour les opérateurs essentiels et importants aligne le cadre européen avec le modèle français.  
- Avec la LPM : le recours au PASSI est une obligation légale pour les OIV.  

---

## 7. Intérêt pour les organisations

Recourir à un PASSI qualifié offre plusieurs garanties : conformité légale, expertise reconnue, preuves valorisables pour homologations, et surtout réduction proactive des risques. Pour un RSSI, c’est une manière de démontrer devant le COMEX et les autorités que les dispositifs critiques sont sécurisés par le plus haut niveau d’audit reconnu.

> [!tip]  
> Pour un RSSI, travailler avec un PASSI qualifié constitue une assurance réglementaire : c’est la garantie que l’audit sera reconnu par l’État et qu’il pourra être valorisé lors d’inspections, homologations ou audits externes.

---

## 8. Cas pratiques et retours d’expérience

- **OIV Énergie** : audit PASSI intrusion détectant un accès persistant via un VPN non supervisé, corrigé par segmentation et durcissement.  
- **OSE Santé** : audit organisationnel révélant l’absence de politique de gestion des sauvegardes, corrigée via mise en place d’un PCA/PRA.  
- **Administration centrale** : audit de configuration mettant en évidence des comptes administrateurs partagés, corrigés via une politique IAM.  

---

## 9. Conseils opérationnels pour RSSI

Un RSSI doit anticiper et préparer un audit PASSI :  
- Documenter la gouvernance, les processus, les schémas réseau et les configurations.  
- Préparer les équipes techniques aux entretiens avec les auditeurs.  
- Mettre en place un plan d’action post-audit pour corriger rapidement les failles détectées.  
- Intégrer les résultats de l’audit dans le SMSI et la PSSI.  

---

## 10. Objectifs pédagogiques

À l’issue de ce chapitre, le lecteur doit être capable de :  
- Comprendre le rôle du PASSI et du RGS.  
- Identifier les obligations légales pour OIV, OSE et administrations.  
- Connaître les cinq portées et leurs objectifs.  
- Distinguer PASSI des normes ISO 27001/27002 et des obligations NIS2/LPM.  
- Savoir exploiter un rapport PASSI dans une homologation de sécurité.  

---

## 11. Checklist RSSI

- [ ] Vérifier si mon organisation est OIV, OSE ou administration soumise au RGS.  
- [ ] Identifier les audits obligatoires (intrusion, architecture, configuration, etc.).  
- [ ] S’assurer que le prestataire choisi est **PASSI qualifié** et référencé par l’ANSSI.  
- [ ] Préparer la documentation et les preuves (politiques, logs, configurations, schémas).  
- [ ] Intégrer les résultats PASSI dans le cycle d’amélioration continue (PSSI, SMSI, PCA/PRA).  
