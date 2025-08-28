# 02 - Typologies et classifications des IDS / IPS

> [!info]
> Panorama complet des types d’IDS/IPS selon leur position, leur mode d’analyse et leur usage

---

## Selon la position dans l’infrastructure

| Type    | Description                                   | Exemple d’usage |
|---------|-----------------------------------------------|------------------|
| **NIDS** (Network-based IDS) | Analyse du trafic réseau | Détection de scan, d’injection |
| **HIDS** (Host-based IDS)    | Analyse locale des journaux et processus système | Détection de rootkit, modification de fichiers |
| **Hybride**                  | Combine les deux         | Couverture complète système + réseau |

> [!example]
> Snort (NIDS), OSSEC (HIDS), Wazuh (HIDS amélioré)

---

## Selon le mode de détection

| Mode             | Description                                  | Avantages                         | Inconvénients                    |
|------------------|----------------------------------------------|-----------------------------------|----------------------------------|
| **Signature**    | Compare à une base connue de modèles d’attaque | Rapide, précis (si à jour)        | Inefficace sur attaques inconnues |
| **Comportemental** | Analyse des écarts par rapport à un comportement normal | Détection d’attaques 0-day       | Fausse alertes, besoin d’apprentissage |
| **Stateful Protocol Analysis** | Vérifie le respect des RFC/protocoles | Détection d’anomalies protocolaires | Complexité, coût en ressource |

---

## Selon la réaction

| Type   | Comportement |
|--------|--------------|
| **IDS** | Ne bloque pas, alerte seulement |
| **IPS** | Peut bloquer ou rejeter le trafic |

---

## Résumé visuel

```
              +---------------------+
              |       Réseau        |
              +---------------------+
                    |       |
                 [NIDS]   [IPS]
                    |       |
              +---------------------+
              |       Hôte          |
              +---------------------+
                    |       
                 [HIDS]
```

> [!tip]
> En entreprise, on combine souvent un NIDS en cœur de réseau, un IPS en frontal, et des HIDS sur les serveurs critiques.

