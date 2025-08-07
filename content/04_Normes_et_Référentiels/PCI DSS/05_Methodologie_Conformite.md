# 5 - Méthodologie de Conformité PCI DSS (Version enrichie)

## Vue d’ensemble des méthodes de conformité

| Méthode | Description | Obligatoire pour |
|--------|-------------|------------------|
| SAQ | Auto-questionnaire | Petits commerçants |
| ROC | Rapport complet signé par QSA | Prestataires, grandes entreprises |
| ASV | Scan externe validé par prestataire certifié | Sites en ligne ou exposés à Internet |
| ISA | Audit interne via auditeur certifié PCI SSC | Grandes structures avec ressources internes |

> [!tip]
> Chaque méthode correspond à un **type d’entité**, à un **volume de transactions**, ou à une **exposition aux risques**.

___

## Étapes de conformité (ROC ou SAQ)

1. Définir le périmètre (CDE)
2. Collecte des preuves
3. Scans + pentest
4. Validation par QSA ou auto-évaluation
5. Transmission au sponsor (banque, marque___)

## Tableaux des preuves attendues

| Étape | Preuve clé | Format attendu |
|-------|------------|----------------|
| CDE | Cartographie réseau, data flow | Diagramme, tableur |
| Authentification | Config MFA | Capture ou export JSON |
| Chiffrement | Certificats TLS, config SSL | OpenSSL, captures |
| Journalisation | Export SIEM, logs signés | PDF, CSV, outil natif |

## Acteurs impliqués

- **RSSI** : pilote global
- **QSA** : auditeur tiers certifié
- **Responsable IT / Dev / Infra** : support technique
- **Acquéreur** : demandeur du certificat

> [!danger]
> L’absence de cartographie CDE ou de preuve d’effacement du SAD entraîne une **non-conformité critique**.

___

