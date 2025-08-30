# 07_Gestion_Incidents_PII_ISO27018

La gestion des incidents impliquant des informations personnelles identifiables (PII) constitue un pilier d’ISO/IEC 27018. Une violation de données personnelles peut avoir des conséquences juridiques, financières et réputationnelles majeures.  
La norme insiste sur l’importance de disposer de **processus documentés, reproductibles et audités** pour détecter, analyser, notifier et corriger les incidents.

---

## Playbook d’incident PII

1. **Détection**  
   - Surveiller les systèmes via logs, SIEM, alertes IDS/IPS.  
   - Déclencher un ticket d’incident PII en cas de suspicion.

2. **Qualification**  
   - Identifier les données concernées (PII/non-PII).  
   - Estimer le volume impacté.  
   - Vérifier si une réidentification est possible.

3. **Analyse**  
   - Identifier la cause racine (erreur humaine, défaut technique, attaque externe).  
   - Évaluer l’impact sur la confidentialité, l’intégrité, la disponibilité.  

4. **Notification**  
   - Si incident confirmé → notifier selon la matrice de décision.  
   - Préparer un rapport de notification interne (RSSI, DPO, Direction).  

5. **Remédiation & suivi**  
   - Mettre en place les mesures correctives immédiates.  
   - Documenter les actions dans le registre des violations.  
   - Préparer un rapport de clôture et plan de prévention.

---

## Modèles de gestion

### Formulaire de notification PII (type CNIL interne)

- Date & heure de détection  
- Description de l’incident  
- Nature des PII concernées  
- Volume estimé (nb d’enregistrements, utilisateurs affectés)  
- Causes identifiées  
- Mesures correctives appliquées  
- Décision de notification (autorité, personnes)  
- Responsable de validation (RSSI/DPO)  

### Registre des violations

| Date       | Nature de l’incident | PII concernées | Volume impacté | Mesures correctives | Notification (CNIL / personnes) | Responsable |
|------------|----------------------|----------------|----------------|---------------------|---------------------------------|-------------|
| 2025-01-12 | Exfiltration logs    | Emails, IP     | 500 comptes    | Révocation clés API, rotation logs | CNIL notifiée (72h), pas de notification personnes | RSSI |

### Matrice de décision

| Critère                        | Action |
|--------------------------------|--------|
| Données PII non sensibles, volume faible, impact limité | Consigner dans registre interne uniquement |
| PII sensibles ou volume significatif | Notifier l’autorité (CNIL/EDPB) sous 72h |
| Risque élevé pour les droits et libertés des personnes | Notifier l’autorité + informer individuellement les personnes concernées |

---

## Délais de gestion

ISO 27018 encourage à se caler sur les délais RGPD :  
- **T+24h** : analyse et qualification complète de l’incident.  
- **T+72h** : notification de l’autorité si nécessaire.  
- **Notification aux personnes** : dès que possible si risque élevé pour leurs droits et libertés.  

Ces jalons doivent être intégrés dans le plan de gestion de crise et testés régulièrement via exercices.

---

## Cas concret

En 2020, une plateforme SaaS européenne a subi une fuite de bases clients (nom, email, adresses IP). Bien qu’ayant notifié la CNIL, l’entreprise a été sanctionnée car la notification avait eu lieu 10 jours après la découverte de l’incident. L’audit a révélé l’absence de playbook clair. Depuis, l’organisation a adopté un processus inspiré d’ISO 27018, avec un jalon T+24h pour l’analyse et T+72h pour la notification CNIL, assorti de formulaires normalisés.

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Décrire le processus de gestion d’un incident PII selon ISO 27018.  
- Utiliser un playbook d’incident pour structurer détection, analyse, notification et remédiation.  
- Appliquer des modèles concrets : formulaire de notification, registre des violations, matrice décisionnelle.  
- Respecter les délais normatifs (T+24h analyse, T+72h notification autorité).  

---

## Checklist RSSI

- [ ] Définir un playbook documenté de gestion d’incident PII.  
- [ ] Mettre en place un formulaire de notification interne validé par le DPO.  
- [ ] Maintenir un registre des violations complet et à jour.  
- [ ] Utiliser une matrice de décision claire pour la notification CNIL/personnes.  
- [ ] Respecter systématiquement les jalons T+24h / T+72h.  
