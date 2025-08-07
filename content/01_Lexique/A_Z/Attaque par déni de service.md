# Attaque par déni de service

> **Type** : technique  `#technique`  
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : disponibilité `#disponibilité`, infrastructure `#infrastructure`, continuité

---

## Définition
> Une **attaque par déni de service** (**DoS – Denial of Service**) est une attaque visant à **rendre indisponible un service, une application ou un système** en **saturant ses ressources** ou en exploitant une vulnérabilité logicielle.

---

## Explication détaillée
- **Origine ou historique**  
  Les premières attaques DoS datent des débuts d’Internet. Elles se sont développées avec des scripts automatisés, puis des outils plus sophistiqués. Très courantes à partir des années 2000.

- **Fonctionnement technique**  
  - **Saturation de ressources** : bande passante, CPU, RAM, fichiers
  - **Requêtes malveillantes ou répétitives** : ping flood, HTTP flood…
  - Exploitation de **bugs ou failles applicatives** pour planter un service

- **Rôles & fonctions**  
  - Perturber les services de l’entreprise (site web, messagerie…)
  - Nuire à la réputation ou à l’image
  - Faire diversion pour une attaque plus complexe (exfiltration, intrusion)
  - Revendication politique ou économique (hacktivisme)

- **Avantages et limites**  
  + Facile à exécuter avec peu de moyens  
  + Très visible et impactant pour l’organisation  
  – Difficile à maintenir dans le temps sans relais  
  – Traçabilité possible en cas de mauvaise couverture

- **Typologies ou variantes**  
  - DoS applicatif (HTTP, SQL, SMTP…)
  - DoS réseau (ICMP, SYN flood)
  - DoS logique (exploitation de bugs)
  - DoS réflexif (amplification via serveurs intermédiaires)

---

## Cas d’usage & exemples concrets
- Envoi massif de requêtes HTTP sur un serveur web
- Exploitation d’un bug provoquant un crash de service
- Utilisation d’un outil comme LOIC ou Hping3
- Blocage d’un service de messagerie d’entreprise

---

## Vulnérabilités, risques et abus connus
- Serveurs sans protection anti-flood ou rate limit
- Applications mal codées provoquant des exceptions fatales
- Infrastructure sur-provisionnée mais mal segmentée
- Absence de filtrage en amont du réseau

---

## Mesures de sécurité & recommandations
- Utiliser des **firewalls applicatifs** (WAF) et pare-feu anti-DDoS
- Configurer le **rate limiting** sur les points d’entrée
- Avoir une **capacité d’absorption (scalabilité, CDN, load balancer)**
- Surveiller les indicateurs réseau et applicatifs
- Prévoir un **plan de continuité (PCA/PRA)** incluant les attaques DoS

---

## Standards, protocoles & normes associées
- RFC 4732 – Considerations on DoS Attacks
- ISO/IEC 27001 – gestion de la continuité
- NIST SP 800-61 – gestion des incidents
- OWASP AppSensor / DoS cheat sheet

---

## Intégration dans un écosystème SSI
- Analyse de logs pour détecter des débuts de saturation
- Mécanismes d’alerte dans les SOC et les SIEM
- Partie intégrante des plans de crise informatique

---

## Liens avec d’autres notions
- [[DDoS]]
- [[Plan de continuité]]
- [[Scalabilité]]
- [[WAF]]

---

## Sources, outils & références
- [RFC 4732 – DoS Attacks](https://datatracker.ietf.org/doc/html/rfc4732)
- [Outils : LOIC, Hping, Slowloris](https://tools.kali.org/)
- [OWASP DoS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Denial_of_Service_Cheat_Sheet.html)
- [DoS Attack Explained (YouTube)](https://www.youtube.com/watch?v=Y41rZ1nQYyI)

---

## Mots-clés
`#cybersécurité` `#lexique` `#technique` `#DoS` `#attaque` `#indisponibilité` `#infrastructure` `#résilience`
