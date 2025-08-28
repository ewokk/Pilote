# 07 - Mise en place d’un IDS/IPS en entreprise

> [!info]
> Guide méthodologique pour déployer un IDS/IPS dans une architecture de sécurité

---

## 1. Analyse des besoins

- Cartographie des flux réseau
- Identification des zones critiques (serveurs, DMZ…)
- Conformité (ISO 27001, PCI-DSS…)

---

## 2. Choix des technologies

- **Suricata + Wazuh** pour PME/ETI
- **Zeek + Snort** en environnement universitaire ou SOC
- **Commercial NGFW IPS** pour grandes entreprises (Palo Alto, Cisco, Fortinet…)

---

## 3. Déploiement progressif

- Phase de test / analyse passive
- Tunings des alertes
- Passage à la prévention (mode blocage)

---

## 4. Intégration avec l’environnement

- SIEM (ex : ELK, QRadar, Wazuh)
- Playbooks SOAR (automatisation réponse)
- Tableaux de bord analytiques

---

## 5. Suivi & gouvernance

- Tuning mensuel des règles
- Reporting hebdomadaire vers la DSI
- Vérification des taux de faux positifs
- Procédures de réponse documentées

---

> [!failure]
> Erreurs fréquentes à éviter :
> - Lancer directement en mode blocage (IPS) sans apprentissage
> - Oublier la supervision continue (logs, SIEM)
> - Ne pas impliquer les équipes réseau et métiers
> - Ne pas mettre à jour les règles (oubli de cron ou accès expiré)
> - Ignorer les impacts légaux du déchiffrement TLS

---

## 6. Schéma cible d'intégration entreprise

```
+-----------+   +-----------+   +-------------+   +------------+
| Poste     |-->| Switch    |-->| Capteur IDS |-->| Firewall   |
+-----------+   +-----------+   +-------------+   +------------+
                                          |
                                   +-------------+
                                   | Serveur SIEM |
                                   +-------------+
```

