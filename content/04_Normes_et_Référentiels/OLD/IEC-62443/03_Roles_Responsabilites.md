# Rôles et responsabilités dans la norme IEC 62443

## Trois rôles majeurs définis

| Rôle         | Définition                          | Exemple                           |
|--------------|-------------------------------------|-----------------------------------|
| Exploitant   | Gère et utilise le système industriel | Usine, centrale, site industriel  |
| Intégrateur  | Assemble les composants en système   | ESN, constructeur de machines     |
| Fournisseur  | Fabrique les composants (produits)   | Siemens, Schneider, Rockwell…     |

---

## Pourquoi cette séparation ?

- Chaque acteur a des **obligations différentes** dans les séries 2.x, 3.x, 4.x
- On évite les malentendus dans la chaîne industrielle
- Elle permet une **certification par rôle**

> [!info]
> Un même acteur peut **cumuler plusieurs rôles** dans certains projets.

---

## Vue globale des responsabilités

| Série        | Fournisseur | Intégrateur | Exploitant |
|--------------|-------------|-------------|------------|
| 1.x          | ✔️          | ✔️          | ✔️         |
| 2.x (org)    |             | ✔️          | ✔️         |
| 3.x (syst.)  |             | ✔️          | ✔️         |
| 4.x (produit)| ✔️          |             |            |

---

## Exemples concrets

- **Fournisseur** : Conçoit un automate conforme 62443-4-2
- **Intégrateur** : Crée une architecture SCADA complète conforme 3-3
- **Exploitant** : Met en œuvre une politique sécurité site conforme 2-1

