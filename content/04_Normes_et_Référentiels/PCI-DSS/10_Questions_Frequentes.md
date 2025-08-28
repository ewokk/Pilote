
# 10 - Questions fréquentes sur PCI DSS v4.0

Ce chapitre répond aux interrogations fréquentes que rencontrent les RSSI, DSI ou prestataires lors d’un projet PCI DSS.

___

## Peut-on stocker les CVV / CVV2 ?

> Non. Le stockage des données de validation (CVV2, CVC2, PIN, etc.) **est strictement interdit après l’autorisation**. Même chiffrées.

___

## Mon hébergeur est-il conforme PCI = Je suis conforme ?

> Non. L’hébergeur n’est qu’un **sous-traitant**.  
> Vous devez vérifier son attestation de conformité (AOC) **et** auditer votre propre configuration. Vous êtes **co-responsable**.

___

## Quelle est la durée de rétention maximale des PAN ?

> Aussi courte que possible. Toute conservation doit être justifiée.  
> Il faut pouvoir tracer le **cycle de vie complet des données** (collecte → suppression).

___

## Est-ce que PCI DSS interdit le Cloud ?

> Non, mais il impose que le périmètre Cloud soit clairement délimité, documenté, et que le **modèle de responsabilité partagée** soit défini.

___

## Faut-il une solution SIEM pour être conforme ?

> Ce n’est pas obligatoire, mais fortement recommandé pour répondre aux exigences 10 (logs), 11 (surveillance), 12 (gouvernance).  
> Sans SIEM, vous devez prouver manuellement que tous les journaux sont :

- Horodatés
- Corrélés
- Alertés
- Inaltérables

___

## C’est Quoi une approche personnalisée ?

> Depuis la v4.0, vous pouvez implémenter une mesure **différente de celle décrite**, tant qu’elle atteint le même objectif.

Exemple :
> Au lieu d’un firewall classique, vous utilisez une architecture Zero Trust bien documentée.

Il faut fournir :
- Objectif visé
- Description détaillée du mécanisme
- Preuves de sécurité équivalente
- Validation par un QSA

___

## Que risque-t-on si on est non conforme ?

> Suspension de contrat avec l’acquéreur, pénalités, signalement à Visa/MasterCard, voire interruption d’activité.  
> En cas d’incident, les amendes peuvent dépasser **100 000 €** et entraîner des audits obligatoires.

___

## Doit-on être conforme sur tout le SI ?

> Non. Seule la **zone CDE** (Cardholder Data Environment) doit être conforme.  
> Mais attention : **le périmètre PCI doit être défini avec précision**. Toute faille de cloisonnement (flat network) élargit la zone CDE.

___

## Conclusion

Les pièges de PCI DSS ne sont pas uniquement techniques : ce sont souvent **des erreurs d’interprétation, de périmètre, ou de gouvernance**.  
Cette FAQ permet de les désamorcer dès la conception du projet.

