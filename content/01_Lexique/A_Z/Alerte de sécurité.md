# Alerte de sécurité

> **Type** : concept 
> **Niveau** : base 
> **Contexte** : défensif, SOC `#soc`, surveillance `#surveillance`

---

## Définition
> Une **alerte de sécurité** est une notification émise automatiquement ou manuellement lorsqu’un **événement suspect ou potentiellement malveillant** est détecté dans un système d'information.

---

## Explication détaillée
- **Origine ou historique**  
  Avec la montée en puissance des outils de surveillance (IDS, SIEM, EDR…), les alertes de sécurité sont devenues un élément central des opérations de cybersécurité.

- **Fonctionnement technique**  
  - Les outils de détection analysent les journaux, les flux réseau, les comportements systèmes…
  - Lorsqu’une **règle** ou un **seuil** est dépassé, une alerte est générée
  - Elle est **corrélée, catégorisée et priorisée** dans des outils (SIEM, SOAR)

- **Rôles & fonctions**  
  - Prévenir l'équipe SOC ou RSSI d’un événement suspect
  - Lancer un processus d’investigation ou de remédiation
  - Fournir une trace pour les audits et analyses post-incident

- **Avantages et limites**  
  + Réactivité accrue face aux menaces  
  + Automatisation de la détection  
  – Risque de faux positifs ou d’alertes redondantes  
  – Dépend de la qualité des règles et des sources

- **Typologies ou variantes**  
  - Alerte faible, moyenne, critique (selon l’impact ou la probabilité)
  - Alerte réseau, système, applicative, utilisateur
  - Alerte contextuelle (corrélée) vs brute

---

## Cas d’usage & exemples concrets
- Alerte déclenchée par un EDR suite à une élévation de privilège
- Alerte réseau pour flux sortant vers une IP malveillante
- SIEM générant une alerte pour échec répété de connexion
- Notification d’un antivirus pour fichier suspect

---

## Vulnérabilités, risques et abus connus
- Faux positifs (alerte inutile)
- Alertes ignorées (alert fatigue)
- Mauvais paramétrage des seuils ou règles
- Alerte déclenchée trop tard (post-intrusion)

---

## Mesures de sécurité & recommandations
- Ajuster les seuils et règles selon le contexte
- Corréler les alertes pour réduire le bruit
- Prioriser par criticité et type d’actif concerné
- Utiliser des playbooks de traitement
- Automatiser via SOAR les réponses simples

---

## Standards, protocoles & normes associées
- NIST CSF – Detect & Respond
- ISO/IEC 27035 (gestion des incidents)
- STIX & TAXII (standard de format et transport d’alertes)
- MITRE ATT&CK – classification des techniques déclencheuses

---

## Intégration dans un écosystème SSI
- Générées par les outils SIEM, EDR, IDS, WAF, antivirus…
- Traitement via SOC, CTI ou équipes dédiées
- Analyse post-mortem dans les plans de réponse à incident

---

## Liens avec d’autres notions
- [[SIEM]]
- [[EDR]]
- [[SOC]]
- [[Incident de sécurité]]

---

## Sources, outils & références
- [NIST Computer Security Incident Handling Guide](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf)
- [Splunk, Sentinel – gestion d’alertes](https://www.splunk.com/)
- [Guide ANSSI sur la détection](https://www.ssi.gouv.fr/publication/)
- [Démo gestion d’alertes SIEM (YouTube)](https://www.youtube.com/watch?v=jDZzCJhIOoI)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#alerte` `#sécurité` `#SOC` `#détection` `#SIEM` `#incident`
