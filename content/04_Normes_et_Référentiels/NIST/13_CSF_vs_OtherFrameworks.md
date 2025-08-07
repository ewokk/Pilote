# 13. Comparaison du NIST CSF avec d’autres cadres de cybersécurité

## Objectif du chapitre

Ce chapitre permet de comprendre **comment le NIST CSF se positionne** par rapport aux autres frameworks de cybersécurité (ISO, CIS, COBIT, etc.), et comment il peut **complémenter ou coexister** avec eux dans une approche hybride.

---

## 1. NIST CSF vs ISO/IEC 27001

| Élément | NIST CSF | ISO 27001 |
|--------|----------|-----------|
| Nature | Cadre de gestion de la cybersécurité | Norme de management certifiable |
| Orientation | Pratique, adaptable, non normatif | Formelle, axée documentation et audits |
| Domaine | Cybersécurité principalement | Sécurité de l'information au sens large |
| Certification | Non | Oui |
| Complémentarité | Peut guider la mise en œuvre ISO | ISO fournit structure et contrôle formel |

---

## 2. NIST CSF vs CIS Controls

| Élément | NIST CSF | CIS Controls |
|--------|----------|--------------|
| Objectif | Gouvernance, alignement stratégique | Contrôles techniques concrets |
| Portée | Large et adaptable | 18 groupes de contrôles techniques |
| Public cible | RSSI, dirigeants, gouvernance | Admins système, opérationnels IT |
| Complémentarité | Le CSF guide la stratégie, CIS les actions |

> [!example]
> Le CSF dira « maîtriser les accès », le CIS dira « implémenter un MFA sur tous les comptes admins ».

---

## 3. NIST CSF vs COBIT

| Élément | NIST CSF | COBIT |
|--------|----------|--------|
| Objectif | Cybersécurité | Gouvernance des systèmes d'information |
| Approche | Fonctionnelle | Processus IT et alignement business |
| Complémentarité | Le CSF peut être une composante cybersécurité d’un système COBIT plus large |

---

## 4. NIST CSF vs NIST SP 800-53

| Élément | NIST CSF | SP 800-53 |
|--------|----------|-----------|
| Objectif | Cadre de haut niveau | Catalogue de contrôles techniques |
| Utilisation | Gouvernance et stratégie | Implémentation des mesures |
| Complémentarité | Le CSF peut être mappé vers les contrôles 800-53 (mapping officiel fourni) |

---

## 5. Compatibilité et hybridation

Le CSF est **largement interopérable** :
- Il existe des **mappings CSF <-> ISO, CIS, SP800-53**
- Il peut être **le cœur** d’un dispositif **multi-référentiel**
- Il peut servir de **langue commune** entre RSSI, métiers et régulateurs

---

## 6. Synthèse visuelle

```
+-------------------+          +------------------------+
|   NIST CSF        |  ----->  |   Vision stratégique   |
|   (cadre général) |          |   Gouvernance SSI      |
+-------------------+          +------------------------+

       ↑                                ↓

+-------------------+          +------------------------+
|   ISO 27001       |          |   CIS Controls         |
|   SP800-53        |          |   ISO 27002            |
|   COBIT           |          |   Outils techniques    |
+-------------------+          +------------------------+
```

---

## Conclusion

Le NIST CSF ne remplace pas les autres cadres :  
👉 il les **complète** en offrant une **vision synthétique, transversale et gouvernée de la cybersécurité**.

