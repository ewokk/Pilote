# Fiche de préparation à l’entretien RSSI – Blocs de compétences clés

## Gouvernance opérationnelle de la sécurité

**Résumé essentiel**  
Un RSSI doit orchestrer la détection et la réponse aux incidents à travers un SOC (Security Operations Center), chargé de la surveillance continue, et un CSIRT (Computer Security Incident Response Team), chargé de l’analyse et de la gestion rapide des incidents. Le CSIRT coordonne les actions pour contenir l’attaque, minimiser les dommages, restaurer les services et prévenir la propagation.  
En cas d’incident majeur, le RSSI active une cellule de crise (équipe dédiée, communication interne/externe, porte-parole) pour gérer l’urgence. Il s’appuie sur des plans formalisés :  
- Plan de réponse à incident (procédures immédiates)  
- Plan de Continuité d’Activité (PCA)  
- Plan de Reprise d’Activité (PRA)  

Ces plans doivent être connus des parties prenantes, régulièrement mis à jour et testés (ex. exercices de crise).

**Questions d’entretien typiques :**
- Quelle est la différence entre un SOC et un CSIRT, et comment interagissent-ils lors d’un incident ?  
- Comment structureriez-vous la réponse à un incident de sécurité majeur (rôles, communication, escalade) ?  
- Quelles différences faites-vous entre PCA et PRA ? Comment testez-vous ces plans ?  

---

## Gestion des vulnérabilités

**Résumé essentiel**  
La gestion des vulnérabilités vise à identifier et corriger rapidement les failles de sécurité avant qu’elles ne soient exploitées. Elle repose sur :  
- Des scans réguliers (outils automatiques sur systèmes, applis, configurations)  
- Le patch management (vérifier, tester, déployer)  
- Une priorisation par scores CVSS, criticité métier, threat intel  
- Des programmes de bug bounty en complément  
- Des métriques de suivi (taux de correction dans les délais, vulnérabilités critiques en attente, etc.)  

**Questions d’entretien typiques :**
- Quels outils de scan de vulnérabilités connaissez-vous ?  
- Comment décider si une vulnérabilité critique doit être corrigée en urgence ?  
- Avez-vous déjà mis en place un bug bounty ?  

---

## Supervision et détection

**Résumé essentiel**  
Superviser le SI = surveiller en temps réel pour détecter les intrusions.  
- **SIEM** : centralise et corrèle les journaux (serveurs, applis, réseau, sécurité).  
- **UEBA** : analyse comportementale, détecte anomalies.  
- **NDR** : analyse le trafic réseau, repère exfiltration ou mouvements latéraux.  

Le RSSI doit définir les use cases pertinents et réduire les faux positifs.

**Questions d’entretien typiques :**
- Quelles sources de logs considérez-vous cruciales ?  
- Comment l’UEBA complète-t-il un SIEM ?  
- Que faire face à un volume massif de faux positifs ?  

---

## Gestion des accès et identités

**Résumé essentiel**  
L’IAM (Identity & Access Management) garantit que chaque utilisateur n’a que les droits nécessaires.  
- Principe du moindre privilège  
- PAM (Privileged Access Management) : comptes admins protégés  
- MFA pour accès critiques  
- Onboarding/offboarding rigoureux, suppression des comptes inactifs  
- Revues de droits régulières  
- Gouvernance et traçabilité des habilitations  

**Questions d’entretien typiques :**
- Comment mettre en œuvre le moindre privilège ?  
- Quelles mesures pour sécuriser les comptes à privilèges ?  
- Comment se déroule une revue des droits ?  

---

## Sauvegardes et restauration

**Résumé essentiel**  
Une entreprise doit pouvoir restaurer après un incident (ransomware, sinistre, erreur).  
- **Règle 3-2-1** : 3 copies, 2 supports, 1 hors site  
- Définir RPO (perte tolérée) et RTO (coupure tolérée)  
- Sauvegardes isolées (offline, crédentiels distincts)  
- PRA testé régulièrement (bascule sur site de secours, restauration)  
- Gestion de la rétention des sauvegardes et documentation claire  

**Questions d’entretien typiques :**
- Expliquez la règle du 3-2-1.  
- Comment protéger les sauvegardes contre ransomware ?  
- Avez-vous déjà participé à un test PRA ?  

---

## Documentation et traçabilité

**Résumé essentiel**  
La traçabilité permet de comprendre et prouver les actions.  
- Activer et centraliser les logs critiques (authentifications, admin, antivirus, firewall…)  
- Garantir intégrité (chiffrement, horodatage, contrôle d’accès)  
- Durée de conservation typique : 6 à 12 mois (voire plus si réglementé)  
- Retex (retour d’expérience) après chaque incident  
- Documentation à jour des politiques, procédures, architectures  

**Questions d’entretien typiques :**
- Quels logs indispensables conserver et combien de temps ?  
- Comment garantir l’intégrité des journaux ?  
- Que doit contenir un rapport de Retex ?  

---

## Communication et conformité

**Résumé essentiel**  
Le RSSI est l’interface entre technique, direction, régulateurs, public.  
- Respect des lois (RGPD, CNIL, DSP2, HIPAA…)  
- Notification CNIL en 72h avec DPO  
- Référentiels ANSSI (SecNumCloud, hygiène informatique, LPM, NIS2)  
- Vulgarisation auprès du COMEX, présentation des risques en langage métier  
- Plan de communication de crise (porte-parole, communiqués pré-rédigés, transparence maîtrisée)  

**Questions d’entretien typiques :**
- Comment expliquer un risque technique complexe à un COMEX ?  
- Quelle stratégie de communication face à une attaque médiatisée ?  
- Quelles obligations légales connaissez-vous dans notre secteur ?  

---

## Indicateurs de pilotage

**Résumé essentiel**  
« On ne gère bien que ce qu’on mesure ».  
- KPI : MTTD (Mean Time To Detect), MTTR (Mean Time To Respond)  
- Taux de patching (correctifs appliqués dans les délais)  
- Couverture de supervision (actifs intégrés, 24/7 vs 8/5)  
- Nombre d’incidents, taux de faux positifs, sensibilisation des employés  
- KPI = actionnables, alignés sur objectifs métier  

**Questions d’entretien typiques :**
- Quels KPIs pour un SOC interne ?  
- Comment réduire MTTD/MTTR ?  
- Que faire si le taux de patching stagne ?  

---

## Simulations et exercices

**Résumé essentiel**  
Un PCA/PRA non testé reste théorique. Exercices indispensables :  
- **Table-top** : simulation scénarisée avec COMEX et dirigeants  
- **Red Team** : attaque simulée réelle, test de la Blue Team  
- **Purple Team** : collaboration attaque/défense  
- **Tests de bascule PRA** : déclenchement du site de secours  
- Autres : tests d’intrusion, phishing, continuité fournisseurs  

**Questions d’entretien typiques :**
- Avez-vous déjà conduit un exercice table-top ?  
- Comment évaluer un exercice Red Team ?  
- À quelle fréquence tester PRA et sauvegardes ?  

---

## Compétences transverses du RSSI

**Résumé essentiel**  
Le RSSI n’est pas qu’un expert technique, il doit :  
- **Manager et fédérer** une équipe pluridisciplinaire  
- **Déployer des projets** dans les contraintes de budget et délais  
- **Maîtriser la culture juridique** (RGPD, NIS2, PCI-DSS, etc.)  
- **Parler ROI** pour justifier les investissements sécurité  
- **Assurer une veille** technologique et menace (CERT-FR, ENISA, Verizon DBIR, etc.)  
- **Être un communicant** capable d’expliquer au COMEX comme aux techniciens  

**Questions d’entretien typiques :**
- Comment assurez-vous une veille cybersécurité efficace ?  
- Quelle a été votre expérience la plus difficile en management ?  
- Comment justifier un investissement sécurité face à un CFO sceptique ?  

---

## Références

- LockSelf – PRA, PCA, PRI, PCI en entreprise (2023)  
- Nexa – CSIRT, missions et détection (2025)  
- CSM – Patch Management et gestion des vulnérabilités  
- ServicePilot – Analyse de logs critiques  
- LogPoint – UEBA  
- SailPoint – IAM vs PAM  
- Veeam – Règle 3-2-1  
- Oodrive – PCA/PRA et exercices  
- ManageEngine – Rétention des logs  
- CNIL – Recommandation journalisation (2021)  
- Board of Cyber – Rôle du RSSI  
- ANSSI – Communication de crise (2021)  
- CSB.school – Indicateurs MTTD/MTTR (2025)  
- Wavestone RiskInsight – Indicateurs et reporting (2021)  
- Varonis – Red Teaming (2023)  
