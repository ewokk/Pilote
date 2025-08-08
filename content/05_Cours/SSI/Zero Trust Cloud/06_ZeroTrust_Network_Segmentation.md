# Segmentation réseau et ZTNA (Zero Trust Network Access)

## Objectif

Limiter les communications **au strict nécessaire**, même à l’intérieur du Cloud ou du LAN.

> [!info]
> On segmente par **fonction**, **sensibilité**, **environnement**, **contexte**.

---

## Approches de segmentation

| Méthode        | Description |
|----------------|-------------|
| VLAN / Subnet  | Isolation L2/L3 classique |
| NSG / Security Group | Firewall logique (Cloud) |
| NAC dynamique  | Affectation VLAN selon posture |
| Micro-segmentation | VM/container niveau processus |
| SD-WAN + ZTNA  | Accès conditionné, sur demande |

---

## ZTNA (Zero Trust Network Access)

- Remplace le VPN traditionnel
- Accès uniquement **après vérification** de :
  - l’identité
  - l’appareil
  - le contexte

> [!example]
> Un prestataire externe accède à un SI uniquement via un proxy ZTNA qui vérifie MFA, poste certifié et durée autorisée.

---

## Exemples d’outils

- Zscaler Private Access
- Netskope ZTNA
- Tailscale / OpenZiti
- Azure Private Link + Conditional Access

---

## Audit et supervision

- Analyse des flux entre zones
- Logs de contrôle d’accès
- Visualisation dynamique (cartographie réseau logique)

