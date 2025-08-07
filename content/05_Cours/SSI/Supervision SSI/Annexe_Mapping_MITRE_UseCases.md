# Annexe — Mapping MITRE ATT&CK vers SIEM / EDR / NDR

## Objectif

Aligner les règles de détection et les use cases du SOC sur les **techniques MITRE ATT&CK** les plus pertinentes.

---

## Exemples de mapping

| MITRE ID  | Technique                        | Détection via     | Description courte                          |
|-----------|----------------------------------|-------------------|----------------------------------------------|
| T1110     | Brute Force                      | SIEM              | Tentatives multiples d’authentification       |
| T1059     | Command-Line Interface           | EDR               | Usage suspect de PowerShell, cmd              |
| T1071.001 | Application Layer Protocol: Web  | NDR               | Exfiltration lente via HTTPS                  |
| T1086     | PowerShell                       | EDR / SIEM        | Commandes obfusquées ou interdites            |
| T1021     | Remote Services (RDP, SMB)       | SIEM / NDR        | Mouvements latéraux internes                  |
| T1566     | Phishing                         | SIEM              | Email + ouverture de lien / pièce jointe      |

---

## Comment l’utiliser

1. Identifier les techniques pertinentes selon votre contexte
2. Vérifier si des règles SIEM / EDR / NDR existent
3. Cartographier la couverture pour identifier les **angles morts**
4. Prioriser les règles à créer

> [!info]
> Outils utiles : MITRE Navigator, Sigma rules, Atomic Red Team
