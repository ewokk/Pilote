# 08 - Cas pratiques et scénarios d’intrusion détectés

> [!example]
> Ces scénarios peuvent être testés en environnement lab (Snort, Suricata)

---

## Scénario 1 : Port Scan (reconnaissance)

- Utilisation de `nmap -sS`
- Détection par règles Snort : `SCAN nmap TCP`

### Réponse :
- Alerte dans le SIEM
- Blocage de l’IP par playbook SOAR

---

## Scénario 2 : Exploitation vulnérabilité Apache

- Payload HTTP avec `/cgi-bin/…`
- Signature connue dans Suricata

---

## Scénario 3 : Malware exfiltration

- Communication DNS exfiltration
- Détection comportementale (volume + requêtes non valides)

---

## Scénario 4 : Evasion via fragmentation

- Payload réparti sur plusieurs paquets TCP
- Snort avec `frag3` peut reconstruire les fragments et détecter

---

## Cas bonus : détection d’un ransomware

- Pattern d’écriture rapide sur fichiers + connexions vers IP TOR
- Corrélation HIDS + réseau

---

> [!tip]
> Utiliser des outils comme Kali, testmyids.com, Metasploit pour simuler les attaques

> [!success]
> En entreprise, ces scénarios sont utilisés pour créer des **règles spécifiques, des dashboards dédiés** et des **exercices de détection en SOC**.

