# Attaque de l’homme du milieu

> **Type** : technique  `#technique`  
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : interception `#interception`, réseau, confidentialité

---

## Définition
> Une **attaque de l’homme du milieu** (ou **Man-In-The-Middle – MITM**) consiste à **intercepter, altérer ou observer des communications** entre deux parties sans leur consentement, en se positionnant furtivement entre elles.

---

## Explication détaillée
- **Origine ou historique**  
  Ce type d’attaque est aussi ancien que les réseaux eux-mêmes. Il a évolué avec les protocoles, les technologies Wi-Fi, et les attaques sur le TLS.

- **Fonctionnement technique**  
  - L’attaquant intercepte les échanges réseau entre deux hôtes
  - Il peut simplement écouter (sniffing) ou modifier les données en transit
  - Il peut usurper un certificat, un ARP, un DNS ou injecter un proxy

- **Rôles & fonctions**  
  - Voler des identifiants ou des sessions
  - Modifier des requêtes ou des réponses à la volée
  - Espionner des communications chiffrées mal configurées
  - Exploiter les faiblesses des réseaux publics ou non segmentés

- **Avantages et limites**  
  + Très furtif si bien exécuté  
  + Peut cibler n’importe quel protocole (HTTP, FTP, DNS…)  
  – Souvent bloqué par TLS bien configuré  
  – Complexité accrue avec les mesures modernes de sécurité

- **Typologies ou variantes**  
  - ARP spoofing / DNS spoofing / proxy MITM
  - SSL stripping (forcer le passage de HTTPS vers HTTP)
  - Attaques Wi-Fi (Evil Twin, hotspot malveillant)
  - Hijack de session (cookie, token…)

---

## Cas d’usage & exemples concrets
- Vol de mots de passe via un hotspot Wi-Fi piégé
- Interception d’un login bancaire via SSL stripping
- Injection d’un JavaScript malveillant dans une page
- Analyse réseau lors d’un test d’intrusion Red Team

---

## Vulnérabilités, risques et abus connus
- Protocoles non chiffrés (HTTP, Telnet…)
- TLS mal configuré ou certificat auto-signé
- Réseaux Wi-Fi publics ou non segmentés
- Absence de vérification d’intégrité ou de certificat

---

## Mesures de sécurité & recommandations
- Utiliser **HTTPS partout** avec HSTS
- Valider les certificats SSL (PKI, OCSP)
- Segmentation réseau et VLAN
- Outils de détection d’ARP/DNS spoofing (IDS/IPS, arpwatch)
- Formation des utilisateurs à la prudence sur les réseaux ouverts

---

## Standards, protocoles & normes associées
- TLS/SSL, HSTS, DNSSEC
- RFC 5246 (TLS 1.2), RFC 8446 (TLS 1.3)
- ISO/IEC 27033 – sécurité réseau
- NIST SP 800-95 – Web Services Security

---

## Intégration dans un écosystème SSI
- À surveiller activement via les logs réseau ou EDR
- Souvent utilisé dans les scénarios Red Team et pentest
- Partie intégrante des campagnes de sensibilisation

---

## Liens avec d’autres notions
- [[MITM]]
- [[ARP spoofing – usurpation ARP]]
- [[SSL stripping]]
- [[Proxy inverse]]

---

## Sources, outils & références
- [OWASP MITM Attack](https://owasp.org/www-community/attacks/Man-in-the-middle_attack)
- [Bettercap, mitmproxy, Wireshark](https://www.mitmproxy.org/)
- [NIST TLS Guidelines](https://csrc.nist.gov/publications/detail/sp/800-52/rev-2/final)
- [MITM Attack Demo (YouTube)](https://www.youtube.com/watch?v=jU6tKRZ8rGk)

---

## Mots-clés
`#cybersécurité` `#lexique` `#technique` `#MITM` `#interception` `#confidentialité` `#TLS` `#WiFi`
