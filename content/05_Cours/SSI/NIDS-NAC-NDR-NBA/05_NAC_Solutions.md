# Solutions NAC — Cisco ISE, Aruba, PacketFence

## Cisco ISE (Identity Services Engine)

- Solution centralisée d’authentification réseau
- Fonctionne avec RADIUS, AD, 802.1X
- Gestion fine des politiques + logs détaillés

> [!example]
> Cisco ISE permet :
> - attribution VLAN dynamique
> - isolation automatique des postes non conformes
> - intégration avec Firepower / AMP / Stealthwatch

---

## Aruba ClearPass

- Solution concurrente de Cisco ISE
- Excellente intégration avec les équipements Aruba / HPE
- Fonctionnalités NAC + MDM + posture

## PacketFence (Open Source)

- NAC libre et complet
- Support 802.1X, captive portal, VLAN, RADIUS, SNMP
- Interface Web pour logs, validation manuelle, gestion des alertes

---

## openNAC / FreeRADIUS

- Solutions plus légères ou embarquées
- openNAC : interface Web
- FreeRADIUS : composant central NAC + WPA2-Enterprise

---

## Certification & Scoring : TrustSec, SGT

- Cisco TrustSec utilise des **SGT (Security Group Tags)** dynamiques
- Permet un **contrôle d’accès basé sur les rôles et le contexte**
- Granularité supérieure au simple VLAN

> [!tip]
> Les SGT sont exploités dans les switchs, routeurs et firewalls pour appliquer dynamiquement des ACL.

