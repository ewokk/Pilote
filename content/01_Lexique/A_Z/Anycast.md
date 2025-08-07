# Anycast

> **Type** : concept 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : réseau, disponibilité `#disponibilité`, infrastructure

---

## Définition
> L’**Anycast** est une méthode de routage réseau dans laquelle **plusieurs nœuds partagent une même adresse IP**, et le **trafic est acheminé automatiquement vers le nœud le plus proche** (en termes de distance réseau ou latence).

---

## Explication détaillée
- **Origine ou historique**  
  Utilisé initialement dans les infrastructures DNS pour améliorer la résilience, l’Anycast est aujourd’hui répandu dans les CDN, pare-feux cloud, et services à haute disponibilité.

- **Fonctionnement technique**  
  - Plusieurs serveurs répartis géographiquement **partagent la même IP**
  - Le protocole de routage (BGP) dirige les clients vers le nœud “le plus proche”
  - Si un nœud échoue, le trafic est rerouté sans modification côté client

- **Rôles & fonctions**  
  - Réduction de la latence (proximité géographique)
  - Répartition de charge
  - Résilience aux pannes (haute disponibilité)
  - Atténuation des attaques DDoS (dispersion du trafic)

- **Avantages et limites**  
  + Haute disponibilité  
  + Optimisation des performances réseau  
  + Tolérance aux pannes  
  – Complexité de déploiement (BGP, monitoring)  
  – Pas toujours précis dans la sélection du “meilleur” nœud

- **Typologies ou variantes**  
  - Anycast DNS (ex : root DNS, Cloudflare, Google Public DNS)
  - CDN anycasté (Akamai, Cloudflare)
  - Services anti-DDoS (ex : Arbor, Radware, Akamai Kona)

---

## Cas d’usage & exemples concrets
- Serveurs DNS racine (Root Servers) utilisant Anycast
- Plateformes CDN servant les utilisateurs depuis le nœud le plus proche
- Infrastructure de mitigation DDoS dispersant les requêtes

---

## Vulnérabilités, risques et abus connus
- Mauvaise convergence BGP ou routage défectueux
- Hijacking BGP (prise de contrôle frauduleuse d’un bloc IP)
- Difficultés de diagnostic réseau
- Complexité à tester localement les déploiements

---

## Mesures de sécurité & recommandations
- Surveiller en permanence les nœuds et routes BGP
- Utiliser RPKI pour sécuriser les annonces BGP
- Compléter avec des outils de mesure de latence
- Ne pas se reposer uniquement sur Anycast pour la sécurité

---

## Standards, protocoles & normes associées
- BGP (Border Gateway Protocol)
- RPKI (Resource Public Key Infrastructure)
- RFC 4786 – Operation of Anycast Services

---

## Intégration dans un écosystème SSI
- Résilience des DNS, CDN, pare-feux cloud
- Complémentarité avec load-balancing et monitoring distribué
- Utilisé dans les architectures à forte criticité

---

## Liens avec d’autres notions
- [[DNS]]
- [[CDN]]
- [[Routage BGP]]
- [[Haute disponibilité]]

---

## Sources, outils & références
- [RFC 4786 – Anycast Services](https://datatracker.ietf.org/doc/html/rfc4786)
- [Cloudflare – Anycast Architecture](https://www.cloudflare.com/learning/performance/what-is-anycast/)
- [BGP & Anycast Explained](https://blog.cloudflare.com/anycast/)
- [Anycast simplified (YouTube)](https://www.youtube.com/watch?v=FwGAjHvEv9o)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#Anycast` `#infrastructure` `#DNS` `#BGP` `#disponibilité`
