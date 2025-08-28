
# 9 - Maintien de la conformité PCI DSS dans le temps

La conformité PCI DSS n’est pas un événement ponctuel mais un **processus continu**.  
Ce chapitre décrit les actions à maintenir **toute l’année** après la validation (ROC ou SAQ).

___

## 1. Cycle annuel de conformité

| Étape | Fréquence | Responsable |
|-------|-----------|-------------|
| Scan ASV | Trimestriel | Infra / RSSI |
| Scan vulnérabilité interne | Trimestriel | Sécurité interne |
| Test d’intrusion | Annuel | Prestataire externe |
| Revue de configuration | Biannuelle | Admins système |
| Revue d’accès utilisateur | Trimestrielle | RH + IT |
| Revue de politique de sécurité | Annuelle | RSSI |

___

## 2. Suivi post-audit (ROC ou SAQ)

- Archivage de toutes les preuves
- Plan d’action correctif pour écarts mineurs
- Roadmap de mise à jour (patchs, MFA, scripts…)

> [!warning]
> Toute preuve utilisée doit être **datée** et **tracée**.

___

## 3. Gestion des changements

Tout changement (infra, prestataire, outil, méthode de stockage du PAN) impose une **réévaluation de conformité**.

| Type de changement | Impact PCI DSS |
|--------------------|----------------|
| Migration vers cloud | Périmètre à redéfinir, contrat tiers |
| Nouveau site e-commerce | SAQ/ROC à ajuster |
| Changement de fournisseur de paiement | Analyse d’impacts, preuve ASV, preuve flux TLS |

> [!danger]
> Un changement non évalué peut rendre le certificat PCI DSS **caduc**.

___

## 4. Mise à jour de la documentation

- Mise à jour des procédures (accès, logs, chiffrement…)
- Archivage des scans/rapports/décisions dans un répertoire PCI
- Documentation versionnée (dates, auteur, contrôle)

___

## 5. Automatisation et outils recommandés

- SIEM pour surveillance continue (logs + alertes)
- Scans automatisés (OpenVAS, Qualys)
- Scripts de contrôle de conformité interne
- Plateformes de gouvernance GRC (ex : Wazuh, Drata, Vanta)

___

## 6. Communication interne

- Tableau de bord PCI DSS (KPI : nombre d’écarts, taux de correction…)
- Rapport de conformité à la direction
- Planning prévisionnel de revues / audits

___

## Conclusion

Le **maintien de conformité** est la clé d’une sécurité durable.  
La norme PCI DSS impose une **hygiène permanente**, un suivi rigoureux, et une **documentation vivante**.
