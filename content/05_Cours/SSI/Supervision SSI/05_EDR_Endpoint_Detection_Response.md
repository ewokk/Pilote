# EDR — Endpoint Detection and Response

## Rôle principal

- Surveiller et analyser les **comportements des endpoints** (PC, serveurs)
- Détecter des comportements malveillants en temps réel
- **Répondre rapidement** : isolement, suppression, rollback

---

## Fonctions typiques

| Fonction        | Exemple                             |
|------------------|-------------------------------------|
| Surveillance     | Lancement de script inhabituel      |
| Analyse          | Heuristique, IA, TTP MITRE          |
| Réponse          | Kill process, déconnexion réseau    |
| Remédiation      | Restauration d’état avant infection |
| IOC / Forensique | Dump RAM, analyse fichiers          |

---

## Outils EDR populaires

- Crowdstrike Falcon
- SentinelOne
- Microsoft Defender for Endpoint
- Sophos Intercept X

> [!success]
> Un bon EDR permet d’**agir sans délai**, même si l’analyste n’est pas encore alerté.

---

## Complémentarité

EDR ≠ Antivirus classique  
→ plus intelligent, plus comportemental, plus intégré au SOC

