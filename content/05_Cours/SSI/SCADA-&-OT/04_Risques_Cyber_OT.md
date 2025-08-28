# Risques cyber sur les environnements OT

## Contraintes critiques

- OT = systèmes à **fort impact physique**
- OT = systèmes avec **peu de marge de manœuvre sécurité**

---

## Vulnérabilités typiques

| Vulnérabilité           | Conséquence potentielle          |
|-------------------------|----------------------------------|
| OS obsolètes            | Incompatibilité patch, exploits |
| Protocole non chiffré   | Interception ou injection       |
| Segmentation absente    | Propagation d’un malware        |
| Authentification faible | Accès aux consoles SCADA        |
| Accès à distance mal géré | Intrusion via VPN exposé      |

---

## Exemples d’attaques réelles

### Stuxnet (2010)
- Ver ciblant des automates Siemens via USB
- Modification furtive des séquences centrifugeuses
- Premier cyber sabotage d'infrastructure nucléaire

### Triton (2017)
- Ciblait les systèmes de sécurité physique (SIS)
- Déstabilisation de la sécurité anti-surchauffe

### BlackEnergy (2015) / Industroyer (2016)
- Ciblent les infrastructures électriques (Ukraine)
- Commandes malveillantes envoyées au SCADA

> [!danger]
> L’attaque OT peut mener à des dégâts matériels, humains et juridiques irréversibles.

