# ASN

> **Type** : acronyme 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : réseau, gouvernance, infrastructure

---

## Définition
> Un **ASN (Autonomous System Number)** est un identifiant unique attribué à un **système autonome**, c’est-à-dire un **réseau ou un ensemble de réseaux** géré par une même entité et utilisant **une politique de routage cohérente** sur Internet.

---

## Explication détaillée
- **Origine ou historique**  
  Les ASN ont été définis dès les débuts d’Internet pour permettre aux opérateurs de **publier leurs routes BGP**. Chaque ASN est enregistré auprès d’un **registre régional Internet (RIR)** : RIPE, ARIN, APNIC, etc.

- **Fonctionnement technique**  
  - Un ASN est un nombre (ex : AS15169 pour Google)
  - Il est utilisé dans le **protocole BGP** pour identifier l’origine et le chemin des routes IP
  - Permet aux FAI, opérateurs cloud ou grandes entreprises de gérer leur propre routage
  - Il existe deux types : **public** (sur Internet) et **privé** (pour usage interne)

- **Rôles & fonctions**  
  - Assurer la **connectivité Internet autonome**
  - **Publier des plages IP** via BGP
  - Gérer les **politiques de routage** avec d’autres ASN (peerings, transit…)

- **Avantages et limites**  
  + Permet la souveraineté technique d’un réseau  
  + Favorise l’optimisation du trafic  
  – Mal utilisé, peut servir à des attaques (BGP hijack)  
  – Requiert une infrastructure et des compétences réseaux

- **Typologies ou variantes**  
  - ASN 16 bits (anciens) vs 32 bits (modernes)
  - ASN public vs ASN privé (64512–65534, 4200000000–4294967294)

---

## Cas d’usage & exemples concrets
- Un FAI déclare ses routes IP via son ASN (ex : AS3215 pour Orange)
- Une entreprise multinationale gère son propre ASN pour son backbone
- Une plateforme cloud utilise son ASN pour connecter ses datacenters
- Vérification de l’ASN d’une adresse IP via des outils comme `whois`, `bgp.he.net`

---

## Vulnérabilités, risques et abus connus
- **BGP Hijacking** : usurpation d’un ASN pour détourner du trafic
- Mauvaise configuration pouvant causer des pannes globales
- Exploitation d’ASN peu surveillés à des fins de spam ou de C2

---

## Mesures de sécurité & recommandations
- Utiliser **RPKI** pour signer cryptographiquement les annonces BGP
- Configurer des filtres stricts avec ses pairs (prefix/AS filtering)
- Surveiller les annonces BGP via des services externes (BGPMon, RIPE RIS, etc.)
- Documenter et maintenir les informations WHOIS à jour

---

## Standards, protocoles & normes associées
- BGP (RFC 4271)
- RPKI (RFC 6480+)
- IANA – gestion des blocs ASN
- NIST SP 800-189 – sécurisation du routage Internet

---

## Intégration dans un écosystème SSI
- Présent dans les outils de Threat Intelligence (source ASN d’une IP)
- Permet la détection d’activités réseau malveillantes ou frauduleuses
- Doit être maîtrisé dans les environnements cloud ou multi-sites

---

## Liens avec d’autres notions
- [[BGP]]
- [[RPKI]]
- [[Routage Internet]]
- [[RIPE NCC]]

---

## Sources, outils & références
- [IETF – RFC 4271 (BGP)](https://datatracker.ietf.org/doc/html/rfc4271)
- [BGP looking glass : bgp.he.net](https://bgp.he.net/)
- [NIST BGP Security Report](https://csrc.nist.gov/publications/detail/nistir/800-189/final)
- [ASN & BGP Explained (YouTube)](https://www.youtube.com/watch?v=t9ePqZ5t2fU)

---

## Mots-clés
`#cybersécurité` `#lexique` `#acronyme` `#ASN` `#BGP` `#routage` `#infrastructure` `#RPKI` `#Internet`
