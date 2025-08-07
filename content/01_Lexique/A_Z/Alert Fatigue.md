# Alert Fatigue

> **Type** : concept 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : défensif, SOC `#soc`, détection `#détection`

---

## Définition
> Le terme **Alert Fatigue** désigne un phénomène dans lequel les analystes de sécurité deviennent **désensibilisés** ou **surchargés** par un trop grand nombre d’alertes de sécurité, ce qui peut conduire à l’**ignorance d’alertes critiques**.

---

## Explication détaillée
- **Origine ou historique**  
  D'abord observée dans le secteur médical (alarmes en réanimation), elle est désormais un sujet majeur en cybersécurité, notamment dans les centres SOC où l’automatisation génère des milliers d’alertes par jour.

- **Fonctionnement technique**  
  - Les outils de sécurité (SIEM, IDS, EDR…) émettent des alertes pour toute détection suspecte
  - Trop d’alertes → surcharge cognitive → baisse de vigilance
  - Problème aggravé par les faux positifs, doublons, alertes redondantes

- **Rôles & fonctions**  
  - Peut nuire à la détection des attaques réelles
  - Génère du stress et de la fatigue pour les analystes
  - Risque organisationnel majeur pour un SOC

- **Avantages et limites**  
  + Permet de détecter un grand nombre d’incidents potentiels  
  – Risque de **burnout des analystes**  
  – Baisse d'efficacité des équipes SOC  
  – Menace réelle d’attaque ignorée ou mal classée

- **Typologies ou variantes**  
  - Alert fatigue technique (volume brut élevé)
  - Alert fatigue cognitive (perte de concentration, automatisme)
  - Alert fatigue organisationnelle (pas de priorisation, pas de process)

---

## Cas d’usage & exemples concrets
- SOC recevant 30 000 alertes/jour, 98 % de faux positifs
- Ignorance d’une alerte contenant un malware réel car noyée dans le flux
- Détection non traitée dans un EDR faute de priorisation
- Analyste junior submergé par des alertes identiques répétitives

---

## Vulnérabilités, risques et abus connus
- Baisse de réactivité face aux vraies menaces
- Épuisement professionnel (turnover élevé dans les SOC)
- Fuite de données non détectée ou non traitée
- Exploitation par des APT discrets et persistants

---

## Mesures de sécurité & recommandations
- Mise en place de filtres, corrélation, et priorisation des alertes
- Automatisation intelligente (SOAR)
- Intégration de l’IA/ML pour classer les alertes
- Définir des SLA réalistes et un processus d’escalade
- Sensibilisation et soutien psychologique des analystes

---

## Standards, protocoles & normes associées
- MITRE D3FEND (défense active)
- NIST CSF – Fonction "Detect"
- ISO/IEC 27035 – gestion des incidents
- SANS SOC Analyst Lifecycle Framework

---

## Intégration dans un écosystème SSI
- Nécessite des playbooks bien définis
- Coordination avec CTI et automatisation SOAR
- Mesure de la charge des analystes via des KPIs

---

## Liens avec d’autres notions
- [[SOC]]
- [[SIEM]]
- [[SOAR]]
- [[Faux positif]]

---

## Sources, outils & références
- [Guide MITRE - Analyst Fatigue](https://attack.mitre.org/resources/)
- [Splunk, QRadar, Sentinel – gestion des alertes](https://www.splunk.com/)
- [Blog SANS - Combatting Alert Fatigue](https://www.sans.org/blog/)
- [Vidéo YouTube sur Alert Fatigue dans les SOC](https://www.youtube.com/watch?v=H5rYz6EyiZE)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#alertfatigue` `#SOC` `#SIEM` `#détection` `#fatigue` `#analyste`
