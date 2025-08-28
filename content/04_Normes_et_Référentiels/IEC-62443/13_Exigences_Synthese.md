# 13_Exigences_Synthese

Ce chapitre propose une **synthèse opérationnelle ultime** des exigences de l’IEC 62443, enrichie pour être directement utilisable en audit.  
Chaque exigence est associée à un responsable, des preuves attendues, des outils conseillés, un KPI de suivi, un horizon de mise en œuvre et un mapping vers d’autres référentiels (ISO 27001, NIS2, NIST CSF).  
De plus, un lien explicite est fait avec les niveaux de sécurité (**SL‑T vs SL‑A**) afin de démontrer la conformité.  

---

## Tableau de synthèse enrichi des exigences IEC 62443

| **Exigence (FR/SR)**          | **Responsable principal** | **Preuves attendues**                   | **Outils / Conseils**             | **KPI associé**                           | **SL‑T / SL‑A** | **Référentiel associé** |
|-------------------------------|---------------------------|-----------------------------------------|-----------------------------------|-------------------------------------------|-----------------|--------------------------|
| **IAC – Authentification MFA** | RSSI OT / Intégrateur     | Journaux HMI/SCADA, captures config MFA | Bastion, MFA matériel, RBAC       | % comptes MFA actifs / comptes totaux      | SL‑T=3 / SL‑A=3 | ISO A.5.16 / NIS2 PR.AC  |
| **UC – Moindre privilège**    | Asset owner / Exploitant  | Matrice d’habilitation, PV de revues     | RBAC, SoD, formulaires d’accès    | % comptes désactivés <7j après départ      | SL‑T=2 / SL‑A=2 | ISO A.8.2 / NIST PR.AC   |
| **SI – Durcissement systèmes**| Intégrateur / Fournisseur | Scripts de durcissement, SBOM, PV FAT   | Whitelisting, Secure Boot, EDR    | % systèmes conformes checklist durcissement| SL‑T=3 / SL‑A=2 | ISO A.8.8 / NIST PR.DS   |
| **DC – Chiffrement TLS/IPsec**| Intégrateur / Fournisseur | Configs TLS, certificats signés         | PKI interne, VPN IPsec, CPS FIPS  | % flux critiques chiffrés TLS/IPsec        | SL‑T=3 / SL‑A=3 | ISO A.8.24 / NIST PR.DS  |
| **RDF – Segmentation/conduits**| RSSI OT / Intégrateur    | Schémas réseaux, règles FW, dumps ACL   | Firewalls L3/L4, DPI, data diode  | % flux OT passant uniquement via DMZ       | SL‑T=3 / SL‑A=2 | ISO A.8.20 / NIST PR.PT  |
| **TRE – Journalisation / SIEM**| RSSI OT / SOC OT         | Dashboards SIEM, rapports corrélation   | Syslog, SIEM OT, SOAR, IDS/IPS    | % événements OT corrélés en <15 min        | SL‑T=3 / SL‑A=2 | ISO A.8.16 / NIST DE.AE  |
| **RA – PRA / Sauvegardes**    | Asset owner / Mainteneur  | Rapports PRA, PV restauration           | Stratégie 3‑2‑1, PRA/PCA OT       | % PRA testés avec succès / an              | SL‑T=3 / SL‑A=2 | ISO A.5.29 / NIST RC.RP  |
| **Change management**         | Intégrateur / Resp. OT    | PV comités, formulaires validés         | ITIL adapté OT, workflows OT      | % changements validés en comité            | SL‑T=2 / SL‑A=2 | ISO A.8.32 / NIST PR.IP  |
| **Vendor access sécurisé**    | RSSI OT / Fournisseur     | Journaux bastion, formulaires d’accès   | Jump server, MFA, session recording | % accès fournisseurs tracés via bastion    | SL‑T=3 / SL‑A=2 | ISO A.5.18 / NIS2 PR.AC  |
| **Revue périodique comptes**  | RSSI OT / Asset owner     | Rapports de revue, liste comptes fermés | IAM OT, audits trimestriels       | % comptes revus / nombre total de comptes  | SL‑T=2 / SL‑A=2 | ISO A.5.15 / NIST PR.AC  |
| **Tests FAT / SAT**           | Intégrateur / Fournisseur | PV FAT/SAT, registre non‑conformités    | Plateforme FAT, tests site SAT    | % écarts corrigés avant mise en prod       | SL‑T=3 / SL‑A=3 | IEC 62443‑3‑3             |
| **KPI OT**                    | RSSI OT / COMEX           | Tableaux patchs/incidents/PRA           | Dashboard SSI OT, reporting COMEX | Nb incidents OT détectés / temps moyen détection (MTTD) | SL‑T=3 / SL‑A=2 | NIS2 / DORA RC.IM        |

---

## Retours d’expérience

- **Énergie** : le régulateur a exigé la présentation d’un tableau FR/SR enrichi avec KPI et SL‑T/SL‑A. Sans ce tableau, l’opérateur a été incapable de prouver la conformité rapidement → non‑conformité relevée. Après ajout du tableau, l’audit a été clos favorablement.  
- **Pharma** : lors d’une inspection FDA, un registre synthétique FR/SR avec preuves, KPI et mapping ISO/NIST a permis de démontrer la conformité en 2h, alors qu’un audit similaire avait pris 2 jours auparavant.  

---

## Utilisation pratique

Ce tableau peut servir :  
- de **registre central de conformité** ;  
- de **support d’audit interne/externe** ;  
- de **preuve directe en inspection réglementaire** ;  
- d’outil de suivi COMEX (KPI + SL‑T/SL‑A).  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant devra être capable de :  
- Utiliser une synthèse FR/SR enrichie avec preuves, KPI et SL‑T/SL‑A.  
- Cartographier les exigences 62443 avec ISO 27001, NIS2 et NIST CSF.  
- Préparer un audit externe grâce à un tableau consolidé.  
- Sensibiliser le COMEX avec des KPI clairs et actionnables.  

---

## Checklist RSSI

- [ ] Maintenir un tableau FR/SR enrichi avec preuves, KPI, SL‑T/SL‑A.  
- [ ] Vérifier l’alignement avec ISO 27001, NIS2, NIST CSF.  
- [ ] Auditer régulièrement la cohérence entre SL‑T et SL‑A.  
- [ ] Suivre les KPI OT et présenter les résultats au COMEX.  
- [ ] Archiver les preuves pour tout audit externe.  
