# 06 - Limites, risques et contournements IDS/IPS

> [!warning]
> Un IDS ou un IPS n’est pas infaillible. Comprendre ses limites est essentiel pour une intégration efficace.

---

## 1. Faux positifs et faux négatifs

- **Faux positif** : trafic légitime identifié comme malveillant (alertes injustifiées)
- **Faux négatif** : attaque réelle non détectée (échappement)

### Causes fréquentes :
- Signature trop large ou mal calibrée
- Comportemental sans période d’apprentissage
- Tunnels chiffrés (SSL/TLS) masquant le contenu

---

## 2. Problèmes liés au chiffrement

- Le trafic **HTTPS** est illisible sans inspection TLS
- Beaucoup d’attaques passent par SSL (malware, C2)
- Nécessite un **proxy SSL ou déchiffrement** (complexe juridiquement)

---

## 3. Techniques d’évasion

| Méthode d’évasion      | Description                                 |
|------------------------|---------------------------------------------|
| Fragmentation de paquets | Split d’attaque en fragments TCP           |
| Obfuscation            | Encodage base64, padding, unicode           |
| Détournement de protocole | Utilisation de ports détournés ou faux headers |
| Timing (slowloris…)    | Délai artificiel pour échapper à la détection |

> [!danger]
> Certains outils d’attaque comme **Metasploit**, **Scapy**, ou **Nmap** permettent de générer du trafic spécifiquement conçu pour échapper aux IDS.

---

## 4. Limites techniques

- **Charge CPU** importante en IPS in-line
- **Scalabilité difficile** sur trafic haute vitesse
- Nécessité d’une **mise à jour constante** des règles

---

## 5. Contre-mesures

- Placement stratégique + SIEM
- Tuning régulier des règles
- Mise à jour automatique des signatures
- Utilisation conjointe avec EDR, pare-feu, proxy…

