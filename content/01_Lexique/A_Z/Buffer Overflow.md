# Buffer Overflow

> **Type** : vulnérabilité 
> **Niveau** : #intermédiaire  
> **Contexte** : #offensif, #développement, #audit

---

## Définition
> Un buffer overflow est une vulnérabilité où un programme écrit plus de données que prévu dans une zone mémoire (buffer), débordant sur des zones adjacentes et compromettant la sécurité du système.

---

## Explication détaillée
- **Origine ou historique**  
  - Vulnérabilité connue depuis les années 1970, exploitée de manière emblématique par l’attaque du ver Morris (1988).
- **Fonctionnement technique**  
  - Se produit lorsqu’aucun contrôle n’est appliqué sur la taille des données copiées dans un buffer.
  - Peut écraser la pile (stack overflow), la zone de données, ou même le pointeur d’exécution (EIP/RIP).
- **Rôles & fonctions** dans la cybersécurité  
  - Utilisé pour exécuter du code arbitraire, élever des privilèges ou faire planter un programme (DoS).
- **Avantages et limites**  
  - Avantage pour l’attaquant : permet des compromissions critiques.
  - Limite : nécessite une connaissance précise de l’environnement mémoire.
- **Typologies ou variantes**  
  - Stack-based, heap-based, format string, integer overflow, etc.

---

## Cas d’usage & exemples concrets
- Exploit d’une application C vulnérable pour injecter un shellcode.
- Utilisation dans des malwares pour compromettre un service exposé.
- Vulnérabilités CVE comme Heartbleed (OpenSSL) ou MS08-067 (Windows).

---

## ⚠️ Vulnérabilités, risques et abus connus
- Exécution de code à distance (RCE).
- Corruption de mémoire ou de registre.
- Contournement d’ASLR ou DEP avec des techniques de type ROP (Return-Oriented Programming).

---

## Mesures de sécurité & recommandations
- Utiliser des langages sécurisés (Rust, Go).
- Activer les protections mémoire : DEP, ASLR, Stack Canaries.
- Éviter les fonctions non sûres (`strcpy`, `gets`...).
- Utiliser des outils de fuzzing et d’analyse statique.

---

## Standards, protocoles & normes associées
- CWE-120 (Common Weakness Enumeration).
- OWASP Top 10 (A5 : Vulnérabilités à l’injection).
- Recommandations CERT C.

---

## Intégration dans un écosystème SSI
- Présente dans les applications écrites en C/C++ ou ASM.
- Détectée lors des pentests, revues de code ou scans SAST.
- Doit être corrigée via durcissement et bonnes pratiques de développement.

---

## Liens avec d’autres notions
- [[Buffer]]
- [[Overflow]]
- [[Exploit]]

---

## Sources, outils & références
- [OWASP - Buffer Overflow](https://owasp.org/www-community/vulnerabilities/Buffer_Overflow)
- [🛠️ GDB pour l’analyse dynamique](https://www.gnu.org/software/gdb/)
- [Buffer Overflow Explained (LiveOverflow)](https://www.youtube.com/watch?v=1S0aBV-Waeo)

---

## Mots-clés
`#cybersécurité` `#lexique` `#concept` `#vulnérabilité` `#overflow` `#mémoire`
