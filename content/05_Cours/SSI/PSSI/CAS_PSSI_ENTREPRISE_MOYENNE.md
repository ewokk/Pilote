# Politique de Sécurité des Systèmes d’Information (PSSI) – Entreprise Pilote

## 1. Introduction

### Objectif
La présente PSSI définit les règles et exigences de sécurité applicables à l’ensemble du système d’information (SI) de l’entreprise **Pilote**, afin de protéger les actifs numériques contre toute compromission, perte ou indisponibilité.

### Contexte
Pilote est une PME de 200 personnes réparties sur deux sites en France. Son activité repose sur la fourniture de services numériques (SaaS, API B2B, hébergement cloud). Le SI comprend :
- Un cloud privé (OVH) pour les environnements de production
- Des services SaaS pour la gestion RH, finance, ticketing
- Des postes de travail managés à distance
- Des données sensibles (clients, code source, logs d’usage)

## 2. Périmètre

Cette PSSI s’applique à :
- Tous les collaborateurs, sous-traitants et prestataires de Pilote
- Tous les équipements, systèmes, applications, services cloud utilisés
- Tous les usages (bureaux, mobilité, télétravail)

## 3. Gouvernance SSI

| Fonction | Rôle |
|---------|------|
| Direction Générale | Responsable finale de la sécurité du SI |
| RSSI | Définit, pilote et contrôle la sécurité |
| DSI | Implémente les mesures techniques |
| Équipes métiers | Identifient les besoins, appliquent les règles |
| Utilisateurs | Respectent les consignes de sécurité |
| Comité SSI | Réunit RSSI, DSI, RH et direction 1x / trimestre |

## 4. Gestion des accès

- **Création des comptes** :
  - Par le service IT, sur demande validée via Jira ou portail interne
  - Comptes nominatifs obligatoires
- **Authentification** :
  - MFA obligatoire pour tous les accès externes
  - Mots de passe : 12 caractères min., complexité activée, changement 1x/an
- **Révocation des droits** :
  - Automatisée à la date de fin du contrat (via script AD + SaaS)
  - Contrôlée manuellement par le RSSI chaque mois
- **Revue des droits** :
  - Bi-annuelle, par l’équipe IT + managers
  - Documentation dans l’outil ITSM avec export PDF signé

## 5. Sauvegarde et restauration

| Élément | Configuration |
|--------|---------------|
| Données critiques | Sauvegarde incrémentale quotidienne |
| Applications | Snapshot hebdomadaire complet |
| Externalisation | Vers un cloud chiffré AES-256 hors site |
| Test de restauration | Trimestriel automatisé + test manuel 1x/an |
| Rétention | 6 mois pour les données critiques |

- Outil : Veeam Backup + stockage S3 chiffré
- Journalisation des sauvegardes intégrée au SIEM

## 6. Journalisation & supervision

- Journalisation activée sur tous les systèmes critiques (serveurs, VPN, AD, CRM)
- Données collectées dans un SIEM centralisé (Wazuh)
- Supervision assurée 24/7 avec alertes en temps réel
- Rétention des logs : 12 mois (avec horodatage UTC synchronisé via NTP)
- Audit interne 1x/an sur les journaux de sécurité

## 7. Télétravail et mobilité

- VPN obligatoire (OpenVPN + MFA)
- Postes fournis par Pilote : chiffrés avec BitLocker, durcis
- Accès restreint au strict nécessaire (SSO + segmentation)
- Interdiction d’utiliser des périphériques USB non validés
- Outil de gestion de flotte : Intune + SentinelOne

## 8. Sécurité physique

- Locaux accessibles uniquement par badge personnel
- Salles serveurs sous vidéosurveillance + badge + alarme
- Présence d’un générateur de secours sur le site principal
- Accès des prestataires soumis à déclaration et badge visiteur

## 9. Sensibilisation et formation

- Sensibilisation SSI à l’arrivée de tout salarié (support signé)
- Formation annuelle obligatoire pour tous
- Simulation de phishing 1x/an + analyse de taux de clic
- Communication mensuelle d’alertes et bonnes pratiques (via intranet)

## 10. Gestion des incidents

- Outil de déclaration : portail interne / ticketing JIRA
- Incidents critiques traités sous 2h
- Notification automatique au RSSI + DSI
- Procédure formalisée : analyse, containment, éradication, retour d’expérience
- Tous les incidents sont tracés, documentés et archivés

## 11. Continuité et reprise d’activité

- PCA validé pour les fonctions critiques (CRM, plateforme SaaS, API)
- PRA testé 1x/an : RTO max = 8h / RPO max = 4h
- Sites secondaires en cold-standby avec réplication hebdomadaire
- Activation formalisée par la cellule de crise SSI

## 12. Évolution, validation, archivage

- Revue annuelle par le comité SSI
- Versioning archivé sur SharePoint sécurisé (read-only)
- Diffusion par le RSSI via l’intranet + briefing en comité
- Validation formelle par la Direction (signature PDF)

---

Politique validée par :  
**DG** : Julie DUMAS (signature)  
**RSSI** : Louis MARTEL (signature)  
**Date** : 22 mars 2025  
**Révision** : annuelle  
