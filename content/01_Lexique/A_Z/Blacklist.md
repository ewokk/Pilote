# Blacklist

> **Type** : concept 
> **Niveau** : base 
> **Contexte** : défensif

---

## Définition
> Une blacklist (liste noire) est un mécanisme de sécurité consistant à bloquer explicitement l’accès à des entités jugées malveillantes ou non autorisées, telles que des adresses IP, des domaines, des emails, ou des applications.

---

## Explication détaillée
- **Origine ou historique**  
  - Employée dès les débuts du filtrage réseau et du contrôle d’accès. Concept également utilisé en messagerie, antivirus, et filtrage web.
- **Fonctionnement technique**  
  - Liste d’éléments interdits comparée aux flux ou requêtes entrantes/sortantes.
  - Mise à jour manuelle ou automatique via des bases externes (DNSBL, RBL...).
- **Rôles & fonctions**  
  - Bloquer l’accès à des ressources ou entités connues comme nuisibles.
  - Réduire l’exposition aux menaces identifiées.
- **Avantages et limites**  
  - Facile à implémenter et à comprendre.
  - Inefficace contre des menaces inconnues ou changeantes.
- **Typologies ou variantes**  
  - IP blacklist, email blacklist, URL/domain blacklist, fichier exécutable interdit.

---

## Cas d’usage & exemples concrets
- Blocage des adresses IP d’attaquants identifiés.
- Interdiction d’accès à des sites non professionnels dans une entreprise.
- Filtrage des emails provenant de domaines malveillants connus.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Faux positifs : blocage de ressources légitimes.
- Contournement simple via changement d’IP ou d’URL.
- Liste non mise à jour régulièrement devient inefficace.

---

## Mesures de sécurité & recommandations
- Compléter les blacklists par des mécanismes proactifs (heuristique, ML).
- Utiliser des sources fiables et mises à jour automatiquement.
- Surveiller les faux positifs et adapter dynamiquement les règles.
- Envisager l’usage de whitelists et de listes grises selon les contextes.

---

## Standards, protocoles & normes associées
- DNSBL (DNS-based Blackhole List)
- Spamhaus, SORBS, etc.
- RFC 5782 – DNS Blacklists

---

## Intégration dans un écosystème SSI
- Intégrée dans les firewalls, antivirus, filtres web, passerelles email.
- Source complémentaire d’IOC pour les SIEM.
- Partie des contrôles d’accès logiques.

---

## Liens avec d’autres notions
- [[Whitelist]]
- [[SIEM]]
- [[Filtrage réseau]]

---

## Sources, outils & références
- [Documentation officielle](https://www.spamhaus.org/)
- [🛠️ Outils ou solutions associées](https://www.dnsbl.info/)
- [Articles techniques, blogs spécialisés](https://www.cloudflare.com/learning/ddos/glossary/blacklist/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=GRv-tp1D8hM)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#blacklist` `#filtrage` `#accès`
