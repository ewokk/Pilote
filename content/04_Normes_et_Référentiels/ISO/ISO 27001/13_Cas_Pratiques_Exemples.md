# Cas pratiques et exemples

## Introduction

La norme ISO/IEC 27001 s’applique à des organisations de toute taille et de tout secteur.  
Pour illustrer la mise en œuvre d’un SMSI, voici trois scénarios sectoriels concrets qui montrent comment adapter les exigences à des contextes variés.  

---

## Scénario 1 – PME dans le secteur du commerce

- **Périmètre SMSI** : site e-commerce, CRM hébergé, données clients.  
- **Risques majeurs** : vol de données clients (RGPD), indisponibilité du site, fraude de paiement.  
- **Mesures clés** :  
  - Hébergement sécurisé avec pare-feu applicatif (WAF).  
  - MFA pour l’accès au CRM.  
  - Sauvegardes quotidiennes testées.  
  - Politique BYOD stricte.  
- **Preuves d’audit** : contrat d’hébergement, configurations WAF, registres de sauvegarde, charte BYOD signée.  
> [!warning]  
> Erreur fréquente : considérer que « petite taille = pas de risque » → forte exposition aux ransomwares.

---

## Scénario 2 – Cloud Provider (IaaS/PaaS)

- **Périmètre SMSI** : infrastructures virtualisées, datacenters, API clients.  
- **Risques majeurs** : indisponibilité des services, attaque DDoS, compromission API, non-conformité contractuelle.  
- **Mesures clés** :  
  - Redondance multi-sites et PRA testé.  
  - CSPM (Cloud Security Posture Management) pour vérifier la configuration.  
  - SOC 24/7 avec corrélation SIEM.  
  - Chiffrement des données au repos et en transit.  
- **Preuves d’audit** : certificats SOC2/ISO27001, rapports SOC, tests PRA, preuves de chiffrement.  
> [!warning]  
> Erreur fréquente : croire que « Cloud = sécurité automatique ». La responsabilité reste partagée avec le client.

---

## Scénario 3 – Hôpital public

- **Périmètre SMSI** : SIH (Système d’Information Hospitalier), dossiers patients, dispositifs médicaux connectés.  
- **Risques majeurs** : indisponibilité en salle d’opération, vol de données de santé, ransomware.  
- **Mesures clés** :  
  - Segmentation réseau (administratif, médical, IoT).  
  - Plan de sauvegarde et PRA avec tests trimestriels.  
  - Gestion stricte des comptes à privilèges.  
  - Sensibilisation spécifique du personnel médical (phishing, accès dossiers).  
- **Preuves d’audit** : registre d’accès aux dossiers patients, PV de test PRA, logs AD, registres de sensibilisation.  
> [!warning]  
> Erreur fréquente : ne pas inclure les dispositifs médicaux connectés dans le périmètre.

---

## Conclusion

Ces trois exemples démontrent que le SMSI doit être adapté à la réalité de l’organisation :  
- **PME** : contraintes budgétaires → focus sur mesures essentielles.  
- **Cloud Provider** : exigences fortes → démonstration de résilience et conformité.  
- **Hôpital** : priorité absolue à la disponibilité et à la protection des données sensibles.  

La diversité de ces cas pratiques illustre que la réussite d’un SMSI repose sur la **contextualisation sectorielle**, l’**implication des parties prenantes** et la **preuve tangible** lors des audits.  
