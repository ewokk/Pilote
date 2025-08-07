# Introduction générale — NIDS, NAC, NDR, NBA

## Positionnement dans l’architecture réseau

Les systèmes de **détection réseau (NIDS, NDR)** et de **contrôle d'accès (NAC)** sont des composants fondamentaux pour :
- sécuriser le trafic **interne** (Est-Ouest)
- renforcer le modèle **Zero Trust**
- détecter ou bloquer les comportements suspects
- valider la **conformité des postes clients**

> [!info]
> Ce cours prolonge directement les chapitres "Segmentation réseau", "Firewall", "Supervision" et "Sécurité périmétrique" du [[Cours Réseaux]].

---

## Définitions rapides

| Terme | Rôle principal |
|-------|----------------|
| **NIDS** | Analyse passive du trafic réseau pour détecter des menaces |
| **NAC** | Contrôle des connexions réseau en fonction de la posture et de l'identité |
| **NBA** | Analyse du **comportement réseau** pour identifier les anomalies |
| **NDR** | Plateforme complète de détection réseau **comportementale + signature**, avec réponse intégrée |

---

## Objectif global du cours

- Différencier NIDS / NAC / NDR / NBA
- Connaître leur rôle, limites, complémentarités
- Savoir les intégrer dans une **infrastructure de sécurité globale**
- Être capable de **déployer, configurer, auditer et corréler** leurs événements

---

## Vision d’ensemble (schéma texte)

```
+----------+       +---------+       +--------+
|  Postes  | <---> |  Switch | <---> |  NIDS  |
+----------+       +---------+       +--------+
     |                                  |
     |       +-------------+            |    +------------+
     +-----> | NAC/802.1X  | <----------+--> |  SIEM / SOC |
             +-------------+                 +------------+
```

