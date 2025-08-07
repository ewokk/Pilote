# 02 – Définitions et concepts clés

> [!info]
> Cette section introduit les termes fondamentaux pour comprendre ISO/IEC 27018 et ses enjeux spécifiques.

## Données à caractère personnel (PII)

Les **PII (Personally Identifiable Information)** désignent toute information permettant d’identifier directement ou indirectement une personne physique :
- Nom, prénom, adresse, téléphone
- Identifiants en ligne (IP, cookies)
- Données de géolocalisation, comportementales
- Données biométriques, financières, etc.

## PII Controller / PII Processor

| Terme | Définition |
|-------|------------|
| PII Controller | Entité qui détermine les finalités et moyens du traitement des PII |
| PII Processor | Entité qui traite les PII pour le compte du PII Controller |

> [!example]
> Une entreprise stockant ses données clients sur un Cloud SaaS est généralement le **PII Controller**, tandis que le fournisseur Cloud est **PII Processor**.

## Cloud public

Dans ISO/IEC 27018, l'accent est mis sur les environnements **Cloud publics** : services partagés par plusieurs clients, souvent accessibles via Internet.

> [!warning]
> La norme ne s’applique pas directement au Cloud privé interne à une entreprise, sauf si celui-ci est opéré comme un service Cloud accessible à des tiers.
