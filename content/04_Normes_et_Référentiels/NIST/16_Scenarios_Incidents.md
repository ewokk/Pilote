# 16. Scénarios d’incidents cyber typiques et application du NIST CSF

## Objectif du chapitre

Ce chapitre présente des scénarios récurrents d’incidents de cybersécurité, illustrant **comment les fonctions du NIST CSF** s’appliquent à chaque étape.

---

## 1. Ransomware dans une PME

### Situation
- Infection d’un poste par pièce jointe malveillante
- Chiffrement de tous les fichiers partagés
- Note de rançon envoyée

### Application CSF

| Fonction | Réponse |
|----------|---------|
| Identifier | Faible inventaire, aucune classification des données |
| Protéger | Pas de MFA, antivirus obsolète |
| Détecter | SIEM absent, infection découverte tardivement |
| Répondre | Pas de plan de réponse, isolement manuel |
| Restaurer | Sauvegardes locales non testées, perte partielle des données |

---

## 2. Vol de données par un prestataire

### Situation
- Prestataire externe avec accès au CRM
- Extraction massive de données clients
- Révélation publique via la presse

### Application CSF

| Fonction | Réponse |
|----------|---------|
| Identifier | Contrats flous, aucun audit des droits d’accès |
| Protéger | Absence de DLP ou de surveillance |
| Détecter | Fuite non détectée automatiquement |
| Répondre | Notification CNIL improvisée |
| Restaurer | Aucun impact sur système, mais besoin de rétablir confiance |

> [!failure]
> Sans journalisation ni filtrage, impossible de prouver ou quantifier le vol.

---

## 3. Compromission d’un compte administrateur

### Situation
- Identifiants d’un admin volés via phishing ciblé
- Création de comptes fantômes, déploiement de malware
- Tentative de persistance

### Application CSF

| Fonction | Réponse |
|----------|---------|
| Identifier | Comptes à privilèges non recensés formellement |
| Protéger | Pas de MFA sur VPN ni accès console |
| Détecter | Connexion inhabituelle visible via SIEM |
| Répondre | Isolation rapide, analyse forensic en urgence |
| Restaurer | Réinitialisation des comptes, nettoyage AD, patch |

---

## 4. Défaillance d’un fournisseur cloud

### Situation
- Panne totale du prestataire SaaS hébergeant le système de facturation
- Durée d’interruption : 2 jours
- Facturation et relation client paralysées

### Application CSF

| Fonction | Réponse |
|----------|---------|
| Identifier | Aucune évaluation des dépendances critiques |
| Protéger | Aucun plan de secours en cas d’indisponibilité |
| Détecter | Incident connu via e-mail client |
| Répondre | Communication confuse, clients insatisfaits |
| Restaurer | Attente de rétablissement, aucune alternative immédiate |

---

## Conclusion

> [!warning]
> Ces scénarios montrent que la **maturité CSF est déterminante** pour limiter l’impact réel d’un incident.

Anticiper chaque étape du CSF dans des cas concrets permet de :
- Identifier les points faibles
- Mettre en place les mesures prioritaires
- Tester la capacité organisationnelle à résister

