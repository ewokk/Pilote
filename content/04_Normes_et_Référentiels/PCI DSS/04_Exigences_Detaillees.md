
# 4 - Exigences détaillées PCI DSS v4.0 (avec méthodes d’audit & preuves)

Ce chapitre est le cœur opérationnel du standard PCI DSS.  
Il détaille les **12 exigences principales**, avec pour chacune :
- son objectif de sécurité,
- les attentes officielles,
- les bonnes pratiques de mise en œuvre,
- les erreurs fréquentes à éviter,
- des exemples concrets métier ou techniques,
- les conteneurs Obsidian utiles (warning, tip, danger, etc.).

Chaque exigence  une section :
- **Méthode d’audit typique** (niveau QSA ou auto-évaluation)
- **Preuves attendues** (documents, configurations, extraits, logs…)

---

## Exigence 1 – Contrôles réseau

### Objectif :
Éviter les accès non autorisés aux ressources du système d’information manipulant les données cartes.

### Bonnes pratiques :
- Pare-feu de nouvelle génération avec règles strictes
- ACL basées sur IP, protocole, port
- Aucune règle "ANY ANY"
- Journalisation et surveillance des accès

> [!danger]
> Une règle de firewall trop permissive ou oubliée = porte ouverte critique vers le CDE.

### Méthode d’audit :
- Revue des règles de firewall, topologie réseau
- Inspection de fichiers de configuration de pare-feu
- Tests de pénétration sur la segmentation

### Preuves attendues :
- Dump de règles de firewall avec justification
- Cartographie réseau validée
- Logs de blocage / tentatives d’intrusion
- Rapport de tests de segmentation

---

## Exigence 2 – Configurations sécurisées

### Objectif :
Éliminer les vulnérabilités liées aux configurations par défaut ou trop laxistes.

### Bonnes pratiques :
- Suppression de tous les comptes/démos par défaut
- Benchmarks de durcissement (CIS, DISA STIG, ANSSI…)
- Gestion de configuration centralisée
- Suivi des écarts de configuration

> [!tip]
> Automatisez les vérifications avec des outils d’audit de configuration (ex : Lynis, CIS-CAT...).

### Méthode d’audit :
- Analyse de configuration sur OS, routeurs, bases
- Vérification de conformité à des benchmarks (CIS, ANSSI)

### Preuves attendues :
- Captures de configuration durcies
- Rapports d’audit de configuration automatisés
- Politiques de gestion de configuration

---

## Exigence 3 – Données stockées

### Objectif :
Éviter tout vol, fuite ou compromission des PAN/SAD.

### Pratiques recommandées :
- Chiffrement fort (AES-256)
- Hachage irréversible des PAN pour archivage
- Masquage des PAN (ex : **** **** **** 1234)
- Rétention minimale avec justification

> [!failure]
> Stoker du SAD (CVV2, PIN) après autorisation est une **non-conformité majeure**.

### Méthode d’audit :
- Vérification des schémas de BDD
- Analyse du chiffrement (clé, algorithme, cycle de vie)

### Preuves attendues :
- Extraits de configuration de chiffrement
- Registre de données sensibles
- Preuve de suppression régulière / limite de rétention

---

## Exigence 4 – Données en transit

### Objectif :
Empêcher l’interception des données sensibles.

### Bonnes pratiques :
- TLS 1.2 ou 1.3 obligatoire (SSL interdit)
- VPN IPsec pour sites distants
- Analyse des configurations SSL avec ssllabs.com

> [!protection]
> Forcer le HTTPS avec HSTS et désactiver les suites faibles

### Méthode d’audit :
- Scan de ports/services pour TLS
- Analyse des configurations SSL
- Simulation d’attaque Man-in-the-Middle

### Preuves attendues :
- Résultat ssllabs ou équivalent
- Configuration serveur web/mail
- Schéma des flux TLS avec protocole et port

---

## Exigence 5 – Anti-malware

### Objectif :
Réduire le risque d’infection et d’accès frauduleux.

### Bonnes pratiques :
- Anti-malware à jour sur tous les endpoints (EDR si possible)
- Scan des fichiers avant ouverture/traitement
- Surveillance centralisée des événements suspects

> [!warning]
> L’absence d’anti-malware sur un poste administratif = non-conformité.

### Méthode d’audit :
- Inspection des agents déployés
- Vérification de signatures à jour
- Simulation d’un fichier infecté (test inoffensif)

### Preuves attendues :
- Screenshots de la console EDR/antivirus
- Rapports de détection/scan automatiques
- Politique de gestion des malwares

---

## Exigence 6 – Développement sécurisé

### Objectif :
Limiter les vulnérabilités applicatives et maintenir à jour les composants.

### À mettre en œuvre :
- Gestion des vulnérabilités (CVE, score CVSS, etc.)
- Déploiement rapide des correctifs critiques
- Revue de code et audit de sécurité dans le cycle DevSecOps
- Formation développeurs à la sécurité

> [!tip]
> Intégrer un scanner SAST/DAST dans le pipeline CI/CD.

### Méthode d’audit :
- Analyse du cycle de développement
- Inspection de scans SAST/DAST
- Revue des livrables d’audit de code

### Preuves attendues :
- Pipeline CI/CD intégrant sécurité
- Rapports SAST/DAST (OWASP ZAP, SonarQube…)
- Procédure de patch management

---

## Exigence 7 – Accès par besoin métier

### Objectif :
Appliquer le principe du **moindre privilège**.

### À faire :
- Cartographier les rôles & autorisations
- Séparer les environnements admin/exploitation
- Éviter les comptes partagés

### Méthode d’audit :
- Cartographie des rôles
- Revue des groupes d’AD / IAM

### Preuves attendues :
- Liste des accès par rôle
- Matrice RACI SSI
- Capture d’écrans d’attribution des droits

---

## Exigence 8 – Authentification forte

### Objectif :
S’assurer que chaque action est attribuée à un utilisateur unique.

### Moyens :
- Authentification multi-facteur (MFA) obligatoire
- Mots de passe robustes
- Suppression des comptes inactifs
- Contrôle des sessions

> [!example]
> L’accès VPN aux outils d’administration doit se faire avec MFA + mot de passe fort.

### Méthode d’audit :
- Vérification de l’activation MFA
- Tests de verrouillage de compte

### Preuves attendues :
- Configuration MFA (captures, doc)
- Preuve de changement de mot de passe
- Journal des connexions

---

## Exigence 9 – Accès physique

### Objectif :
Protéger physiquement les systèmes manipulant les données de carte.

### Bonnes pratiques :
- Contrôle d’accès physique (badges, tourniquets)
- Vidéosurveillance
- Verrouillage des armoires
- Destruction sécurisée des supports (shredder, dégausseur)

> [!danger]
> Un accès libre aux baies serveurs annule toutes les protections logicielles.

### Méthode d’audit :
- Visite physique des locaux
- Test de badge ou accès sans autorisation

### Preuves attendues :
- Registre des entrées/sorties
- Vidéosurveillance
- Politique d’accès physique signée

---

## Exigence 10 – Surveillance et logs

### Objectif :
Permettre l’analyse post-incident, la détection et la traçabilité.

### Moyens :
- Centralisation des logs (SIEM)
- Corrélation d’événements, alertes
- Accès aux journaux limité et protégé
- Conservation minimale de 12 mois

> [!failure]
> Un log non consulté est inutile : définissez des alertes et des seuils.

### Méthode d’audit :
- Analyse des logs du SIEM
- Vérification de la corrélation et des alertes

### Preuves attendues :
- Configuration du SIEM
- Extrait de logs horodatés
- Documentation de conservation des journaux

---

## Exigence 11 – Tests sécurité

### Objectif :
Détecter les vulnérabilités avant les attaquants.

### Bonnes pratiques :
- Scans de vulnérabilité trimestriels
- Tests d’intrusion annuels
- Surveillance des changements (FIM – File Integrity Monitoring)
- Correction rapide des failles identifiées

### Méthode d’audit :
- Vérification de rapports de scans
- Validation des tests d’intrusion (internes / externes)

### Preuves attendues :
- Rapports signés de pentest
- Liste des failles corrigées
- Suivi de correction (ticketing)

---

## Exigence 12 – Gouvernance

### Objectif :
Ancrer la sécurité dans la gouvernance de l’entreprise.

### Éléments clés :
- Politique SSI signée, diffusée
- Rôles et responsabilités documentés (RSSI, DPO, exploitants…)
- Plan de sensibilisation et formation
- Revue annuelle du programme PCI DSS
- Documentation centralisée à jour

> [!tip]
> Intégrer les exigences PCI dans la PSSI de l’entreprise facilite l’audit.

### Méthode d’audit :
- Analyse documentaire
- Entretiens avec RSSI et métiers

### Preuves attendues :
- Politique SSI formalisée
- Preuves de formation/sensibilisation
- Plan annuel de conformité PCI

---

## Conclusion

Ces exigences ne doivent pas être vues comme une **checklist figée**, mais comme un cadre continu de sécurité.  
La conformité PCI DSS est un **processus vivant**, intégré dans la stratégie globale de cybersécurité.

> [!attention]
> Une non-conformité à une seule exigence peut suffire à **perdre la validation PCI DSS**.

> [!quote]
> Chaque exigence PCI DSS doit être vérifiée non seulement sur le plan **technique**, mais aussi **organisationnel**, avec des preuves solides et datées.
