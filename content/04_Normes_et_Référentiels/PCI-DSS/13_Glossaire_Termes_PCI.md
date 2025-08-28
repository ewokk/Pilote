
# 13 - Glossaire des termes PCI DSS

Ce glossaire regroupe les termes essentiels à connaître pour maîtriser la norme PCI DSS v4.0.

___

### PAN (Primary Account Number)

Numéro principal d’un compte de carte de paiement.  
→ Exemple : 4532 7645 9876 1234  
→ Il doit être protégé s’il est stocké, transmis ou traité.

___

### SAD (Sensitive Authentication Data)

Données d’authentification sensibles :
- CVV/CVC
- Données de bande magnétique
- PIN

❗ Interdiction de stockage après l’autorisation.

___

### CDE (Cardholder Data Environment)

Zone du système d’information où :
- le PAN est stocké, transmis ou traité
- la sécurité PCI DSS est requise

→ C’est le **périmètre** de conformité.

___

### QSA (Qualified Security Assessor)

Auditeur externe certifié par le PCI SSC pour produire un ROC.

___

### SAQ (Self-Assessment Questionnaire)

Formulaire d’**auto-évaluation** PCI, utilisé par certaines entités à la place d’un audit QSA.

___

### ROC (Report on Compliance)

Rapport de conformité PCI complet produit par un QSA à la fin d’un audit.

___

### ASV (Approved Scanning Vendor)

Prestataire agréé pour réaliser les scans externes exigés (exigence 11).

___

### MFA (Multi-Factor Authentication)

Authentification basée sur au moins **deux facteurs distincts** :
- Ce que je sais (mot de passe)
- Ce que je possède (téléphone, token)
- Ce que je suis (empreinte…)

___

### FIM (File Integrity Monitoring)

Système de surveillance de l’intégrité des fichiers critiques (logs, binaire système…).

___

### Segmenter / segmentation réseau

Technique visant à **isoler la CDE** du reste du réseau.  
→ Réduction de périmètre = réduction d’effort de conformité.

___

### SAD / PAN : résumé

| Élément | Peut être stocké ? | Conditions |
|---------|--------------------|------------|
| PAN | Oui | Chiffré, contrôlé, justifié |
| CVV | ❌ Non | Jamais après autorisation |
| Données magnétiques | ❌ Non | Interdit |
| PIN | ❌ Non | Interdit en clair

___

# Fin du glossaire
