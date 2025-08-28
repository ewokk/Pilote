# ISO/IEC 27017 – Cas pratiques d’application

---

## Introduction

L’ISO/IEC 27017 devient réellement opérationnelle lorsqu’elle est appliquée à des cas concrets. Ce chapitre illustre la mise en œuvre de la norme dans différents contextes organisationnels, afin de montrer comment transformer des recommandations en **preuves tangibles de conformité**.  

---

## Cas pratique 1 : PME SaaS

**Périmètre** : Une PME française édite une application SaaS hébergée sur AWS.  

**Exigences principales** :  
- **MFA** obligatoire sur toutes les consoles administratives.  
- **Logs centralisés** : activation CloudTrail + envoi vers un SIEM interne.  
- **Exit plan** documenté pour migration potentielle vers Azure.  
- **Gestion des clés** : utilisation d’AWS KMS avec rotation annuelle.  

**Preuves attendues** : captures de configuration MFA, exports CloudTrail conservés ≥ 12 mois, test annuel d’export de données, politiques de gestion de clés.  

---

## Cas pratique 2 : Hôpital et données de santé

**Périmètre** : Un hôpital héberge les dossiers patients sur Microsoft Azure.  

**Exigences principales** :  
- **Protection des données personnelles** : application combinée ISO/IEC 27017 + [[ISO/IEC 27018 (Protection des données à caractère personnel dans le Cloud)]].  
- **Journalisation** des accès aux dossiers via Azure Monitor, avec conservation ≥ 24 mois (RGPD).  
- **Chiffrement BYOK** : les clés sont gérées par l’hôpital dans un HSM interne.  
- **Contrôles d’accès** : authentification forte (MFA, carte CPS pour les médecins).  

**Preuves attendues** : rapports d’accès journaliers, documentation BYOK/HSM, preuves de rotation de clés, rapports d’audit RGPD.  

---

## Cas pratique 3 : Groupe industriel et souveraineté Cloud

**Périmètre** : Un groupe industriel international utilise un Cloud hybride (OVHcloud + AWS).  

**Exigences principales** :  
- **Segmentation inter-tenant** : VPC dédiés par filiale et segmentation réseau stricte.  
- **Conformité SecNumCloud** : OVHcloud doit fournir les attestations de conformité ANSSI.  
- **Disponibilité** : SLA garantissant 99,99 % sur les applications critiques.  
- **Surveillance** : intégration des logs AWS et OVH dans un SIEM unique.  

**Preuves attendues** : certificats SecNumCloud, SLA contractuels, résultats de tests PRA, exports de logs multi-Cloud.  

---

## Conseils opérationnels pour RSSI

- Toujours partir du **modèle de responsabilité partagée** et vérifier que chaque exigence Cloud est couverte par une preuve.  
- Anticiper les exigences **RGPD, NIS2 et SecNumCloud** selon le secteur (santé, industrie, SaaS).  
- Intégrer les cas pratiques dans les **audits internes** pour tester la conformité réelle.  

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Appliquer ISO/IEC 27017 dans des contextes sectoriels concrets.  
- Identifier les preuves attendues en fonction du secteur (SaaS, santé, industrie).  
- Préparer un plan de conformité Cloud réaliste et documenté.  

---

## Checklist RSSI

- [ ] Vérifier que les logs Cloud sont activés et centralisés dans un SIEM.  
- [ ] Contrôler l’existence d’un exit plan documenté et testé.  
- [ ] Confirmer la mise en œuvre du BYOK pour les données sensibles.  
- [ ] Exiger des preuves de conformité réglementaire (RGPD, SecNumCloud).  
- [ ] Tester régulièrement PRA et segmentation réseau inter-tenant.  

---
