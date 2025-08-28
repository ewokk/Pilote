# Atelier 1 – Définir le périmètre de l’étude

## Objectif

L’atelier 1 a pour objectif de définir **ce qu’il faut protéger**.  
Il constitue la fondation de toute la démarche [[EBIOS Risk Manager (EBIOS RM – Expression des Besoins et Identification des Objectifs de Sécurité, Risk Manager)]]. Un périmètre mal défini rendra l’ensemble de l’analyse inefficace, voire inutilisable.  

Les points clés à identifier sont :  
- Les **valeurs métier** critiques pour l’organisation.  
- Les **événements redoutés** susceptibles de nuire à ces valeurs.  
- Les **biens supports** permettant leur fonctionnement.  

---

## Étapes de l’atelier

1. Identifier les **valeurs métier** (données, services, processus).  
2. Identifier les **événements redoutés** (perte de disponibilité, fuite de données, atteinte à l’image).  
3. Identifier les **biens supports** (infrastructures, applications, prestataires).  
4. Évaluer la **gravité** des événements (financière, opérationnelle, réglementaire, réputationnelle).  

---

## Outils et représentations

| Élément           | Exemple |
|-------------------|---------|
| Valeur métier     | Données clients, continuité de service, image de marque |
| Événement redouté | Fuite de données, indisponibilité d’un service |
| Bien support      | Serveur, application, base de données, prestataire cloud |

### Matrice Gravité

La gravité peut être cotée selon plusieurs critères :  
- Impact financier (pertes directes, coûts de remédiation).  
- Atteinte à l’image et à la réputation.  
- Conséquences réglementaires (sanctions RGPD, NIS2, DORA).  
- Perturbations opérationnelles (arrêt de production, blocage de services vitaux).  

> [!example]  
> Une indisponibilité de 4h du site e‑commerce peut avoir une gravité **majeure** si elle survient durant le Black Friday (perte de chiffre d’affaires et atteinte à l’image).  

---

## Exemples concrets de périmètres

- **Banque X** : périmètre = plateforme e‑banking + applicatifs internes + prestataires cloud critiques (authentification, paiements).  
- **Hôpital Y** : périmètre = système de gestion des patients + messagerie médicale + dépendances vers hébergeur HDS.  
- **Industrie Z** : périmètre = chaîne de production automatisée + systèmes de supervision OT + accès distants des prestataires.  

Ces exemples montrent que le périmètre doit intégrer à la fois les actifs internes et les dépendances externes.  

---

## Erreurs fréquentes

> [!warning]  
> **Les erreurs récurrentes dans l’atelier 1 compromettent toute l’analyse :**  
> - Définir un **périmètre trop large** : l’étude devient lourde, générique, et perd sa valeur opérationnelle.  
> - Définir un **périmètre trop restreint** : on oublie des dépendances critiques (ex : prestataire cloud, infogérant).  
> - Ne considérer que l’**IT technique** : l’analyse oublie les processus métier, les relations contractuelles et les obligations réglementaires.  
> - Ne pas valider le périmètre avec le COMEX ou les métiers : l’étude sera perçue comme purement technique et non stratégique.  

---

## Preuves d’audit attendues

- Cartographie du périmètre validée par les parties prenantes (DSI, métiers, conformité).  
- Liste documentée des valeurs métier et biens supports, datée et versionnée.  
- Matrice de gravité signée par la direction sécurité ou le RSSI.  

---

## Cas pratiques & retours d’expérience

- **Banque X** : le périmètre initial avait oublié les prestataires de KYC (Know Your Customer). Une fraude massive a révélé cette lacune : l’attaque est venue d’un sous‑traitant.  
- **Hôpital Y** : un ransomware a paralysé le système de gestion des patients ; l’analyse précédente n’avait pas intégré le prestataire d’hébergement comme bien support.  
- **Industrie Z** : dans une usine, un périmètre trop large incluait toute la supply chain mondiale : l’étude est devenue inutilisable. Après recentrage sur la **chaîne de production critique**, les résultats ont été actionnables.  

---

## Objectifs pédagogiques

À l’issue de l’atelier 1, l’apprenant est capable de :  
- Définir un périmètre d’analyse clair, incluant actifs internes et dépendances externes.  
- Identifier les valeurs métier, événements redoutés et biens supports.  
- Évaluer la gravité des impacts de manière multidimensionnelle.  
- Éviter les erreurs fréquentes (trop large / trop restreint / trop IT).  

---

## Checklist RSSI – Atelier 1

- [ ] Cartographier les valeurs métier et les biens supports.  
- [ ] Identifier et documenter les événements redoutés.  
- [ ] Intégrer explicitement les prestataires et dépendances cloud.  
- [ ] Valider le périmètre auprès des métiers et du COMEX.  
- [ ] S’assurer que la matrice de gravité est cohérente avec les référentiels (RGPD, NIS2, DORA).  
