# BLE

> **Type** : protocole  `#protocole`  
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : réseau

---

## Définition
> BLE (Bluetooth Low Energy) est un protocole de communication sans fil conçu pour les échanges de données à faible consommation d’énergie, souvent utilisé dans les objets connectés (IoT). Il est une évolution du Bluetooth classique, optimisé pour la durée de vie des batteries.

---

## Explication détaillée
- **Origine ou historique**  
  - Introduit en 2010 avec la spécification Bluetooth 4.0, développé par le Bluetooth SIG (Special Interest Group).
- **Fonctionnement technique**  
  - Utilise la bande des 2,4 GHz (comme le Bluetooth classique).
  - Fonctionne par advertising (diffusion) et connexions point-à-point.
  - Consomme très peu d’énergie grâce à des transmissions courtes et espacées.
- **Rôles & fonctions**  
  - Communication entre smartphones et capteurs, bracelets connectés, balises, serrures électroniques, etc.
  - Transfert de données, notifications, positionnement intérieur (beacons).
- **Avantages et limites**  
  - Faible consommation, large adoption, simplicité.
  - Portée limitée, débit réduit (~1 Mbps), sécurité perfectible.
- **Typologies ou variantes**  
  - BLE 4.x, BLE 5.0 (portée et débit améliorés), Mesh BLE.

---

## Cas d’usage & exemples concrets
- Montres connectées communiquant avec un téléphone.
- Systèmes de badge sans contact en entreprise.
- Beacons BLE dans les musées ou magasins pour guider les visiteurs.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Attaques MITM sur la phase de couplage (si non sécurisé).
- Sniffing de données si pas de chiffrement actif.
- Rejouement ou usurpation d’identité de périphériques.

---

## Mesures de sécurité & recommandations
- Utiliser le chiffrement BLE (LE Secure Connections).
- Limiter la portée et la durée d’activation des modules BLE.
- Filtrage des adresses MAC connues.
- Suivre les bonnes pratiques de l’ANSSI et du Bluetooth SIG.

---

## Standards, protocoles & normes associées
- Spécification Bluetooth Core (4.x, 5.x)
- NIST SP 800-121 (Guide to Bluetooth Security)
- ISO/IEC 29157 – Bluetooth Security

---

## Intégration dans un écosystème SSI
- Composant courant dans les systèmes IoT à sécuriser.
- Doit être intégré aux politiques de gestion des équipements mobiles.
- Source potentielle d’attaque physique ou de proximité.

---

## Liens avec d’autres notions
- [[IoT]]
- [[Attaque de proximité]]
- [[NFC]]

---

## Sources, outils & références
- [Documentation officielle](https://www.bluetooth.com/specifications/specs/)
- [🛠️ Outils ou solutions associées](https://github.com/virtualabs/btlejack)
- [Articles techniques, blogs spécialisés](https://www.pentestpartners.com/security-blog/bluetooth-low-energy-security/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=MHsP2SV5h1A)

---

## Mots-clés
`#cybersécurité` `#lexique` `#protocole` `#ble` `#bluetooth` `#iot`
