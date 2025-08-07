# BloodHound

> **Type** : outil  `#outil`  
> **Niveau** : avancé 
> **Contexte** : offensif

---

## Définition
> BloodHound est un outil d’analyse de graphe conçu pour cartographier les relations d’accès et de privilèges dans un environnement Active Directory (AD), afin d’identifier les chemins potentiels d’élévation de privilèges.

---

## Explication détaillée
- **Origine ou historique**  
  - Créé en 2016 par les chercheurs de SpecterOps, initialement destiné aux Red Teams.
  - Aujourd’hui utilisé aussi bien par les attaquants que les défenseurs (Blue Teams).
- **Fonctionnement technique**  
  - Collecte les relations AD (droits, groupes, sessions, GPO...).
  - Représente les objets (utilisateurs, ordinateurs, groupes) comme des nœuds d’un graphe.
  - Utilise Neo4j comme moteur de base de données et d’analyse.
- **Rôles & fonctions**  
  - Détecter les chemins d’attaque (privilege escalation).
  - Visualiser les dépendances et héritages de droits complexes.
  - Auditer la sécurité d’un domaine AD.
- **Avantages et limites**  
  - Très puissant pour les environnements complexes.
  - Peut générer de faux positifs ou être bloqué par des contrôles EDR.
- **Typologies ou variantes**  
  - SharpHound (outil de collecte de données), GUI BloodHound, version Azure (BloodHound Enterprise).

---

## Cas d’usage & exemples concrets
- Une Red Team identifie un chemin d’escalade de privilège vers Domain Admin.
- Un audit Blue Team révèle des délégations mal configurées entre OU.
- Cartographie de la surface d’attaque interne pour un SOC.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Exposition de chemins d’attaque critiques s’il est mal utilisé.
- Utilisable par des attaquants internes pour pivoter dans le réseau.
- Risque de faux sentiment de sécurité si l’analyse est incomplète.

---

## Mesures de sécurité & recommandations
- Restreindre les droits d’accès aux outils de collecte.
- Surveiller les requêtes LDAP suspectes ou en masse.
- Corriger les chemins d’escalade identifiés (GPO, ACL, groupes).
- Mettre à jour régulièrement les contrôles d’accès.

---

## Standards, protocoles & normes associées
- LDAP, Kerberos, DACL, SID
- MITRE ATT&CK – T1069, T1484
- Recommandations ANSSI sur AD

---

## Intégration dans un écosystème SSI
- Outil précieux pour les Red Teams et les audits internes.
- Complémentaire des solutions de SIEM et d’analyse d’identité.
- Utilisable en simulation (Purple Team) pour valider des protections.

---

## Liens avec d’autres notions
- [[Active Directory]]
- [[Red Team]]
- [[Privileged Escalation]]

---

## Sources, outils & références
- [Documentation officielle](https://bloodhound.readthedocs.io/)
- [🛠️ Outils ou solutions associées](https://github.com/BloodHoundAD/BloodHound)
- [Articles techniques, blogs spécialisés](https://posts.specterops.io/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=KKpJp2bGQwY)

---

## Mots-clés
`#cybersécurité` `#lexique` `#outil` `#bloodhound` `#active-directory` `#graphe`
