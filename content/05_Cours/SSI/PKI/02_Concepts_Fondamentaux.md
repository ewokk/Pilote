# Concepts fondamentaux de la PKI

## Cryptographie asymétrique

> [!quote]  
> Un message chiffré avec la **clé publique** ne peut être déchiffré que par la **clé privée** (et inversement).

### Paire de clés

- **Clé publique** : peut être partagée avec tout le monde
- **Clé privée** : conservée secrète par le propriétaire

## Algorithmes courants

| Algorithme | Type | Taille courante | Usage |
|------------|------|------------------|-------|
| RSA | Factorisation | 2048 ou 4096 bits | Signature, chiffrement |
| ECC (ex: secp256r1) | Courbes elliptiques | 256 bits | Idem, plus léger |
| DSA (moins utilisé) | Discret Log | 1024 bits (deprecated) | Signature |

## Chiffrement VS Signature

| Opération | Entrée | Sortie | But |
|----------|--------|--------|-----|
| **Chiffrement** | Message + clé publique du destinataire | Message chiffré | Confidentialité |
| **Signature** | Empreinte + clé privée de l’émetteur | Signature numérique | Intégrité + non-répudiation |

> [!example]  
> Alice chiffre un message avec la **clé publique de Bob**. Seul Bob pourra le lire avec sa **clé privée**.

> [!example]  
> Alice signe un document avec sa **clé privée**. Tout le monde peut vérifier l’authenticité avec sa **clé publique**.

## Fonction de hachage

Une PKI repose aussi sur les fonctions de hachage (SHA-256, SHA-3…) pour :
- générer des **empreintes numériques**
- garantir l’**intégrité** des certificats
- détecter toute **altération** ou falsification

> [!warning]  
> MD5 et SHA-1 sont obsolètes. N’utilisez que SHA-2 ou SHA-3.

## Chaîne de confiance

La confiance dans la PKI repose sur une **hiérarchie de certificats** :
```
Racine (Root CA)
    └── Intermédiaire (Intermediate CA)
          └── Certificat utilisateur (Leaf)
```

- Chaque certificat est **signé** par son parent
- Le certificat racine est **auto-signé** et doit être **confié manuellement**

## Empreintes, encodage et formats

- Certificats au format **X.509** (généralement `.crt`, `.pem`)
- Encodage Base64 ou DER (binaire)
- Empreinte = hash du certificat (SHA256 fingerprint)

## Résumé visuel

```ascii
[Message clair] → [Hachage SHA-256] → [Signature avec clé privée]
                                          ↓
                          [Vérification avec clé publique]
```
