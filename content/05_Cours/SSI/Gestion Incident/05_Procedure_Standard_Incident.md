# Procédure standard de traitement d’un incident

## Objectif

Permettre une **réponse efficace, structurée et reproductible** à tout incident, quel que soit son type.

---

## Étapes type d’un playbook

1. **Détection / Alerte**
   - Source : SOC, utilisateur, outil (EDR, SIEM…)
2. **Qualification**
   - Réel ou faux positif ?
   - Affectation d’un niveau de criticité
3. **Engagement de la procédure**
   - Escalade vers le CSIRT
   - Vérification des preuves disponibles
4. **Confinement**
   - Isolement du poste / segment réseau
   - Suspension de compte utilisateur
5. **Remédiation**
   - Réinitialisation système
   - Restauration de données
6. **Notification**
   - Interne (DSI, direction…)
   - Externe (CNIL, clients…) si besoin
7. **Clôture**
   - Retex
   - Documentation complète
   - Mise à jour des protections

> [!tip]
> Un **modèle de PV incident** ou playbook markdown peut être inclus dans un futur pack “outils”.

