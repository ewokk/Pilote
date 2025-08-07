# Business Email Compromise

> **Type** : attaque 
> **Niveau** : #intermédiaire  
> **Contexte** : #offensif, #fraude, #socialengineering

---

## Définition
> Le Business Email Compromise (BEC) est une attaque où un cybercriminel compromet ou usurpe une adresse e-mail professionnelle pour tromper une entreprise, souvent dans le but de détourner des fonds.

---

## Explication détaillée
- **Origine ou historique**  
  - Attaque popularisée dans les années 2010, avec des pertes estimées à plusieurs milliards selon le FBI.
- **Fonctionnement technique**  
  - L’attaquant accède à une boîte mail (via phishing ou fuite) ou falsifie une adresse proche du domaine cible.
  - Il se fait passer pour un dirigeant, un fournisseur ou un partenaire et demande une action urgente (virement, changement IBAN).
- **Rôles & fonctions** dans la cybersécurité  
  - Utilisé pour escroquer une entreprise via la chaîne de communication.
  - Exploite la confiance dans les canaux internes.
- **Avantages et limites**  
  - Avantage : difficile à détecter sans vérification humaine.
  - Limite : repose sur l’ingénierie sociale plus que sur la technique.
- **Typologies ou variantes**  
  - Fraude au président, faux fournisseur, détournement de factures.

---

## Cas d’usage & exemples concrets
- Email reçu par un comptable imitant le PDG demandant un virement d’urgence.
- Changement frauduleux d’IBAN envoyé par un “faux fournisseur”.
- Attaques contre les services RH pour détourner les fiches de paie.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Utilisation d’e-mails très proches (ex : domain.com → domaiin.com).
- Failles de SPF/DKIM/DMARC mal configurés.
- Mauvais processus de validation financière.

---

## Mesures de sécurité & recommandations
- Vérification systématique des demandes de paiement par un canal secondaire.
- Formation du personnel (comptabilité, RH, DG).
- Mise en place de SPF, DKIM et DMARC stricts.
- Utilisation de l’authentification multifacteur sur les comptes sensibles.

---

## Standards, protocoles & normes associées
- RFC 7208 (SPF), RFC 6376 (DKIM), RFC 7489 (DMARC).
- Bonnes pratiques ANSSI et guides anti-fraude.
- Normes ISO/IEC 27001 sur le contrôle des accès et de la messagerie.

---

## Intégration dans un écosystème SSI
- Complète les mesures de sécurité mail (antispam, SIEM, DLP).
- Nécessite une coordination SSI / Direction / Finance.
- Doit figurer dans le PCA/PRA des risques métiers.

---

## Liens avec d’autres notions
- [[Phishing]]
- [[Ingénierie sociale]]
- [[Authentification multifacteurs]]

---

## Sources, outils & références
- [FBI IC3 - Rapport BEC](https://www.ic3.gov/Media/Y2020/PSA200817)
- [Guide ANSSI - Sécuriser les services de messagerie](https://www.ssi.gouv.fr/publication/securiser-le-service-de-messagerie/)
- [Vidéo explicative sur YouTube](https://www.youtube.com/watch?v=K5ZkYTu3jXc)

---

## Mots-clés
`#cybersécurité` `#lexique` `#attaque` `#fraude` `#socialengineering` `#email`
