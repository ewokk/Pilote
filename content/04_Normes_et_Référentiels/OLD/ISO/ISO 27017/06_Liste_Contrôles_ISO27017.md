# Liste complète des contrôles ISO/IEC 27017

> [!info]
> Ce fichier liste les **7 nouveaux contrôles spécifiques au Cloud** ainsi que les **37 contrôles existants de l’ISO/IEC 27002:2013** qui sont étendus par ISO/IEC 27017 avec des recommandations Cloud. Chaque contrôle est présenté avec son objectif, sa portée, et des conseils d’application pour le **client** ou le **fournisseur** Cloud.

---

## 🔹 Nouveaux contrôles spécifiques ISO/IEC 27017 (7 contrôles)

| Numéro | Titre | Rôle | Objectif / Contenu |
|--------|-------|------|---------------------|
| 12.1.5 | Suppression des actifs clients | Fournisseur | Le fournisseur doit garantir que les actifs du client sont bien supprimés à la fin du contrat ou à la demande. |
| 12.4.5 | Surveillance des activités du client | Fournisseur | Surveiller les actions des clients uniquement si cela est autorisé, documenté, et transparent. |
| 13.1.4 | Séparation des environnements clients | Fournisseur | Empêcher les interférences entre les clients dans des environnements partagés (Cloud mutualisé). |
| 14.2.1.1 | Configuration de machines virtuelles | Client | S’assurer que la configuration des machines virtuelles est sécurisée et validée. |
| 14.2.7.1 | Hardening des environnements Cloud | Fournisseur | Appliquer les meilleures pratiques de sécurité sur les environnements virtualisés. |
| 15.1.1.1 | Contrats Cloud | Client/Fournisseur | Les contrats doivent clairement établir les rôles et responsabilités en matière de sécurité. |
| 18.1.5.1 | Juridiction et stockage des données | Client/Fournisseur | Déterminer où les données sont physiquement stockées et selon quelle législation. |

---

## 🔹 Contrôles ISO 27002:2013 étendus avec des recommandations Cloud (37 contrôles)

Les contrôles suivants sont issus d’ISO/IEC 27002:2013 et sont enrichis par ISO/IEC 27017 avec des conseils spécifiques pour les environnements Cloud.

> [!example]
> Exemple : A.9.2.1 (Gestion des comptes utilisateurs) → précise la gestion multi-locataire dans un Cloud.

---

### A.6 – Organisation de la sécurité de l'information
- A.6.2.1 – Mobilité (Cloud = gestion des accès à distance)
- A.6.2.2 – Accords avec les tiers (Cloud providers)

### A.9 – Contrôle d'accès
- A.9.2.1 – Enregistrement des utilisateurs
- A.9.2.3 – Gestion des droits
- A.9.4.1 – Restriction des accès
- A.9.4.2 – Contrôle des accès utilisateurs
- A.9.4.3 – Accès aux systèmes/applications

### A.12 – Sécurité opérationnelle
- A.12.1.1 – Documentation procédures
- A.12.1.2 – Changement de procédure
- A.12.1.3 – Capacité Cloud
- A.12.1.4 – Segmentation réseau Cloud
- A.12.2.1 – Enregistrement des événements
- A.12.3.1 – Sauvegardes
- A.12.4.1 – Journalisation
- A.12.4.3 – Synchronisation horloge
- A.12.6.1 – Gestion des vulnérabilités

### A.13 – Sécurité des communications
- A.13.1.1 – Sécurité réseaux
- A.13.1.3 – Segmentation logique
- A.13.2.1 – Transfert d’information

### A.14 – Acquisition, développement, maintenance systèmes
- A.14.1.1 – Requêtes sécurité dans projets Cloud
- A.14.1.2 – Définition exigences sécurité Cloud
- A.14.1.3 – Architecture sécurité Cloud
- A.14.2.1 – Politiques développement
- A.14.2.5 – Principe de séparation
- A.14.2.8 – Test sécurité
- A.14.3.1 – Protection des données de test

### A.15 – Relations avec les fournisseurs
- A.15.1.1 – Politiques sécurité contractuelle
- A.15.1.2 – Contrôle fournisseurs Cloud
- A.15.2.1 – Suivi performance sécurité

### A.16 – Gestion des incidents
- A.16.1.1 – Responsabilités notification incident
- A.16.1.4 – Évaluation vulnérabilité Cloud
- A.16.1.5 – Journalisation incidents Cloud

### A.17 – Aspects sécurité continuité activité
- A.17.1.1 – Inclusion sécurité dans PCA
- A.17.2.1 – Test régulier des plans

### A.18 – Conformité
- A.18.1.3 – Protection des enregistrements
- A.18.1.4 – Vie privée et données personnelles (Cloud)

> [!tip]
> Pour chaque contrôle, ISO/IEC 27017 ajoute des détails **spécifiques au Cloud**, souvent en précisant les rôles entre **client** et **fournisseur**.

---

Souhaites-tu que je crée ensuite une fiche `.md` par **nouveau contrôle Cloud**, avec :  
- Explication détaillée  
- Mise en œuvre concrète  
- Avantages / limites  
- Conseils d’audit et de conformité ?
