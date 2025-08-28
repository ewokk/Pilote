# Cas pratiques — Architecture OT sécurisée

## Cas 1 — Usine de production agroalimentaire

- SCADA : supervision lignes de production
- Automates Siemens (S7)
- Réseau plat initialement (tout en 192.168.0.0/16)

**Mesures appliquées :**
- Séparation physique OT / IT
- Firewall industriel entre SCADA et SI
- Accès distant via bastion + MFA
- Supervision passive avec Claroty

```ascii
[ERP] ─┐
       │
    [Firewall IT/OT]
       │
[SCADA] ── [PLC1] ── [Capteurs]
         └─ [PLC2]
```

---

## Cas 2 — Station de traitement d’eau

- SCADA avec HMI locale
- Capteurs de chlore, débit, pression
- Aucune supervision initiale

**Améliorations :**
- Segment réseau par zone fonctionnelle
- Accès lecture seule à distance (readonly)
- VPN certifié + monitoring Zeek

---

## Cas 3 — Réseau OT multi-sites avec maintenance externe

- SCADA réparti, VPN site-à-site
- Maintenances par plusieurs fournisseurs

**Solutions déployées :**
- SSO + MFA sur portail central
- Journalisation centralisée (Syslog)
- Accès temporaire par bastion (jeton 1h)

> [!success]
> Le modèle Purdue reste valide **même dans des architectures distribuées**, à condition d’isoler les flux critiques.

