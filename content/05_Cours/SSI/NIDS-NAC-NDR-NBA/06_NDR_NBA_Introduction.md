# Introduction — NDR & NBA

## Pourquoi aller au-delà du NIDS ?

Les NIDS classiques (Snort, Suricata) :
- s'appuient majoritairement sur des **signatures connues**
- sont efficaces mais peuvent être **contournés** (obfuscation, 0day, tunnel DNS…)

> [!danger]
> Aujourd’hui, les attaques avancées utilisent des comportements "légitimes" mais malicieux (Living off the Land, exfiltration lente…).

---

## Définitions

| Terme | Signification | Objectif |
|-------|---------------|----------|
| NBA   | Network Behavior Analysis | Analyser les **anomalies de comportement réseau** |
| NDR   | Network Detection & Response | Plateforme complète de détection **et** réponse réseau basée sur signatures + comportements |

---

## Caractéristiques du NDR

- Agrégation des flux réseau (Netflow, SPAN, Zeek logs…)
- Enrichissement avec des **métadonnées contextuelles**
- Analyse comportementale (machine learning)
- Réponse automatisée (quarantaine, alertes SOC, blocage)

> [!tip]
> Le NDR est souvent une brique clé du SOC moderne, complémentaire du SIEM et des EDR.

