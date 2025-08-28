# Définir le périmètre PCI DSS

## Qu’est-ce Qui est concerné par PCI DSS ?

Toute infrastructure qui :
- **stocke**,
- **traite**, ou
- **transmet**
des **données de cartes de paiement** (PAN, SAD), est dans le champ d’application.

## Données sensibles visées

| Terme | Description |
|-------|-------------|
| **PAN** | Primary Account Number (n° de carte) |
| **SAD** | Sensitive Authentication Data (CVV2, PIN, données bande magnétique) |

> [!warning]
> Le **SAD ne doit jamais être stocké** après autorisation. Sa conservation est strictement interdite.

## Systèmes inclus dans le périmètre

- Terminaux de paiement
- Bases de données contenant le PAN
- Réseaux de traitement
- Interfaces utilisateur manipulant des données de carte
- Services Cloud manipulant ou stockant du PAN

## Segmentation des réseaux

La **segmentation** permet de :
- limiter le périmètre de conformité,
- isoler les zones critiques,
- faciliter la mise en œuvre des contrôles PCI.

> [!tip]
> L’utilisation de VLANs, firewalls, proxies et accès contrôlés permet de créer une **zone PCI DSS isolée** et validable.

## Types de segmentation acceptés

- **Segmentation physique** : réseaux ou serveurs distincts
- **Segmentation logique** : contrôles d’accès stricts, pare-feux, ACLs

## Le concept de "CDE" (Cardholder Data Environment)

Le **CDE** est le périmètre principal dans lequel s'appliquent les exigences PCI :
- PAN présent ou accessible
- SAD temporairement manipulé (jamais stocké)
- Systèmes connectés ou ayant des accès indirects à ces données

> [!example]
> Un serveur de logs contenant des traces de trafic HTTP où transite du PAN est **dans le périmètre PCI**.

## Importance de la documentation du périmètre

- Cartographie réseau
- Flux de données
- Accès utilisateurs
- Composants techniques

> [!attention]
> Une erreur de périmètre entraîne un **audit invalide** ou une **non-conformité critique**.
