# BEC

> **Type** : acronyme 
> **Niveau** : intermédiaire `#intermédiaire`  
> **Contexte** : offensif

---

## Définition
> BEC (Business Email Compromise) désigne une forme d’escroquerie ciblée dans laquelle un cybercriminel usurpe ou compromet une adresse email professionnelle afin de tromper une organisation et de lui soutirer de l’argent ou des informations sensibles.

---

## Explication détaillée
- **Origine ou historique**  
  - Popularisé à partir des années 2010 avec la recrudescence d’escroqueries par email ciblées contre des services financiers ou comptables.
- **Fonctionnement technique**  
  - Le pirate compromet un compte email réel ou en falsifie un (spoofing).
  - Il surveille les échanges, imite le style de communication, puis envoie une demande frauduleuse (virement, changement de RIB, transfert de données).
- **Rôles & fonctions**  
  - Exploiter la confiance et la hiérarchie d’une organisation.
  - Voler de l’argent ou des informations stratégiques.
- **Avantages et limites**  
  - Très difficile à détecter si bien préparé.
  - Ne repose pas forcément sur des logiciels malveillants.
- **Typologies ou variantes**  
  - Fausse facture, usurpation de dirigeant, fraude au fournisseur, vol de données RH.

---

## Cas d’usage & exemples concrets
- Email imitant un PDG demandant un virement urgent à l’étranger.
- Compromission du compte d’un fournisseur pour modifier les coordonnées bancaires.
- Ciblage d’un service RH pour récupérer des fiches de paie ou des RIB.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Mauvais contrôles de validation des ordres de paiement.
- Absence de MFA sur les comptes email.
- Sensibilisation insuffisante des équipes exposées.

---

## Mesures de sécurité & recommandations
- Activer l’authentification multifacteurs sur toutes les boîtes email.
- Mettre en place des procédures de double validation pour les virements.
- Former les équipes à reconnaître les signes d’un BEC.
- Surveiller les connexions inhabituelles sur les comptes mail.

---

## Standards, protocoles & normes associées
- DMARC, SPF, DKIM (protection de l’identité email)
- ISO/IEC 27001 – sécurité des communications
- NIST SP 800-177 – Email Security

---

## Intégration dans un écosystème SSI
- Intégré aux politiques de lutte contre la fraude et la sensibilisation utilisateur.
- Complète les outils de sécurité email (SEG, anti-spoofing).
- Doit faire l’objet de scénarios de test Red Team / phishing.

---

## Liens avec d’autres notions
- [[Phishing]]
- [[Spoofing]]
- [[Fraude au président]]

---

## Sources, outils & références
- [Documentation officielle](https://www.ic3.gov/Media/Y2022/PSA220504)
- [🛠️ Outils ou solutions associées](https://www.proofpoint.com/)
- [Articles techniques, blogs spécialisés](https://www.microsoft.com/en-us/security/blog/2021/06/08/business-email-compromise-how-attackers-use-social-engineering/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=2MfU5aULuuE)

---

## Mots-clés
`#cybersécurité` `#lexique` `#acronyme` `#bec` `#phishing` `#email` `#fraude`
