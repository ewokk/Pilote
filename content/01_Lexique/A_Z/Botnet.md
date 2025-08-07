# Botnet

> **Type** : concept 
> **Niveau** : avancé 
> **Contexte** : offensif

---

## Définition
> Un botnet est un réseau de machines compromises (bots ou zombies) contrôlées à distance par un attaquant via un serveur de commande et contrôle (C2), utilisé pour mener des attaques à grande échelle comme le spam, le DDoS ou le vol de données.

---

## Explication détaillée
- **Origine ou historique**  
  - Apparu dans les années 2000 avec des malwares comme Agobot, il a connu une croissance fulgurante avec la généralisation d’Internet et des objets connectés.
- **Fonctionnement technique**  
  - Chaque machine infectée rejoint un réseau contrôlé par l’attaquant.
  - Communication via C2 centralisé (IRC, HTTP, etc.) ou P2P (plus résilient).
  - Permet d’exécuter des actions coordonnées (attaques, mise à jour, exfiltration).
- **Rôles & fonctions**  
  - Force de frappe décentralisée pour le cybercrime ou le sabotage.
  - Location comme service (Botnet-as-a-Service).
- **Avantages et limites**  
  - Dispersé, scalable, difficile à éradiquer complètement.
  - Vulnérable à la coupure du C2 ou au démantèlement coordonné.
- **Typologies ou variantes**  
  - Botnet centralisé, P2P, IoT, dormant (sleeper), polymorphe.

---

## Cas d’usage & exemples concrets
- Botnet Mirai (2016) : attaque massive contre Dyn DNS.
- Spam à grande échelle depuis des dizaines de milliers de PC zombies.
- Utilisation d’un botnet pour voler des identifiants bancaires.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Contrôle massif et silencieux d’un grand nombre de machines.
- Difficulté de détection à l’échelle individuelle.
- Risque d’abus d’objets connectés mal sécurisés.

---

## Mesures de sécurité & recommandations
- Détection comportementale (trafic C2, comportements réseau).
- Partage d’informations (CTI) pour identifier les infrastructures malveillantes.
- Patch management et restrictions réseau (sortants/entrants).
- Coopération entre CERTs, FAI et éditeurs de sécurité.

---

## Standards, protocoles & normes associées
- RFC 6561 – Recommendations for the Remediation of Bots
- MITRE ATT&CK – T1095, T1105 (command and control)
- NIST SP 800-61 – Response to Botnet Attacks

---

## Intégration dans un écosystème SSI
- Cible directe de la surveillance réseau et des SOC.
- Composante critique des scénarios de gestion de crise cyber.
- Nécessite une stratégie coordonnée de détection et réponse.

---

## Liens avec d’autres notions
- [[Bot]]
- [[Command and Control]]
- [[Malware]]

---

## Sources, outils & références
- [Documentation officielle](https://www.cert.ssi.gouv.fr/)
- [🛠️ Outils ou solutions associées](https://www.shadowserver.org/)
- [Articles techniques, blogs spécialisés](https://blog.cloudflare.com/tag/botnet/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=Jt25w0DwL_8)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#botnet` `#attaque` `#c2`
