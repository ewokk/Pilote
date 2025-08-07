# Solutions NDR modernes

## Zeek (ex-Bro)

- Outil open source orienté logs riches
- Déploiement passif (SPAN/TAP)
- Génère des logs lisibles, exportables (conn, dns, ssl, http…)
- Utilisable comme socle NBA ou source NDR

---

## Corelight

- Version commerciale de Zeek avec support, alerting, capteurs distribués
- Intégration directe ELK, Splunk, SentinelOne

## Darktrace

- Solution IA "auto-apprenante"
- Création automatique de modèles comportementaux internes
- Alertes sous forme de storytelling
- Résistance aux attaques inconnues ou polymorphes

## Vectra AI

- Orienté **SOC**, détection avancée de mouvement latéral, exfiltration, shadow IT
- Intégration XDR, contextualisation des alertes

---

## Comparatif

| Outil       | Type       | Spécialité              |
|-------------|------------|--------------------------|
| Zeek        | Open source| Logs + comportement      |
| Corelight   | Commercial | Zeek + interface + alerting |
| Darktrace   | IA         | NDR autonome, narratif   |
| Vectra AI   | SOC/NDR    | Corrélation + pivot AD    |

> [!success]
> Zeek/Corelight est souvent choisi comme **socle NDR** d’un SOC custom.

