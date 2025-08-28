# 09_CasPratiques_IEC62443

Les cas pratiques permettent de traduire les concepts de la norme IEC 62443 en architectures et processus concrets. Plutôt que des exemples trop génériques, voici trois scénarios sectoriels détaillés, couvrant des environnements critiques et représentatifs : **eau potable**, **agro‑alimentaire**, et **énergie**.  

---

## Scénario 1 : Eau potable (télégestion, liaisons radio, contraintes de latence)

### Zoning
- **Zone IT** : ERP, supervision centrale.  
- **DMZ industrielle** : serveurs SCADA collectant les données terrain.  
- **Zone OT critique** : automates de télégestion et RTU.  
- **Liaisons radio** : utilisées pour la communication entre stations distantes.  

### SL‑T visés
- **SCADA** : SL‑T = 2 (résister à des malwares opportunistes).  
- **RTU/automates** : SL‑T = 3 (résister à une malveillance interne ciblée).  
- **Radio** : SL‑T = 3 (contrôle d’usage strict + chiffrement).  

### Exigences clés
- **IAC/UC** : MFA pour opérateurs SCADA, RBAC sur les accès de télégestion.  
- **RDF** : segmentation stricte entre IT et OT, firewalls filtrant les flux radio.  
- **DC** : chiffrement des communications radio (VPN IPsec ou TLS bas latence).  
- **RA** : redondance des liaisons radio, plan PRA OT pour la continuité d’alimentation en eau.  

### Pièges fréquents
- Utilisation de protocoles radio non chiffrés (Modbus/TCP ou DNP3 en clair).  
- Comptes partagés pour la télégestion.  
- Absence de tests de latence → déploiement d’un VPN trop lourd qui ralentit la régulation.  

### Preuves d’audit
- Configurations VPN IPsec/TLS.  
- Journaux d’accès SCADA avec MFA.  
- PV de tests de latence garantissant la performance du chiffrement.  
- Procédures PRA OT et résultats de tests de restauration.  

---

## Scénario 2 : Agro‑alimentaire (lignes batch, qualification, change control)

### Zoning
- **Zone IT** : ERP, MES (Manufacturing Execution System).  
- **Zone DMZ industrielle** : serveurs d’historisation et de qualification.  
- **Zone OT critique** : automates de ligne batch, IHM, systèmes de contrôle de process.  

### SL‑T visés
- **MES/Qualification** : SL‑T = 2 (erreurs humaines et malwares opportunistes).  
- **Lignes batch** : SL‑T = 3 (malveillance interne ciblée, sabotage process).  

### Exigences clés
- **SI** : durcissement des automates, whitelisting applicatif sur les IHM.  
- **UC** : séparation stricte des comptes de qualification et de production.  
- **Change management** : procédures validées (qualification → production).  
- **TRE** : journalisation fine des lots, intégrité des données de traçabilité.  

### Pièges fréquents
- Bypass des procédures de qualification pour gagner du temps → non‑conformité réglementaire.  
- Comptes partagés entre opérateurs de ligne.  
- Absence de PRA → perte de traçabilité d’un lot complet après incident.  

### Preuves d’audit
- Registres de change management validés et signés.  
- Journaux de production avec traçabilité des lots.  
- Rapports de qualification des équipements.  
- Captures de configurations RBAC et whitelisting.  

---

## Scénario 3 : Énergie (sous‑station, IEC 61850, flux unidirectionnels)

### Zoning
- **Zone IT** : dispatching national.  
- **DMZ énergie** : concentrateurs de données, serveurs SCADA IEC 61850.  
- **Zone OT critique** : IED (Intelligent Electronic Devices), automates de sous‑station.  
- **Conduits unidirectionnels** : diodes pour flux OT → IT (téléinformation).  

### SL‑T visés
- **SCADA** : SL‑T = 3 (malveillance interne ciblée).  
- **IED/automates** : SL‑T = 4 (résister à une APT externe organisée).  

### Exigences clés
- **RDF** : flux unidirectionnels (data diode OT → IT).  
- **IAC/UC** : MFA pour accès aux SCADA, RBAC strict sur IED.  
- **SI** : intégrité logicielle des IED (secure boot, firmware signé).  
- **TRE** : SOC OT avec corrélation d’événements IEC 61850.  
- **RA** : redondance des concentrateurs SCADA, PRA pour continuité d’alimentation.  

### Pièges fréquents
- Laisser un flux bidirectionnel IT ↔ OT par facilité → attaque pivotante.  
- Absence de tests SAT en sous‑station → configurations non validées.  
- Fournisseurs accédant directement aux IED sans bastion.  

### Preuves d’audit
- Configurations des data diodes et PV de tests.  
- Journaux d’accès SCADA (MFA activé).  
- Certificats de firmware signé pour IED.  
- Rapports SOC OT avec alertes IEC 61850.  
- PV de tests PRA énergie.  

---

## Objectifs pédagogiques

À l’issue de ce chapitre, l’apprenant devra être capable de :  
- Décrire une architecture OT sécurisée adaptée à un secteur donné (eau, agro‑alimentaire, énergie).  
- Définir des SL‑T réalistes selon le secteur et les menaces.  
- Identifier les exigences clés (FR/SR) propres à chaque cas.  
- Reconnaître les pièges fréquents et savoir les éviter.  
- Préparer les preuves d’audit nécessaires à chaque scénario.  

---

## Checklist RSSI

- [ ] Valider que chaque secteur dispose d’un zoning documenté.  
- [ ] Vérifier que les SL‑T sont définis et justifiés.  
- [ ] Exiger la mise en œuvre des exigences clés (MFA, PRA, chiffrement, whitelisting).  
- [ ] Auditer la présence et l’efficacité des preuves (logs, PV, configurations).  
- [ ] Présenter les cas sectoriels lors des comités de gouvernance pour sensibiliser la direction.  
