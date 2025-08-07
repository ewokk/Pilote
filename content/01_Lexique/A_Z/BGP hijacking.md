# BGP hijacking

> **Type** : attaque 
> **Niveau** : avancé 
> **Contexte** : offensif

---

## Définition
> Le BGP hijacking est une attaque réseau dans laquelle un acteur malveillant annonce des routes IP qui ne lui appartiennent pas via le protocole BGP, redirigeant ainsi le trafic Internet vers des systèmes sous son contrôle.

---

## Explication détaillée
- **Origine ou historique**  
  - Connu depuis les années 2000, ce type d’attaque a touché plusieurs opérateurs majeurs, souvent par erreur ou malveillance (YouTube/Pakistan Telecom, 2008).
- **Fonctionnement technique**  
  - Un ASN annonce des préfixes IP non autorisés.
  - D'autres routeurs BGP croient ces annonces légitimes et modifient leurs tables de routage.
  - Le trafic vers ces IP est alors détourné (blackhole, interception, manipulation).
- **Rôles & fonctions**  
  - Intercepter des données (Man-in-the-Middle).
  - Saboter la disponibilité d’un service (DoS).
  - Mener des campagnes d’espionnage ou de vol de cryptomonnaie.
- **Avantages et limites**  
  - Peu de mécanismes de validation dans le BGP classique.
  - Détectable via des outils de surveillance BGP.
- **Typologies ou variantes**  
  - Prefix Hijack, Subprefix Hijack (plus spécifique), AS-path manipulation.

---

## Cas d’usage & exemples concrets
- En 2018, du trafic vers Google a été redirigé par un opérateur nigérian.
- Détournement de trafic de cryptomonnaie via une annonce de route malveillante.
- Utilisation dans le cadre de campagnes APT pour exfiltration de données.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Absence de validation des routes BGP (pas de signature native).
- Possibilité de provoquer des perturbations Internet à grande échelle.
- Impact sur la confidentialité et la disponibilité des données.

---

## Mesures de sécurité & recommandations
- Déployer RPKI pour valider les annonces d’itinéraires.
- Configurer des filtres stricts (prefix-list, route policies).
- Mettre en place une veille avec des outils comme BGPStream ou BGPMon.
- Coopération entre FAI et adoption de MANRS.

---

## Standards, protocoles & normes associées
- RPKI (RFC 6810)
- BGPsec (RFC 8205)
- Normes MANRS (Mutually Agreed Norms for Routing Security)

---

## Intégration dans un écosystème SSI
- Surveillance essentielle pour les SOC opérateurs.
- Composante critique de la résilience réseau.
- À intégrer dans les plans de réponse aux incidents réseau.

---

## Liens avec d’autres notions
- [[BGP]]
- [[RPKI]]
- [[Man-in-the-Middle]]

---

## Sources, outils & références
- [Documentation officielle](https://datatracker.ietf.org/doc/html/rfc4272)
- [🛠️ Outils ou solutions associées](https://bgpstream.caida.org/)
- [Articles techniques, blogs spécialisés](https://blog.cloudflare.com/bgp-hijacking/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=G1qdc9g7I4Q)

---

## Mots-clés
`#cybersécurité` `#lexique` `#attaque` `#bgp` `#hijacking`
