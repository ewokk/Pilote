# Journalisation et détection des incidents

## Sources d’alerte

| Source     | Exemple                                 |
|------------|------------------------------------------|
| SIEM       | Analyse de logs croisés                 |
| EDR        | Comportement anormal sur un poste       |
| NDR        | Flux suspects sur le réseau             |
| Utilisateur| Signalement via phishing ou comportement |
| Honeypot   | Attaques actives détectées              |
| SOC        | Corrélation multi-source                |

---

## Détection avancée

- **IOC (Indicator of Compromise)** : fichier malveillant, IP malveillante, hash connu…
- **TTP (Tactics, Techniques, Procedures)** : profil comportemental MITRE ATT&CK
- **MISP / OpenCTI** : plateformes de partage de renseignement (CTI)

---

## Bonnes pratiques

- Journalisation activée sur tous les équipements critiques
- Journaux centralisés, horodatés, intègres
- Surveillance en temps réel ou en near-real-time
- Rétention suffisante (6 mois minimum, souvent 1 an)

> [!danger]
> Aucun traitement efficace sans logs.  
> Pas de logs = pas de preuve, pas de forensique, pas de défense juridique.

