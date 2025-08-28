# Bonnes pratiques de sécurisation OT

## 1. Inventaire et cartographie

- Cartographie des flux OT/IT
- Identification des équipements industriels
- Vérification des OS, firmware, protocoles

## 2. Segmentation et cloisonnement

- Application stricte du modèle Purdue
- Firewalling par zone
- Diodes, proxy, NAT, filtrage L7 industriel

## 3. Supervision passive

- Analyse sans impact sur le trafic
- Utilisation d’outils comme Nozomi, Claroty, Tenable.ot
- Journalisation centralisée (Syslog, WMI, Modbus sniffing…)

## 4. Mise à jour et durcissement

- Tests en environnement miroir
- Whitelisting d’applications (AppLocker)
- Retrait des ports inutiles (USB, telnet…)

## 5. Authentification et MFA

- Comptes nominatifs même en usine
- Accès supervisés (badge, bastion)
- MFA sur SCADA, VPN, consoles d’administration

## 6. Accès distants sécurisés

- Jumpbox dédiée
- Session enregistrée
- Horaires et rôles restreints

> [!success]
> La sécurité OT = **détection, cloisonnement, visibilité passive et contrôle des accès humains**.

