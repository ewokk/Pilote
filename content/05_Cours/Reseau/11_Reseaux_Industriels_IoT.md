# 10 – Réseaux industriels et IoT

Les réseaux industriels et les environnements IoT (Internet of Things) posent des défis de sécurité spécifiques liés à la criticité opérationnelle, à l'obsolescence technologique et à l'ouverture croissante de systèmes historiquement isolés. Ce chapitre couvre les bases des architectures industrielles (ICS, SCADA), les problématiques associées à l'IoT, et les mesures de sécurité adaptées.

> [!info]  
> Un RSSI d’environnement industriel doit intégrer des contraintes de continuité de service, de disponibilité en temps réel, et de résistance aux pannes.

---

## 1. Définitions : SCADA, ICS, OT

| Acronyme | Signification                 | Rôle dans l’environnement industriel          |
|----------|-------------------------------|-----------------------------------------------|
| SCADA    | Supervisory Control And Data Acquisition | Supervision et contrôle à distance |
| ICS      | Industrial Control System     | Ensemble des systèmes de contrôle industriel |
| OT       | Operational Technology        | Systèmes technologiques dédiés à l’exploitation (usine, énergie…) |

---

## 2. Architecture réseau typique en environnement industriel

```
[ NOC / SIEM ]  
     |  
[ IT Network ] ←→ [ DMZ ] ←→ [ Zone de Contrôle ] ←→ [ Zone de Terrain (OT) ]
                                               |
                                        [ Capteurs / Automates / IHM ]
```

- **Zone IT** : systèmes bureautiques, ERP, messagerie
- **DMZ industrielle** : bastion, proxies, supervision
- **Zone de contrôle** : PLC, SCADA, HMI
- **Zone de terrain** : capteurs, actionneurs, IoT

---

## 3. Enjeux spécifiques des réseaux OT / IoT

| Enjeu                           | Particularités industrielles                         |
|----------------------------------|------------------------------------------------------|
| Disponibilité avant tout         | L'arrêt d'un automate = arrêt de production          |
| Protocoles non sécurisés         | Modbus, DNP3, Profinet souvent en clair              |
| Obsolescence logicielle          | Windows XP, équipements sans mises à jour            |
| Difficulté de patching           | Patching = arrêt machine = perte financière          |
| Absence de cloisonnement         | Réseau à plat = propagation instantanée              |

---

## 4. Normes et cadres de sécurité

### Normes essentielles :
- **IEC 62443** : référence mondiale pour la cybersécurité industrielle
- **ISO/IEC 27019** : extension de l’ISO 27001 à l’énergie
- **NIS2** : impose des mesures renforcées pour les opérateurs critiques

### IEC 62443 : structure en couches
- Politique de cybersécurité
- Architecture sécurisée
- Gestion des accès
- Surveillance continue
- Qualification des composants

---

## 5. Segmentation OT / IT

### Objectifs :
- Isoler les environnements de production
- Éviter le rebond d’un ransomware IT vers les automates
- Appliquer des règles de filtrage strictes (firewall, proxy, gateway unidirectionnelle)

> [!tip]  
> Une diode réseau (unidirectional gateway) permet une supervision sortante **sans aucun retour possible**.

---

## 6. Menaces spécifiques

| Type de menace         | Exemple                            |
|------------------------|-------------------------------------|
| Ransomware             | WannaCry, LockerGoga, Ekans         |
| Intrusion / sabotage   | Stuxnet (Iran), Triton (Arabie)     |
| Faux protocoles        | Scan ou fuzz de protocoles industriels |
| Intrus internes        | Maintenance malveillante            |
| IoT vulnérables        | Caméras, capteurs non patchés       |

---

## 7. Sécurisation des équipements industriels

- Cartographie des assets (automates, PC industriels, HMI…)
- Mise en place de VLAN OT séparés
- Utilisation de firewalls industriels (ex : Fortinet Rugged, Stormshield SNxr)
- Supervision réseau spécifique (ex : Nozomi, Claroty)
- Durcissement des OS industriels (restrictions, listes blanches)
- Journaux redirigés vers un SIEM

---

## 8. Sécurité de l’IoT

| Domaine       | Recommandations clés                     |
|---------------|------------------------------------------|
| Authentification | Pas de mots de passe par défaut         |
| Réseau         | VLAN séparés, filtrage, proxy            |
| Mise à jour    | Outils de gestion de flotte, OTA sécurisés |
| Données        | Chiffrement en transit et au repos       |
| Supervision    | Détection des connexions anormales       |

---

## 9. Bonnes pratiques RSSI en environnement OT

- Segmenter physiquement et logiquement les zones OT/IT
- Appliquer une stratégie de moindre privilège même sur les automates
- Mettre en place une surveillance passive adaptée aux protocoles OT
- Tester les plans de continuité (PCS) et de reprise (PRA) industriels
- Former les opérateurs OT à la sécurité (hameçonnage ciblé, support malveillant)
- Intégrer les environnements industriels dans la gestion des vulnérabilités

> [!success]  
> Tu maîtrises désormais les fondations de la sécurité des environnements industriels (OT) et des réseaux IoT. Tu es capable d’en parler concrètement en entretien ou en mission RSSI.
