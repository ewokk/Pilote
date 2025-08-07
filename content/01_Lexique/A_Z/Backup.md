# Backup

> **Type** : concept 
> **Niveau** : base 
> **Contexte** : défensif

---

## Définition
> Un backup, ou sauvegarde, désigne la copie de données stockées sur un autre support ou emplacement, afin de pouvoir les restaurer en cas de perte, de panne, d’erreur ou d’attaque (ex : ransomware).

---

## Explication détaillée
- **Origine ou historique**  
  - Pratique ancienne en informatique, indispensable dès les premiers systèmes critiques. Le besoin s’est accru avec les cyberattaques modernes.
- **Fonctionnement technique**  
  - Types de sauvegardes :
    - Complète : copie intégrale des données.
    - Incrémentale : copie des changements depuis la dernière sauvegarde.
    - Différentielle : copie des changements depuis la dernière sauvegarde complète.
  - Supports : disques durs, bandes magnétiques, cloud, NAS.
- **Rôles & fonctions**  
  - Réduire l’impact d’un sinistre ou d’une compromission.
  - Récupération rapide des services ou données critiques.
- **Avantages et limites**  
  - Indispensable en cas d’attaque par ransomware.
  - Doit être vérifiée, protégée et testée régulièrement.
- **Typologies ou variantes**  
  - Sauvegarde locale, distante, cloud, hors ligne (*air gap*), immuable.

---

## Cas d’usage & exemples concrets
- Restauration des fichiers d’une entreprise après un ransomware.
- Sauvegarde quotidienne des bases de données d’un site web.
- Clonage du disque d’un serveur critique pour PRA/PCA.

---

## ⚠️ Vulnérabilités, risques et abus connus
- Sauvegardes chiffrées ou supprimées par un attaquant.
- Sauvegardes incomplètes ou corrompues.
- Mauvaise gestion des accès : fuite de données sensibles.

---

## Mesures de sécurité & recommandations
- Appliquer la règle 3-2-1 : 3 copies, sur 2 supports, dont 1 hors ligne.
- Chiffrer les sauvegardes et restreindre les accès.
- Tester régulièrement les restaurations.
- Automatiser et journaliser les opérations de backup.

---

## Standards, protocoles & normes associées
- ISO/IEC 27040 (stockage sécurisé)
- ISO/IEC 27031 (continuité des services TIC)
- Recommandations ANSSI sur la continuité d’activité

---

## Intégration dans un écosystème SSI
- Composante essentielle d’un Plan de Reprise d’Activité (PRA).
- Intégrée dans les politiques de gestion des risques et de résilience.
- Complète les mécanismes de détection et de réaction aux incidents.

---

## Liens avec d’autres notions
- [[Restauration]]
- [[PRA]]
- [[Ransomware]]

---

## Sources, outils & références
- [Documentation officielle](https://www.ssi.gouv.fr/)
- [🛠️ Outils ou solutions associées](https://www.veeam.com/)
- [Articles techniques, blogs spécialisés](https://www.backblaze.com/blog/)
- [Vidéos explicatives ou tutoriels](https://www.youtube.com/watch?v=Ejb3iJwz7w8)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#sauvegarde` `#backup` `#PRA`
