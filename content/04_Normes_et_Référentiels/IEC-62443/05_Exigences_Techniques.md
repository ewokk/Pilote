# 05_Exigences_Techniques

La norme **IEC 62443‑3‑3** décline les **Foundational Requirements (FR)** en exigences techniques (System Requirements – SR) pour chaque niveau de sécurité (SL‑1 à SL‑4). L’objectif est de démontrer comment un système OT se renforce progressivement face à des menaces de plus en plus sophistiquées.  

Plutôt qu’une simple liste générique, il est nécessaire de présenter de manière structurée l’évolution des contrôles en fonction des niveaux de sécurité, ainsi que les preuves attendues lors d’un audit.  

---

## Tableau des exigences par FR et progression SL

| **FR** | **Exigence système (SR)**        | **SL‑1**                               | **SL‑2**                                    | **SL‑3**                                  | **SL‑4**                                              | **Preuves attendues** |
|--------|----------------------------------|----------------------------------------|---------------------------------------------|-------------------------------------------|-------------------------------------------------------|-----------------------|
| **IAC** | Authentification opérateurs      | MDP simple                             | MDP + verrouillage après X tentatives       | MFA + RBAC                                | MFA + HSM/PKI (certificats matériels)                 | Captures d’écran HMI, configs, journaux d’authentification |
| **UC**  | Moindre privilège                | Profils basiques                       | Segregation par rôle                        | RBAC détaillé                              | Séparation stricte des tâches (SoD) + revues périodiques | PV de comités, registres d’accès, preuves RBAC appliqué |
| **SI**  | Durcissement / whitelisting      | Liste des services actifs               | Réduction services + règles ASR             | Whitelisting applicatif                    | SBOM + Secure Boot + monitoring d’intégrité            | Scripts de durcissement, logs d’intégrité, inventaires |
| **DC**  | Chiffrement                      | TLS IT ↔ DMZ                            | TLS end‑to‑end                              | TLS + VPN IPsec                            | Certificats CPS FIPS 140‑2+                           | Configs TLS/PKI, certificats signés, rapports d’audit crypto |
| **RDF** | Segmentation                     | ACL L3 simples                          | Firewalls L3/L4                             | DPI / Proxy industriels                    | Passerelles unidirectionnelles (data diodes)           | Dumps règles FW, configs ACL, schémas réseaux validés |
| **TRE** | Journalisation & alarmes         | Syslog basique                          | Corrélation manuelle                        | SIEM OT                                    | SOAR OT (réponse automatisée, playbooks)               | Dashboards, alertes corrélées, rapports SOC OT |
| **RA**  | Sauvegardes / Haute dispo        | Backups hebdo                          | Backups quotidiens                          | Stratégie 3‑2‑1 + tests réguliers          | Site redondant + PRA OT validé                         | Rapports tests de restauration, PV PRA/PCA |

---

## Retours d’expérience et cas concrets

- **Pharmaceutique** : un site a perdu plusieurs jours de production faute de sauvegardes valides. L’audit a révélé un SL‑1 (sauvegardes hebdo sans test). Après adoption d’une stratégie 3‑2‑1 (SL‑3), la conformité et la résilience ont été prouvées.  
- **Énergie** : une intrusion a été détectée tardivement car seuls des journaux Syslog basiques (SL‑1) étaient activés. L’ajout d’un SIEM OT (SL‑3) a permis de corréler et de détecter l’incident en quelques minutes.  
- **Transport ferroviaire** : un opérateur utilisait encore des mots de passe partagés (SL‑1). Après mise en œuvre du MFA et RBAC (SL‑3), les comptes étaient individualisés et audités, réduisant fortement le risque interne.  

---

## Preuves d’audit attendues

- Captures d’écran de configuration (authentification, RBAC, MFA).  
- Scripts et journaux de durcissement applicatif.  
- Règles de pare‑feu, configurations ACL, dumps DPI.  
- Certificats TLS/PKI signés, conformité FIPS.  
- Rapports FAT/SAT validant la mise en œuvre des exigences SR.  
- Dashboards SIEM/OT, rapports SOC, PV de tests PRA/PCA.  

---

## Impacts organisationnels et gouvernance

- Le **COMEX** doit approuver les niveaux SL requis pour les zones critiques et financer les mesures associées (HA, PRA, SOC OT).  
- Le **RSSI OT** coordonne la mise en œuvre des SR avec les métiers et veille à l’intégration avec l’IT (interopérabilité TLS, SOC, PKI).  
- Les **intégrateurs** doivent livrer des configurations alignées avec les SL définis et fournir des preuves (scripts, rapports).  
- Les **fournisseurs** doivent déclarer le niveau SL‑C de leurs composants et prouver leur conformité.  
- Les **auditeurs** doivent tester et vérifier la montée en maturité SL‑1 → SL‑4.  

---

## Comparaisons utiles

- **ISO 27001 Annexe A** : couvre plusieurs exigences similaires (contrôle d’accès, chiffrement, journalisation), mais sans gradation explicite SL‑1 à SL‑4.  
- **NIST 800‑82** : fournit des recommandations techniques proches (pare‑feux, SIEM, PRA) mais sans structure FR/SR.  
- **IEC 62443** se distingue par son approche progressive et auditable des niveaux de sécurité.  

---

## Conséquences opérationnelles pour le RSSI

Le RSSI doit :  
- Définir les SL cibles par zone en fonction des menaces.  
- Vérifier que les intégrateurs mettent en œuvre les SR pour chaque FR.  
- Préparer et conserver les preuves techniques (configs, journaux, rapports).  
- Auditer la progression SL‑1 → SL‑4 et planifier les remédiations.  
- Présenter l’état de conformité au COMEX et démontrer la robustesse OT.  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant devra être capable de :  
- Expliquer la structure FR/SR de la 62443‑3‑3.  
- Décrire l’évolution des exigences techniques de SL‑1 à SL‑4.  
- Identifier les preuves d’audit correspondantes.  
- Relier ces exigences à des cas concrets sectoriels.  
- Préparer et piloter une démarche de conformité auditable.  

---

## Checklist RSSI

- [ ] Vérifier que chaque FR est décliné en SR avec un niveau SL défini.  
- [ ] Collecter les preuves (configs, journaux, PV) pour chaque exigence.  
- [ ] Auditer régulièrement la montée en maturité SL‑1 → SL‑4.  
- [ ] Vérifier la cohérence avec ISO 27001/NIST 800‑82 pour alignement global.  
- [ ] Présenter au COMEX un tableau de progression FR/SR → SL atteint.  
