# 9 – Réseaux virtuels, Cloud et VPN

Avec la montée en puissance du Cloud, des environnements hybrides, de la virtualisation et de la mobilité, les architectures réseau modernes dépassent largement le simple périmètre physique. Ce chapitre aborde les technologies de réseaux virtuels, les interconnexions Cloud, et les VPN d’entreprise.

> [!info]  
> Ce module est clé pour tout RSSI ou architecte qui conçoit ou sécurise un SI réparti entre plusieurs sites, datacenters ou Clouds.

---

## 1. VLAN et segmentation virtuelle

- Un **VLAN** (Virtual LAN) est un domaine de broadcast logique défini au niveau 2.
- Il permet de **regrouper des équipements indépendamment de leur localisation physique**.

### Avantages :
- Isolation logique (ex : production, admin, invités)
- Simplification de l’administration
- Application de politiques réseau différenciées

> [!tip]  
> Chaque VLAN devrait être routé dans un **inter-VLAN firewallé** avec des règles explicites.

---

## 2. VXLAN et overlay réseaux

### VXLAN (Virtual eXtensible LAN)
- Successeur du VLAN pour les environnements virtualisés
- Utilise un **tunnel UDP sur IP** pour encapsuler des trames L2 sur un réseau L3
- Permet la **création de réseaux virtuels étendus sur plusieurs sites**

### Cas d’usage :
- Datacenters multi-tenant
- Infrastructure Cloud (VMware NSX, OpenStack, etc.)
- SDN et Cloud privé

> [!example]  
> Une VM en VLAN 10 dans un datacenter peut communiquer avec une VM du même VLAN sur un autre site distant, grâce à VXLAN.

---

## 3. Réseaux hybrides et Cloud

Les SI modernes sont souvent **hybrides** :
- Une partie on-premise (interne)
- Une partie dans le Cloud (IaaS, PaaS, SaaS)

### Défis :
- Interconnexion sécurisée
- Routage et filtrage entre zones (VPC ↔ SI)
- Gestion des identités et des flux

> [!quote]  
> Un VPC AWS, une VNet Azure ou un VPC GCP sont des **réseaux virtuels isolés**, qu’il faut relier proprement au SI avec filtrage et audit.

---

## 4. VPN d’entreprise (site-to-site et mobile)

### Types :
| Type         | Description                                 | Usage typique             |
|--------------|---------------------------------------------|----------------------------|
| IPsec VPN    | Tunnel chiffré L3 (site à site)              | Interconnexion de sites    |
| SSL VPN      | VPN d’accès distant L7 (via navigateur ou client) | Télétravail sécurisé    |
| MPLS VPN     | VPN géré par l’opérateur                    | Réseau privé inter-sites   |
| GRE          | Tunnel générique, sans chiffrement natif    | Transport encapsulé        |

> [!tip]  
> Toujours combiner un VPN avec une **authentification forte** et un contrôle de conformité du poste client.

---

## 5. SD-WAN (Software Defined WAN)

- Réseau étendu piloté par logiciel
- Optimise les flux entre plusieurs sites, avec gestion dynamique
- Apporte :
  - Routage applicatif
  - Sécurité intégrée (chiffrement, firewall, segmentation)
  - Visibilité centralisée

### Avantages :
- Réduction des coûts MPLS
- Amélioration de la qualité d’expérience (QoE)
- Adapté au multi-cloud

---

## 6. Bonnes pratiques d’architecture réseau hybride

| Objectif                           | Recommandation                          |
|------------------------------------|------------------------------------------|
| Séparer les flux                   | VLANs, VPC, firewall, VRF                |
| Superviser les tunnels             | Logs VPN, alertes, audit                 |
| Appliquer des ACL inter-zones      | Firewall Cloud + Firewall local          |
| Sécuriser le transit Cloud ↔ SI    | VPN chiffré, bastion, proxies            |
| Répliquer les journaux             | Logs centralisés dans le SIEM            |
| Tester la résilience               | Scénarios de coupure site ou Cloud       |

> [!success]  
> Tu es maintenant capable de comprendre, concevoir et sécuriser des architectures réseau hybrides complexes incluant du VPN, du Cloud et du SD-WAN.
