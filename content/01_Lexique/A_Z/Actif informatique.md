# Actif informatique

> **Type** : concept
> **Niveau** : base
> **Contexte** : gouvernance, audit, défensif

---

## Définition

> Un **actif informatique** est toute ressource ayant de la valeur pour une organisation et nécessitant une protection. Cela peut inclure des éléments matériels, logiciels, informationnels ou humains.

---

## Explication détaillée

- **Origine ou historique**  
  Le concept provient de la gestion des risques (notamment ISO 27005) où les actifs constituent les éléments à protéger contre les menaces.

- **Fonctionnement technique**  
  Un actif peut être :
  - **Matériel** : serveur, PC, routeur, smartphone…
  - **Logiciel** : système d’exploitation, application, base de données…
  - **Données** : fichiers, bases de données, documents confidentiels…
  - **Humain** : utilisateurs, administrateurs, prestataires…
  - **Immatériel** : image de marque, propriété intellectuelle

- **Rôles & fonctions**  
  - Élément central de l’analyse de risque
  - Base pour définir les mesures de sécurité (classification, protection)
  - Objet des politiques de sécurité de l’information

- **Avantages et limites**  
  - Approche globale de la sécurité  
  - Permet de prioriser la protection selon la valeur des actifs  
  – Difficile d’identifier et d’inventorier tous les actifs dans un SI complexe

- **Typologies ou variantes**  
  - Actifs primaires (information) vs supports (infrastructure)
  - Classification par criticité ou sensibilité (confidentiel, public...)

---

## Cas d’usage & exemples concrets

- Inventaire des actifs dans un outil de gestion IT (CMDB)
- Évaluation des risques EBIOS ou ISO 27005
- Déploiement de DLP sur les données sensibles
- Cartographie des actifs critiques dans un SOC

---

## Vulnérabilités, risques et abus connus

- Oubli d’actifs non inventoriés (shadow IT)
- Mauvaise classification → protection insuffisante
- Absence de traçabilité ou de propriétaire désigné
- Perte ou vol de données sensibles

---

## Mesures de sécurité & recommandations

- Mettre à jour régulièrement l’inventaire des actifs
- Attribuer un responsable (owner) à chaque actif critique
- Classifier les actifs selon leur sensibilité et usage
- Appliquer des protections proportionnées à la valeur

---

## Standards, protocoles & normes associées

- ISO/IEC 27001 & 27005 (sécurité de l'information, gestion des risques)
- NIST SP 800-53 (famille "System and Communications Protection")
- ITIL (gestion des actifs, CMDB)

---

## Intégration dans un écosystème SSI

- Base de l’analyse de risque et de la gouvernance SSI
- Entrée du processus EBIOS RM
- Indispensable à la gestion des incidents et du cycle de vie des systèmes

---

## Liens avec d’autres notions

- [[EBIOS RM]]
- [[Analyse de risque]]
- [[CMDB (Configuration Management Database)]]

---

## Sources, outils & références

- [ISO/IEC 27005 - Gestion des risques](https://www.iso.org/standard/75281.html)
- [Logiciels d’inventaire IT (GLPI, ServiceNow…)](https://glpi-project.org/)
- [ANSSI - Guide gestion des actifs](https://www.ssi.gouv.fr/publication/gestion-des-actifs/)
- [Vidéo explicative EBIOS & actifs](https://www.youtube.com/watch?v=J6cBavVbUQQ)
