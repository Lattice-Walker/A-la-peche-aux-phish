# Idées d'e-mails : À la pêche aux phish

Catalogue de propositions pour les 10 niveaux : e-mails piégés **et** e-mails
légitimes. Objectif : que le joueur doive *lire*, et non deviner.

---

## 1. Principes de conception

### 1.1 Les trois catégories

Chaque e-mail appartient à l'une de ces trois familles. La troisième est la clé
du jeu.

| Tag | Signification | Rôle |
|---|---|---|
| **[PHISH]** | `isPhish: true` : à signaler | La cible |
| **[SAIN]** | `isPhish: false`, manifestement inoffensif | Le bruit de fond réaliste |
| **[SAIN-PIÈGE]** | `isPhish: false`, mais **porte 1 ou 2 signaux d'alarme** | Le cœur de la pédagogie |

Le **[SAIN-PIÈGE]** est un e-mail authentique qui *ressemble* à une arnaque :
il alarme, il presse, il demande une action, ou son domaine paraît bizarre,
alors qu'il est parfaitement réel. C'est lui qui oblige à lire attentivement, et
lui qui apprend la leçon la plus utile : **« alarmant » n'est pas « frauduleux »**.

### 1.2 Règle d'équité (à ne jamais enfreindre)

Tout **[SAIN-PIÈGE]** doit contenir **au moins une preuve vérifiable** de sa
légitimité, visible dans le message lui-même :

- le domaine exact est bien le domaine officiel (même s'il a l'air étrange) ;
- aucun identifiant, mot de passe, code ni numéro de carte n'est demandé ;
- le message renvoie vers un canal officiel qu'on saisit soi-même (appli,
  site tapé à la main) plutôt que vers un formulaire ;
- il fait référence à un élément que seul un émetteur légitime connaît
  (numéro de dossier existant, fil de discussion antérieur, montant cohérent).

Sans cette preuve, l'e-mail devient un coup de dé : le joueur se sent puni, pas
instruit. **Un [SAIN-PIÈGE] doit être résoluble, pas indevinable.**

### 1.3 Dosage

Le piège n'est efficace que s'il est rare. Trop de [SAIN-PIÈGE] et le joueur
n'ose plus rien signaler ; trop peu et il signale tout ce qui bouge.

- **1 [SAIN-PIÈGE] par niveau** en moyenne, 2 maximum, et seulement à partir
  du niveau 3 pour les cas vraiment retors.
- Environ **1 e-mail légitime sur 3** doit faire hésiter. Les autres sont du
  décor : newsletters, confirmations, notifications anodines.

### 1.4 Ne pas rendre le ratio prévisible

Aujourd'hui les niveaux tournent autour de 2–3 pièges sur 4–5 messages : le
joueur apprend à compter au lieu de lire. Proposition de boîtes plus fournies et
de proportions irrégulières :

| Niveau | Total | Phish | Sains | dont piégeux |
|---|---|---|---|---|
| 1 | 6 | 2 | 4 | 0 (1 très doux) |
| 2 | 7 | 3 | 4 | 1 |
| 3 | 7 | 3 | 4 | 1 |
| 4 | 7 | 3 | 4 | 1 |
| 5 | 7 | 3 | 4 | 1 |
| 6 | 8 | 4 | 4 | 1 |
| 7 | 7 | 3 | 4 | 2 |
| 8 | 8 | 4 | 4 | 1 |
| 9 | 8 | 4 | 4 | 2 |
| 10 | 9 | 4 | 5 | 2 |

Prévoir aussi des niveaux où **le nombre de pièges ne se devine pas** : un
niveau à 2 pièges seulement (niveau 5) juste après un niveau à 4 casse
l'habitude de compter.

### 1.5 Progression des indices

Chaque niveau doit retirer un indice facile et en introduire un plus fin.

| Niveaux | Indices présents dans les pièges | Indices retirés |
|---|---|---|
| 1–2 | fautes, domaine grossier, « Cher client », urgence brutale | aucun |
| 3–4 | domaine plausible, mise en page soignée, montant crédible | fautes d'orthographe |
| 5–6 | sous-domaine trompeur, nom d'expéditeur juste, pas d'urgence criante | domaine évidemment faux |
| 7–8 | prétexte administratif exact, ton neutre, personnalisation | urgence |
| 9–10 | homoglyphes, détournement de fil, QR code, `reply-to` divergent | tout le reste |

### 1.6 Astuces de composition

- **Les paires.** Placer dans le même niveau un piège et un e-mail authentique
  qui traitent du **même sujet** (deux alertes de connexion, deux factures
  d'antivirus, deux changements de RIB). Le joueur ne peut plus juger sur le
  thème : il doit comparer les domaines. C'est le procédé le plus rentable du
  jeu, à utiliser dans au moins la moitié des niveaux.
- **Les domaines réels qui ont l'air faux.** `facebookmail.com`,
  `accountprotection.microsoft.com`, `sncf-connect.com`, `docusign.net`,
  `e.leboncoin.fr` : tous authentiques, tous suspects au premier coup d'œil.
  Matière première idéale pour les [SAIN-PIÈGE].
- **La laideur n'est pas un crime.** Une vraie marque envoie parfois un message
  mal aligné, avec une coquille. Un piège est parfois impeccable. Inclure au
  moins un [SAIN] visuellement médiocre pour casser l'équation
  « moche = arnaque ».
- **Le message légitime qu'il ne faut pas signaler mais pas suivre non plus.**
  Une vraie réinitialisation de mot de passe non sollicitée : authentique
  (donc ne pas signaler), mais il ne faut pas cliquer. Bon sujet de débrief.

---

## 2. Niveau 1 : Premiers hameçons *(Débutant)*

**Intention :** tout doit être lisible. Aucun vrai piège de lecture, mais un
premier message alarmant-mais-authentique pour installer l'idée que la peur
n'est pas un signal fiable.

### Pièges

- **[PHISH] « Action requise : activité inhabituelle détectée »**, *Assistance
  PayPal* `service@paypa1-secure.com` : compte limité, à confirmer sous 24 h.
  *Indice :* le « l » de paypal remplacé par un « 1 », menace de suspension.
  → **déjà en place, à conserver.**
- **[PHISH] « Votre paiement a été refusé »**, *Netflix*
  `info@netflix-paiement-client.net` : mettre à jour la carte bancaire.
  *Indice :* domaine qui n'est pas netflix.com. → **déjà en place.**
- **[PHISH] « Votre facture de septembre n'a pas pu être prélevée »**,
  *Orange* `facturation@orange-client-facture.net` : régularisation sous peine
  de coupure de ligne. *Indice :* « Cher client » au lieu du prénom, deux
  fautes d'accord, domaine composite. *(nouveau : un troisième piège rend le
  niveau moins mécanique)*

### Légitimes

- **[SAIN] « Vous avez partagé certaines données… »**, *Google*
  `noreply-accounts@google.com`. → **déjà en place.**
- **[SAIN] « Votre colis a été expédié »**, *Amazon.fr*
  `expedition@amazon.fr` : numéro de commande, date de livraison, aucun
  paiement demandé. → **déjà en place.**
- **[SAIN] « Vos nouveautés de la semaine »**, *Deezer*
  `newsletter@deezer.com` : pure newsletter, lien de désinscription, aucune
  action. Le décor qui rend la boîte crédible. *(nouveau)*
- **[SAIN-PIÈGE doux] « Nouvelle connexion sur Windows »**, *Google*
  `no-reply@accounts.google.com` : « si c'était vous, aucune action n'est
  requise ». *Faux-semblant :* le sujet fait peur, c'est exactement le prétexte
  employé par les pièges des niveaux suivants. *Preuve :* domaine officiel
  `accounts.google.com`, aucun mot de passe demandé, aucun bouton d'urgence.
  *(nouveau : à déplacer depuis le niveau 4, où il fait doublon)*

---

## 3. Niveau 2 : Eaux troubles *(Intermédiaire)*

**Intention :** introduire l'attaque par l'autorité et le vol d'identifiants.
Premier vrai [SAIN-PIÈGE] : un message de sécurité **interne** et légitime.

### Pièges

- **[PHISH] « Votre mot de passe expire aujourd'hui »**, *Microsoft 365*
  `account-security@ms365-verify.com`. → **déjà en place.**
- **[PHISH] « Nouvel appareil connecté à votre espace client »**, *La Banque
  Postale* `securite@labanquepostale-alerte.com`. → **déjà en place.**
- **[PHISH] « Petit service urgent »**, *Sophie Marchand*
  `s.marchand@directions-groupe.com` : cartes cadeaux, discrétion exigée.
  → **déjà en place.**
- **[PHISH] « Changement de mes coordonnées, RIB pour le virement de
  salaire »**, *Service Paie* `rh.paie.{{entreprise}}@gmail.com` : un
  « collègue » demande à changer son RIB de paie. *Indice nouveau :* le **nom
  d'expéditeur est corporate mais l'adresse est une boîte gratuite**. Aucun
  service RH n'écrit depuis Gmail. *(nouveau : remplace un piège si le niveau
  devient trop chargé)*

### Légitimes

- **[SAIN] « 3 nouvelles vues sur votre profil »**, *LinkedIn*
  `messages-noreply@linkedin.com`. → **déjà en place.**
- **[SAIN] « Rappel : votre rendez-vous du 30 septembre »**, *Doctolib*
  `rappel@doctolib.fr`. → **déjà en place.**
- **[SAIN] « Compte rendu de la réunion produit »**, un vrai collègue,
  `t.bernard@{{entreprise}}.com`, message court, pas de pièce jointe, pas de
  lien. Le message le plus banal de la boîte. *(nouveau)*
- **[SAIN-PIÈGE] « Activation de la double authentification avant le 15
  octobre »**, *Service Informatique* `it@{{entreprise}}.com`.
  *Faux-semblant :* sujet sécurité + échéance ferme + demande d'action : le
  triptyque exact du phishing, et c'est le thème même des pièges du niveau.
  *Preuve :* le domaine est celui de l'entreprise du joueur (injecté via
  `{{entreprise}}`), le message **ne demande aucun mot de passe** et renvoie
  vers le portail interne habituel, avec le nom et le poste de l'émetteur et
  un numéro de poste pour vérifier. *(nouveau : le pivot pédagogique du niveau)*

---

## 4. Niveau 3 : Colis en souffrance *(Intermédiaire)*

**Intention :** le meilleur terrain pour un [SAIN-PIÈGE], parce que **les frais
de douane existent vraiment**. Le joueur doit cesser de croire que « on me
demande de payer = arnaque ».

### Pièges

- **[PHISH] « Votre colis est bloqué : frais de douane à régler (1,99 €) »**,
  *Chronopost Livraison* `service@chronopost-suivi-colis.com`. → **déjà en place.**
- **[PHISH] « Redevance impayée : votre colis vous attend »**, *DHL Express*
  `colis@dhl-express-redevance.net`. → **déjà en place.**
- **[PHISH] « Votre colis n'a pas pu être livré : reprogrammez »**, *La Poste*
  `suivi@laposte.fr.reprogrammation-colis.net`. *Indice nouveau :* le **vrai
  domaine placé en sous-domaine d'un domaine pirate**. Première apparition de
  cette technique, reprise au niveau 10. *(nouveau)*
- **[PHISH] « Votre acheteur a payé : validez l'envoi »**, *Vinted*
  `paiement@vinted-transaction.net` : un formulaire réclame le numéro de carte
  « pour recevoir le virement ». *Indice :* on ne donne jamais sa carte pour
  **recevoir** de l'argent. *(nouveau : alternative au précédent)*

### Légitimes

- **[SAIN] « Votre colis sera livré aujourd'hui »**, *Chronopost*
  `notification@chronopost.fr`. → **déjà en place.**
- **[SAIN] « Votre article est vendu ! »**, *Vinted* `no-reply@vinted.fr`.
  → **déjà en place.**
- **[SAIN] « Votre colis vous attend en point relais »**, *Mondial Relay*
  `noreply@mondialrelay.fr` : numéro de colis, adresse du relais, horaires,
  aucun paiement. *(nouveau)*
- **[SAIN-PIÈGE] « Frais de dédouanement à régler, colis en provenance du
  Royaume-Uni »**, *Colissimo* `service-client@colissimo.fr`.
  *Faux-semblant :* c'est **exactement** le scénario du piège n° 1 de ce
  niveau, un transporteur qui réclame de l'argent pour libérer un colis.
  *Preuve :* le domaine est officiel ; le montant (14,80 €) est cohérent avec
  une TVA réelle, pas le 1,99 € symbolique des arnaques ; le message rappelle
  le numéro de suivi **déjà reçu dans l'e-mail d'expédition précédent** ;
  surtout, **aucun formulaire de carte dans le mail** : il invite à payer depuis
  l'espace client en tapant l'adresse soi-même.
  *Leçon de débrief :* les frais de douane existent ; ce qui trahit l'arnaque,
  ce n'est pas la demande d'argent, c'est le **formulaire de carte dans
  l'e-mail** et le montant dérisoire calibré pour ne pas faire réfléchir.
  *(nouveau : pièce maîtresse du niveau)*

---

## 5. Niveau 4 : Faux support technique *(Intermédiaire)*

**Intention :** introduire le **phishing par rappel téléphonique** (aucun lien,
donc aucun domaine à vérifier, l'indice est ailleurs) et une paire
alerte-fausse / alerte-vraie.

### Pièges

- **[PHISH] « 3 virus détectés sur votre appareil »**, *Sécurité Microsoft*
  `alerte@microsoft-support-secure.com`. → **déjà en place.**
- **[PHISH] « Votre identifiant Apple a été verrouillé »**, *Apple*
  `no-reply@appleid-verification.net`. → **déjà en place.**
- **[PHISH] « Confirmation de renouvellement, Norton 360 : 349,99 € »**,
  *Norton Billing* `billing@norton-renewal-invoice.com` : facture pour un
  abonnement jamais souscrit, « pour annuler, appelez le 01 76 xx xx xx sous
  48 h ». *Indice nouveau :* **aucun lien, juste un numéro** : le but est de
  vous faire appeler pour vous faire installer un logiciel de prise en main à
  distance. Le montant volontairement énorme sert à provoquer l'appel.
  *(nouveau : mécanique inédite dans le jeu)*

### Légitimes

- **[SAIN] « Votre enregistrement est disponible »**, *Zoom*
  `no-reply@zoom.us`. → **déjà en place.**
- **[SAIN] « Mise à jour de sécurité installée »**, *Windows /
  `no-reply@microsoft.com`* : notification passive, rien à faire. *(nouveau)*
- **[SAIN] « Votre abonnement Avast Premium a été renouvelé, 59,99 € »**,
  *Avast* `billing@avast.com` : vrai reçu, montant plausible, référence de
  commande, lien vers le compte client.
  *Faux-semblant :* une facture d'antivirus non attendue, juste à côté du faux
  Norton du même niveau. *Preuve :* domaine officiel, montant réaliste, et
  **aucun numéro à appeler en urgence** : un vrai reçu ne pousse pas à
  décrocher son téléphone. *(nouveau : paire directe avec le piège n° 3)*
- **[SAIN-PIÈGE] « Votre identifiant Apple a été utilisé pour se connecter sur
  un Mac »**, *Apple* `no_reply@email.apple.com`.
  *Faux-semblant :* **même prétexte, même marque** que le piège n° 2 du niveau,
  dans la même boîte. Impossible de trancher sur le thème.
  *Preuve :* `email.apple.com` est le domaine d'envoi authentique d'Apple ;
  le message est purement informatif (« si c'était vous, ignorez cet e-mail »),
  ne contient **aucun bouton de connexion** et ne menace de rien.
  *(nouveau : la meilleure paire du jeu, à mettre côte à côte dans la liste)*

---

## 6. Niveau 5 : L'ordre du président *(Confirmé)*

**Intention :** la fraude au virement. Le [SAIN-PIÈGE] ici est redoutable : un
**vrai changement de RIB**. Le joueur doit comprendre que le changement de RIB
n'est pas le signal : l'absence de canal de vérification l'est.

### Pièges

- **[PHISH] « Virement à traiter aujourd'hui, confidentiel »**, *Paul Durand*
  `p.durand@direction-groupe-fr.com`. → **déjà en place.**
- **[PHISH] « Mise à jour de nos coordonnées bancaires »**, *Comptabilité
  Meunier SARL* `compta@meunier-facturation.com`. → **déjà en place.**
- **[PHISH] « RE: Facture 2025-0118, précision sur le règlement »**,
  détournement de fil : le message reprend **l'historique cité** d'un vrai
  échange (objet, dates, montant), et glisse en fin de message « le virement
  est à faire sur notre nouveau compte, l'ancien est clôturé ».
  *Indice nouveau :* le fil est authentique mais l'adresse a changé d'une
  lettre (`meunier-sarl.fr` → `meunier-sarI.fr`, i majuscule) et le `Reply-To`
  diverge de l'expéditeur. Technique la plus efficace du monde réel.
  *(nouveau : remplace le piège n° 2 si on veut garder 3 pièges)*

### Légitimes

- **[SAIN] « Rappel : notes de frais avant le 30 »**, *Service Comptabilité*
  `compta@{{entreprise}}.com`. → **déjà en place.**
- **[SAIN] « Votre facture de septembre »**, *Papeterie Léon*
  `ventes@papeterie-leon.fr`. → **déjà en place.**
- **[SAIN] « Tu peux relire la présentation avant jeudi ? »**, le vrai
  dirigeant, `c.fontaine@{{entreprise}}.com`, demande banale, aucun argent en
  jeu. Montre qu'un mail du patron n'est pas suspect en soi. *(nouveau)*
- **[SAIN-PIÈGE] « Changement de domiciliation bancaire, courrier signé en
  pièce jointe »**, *Groupe Meunier* `comptabilite@meunier-sarl.fr`.
  *Faux-semblant :* **un vrai changement de RIB**, c'est-à-dire le scénario
  d'arnaque le plus coûteux du monde professionnel, dans le niveau qui en fait
  son thème.
  *Preuve :* l'adresse est le domaine historique du fournisseur (celui qui
  figure sur les factures précédentes de la boîte) ; le message **n'est pas
  urgent** (« applicable à compter du 1er décembre ») ; il fait référence à un
  courrier recommandé envoyé en parallèle ; et il invite explicitement à
  **appeler le numéro habituel pour confirmer avant tout virement**.
  *Leçon de débrief :* les entreprises changent réellement de banque. Ce qui
  distingue la fraude, c'est l'urgence, la confidentialité demandée, et
  l'absence de canal de vérification indépendant. Un fournisseur honnête
  *souhaite* que vous l'appeliez.
  *(nouveau : paire directe avec le piège n° 2)*

---

## 7. Niveau 6 : Comptes sous pression *(Confirmé)*

**Intention :** les réseaux sociaux, et les **vrais domaines qui ont l'air
faux**. `facebookmail.com` est le meilleur exemple qui soit.

### Pièges

- **[PHISH] « Votre compte enfreint nos règles sur les droits d'auteur »**,
  *Instagram* `appeal@instagram-copyright-appeal.com`. → **déjà en place.**
- **[PHISH] « Votre page a été suspendue »**, *Meta for Business*
  `support@meta-business-support.net`. → **déjà en place.**
- **[PHISH] « Tentative de connexion inhabituelle »**, *LinkedIn Security*
  `security@linkedin-security-alert.com`. → **déjà en place.**
- **[PHISH] « Approuvez la demande de connexion (code 47) »**, *Sécurité du
  compte* `noreply@account-approval-verify.com` : le message arrive après une
  rafale de notifications et presse d'approuver « pour faire cesser les
  alertes ». *Indice nouveau :* la **lassitude MFA** : l'attaquant a déjà le
  mot de passe et ne cherche plus qu'une validation. On ne valide jamais une
  demande qu'on n'a pas déclenchée. *(nouveau)*

### Légitimes

- **[SAIN] « Nouvelle connexion à votre compte »**, *Instagram*
  `security@mail.instagram.com`. → **déjà en place.**
- **[SAIN] « Votre récapitulatif d'activité du mois »**, *Strava / Spotify
  Wrapped / X*, notification statistique sans enjeu. *(nouveau)*
- **[SAIN] « Un recruteur souhaite entrer en contact »**, *LinkedIn*
  `inmail@linkedin.com` : InMail authentique, ton commercial, désinscription
  disponible. *(nouveau)*
- **[SAIN-PIÈGE] « Marie Lefèvre a été ajoutée comme administratrice de votre
  Page »**, *Meta* `notification@facebookmail.com`.
  *Faux-semblant :* le domaine **`facebookmail.com` a tout l'air d'une
  contrefaçon** : c'est pourtant le domaine d'envoi officiel de Meta depuis
  toujours. Et le contenu est alarmant : quelqu'un a obtenu les droits
  d'administration de votre page.
  *Preuve :* c'est bien le domaine officiel ; le message nomme une personne que
  le joueur connaît (à poser dans le contexte du niveau) ; il renvoie vers le
  gestionnaire de page sans demander de reconnexion ; et il propose de
  **révoquer l'accès depuis les paramètres**, pas via un lien d'urgence.
  *Leçon de débrief :* on ne juge pas un domaine à sa tête. `facebookmail.com`,
  `accountprotection.microsoft.com`, `sncf-connect.com`, `docusign.net` sont
  authentiques et déroutants. La seule méthode fiable : vérifier le domaine
  auprès de la marque, pas à l'instinct. *(nouveau)*

---

## 8. Niveau 7 : Faux services publics *(Confirmé)*

**Intention :** le seul niveau où **deux** [SAIN-PIÈGE] se justifient, parce que
le repère est net (`.gouv.fr`) et qu'on peut donc se permettre d'être exigeant.

### Pièges

- **[PHISH] « Vous êtes éligible à un remboursement de 249 € »**,
  *impots.gouv.fr* `remboursement@impots-remboursement-gouv.com`.
  → **déjà en place.**
- **[PHISH] « Mise à jour de votre carte Vitale requise »**, *Assurance
  Maladie* `contact@ameli-mise-a-jour.com`. → **déjà en place.**
- **[PHISH] « Avis de contravention n° 78451203, majoration sous 15 jours »**,
  *ANTAI* `noreply@antai-amendes-gouv.com` : paiement immédiat d'une amende
  inconnue. *Indice :* domaine en `.com` maquillé en « gouv », et l'ANTAI
  n'envoie pas d'avis initial par e-mail. Arnaque n° 1 en France, à privilégier
  sur la CAF. *(nouveau : remplace ou complète le piège CAF existant)*
- **[PHISH] « Vos droits à la formation expirent le 31 décembre »**, *Mon
  Compte Formation* `conseiller@moncompteformation-droits.com` : réclame le
  numéro de sécurité sociale « pour débloquer le solde ». *(nouveau, en
  réserve)*

### Légitimes

- **[SAIN] « Confirmation de votre démarche en ligne »**, *Service-Public.fr*
  `no-reply@service-public.fr`. → **déjà en place.**
- **[SAIN] « Votre attestation de droits est disponible »**, *Assurance
  Maladie* `noreply@ameli.fr` : sobre, sans pièce jointe. *(nouveau)*
- **[SAIN-PIÈGE] « Votre avis d'impôt sur le revenu est disponible »**,
  *Direction générale des Finances publiques* `noreply@dgfip.finances.gouv.fr`.
  *Faux-semblant :* le fisc qui écrit, dans le niveau où le fisc est le piège
  principal ; et le domaine `dgfip.finances.gouv.fr` est **plus long et plus
  étrange** que le `impots-remboursement-gouv.com` du faux.
  *Preuve :* il se termine bien par **`.gouv.fr`**, ce qui est infalsifiable ;
  aucune coordonnée bancaire n'est demandée ; aucun montant à recevoir n'est
  promis ; et il invite à se connecter à l'espace particulier **en tapant
  impots.gouv.fr soi-même**. *(nouveau)*
- **[SAIN-PIÈGE] « Remboursement de 47,30 €, versement le 5 octobre »**,
  *Assurance Maladie* `noreply@ameli.fr`.
  *Faux-semblant :* **on vous annonce de l'argent**, le prétexte exact des
  pièges du niveau.
  *Preuve :* l'Assurance Maladie possède déjà votre RIB : le message ne demande
  donc **rien du tout**, il informe. Il cite une consultation réelle et sa date.
  *Leçon :* un vrai remboursement ne réclame jamais vos coordonnées bancaires ;
  l'organisme les a déjà. Dès qu'on vous demande un RIB pour vous *rendre* de
  l'argent, c'est une arnaque. *(nouveau : n'en garder qu'un des deux si le
  niveau devient trop dur)*

---

## 9. Niveau 8 : Appâts dorés *(Expert)*

**Intention :** l'appât du gain. Le [SAIN-PIÈGE] retourne le thème : un vrai
remboursement au milieu des fausses fortunes.

### Pièges

- **[PHISH] « Vous avez gagné 850 000 € »**, *Loterie Nationale Européenne*
  `gains@euro-loterie-resultats.com`. → **déjà en place.**
- **[PHISH] « Doublez votre capital en 30 jours, garanti »**, *CryptoBoost
  Invest* `invest@cryptoboost-gains.com`. → **déjà en place.**
- **[PHISH] « Action requise : vérifiez votre portefeuille »**, *Coinbase*
  `no-reply@coinbase-secure-wallet.com` : demande la phrase de récupération.
  → **déjà en place.**
- **[PHISH] « J'ai accès à votre webcam, 900 € en bitcoin »**, expéditeur
  anonyme, et le message **cite un ancien mot de passe réel** du joueur pour
  crédibiliser la menace. *Indice :* le mot de passe provient d'une fuite de
  données publique, pas d'un piratage ; la menace est du bluff intégral.
  Message utile : ne jamais payer, changer le mot de passe concerné.
  *(nouveau : registre émotionnel inédit, à manier avec un texte sobre)*
- **[PHISH] « Appel aux dons, urgence humanitaire »**, fausse association,
  virement direct ou crypto, aucun numéro RNA. *(nouveau, en réserve)*

### Légitimes

- **[SAIN] « Votre relevé de compte est disponible »**, *BNP Paribas*
  `releve@bnpparibas.net`. → **déjà en place.**
- **[SAIN] « Votre commande Leboncoin est confirmée »**, `e.leboncoin.fr`,
  domaine d'envoi réel qui a l'air d'un sous-domaine douteux. *(nouveau)*
- **[SAIN] « Nouvelle version de l'application disponible »**, notification
  produit anodine. *(nouveau)*
- **[SAIN-PIÈGE] « Régularisation annuelle : 82,40 € en votre faveur »**,
  *EDF* `contact@edf.fr`.
  *Faux-semblant :* **de l'argent qui vous revient sans que vous ayez rien
  demandé** : la promesse même de tous les pièges du niveau.
  *Preuve :* domaine officiel ; le montant est modeste et cohérent avec une
  régularisation de mensualités ; le message précise que la somme sera
  **déduite de la prochaine facture** ou virée sur le compte déjà connu, donc
  **aucune coordonnée bancaire n'est demandée** ; il cite le numéro de contrat.
  *Leçon :* le gain plausible et non réclamé existe (régularisation, trop-perçu,
  remboursement). Le critère n'est pas « on me donne de l'argent », c'est
  « me demande-t-on quelque chose en échange ? ». *(nouveau)*

---

## 10. Niveau 9 : Harponnage *(Expert)*

**Intention :** l'attaque sur mesure, avec le nom et l'entreprise du joueur.
Deux [SAIN-PIÈGE] ici, car tous les messages sont internes et se ressemblent.

### Pièges

- **[PHISH] « Migration de votre boîte mail : reconnexion requise »**, *Support
  Informatique* `it-support@{{entreprise}}-mail-migration.com`.
  → **déjà en place.**
- **[PHISH] « Votre bulletin de paie de septembre est disponible »**,
  *Ressources Humaines* `rh@paie-bulletins-portail.com`. → **déjà en place.**
- **[PHISH] « Thomas a partagé "Budget 2025.xlsx" avec vous »**, *Thomas
  Bernard* `no-reply@sharepoint-partage-doc.com`. → **déjà en place.**
- **[PHISH] « Réinitialisation de votre authentification : scannez le code »**,
  *Sécurité {{entreprise}}* `securite@{{entreprise}}-identity.net` : un **QR
  code** remplace le lien. *Indice nouveau :* le QR code sert à faire passer la
  victime sur son téléphone, hors des protections de l'entreprise, et empêche
  de lire l'URL avant de la visiter. On ne scanne jamais un QR code reçu par
  e-mail. *(nouveau : mécanique inédite, très actuelle)*
- **[PHISH] « Contrat de prestation à signer »**, faux DocuSign
  `dse@docusign-envelope-sign.net`, au nom d'un collègue réel. *(nouveau,
  en réserve)*

### Légitimes

- **[SAIN] « Invitation : Réunion d'équipe hebdomadaire »**, *Calendrier
  Google* `calendar-notification@google.com`. → **déjà en place.**
- **[SAIN] « Sondage : choix du traiteur pour le séminaire »**, message interne
  trivial depuis `{{entreprise}}.com`. *(nouveau)*
- **[SAIN-PIÈGE] « Votre bulletin de paie de septembre est disponible »**,
  *PayFit* `notifications@payfit.com`.
  *Faux-semblant :* **sujet rigoureusement identique** au piège n° 2 du niveau,
  et un domaine tiers (`payfit.com`) qu'un salarié ne connaît pas forcément
  comme légitime.
  *Preuve :* PayFit est le prestataire de paie réellement utilisé par
  l'entreprise (à établir dans un e-mail antérieur du niveau) ; le domaine est
  le domaine racine de l'éditeur, pas un composite ; le message ne demande
  **aucun identifiant** et renvoie vers l'espace habituel.
  *Leçon :* les entreprises utilisent des prestataires externes. Un domaine
  inconnu n'est pas une preuve : il faut savoir *quels* prestataires sont
  légitimes, ce qui suppose de demander en interne plutôt que de deviner.
  *(nouveau : paire directe avec le piège n° 2)*
- **[SAIN-PIÈGE] « Contrat de prestation, signature requise »**, *DocuSign*
  `dse@docusign.net`.
  *Faux-semblant :* DocuSign est l'un des services les plus imités au monde ;
  le domaine `docusign.net` (et non `.com`) **a l'air d'une contrefaçon** ;
  et le message demande une action sur un document.
  *Preuve :* `docusign.net` est bien le domaine d'envoi authentique ; le
  message contient un **code de sécurité d'enveloppe** que l'on peut saisir sur
  docusign.com tapé à la main ; il nomme l'expéditeur réel et le document
  attendu. *(nouveau)*

---

## 11. Niveau 10 : La marée noire *(Expert)*

**Intention :** l'épreuve finale. Tous les indices faciles ont disparu. Les
messages légitimes sont tous un peu dérangeants, les pièges tous impeccables.

### Pièges

- **[PHISH] « Validation de sécurité de votre espace client »**, *La Banque
  Postale* `securite@labanquepostale.securite-fr.com` : le vrai nom en
  sous-domaine d'un domaine pirate. → **déjà en place.**
- **[PHISH] « Petite demande »**, *Claire Fontaine*
  `c.fontaine@direction-executive-grp.com` : fraude au président, ton posé,
  aucune urgence. → **déjà en place.**
- **[PHISH] « Activité de connexion inhabituelle »**, *Microsoft*
  `security@microsoft-account-alert.com`. → **déjà en place.**
- **[PHISH] « Confirmation de votre virement de 1 240 € »**, *Microsoft* avec
  un **homoglyphe** : `security@micrоsoft.com`, où le « o » est un о cyrillique
  (U+043E). *Indice ultime :* le domaine est visuellement **parfait**. Aucune
  lecture ne peut le détecter : seul le fait de **ne pas cliquer et de passer
  par le canal officiel** protège. C'est la bonne note finale du jeu :
  la vérification visuelle a une limite, la méthode n'en a pas.
  *Prévoir dans le débrief l'affichage de la forme punycode
  (`xn--micrsoft-w6g.com`) pour révéler la supercherie.* *(nouveau : le boss)*

### Légitimes

- **[SAIN] « Consignes de sécurité pour votre compte »**, *Google*
  `no-reply@accounts.google.com`. → **déjà en place.**
- **[SAIN] « Votre commande a été livrée »**, *Amazon.fr*
  `commande@amazon.fr`. → **déjà en place.**
- **[SAIN] « Votre billet pour le 12 octobre »**, *SNCF Connect*
  `noreply@sncf-connect.com` : domaine composite **authentique**, qui
  ressemble trait pour trait aux faux domaines des niveaux 1 à 3. *(nouveau)*
- **[SAIN-PIÈGE] « Opération à valider dans votre application »**, *La Banque
  Postale* `noreply@e.labanquepostale.fr`.
  *Faux-semblant :* **même marque, même sujet sécuritaire** que le piège n° 1
  du niveau, et un sous-domaine d'envoi (`e.`) qui évoque exactement la
  technique du sous-domaine trompeur enseignée juste avant.
  *Preuve :* c'est la **bonne lecture du domaine** qui tranche : on lit de
  droite à gauche, et le dernier segment avant le premier `/` est bien
  `labanquepostale.fr`. Le piège, lui, se termine par `securite-fr.com`.
  Et surtout : le message **ne contient aucun lien**, il demande d'ouvrir
  l'application bancaire soi-même.
  *Leçon :* le sous-domaine n'est pas suspect en soi : `e.labanquepostale.fr`
  appartient à la banque, `labanquepostale.securite-fr.com` appartient à
  l'attaquant. La règle tient en une phrase : **lire le domaine de droite à
  gauche.** *(nouveau : la paire qui couronne le jeu)*
- **[SAIN-PIÈGE] « Campagne interne de sensibilisation au phishing »**,
  *Direction de la sécurité* `rssi@{{entreprise}}.com` : annonce qu'un
  faux e-mail de test sera envoyé dans les prochains jours.
  *Faux-semblant :* méta-vertigineux : le joueur se demande légitimement si
  l'annonce de test n'est pas elle-même le test. *Preuve :* domaine interne,
  aucune action demandée, aucun lien, aucune pièce jointe.
  *(nouveau : clin d'œil final, optionnel)*

---

## 12. Réserve d'idées (non affectées)

À piocher pour étoffer un niveau ou en créer un onzième.

**Pièges :**
- Fausse notification Slack / Teams : « vous avez 3 messages non lus ».
- Faux message vocal en pièce jointe (`.html` déguisé en `.wav`).
- Faux renouvellement de nom de domaine / faux annuaire professionnel, arnaque
  classique visant les petites structures.
- Fausse offre d'emploi avec « fiche de poste » en pièce jointe macro.
- Faux WeTransfer au nom d'un collègue.
- Faux e-mail de désinscription : cliquer confirme seulement que l'adresse est
  active.
- Faux « votre messagerie est pleine, libérez de l'espace ».
- Faux avis de la CNIL / mise en demeure RGPD.
- Faux « nouveau numéro WhatsApp du directeur, contactez-moi ici ».
- Fausse invitation d'agenda qui s'auto-ajoute avec un lien dans la description.

**Légitimes et déroutants :**
- Une vraie réinitialisation de mot de passe **non sollicitée** : authentique,
  donc à ne pas signaler, mais à ne surtout pas suivre. Excellent débrief.
- Un vrai message d'un fournisseur **rédigé en anglais**, mal mis en page.
- Une vraie relance de facture impayée, avec un ton sec.
- Un vrai e-mail de la médecine du travail convoquant à une visite.
- Une vraie notification bancaire de prélèvement inhabituel mais réel.
- Un vrai message d'un collègue **parti de l'entreprise**, envoyé depuis son
  adresse personnelle pour dire au revoir.

---

## 13. Ce qu'il reste à faire pour intégrer tout ceci

1. Étendre les tableaux `emails` de `emails.js` selon le plan du § 1.4.
2. Pour chaque niveau recevant un [SAIN-PIÈGE], **enrichir le bloc `lesson`** :
   la structure actuelle (`cases` + `reflexes`) ne documente que les pièges.
   Ajouter un troisième groupe, par exemple `safeCases`, expliquant pourquoi
   tel message alarmant était légitime ; sinon la leçon la plus précieuse du
   niveau n'est jamais formulée.
3. Adapter l'affichage du débrief dans `inbox.html` (§ `.lesson .cols`) pour
   rendre ce troisième groupe.
4. Vérifier que les faux signalements sont pénalisés assez visiblement pour que
   les [SAIN-PIÈGE] aient un enjeu, sans décourager le signalement.
