# 08 - Scénarios d’incidents et cas d’usage

> [!info]  
> Cas concrets illustrant la détection, l’investigation et la remédiation via un SIEM

---

## 📍 Scénario 1 : exfiltration de données

### Déroulé :
1. Logon VPN suspect (localisation inhabituelle)
2. Échec → succès → accès à serveur SQL
3. Export massif de données
4. Événement détecté par corrélation + seuils

### Réponse :
- Alerte prioritaire
- Blocage VPN
- Notification SOC
- Restauration état antérieur

---

## 📍 Scénario 2 : élévation de privilèges

1. Création utilisateur inattendue
2. Attribution droits admin
3. Connexion admin à un horaire inhabituel

→ Corrélation + scoring UEBA → alerte

---

## 📍 Scénario 3 : malware furtif

1. Accès vers IP malveillante
2. Téléchargement fichier .exe
3. Exécution → connexion à un C2
4. Mouvements latéraux

→ Alertes multiples corrélées → visualisation graphique

---

## 📊 Investigation

- Timeline graphique des événements
- Agrégation des logs liés
- Corrélation enrichie par Threat Intel
- Rapport PDF généré automatiquement

---

## 🧰 Workflows type (SOAR)

- Fermeture session + ticket ITSM
- Notification DSI + RSSI
- Blocage de l’utilisateur ou de l’IP
- Rétro-analyse sur d’autres endpoints

