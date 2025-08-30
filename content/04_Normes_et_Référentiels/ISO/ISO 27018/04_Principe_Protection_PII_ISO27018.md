# 04_Principe_Protection_PII_ISO27018

L’ISO/IEC 27018 reprend les principes fondamentaux de la protection des données personnelles et les applique spécifiquement au contexte Cloud. Ces principes – minimisation, limitation des finalités et de la conservation, exactitude et sécurité – doivent être traduits en mécanismes concrets et vérifiables. Dans le Cloud, l’enjeu n’est pas seulement de proclamer ces principes, mais de les implémenter via des configurations techniques et contractuelles.

---

## Minimisation des données

Le principe de minimisation impose que seules les PII strictement nécessaires au traitement soient collectées et conservées.  
**Implémentation Cloud :**  
- Journaux configurés en « privacy by default » : rotation automatique, masquage des champs sensibles (ex. adresse IP tronquée, hashage des identifiants).  
- Paramétrage de solutions comme AWS CloudTrail ou Azure Monitor pour exclure les champs non nécessaires aux audits.  

**Exemple concret :** une entreprise active le masquage des adresses IP dans les journaux d’accès à son portail SaaS pour éviter que des IP complètes soient stockées inutilement.

---

## Limitation de la conservation

Les PII ne doivent pas être conservées plus longtemps que nécessaire.  
**Implémentation Cloud :**  
- Politiques de rétention automatisées, chiffrées et traçables.  
- Utilisation de mécanismes natifs tels que AWS S3 Lifecycle Policies ou les politiques de rétention Microsoft 365 (O365).  

**Exemple concret :** une organisation configure AWS S3 pour supprimer automatiquement les sauvegardes contenant des PII après 90 jours, avec chiffrement obligatoire jusqu’à la suppression.

---

## Sécurité des PII

La sécurité repose sur un triptyque : chiffrement, gestion des clés et traçabilité des accès.  
**Implémentation Cloud :**  
- Chiffrement des données **au repos** (ex. AES-256) et **en transit** (TLS 1.2/1.3).  
- Gestion des clés via un service KMS (Key Management Service) ou un HSM (Hardware Security Module).  
- Options BYOK (Bring Your Own Key) pour permettre au client de gérer ses propres clés.  

**Exemple concret :** une banque impose à son fournisseur SaaS d’utiliser Azure Key Vault avec BYOK pour s’assurer que le contrôle des clés de chiffrement reste du côté client.

---

## Tableau de synthèse

| Principe     | Implémentation Cloud              | Preuves attendues                          |
|--------------|----------------------------------|--------------------------------------------|
| Minimisation | Masquage des champs sensibles, rotation des logs | Configurations de masquage, guides techniques |
| Limitation   | Lifecycle policies, rétention O365 | Export des politiques, captures d’écran |
| Sécurité     | Chiffrement repos/transit, gestion KMS/HSM/BYOK | Paramétrages KMS, rapports d’audit sécurité |

---

## Cas concret

En 2022, une multinationale a été sanctionnée pour non-respect du principe de limitation de conservation : des données de candidats à l’embauche étaient conservées indéfiniment dans un service SaaS RH. L’audit a montré l’absence de politiques de rétention configurées côté fournisseur. Depuis, l’organisation impose à ses prestataires une conformité stricte ISO 27018 incluant la preuve des mécanismes de lifecycle et de suppression automatisée.

---

## Objectifs pédagogiques

À la fin de ce chapitre, l’apprenant doit être capable de :  
- Expliquer les principes de minimisation, limitation de conservation et sécurité dans le contexte ISO 27018.  
- Identifier leurs implémentations types dans les environnements Cloud.  
- Exiger des preuves d’audit concrètes démontrant la mise en œuvre.  
- Évaluer la conformité d’un fournisseur Cloud sur ces aspects.  

---

## Checklist RSSI

- [ ] Vérifier que les journaux sont configurés en « privacy by default » avec masquage de PII.  
- [ ] Confirmer l’existence de politiques de rétention automatisées (lifecycle, O365).  
- [ ] Contrôler que les PII sont chiffrées au repos et en transit.  
- [ ] Valider que la gestion des clés est assurée via KMS/HSM, avec option BYOK.  
- [ ] Obtenir et archiver les preuves (exports de policies, captures, rapports d’audit).  
