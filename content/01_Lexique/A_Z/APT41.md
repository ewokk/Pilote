# APT41

> **Type** : acronyme 
> **Niveau** : avancé 
> **Contexte** : offensif, cybercriminalité `#cybercriminalité`, espionnage

---

## Définition
> **APT41** est un groupe de menaces avancées persistantes attribué à **la Chine**, connu pour mener à la fois des campagnes de **cyberespionnage étatique** et des **attaques cybercriminelles à but lucratif**.

---

## Explication détaillée
- **Origine ou historique**  
  Actif depuis au moins 2012, APT41 (aussi appelé Barium, Winnti, Double Dragon…) a été documenté par FireEye/Mandiant pour son double profil : opérations commanditées par l’État chinois et actions financières opportunistes.

- **Fonctionnement technique**  
  - Large arsenal de malwares sur mesure (ShadowPad, PlugX, Winnti…)
  - Utilisation de vulnérabilités zero-day (Citrix, Zoho, Pulse Secure…)
  - Techniques sophistiquées de persistence et d’évasion
  - Compromission de chaînes d’approvisionnement logicielles

- **Rôles & fonctions**  
  - Espionnage industriel (technologies, santé, jeux vidéo, etc.)
  - Monétisation par ransomware, crypto-minage, cartes bancaires
  - Compromission de logiciels légitimes pour diffuser du code malveillant

- **Avantages et limites**  
  + Capacité technique élevée et rapidité d’adaptation  
  + Accès privilégié à des outils d’État  
  – Révélé publiquement par plusieurs enquêtes judiciaires  
  – Certaines campagnes ont laissé des traces (télémetrie, logs)

- **Typologies ou variantes**  
  - Campagnes ciblées sur les secteurs pharma, santé, éducation
  - Utilisation d’attaques supply chain
  - Backdoors furtives activées à distance

---

## Cas d’usage & exemples concrets
- Compromission de logiciels populaires (CCleaner, Netsarang…)
- Intrusions dans des universités occidentales pour le compte d’agences d’État
- Activités de crypto-minage sur des infrastructures cloud
- Espionnage d’éditeurs de jeux en ligne

---

## Vulnérabilités, risques et abus connus
- Exploitation massive de vulnérabilités VPN ou RDP
- Utilisation d’outils “vivre-off-the-land” (WMI, Powershell…)
- Accès longue durée non détecté
- Infiltration de mises à jour logicielles pour diffuser des malwares

---

## Mesures de sécurité & recommandations
- Surveillance des signatures liées (ShadowPad, Winnti)
- Détection comportementale (EDR, SIEM)
- Mise à jour immédiate des systèmes exposés (VPN, ERP…)
- Audits réguliers des dépendances logicielles
- Renforcement des accès et supervision cloud

---

## Standards, protocoles & normes associées
- MITRE ATT&CK – Groupe APT41 (G0096)
- Normes ISO 27035 – réponse à incident
- Recommandations CISA / NCSC

---

## Intégration dans un écosystème SSI
- Priorité de surveillance dans les services de threat intelligence
- Suivi par les CERT nationaux (FR, US, UK…)
- Référence pour les tests Red Team avancés

---

## Liens avec d’autres notions
- [[APT]]
- [[Cybercriminalité]]
- [[Supply chain]]
- [[ShadowPad]]

---

## Sources, outils & références
- [MITRE ATT&CK – APT41](https://attack.mitre.org/groups/G0096/)
- [Rapports FireEye/Mandiant sur APT41](https://www.mandiant.com/resources)
- [Actes d’inculpation du FBI (2020)](https://www.justice.gov/opa/pr/two-chinese-hackers-working-ministry-state-security-charged-global-computer-intrusion)
- [APT41 Explained – YouTube](https://www.youtube.com/watch?v=iMQ9DhAlqS4)

---

## Mots-clés
`#cybersécurité` `#lexique` `#acronyme` `#APT41` `#cyberespionnage` `#chine` `#cybercriminalité` `#supplychain` `#malware`
