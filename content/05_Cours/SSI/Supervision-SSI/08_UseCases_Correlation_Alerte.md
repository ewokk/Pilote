# Use cases de corrélation et détection

## Pourquoi des use cases ?

- Définir **ce que l’on veut détecter**
- Traduire un risque métier en **règle technique**
- Construire un **catalogue d’alertes pertinentes**

---

## Exemples de scénarios à superviser

| Scénario                        | Description technique                              |
|--------------------------------|----------------------------------------------------|
| Brute force                    | Tentatives multiples de connexion                  |
| Escalade de privilèges         | Ajout utilisateur à un groupe admin                |
| Shadow IT                      | Usage non autorisé de services Cloud               |
| Mouvements latéraux            | Connexions RDP internes inhabituelles              |
| Exfiltration lente             | Uploads hors horaires via HTTPS ou DNS             |
| Script PowerShell suspect      | Exécution avec obfuscation ou encode              |

---

## Sources utilisées

- SIEM : logs AD, logs Windows, pare-feu, proxy
- EDR : comportement poste
- NDR : flux réseau
- CTI : enrichissement IOC, réputation IP

---

## Construction d’un use case

1. Définir le risque
2. Choisir les sources nécessaires
3. Écrire la règle (ex : règle SIGMA, YARA, Regex)
4. Définir l’action (alerte, blocage, escalade)

> [!tip]
> L’efficacité d’un SOC dépend de la **qualité de ses use cases**, pas de la quantité.

