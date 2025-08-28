# Modèle de fiche de veille + critères de priorisation

## Exemple de fiche technique

```markdown
# CVE-2025-9999 - Vulnérabilité critique VMware

**Date :** 2025-08-01  
**Produit concerné :** VMware ESXi <= 7.0  
**Impact :** RCE, non authentifié  
**Exploit public :** Oui (GitHub)  
**Score CVSS :** 9.8  
**Sources :** CERT-FR, GitHub, CISA  
**Recommandation :** Patch immédiat  
**Lien :** https://nvd.nist.gov/vuln/detail/CVE-2025-9999  
**Tags :** #VMware #CVE #critique #veille/tech
```

---

## Modèle réglementaire

```markdown
# Décision CNIL — Cookies 2025

**Date :** 2025-07-30  
**Type :** Réglementaire / Jurisprudence  
**Résumé :** La CNIL sanctionne une entreprise pour cookies non consentis sur mobile  
**Impact :** RGPD, marketing, compliance site web  
**Lien :** https://www.cnil.fr/fr/actualite  
**Action interne :** Vérifier politique cookies mobile  
**Tags :** #CNIL #veille/reglementaire #cookies
```

---

## Critères de scoring

| Critère       | Exemple                            |
|---------------|-------------------------------------|
| Exploitabilité | PoC public, scanner automatisé     |
| Criticité     | CVSS, impact métier                 |
| Exposition    | Usage du produit en interne ?       |
| Temporalité   | Patch dispo ou non ?                |

