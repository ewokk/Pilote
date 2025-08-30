# 08_Transparence_Fournisseur_ISO27018

La transparence du fournisseur constitue l’un des piliers d’ISO/IEC 27018. Le client (controller) doit pouvoir vérifier que son fournisseur Cloud (processor) applique bien les engagements contractuels et respecte les mesures techniques et organisationnelles (TOMs).  
Cette transparence ne repose pas sur des déclarations générales, mais sur la mise à disposition régulière de preuves, rapports et portails accessibles aux clients.

---

## Catalogue de TOMs (mesures techniques et organisationnelles)

Le fournisseur doit publier ou fournir un catalogue détaillant les TOMs en place pour protéger les PII :  
- Contrôles d’accès logiques et physiques.  
- Journalisation et surveillance continue.  
- Politiques de sauvegarde et de rétention.  
- Chiffrement au repos et en transit.  

**Exemple :** Microsoft publie régulièrement des whitepapers de sécurité décrivant les mesures appliquées à Azure et Microsoft 365 (chiffrement TLS, Azure AD, Security Center).

**Preuves attendues :** whitepapers sécurité, guides techniques, documents contractuels annexés.

---

## Rapports d’audit indépendants

La transparence passe aussi par la fourniture de rapports réalisés par des auditeurs tiers :  
- Certifications ISO 27001, ISO 27018.  
- Rapports SOC 1 / SOC 2.  
- Résultats de tests de conformité (PCI DSS, FedRAMP, HDS en France).  

**Exemple :** AWS propose via son portail « AWS Artifact » le téléchargement des rapports SOC 2 Type II et ISO 27018, disponibles pour les clients authentifiés.

**Preuves attendues :** certificats ISO, rapports SOC2, attestations d’audit téléchargeables.

---

## Liste publique des sous-traitants (sub-processors)

Le fournisseur doit maintenir une liste actualisée des sous-traitants autorisés, accessible publiquement :  
- Identité des sub-processors.  
- Localisation géographique.  
- Nature des services rendus.  
- Modalités de notification en cas de changement.  

**Exemple :** Google Cloud publie en ligne la liste complète de ses sub-processors avec possibilité pour les clients de s’inscrire aux notifications de mise à jour.

**Preuves attendues :** liste publique sur site web, notifications reçues par email.

---

## Statut des incidents et communication

La transparence inclut la communication proactive sur les incidents :  
- Portail dédié au statut des services et incidents passés.  
- Rapports post-mortem disponibles pour les clients.  
- Délais de rétablissement et mesures correctives décrits.  

**Exemple :** Microsoft fournit un portail « Service Health » détaillant en temps réel l’état des services O365 et permettant d’exporter les historiques d’incidents.

**Preuves attendues :** captures d’écran du portail, exports d’incidents, rapports post-mortem.

---

## Portails et API d’accès aux preuves

ISO 27018 incite à ce que les preuves soient accessibles facilement au client, via :  
- **Portails dédiés** : AWS Artifact, Azure Trust Center, Microsoft Compliance Manager.  
- **APIs** : pour automatiser la récupération des rapports d’audit, de la liste des sub-processors, ou du statut des services.  
- **Automatisations** : intégration dans un SIEM ou une plateforme GRC interne pour centraliser et corréler les preuves.

**Exemple :** un RSSI peut automatiser le téléchargement mensuel des rapports SOC 2 via AWS Artifact API pour les archiver dans un outil interne de gouvernance.

---

## Cas concret

En 2022, une entreprise du secteur santé a exigé de son fournisseur Cloud les rapports ISO 27018 et la liste actualisée des sous-traitants. Le fournisseur n’ayant pas de portail automatisé, ces documents ont été transmis manuellement, entraînant des retards lors de l’audit interne. L’entreprise a ensuite migré vers un prestataire offrant une transparence via API, démontrant l’importance de l’accessibilité des preuves.

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Décrire les attentes ISO 27018 en matière de transparence fournisseur.  
- Identifier les documents à exiger : TOMs, rapports d’audit, liste de sub-processors, rapports d’incidents.  
- Comprendre comment accéder à ces preuves via portails et APIs.  
- Évaluer la maturité d’un fournisseur en matière de transparence opérationnelle.  

---

## Checklist RSSI

- [ ] Obtenir le catalogue des TOMs (whitepaper sécurité, guides techniques).  
- [ ] Télécharger et archiver les rapports d’audit indépendants (ISO, SOC2).  
- [ ] Vérifier la mise à jour régulière de la liste des sub-processors.  
- [ ] Accéder au portail incidents et exporter les rapports post-mortem.  
- [ ] Automatiser la récupération des preuves via API ou intégration SIEM.  
