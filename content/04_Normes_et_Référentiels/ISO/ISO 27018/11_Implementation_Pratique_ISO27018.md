# 11_Implementation_Pratique_ISO27018

L’ISO/IEC 27018 n’a de valeur que si elle est traduite en pratiques concrètes, à la fois pour le **client (controller)** et pour le **fournisseur Cloud (processor)**.  
Une implémentation réussie passe par une roadmap claire avec étapes successives, preuves et mécanismes d’audit.  

---

## Roadmap côté client (controller)

1. **Inventaire des traitements PII dans le Cloud**  
   - Identifier toutes les applications Cloud (SaaS, PaaS, IaaS) traitant des PII.  
   - Classifier les PII selon leur sensibilité (nom, IP, données RH, financières, santé).  
   **Preuves :** registre des traitements, cartographie applicative.

2. **Négociation du DPA (Data Processing Agreement)**  
   - Vérifier que les finalités sont définies et limitées.  
   - Exiger les clauses de réversibilité, droits d’audit, sous-traitants, transferts.  
   **Preuves :** DPA signé, annexes contractuelles.

3. **Implémentation des TOMs**  
   - S’assurer que le fournisseur applique des mesures conformes : chiffrement, MFA, politiques de rétention, gestion des accès.  
   - Paramétrer les options disponibles côté client (activation MFA, configuration rétention O365, gestion clés BYOK).  
   **Preuves :** captures d’écran portail, exports policies, logs d’activation.

4. **Paramétrage de la sécurité**  
   - Activer les logs d’administration et d’accès (CloudTrail, Azure Monitor, O365 Audit Logs).  
   - Vérifier la rétention des journaux et leur export vers un SIEM interne.  
   **Preuves :** exports logs, configurations de rétention.

5. **Tests et exercices**  
   - Réaliser des tests d’export/réversibilité.  
   - Simuler un incident PII pour vérifier les délais de notification.  
   **Preuves :** rapports de tests, comptes-rendus d’exercices.

6. **Revue périodique**  
   - Vérifier au moins une fois par an la conformité des DPA, des TOMs et des notifications sub-processors.  
   **Preuves :** compte-rendu de revue annuelle, registre des mises à jour contractuelles.

---

## Roadmap côté fournisseur (processor)

1. **Publication du catalogue de TOMs**  
   - Mettre à disposition un whitepaper sécurité ou portail décrivant toutes les mesures appliquées (chiffrement, sauvegardes, logs).  
   **Preuves :** whitepaper, guide technique, portail sécurité.

2. **Activation et conservation des logs administrateurs**  
   - Activer la traçabilité des actions techniques réalisées par le personnel du fournisseur.  
   - Définir une durée de conservation compatible avec les attentes des clients.  
   **Preuves :** rapports logs admin, captures config.

3. **Gestion des sous-traitants (sub-processors)**  
   - Publier une liste à jour des sous-traitants.  
   - Notifier les clients de tout changement.  
   **Preuves :** liste publique en ligne, mails de notification, registres internes.

4. **Mise en place du processus de notification PII**  
   - Disposer d’un playbook interne pour incidents PII.  
   - Respecter le délai de T+72h maximum.  
   **Preuves :** rapports incidents, formulaires notification, SLA contractuels.

5. **Production de preuves auditables**  
   - Rendre disponibles les certificats ISO 27001/27018 et rapports SOC2.  
   - Fournir un accès automatisé via portail/API.  
   **Preuves :** certificats, rapports téléchargeables, captures portail.

---

## Cas concret

En 2023, une entreprise du secteur santé a implémenté ISO 27018 avec son fournisseur SaaS.  
- **Côté client**, elle a activé le MFA sur O365, configuré les politiques de rétention et exigé un DPA avec clauses SCCs.  
- **Côté fournisseur**, le SaaS a mis en place une liste publique de sub-processors, un processus de notification PII sous 72h et fourni les rapports SOC2 via son portail sécurité.  

L’audit annuel a démontré la conformité ISO 27018 des deux parties grâce à des preuves concrètes documentées.

---

## Intégration et gouvernance continue

L’implémentation d’ISO 27018 ne doit pas être perçue comme un projet ponctuel, mais comme une **démarche intégrée au cycle PDCA (Plan-Do-Check-Act)** :  
- **Plan** : inventorier les traitements, signer les DPA, définir les TOMs.  
- **Do** : mettre en œuvre les configurations (logs, MFA, rétention, export).  
- **Check** : vérifier les preuves, réaliser des audits internes, comparer avec RGPD.  
- **Act** : corriger les écarts, renforcer les clauses contractuelles, mettre à jour les TOMs.  

Les **audits externes** (ISO 27018, SOC2) doivent être préparés en centralisant toutes les preuves (contrats, registres, exports, rapports). Les RSSI/DPO doivent exiger un accès simple via portail ou API pour faciliter les contrôles.  

Enfin, l’ISO 27018 doit être alignée avec :  
- **ISO 27017** pour les aspects sécurité Cloud généraux.  
- **RGPD** pour les obligations légales (notification, transferts, droits personnes).  

Cette gouvernance intégrée garantit que les pratiques ISO 27018 restent à jour et auditées en continu.

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Décrire la roadmap client et fournisseur pour mettre en œuvre ISO 27018.  
- Identifier les preuves attendues à chaque étape (registre, DPA, policies, logs).  
- Vérifier que la conformité est démontrée à la fois contractuellement et techniquement.  
- Expliquer comment intégrer ISO 27018 dans une gouvernance continue alignée sur PDCA et RGPD.  

---

## Checklist RSSI

- [ ] Maintenir un inventaire actualisé des traitements PII Cloud.  
- [ ] Vérifier que tous les DPA sont signés et complets.  
- [ ] Contrôler la configuration des TOMs et options de sécurité disponibles.  
- [ ] Tester régulièrement la réversibilité et la notification d’incident.  
- [ ] Suivre la liste des sub-processors et SLA notification du fournisseur.  
- [ ] Télécharger et archiver les rapports ISO 27018/SOC2 du fournisseur.  
- [ ] Intégrer la vérification ISO 27018 dans le cycle PDCA du SMSI.  
