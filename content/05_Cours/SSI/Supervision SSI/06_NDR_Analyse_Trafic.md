# NDR — Network Detection & Response

## Objectif

Surveiller le **trafic réseau en profondeur** pour détecter les comportements anormaux ou les menaces.

---

## Fonctionnement

- Captures ou analyse de **flow (NetFlow, sFlow, full packet capture)**
- Détection comportementale (machine → exfiltration de données)
- Modélisation des usages réseau → détection des écarts

---

## Outils NDR populaires

- **Zeek** (ancien Bro)
- **Corelight**
- **Darktrace**
- Cisco Stealthwatch
- ExtraHop Reveal(x)

---

## Scénarios détectés

- Mouvements latéraux internes (port scanning, SMB abuse)
- C2 (Command & Control) discrets
- Exfiltration lente par DNS ou HTTPS
- Postes zombifiés en botnet

---

## Limites

- Analyse parfois difficile (trafic chiffré, volume)
- Besoin de positionner les sondes intelligemment

> [!info]
> Le NDR est **complémentaire** du SIEM et de l’EDR. Il offre une **vue transversale réseau**.

