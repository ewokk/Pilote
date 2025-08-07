# Attaques courantes sur Active Directory

## Pass-the-Hash

- Exploite les **hashs NTLM** présents en mémoire
- Permet de s’authentifier **sans connaître le mot de passe**

> [!protection]
> Utiliser Credential Guard, supprimer les droits admin locaux inutiles

---

## Pass-the-Ticket

- Réutilisation de **tickets Kerberos (TGT)** volés
- Très discret si le ticket est encore valide

---

## Kerberoasting

- Extraction des **hashs de services SPN**
- Brute force en offline du mot de passe du service

### Prévention :
- Comptes de service avec mot de passe complexe
- Pas de droits admin sur les comptes SPN

---

## DCShadow

- Injection de fausses modifications dans le schéma via un faux DC
- Utilise des permissions avancées (replication rights)

> [!danger]
> Très difficile à détecter sans supervision dédiée

---

## Golden Ticket

- Falsification d’un ticket TGT maître (krbtgt compromis)
- Donne un accès total et persistant

> [!warning]
> Nécessite une **rotation régulière** du mot de passe du compte `krbtgt`

---

## Outils d’attaque

- **Mimikatz** : dump de mémoire, extraction de mots de passe
- **BloodHound** : cartographie des privilèges
- **Rubeus**, **Impacket**, **PowerView**, etc.

---

## Protection recommandée

- Monitoring renforcé
- Ségrégation stricte des comptes
- MFA, bastion, journaux audités
- Mise à jour régulière des systèmes
