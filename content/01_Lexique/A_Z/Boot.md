# Boot

> **Type** : concept 
> **Niveau** : base 
> **Contexte** : système `#système`

---

## Définition
> Le terme "boot" (ou démarrage) désigne le processus par lequel un ordinateur charge et initialise son système d’exploitation à partir de l’état éteint jusqu’à un système pleinement fonctionnel.

---

## Explication détaillée
- **Origine ou historique**  
  - Le terme vient de "bootstrap", une métaphore désignant l’auto-initialisation du système.
  - Présent dès les premiers ordinateurs avec le BIOS, puis UEFI.
- **Fonctionnement technique**  
  - Étapes classiques :
    1. Power-on (mise sous tension)
    2. POST (Power-On Self-Test)
    3. Chargement du firmware (BIOS/UEFI)
    4. Sélection du périphérique de démarrage
    5. Chargement du bootloader (ex : GRUB)
    6. Lancement du système d’exploitation
- **Rôles & fonctions**  
  - Charger le système d’exploitation.
  - Vérifier le matériel et préparer la configuration de base.
- **Avantages et limites**  
  - Critique pour la sécurité de la chaîne de confiance.
  - Point vulnérable aux malwares comme les bootkits ou rootkits.
- **Typologies ou variantes**  
  - Cold boot (à partir d’un arrêt total), warm boot (redémarrage), secure boot (vérification cryptographique).

---

## Cas d’usage & exemples concrets
- Démarrage sécurisé d’un système Windows via Secure Boot.
- Exploitation d’un BIOS vulnérable pour injecter un malware persistant.
- Réinitialisation d’un système via une clé USB bootable.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Bootkits : malwares infectant les premiers niveaux du démarrage.
- Modification du bootloader (ex : GRUB compromis).
- Bypass du Secure Boot si mal configuré.

---

## Mesures de sécurité & recommandations
- Activer Secure Boot et TPM (Trusted Platform Module).
- Mettre à jour régulièrement le firmware BIOS/UEFI.
- Restreindre les options de démarrage externe dans le BIOS.
- Vérifier les signatures des composants de démarrage.

---

## Standards, protocoles & normes associées
- UEFI Specification (UEFI Forum)
- TCG TPM Standards
- NIST SP 800-147 – BIOS Protection Guidelines

---

## Intégration dans un écosystème SSI
- Premier maillon de la chaîne de confiance d’un système.
- Étroitement lié à l’intégrité de l’environnement d’exécution.
- Nécessite une surveillance dans les environnements sensibles.

---

## Liens avec d’autres notions
- [[UEFI]]
- [[Secure Boot]]
- [[Bootkit]]

---

## Sources, outils & références
- [Documentation officielle](https://uefi.org/specifications)
- [🛠️ Outils ou solutions associées](https://www.coreboot.org/)
- [Articles techniques, blogs spécialisés](https://www.blackhat.com/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=qa2vnv5QdWQ)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#boot` `#bios` `#uefi` `#système` `#sécurité`
