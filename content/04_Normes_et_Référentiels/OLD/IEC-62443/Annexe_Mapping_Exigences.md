# Annexe — Mapping des responsabilités et exigences IEC 62443

## 1. Vue croisée : documents vs rôles

| Document IEC            | Fournisseur | Intégrateur | Exploitant |
|-------------------------|-------------|-------------|------------|
| 62443-1-1 (Vocabulaire) | ✔️          | ✔️          | ✔️         |
| 62443-2-1 (Politique)   |             | ✔️          | ✔️         |
| 62443-2-4 (Intégrateurs)|             | ✔️          |            |
| 62443-3-2 (Risques SL)  |             | ✔️          | ✔️         |
| 62443-3-3 (Exig. système)|             | ✔️          | ✔️         |
| 62443-4-1 (SDLC)        | ✔️          |             |            |
| 62443-4-2 (Composants)  | ✔️          |             |            |

---

## 2. Exigences par domaine

| Domaine                  | Exigence clé                         | Responsable(s)         | Référence(s)       |
|--------------------------|--------------------------------------|-------------------------|---------------------|
| Gouvernance sécurité OT | Politique, classification, vulnérabilité | Exploitant              | 62443-2-1           |
| Analyse de risque SL     | Cartographie, évaluation, SL-T        | Intégrateur, Exploitant | 62443-3-2           |
| Conception sécurisée     | Cycle de développement sécurisé       | Fournisseur             | 62443-4-1           |
| Accès & authentification | RBAC, MFA, comptes nominatifs         | Intégrateur, Fournisseur| 62443-3-3 / 4-2     |
| Journalisation & audit   | Logs, alertes, preuves d'activité     | Intégrateur, Exploitant | 62443-3-3           |
| Maintenance & support    | Patchs, procédures de MAJ             | Exploitant, Intégrateur | 62443-2-1 / 2-4     |

---

## 3. Schéma synthétique

```ascii
                [ Fournisseur ]
                      ↓
              ┌───────┴────────┐
              │  Intégrateur   │
              └───────┬────────┘
                      ↓
                [ Exploitant ]
```

> [!info]
> Cette cascade reflète la logique de sécurité **"de la conception à l’exploitation"** propre à l’IEC 62443.

