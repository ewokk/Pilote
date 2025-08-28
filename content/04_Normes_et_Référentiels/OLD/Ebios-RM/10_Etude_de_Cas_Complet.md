# Étude de cas – Mise en œuvre complète d’EBIOS RM

## Contexte

Société : Pilotech  
Domaine : e-commerce B2C  
Contexte : forte dépendance au SI, obligations CNIL, risques d’indisponibilité en période de soldes

## Atelier 1 – Périmètre

- **Valeurs métier** : continuité de vente, données client
- **Événements redoutés** :
  - Fuite d’informations clients
  - Indisponibilité du site en période de soldes
- **Biens supports** :
  - Serveur de production
  - Plateforme e-commerce
  - Base de données MySQL

## Atelier 2 – Couples SR/OV

| Source de risque | Objectif visé | Motivation | Ressources | Activité |
|------------------|---------------|------------|------------|----------|
| Cybercriminel | Données client | Forte | Élevées | Fréquente |
| Concurrent | Sabotage image | Moyenne | Moyennes | Rare |
| Employé | Vengeance | Moyenne | Basses | Occasionnelle |

## Atelier 3 – Stratégie de menace

- Attaque du serveur via un plugin vulnérable
- Campagne de phishing vers l’équipe support
- Compromission d’un partenaire logistique

## Atelier 4 – Scénarios opérationnels

```
[Phishing mail] → [Credentials compromise] → [VPN access] → [Lateral movement] → [DB exfiltration]
```

Cotation : Vraisemblance 4 / Gravité 5

## Atelier 5 – Traitement

- MFA renforcé pour les accès VPN
- Monitoring renforcé sur les logs serveurs
- Sensibilisation anti-phishing

Plan d’action validé par la direction

## Synthèse

- 3 scénarios majeurs
- 8 mesures nouvelles
- Cartographie du risque partagée avec le comité de direction

> [!success]  
> L’approche a permis d’obtenir un budget sécurité supplémentaire de 35 K€ pour les mesures prioritaires.