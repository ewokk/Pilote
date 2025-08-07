# NIDS — Détection d'intrusions réseau

## Définition

Un **Network Intrusion Detection System (NIDS)** est un système qui :
- analyse le **trafic réseau en temps réel**
- identifie les **comportements malveillants ou suspects**
- génère des **alertes** sans bloquer le trafic (sauf si mode IPS)

---

## Fonctionnement général

| Étape | Description |
|-------|-------------|
| Capture | Le NIDS récupère le trafic via une interface en SPAN ou TAP |
| Analyse | Le moteur inspecte les paquets à la recherche d’anomalies |
| Détection | Matching de signatures, heuristique, statistique |
| Alerte | Génération d'événements, logs, alertes, export SIEM |

---

## Modes de fonctionnement

- **Passive** : via port miroir (SPAN), aucune perturbation réseau
- **Inline (IPS)** : en mode "bridge", permet de bloquer les attaques (Snort/Suricata en mode IPS)
- **TAP** : copie physique du trafic, plus fiable que SPAN

> [!warning]
> Attention aux limitations SPAN : perte de paquets possible sous charge.

---

## Types de détection

- **Signature-based** : base de règles connues (Snort, Emerging Threats)
- **Anomaly-based** : déviation de comportement (volume, ports, flags)
- **Stateful protocol analysis** : validation du respect des RFC/protocoles

---

## Evasion et limitations

| Technique d'évasion | Description |
|---------------------|-------------|
| Fragmentation TCP   | Découpe volontaire des paquets |
| TTL manipulation    | Détourner la livraison réelle du paquet |
| Obfuscation payload | Encodage, variation syntaxique |

> [!danger]
> Un NIDS mal configuré peut être aveuglé volontairement. D’où l’importance du tuning, des logs et du placement.

---

## NIDS vs IPS

| Critère       | NIDS                   | IPS                          |
|---------------|------------------------|------------------------------|
| Mode          | Passif (lecture seule) | Actif (peut bloquer)         |
| Risque de latence | Aucun              | Possible si mal dimensionné  |
| Usage typique | Monitoring réseau      | Protection périmétrique      |
| Outils        | Snort, Suricata, Zeek  | Suricata (inline), Firepower|

> [!tip]
> Il est possible de **convertir un NIDS en IPS** (Suricata, Snort) en modifiant son mode de fonctionnement.
