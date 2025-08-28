# Le PRA — Plan de Reprise d’Activité

## Définition

Le **Plan de Reprise d’Activité (PRA)** est un **sous-ensemble du PCA** qui vise à **restaurer les activités** après une interruption majeure. Il permet de redémarrer les services critiques sur des environnements alternatifs ou reconstruits, dans un délai conforme aux objectifs du PCA.

> [!attention]
> Le PRA est principalement axé sur les moyens **techniques et opérationnels** de reprise (SI, serveurs, données, réseaux).

## Objectifs du PRA

- Rétablir l’accès aux systèmes d’information et aux données
- Permettre une reprise de service en mode nominal ou dégradé
- Limiter la perte de données et l’impact utilisateur
- Formaliser une stratégie de redémarrage testée et validée

## Principaux composants d’un PRA

### 1. **Infrastructure alternative**
- Sites de secours (chaud, tiède, froid)
- Virtualisation, basculement automatique (failover)
- Matériels redondants ou mutualisés

### 2. **Sauvegardes et réplicas**
- Externalisation (cloud, offsite)
- Vérification d’intégrité
- Fréquence et automatisation

### 3. **Procédures techniques**
- Ordonnancement du redémarrage
- Priorisation des applications critiques
- Reconfiguration réseau, sécurité, accès

> [!warning]
> Un PRA non testé est un **risque majeur** : 70 % des entreprises sans test de PRA échouent à relancer leurs activités correctement après un incident critique.

## Scénarios courants couverts par le PRA

| Scénario | Réponse PRA |
|----------|--------------|
| Perte du site principal | Bascule vers site de secours |
| Corruption / ransomware | Restauration depuis sauvegarde intacte |
| Défaillance prestataire | Activation de ressources internes ou secondaires |
| Perte totale SI | Reconstruction et réinstallation selon ordre défini |

## Tests et vérifications

- **Tests techniques** : restauration partielle, complète, tests de bascule
- **Tests utilisateurs** : validation des accès, fonctionnement applicatif
- **Exercices de simulation** : en lien avec le PCA et la cellule de crise

> [!tip]
> La réussite d’un PRA repose sur sa **documentation détaillée, sa mise à jour régulière**, et une **formation des équipes** à l’exécuter sans improvisation.

