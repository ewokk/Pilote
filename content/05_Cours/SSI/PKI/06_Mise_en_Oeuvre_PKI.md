# Mise en œuvre et architecture d’une PKI

## PKI interne vs PKI publique

| Critère | PKI publique | PKI interne |
|--------|---------------|--------------|
| Confiance | Large (navigateurs, OS) | Interne à l’organisation |
| Coût | Gratuit à élevé | Coût initial + maintenance |
| Cas d’usage | SSL, mail, signature légale | VPN, serveurs, MDM, machines |
| Outils | ACME, API CA, portails | Active Directory CA, EJBCA, XCA |

## Modèles d’architecture

```
         [ Root CA (offline) ]
                 ↓
     [ Intermediate CA (online) ]
                 ↓
     [ Certificats finaux (utilisateurs, serveurs) ]
```

- **Root CA** : Hors-ligne, ultra sécurisée (air gap, HSM)
- **Intermediate CA** : En ligne, émet les certificats
- **Leaf** : Entités finales (serveurs, utilisateurs)

> [!info]
> Le Root CA ne signe jamais directement un certificat utilisateur.

## Bonnes pratiques

- Séparer les rôles : root / intermediate / RA
- Chiffrement et HSM obligatoires pour la clé du root
- Audits réguliers et journalisation centralisée
- Intégration SIEM (logs d’émission, révocation, erreur)

## Outils de mise en œuvre

| Outil | Type | Description |
|-------|------|-------------|
| EJBCA | Open Source | PKI complète Java-based |
| Microsoft AD CS | Commercial | Intégré aux environnements AD |
| HashiCorp Vault | DevOps | Délivrance de certificats via API |
| XCA | GUI | Génération et gestion manuelle de certificats |
| cfssl | CLI | Outils Go pour AC internalisées |

## Fichiers générés typiques

| Fichier | Rôle |
|--------|------|
| .crt / .pem | Certificat |
| .key | Clé privée |
| .csr | CSR pour demande |
| .p12 / .pfx | Bundle sécurisé avec mot de passe |
| .crl | Liste des révocations |
| .cer | Format binaire DER du certificat |

## Politiques formelles

- **CPS** (Certification Practice Statement) : comment la PKI fonctionne
- **CP** (Certificate Policy) : cadre d’usage des certificats
- Obligatoires pour PKI publiques, fortement recommandées en interne

---

> [!quote]
> Déployer une PKI, c’est bâtir une **chaîne de confiance robuste et durable**, à la fois technique, organisationnelle et documentaire.
