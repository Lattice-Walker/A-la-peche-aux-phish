// ===========================================================================
//  Langue de l'interface. Le francais est TOUJOURS la langue par defaut :
//  l'anglais ne s'active que si le joueur a explicitement choisi « I speak
//  English », choix conserve dans un cookie local.
//
//  Aucun tiret cadratin n'est utilise dans les textes, en francais comme en
//  anglais : deux-points, point-virgule ou virgule a la place.
// ===========================================================================

function getLang(){
  const m = document.cookie.match(/(?:^|;\s*)phish_lang=([^;]*)/);
  return m && m[1] === 'en' ? 'en' : 'fr';          // francais par defaut
}
function setLang(l){
  document.cookie = 'phish_lang=' + (l === 'en' ? 'en' : 'fr') +
    ';path=/;max-age=' + (60*60*24*365) + ';SameSite=Strict';
}
function toggleLang(){
  setLang(getLang() === 'en' ? 'fr' : 'en');
  location.reload();
}

const I18N = {
  fr: {
    /* ---- commun ---- */
    langSwitch: "I speak English →",
    of: "of",

    /* ---- index : navigation ---- */
    navProfile: "Mon profil",
    navLevels: "Niveaux",
    navDone: "Terminés",
    navTodo: "À faire",
    navTutorial: "Tutoriel",
    searchLevels: "Rechercher un niveau",
    greetHello: "Bonjour",
    greetTextSize: "taille du texte",
    greetReset: "réinitialiser",

    /* ---- index : liste ---- */
    tutoBadge: "Commencez ici",
    tutoSubject: "Bienvenue : apprenez à jouer.",
    tutoSnippet: "Un parcours guidé pas à pas pour repérer et signaler un e-mail piégé.",
    listSection: "Les niveaux",
    listNone: "Aucun niveau ne correspond.",
    levelWord: "Niveau",
    footerText: "Jeu de sensibilisation au phishing · vos informations restent dans votre navigateur (cookie) et ne sont envoyées à personne.",

    /* ---- index : arrivee ---- */
    onbTitle: "Comment vous appelez-vous ?",
    onbSub: "Votre nom sera glissé dans les e-mails du jeu pour les rendre plus réalistes.",
    onbFirst: "Prénom",
    onbLast: "Nom",
    onbCompany: "Entreprise",
    onbFirstPh: "Ex. Camille",
    onbLastPh: "Ex. Dubois",
    onbCompanyPh: "Ex. Nord Industries",
    onbContinue: "Continuer",
    onbPrivacyTitle: "Aucune donnée n'est stockée ni transmise.",
    onbPrivacyBody: "Votre prénom, votre nom et votre entreprise sont enregistrés uniquement dans un cookie de votre navigateur, sur cet appareil. Vous pouvez les effacer à tout moment.",
    sizeTitle: "Quel texte lisez-vous le plus facilement ?",
    sizeSub: "Touchez l'exemple que vous lisez le plus confortablement. Vous pourrez changer plus tard.",
    sizeSample: "Bonjour, votre colis a bien été expédié et arrivera lundi.",
    sizeNormal: "Taille normale",
    sizeLarge: "Grande taille",
    sizeBack: "Revenir",

    /* ---- inbox : cadre ---- */
    searchMail: "Rechercher dans les messages",
    inboxTitle: "Boîte de réception : ",
    gpTutorial: "Tutoriel",
    gpHowTo: "Comment jouer",
    gpReportedOne: "signalé",
    gpReportedMany: "signalés",
    gpFinish: "Terminer le niveau",
    listEmpty: "Vous avez traité tous les messages.<br>Cliquez sur « Terminer le niveau » pour voir votre score.",
    toMe: "to me",
    unsubscribe: "Unsubscribe",

    /* ---- inbox : menu du message ---- */
    miReply: "Répondre",
    miReplyAll: "Répondre à tous",
    miForward: "Transférer",
    miSpam: "Signaler comme spam",
    miPhish: "Signaler comme hameçonnage",
    miOriginal: "Afficher l'original",
    miUnread: "Marquer comme non lu",
    miBlock: "Bloquer l'expéditeur",
    miFilter: "Filtrer les messages de ce type",
    miPrint: "Imprimer",

    /* ---- inbox : quitter ---- */
    quitTitle: "Quitter le niveau ?",
    quitSub: "Votre progression sur ce niveau sera perdue.",
    quitYes: "Oui, revenir aux niveaux",
    quitNo: "Non, continuer à jouer",

    /* ---- inbox : messages ---- */
    toastOpenFirst: "Ouvrez un e-mail d'abord",
    toastGood: "✓ Bien vu ! C'était bien une tentative d'hameçonnage.",
    toastBad: "✗ Attention : cet e-mail était légitime.",
    toastEarly1: "Il reste au moins un e-mail piégé dans la boîte : continuez à chercher. (une étoile en moins)",
    toastEarly2: "Il reste encore un e-mail piégé. Une validation de plus et le niveau sera échoué. (deux étoiles en moins)",

    /* ---- inbox : resultats ---- */
    statCaught: "Hameçonnages attrapés",
    statEarly: "Validations prématurées",
    statFalse: "Faux signalements",
    resTitle0: "Reste sur tes gardes",
    resTitle1: "Pas mal !",
    resTitle2: "Beau travail !",
    resTitle3: "Parfait, sans-faute !",
    resTagPerfect: "Tu as démasqué tous les pièges sans te tromper.",
    resTagOther: "Analyse chaque expéditeur et chaque lien avant d'agir.",
    btnNext: "Niveau suivant",
    btnReplay: "Rejouer ce niveau",
    btnHome: "Retour aux niveaux",
    grpTraps: "Les pièges de ce niveau",
    grpSafe: "Légitimes, malgré les apparences",
    grpReflex: "Les bons réflexes",
    defeatLinkTitle: "Vous vous êtes fait avoir !",
    defeatLinkText: "Vous avez cliqué sur un lien contenu dans un e-mail piégé. Dans la réalité, vos identifiants ou votre argent pourraient déjà être compromis.<br><b style=\"color:#d93025;\">Ne cliquez jamais sur un lien dont vous n'êtes pas certain.</b>",
    defeatEarlyTitle: "Niveau échoué",
    defeatEarlyText: "Vous avez validé le niveau à trois reprises alors qu'il restait des e-mails piégés dans la boîte. Dans la réalité, un seul hameçonnage non repéré suffit à compromettre vos comptes.<br><b style=\"color:#d93025;\">Prenez le temps d'examiner chaque message avant de valider.</b>",

    /* ---- inbox : tutoriel ---- */
    tourSkip: "Passer le tutoriel",
    tourClickHint: "Cliquez sur la zone surlignée",
    tourWelcome: "Bienvenue",
    tourDone: "Terminé",
    tourStep: "Étape",
    tourStepOf: "sur",
    tour0: "Bienvenue ! Ceci est une fausse boîte mail, pour s'entraîner sans aucun risque. Je vais vous montrer, étape par étape, comment repérer et signaler un e-mail piégé.",
    tour0btn: "Commencer",
    tour1: "Voici un e-mail. Cliquez dessus pour l'ouvrir et le lire.",
    tour2: "Regardez toujours l'adresse de l'expéditeur, entre chevrons < >. Ici, le domaine n'est pas celui d'une vraie banque : c'est le signe d'un piège.",
    tour2btn: "J'ai compris",
    tour3: "Pour signaler ce piège, ouvrez ce menu en cliquant sur les trois points.",
    tour4: "Puis cliquez sur « Signaler comme hameçonnage ».",
    tour5: "Dernier point, le plus important : le niveau ne se termine jamais tout seul. Prenez le temps de relire toute la boîte, puis cliquez vous-même sur « Terminer le niveau ». Essayez : cliquez sur ce bouton.",
    tour6: "Bravo ! Vous venez de signaler votre premier hameçonnage : c'est exactement le bon réflexe. Souvenez-vous : c'est toujours vous qui décidez quand le niveau s'arrête, avec le bouton « Terminer le niveau ». Vous êtes prêt à jouer pour de vrai.",
    tour6btn: "Commencer à jouer",

    /* ---- inbox : e-mail du tutoriel ---- */
    tutoSender: "Banque en ligne",
    tutoMailSubject: "Alerte sécurité : vérifiez votre compte immédiatement",
    tutoMailSnippet: "Une connexion suspecte a été détectée. Confirmez vos identifiants sous 24h.",
    tutoMailHead: "Vérification de sécurité requise",
    tutoMailBody: "Bonjour {{prenom}} {{nom}}, une connexion inhabituelle a été détectée sur votre compte. Pour éviter son blocage, confirmez vos identifiants sous <b>24 heures</b>.",
    tutoMailBtn: "Confirmer mon compte"
  },

  en: {
    /* ---- shared ---- */
    langSwitch: "Je parle français →",
    of: "of",

    /* ---- index: navigation ---- */
    navProfile: "My profile",
    navLevels: "Levels",
    navDone: "Completed",
    navTodo: "To do",
    navTutorial: "Tutorial",
    searchLevels: "Search for a level",
    greetHello: "Hello",
    greetTextSize: "text size",
    greetReset: "reset",

    /* ---- index: list ---- */
    tutoBadge: "Start here",
    tutoSubject: "Welcome: learn how to play.",
    tutoSnippet: "A step by step guided tour to spot and report a trap email.",
    listSection: "The levels",
    listNone: "No level matches.",
    levelWord: "Level",
    footerText: "A phishing awareness game · your details stay in your browser (cookie) and are never sent to anyone.",

    /* ---- index: onboarding ---- */
    onbTitle: "What is your name?",
    onbSub: "Your name is slipped into the game's emails to make them feel real.",
    onbFirst: "First name",
    onbLast: "Last name",
    onbCompany: "Company",
    onbFirstPh: "E.g. Camille",
    onbLastPh: "E.g. Dubois",
    onbCompanyPh: "E.g. Northern Industries",
    onbContinue: "Continue",
    onbPrivacyTitle: "Nothing is stored or sent.",
    onbPrivacyBody: "Your first name, last name and company are saved only in a cookie in your browser, on this device. You can delete them at any time.",
    sizeTitle: "Which text do you read most easily?",
    sizeSub: "Tap the sample you read most comfortably. You can change this later.",
    sizeSample: "Hello, your parcel has shipped and will arrive on Monday.",
    sizeNormal: "Normal size",
    sizeLarge: "Large size",
    sizeBack: "Back",

    /* ---- inbox: chrome ---- */
    searchMail: "Search mail",
    inboxTitle: "Inbox: ",
    gpTutorial: "Tutorial",
    gpHowTo: "How to play",
    gpReportedOne: "reported",
    gpReportedMany: "reported",
    gpFinish: "Finish level",
    listEmpty: "You have dealt with every message.<br>Click “Finish level” to see your score.",
    toMe: "to me",
    unsubscribe: "Unsubscribe",

    /* ---- inbox: message menu ---- */
    miReply: "Reply",
    miReplyAll: "Reply all",
    miForward: "Forward",
    miSpam: "Report spam",
    miPhish: "Report phishing",
    miOriginal: "Show original",
    miUnread: "Mark as unread",
    miBlock: "Block sender",
    miFilter: "Filter messages like this",
    miPrint: "Print",

    /* ---- inbox: leaving ---- */
    quitTitle: "Leave this level?",
    quitSub: "Your progress on this level will be lost.",
    quitYes: "Yes, back to the levels",
    quitNo: "No, keep playing",

    /* ---- inbox: messages ---- */
    toastOpenFirst: "Open an email first",
    toastGood: "✓ Well spotted! That really was a phishing attempt.",
    toastBad: "✗ Careful: that email was legitimate.",
    toastEarly1: "At least one trap email is still in the inbox: keep looking. (one star lost)",
    toastEarly2: "There is still a trap email. One more submission and the level is failed. (two stars lost)",

    /* ---- inbox: results ---- */
    statCaught: "Phishing caught",
    statEarly: "Early submissions",
    statFalse: "False reports",
    resTitle0: "Stay on your guard",
    resTitle1: "Not bad!",
    resTitle2: "Nice work!",
    resTitle3: "Perfect, flawless!",
    resTagPerfect: "You unmasked every trap without a single mistake.",
    resTagOther: "Check every sender and every link before you act.",
    btnNext: "Next level",
    btnReplay: "Replay this level",
    btnHome: "Back to the levels",
    grpTraps: "The traps in this level",
    grpSafe: "Legitimate, despite appearances",
    grpReflex: "The right reflexes",
    defeatLinkTitle: "You got caught!",
    defeatLinkText: "You clicked a link inside a phishing email. In real life, your credentials or your money could already be compromised.<br><b style=\"color:#d93025;\">Never click a link you are not sure about.</b>",
    defeatEarlyTitle: "Level failed",
    defeatEarlyText: "You submitted the level three times while trap emails were still sitting in the inbox. In real life, a single phishing email you miss is enough to compromise your accounts.<br><b style=\"color:#d93025;\">Take the time to examine every message before you submit.</b>",

    /* ---- inbox: tutorial ---- */
    tourSkip: "Skip the tutorial",
    tourClickHint: "Click the highlighted area",
    tourWelcome: "Welcome",
    tourDone: "Done",
    tourStep: "Step",
    tourStepOf: "of",
    tour0: "Welcome! This is a fake mailbox, so you can practise with no risk at all. I will show you, step by step, how to spot and report a trap email.",
    tour0btn: "Start",
    tour1: "Here is an email. Click it to open and read it.",
    tour2: "Always look at the sender's address, between the angle brackets < >. Here the domain is not a real bank's: that is the sign of a trap.",
    tour2btn: "Got it",
    tour3: "To report this trap, open this menu by clicking the three dots.",
    tour4: "Then click “Report phishing”.",
    tour5: "Last point, and the most important: the level never ends on its own. Take your time to read the whole inbox, then click “Finish level” yourself. Try it: click this button.",
    tour6: "Well done! You have just reported your first phishing email, which is exactly the right reflex. Remember: you always decide when the level ends, with the “Finish level” button. You are ready to play for real.",
    tour6btn: "Start playing",

    /* ---- inbox: tutorial email ---- */
    tutoSender: "Online Banking",
    tutoMailSubject: "Security alert: check your account immediately",
    tutoMailSnippet: "A suspicious sign in was detected. Confirm your credentials within 24h.",
    tutoMailHead: "Security verification required",
    tutoMailBody: "Hello {{prenom}} {{nom}}, an unusual sign in was detected on your account. To avoid it being blocked, confirm your credentials within <b>24 hours</b>.",
    tutoMailBtn: "Confirm my account"
  }
};

function t(key){
  const L = I18N[getLang()] || I18N.fr;
  return (key in L) ? L[key] : (I18N.fr[key] !== undefined ? I18N.fr[key] : key);
}

// Applique les traductions aux elements porteurs d'un attribut data-i18n*.
function applyI18n(root){
  root = root || document;
  document.documentElement.lang = getLang();
  root.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  root.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  root.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  root.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
}
