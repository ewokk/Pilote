# 14. Cas pratique : Mise en œuvre du NIST CSF dans une TPE

## Objectif du chapitre

Ce chapitre illustre la mise en œuvre **concrète et réaliste** du NIST CSF dans une **Très Petite Entreprise (TPE)** de 15 personnes dans le secteur du conseil.

---

## 1. Contexte de l’entreprise

- 15 salariés
- Activité : cabinet de conseil en ingénierie
- Données sensibles traitées : documents clients, contrats, RH
- Systèmes :
  - PC portables, messagerie cloud, stockage sur OneDrive, site web vitrine

---

## 2. Objectifs de sécurité

- Préserver la **confidentialité des données clients**
- Assurer la **continuité** en cas d’incident (ransomware, vol d’ordinateur)
- Répondre aux exigences contractuelles des grands comptes

---

## 3. Mise en œuvre du CSF par fonction

### Identifier

- Inventaire simple (Excel) des équipements
- Cartographie manuelle des applications (Office, CRM cloud…)
- Registre des données sensibles

### Protéger

- Activation du chiffrement BitLocker sur tous les postes
- MFA activé sur comptes Microsoft 365
- Sensibilisation annuelle avec quizz interne
- Sauvegarde automatisée via OneDrive + copie locale sur NAS

### Détecter

- Abonnement à un antivirus professionnel avec console cloud
- Paramétrage de logs système + alertes critiques (événements Windows)
- Réaction manuelle en cas d’e-mail suspect ou comportement anormal

### Répondre

- Plan simplifié sur une page :
  - Responsable IT = personne de contact
  - Actions clés : isolement machine, appel prestataire, communication client
- Simulation de phishing testée une fois par an

### Restaurer

- Vérification mensuelle de la restauration des sauvegardes
- Liste des accès nécessaires en cas de reconfiguration complète

---

## 4. Outils utilisés

| Besoin | Outil choisi |
|--------|--------------|
| Antivirus | Bitdefender GravityZone |
| Sauvegarde | OneDrive + NAS Synology |
| Communication interne | Teams |
| Sensibilisation | Support PDF + Google Forms |
| Journalisation | Windows Event Viewer |

---

## 5. Résultat

- Maturité estimée :
  - Identifier : Tier 2
  - Protéger : Tier 2
  - Détecter : Tier 1
  - Répondre : Tier 1
  - Restaurer : Tier 2

> [!success]
> Sans investissement lourd, cette TPE dispose désormais d’un socle solide pour sa cybersécurité.

---

## Conclusion

Le NIST CSF est **parfaitement applicable aux petites structures** avec :
- Une **approche pragmatique**
- Une priorisation par impact métier
- Des outils simples et économiques

