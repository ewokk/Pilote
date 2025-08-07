# Bot

> **Type** : concept 
> **Niveau** : base 
> **Contexte** : offensif

---

## Définition
> Un bot est un programme automatisé conçu pour effectuer des tâches répétitives sans intervention humaine. En cybersécurité, le terme désigne souvent un logiciel malveillant installé sur un système compromis, contrôlé à distance dans le cadre d’un botnet.

---

## Explication détaillée
- **Origine ou historique**  
  - Initialement créés pour des tâches utiles (chatbots, indexation web), les bots ont été détournés à des fins malveillantes (spam, DDoS, fraude).
- **Fonctionnement technique**  
  - Le bot s’installe silencieusement sur un hôte.
  - Il communique avec un serveur C2 (commande & contrôle).
  - Il peut exécuter des ordres : spam, scan de ports, attaque DDoS, exfiltration.
- **Rôles & fonctions**  
  - Exécuter des attaques de manière distribuée (via botnet).
  - Maintenir une persistance sur les systèmes compromis.
- **Avantages et limites**  
  - Discret, efficace, difficile à repérer en réseau large.
  - Peut être détecté par une surveillance comportementale ou EDR.
- **Typologies ou variantes**  
  - Bots IRC, HTTP, P2P, résidents ou furtifs, spécialisés (click fraud, spam, sniffing...).

---

## Cas d’usage & exemples concrets
- Envoi massif de spams à partir de bots zombies.
- Attaque DDoS coordonnée par un botnet (ex : Mirai).
- Bot utilisé pour espionner ou voler des données.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Installation via phishing, exploit kit, clé USB.
- Inclusion dans des botnets sans que l’utilisateur ne s’en rende compte.
- Usage de réseaux de bots dans des campagnes APT.

---

## Mesures de sécurité & recommandations
- Utiliser des EDR et des antivirus à jour.
- Monitorer les comportements réseau anormaux.
- Segmenter le réseau et limiter les connexions sortantes.
- Éduquer les utilisateurs sur les vecteurs d’infection courants.

---

## Standards, protocoles & normes associées
- MITRE ATT&CK : T1095 (botnet, commande à distance)
- ISO/IEC 27002 – sécurité des postes de travail
- NIST CSF – catégorie Detect

---

## Intégration dans un écosystème SSI
- Élément à surveiller activement dans les SOC.
- Source d’alerte pour les systèmes de détection comportementale.
- Peut compromettre la réputation d’un réseau (ex : IP blacklistée).

---

## Liens avec d’autres notions
- [[Botnet]]
- [[Command and Control]]
- [[Malware]]

---

## Sources, outils & références
- [Documentation officielle](https://www.ssi.gouv.fr/)
- [🛠️ Outils ou solutions associées](https://www.abuse.ch/)
- [Articles techniques, blogs spécialisés](https://www.cisa.gov/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=sl5Uaf-d85M)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#bot` `#malware` `#botnet`
