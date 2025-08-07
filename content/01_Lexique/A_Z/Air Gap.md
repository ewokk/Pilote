# Air Gap

> **Type** : concept 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : défensif, industriel `#industriel`, gouvernance

---

## Définition
> Un **air gap** est une mesure de sécurité physique qui consiste à **isoler totalement un système ou un réseau** de tout accès à Internet ou à d’autres réseaux non sécurisés, pour éviter toute intrusion externe.

---

## Explication détaillée
- **Origine ou historique**  
  Utilisé historiquement dans les systèmes militaires ou critiques pour garantir la confidentialité absolue, notamment dans les environnements industriels, les SCADA ou les systèmes gouvernementaux sensibles.

- **Fonctionnement technique**  
  - Le système air-gapped n’a **aucune interface réseau active** vers l’extérieur
  - Les transferts de données se font **manuellement** (USB, CD, disques externes)
  - Nécessite une discipline opérationnelle forte pour éviter les ponts involontaires

- **Rôles & fonctions**  
  - Protéger des attaques réseau et du cyber-espionnage
  - Isoler les systèmes critiques ou sensibles
  - Réduire la surface d’attaque

- **Avantages et limites**  
  + Très haut niveau d’isolation  
  + Réduction drastique des vecteurs d’attaque réseau  
  – Complexité opérationnelle (transferts manuels, mises à jour)  
  – Ne protège pas des menaces internes (clés USB infectées, insiders)

- **Typologies ou variantes**  
  - Air gap total (aucune connexion physique)  
  - Air gap logique (firewall durci, DMZ étanches)  
  - Data diode (transfert unidirectionnel contrôlé)

---

## Cas d’usage & exemples concrets
- Centres de contrôle industriel (ICS/SCADA)
- Réseaux classifiés (armée, gouvernement)
- Réseau de vote électronique isolé
- Environnement de tests de malware

---

## Vulnérabilités, risques et abus connus
- Contournement par périphériques amovibles infectés (ex : Stuxnet via clé USB)
- Interférences électromagnétiques ou attaques par canaux cachés
- Mauvaise gestion des supports physiques
- Confusion entre isolation physique et sécurité absolue

---

## Mesures de sécurité & recommandations
- Contrôle strict des supports amovibles (autorisation, inspection antivirus)
- Surveillance vidéo, accès restreint aux salles sécurisées
- Utilisation de data diodes pour échanges nécessaires
- Procédures rigoureuses pour mise à jour ou transfert de données

---

## Standards, protocoles & normes associées
- NIST SP 800-53 (AC-4, SC-7 sur l’isolation réseau)
- ISO/IEC 27019 (systèmes industriels)
- Recommandations ANSSI pour les systèmes industriels

---

## Intégration dans un écosystème SSI
- Dernier rempart dans la défense en profondeur
- Complémentarité avec les solutions de détection physique et logique
- S’intègre dans les politiques de sécurité des systèmes critiques

---

## Liens avec d’autres notions
- [[SCADA]]
- [[Data Diode]]
- [[Contrôle d’accès physique]]
- [[Stuxnet]]

---

## Sources, outils & références
- [ANSSI – sécurité des systèmes industriels](https://www.ssi.gouv.fr/guide/securite-des-systemes-industriels/)
- [Bastion de transfert (Ex: Stormshield, Gatewatcher)](https://www.stormshield.com/)
- [Exemples d’attaques contre des air gaps](https://arxiv.org/abs/2003.12027)
- [Air Gap Explained (YouTube)](https://www.youtube.com/watch?v=xFiUBXMRrQo)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#airgap` `#industriel` `#isolation` `#SCADA` `#Stuxnet`
