
# 12 - Modèles et checklists PCI DSS

Ce fichier fournit des **trames** concrètes pour faciliter la mise en œuvre de PCI DSS v4.0.

___

## ✅ Checklist pré-audit PCI (RSSI)

- [ ] Périmètre PCI défini (CDE, Cloud, prestataires)
- [ ] Registre des PAN à jour
- [ ] Politique PCI DSS validée et signée
- [ ] Revue des accès complétée (3 mois)
- [ ] Journaux collectés et centralisés (12 mois)
- [ ] Scans trimestriels (internes + ASV)
- [ ] Tests d’intrusion réalisés et corrigés
- [ ] Tous les documents horodatés

___

## 🗂 Exemple de registre PAN

| Système | Contient PAN | Type de stockage | Protection |
|---------|--------------|------------------|------------|
| `web01` | Oui | SQL chiffré | AES-256, accès restreint |
| `backup1` | Oui | Archive ZIP | Chiffrée, auto-suppression 30j |
| `mailgate` | Non | - | -

___

## 🛡 Trame de politique PCI DSS

> **Nom** : Politique PCI DSS v4.0  
> **Responsable** : RSSI / DSI  
> **Version** : 2025.1  
> **Objectifs** :  
> - Protéger les PAN  
> - Répondre aux 12 exigences PCI  
> - Définir les rôles et responsabilités  
> **Révision annuelle** obligatoire

___

## 🧾 Fiche de revue d’accès

| Nom | Rôle | Accès critique | Revu le | Validé par |
|-----|------|----------------|---------|------------|
| Alice M. | Dev | Base PAN | 10/03/25 | RSSI |
| Bruno T. | Admin | SIEM / firewall | 10/03/25 | DSI |

___

## 📅 Modèle de plan annuel PCI DSS

| Mois | Action |
|------|--------|
| Janvier | Revue politique, sensibilisation |
| Mars | Scan ASV + scan interne |
| Juin | Revue d’accès + mise à jour SIEM |
| Septembre | Pentest annuel |
| Décembre | Préparation du ROC / SAQ |

___

## Conclusion

Ces trames ne remplacent pas un audit, mais permettent de **formaliser les preuves** et **structurer la conformité PCI DSS** de manière professionnelle.

