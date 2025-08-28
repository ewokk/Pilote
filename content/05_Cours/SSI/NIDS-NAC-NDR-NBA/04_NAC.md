# NAC — Contrôle d’accès réseau

## Objectif

Empêcher tout équipement non conforme ou non autorisé d’accéder au réseau interne.

> [!info]
> Le NAC est la **barrière d’entrée** dans une politique Zero Trust.

---

## Méthodes de contrôle

| Type de contrôle | Exemple |
|------------------|---------|
| 802.1X (niveau 2) | Authentification machine/user avant attribution IP |
| Portail captif    | Redirection HTTP vers une page d'authentification |
| MAB (MAC Auth Bypass) | Autorisation basée sur l'adresse MAC |
| Posture           | Vérification AV, OS, patchs, etc. |

---

## Composants

- **Supplicant** : poste client (ex: Windows 802.1X)
- **Authenticator** : switch ou AP qui relaye l’authentification
- **RADIUS Server** : contrôle les accès (Cisco ISE, PacketFence…)

---

## Modes de fonctionnement

| Mode              | Description |
|-------------------|-------------|
| Inline            | Le NAC est le point de passage unique du trafic |
| Out-of-band       | Le NAC informe les équipements réseau via SNMP/RADIUS |
| Centralisé vs distribué | Selon l’architecture du SI |

---

## VLAN dynamique

- Attribution du VLAN en fonction :
  - de l’utilisateur
  - du type de poste
  - du niveau de conformité

> [!example]
> Un employé certifié rejoint le VLAN 10, un invité est redirigé vers le VLAN 90 (accès internet uniquement)

---

## Limitations

- Coût et complexité d’implémentation
- Difficulté de gestion BYOD sans solution MDM
- Comportement incertain selon les équipements réseau

