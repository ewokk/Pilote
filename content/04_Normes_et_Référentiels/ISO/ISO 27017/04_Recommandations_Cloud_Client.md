# ISO/IEC 27017 – Recommandations Cloud pour le Client


## Responsabilités spécifiques du client

Dans un modèle Cloud, la sécurité repose sur le principe de **responsabilité partagée**. Si le fournisseur met à disposition des infrastructures et des services sécurisés, le **client** conserve la responsabilité de la configuration, du suivi et de l’usage qu’il en fait. L’ISO/IEC 27017 insiste sur le fait qu’une mauvaise gouvernance côté client est souvent à l’origine d’incidents majeurs.  

Ainsi, le client doit non seulement évaluer les garanties contractuelles offertes par le fournisseur, mais aussi mettre en place des processus internes pour vérifier la bonne application des mesures de sécurité.

---

## Bonnes pratiques contractuelles

Un RSSI doit exiger que les **SLA (Service Level Agreements)** intègrent des clauses spécifiques de sécurité. Cela inclut :  

- Des délais précis de traitement des incidents de sécurité.  
- La garantie d’une journalisation des événements significatifs (accès administratifs, API, opérations critiques).  
- L’engagement sur le chiffrement des données au repos et en transit.  
- Des clauses de **réversibilité** ou d’**exit plan**, pour éviter tout verrouillage fournisseur (vendor lock-in).  

Sans ces garanties écrites, l’organisation s’expose à des litiges en cas de manquement ou d’incident grave.  

---

## Gestion opérationnelle par le client

Au-delà du contrat, le client doit vérifier concrètement que les mesures sont mises en œuvre :  

- **Logs et monitoring** : l’entreprise doit avoir accès aux journaux et être en mesure de les centraliser dans ses propres outils de supervision (SIEM, SOC).  
- **Chiffrement** : les données doivent être protégées en transit (TLS 1.2/1.3) et au repos (chiffrement AES-256, gestion des clés avec KMS ou HSM).  
- **Revue des accès API** : les API Cloud étant un vecteur d’attaque fréquent, leur journalisation et leur supervision sont essentielles.  
- **Réversibilité** : vérifier la faisabilité technique et contractuelle de la migration des données vers un autre fournisseur.  

> [!tip]  
> Un RSSI doit préparer en amont des **preuves d’audit** : copies des SLA signés, captures de configuration de chiffrement, exports de logs, rapports de tests de réversibilité.  

---

## Exemple concret

Un **DSI choisissant Microsoft Azure** pour héberger son SI doit exiger que tous les journaux d’activité (accès API, authentifications, opérations critiques) soient activés et centralisés dans **Microsoft Sentinel**. Cette configuration permet non seulement de respecter les bonnes pratiques de l’ISO/IEC 27017, mais aussi de disposer de preuves d’audit tangibles lors d’une certification ISO/IEC 27001.  

---

## Cas pratiques & retours d’expérience

- **Cas d’une PME SaaS** : après avoir souscrit à AWS, l’absence de clause de réversibilité a bloqué un projet de migration vers Azure. L’entreprise a dû supporter des coûts supplémentaires importants faute d’anticipation contractuelle.  
- **Banque européenne (2020)** : l’audit interne a révélé que les SLA signés avec le fournisseur Cloud ne comportaient pas de clause spécifique sur la journalisation. Résultat : impossibilité de fournir les preuves d’accès lors d’un incident. Depuis, le RSSI a imposé un modèle de SLA standardisé intégrant systématiquement les recommandations ISO/IEC 27017.  

---

## Conseils opérationnels pour RSSI

- Toujours négocier les **SLA de sécurité** avant signature, et conserver les preuves documentées.  
- Tester régulièrement la **réversibilité** pour s’assurer que l’exit plan est réaliste.  
- Centraliser les **logs Cloud** dans un SIEM interne pour garantir la supervision et la corrélation des alertes.  
- Vérifier régulièrement la bonne configuration du **chiffrement** des données.  

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Identifier les responsabilités propres au client dans le modèle Cloud.  
- Exiger et vérifier les clauses contractuelles de sécurité.  
- Mettre en œuvre des processus de monitoring et de chiffrement adaptés.  
- Comprendre l’importance d’un exit plan pour limiter le vendor lock-in.  

---

## Checklist RSSI

- [ ] Vérifier les clauses de SLA sécurité avant signature.  
- [ ] Exiger une clause de réversibilité claire (exit plan).  
- [ ] Confirmer l’accès aux logs Cloud et leur intégration dans un SIEM.  
- [ ] Vérifier le chiffrement des données (repos et transit).  
- [ ] Auditer périodiquement la faisabilité de la migration vers un autre fournisseur.  

---
