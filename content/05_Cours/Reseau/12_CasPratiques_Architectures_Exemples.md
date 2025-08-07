# 11 – Cas pratiques et architectures réseau types

Ce chapitre propose des exemples concrets d’architectures réseau adaptées à divers environnements professionnels. Chaque scénario inclut un schéma ASCII, les zones fonctionnelles, et les bonnes pratiques à respecter. L’objectif est de former le lecteur à analyser, concevoir ou auditer un réseau.

---

## 1. PME classique (mono-site)

### Objectif :
- Réseau simple, sécurisé, cloisonné
- Supporte l’Internet, le SI interne, la téléphonie, la messagerie

```
      [ Internet ]
           |
        [ Modem ]
           |
       [ Pare-feu ]
           |
    +------+------+--------+
    |             |        |
[DMZ: Web/SMTP] [LAN]   [Wi-Fi invité]
                  |
          [ Serveur AD, NAS ]
```

### Bonnes pratiques :
- Wi-Fi invité sur VLAN séparé, isolé du LAN
- Serveur AD protégé par ACL
- Sauvegardes vers NAS sur VLAN sécurisé

---

## 2. Multi-site avec VPN (TPE / agences)

### Objectif :
- Connecter plusieurs sites via tunnels sécurisés
- Maintenir une supervision centrale

```
     [ Site Principal ]
         |
     [ VPN Gateway ]
         |
     ==== TUNNEL VPN ====
         |
     [ VPN Gateway - Site 2 ]
         |
        [ LAN 2 ]
```

### Bonnes pratiques :
- Routage via tunnel VPN IPsec avec chiffrement AES
- Authentification forte des passerelles
- SIEM central recevant les journaux de tous les sites

---

## 3. SI hybride avec Cloud (moyenne entreprise)

### Objectif :
- Héberger une partie du SI sur AWS ou Azure
- Assurer la sécurité des flux Cloud ↔ On-premise

```
        [ Utilisateurs ]
               |
           [ Proxy ]
               |
           [ Pare-feu ]
           /         \
     [ SI interne ]  [ VPN ↔ VPC Cloud ]
                         |
                     [ App Web ]
                     [ SGBD Cloud ]
```

### Bonnes pratiques :
- VPN IPsec ou SSL entre firewall et VPC
- Pas d’accès direct entre Cloud et LAN interne
- Bastion d’accès aux ressources Cloud

---

## 4. Architecture “défense en profondeur” (SOC recommandé)

### Objectif :
- Limiter les mouvements latéraux
- Appliquer la segmentation maximale

```
[Internet]
    |
[Firewall externe]
    |
[DMZ] ---- [Reverse Proxy]
    |
[Firewall interne]
    |
[LAN sécurisé] -- [Zone admin]
    |
[Serveur SIEM] -- [IDS]
```

### Bonnes pratiques :
- Déployer des pare-feux interzones
- Journaliser tous les flux critiques
- Surveillance continue via IDS + SIEM

---

## 5. Erreurs fréquentes à éviter

| Erreur                                   | Risque |
|------------------------------------------|--------|
| Réseau “à plat” sans VLAN                | Mouvement latéral rapide, pivot |
| Accès Internet direct depuis les serveurs| Exposition des données sensibles |
| Administration non filtrée               | Prise de contrôle facile du SI |
| DMZ mal configurée                       | Rebond facile vers l’interne |
| SIEM non supervisé / non alimenté        | Détection tardive ou absente des incidents |

> [!tip]  
> Une architecture bien segmentée avec des ACL claires est le meilleur moyen de contenir une compromission.

---

> [!success]  
> Tu maîtrises désormais plusieurs modèles d’architectures réseau types, leurs composants, et les bonnes pratiques de segmentation et de supervision.
