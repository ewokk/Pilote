# BGP

> **Type** : protocole  `#protocole`  
> **Niveau** : avancé 
> **Contexte** : réseau

---

## Définition
> BGP (Border Gateway Protocol) est le protocole de routage utilisé pour échanger les informations de connectivité entre les différents réseaux autonomes (AS) qui composent Internet. Il joue un rôle central dans le fonctionnement d’Internet.

---

## Explication détaillée
- **Origine ou historique**  
  - Défini initialement en 1989 (RFC 1105), BGP est actuellement en version 4 (RFC 4271).
  - Il remplace le protocole EGP (Exterior Gateway Protocol).
- **Fonctionnement technique**  
  - BGP permet à des AS (Autonomous Systems) de s’échanger les routes IP qu’ils peuvent atteindre.
  - Utilise TCP (port 179) pour établir des sessions de peering.
  - Fonctionne par annonces de préfixes IP, avec des politiques de filtrage, préférences, poids, etc.
- **Rôles & fonctions**  
  - Maintient la table mondiale de routage Internet.
  - Gère les routes entrantes et sortantes d’un opérateur.
- **Avantages et limites**  
  - Hautement personnalisable pour les politiques de routage.
  - Pas de validation cryptographique native : vulnérable aux détournements.
- **Typologies ou variantes**  
  - BGP externe (eBGP) entre AS différents, BGP interne (iBGP) au sein d’un AS.

---

## Cas d’usage & exemples concrets
- Un fournisseur d’accès Internet utilise BGP pour annoncer ses plages d’IP.
- Une entreprise multinationale utilise BGP pour relier ses sites via plusieurs opérateurs.
- Gestion de redondance et de haute disponibilité via BGP multihoming.

---

## ⚠️ Vulnérabilités, risques et abus connus
- BGP Hijacking : annonce malveillante de routes vers des IP qui ne nous appartiennent pas.
- BGP Leak : propagation involontaire de routes internes.
- Absence de chiffrement, pas d’authentification par défaut.

---

## Mesures de sécurité & recommandations
- Implémenter RPKI (Resource Public Key Infrastructure) pour valider les routes.
- Filtrage strict des annonces BGP (prefix-list, AS-path).
- Surveillance continue via des outils comme BGPMon, RIPE RIS.
- Adoption progressive de BGPsec.

---

## Standards, protocoles & normes associées
- RFC 4271 (BGP-4)
- RFC 6811 (BGP Origin Validation)
- RFC 8205 (BGPsec Protocol Specification)

---

## Intégration dans un écosystème SSI
- Critique pour les opérateurs et FAI.
- À surveiller dans une stratégie de défense des infrastructures réseau.
- Rôle central dans la résilience d’Internet face aux attaques systémiques.

---

## Liens avec d’autres notions
- [[BGP hijacking]]
- [[RPKI]]
- [[Routage]]

---

## Sources, outils & références
- [Documentation officielle](https://datatracker.ietf.org/doc/html/rfc4271)
- [🛠️ Outils ou solutions associées](https://rpki-validator.ripe.net/)
- [Articles techniques, blogs spécialisés](https://blog.cloudflare.com/deep-dive-bgp/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=_VzVzg2T5Gg)

---

## Mots-clés
`#cybersécurité` `#lexique` `#protocole` `#bgp` `#routage` `#internet`
