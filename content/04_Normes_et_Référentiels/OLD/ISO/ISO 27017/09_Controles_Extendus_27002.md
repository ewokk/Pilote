# 10 – Contrôles ISO/IEC 27002 étendus par ISO/IEC 27017 (Version autonome)

> [!info]
> Cette section décrit les **37 contrôles existants d’ISO/IEC 27002:2013** qui sont **étendus ou adaptés par la norme ISO/IEC 27017** pour renforcer la sécurité dans les environnements Cloud.  
> Chaque entrée est accompagnée d'une **explication complète**, même pour ceux ne connaissant pas l'annexe A.

---

## A.6 – Organisation de la sécurité de l’information

Ce domaine traite de la **répartition des responsabilités** en matière de sécurité de l'information. Dans le Cloud, il est crucial de savoir qui fait quoi entre le **client** et le **fournisseur**.

| Contrôle | Objectif | Adaptation Cloud |
|----------|----------|------------------|
| 6.2.1 | Définir clairement les responsabilités de sécurité dans l'organisation | Ajouter la répartition client/fournisseur (ex : qui chiffre ? qui sauvegarde ?) |
| 6.2.2 | Coordonner les fonctions de sécurité | Intégrer les rôles des fournisseurs dans la coordination SSI |

---

## A.8 – Gestion des actifs

Les "actifs" incluent les données, les systèmes, les machines virtuelles, etc. Il est important de savoir ce que vous possédez et comment vous le protégez.

| Contrôle | Objectif | Adaptation Cloud |
|----------|----------|------------------|
| 8.1.1 | Créer un inventaire de tous les actifs importants | Ajouter ressources Cloud : VM, containers, bucket S3… |
| 8.2.3 | Définir des règles de manipulation d’actifs | Gérer l’accès, le chiffrement et l’effacement dans le Cloud |

---

## A.9 – Contrôle d’accès

Ce domaine vise à garantir que seules les personnes autorisées accèdent aux ressources, et uniquement ce qui leur est nécessaire.

| Contrôle | Objectif | Adaptation Cloud |
|----------|----------|------------------|
| 9.1.2 | Restreindre les connexions réseau | Intégrer la segmentation Cloud (ex. : VPC, sous-réseaux, groupes de sécurité) |
| 9.2.1 | Enregistrer et valider les utilisateurs | Prendre en compte les identités multi-locataires Cloud |
| 9.4.1 | Gérer les droits d’accès aux applications et systèmes | Gérer les comptes temporaires, tokens, accès API dans le Cloud |

---

## A.10 – Cryptographie

Ce domaine traite du chiffrement des données pour garantir leur confidentialité.

| Contrôle | Objectif | Adaptation Cloud |
|----------|----------|------------------|
| 10.1.1 | Mettre en place une politique de chiffrement cohérente | Définir clairement la gestion des clés dans le Cloud (client, fournisseur, BYOK) |

---

## A.11 – Sécurité physique et environnementale

Ici, on s'assure que les équipements physiques sont protégés contre l’accès non autorisé.

| Contrôle | Objectif | Adaptation Cloud |
|----------|----------|------------------|
| 11.1.1 | Délimiter un périmètre physique sécurisé | Vérifier la sécurité physique du datacenter du fournisseur |
| 11.2.1 | Restreindre l’accès physique aux équipements | S’assurer que les locaux du fournisseur sont certifiés (TIER III, ISO 22301) |

---

## A.12 – Sécurité opérationnelle

Ce domaine couvre la gestion quotidienne des systèmes, y compris la sauvegarde, les journaux, et les vulnérabilités.

| Contrôle | Objectif | Adaptation Cloud |
|----------|----------|------------------|
| 12.1.1 | Documenter les procédures d’exploitation | Ajouter les spécificités d’administration Cloud |
| 12.3.1 | Sauvegarder les données de manière fiable | Préciser la localisation des sauvegardes et leur réversibilité |
| 12.4.1 | Journaliser les événements critiques | Vérifier que les logs Cloud sont accessibles et exportables |
| 12.6.1 | Gérer les vulnérabilités | Identifier les responsabilités client/fournisseur en matière de patching |

---

## A.13 – Sécurité des communications

Il s’agit de sécuriser les échanges d’information entre systèmes.

| Contrôle | Objectif | Adaptation Cloud |
|----------|----------|------------------|
| 13.1.1 | Protéger les réseaux | Chiffrer les flux Cloud privés/publics |
| 13.2.1 | Protéger le transfert d’information | Gérer le transfert entre régions Cloud et entre fournisseurs |

---

## A.14 – Acquisition, développement et maintenance

Ce domaine couvre la sécurité dès la conception et le développement logiciel.

| Contrôle | Objectif | Adaptation Cloud |
|----------|----------|------------------|
| 14.1.2 | Intégrer la sécurité dans les spécifications | Tenir compte des risques Cloud dès l’achat ou le développement |
| 14.2.5 | Appliquer des principes d'ingénierie sécurisée | Intégrer la sécurité dans le DevOps, CI/CD et Infrastructure-as-Code |

---

## A.15 – Relations avec les fournisseurs

Il s’agit de s’assurer que vos sous-traitants respectent votre niveau de sécurité.

| Contrôle | Objectif | Adaptation Cloud |
|----------|----------|------------------|
| 15.1.1 | Intégrer la sécurité dans les contrats | Inclure réversibilité, SLA, audit, gestion de faille |
| 15.2.1 | Surveiller les fournisseurs | Exiger des preuves régulières de conformité Cloud |

---

## A.16 – Gestion des incidents de sécurité

Ce domaine décrit comment détecter, signaler et résoudre les incidents.

| Contrôle | Objectif | Adaptation Cloud |
|----------|----------|------------------|
| 16.1.1 | Établir un processus de gestion d’incident | Intégrer les flux remontés par les fournisseurs Cloud |
| 16.1.6 | Gérer les violations de données | S’assurer que les notifications RGPD sont possibles dans les temps impartis |

---

## A.17 – Continuité d’activité

Il s’agit d’assurer la résilience des systèmes même en cas de panne.

| Contrôle | Objectif | Adaptation Cloud |
|----------|----------|------------------|
| 17.1.2 | Maintenir l’activité en cas de crise | Prévoir des options multi-régions/multi-fournisseurs Cloud |
| 17.2.1 | Prévoir la redondance | Répliquer les données et systèmes dans plusieurs zones Cloud |

---

## A.18 – Conformité

Ce domaine traite du respect des lois, réglementations et contrats.

| Contrôle | Objectif | Adaptation Cloud |
|----------|----------|------------------|
| 18.1.1 | Identifier les exigences légales | Cartographier les flux transfrontaliers de données Cloud |
| 18.1.5 | Respecter les exigences contractuelles | Gérer les risques liés aux législations extraterritoriales (CLOUD Act, etc.) |

---

## Synthèse et conseils

> [!success]
> Ces 37 contrôles étendus permettent d’adapter votre système de management de la sécurité (SMSI) au Cloud.  
> Pour chaque contrôle :
> - Clarifiez les **responsabilités** dans les contrats (qui fait quoi ?)
> - Mettez en place des **procédures internes**
> - Assurez-vous que vos données sont **localisées, sauvegardées, chiffrées et réversibles**

