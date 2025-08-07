# BAS

> **Type** : acronyme 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : défensif

---

## Définition
> BAS (Breach and Attack Simulation) désigne une technologie permettant de simuler en continu des attaques réelles sur un système d’information afin d’évaluer l’efficacité des défenses en place.

---

## Explication détaillée
- **Origine ou historique**  
  - Apparue dans les années 2010, cette approche s’inspire des tests d’intrusion automatisés mais vise une surveillance continue et proactive.
- **Fonctionnement technique**  
  - Simulation d’attaques basées sur des techniques réelles (MITRE ATT&CK).
  - Analyse des réactions des contrôles de sécurité (SIEM, EDR, pare-feux...).
  - Rapports sur les chemins d’attaque, les détections et les failles résiduelles.
- **Rôles & fonctions**  
  - Tester les capacités de détection, de prévention et de réponse.
  - Identifier les angles morts de l’infrastructure de sécurité.
- **Avantages et limites**  
  - Simulation réaliste et continue, complémentaire aux pentests ponctuels.
  - Peut être perçu comme intrusif ou générer des faux positifs.
- **Typologies ou variantes**  
  - BAS local vs cloud, orienté réseau ou endpoint, scénarios personnalisés vs standards.

---

## Cas d’usage & exemples concrets
- Vérification automatique des règles SIEM après un changement de configuration.
- Simulation d’un ransomware pour tester les mécanismes de réponse à incident.
- Identification des maillons faibles dans un parcours d’attaque interne.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Risque de perturbation si mal configuré.
- Faux sentiment de sécurité si les scénarios sont limités.
- Dépendance excessive à des simulations automatisées.

---

## Mesures de sécurité & recommandations
- Intégrer BAS dans un cycle d’amélioration continue SSI.
- Compléter par des pentests manuels et des audits humains.
- Adapter les scénarios aux menaces réelles pesant sur l’organisation.
- Documenter les résultats et les intégrer dans le plan de sécurité.

---

## Standards, protocoles & normes associées
- MITRE ATT&CK
- NIST SP 800-53 (RA, CA)
- ISO/IEC 27005 (gestion des risques)

---

## Intégration dans un écosystème SSI
- Complète les SOC et les outils de détection.
- Alimente les dashboards de gouvernance SSI.
- Peut déclencher des alertes et des jeux de crise internes.

---

## Liens avec d’autres notions
- [[Test d’intrusion]]
- [[Red Team]]
- [[MITRE ATT&CK]]

---

## Sources, outils & références
- [Documentation officielle](https://attack.mitre.org/)
- [🛠️ Outils ou solutions associées](https://www.attackiq.com/)
- [Articles techniques, blogs spécialisés](https://www.sans.org/blog/breach-and-attack-simulation/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=8DXEm0vbv2U)

---

## Mots-clés
`#cybersécurité` `#lexique` `#acronyme` `#bas` `#simulation` `#test`
