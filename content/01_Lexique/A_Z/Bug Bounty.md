# Bug Bounty

> **Type** : programme 
> **Niveau** : #intermédiaire  
> **Contexte** : #défensif, #audit, #gouvernance

---

## Définition
> Un programme de Bug Bounty est une initiative mise en place par une organisation pour récompenser les chercheurs en sécurité qui identifient et signalent des vulnérabilités dans ses systèmes.

---

## Explication détaillée
- **Origine ou historique**  
  - Popularisé dès 1995 par Netscape, puis formalisé par des plateformes comme HackerOne ou Bugcrowd.
- **Fonctionnement technique**  
  - L’entreprise définit une surface d’attaque autorisée et une grille de récompenses.
  - Les chercheurs testent les systèmes dans ce cadre et soumettent les failles trouvées via une plateforme dédiée.
- **Rôles & fonctions** dans la cybersécurité  
  - Amélioration continue de la sécurité en s’appuyant sur la communauté externe.
  - Renforce la posture de sécurité d’une organisation.
- **Avantages et limites**  
  - Avantages : diversité des approches, retour rapide sur les failles.
  - Limites : mauvaise gestion peut entraîner du bruit ou des comportements abusifs.
- **Typologies ou variantes**  
  - Public, privé, VDP (Vulnerability Disclosure Policy), crowd-sourced pen testing.

---

## Cas d’usage & exemples concrets
- Programme Bug Bounty de Google, Facebook, DoD.
- Signalement d’un XSS sur un portail client d’une banque.
- Découverte d’un 0-day sur une API mal exposée.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Risque si la surface d’attaque est mal définie.
- Possibilité de divulgation publique non coordonnée.
- Débordement d’un programme mal cadré (bruit, attaques légales).

---

## Mesures de sécurité & recommandations
- Rédiger un périmètre clair et une politique de divulgation.
- Gérer les signalements via des plateformes comme HackerOne, YesWeHack.
- Réagir rapidement aux vulnérabilités signalées.
- Intégrer les résultats au cycle DevSecOps.

---

## Standards, protocoles & normes associées
- ISO/IEC 29147 (vulnerability disclosure).
- ISO/IEC 30111 (traitement des vulnérabilités).
- RFC 9116 (Security.txt).

---

## Intégration dans un écosystème SSI
- Complément des audits internes et pentests.
- Alimente le SOC et les équipes CSIRT en informations utiles.
- Permet de tester en conditions réelles les surfaces exposées.

---

## Liens avec d’autres notions
- [[Pentest]]
- [[Vulnerability Disclosure]]
- [[CTF]]

---

## Sources, outils & références
- [Bug Bounty - HackerOne](https://www.hackerone.com/)
- [YesWeHack - Plateforme européenne](https://www.yeswehack.com/)
- [Guide ANSSI sur la divulgation coordonnée](https://www.ssi.gouv.fr/guide/divulgation-coordonnee-de-vulnerabilites/)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#bugbounty` `#vdp`
