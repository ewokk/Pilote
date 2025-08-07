# BootGuard

> **Type** : technologie 
> **Niveau** : avancé 
> **Contexte** : système `#système`

---

## Définition
> Intel BootGuard est une technologie de sécurité matérielle intégrée dans certaines plateformes Intel, permettant de vérifier l’intégrité et l’authenticité du processus de démarrage (boot) via des signatures cryptographiques, dès le tout premier code exécuté.

---

## Explication détaillée
- **Origine ou historique**  
  - Introduite par Intel à partir de ses plateformes Haswell (2013), pour contrer les attaques sur le firmware BIOS/UEFI.
- **Fonctionnement technique**  
  - BootGuard vérifie que le code du BIOS/UEFI n’a pas été modifié.
  - Utilise une clé de vérification cryptographique (fuse OTP + signature RSA).
  - Fonctionne en deux modes :
    - Mesure (logging sans blocage)
    - Vérification (blocage si modification détectée)
- **Rôles & fonctions**  
  - Protéger contre les bootkits, rootkits et modifications firmware malveillantes.
  - Assurer une racine de confiance matérielle dès le premier cycle CPU.
- **Avantages et limites**  
  - Sécurité renforcée avant même le démarrage du système.
  - Peut être verrouillé définitivement (risque si mal configuré ou compromis en usine).
- **Typologies ou variantes**  
  - Couplé à d’autres technologies : Intel TXT, PTT, Secure Boot.

---

## Cas d’usage & exemples concrets
- Déploiement dans des environnements sensibles (militaire, industriel).
- Ordinateurs professionnels avec BIOS signé par le constructeur.
- Protection contre des attaques persistantes sur le firmware.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Clés OEM compromises en usine ou lors du flashage.
- Incompatibilités avec certaines distributions Linux personnalisées.
- Difficulté de remplacement du firmware si le contrôle est activé.

---

## Mesures de sécurité & recommandations
- Activer BootGuard en mode "Vérification" dans les BIOS sécurisés.
- Vérifier l’état d’activation via outils spécifiques (Intel CSME, MEInfo...).
- Ne flasher que des BIOS signés et officiels.
- Intégrer la supervision du firmware dans les audits SSI.

---

## Standards, protocoles & normes associées
- Intel Boot Guard Architecture
- UEFI Secure Boot
- TCG (Trusted Computing Group) – Trusted Boot

---

## Intégration dans un écosystème SSI
- Première brique de la chaîne de confiance matérielle.
- Complémentaire au Secure Boot et à la gestion TPM.
- Particulièrement utile pour la conformité dans des environnements durcis.

---

## Liens avec d’autres notions
- [[Secure Boot]]
- [[TPM]]
- [[BIOS]]

---

## Sources, outils & références
- [Documentation officielle](https://www.intel.com/content/www/us/en/architecture-and-technology/boot-guard.html)
- [🛠️ Outils ou solutions associées](https://github.com/platomav/MEAnalyzer)
- [Articles techniques, blogs spécialisés](https://eclypsium.com/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=6hRC5uYJdnU)

---

## Mots-clés
`#cybersécurité` `#lexique` `#technologie` `#bootguard` `#intel` `#bios` `#sécurité` `#système`
