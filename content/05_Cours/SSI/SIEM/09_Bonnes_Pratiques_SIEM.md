# 09 - Bonnes pratiques SIEM

> [!info]  
> Recommandations pour tirer le meilleur parti de votre SIEM tout en assurant sa sécurité et sa performance.

---

## 🔐 Sécuriser le SIEM lui-même

- Limiter les accès au SIEM (ACL, MFA)
- Journaliser l’accès aux interfaces d’administration
- Segmenter le réseau d’administration du SIEM

---

## 🧰 Paramétrage optimal

- Définir des alertes pertinentes (éviter le bruit)
- Regrouper les logs similaires via des règles de dédoublonnage
- Adapter les seuils d’alerte aux contextes métiers

---

## 📅 Archivage et rétention

- Conserver les logs selon les exigences légales (12 à 36 mois)
- Séparer stockage chaud (accès rapide) et froid (archivage long terme)
- Chiffrement et intégrité des archives

---

## 🛡️ Supervision continue

- Suivre le taux de collecte et d’analyse (EPS)
- Analyser les faux positifs régulièrement
- Maintenir un plan de mise à jour des règles

---

## 📈 Tableaux de bord

- Dashboards par métier (DSI, RSSI, SecOps…)
- Indicateurs clés (MTTD, MTTR, alertes critiques, tendance…)
- Partage des rapports automatisés

---

## 👥 Intégration organisationnelle

- Documentation des processus
- Formation des analystes SOC
- Intégration avec gestion de crise, PRA, conformité RGPD

> [!tip]  
> Un SIEM est efficace s’il est intégré à une stratégie SSI globale (SOC, PRA, classification, etc.)

