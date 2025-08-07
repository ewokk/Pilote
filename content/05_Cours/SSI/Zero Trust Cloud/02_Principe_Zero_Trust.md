# Le principe Zero Trust

## Règle de base

> [!attention]
> Ne jamais faire confiance **par défaut** à un utilisateur, un terminal ou une application, même à l’intérieur du réseau.

---

## 3 principes directeurs

1. **Vérification stricte de l’identité**
   - Authentification forte
   - Contextualisation (device, localisation, heuristique)

2. **Moindre privilège**
   - Just Enough Access (JEA)
   - Just In Time Access (JIT)
   - Segmentation logique (microsegmentation)

3. **Surveillance continue**
   - Logging temps réel
   - Analyse comportementale
   - Révocation instantanée si doute

---

## Modèle mental Zero Trust

```
    [Utilisateur/Appareil] → [Proxy ZT] → [Contrôle IAM] → [Ressource protégée]
                                     ↑
                     [contexte, règles, vérifications continues]
```

---

## Micro-segmentation

- Remplace les VLAN physiques par des **règles dynamiques**
- Permet de **contrôler chaque flux individuellement**
- S’appuie sur l’identité, le rôle, le comportement

> [!tip]
> On parle aussi de **"Software-Defined Perimeter" (SDP)**

---

## Différences clés avec la sécurité classique

| Aspect                  | Sécurité traditionnelle | Zero Trust                    |
|-------------------------|-------------------------|-------------------------------|
| Confiance LAN           | Implémentée par défaut  | Aucune                        |
| Authentification        | À la connexion          | Continue                      |
| Périmètre               | Délimité physiquement   | Basé sur les identités et règles |
| Gestion des flux        | Firewall IP             | Contrôle logique, dynamique   |
| Cloisonnement           | Réseau/physique         | Règles sur mesure par app/identité |

