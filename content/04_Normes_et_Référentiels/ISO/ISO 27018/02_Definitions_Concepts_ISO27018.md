# 02_Definitions_Concepts_ISO27018

La compréhension des termes utilisés dans l’ISO/IEC 27018 est essentielle pour éviter toute ambiguïté dans la mise en œuvre. Ce chapitre fournit un rappel des définitions clés ainsi que des exemples concrets pour en assurer la bonne interprétation dans un contexte opérationnel.

---

## Mini-glossaire opérationnel

### Informations personnelles identifiables (PII – Personally Identifiable Information)
Toute donnée permettant d’identifier directement ou indirectement une personne physique.  
**Exemples :** nom, prénom, adresse email professionnelle, identifiant utilisateur, adresse IP, cookie de session, enregistrements vocaux.  

### Pseudonymisation
Traitement consistant à remplacer certains identifiants par des pseudonymes, afin de réduire le lien direct avec une personne.  
**Exemple :** remplacer un identifiant patient “Jean Dupont” par “ID-4567”.  
⚠️ La réidentification reste possible avec les clés de correspondance → il s’agit donc encore de **PII**.

### Anonymisation
Processus rendant impossible toute réidentification, même avec des données complémentaires.  
**Exemple :** suppression définitive de l’adresse IP et de tout identifiant unique d’un dataset.  
⚠️ Contrairement à la pseudonymisation, l’anonymisation sort le jeu de données du champ du RGPD et de l’ISO 27018.

### Mesures techniques et organisationnelles (TOMs – Technical and Organisational Measures)
Contrôles imposés au fournisseur Cloud pour protéger les PII.  
**Exemples :** chiffrement AES-256 des bases clients, gestion stricte des droits d’accès, procédures d’escalade en cas d’incident, sauvegardes géo-redondantes.

### Accord de traitement de données (DPA – Data Processing Agreement)
Document contractuel imposé au fournisseur Cloud par le client, définissant ses obligations de sous-traitant.  
**Exemple :** Microsoft fournit un DPA standard intégré à Office 365 couvrant confidentialité, localisation des données et notification d’incident.

### Clauses contractuelles types (SCCs – Standard Contractual Clauses)
Modèles juridiques approuvés par la Commission européenne pour encadrer les transferts de PII en dehors de l’UE.  
**Exemple :** transfert de données d’utilisateurs européens vers les États-Unis via Amazon AWS nécessitant SCCs intégrées au contrat.

---

## Exemples concrets de données PII en contexte Cloud

- **Logs d’accès :** un journal d’authentification peut contenir identifiant utilisateur, adresse IP et horodatage. Ces éléments sont des PII.  
- **Métadonnées :** des métadonnées dans un fichier (nom du créateur, adresse email, identifiant machine) constituent des PII.  
- **Backups :** une sauvegarde de base de données clients contient des noms, adresses et historiques de transactions → toutes ces informations relèvent de l’ISO 27018.  

---

> [!warning]  
> **Confusions fréquentes :**  
> - Pseudonymisé ≠ anonymisé : un dataset pseudonymisé reste une PII.  
> - Les logs techniques, souvent perçus comme inoffensifs, peuvent contenir des identifiants ou des IP → ils relèvent du périmètre ISO 27018.  

---

## Cas concret

En 2020, un hôpital européen a subi une fuite de logs de son portail patient. Les journaux contenaient des adresses IP, des identifiants d’utilisateur et des horodatages précis. Bien que les données ne comportaient pas directement de noms, elles étaient considérées comme des PII car la réidentification des patients était possible par recoupement. Cet incident démontre la nécessité de distinguer clairement les données réellement anonymisées des simples pseudonymisations.

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Définir et distinguer les concepts de PII, pseudonymisation et anonymisation.  
- Identifier les TOMs, DPA et SCCs comme leviers contractuels et organisationnels clés.  
- Reconnaître que les logs, métadonnées et backups peuvent contenir des PII.  
- Éviter les confusions fréquentes lors des audits et des contrats Cloud.  

---

## Checklist RSSI

- [ ] Vérifier que les données pseudonymisées sont toujours traitées comme PII.  
- [ ] S’assurer que les données anonymisées sortent bien du champ ISO 27018.  
- [ ] Contrôler si les logs d’authentification et métadonnées contiennent des PII.  
- [ ] Confirmer que le fournisseur fournit un DPA conforme ISO 27018.  
- [ ] En cas de transfert hors UE, vérifier l’intégration de SCCs valides.  
