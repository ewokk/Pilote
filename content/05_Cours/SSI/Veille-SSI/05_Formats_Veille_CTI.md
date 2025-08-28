# Formats et standards de veille SSI / CTI

## Formats techniques

| Format | Usage                                      | Exemple                   |
|--------|---------------------------------------------|----------------------------|
| RSS    | Flux d’actu standardisé                    | CERT-FR, blogs GitHub      |
| STIX   | Structuration d’info CTI (IOC, TTP)        | Partage inter-outils CTI   |
| TAXII  | Transport de flux STIX                     | Utilisé par MISP, Anomali  |
| JSON   | Réponse API GitHub, CVE, CISA KEV          | Exploitable par scripts    |
| PDF    | Bulletins, rapports                        | ENISA, ANSSI, Cisco, etc.  |

---

## Formats métier

- Newsletter HTML ou Markdown
- Notes internes en Obsidian
- Slides synthétiques pour CODIR
- Bulletins imprimés (secteurs sensibles)

---

## Indexation de la veille

- Intégration dans MISP, TheHive, ou OpenCTI
- Chaînage avec MITRE ATT&CK (TTP, groupe, secteur)

> [!quote]
> “Le bon format, c’est celui que ton destinataire peut **ouvrir, comprendre et exploiter** immédiatement.”

