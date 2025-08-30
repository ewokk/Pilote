# PASSI RGS : Audit de Sécurité Qualifié par l'ANSSI

## Qu'est-ce que le PASSI et le RGS ?

Le **PASSI** (*Prestataire d'Audit de la Sécurité des Systèmes
d'Information*) est un dispositif de qualification mis en place par
l'**ANSSI** (Agence Nationale de la Sécurité des Systèmes
d'Information). Il certifie qu'un prestataire d'audit informatique
répond à des critères stricts et applique une méthodologie de sécurité
rigoureuse lors de ses missions【12†L157-L164】. En d'autres termes, un
audit réalisé par un prestataire **PASSI** est un audit de cybersécurité
conduit par des experts *qualifiés officiellement* par l'ANSSI, suivant
un processus normalisé. Cette qualification des auditeurs s'inscrit dans
le cadre du **RGS** (Référentiel Général de Sécurité) de
l'ANSSI【18†L91-L99】.

Le **RGS**, de son côté, est le cadre réglementaire français qui définit
les règles de sécurité et les bonnes pratiques devant être appliquées
par les administrations et organismes publics pour protéger leurs
systèmes d'information. Mis en place par l'État à partir de 2010, ce
référentiel vise à instaurer la confiance dans les échanges numériques
en sécurisant les données sensibles et les services en ligne de
l'administration【20†L319-L327】. L'ANSSI pilote le RGS : elle en
élabore les versions, met à jour les référentiels, et délivre des
**qualifications** (de produits ou de services) attestant la conformité
au RGS【13†L172-L180】【13†L174-L181】. La qualification PASSI fait
précisément partie de ces **"visas de sécurité"** du RGS, garantissant
qu'un prestataire d'audit respecte le niveau d'exigence attendu par
l'État en matière de cybersécurité【12†L161-L164】.

## Objectifs du dispositif PASSI RGS et enjeux pour les systèmes sensibles

Le dispositif PASSI RGS a pour objectif principal de **fiabiliser les
audits de sécurité** réalisés sur des systèmes sensibles ou critiques,
en s'assurant qu'ils sont effectués par des prestataires compétents et
dignes de confiance. Concrètement, un audit PASSI permet : **(1)**
d'évaluer le niveau de conformité d'un système d'information vis-à-vis
des référentiels de sécurité (règles, guides, normes, bonnes pratiques),
**(2)** d'évaluer le niveau global de sécurité technique du système, et
**(3)** de proposer des mesures de sécurité pour corriger les
non-conformités et vulnérabilités détectées lors de
l'audit【16†L261-L270】. Le rapport d'audit PASSI qui en résulte pourra
d'ailleurs être utilisé comme élément de preuve lors de l'**homologation
de sécurité** du système audité, c'est-à-dire son accréditation
officielle par l'autorité compétente【16†L268-L276】.

Les enjeux sont particulièrement élevés pour les **systèmes d'importance
vitale ou sensibles** de l'État et des opérateurs critiques. Les
administrations publiques doivent appliquer le RGS afin de protéger les
données des citoyens et assurer la confiance dans les services
numériques de l'État【20†L319-L327】. Pour les acteurs d'importance
critique du pays, la réglementation impose directement l'usage de
prestataires PASSI qualifiés : ainsi, un **OIV** (*Opérateur
d'Importance Vitale*) a l'obligation légale de faire procéder à des
audits de sécurité par un prestataire qualifié PASSI【12†L188-L196】
(cette exigence provient de la Loi de Programmation Militaire et du Code
de la défense). De même, un **OSE** (*Opérateur de Services Essentiels*
désigné dans le cadre de la directive européenne NIS) doit faire appel à
un prestataire PASSI pour ses audits de sécurité conformément aux textes
en vigueur【12†L188-L196】. L'objectif est de garantir un haut niveau de
sécurité sur des infrastructures dont une défaillance aurait de graves
conséquences pour l'État, l'économie ou la population (services
gouvernementaux, énergie, transports, santé, etc.). En imposant des
audits qualifiés PASSI, les autorités s'assurent que les
**vulnérabilités** et non-conformités éventuelles de ces systèmes
sensibles seront identifiées de manière exhaustive et traitées avec des
recommandations appropriées, avant qu'un attaquant malveillant ne puisse
les exploiter【16†L261-L270】. En résumé, le PASSI RGS contribue à
renforcer la **résilience** des organismes les plus critiques face aux
cybermenaces.

## Domaines d'audit couverts par la qualification PASSI

Les audits PASSI couvrent **cinq grands domaines** (*« portées »*)
complémentaires【18†L97-L104】, qui correspondent chacun à un angle
d'analyse de la sécurité du système d'information (voir illustration
ci-dessous). En combinant ces portées, un audit qualifié PASSI dresse un
panorama complet des forces et faiblesses de la sécurité du SI
audité【23†L202-L207】.

La **qualification PASSI** peut être demandée sur une ou plusieurs de
ces portées selon les compétences du prestataire. Les cinq domaines
d'audit officiellement définis par l'ANSSI sont les
suivants【18†L97-L104】 :

  -----------------------------------------------------------------------
  **Domaine d'audit         **Objectif principal**
  (Portée)**                
  ------------------------- ---------------------------------------------
  **Audit Organisationnel   Examiner l'**organisation de la sécurité**
  et Physique**             (politiques, procédures, gouvernance SSI)
                            ainsi que la **protection physique** des
                            locaux et infrastructures sensibles.
                            L'auditeur vérifie que les référentiels et
                            bonnes pratiques de sécurité sont appliqués,
                            et identifie d'éventuelles failles
                            organisationnelles (processus inadéquats,
                            absence de contrôle d'accès, etc.) ou
                            vulnérabilités physiques (local serveur non
                            sécurisé, manque de contrôle d'accès aux
                            datacenters, etc.).

  **Audit de                Passer en revue les **paramètres de
  Configuration**           configuration** des différents composants
                            techniques du SI (équipements réseau,
                            pare-feux, serveurs, bases de données, postes
                            de travail, etc.) afin de vérifier leur
                            conformité aux standards de sécurité.
                            L'objectif est de détecter les mauvaises
                            configurations, écarts aux guides de sécurité
                            ou failles connues (par exemple des réglages
                            par défaut laissés actifs, des ports ouverts
                            non justifiés) pouvant être exploités.

  **Audit d'Architecture**  Analyser l'**architecture** du système
                            d'information, c'est-à-dire sa conception et
                            son découpage réseau. L'auditeur étudie les
                            documents d'architecture (schémas du réseau,
                            matrices de flux, segmentation des VLAN,
                            interconnexions avec des réseaux tiers,
                            analyses de risques existantes, etc.) et
                            échange avec les équipes techniques. Le but
                            est d'évaluer si l'architecture respecte les
                            principes de sécurité (compartimentation des
                            réseaux, filtrage, isolation des composants
                            critiques) et d'identifier des faiblesses
                            structurelles éventuelles (par exemple une
                            absence de cloisonnement entre des
                            environnements sensibles et le reste du
                            réseau).

  **Audit de Code**         Examiner le **code source** des applications
                            ou composants développés en interne, ainsi
                            que les procédures de développement
                            associées. L'auditeur réalise une analyse
                            statique et dynamique du code afin de
                            détecter des **vulnérabilités logicielles**
                            (ex : injections SQL, failles XSS, buffer
                            overflow) et de vérifier le respect des
                            bonnes pratiques de développement sécurisé.
                            Cet audit inclut la revue de la documentation
                            technique, des paramètres de compilation, des
                            résultats de tests unitaires, etc., et peut
                            impliquer des discussions avec les
                            développeurs pour comprendre l'application
                            auditée en détail.

  **Audit d'Intrusion       Réaliser des **tests d'intrusion** contrôlés
  (Pentest)**               sur le SI cible, en simulant le comportement
                            d'attaquants potentiels (externes ou
                            internes). L'auditeur, avec l'accord
                            préalable du client, cherche à pénétrer les
                            défenses du système pour en évaluer la
                            robustesse face à des attaques réelles. Ce
                            type d'audit permet de découvrir des failles
                            exploitables dans un environnement réel. Il
                            peut être conduit selon différentes approches
                            (boîte noire, grise ou blanche, selon le
                            niveau d'information fourni à l'auditeur) et
                            nécessite de maîtriser les risques durant les
                            tests afin de ne pas perturber la production.
  -----------------------------------------------------------------------

## Processus de qualification d'un prestataire PASSI

Pour qu'une entreprise de cybersécurité devienne prestataire **PASSI**
qualifié, elle doit suivre un processus de certification exigeant,
piloté par l'ANSSI via des organismes d'évaluation accrédités. Ce
processus de qualification comporte plusieurs étapes clés :

1.  **Préparation de la candidature :** le prestataire identifie les
    *portées d'audit* pour lesquelles il souhaite être qualifié. Il
    constitue ensuite un dossier démontrant qu'il satisfait aux critères
    du référentiel PASSI.\
2.  **Évaluation par un centre agréé :** un organisme d'évaluation
    indépendant audite le prestataire (audit documentaire et audit sur
    site).\
3.  **Examen des auditeurs :** les **auditeurs techniques** doivent
    réussir des **examens** (épreuves écrites et orales) pour obtenir
    une attestation individuelle valable 3 ans, renouvelable.\
4.  **Décision et délivrance de la qualification :** la qualification
    PASSI est accordée par l'ANSSI pour **trois ans**, avec audit de
    surveillance à mi-parcours et renouvellement périodique.

## Obligations et responsabilités d'un prestataire qualifié

Un prestataire PASSI a plusieurs obligations :

-   **Conformité et impartialité** : neutralité, indépendance et absence
    de conflits d'intérêts.\
-   **Protection de l'information** : confidentialité stricte des
    données auditées (au minimum *Diffusion Restreinte*).\
-   **Compétence et formation continue** : maintien des compétences
    techniques et certifications des auditeurs.\
-   **Méthode d'audit rigoureuse** : alignée sur les normes (ISO 19011)
    et sur les processus ANSSI.\
-   **Éthique et signalement** : obligation de signaler à l'ANSSI les
    failles critiques découvertes, respect du devoir de conseil et
    d'exemplarité.

## Intérêt pour les clients de recourir à un prestataire PASSI RGS

-   **Conformité réglementaire** : répondre aux obligations légales
    (OIV, OSE, administrations).\
-   **Gage d'expertise** : audit mené par des experts qualifiés, méthode
    approuvée ANSSI.\
-   **Image et confiance** : rapport reconnu par les autorités,
    valorisable auprès des partenaires.\
-   **Conditions d'audit sécurisées** : réduction des risques de
    perturbation.\
-   **Reconnaissance officielle** : résultats pris en compte lors des
    homologations de sécurité et audits externes.

------------------------------------------------------------------------

En conclusion, le dispositif **PASSI RGS** constitue un outil
stratégique pour élever le niveau de sécurité des organisations
confrontées à de fortes exigences de cybersécurité. Il offre un cadre
structuré de **formation, d'audit et de confiance** autour des systèmes
d'information sensibles : les prestataires qualifiés apportent leurs
compétences et leur caution institutionnelle, tandis que les clients
bénéficient d'audits plus fiables, reconnus et orientés vers
l'amélioration continue de la sécurité de leurs systèmes.
