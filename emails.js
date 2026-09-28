// ===========================================================================
//  A la peche aux phish - donnees du jeu
//  Chaque niveau contient sa propre boite de reception.
//  isPhish = true  -> e-mail piege (le joueur doit le signaler)
//  isPhish = false -> e-mail legitime (le joueur ne doit PAS le signaler)
//
//  lesson.cases     -> les pieges du niveau (pourquoi c'etait une attaque)
//  lesson.safeCases -> les messages legitimes qui avaient l'air suspects
//                      (facultatif ; c'est la leçon la plus utile du niveau)
//  lesson.reflexes  -> les bons reflexes a retenir
//
//  Tous les e-mails arrivent non lus (unread: true).
// ===========================================================================

const LEVELS_FR = [
  {
    id: 1,
    name: "Premiers hameçons",
    subtitle: "Les arnaques les plus grossières. Ouvre l'œil.",
    difficulty: "Débutant",
    accent: "#34A853",
    lesson: {
      title: "L'hameçonnage (phishing)",
      intro: "L'hameçonnage imite une marque de confiance pour vous pousser à cliquer et à livrer vos identifiants ou votre carte. Voici les pièges tendus dans ce niveau, et le message qui, malgré les apparences, était parfaitement légitime.",
      cases: [
        { name: "Le faux « PayPal »", why: "L'adresse <b>service@paypa1-secure.com</b> remplace le « l » de paypal par un « 1 ». La menace de suspendre le compte « sous 24 heures » sert à vous faire paniquer." },
        { name: "Le faux « Netflix »", why: "L'adresse <b>netflix-paiement-client.net</b> n'est pas le domaine officiel netflix.com. Le prétexte d'un « paiement refusé » vise à voler votre carte bancaire." }
      ],
      safeCases: [
        { name: "L'alerte de connexion Google", why: "Son objet fait peur, et c'est exactement le prétexte qu'emploieront les pièges des niveaux suivants. Pourtant elle vient bien de <b>accounts.google.com</b>, ne demande aucun mot de passe et ne menace de rien : elle informe, c'est tout. <b>Alarmant ne veut pas dire frauduleux.</b>" }
      ],
      reflexes: [
        "Vérifiez le domaine de l'expéditeur, lettre par lettre.",
        "Survolez un lien (sans cliquer) pour lire sa vraie destination.",
        "Méfiez-vous de l'urgence : « sous 24 h », « compte suspendu ».",
        "Un message qui informe sans rien demander n'est pas une attaque.",
        "En cas de doute, rendez-vous sur le site officiel en tapant l'adresse vous-même."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "Google",
        senderEmail: "no-reply@accounts.google.com",
        avatarColor: "#4285f4", avatarLetter: "G",
        subject: "Nouvelle connexion sur Windows",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 9:12 PM (yesterday)", listTime: "9:12 PM",
        snippet: "Si c'est bien vous, aucune action n'est nécessaire.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;border:1px solid #e0e0e0;border-radius:12px;padding:36px 32px;font-family:'Google Sans',Arial;color:#202124;text-align:center;">
            <svg width="40" height="40" viewBox="0 0 48 48" style="margin-bottom:16px;"><path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
            <h2 style="font-size:20px;font-weight:400;margin:0 0 12px;">Nouvelle connexion sur Windows</h2>
            <p style="font-size:14px;color:#5f6368;line-height:1.6;margin:0;">{{email}}<br>Si c'est bien vous, aucune action n'est nécessaire. Sinon, consultez l'activité de votre compte depuis l'application Google.</p>
          </div>`
      },
      {
        id: 2,
        senderName: "Assistance PayPal",
        senderEmail: "service@paypa1-secure.com",
        avatarColor: "#d93025", avatarLetter: "P",
        subject: "Action requise : activité inhabituelle détectée sur votre compte",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 9:14 AM (2 days ago)", listTime: "9:14 AM",
        snippet: "Nous avons détecté une connexion suspecte. Confirmez votre identité sous 24h pour éviter la suspension.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#2c2e2f;">
            <div style="background:#003087;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:22px;font-weight:bold;font-style:italic;">PayPal</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:32px 24px;">
              <h2 style="font-size:20px;margin:0 0 16px;">Nous avons remarqué une activité inhabituelle</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Bonjour {{prenom}} {{nom}},</p>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Une connexion à votre compte a été détectée depuis un appareil inconnu. Par mesure de sécurité, l'accès à votre compte a été temporairement limité.</p>
              <p style="font-size:14px;line-height:1.6;margin:0 0 24px;">Vous devez confirmer votre identité dans les <strong>24 heures</strong>, faute de quoi votre compte sera définitivement suspendu.</p>
              <div style="text-align:center;margin:0 0 24px;"><a href="#" style="display:inline-block;background:#0070ba;color:#fff;text-decoration:none;padding:12px 32px;border-radius:24px;font-size:15px;font-weight:bold;">Confirmer mon identité</a></div>
              <p style="font-size:12px;line-height:1.6;color:#6c7378;margin:0;">Si vous ne reconnaissez pas cette activité, cliquez immédiatement sur le bouton ci-dessus pour sécuriser votre compte.</p>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "Amazon.fr",
        senderEmail: "expedition@amazon.fr",
        avatarColor: "#ff9900", avatarLetter: "a",
        subject: "Votre colis a été expédié",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 10:02 AM (2 days ago)", listTime: "10:02 AM",
        snippet: "Bonne nouvelle ! Votre commande n° 402-7719023 est en route.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#0f1111;">
            <div style="padding:20px 24px;border-bottom:1px solid #e7e7e7;"><span style="font-size:22px;font-weight:bold;color:#232f3e;">amazon</span><span style="color:#ff9900;font-size:22px;">.fr</span></div>
            <div style="border:1px solid #e7e7e7;border-top:none;padding:28px 24px;">
              <h2 style="font-size:19px;margin:0 0 8px;">Votre colis est en route</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Bonjour {{prenom}}, votre commande <strong>n° 402-7719023</strong> a été expédiée et arrivera bientôt.</p>
              <p style="font-size:14px;line-height:1.6;margin:0 0 20px;color:#565959;">Livraison estimée : <strong>lundi 28 septembre</strong></p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#ffd814;color:#0f1111;text-decoration:none;padding:10px 28px;border-radius:8px;font-size:14px;">Suivre mon colis</a></div>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "Netflix",
        senderEmail: "info@netflix-paiement-client.net",
        avatarColor: "#e50914", avatarLetter: "N",
        subject: "Votre paiement a été refusé : mettez à jour vos informations",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 8:41 PM (yesterday)", listTime: "8:41 PM",
        snippet: "Nous n'avons pas pu valider votre dernier paiement. Votre abonnement sera suspendu.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#221f1f;">
            <div style="background:#000;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#e50914;font-size:26px;font-weight:bold;letter-spacing:1px;">NETFLIX</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:32px 24px;">
              <h2 style="font-size:20px;margin:0 0 16px;">Un problème est survenu avec votre paiement</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Bonjour {{prenom}},</p>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Nous n'avons pas réussi à prélever le montant de votre abonnement. Pour continuer à profiter de Netflix sans interruption, veuillez mettre à jour votre mode de paiement dès maintenant.</p>
              <div style="text-align:center;margin:0 0 24px;"><a href="#" style="display:inline-block;background:#e50914;color:#fff;text-decoration:none;padding:12px 32px;border-radius:4px;font-size:15px;font-weight:bold;">Mettre à jour le paiement</a></div>
              <p style="font-size:12px;line-height:1.6;color:#8c8c8c;margin:0;">Sans action de votre part sous 48 heures, votre compte sera automatiquement suspendu.</p>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "Deezer",
        senderEmail: "newsletter@deezer.com",
        avatarColor: "#a238ff", avatarLetter: "D",
        subject: "Vos nouveautés de la semaine",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 11:30 AM (3 days ago)", listTime: "11:30 AM",
        snippet: "3 nouveaux albums de vos artistes suivis sont disponibles.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#111;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#a238ff;font-size:22px;font-weight:bold;">deezer</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Vos nouveautés de la semaine</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour {{prenom}}, voici les sorties sélectionnées pour vous cette semaine.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 6px;">3 nouveaux albums de vos artistes suivis sont disponibles.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#a238ff;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Écouter maintenant</a></div>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">Vous recevez cet e-mail car vous êtes abonné à la lettre d'information Deezer. Vous pouvez vous désinscrire à tout moment.</div>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "Google",
        senderEmail: "noreply-accounts@google.com",
        avatarColor: "#4285f4", avatarLetter: "G",
        subject: "Vous avez partagé certaines données de votre compte Google avec Claude",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 6:28 PM (3 days ago)", listTime: "6:28 PM",
        snippet: "Suivez les données de votre compte Google.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;border:1px solid #e0e0e0;border-radius:12px;padding:40px 32px;font-family:'Google Sans',Roboto,Arial,sans-serif;color:#202124;">
            <div style="text-align:center;">
              <svg width="48" height="48" viewBox="0 0 48 48" style="margin-bottom:24px;"><path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
              <h1 style="font-size:24px;font-weight:400;margin:0 0 24px;">Suivez les données de votre compte Google</h1>
              <div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:24px;">
                <div style="width:28px;height:28px;border-radius:50%;background:#e8a33d;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;">{{initiale}}</div>
                <span style="color:#5f6368;font-size:14px;">{{email}}</span>
              </div>
            </div>
            <hr style="border:none;border-top:1px solid #e0e0e0;margin:0 0 24px;">
            <div style="background:#e8f0fe;border-radius:8px;padding:16px;display:flex;gap:12px;">
              <span style="color:#1a73e8;font-size:20px;">&#9432;</span>
              <div style="font-size:14px;color:#202124;line-height:1.5;">
                <p style="margin:0 0 12px;">Vous recevez cet e-mail, car vous avez utilisé Se connecter avec Google pour vous connecter à <strong>Claude</strong> le <strong>25 septembre à 18:28</strong>.</p>
                <p style="margin:0;">Cet e-mail récapitule les informations que vous avez partagées. Aucune action n'est requise de votre part.</p>
              </div>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 2,
    name: "Eaux troubles",
    subtitle: "Les pièges se raffinent. Vérifie chaque détail.",
    difficulty: "Intermédiaire",
    accent: "#FCBC05",
    lesson: {
      title: "Attaques ciblées : fraude au président & vol d'identifiants",
      intro: "Ces attaques jouent sur l'autorité et la confiance plutôt que sur l'imitation grossière. Et pour la première fois, un message de sécurité parfaitement légitime se cachait au milieu des pièges.",
      cases: [
        { name: "La fraude au président", why: "Un faux « dirigeant » (Sophie Marchand) réclame en urgence des cartes cadeaux, exige la discrétion et vous dissuade d'appeler. Le domaine <b>directions-groupe.com</b> n'est pas celui de votre entreprise." },
        { name: "Le faux « Microsoft 365 »", why: "« Votre mot de passe expire aujourd'hui » vous pousse à saisir vos identifiants sur une fausse page. Le domaine <b>ms365-verify.com</b> n'a rien d'officiel." },
        { name: "La fausse « Banque Postale »", why: "Une fausse alerte de connexion vous incite à « sécuriser » votre compte en urgence. Le domaine <b>labanquepostale-alerte.com</b> n'est pas celui de la banque." }
      ],
      safeCases: [
        { name: "La vraie consigne du service informatique", why: "Sujet sécurité, échéance ferme, action demandée : le triptyque exact du phishing. Mais le domaine est bien <b>{{entreprise}}.com</b>, celui de votre propre entreprise, le message <b>ne demande aucun mot de passe</b>, il renvoie au portail interne habituel et donne un numéro de poste pour vérifier. Un attaquant ne vous invite jamais à l'appeler." }
      ],
      reflexes: [
        "Une demande d'argent ou de cartes cadeaux « urgente et secrète » est un signal d'alarme : vérifiez par téléphone ou en personne.",
        "Aucun service informatique ni aucune banque ne demande votre mot de passe par e-mail.",
        "Méfiez-vous des injonctions à la confidentialité et de la pression temporelle.",
        "Un expéditeur qui vous invite à le rappeler pour vérifier joue franc jeu.",
        "Contrôlez toujours le domaine réel de l'expéditeur avant d'agir."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "Microsoft 365",
        senderEmail: "account-security@ms365-verify.com",
        avatarColor: "#d93025", avatarLetter: "M",
        subject: "Votre mot de passe expire aujourd'hui",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 7:55 AM (yesterday)", listTime: "7:55 AM",
        snippet: "Conservez l'accès à votre messagerie en confirmant votre mot de passe actuel.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:'Segoe UI',Arial,sans-serif;color:#201f1e;">
            <div style="padding:20px 24px;">
              <span style="display:inline-block;width:10px;height:10px;background:#f25022;"></span><span style="display:inline-block;width:10px;height:10px;background:#7fba00;"></span><br>
              <span style="display:inline-block;width:10px;height:10px;background:#00a4ef;"></span><span style="display:inline-block;width:10px;height:10px;background:#ffb900;"></span>
              <span style="font-size:18px;font-weight:600;margin-left:8px;vertical-align:top;">Microsoft</span>
            </div>
            <div style="border:1px solid #e0e0e0;padding:32px 24px;">
              <h2 style="font-size:19px;margin:0 0 16px;">Action requise : votre mot de passe expire aujourd'hui</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Notre système indique que le mot de passe de <strong>{{email}}</strong> expire dans quelques heures. Pour éviter toute interruption de votre messagerie, confirmez que vous souhaitez conserver le mot de passe actuel.</p>
              <div style="margin:0 0 20px;"><a href="#" style="display:inline-block;background:#0078d4;color:#fff;text-decoration:none;padding:10px 28px;font-size:14px;">Conserver mon mot de passe</a></div>
              <p style="font-size:12px;line-height:1.6;color:#605e5c;margin:0;">Ce message a été envoyé par le service de sécurité automatisé. Ne pas répondre.</p>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "Karim Benali",
        senderEmail: "it@{{entreprise}}.com",
        avatarColor: "#1a73e8", avatarLetter: "K",
        subject: "Double authentification obligatoire avant le 15 octobre",
        labels: ["Inbox"],
        date: "Fri, Sep 26, 2:40 PM (2 days ago)", listTime: "2:40 PM",
        snippet: "L'activation se fait depuis le portail interne. Nous ne vous demanderons jamais votre mot de passe.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Bonjour {{prenom}},</p>
              <p style="margin:0 0 14px;">Pour renforcer la sécurité de nos comptes, la <strong>double authentification</strong> sera obligatoire sur l'ensemble des postes de {{entreprise}} à compter du <strong>15 octobre</strong>.</p>
              <p style="margin:0 0 14px;">L'activation se fait depuis le portail interne habituel, rubrique « Mon compte &gt; Sécurité ». Comptez deux minutes. <strong>Nous ne vous demanderons jamais votre mot de passe</strong>, ni par e-mail, ni par téléphone.</p>
              <p style="margin:0 0 14px;">Une question, un doute sur un message qui semble venir de nous ? Appelez-moi directement au poste <strong>4127</strong>, je préfère une question de trop qu'un incident.</p>
              <p style="margin:0;">Karim Benali<br>Responsable informatique, {{entreprise}}</p>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "La Banque Postale",
        senderEmail: "securite@labanquepostale-alerte.com",
        avatarColor: "#003087", avatarLetter: "B",
        subject: "Nouvel appareil connecté à votre espace client",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 6:20 PM (2 days ago)", listTime: "6:20 PM",
        snippet: "Une connexion depuis un appareil inconnu a été enregistrée sur votre espace client.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#1a1a1a;">
            <div style="background:#003b7a;padding:18px 24px;border-radius:8px 8px 0 0;"><span style="color:#fdd000;font-size:20px;font-weight:bold;">La Banque Postale</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:32px 24px;">
              <h2 style="font-size:19px;margin:0 0 16px;color:#003b7a;">Connexion à un nouvel appareil détectée</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 12px;">Bonjour {{prenom}} {{nom}}, une connexion à votre espace client a été enregistrée :</p>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;color:#555;">📍 Marseille, France &nbsp;·&nbsp; 🕗 27/09 à 23:14 &nbsp;·&nbsp; Appareil : Windows</p>
              <p style="font-size:14px;line-height:1.6;margin:0 0 24px;">Si vous êtes à l'origine de cette connexion, ignorez ce message. <strong>Dans le cas contraire, sécurisez votre compte immédiatement.</strong></p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#fdd000;color:#003b7a;text-decoration:none;padding:12px 32px;border-radius:4px;font-size:15px;font-weight:bold;">Sécuriser mon compte</a></div>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "LinkedIn",
        senderEmail: "messages-noreply@linkedin.com",
        avatarColor: "#0a66c2", avatarLetter: "in",
        subject: "Vous avez 3 nouvelles vues sur votre profil cette semaine",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 9:05 AM (3 days ago)", listTime: "9:05 AM",
        snippet: "Découvrez qui s'intéresse à votre parcours.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#000;">
            <div style="padding:18px 24px;"><span style="background:#0a66c2;color:#fff;padding:2px 6px;border-radius:4px;font-weight:bold;font-size:20px;">in</span></div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;margin:0 24px;padding:28px 24px;text-align:center;">
              <h2 style="font-size:20px;margin:0 0 8px;">Vous gagnez en visibilité</h2>
              <p style="font-size:44px;font-weight:bold;color:#0a66c2;margin:8px 0;">3</p>
              <p style="font-size:14px;color:#00000099;margin:0 0 20px;">personnes ont consulté votre profil cette semaine.</p>
              <a href="#" style="display:inline-block;border:1px solid #0a66c2;color:#0a66c2;text-decoration:none;padding:8px 24px;border-radius:20px;font-size:14px;font-weight:600;">Voir qui vous a consulté</a>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "Sophie Marchand",
        senderEmail: "s.marchand@directions-groupe.com",
        avatarColor: "#5f6368", avatarLetter: "S",
        subject: "Petit service urgent",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 4:12 PM (yesterday)", listTime: "4:12 PM",
        snippet: "Je suis en réunion, j'ai besoin que vous vous occupiez de quelque chose rapidement et discrètement.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:15px;line-height:1.7;">
              <p style="margin:0 0 14px;">Bonjour {{prenom}},</p>
              <p style="margin:0 0 14px;">Es-tu disponible ? Je suis coincée en réunion toute la matinée et j'ai besoin que tu t'occupes d'une tâche pour moi rapidement.</p>
              <p style="margin:0 0 14px;">Il faudrait acheter <strong>4 cartes cadeaux Apple de 100 €</strong> pour un cadeau client. Envoie-moi simplement les codes par retour de mail, je te rembourse dès cet après-midi.</p>
              <p style="margin:0 0 14px;">Merci de rester discret là-dessus, c'est une surprise. Ne prends pas la peine de m'appeler, réponds juste ici.</p>
              <p style="margin:0;">Sophie<br><span style="color:#5f6368;font-size:13px;">Directrice, envoyé depuis mon iPhone</span></p>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "Thomas Bernard",
        senderEmail: "t.bernard@{{entreprise}}.com",
        avatarColor: "#188038", avatarLetter: "T",
        subject: "Compte rendu de la réunion produit",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 5:48 PM (3 days ago)", listTime: "5:48 PM",
        snippet: "Les trois points retenus hier, avant qu'on les oublie.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Salut {{prenom}},</p>
              <p style="margin:0 0 14px;">Comme convenu, voici les trois points retenus hier : on garde le planning de novembre, Julie reprend le suivi fournisseurs, et on repousse la refonte du catalogue au premier trimestre.</p>
              <p style="margin:0 0 14px;">Rien d'urgent, je voulais surtout que ce soit écrit quelque part avant qu'on oublie.</p>
              <p style="margin:0;">À jeudi,<br>Thomas</p>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "Doctolib",
        senderEmail: "rappel@doctolib.fr",
        avatarColor: "#107ac0", avatarLetter: "D",
        subject: "Rappel : votre rendez-vous du 30 septembre",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 8:00 AM (2 days ago)", listTime: "8:00 AM",
        snippet: "N'oubliez pas votre rendez-vous de mardi.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#1a1a1a;">
            <div style="padding:18px 24px;"><span style="color:#107ac0;font-size:20px;font-weight:bold;">doctolib</span></div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;margin:0 24px;padding:28px 24px;">
              <h2 style="font-size:18px;margin:0 0 16px;">Rappel de rendez-vous</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 6px;"><strong>Dr. Claire Lemoine</strong>, Médecin généraliste</p>
              <p style="font-size:14px;line-height:1.6;margin:0 0 6px;">🗓️ Mercredi 30 septembre à 14h30</p>
              <p style="font-size:14px;line-height:1.6;margin:0 0 20px;">📍 12 rue des Lilas, 75011 Paris</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;border:1px solid #107ac0;color:#107ac0;text-decoration:none;padding:8px 24px;border-radius:6px;font-size:14px;">Gérer mon rendez-vous</a></div>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 3,
    name: "Colis en souffrance",
    subtitle: "Les fausses livraisons et leurs « petits frais » à régler.",
    difficulty: "Intermédiaire",
    accent: "#FCBC05",
    lesson: {
      title: "Fausses livraisons : le piège des « petits frais »",
      intro: "Le colis est le prétexte idéal : tout le monde en attend un. Mais attention : dans ce niveau, l'un des messages qui réclamait de l'argent était parfaitement authentique.",
      cases: [
        { name: "Le faux « Chronopost »", why: "Le domaine <b>chronopost-suivi-colis.com</b> n'est pas officiel, et le formulaire de carte bancaire est directement dans l'e-mail. Le montant dérisoire de 1,99 € est calibré pour ne pas vous faire réfléchir." },
        { name: "Le faux « DHL »", why: "Le domaine <b>dhl-express-redevance.net</b> et le prétexte d'une « redevance » à payer visent uniquement vos coordonnées bancaires." },
        { name: "La fausse « La Poste »", why: "L'adresse <b>laposte.fr.reprogrammation-colis.net</b> place le vrai nom en <b>sous-domaine</b> d'un domaine pirate. Ce qui compte, c'est le dernier morceau avant le premier « / » : ici, <b>reprogrammation-colis.net</b>." }
      ],
      safeCases: [
        { name: "Les vrais frais de douane Colissimo", why: "C'est exactement le scénario du faux Chronopost, un transporteur qui réclame de l'argent. Pourtant : le domaine <b>colissimo.fr</b> est officiel, le montant de 14,80 € correspond à une vraie TVA (et non à 1,99 € symboliques), le numéro de suivi est celui que vous aviez déjà reçu, et surtout <b>aucun formulaire de carte n'est dans l'e-mail</b> : il vous demande de passer par le site en le tapant vous-même. <b>Les frais de douane existent vraiment.</b>" }
      ],
      reflexes: [
        "Un transporteur ne réclame jamais votre carte bancaire dans le corps d'un e-mail.",
        "Lisez le domaine de droite à gauche : « laposte.fr.autrechose.net » appartient à autrechose.net.",
        "Un montant minuscule (1,99 €) sert à désamorcer votre méfiance : c'est un signal, pas une garantie.",
        "Vérifiez le numéro de suivi : correspond-il à un colis que vous attendez vraiment ?",
        "Dans le doute, suivez votre colis depuis le site du transporteur tapé à la main."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "Chronopost Livraison",
        senderEmail: "service@chronopost-suivi-colis.com",
        avatarColor: "#d93025", avatarLetter: "C",
        subject: "Votre colis est bloqué : frais de douane à régler (1,99 €)",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 11:03 AM (yesterday)", listTime: "11:03 AM",
        snippet: "Votre colis est en attente. Réglez les frais pour permettre la livraison.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#1a1a1a;">
            <div style="background:#c0392b;padding:18px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Chronopost</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:28px 24px;">
              <h2 style="font-size:18px;margin:0 0 12px;">Colis en attente de livraison</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Votre colis n'a pas pu être livré. Des <strong>frais de douane de 1,99 €</strong> doivent être réglés pour permettre sa réexpédition sous 48 heures.</p>
              <div style="text-align:center;margin:0 0 8px;"><a href="#" style="display:inline-block;background:#c0392b;color:#fff;text-decoration:none;padding:12px 30px;border-radius:6px;font-size:15px;font-weight:bold;">Régler 1,99 € et recevoir mon colis</a></div>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "Colissimo",
        senderEmail: "service-client@colissimo.fr",
        avatarColor: "#003b7d", avatarLetter: "C",
        subject: "Frais de dédouanement à régler, colis en provenance du Royaume-Uni",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 3:22 PM (2 days ago)", listTime: "3:22 PM",
        snippet: "Droits et taxes dus sur le colis 6A24187003415. Règlement depuis votre espace Colissimo.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#003b7d;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;letter-spacing:1px;">COLISSIMO</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Frais de dédouanement à régler</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Votre colis <strong>6A24187003415</strong>, expédié depuis le Royaume-Uni, est retenu par la douane. Des droits et taxes sont dus avant sa remise.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Montant : <strong>14,80 €</strong> (TVA 20 % sur une valeur déclarée de 74,00 €)<br>Référence de dossier : <strong>DD-2025-441902</strong></p>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;"><strong>Comment payer ?</strong><br>Connectez-vous à votre espace Colissimo en tapant vous-même <strong>colissimo.fr</strong> dans votre navigateur, rubrique « Mes colis », puis indiquez la référence de dossier ci-dessus.<br><br>Nous ne vous demandons jamais vos coordonnées bancaires par e-mail, et aucun formulaire de paiement n'est joint à ce message.</div>              <p style="font-size:13px;line-height:1.6;margin:16px 0 0;color:#5f6368;">Sans règlement sous 10 jours ouvrés, le colis sera retourné à l'expéditeur.</p>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "DHL Express",
        senderEmail: "colis@dhl-express-redevance.net",
        avatarColor: "#ffcc00", avatarLetter: "D",
        subject: "Redevance impayée : votre colis vous attend",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 6:47 PM (yesterday)", listTime: "6:47 PM",
        snippet: "Une redevance de 2,40 € reste impayée pour la remise de votre colis.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#1a1a1a;">
            <div style="background:#FFCC00;padding:18px 24px;border-radius:8px 8px 0 0;"><span style="color:#D40511;font-size:22px;font-weight:bold;font-style:italic;">DHL</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:28px 24px;">
              <h2 style="font-size:18px;margin:0 0 12px;">Nouvelle tentative de livraison requise</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Bonjour {{prenom}}, votre colis est retenu dans notre centre. Une <strong>redevance de 2,60 €</strong> est nécessaire pour reprogrammer la livraison.</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#D40511;color:#fff;text-decoration:none;padding:12px 30px;border-radius:6px;font-size:15px;font-weight:bold;">Payer la redevance</a></div>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "Mondial Relay",
        senderEmail: "noreply@mondialrelay.fr",
        avatarColor: "#e30613", avatarLetter: "M",
        subject: "Votre colis est arrivé en Point Relais",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 4:10 PM (3 days ago)", listTime: "4:10 PM",
        snippet: "Votre colis 82471905 vous attend au Tabac Le Longchamp.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#e30613;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Mondial Relay</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Votre colis est arrivé en Point Relais</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour {{prenom}}, votre colis <strong>82471905</strong> vous attend.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Tabac Le Longchamp</strong><br>14 rue des Acacias<br>Du lundi au samedi, de 7h à 19h30</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">Pensez à vous munir d'une pièce d'identité. Le colis est gardé 8 jours.</p>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "La Poste",
        senderEmail: "suivi@laposte.fr.reprogrammation-colis.net",
        avatarColor: "#ffcd00", avatarLetter: "L",
        subject: "Votre colis n'a pas pu être livré : reprogrammez la livraison",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 9:31 AM (yesterday)", listTime: "9:31 AM",
        snippet: "Notre facteur s'est présenté en votre absence. Frais de réexpédition : 2,99 €.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#ffcd00;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#003b7d;font-size:20px;font-weight:bold;">La Poste</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Votre colis n'a pas pu être livré</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Notre facteur s'est présenté à votre domicile ce matin en votre absence.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Pour reprogrammer la livraison, une participation aux frais de réexpédition de <strong>2,99 €</strong> est demandée.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#003b7d;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Reprogrammer ma livraison</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Sans action de votre part sous 48 heures, votre colis sera retourné à l'expéditeur.</p>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "Chronopost",
        senderEmail: "notification@chronopost.fr",
        avatarColor: "#00a0df", avatarLetter: "C",
        subject: "Votre colis sera livré aujourd'hui",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 7:40 AM (3 days ago)", listTime: "7:40 AM",
        snippet: "Votre colis sera livré aujourd'hui entre 9h et 13h.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#1a1a1a;">
            <div style="background:#E8710A;padding:18px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Chronopost</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:28px 24px;">
              <h2 style="font-size:18px;margin:0 0 12px;">Votre colis arrive aujourd'hui</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 8px;">Bonjour {{prenom}}, votre colis <strong>n° XY8842013FR</strong> est en cours de livraison.</p>
              <p style="font-size:14px;line-height:1.6;margin:0 0 20px;color:#555;">Créneau estimé : 9h - 13h</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;border:1px solid #E8710A;color:#E8710A;text-decoration:none;padding:9px 24px;border-radius:6px;font-size:14px;">Suivre mon colis</a></div>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "Vinted",
        senderEmail: "no-reply@vinted.fr",
        avatarColor: "#09b1ba", avatarLetter: "V",
        subject: "Bonne nouvelle, votre article est vendu !",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 12:15 PM (2 days ago)", listTime: "12:15 PM",
        snippet: "Votre article a trouvé preneur. Voici la marche à suivre pour l'expédier.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#1a1a1a;">
            <div style="padding:18px 24px;"><span style="color:#09B1BA;font-size:20px;font-weight:bold;">vinted</span></div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;margin:0 24px;padding:26px 24px;text-align:center;">
              <h2 style="font-size:19px;margin:0 0 8px;">Votre article est vendu 🎉</h2>
              <p style="font-size:14px;line-height:1.6;color:#555;margin:0 0 20px;">« Veste en jean », 18,00 €. Imprimez l'étiquette et déposez le colis sous 5 jours.</p>
              <a href="#" style="display:inline-block;background:#09B1BA;color:#fff;text-decoration:none;padding:10px 26px;border-radius:6px;font-size:14px;">Télécharger l'étiquette</a>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 4,
    name: "Faux support technique",
    subtitle: "Le « virus détecté » et le compte soi-disant verrouillé.",
    difficulty: "Intermédiaire",
    accent: "#FCBC05",
    lesson: {
      title: "Faux support : la peur, puis le téléphone",
      intro: "Le faux support technique vous effraie pour vous faire agir vite. Une nouveauté dans ce niveau : un piège sans aucun lien, qui cherche seulement à vous faire décrocher votre téléphone.",
      cases: [
        { name: "Le faux « support Microsoft »", why: "Le domaine <b>microsoft-support-secure.com</b> et un « numéro à appeler d'urgence » sont des marqueurs classiques : Microsoft n'affiche jamais de numéro dans un mail d'alerte virus." },
        { name: "Le faux « Apple »", why: "Le domaine <b>appleid-verification.net</b> et le prétexte d'un identifiant verrouillé cherchent à voler votre mot de passe Apple." },
        { name: "La fausse facture « Norton »", why: "Aucun lien à vérifier : juste un montant énorme (349,99 €) et un numéro à appeler. Le but est de vous faire téléphoner pour vous faire installer un logiciel de prise en main à distance. <b>Un vrai reçu ne vous met jamais la pression pour décrocher.</b>" }
      ],
      safeCases: [
        { name: "La vraie alerte de connexion Apple", why: "Même marque et même prétexte que le faux Apple, dans la même boîte : impossible de trancher sur le thème. Mais <b>email.apple.com</b> est le domaine d'envoi authentique d'Apple, le message est purement informatif (« si c'est bien vous, ignorez »), il ne contient <b>aucun bouton de connexion</b> et ne menace de rien." },
        { name: "La vraie facture Avast", why: "Une facture d'antivirus non attendue, juste à côté du faux Norton. Elle vient du domaine officiel <b>avast.com</b>, le montant est réaliste, et surtout : <b>aucun numéro à appeler en urgence</b>. Le remboursement se gère depuis le compte client, comme partout." }
      ],
      reflexes: [
        "Un e-mail d'alerte qui affiche un numéro de téléphone est presque toujours une arnaque.",
        "Ne rappelez jamais le numéro indiqué dans le message : cherchez celui du site officiel.",
        "N'installez jamais un logiciel de prise en main à distance à la demande de quelqu'un qui vous a contacté.",
        "Comparez les domaines : email.apple.com est réel, appleid-verification.net ne l'est pas.",
        "Un message qui dit « aucune action n'est requise » cherche rarement à vous piéger."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "Sécurité Microsoft",
        senderEmail: "alerte@microsoft-support-secure.com",
        avatarColor: "#d93025", avatarLetter: "M",
        subject: "Alerte : 3 virus détectés sur votre appareil",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 10:22 PM (yesterday)", listTime: "10:22 PM",
        snippet: "Votre appareil est infecté. Appelez immédiatement le support technique.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:'Segoe UI',Arial,sans-serif;color:#201f1e;">
            <div style="border:2px solid #d93025;border-radius:8px;padding:28px 24px;">
              <h2 style="font-size:20px;margin:0 0 16px;color:#d93025;">⚠ Menace détectée sur votre appareil</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Notre système a détecté <strong>3 logiciels malveillants</strong> sur l'ordinateur de {{prenom}} {{nom}}. Vos mots de passe et vos fichiers sont en danger.</p>
              <p style="font-size:14px;line-height:1.6;margin:0 0 20px;">Contactez immédiatement notre support technique agréé au <strong>01 86 76 43 12</strong> ou cliquez ci-dessous pour lancer la réparation.</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#d93025;color:#fff;text-decoration:none;padding:12px 30px;border-radius:4px;font-size:15px;font-weight:bold;">Nettoyer mon ordinateur</a></div>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "Apple",
        senderEmail: "no_reply@email.apple.com",
        avatarColor: "#333", avatarLetter: "A",
        subject: "Votre identifiant Apple a été utilisé pour se connecter sur un Mac",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 2:04 PM (2 days ago)", listTime: "2:04 PM",
        snippet: "Connexion à iCloud depuis un MacBook Air. Si c'est bien vous, ignorez ce message.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#000;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:22px;">&#63743;</span> <span style="color:#fff;font-size:15px;">ID Apple</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Connexion à votre identifiant Apple</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Votre identifiant Apple ({{email}}) a été utilisé pour se connecter à iCloud sur un MacBook Air.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Date :</strong> 26 septembre à 14 h 02<br><strong>Appareil :</strong> MacBook Air ; Paris, France</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">Si c'est bien vous, vous pouvez ignorer ce message. Dans le cas contraire, modifiez votre mot de passe depuis les réglages de votre appareil.</p>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "Norton Billing",
        senderEmail: "billing@norton-renewal-invoice.com",
        avatarColor: "#ffe01b", avatarLetter: "N",
        subject: "Confirmation de renouvellement, Norton 360 : 349,99 €",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 8:16 AM (yesterday)", listTime: "8:16 AM",
        snippet: "Votre abonnement a été reconduit. Pour annuler, appelez le 01 76 42 08 19 sous 48 h.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#000;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#ffe01b;font-size:20px;font-weight:bold;">Norton</span> <span style="color:#fff;font-size:15px;">Billing</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Confirmation de renouvellement</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Votre abonnement <strong>Norton 360 Deluxe</strong> a été reconduit automatiquement pour 24 mois.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Montant prélevé : <strong>349,99 €</strong><br>Référence : NRT-88401-FR<br>Moyen de paiement : carte enregistrée</p>              <div style="background:#fff4e5;border:1px solid #f0c36d;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;"><strong>Vous n'êtes pas à l'origine de ce renouvellement ?</strong><br>Le remboursement ne peut pas être demandé en ligne. Contactez impérativement notre service annulation au <strong style="font-size:16px;">01 76 42 08 19</strong> sous 48 heures, muni de votre référence. Passé ce délai, le montant ne pourra plus être remboursé.</div>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "Apple",
        senderEmail: "no-reply@appleid-verification.net",
        avatarColor: "#d93025", avatarLetter: "A",
        subject: "Votre identifiant Apple a été verrouillé",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 7:09 PM (yesterday)", listTime: "7:09 PM",
        snippet: "Votre compte a été verrouillé pour des raisons de sécurité. Déverrouillez-le maintenant.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#1d1d1f;">
            <div style="text-align:center;padding:24px;"><span style="font-size:30px;"></span><span style="font-size:22px;font-weight:600;"> Apple</span></div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;margin:0 24px;padding:28px 24px;">
              <h2 style="font-size:19px;margin:0 0 16px;text-align:center;">Votre identifiant Apple a été verrouillé</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Nous avons détecté une tentative de connexion inhabituelle. Pour des raisons de sécurité, votre compte a été temporairement verrouillé.</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#0071e3;color:#fff;text-decoration:none;padding:11px 30px;border-radius:20px;font-size:14px;">Déverrouiller mon compte</a></div>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "Avast",
        senderEmail: "billing@avast.com",
        avatarColor: "#ff7800", avatarLetter: "A",
        subject: "Votre abonnement Avast Premium a été renouvelé, 59,99 €",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 10:48 AM (3 days ago)", listTime: "10:48 AM",
        snippet: "Commande AV-2025-772104. Votre facture est disponible dans votre compte.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#ff7800;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Avast</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Votre abonnement a été renouvelé</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour {{prenom}}, merci de votre confiance.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Avast Premium Security</strong> : 1 an, 1 appareil<br>Montant : <strong>59,99 €</strong><br>Commande n° AV-2025-772104</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">La facture est disponible dans votre compte client.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#ff7800;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Voir ma facture</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Vous pouvez désactiver le renouvellement automatique à tout moment depuis votre compte.</p>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "Microsoft",
        senderEmail: "no-reply@microsoft.com",
        avatarColor: "#0067b8", avatarLetter: "M",
        subject: "Mise à jour de sécurité installée",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 5:30 AM (2 days ago)", listTime: "5:30 AM",
        snippet: "KB5044284 a été installée. Aucune action n'est requise.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0067b8;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:600;">Microsoft</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Mise à jour de sécurité installée</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Une mise à jour de sécurité a été installée automatiquement sur votre appareil le 27 septembre.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>KB5044284</strong> : correctifs de sécurité mensuels.</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">Aucune action n'est requise de votre part. Votre appareil redémarrera en dehors de vos heures d'activité.</p>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "Zoom",
        senderEmail: "no-reply@zoom.us",
        avatarColor: "#2d8cff", avatarLetter: "Z",
        subject: "Votre enregistrement est disponible",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 3:12 PM (3 days ago)", listTime: "3:12 PM",
        snippet: "L'enregistrement de votre réunion est prêt à être consulté.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#232333;">
            <div style="padding:18px 24px;"><span style="color:#2D8CFF;font-size:20px;font-weight:bold;">zoom</span></div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;margin:0 24px;padding:26px 24px;">
              <h2 style="font-size:18px;margin:0 0 10px;">Enregistrement prêt</h2>
              <p style="font-size:14px;line-height:1.6;color:#555;margin:0 0 18px;">La réunion « Point d'équipe » du 26 septembre est disponible pendant 30 jours.</p>
              <a href="#" style="display:inline-block;background:#2D8CFF;color:#fff;text-decoration:none;padding:10px 26px;border-radius:6px;font-size:14px;">Voir l'enregistrement</a>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 5,
    name: "L'ordre du président",
    subtitle: "Virements urgents et changements de RIB : la fraude au dirigeant.",
    difficulty: "Confirmé",
    accent: "#EA4335",
    lesson: {
      title: "Fraude au virement : l'urgence contre la vérification",
      intro: "Ici, l'argent part vraiment. Et la leçon la plus importante du niveau est celle-ci : un changement de coordonnées bancaires n'est pas suspect en soi : c'est l'absence de moyen de vérifier qui l'est.",
      cases: [
        { name: "L'ordre de virement du « dirigeant »", why: "Un faux directeur réclame un virement urgent et confidentiel. L'adresse <b>direction-groupe-fr.com</b> imite le nom de l'entreprise sans en être le vrai domaine." },
        { name: "Le faux « changement de RIB »", why: "Un « fournisseur » annonce un nouveau compte bancaire pour ses factures. Changer un RIB sur simple e-mail permet de détourner tous les paiements." },
        { name: "Le détournement de fil de discussion", why: "Le plus redoutable : le message reprend <b>l'historique d'un vrai échange</b> pour inspirer confiance. Mais l'adresse a changé d'une lettre : <b>meunier-sarI.fr</b> avec un i majuscule au lieu d'un l, et le nouveau RIB arrive avec une échéance dépassée." }
      ],
      safeCases: [
        { name: "Le vrai changement de domiciliation bancaire", why: "C'est le scénario d'arnaque le plus coûteux du monde professionnel… et pourtant celui-ci est authentique. Le domaine <b>meunier-sarl.fr</b> est celui qui figure sur les factures précédentes, le message <b>n'est pas urgent</b> (applicable au 1er décembre), il annonce un courrier recommandé en parallèle, et il vous demande explicitement <b>d'appeler pour confirmer avant tout virement</b>. Un fournisseur honnête souhaite que vous l'appeliez." }
      ],
      reflexes: [
        "Tout changement de coordonnées bancaires se vérifie par téléphone, au numéro que vous aviez déjà, jamais à celui du message.",
        "Comparez le domaine caractère par caractère : le « l » minuscule et le « I » majuscule sont identiques à l'écran.",
        "Urgence + confidentialité + virement = fraude, jusqu'à preuve du contraire.",
        "Un historique de conversation cité ne prouve rien : une boîte compromise permet de répondre dans un vrai fil.",
        "Une demande légitime supporte toujours un délai de vérification."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "Paul Durand",
        senderEmail: "p.durand@direction-groupe-fr.com",
        avatarColor: "#5f6368", avatarLetter: "P",
        subject: "Virement à traiter aujourd'hui, confidentiel",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 8:50 AM (yesterday)", listTime: "8:50 AM",
        snippet: "Opération sensible, merci de ne pas en parler autour de vous pour le moment.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:15px;line-height:1.7;">
              <p style="margin:0 0 14px;">Bonjour {{prenom}},</p>
              <p style="margin:0 0 14px;">Je finalise en ce moment une opération confidentielle et j'ai besoin de toi. Peux-tu préparer un <strong>virement de 24 800 €</strong> aujourd'hui même vers le compte que notre partenaire va t'indiquer ?</p>
              <p style="margin:0 0 14px;">Merci de ne pas en parler autour de toi pour l'instant, c'est sensible. Je suis en réunion, réponds directement par mail plutôt que de m'appeler.</p>
              <p style="margin:0;">Paul Durand<br><span style="color:#5f6368;font-size:13px;">Directeur Général</span></p>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "Comptabilité Meunier SARL",
        senderEmail: "compta@meunier-facturation.com",
        avatarColor: "#5f6368", avatarLetter: "M",
        subject: "Mise à jour de nos coordonnées bancaires",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 11:34 AM (2 days ago)", listTime: "11:34 AM",
        snippet: "Merci de prendre en compte notre nouveau RIB pour vos prochains règlements.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:28px 24px;">
              <h2 style="font-size:18px;margin:0 0 16px;">Changement de coordonnées bancaires</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Cher partenaire, suite à un changement d'établissement, nous vous informons que nos règlements doivent désormais être adressés sur notre <strong>nouveau compte bancaire</strong>.</p>
              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;background:#f6f8fc;padding:12px;border-radius:6px;">IBAN : FR76 3000 4000 0512 3456 7890 143</p>
              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">Merci de mettre à jour vos informations pour éviter tout retard de traitement de la facture n° 2024-0912.</p>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "Groupe Meunier",
        senderEmail: "comptabilite@meunier-sarl.fr",
        avatarColor: "#188038", avatarLetter: "M",
        subject: "Changement de domiciliation bancaire, courrier signé en cours d'envoi",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 2:18 PM (3 days ago)", listTime: "2:18 PM",
        snippet: "Applicable au 1er décembre. Merci de nous appeler pour confirmer avant tout virement.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Bonjour {{prenom}},</p>
              <p style="margin:0 0 14px;">Nous vous informons que le Groupe Meunier change d'établissement bancaire. Nos nouvelles coordonnées s'appliqueront aux factures émises <strong>à compter du 1er décembre</strong>. Les factures en cours restent payables sur le compte habituel.</p>
              <p style="margin:0 0 14px;">Un <strong>courrier recommandé signé</strong> par notre direction financière vous parvient cette semaine avec le RIB officiel. Nous vous demandons de <strong>ne rien modifier sur la base de ce seul e-mail</strong>.</p>
              <p style="margin:0 0 14px;">Avant votre premier virement sur le nouveau compte, merci d'appeler notre comptabilité au numéro que vous avez déjà dans vos dossiers pour confirmer de vive voix. Nous préférons cette vérification, elle nous protège tous les deux.</p>
              <p style="margin:0;">Bien cordialement,<br>Alain Rocher<br>Comptabilité, Groupe Meunier</p>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "Alain Rocher",
        senderEmail: "a.rocher@meunier-sarI.fr",
        avatarColor: "#5f6368", avatarLetter: "A",
        subject: "RE: Facture 2025-0118, précision sur le règlement",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 3:41 PM (yesterday)", listTime: "3:41 PM",
        snippet: "Notre ancien compte a été clôturé, merci de virer sur les nouvelles coordonnées.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Bonjour,</p>
              <p style="margin:0 0 14px;">Merci pour votre retour. Je confirme les quantités et le délai évoqués la semaine dernière.</p>
              <p style="margin:0 0 14px;">Un point important pour le règlement : notre ancien compte a été clôturé lors du changement de banque. Merci d'effectuer le virement de la facture <strong>2025-0118</strong> (<strong>8 420,00 €</strong>) sur les nouvelles coordonnées ci-dessous, l'échéance étant dépassée.</p>
              <p style="margin:0 0 14px;"><strong>IBAN : FR76 3000 4008 2800 0123 4567 891</strong><br>Titulaire : Meunier SARL</p>
              <p style="margin:0 0 14px;">Cordialement,<br>Alain Rocher, Comptabilité</p>
              <p style="margin:0;"><span style="color:#8c8c8c;font-size:12px;">------- Message d'origine -------<br>De : {{prenom}} {{nom}} &lt;{{email}}&gt;<br>Objet : Facture 2025-0118<br>« Bonjour Alain, pouvez-vous me confirmer les quantités avant que je lance le règlement ? »</span></p>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "Claire Fontaine",
        senderEmail: "c.fontaine@{{entreprise}}.com",
        avatarColor: "#188038", avatarLetter: "C",
        subject: "Relecture de la présentation du comité",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 6:02 PM (3 days ago)", listTime: "6:02 PM",
        snippet: "Peux-tu relire la partie sur les délais avant jeudi ? Rien d'urgent.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Bonjour {{prenom}},</p>
              <p style="margin:0 0 14px;">Peux-tu relire la présentation du comité avant jeudi ? Surtout la partie sur les délais, j'ai un doute sur le chiffre de la page 6.</p>
              <p style="margin:0 0 14px;">Rien d'urgent, jeudi matin c'est parfait.</p>
              <p style="margin:0;">Merci,<br>Claire</p>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "Service Comptabilité",
        senderEmail: "compta@{{entreprise}}.com",
        avatarColor: "#1a73e8", avatarLetter: "C",
        subject: "Rappel : notes de frais avant le 30",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 9:00 AM (2 days ago)", listTime: "9:00 AM",
        snippet: "Merci de déposer vos notes de frais de septembre avant le 30.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Bonjour à toutes et à tous,</p>
              <p style="margin:0 0 14px;">Un petit rappel : merci de déposer vos <strong>notes de frais de septembre</strong> dans l'outil habituel avant le 30. Passé ce délai, le remboursement basculera sur la paie d'octobre.</p>
              <p style="margin:0;">Bonne journée,<br>Le service comptabilité</p>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "Papeterie Léon",
        senderEmail: "ventes@papeterie-leon.fr",
        avatarColor: "#188038", avatarLetter: "P",
        subject: "Votre facture de septembre",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 8:25 AM (3 days ago)", listTime: "8:25 AM",
        snippet: "Veuillez trouver votre facture mensuelle.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:26px 24px;">
              <h2 style="font-size:18px;margin:0 0 12px;">Facture n° 2024-0918</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 12px;">Bonjour, vous trouverez votre facture mensuelle de fournitures d'un montant de <strong>142,30 €</strong>.</p>
              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">Règlement à 30 jours, sur nos coordonnées bancaires habituelles (inchangées). Merci de votre confiance.</p>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 6,
    name: "Comptes sous pression",
    subtitle: "Droits d'auteur, page suspendue, connexion douteuse sur vos réseaux.",
    difficulty: "Confirmé",
    accent: "#EA4335",
    lesson: {
      title: "Réseaux sociaux : la panique et les domaines trompeurs",
      intro: "Sur les réseaux, la menace de perdre son compte fait céder les plus prudents. Ce niveau enseigne surtout une chose : <b>on ne juge pas un domaine à sa tête</b>.",
      cases: [
        { name: "Le faux « droit d'auteur » Instagram", why: "Le prétexte d'une infraction avec « appel sous 24 h » et le domaine <b>instagram-copyright-appeal.com</b> visent à voler votre mot de passe." },
        { name: "La fausse « page suspendue » Meta", why: "Le domaine <b>meta-business-support.net</b> imite Meta pour paniquer les gestionnaires de page professionnelle." },
        { name: "La fausse « alerte de connexion » LinkedIn", why: "Le domaine <b>linkedin-security-alert.com</b> et l'urgence sécuritaire poussent à cliquer sans vérifier." },
        { name: "La lassitude de l'authentification", why: "L'attaquant a <b>déjà votre mot de passe</b> et ne cherche plus qu'une validation. Il vous noie de notifications pour que vous approuviez « afin que ça s'arrête ». <b>On ne valide jamais une demande qu'on n'a pas déclenchée soi-même.</b>" }
      ],
      safeCases: [
        { name: "La vraie notification Meta", why: "Le domaine <b>facebookmail.com</b> a tout l'air d'une contrefaçon : c'est pourtant le domaine d'envoi officiel de Meta depuis toujours. Le contenu est alarmant (quelqu'un a obtenu les droits d'administration), mais le message vous renvoie vers les paramètres de la Page sans jamais demander de reconnexion. <b>accountprotection.microsoft.com</b>, <b>sncf-connect.com</b> et <b>docusign.net</b> sont dans le même cas : authentiques et déroutants." }
      ],
      reflexes: [
        "Un domaine qui a l'air bizarre n'est pas une preuve : vérifiez-le auprès de la marque, pas à l'instinct.",
        "N'approuvez jamais une demande de connexion que vous n'avez pas déclenchée, même pour faire cesser les alertes.",
        "Si vous recevez une rafale de demandes de validation, votre mot de passe est déjà compromis : changez-le.",
        "Gérez toujours vos comptes depuis l'application ou le site tapé à la main, jamais depuis un lien d'alerte.",
        "La menace de suppression sous 24 h est un outil de panique, pas une procédure réelle."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "Instagram",
        senderEmail: "appeal@instagram-copyright-appeal.com",
        avatarColor: "#d93025", avatarLetter: "I",
        subject: "Votre compte enfreint nos règles sur les droits d'auteur",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 1:14 PM (yesterday)", listTime: "1:14 PM",
        snippet: "Votre compte sera supprimé sous 24 h sans contestation de votre part.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="text-align:center;padding:20px;"><span style="font-size:22px;font-weight:bold;background:linear-gradient(45deg,#F58529,#DD2A7B,#8134AF);-webkit-background-clip:text;background-clip:text;color:transparent;">Instagram</span></div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;margin:0 24px;padding:28px 24px;">
              <h2 style="font-size:18px;margin:0 0 14px;">Signalement pour atteinte aux droits d'auteur</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Nous avons reçu une plainte concernant du contenu publié sur votre compte. Sans action de votre part sous <strong>24 heures</strong>, votre compte sera définitivement supprimé.</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#0095F6;color:#fff;text-decoration:none;padding:11px 30px;border-radius:8px;font-size:14px;font-weight:bold;">Faire appel</a></div>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "Meta",
        senderEmail: "notification@facebookmail.com",
        avatarColor: "#0866ff", avatarLetter: "M",
        subject: "Marie Lefèvre a été ajoutée comme administratrice de votre Page",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 11:47 AM (2 days ago)", listTime: "11:47 AM",
        snippet: "Un nouvel administrateur a été ajouté à votre Page le 26 septembre.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0866ff;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Meta</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Un nouvel administrateur a été ajouté</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Marie Lefèvre</strong> a été ajoutée comme administratrice de votre Page <strong>{{entreprise}}</strong> le 26 septembre à 11 h 47.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Cette personne peut désormais publier, répondre aux messages et gérer les rôles de la Page.</p>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">Vous n'êtes pas à l'origine de ce changement ? Ouvrez le gestionnaire de Pages depuis votre compte et retirez l'accès dans <strong>Paramètres &gt; Rôles de la Page</strong>. Nous ne vous demanderons jamais de vous reconnecter depuis un lien reçu par e-mail.</div>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "Meta for Business",
        senderEmail: "support@meta-business-support.net",
        avatarColor: "#d93025", avatarLetter: "M",
        subject: "Votre page a été suspendue",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 5:02 PM (yesterday)", listTime: "5:02 PM",
        snippet: "Votre page professionnelle est suspendue. Contestez immédiatement.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:18px 24px;"><span style="color:#1877F2;font-size:20px;font-weight:bold;">Meta</span></div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;margin:0 24px;padding:28px 24px;">
              <h2 style="font-size:18px;margin:0 0 14px;">Suspension de votre page professionnelle</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Votre page a été suspendue pour non-respect de nos standards de la communauté. Vous disposez de 24 heures pour contester cette décision avant sa suppression.</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#1877F2;color:#fff;text-decoration:none;padding:11px 30px;border-radius:6px;font-size:14px;font-weight:bold;">Vérifier maintenant</a></div>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "Sécurité du compte",
        senderEmail: "noreply@account-approval-verify.com",
        avatarColor: "#202124", avatarLetter: "S",
        subject: "Approuvez la demande de connexion (code 47)",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 11:58 PM (yesterday)", listTime: "11:58 PM",
        snippet: "Une demande est en attente depuis 11 minutes. Validez pour faire cesser les alertes.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#202124;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:18px;font-weight:600;">Sécurité du compte</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Demande de connexion en attente</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Une demande de connexion à votre compte est en attente de validation depuis 11 minutes.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Code affiché : <strong style="font-size:20px;">47</strong></p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Vous avez reçu plusieurs notifications ces dernières minutes. <strong>Validez cette demande pour faire cesser les alertes.</strong></p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#188038;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Approuver la connexion</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Sans validation, votre compte sera verrouillé par mesure de précaution.</p>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "LinkedIn Security",
        senderEmail: "security@linkedin-security-alert.com",
        avatarColor: "#d93025", avatarLetter: "in",
        subject: "Tentative de connexion inhabituelle",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 6:35 AM (yesterday)", listTime: "6:35 AM",
        snippet: "Une connexion depuis un lieu inhabituel a été bloquée. Vérifiez votre compte.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#000;">
            <div style="padding:18px 24px;"><span style="background:#0A66C2;color:#fff;padding:2px 6px;border-radius:4px;font-weight:bold;font-size:18px;">in</span></div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;margin:0 24px;padding:28px 24px;">
              <h2 style="font-size:18px;margin:0 0 14px;">Connexion inhabituelle détectée</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Une tentative de connexion à votre compte a été bloquée (Kiev, Ukraine). Si ce n'était pas vous, sécurisez immédiatement votre compte.</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#0A66C2;color:#fff;text-decoration:none;padding:11px 30px;border-radius:20px;font-size:14px;font-weight:600;">Sécuriser mon compte</a></div>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "LinkedIn",
        senderEmail: "inmail@linkedin.com",
        avatarColor: "#0a66c2", avatarLetter: "in",
        subject: "Un recruteur souhaite entrer en contact",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 10:11 AM (3 days ago)", listTime: "10:11 AM",
        snippet: "Sonia Kessler, Talent Acquisition chez Vertigo Data, souhaite échanger avec vous.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0a66c2;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Linked</span><span style="background:#fff;color:#0a66c2;font-size:20px;font-weight:bold;padding:0 4px;border-radius:3px;">in</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Un recruteur souhaite entrer en contact</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Sonia Kessler</strong>, Talent Acquisition chez Vertigo Data, souhaite échanger avec vous au sujet d'un poste correspondant à votre profil.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;color:#5f6368;">« Bonjour, j'ai vu votre parcours et je pense qu'un de nos postes pourrait vous intéresser. Seriez-vous disponible pour un échange rapide ? »</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0a66c2;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Répondre sur LinkedIn</a></div>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">Vous recevez cet e-mail car vous autorisez les InMails. Vous pouvez modifier ce réglage dans vos préférences de communication.</div>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "Instagram",
        senderEmail: "security@mail.instagram.com",
        avatarColor: "#c13584", avatarLetter: "I",
        subject: "Nouvelle connexion à votre compte",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 8:22 PM (2 days ago)", listTime: "8:22 PM",
        snippet: "Nous avons détecté une connexion depuis un nouvel appareil.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="text-align:center;padding:20px;"><span style="font-size:20px;font-weight:bold;background:linear-gradient(45deg,#F58529,#DD2A7B,#8134AF);-webkit-background-clip:text;background-clip:text;color:transparent;">Instagram</span></div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;margin:0 24px;padding:26px 24px;">
              <h2 style="font-size:17px;margin:0 0 12px;">Nouvelle connexion</h2>
              <p style="font-size:14px;line-height:1.6;color:#555;margin:0;">Votre compte a été utilisé pour se connecter depuis un iPhone, Paris. Si c'est bien vous, aucune action n'est nécessaire. Sinon, ouvrez l'application et vérifiez votre activité de connexion.</p>
            </div>
          </div>`
      },
      {
        id: 8,
        senderName: "Spotify",
        senderEmail: "no-reply@spotify.com",
        avatarColor: "#1db954", avatarLetter: "S",
        subject: "Votre activité de septembre",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 7:15 PM (3 days ago)", listTime: "7:15 PM",
        snippet: "18 h 42 d'écoute ce mois-ci, soit 12 % de plus qu'en août.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#1db954;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Récap du mois</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Votre activité de septembre</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour {{prenom}}, voici votre récapitulatif mensuel.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>18 h 42</strong> d'écoute ce mois-ci, soit 12 % de plus qu'en août.<br>Votre artiste le plus écouté : <strong>Fatoumata Diawara</strong>.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#1db954;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Voir mon récap complet</a></div>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">Vous pouvez vous désabonner de ce récapitulatif mensuel à tout moment.</div>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 7,
    name: "Faux services publics",
    subtitle: "Impôts, Assurance Maladie, amendes : les pièges administratifs.",
    difficulty: "Confirmé",
    accent: "#EA4335",
    lesson: {
      title: "Services publics : un repère infalsifiable",
      intro: "L'administration inspire confiance, et les fraudeurs le savent. Heureusement, ce domaine offre le repère le plus fiable du jeu, et deux messages authentiques venaient s'y glisser.",
      cases: [
        { name: "Le faux « remboursement des impôts »", why: "Le domaine <b>impots-remboursement-gouv.com</b> n'est pas un site en .gouv.fr, et le fisc ne réclame jamais vos coordonnées bancaires par e-mail." },
        { name: "La fausse « Assurance Maladie »", why: "Le domaine <b>ameli-mise-a-jour.com</b> imite Ameli pour voler vos informations sous prétexte de mise à jour de la carte Vitale." },
        { name: "La fausse « amende »", why: "Le domaine <b>antai-amendes-gouv.com</b> maquille un simple .com en « gouv ». L'ANTAI n'envoie jamais un avis de contravention initial par e-mail, et la menace de majoration sert à vous faire payer sans réfléchir." }
      ],
      safeCases: [
        { name: "Le vrai avis d'impôt", why: "Le domaine <b>dgfip.finances.gouv.fr</b> est plus long et plus étrange que celui du faux, mais il se termine par <b>.gouv.fr</b>, qui ne peut pas être usurpé. Aucune coordonnée bancaire n'est demandée, aucun montant n'est promis, et il vous invite à taper impots.gouv.fr vous-même." },
        { name: "Le vrai remboursement Ameli", why: "On vous annonce de l'argent, exactement comme les pièges du niveau. Mais l'Assurance Maladie <b>possède déjà votre RIB</b> : le message ne demande donc rien, il informe. Dès qu'on vous réclame des coordonnées bancaires pour vous <b>rendre</b> de l'argent, c'est une arnaque." }
      ],
      reflexes: [
        "Un site public français se termine toujours par <b>.gouv.fr</b>, et ce suffixe ne peut pas être imité.",
        "Méfiez-vous des domaines qui contiennent « gouv » ailleurs qu'à la fin : antai-amendes-gouv.com est un .com.",
        "Un organisme qui vous doit de l'argent a déjà vos coordonnées bancaires.",
        "Connectez-vous toujours en tapant l'adresse officielle vous-même.",
        "Un vrai service public ne menace pas de sanction immédiate par e-mail."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "impots.gouv.fr",
        senderEmail: "remboursement@impots-remboursement-gouv.com",
        avatarColor: "#d93025", avatarLetter: "i",
        subject: "Vous êtes éligible à un remboursement de 249 €",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 10:40 AM (yesterday)", listTime: "10:40 AM",
        snippet: "Un trop-perçu a été constaté. Renseignez vos coordonnées bancaires pour le percevoir.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:'Marianne',Arial,sans-serif;color:#161616;">
            <div style="padding:18px 24px;border-bottom:3px solid #000091;"><span style="font-weight:bold;font-size:16px;">RÉPUBLIQUE FRANÇAISE</span><br><span style="color:#5f6368;font-size:13px;">Direction générale des Finances publiques</span></div>
            <div style="padding:28px 24px;">
              <h2 style="font-size:19px;margin:0 0 16px;color:#000091;">Remboursement d'impôt disponible</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Bonjour {{prenom}} {{nom}}, après vérification de votre dossier, un remboursement de <strong>249,00 €</strong> vous est accordé.</p>
              <p style="font-size:14px;line-height:1.6;margin:0 0 20px;">Pour recevoir ce montant sous 5 jours, veuillez renseigner vos coordonnées bancaires.</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#000091;color:#fff;text-decoration:none;padding:12px 30px;border-radius:4px;font-size:15px;">Recevoir mon remboursement</a></div>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "Direction générale des Finances publiques",
        senderEmail: "noreply@dgfip.finances.gouv.fr",
        avatarColor: "#000091", avatarLetter: "F",
        subject: "Votre avis d'impôt sur le revenu est disponible",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 8:10 AM (3 days ago)", listTime: "8:10 AM",
        snippet: "Votre avis 2025 est consultable dans votre espace Particulier sur impots.gouv.fr.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#000091;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:15px;font-weight:bold;">RÉPUBLIQUE FRANÇAISE</span><br><span style="color:#fff;font-size:12px;">Direction générale des Finances publiques</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Votre avis d'impôt est disponible</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour,</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Votre <strong>avis d'impôt sur le revenu 2025</strong> est consultable dans votre espace Particulier.</p>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">Pour le consulter, tapez vous-même <strong>impots.gouv.fr</strong> dans votre navigateur et connectez-vous à votre espace Particulier.<br><br>La DGFiP ne vous demande <strong>jamais</strong> vos coordonnées bancaires ni votre mot de passe par e-mail, et ne vous annonce jamais un remboursement par ce canal.</div>              <p style="font-size:12px;line-height:1.6;margin:16px 0 0;color:#5f6368;">Ce message est envoyé automatiquement, merci de ne pas y répondre.</p>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "Assurance Maladie",
        senderEmail: "contact@ameli-mise-a-jour.com",
        avatarColor: "#d93025", avatarLetter: "a",
        subject: "Mise à jour de votre carte Vitale requise",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 2:26 PM (yesterday)", listTime: "2:26 PM",
        snippet: "Votre carte Vitale doit être mise à jour sous peine de suspension de vos remboursements.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#1a1a1a;">
            <div style="padding:18px 24px;"><span style="color:#0069B4;font-size:20px;font-weight:bold;">ameli.fr</span></div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;margin:0 24px;padding:28px 24px;">
              <h2 style="font-size:18px;margin:0 0 14px;">Mise à jour requise</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Nos services n'ont pas pu traiter votre dernier remboursement. Veuillez mettre à jour vos informations pour éviter la suspension de vos droits.</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#0069B4;color:#fff;text-decoration:none;padding:11px 30px;border-radius:6px;font-size:14px;">Mettre à jour mes informations</a></div>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "ANTAI",
        senderEmail: "noreply@antai-amendes-gouv.com",
        avatarColor: "#1f2b5b", avatarLetter: "A",
        subject: "Avis de contravention n° 78451203, majoration sous 15 jours",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 4:55 PM (2 days ago)", listTime: "4:55 PM",
        snippet: "Amende de 90 € majorée à 375 € en cas de non-paiement sous 15 jours.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#1f2b5b;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:17px;font-weight:bold;">ANTAI</span> <span style="color:#c5cbe0;font-size:12px;">Agence nationale de traitement automatisé des infractions</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Avis de contravention</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Un avis de contravention a été établi à votre nom.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Numéro d'avis :</strong> 78451203<br><strong>Montant :</strong> 90,00 €<br><strong>Infraction :</strong> excès de vitesse inférieur à 20 km/h</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Majoration à 375,00 € si non réglé sous 15 jours.</strong></p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#1f2b5b;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Payer mon amende</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Le défaut de paiement entraînera une inscription au fichier national.</p>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "Assurance Maladie",
        senderEmail: "noreply@ameli.fr",
        avatarColor: "#0064ad", avatarLetter: "a",
        subject: "Un remboursement de 47,30 € a été effectué",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 7:30 AM (2 days ago)", listTime: "7:30 AM",
        snippet: "Versement le 5 octobre sur le compte enregistré dans votre dossier.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0064ad;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">ameli</span> <span style="color:#cfe4f3;font-size:12px;">l'Assurance Maladie</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Un remboursement a été effectué</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Un remboursement de <strong>47,30 €</strong> a été effectué sur le compte bancaire enregistré dans votre dossier.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Acte :</strong> consultation du 18 septembre, Dr Lemoine<br><strong>Date de versement :</strong> 5 octobre</p>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">Le détail est consultable dans votre compte ameli, rubrique « Mes paiements ». <strong>Nous disposons déjà de vos coordonnées bancaires : aucune information ne vous est demandée.</strong></div>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "Assurance Maladie",
        senderEmail: "noreply@ameli.fr",
        avatarColor: "#0064ad", avatarLetter: "a",
        subject: "Votre attestation de droits est disponible",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 11:02 AM (3 days ago)", listTime: "11:02 AM",
        snippet: "Votre attestation à jour peut être téléchargée depuis votre compte ameli.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0064ad;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">ameli</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Votre attestation de droits est disponible</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Votre attestation de droits à jour peut être téléchargée depuis votre compte ameli.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Elle vous sera demandée par votre mutuelle ou votre employeur.</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">Connectez-vous à ameli.fr pour la télécharger.</p>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "Service-Public.fr",
        senderEmail: "no-reply@service-public.fr",
        avatarColor: "#000091", avatarLetter: "S",
        subject: "Confirmation de votre démarche en ligne",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 3:35 PM (3 days ago)", listTime: "3:35 PM",
        snippet: "Votre démarche a bien été enregistrée.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#161616;">
            <div style="padding:18px 24px;border-bottom:3px solid #000091;"><span style="font-weight:bold;font-size:15px;">service-public.fr</span></div>
            <div style="padding:26px 24px;">
              <h2 style="font-size:18px;margin:0 0 12px;">Démarche enregistrée</h2>
              <p style="font-size:14px;line-height:1.6;color:#555;margin:0;">Bonjour {{prenom}}, votre démarche a bien été prise en compte (référence n° 2024-SP-77213). Aucune information bancaire ne vous sera jamais demandée par e-mail. Suivez votre dossier depuis votre espace personnel.</p>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 8,
    name: "Appâts dorés",
    subtitle: "Gains, héritages et cryptos miraculeuses : quand c'est trop beau.",
    difficulty: "Expert",
    accent: "#9334E6",
    lesson: {
      title: "L'appât du gain, et le vrai remboursement",
      intro: "Promettre de l'argent reste l'appât le plus efficace. Mais ce niveau pose une question plus fine : l'argent qui tombe du ciel n'est pas toujours un piège. Ce qui compte, c'est ce qu'on vous demande en échange.",
      cases: [
        { name: "Le faux « gros lot »", why: "Un gain ou un héritage inattendu qui demande des « frais de déblocage » : personne ne vous doit de l'argent que vous n'avez pas joué." },
        { name: "Le faux « placement » crypto", why: "Une plateforme promettant de doubler votre argent : aucun investissement sérieux ne garantit de gains." },
        { name: "La fausse « vérification » de portefeuille", why: "Le domaine <b>coinbase-secure-wallet.com</b> cherche votre phrase de récupération (seed), qui donne un accès total à vos fonds." },
        { name: "Le chantage à la webcam", why: "Le mot de passe cité est réel, mais il provient d'une <b>fuite de données publique</b>, pas d'un piratage de votre machine. La vidéo n'existe pas. <b>Ne payez jamais</b> : changez simplement le mot de passe concerné partout où il servait encore." }
      ],
      safeCases: [
        { name: "La vraie régularisation EDF", why: "De l'argent qui vous revient sans que vous ayez rien demandé : la promesse même de tous les pièges du niveau. Mais le domaine <b>edf.fr</b> est officiel, le montant est modeste et cohérent avec une régularisation de mensualités, le numéro de contrat est cité, et la somme est <b>déduite de la prochaine facture</b> ou virée sur un compte déjà connu. <b>Aucune coordonnée bancaire n'est demandée.</b>" }
      ],
      reflexes: [
        "On ne paie jamais pour recevoir de l'argent : les « frais de déblocage » sont l'arnaque elle-même.",
        "Un rendement garanti n'existe pas. « Garanti » est le mot qui doit vous alerter.",
        "Votre phrase de récupération ne se saisit nulle part, jamais, sous aucun prétexte.",
        "Un mot de passe cité dans un chantage vient d'une fuite publique : vérifiez-le, changez-le, ne payez pas.",
        "La bonne question n'est pas « me donne-t-on de l'argent ? » mais « me demande-t-on quelque chose en échange ? »."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "Loterie Nationale Européenne",
        senderEmail: "gains@euro-loterie-resultats.com",
        avatarColor: "#f9ab00", avatarLetter: "L",
        subject: "Félicitations ! Vous avez gagné 850 000 €",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 12:02 PM (yesterday)", listTime: "12:02 PM",
        snippet: "Votre numéro a été tiré au sort. Réclamez votre gain sous 7 jours.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#1a1a1a;">
            <div style="background:#F9A825;padding:20px 24px;border-radius:8px 8px 0 0;text-align:center;"><span style="color:#fff;font-size:22px;font-weight:bold;">🎉 LOTERIE EUROPÉENNE 🎉</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:28px 24px;">
              <h2 style="font-size:19px;margin:0 0 16px;text-align:center;">Vous êtes notre grand gagnant !</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Votre adresse {{email}} a été sélectionnée parmi des millions. Vous remportez la somme de <strong>850 000 €</strong>.</p>
              <p style="font-size:14px;line-height:1.6;margin:0 0 20px;">Pour recevoir votre gain, contactez notre agent avec vos coordonnées. De légers frais de dossier (0,5 %) s'appliquent.</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#F9A825;color:#fff;text-decoration:none;padding:12px 30px;border-radius:6px;font-size:15px;font-weight:bold;">Réclamer mon gain</a></div>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "EDF",
        senderEmail: "contact@edf.fr",
        avatarColor: "#001a70", avatarLetter: "E",
        subject: "Régularisation annuelle : 82,40 € en votre faveur",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 9:24 AM (3 days ago)", listTime: "9:24 AM",
        snippet: "Un solde de 82,40 € est en votre faveur. Aucune démarche n'est nécessaire.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#001a70;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">EDF</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Régularisation annuelle en votre faveur</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Votre consommation réelle a été relevée. Vos mensualités étaient supérieures à votre consommation : un solde de <strong>82,40 €</strong> est en votre faveur.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Contrat :</strong> 6 204 118 973<br><strong>Période :</strong> d'octobre 2024 à septembre 2025</p>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">Ce montant sera <strong>automatiquement déduit de votre prochaine facture</strong>, ou viré sur le compte déjà enregistré pour vos prélèvements. <strong>Aucune démarche de votre part n'est nécessaire</strong> et aucune coordonnée bancaire ne vous est demandée.</div>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "CryptoBoost Invest",
        senderEmail: "invest@cryptoboost-gains.com",
        avatarColor: "#f9ab00", avatarLetter: "C",
        subject: "Doublez votre capital en 30 jours, garanti",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 4:48 PM (yesterday)", listTime: "4:48 PM",
        snippet: "Notre algorithme affiche 98 % de réussite. Places limitées.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#1a1a1a;">
            <div style="background:#0d1b2a;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#00e5a0;font-size:20px;font-weight:bold;">CryptoBoost</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:28px 24px;">
              <h2 style="font-size:19px;margin:0 0 16px;">Investissez aujourd'hui, doublez demain</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Notre algorithme exclusif génère un rendement <strong>garanti de 100 % en 30 jours</strong>. Rejoignez plus de 12 000 investisseurs satisfaits.</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#00e5a0;color:#0d1b2a;text-decoration:none;padding:12px 30px;border-radius:6px;font-size:15px;font-weight:bold;">Commencer à investir</a></div>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "Coinbase",
        senderEmail: "no-reply@coinbase-secure-wallet.com",
        avatarColor: "#d93025", avatarLetter: "C",
        subject: "Action requise : vérifiez votre portefeuille",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 7:31 PM (yesterday)", listTime: "7:31 PM",
        snippet: "Une vérification de votre portefeuille est nécessaire pour éviter le gel des fonds.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#1a1a1a;">
            <div style="padding:18px 24px;"><span style="color:#1652F0;font-size:20px;font-weight:bold;">Coinbase</span></div>
            <div style="border:1px solid #e0e0e0;border-radius:8px;margin:0 24px;padding:28px 24px;">
              <h2 style="font-size:18px;margin:0 0 14px;">Vérification de sécurité requise</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Suite à une mise à jour, tous les portefeuilles doivent être re-vérifiés. Sans validation sous 24 heures, vos fonds seront temporairement gelés.</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#1652F0;color:#fff;text-decoration:none;padding:11px 30px;border-radius:6px;font-size:14px;font-weight:bold;">Vérifier mon portefeuille</a></div>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "inconnu",
        senderEmail: "d7f2a@mailer-anon-relay.su",
        avatarColor: "#5f6368", avatarLetter: "?",
        subject: "J'ai accès à votre webcam, 900 € en bitcoin",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 2:19 AM (yesterday)", listTime: "2:19 AM",
        snippet: "Votre mot de passe Soleil2019! vous dit quelque chose ? Vous avez 48 heures.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Je vais aller droit au but.</p>
              <p style="margin:0 0 14px;">Votre mot de passe <strong>Soleil2019!</strong> vous dit quelque chose ? J'ai installé un programme sur votre ordinateur et j'ai enregistré votre webcam pendant que vous naviguiez.</p>
              <p style="margin:0 0 14px;">Vous avez <strong>48 heures</strong> pour transférer <strong>900 €</strong> en bitcoin à l'adresse ci-dessous. Passé ce délai, j'envoie la vidéo à tous vos contacts.</p>
              <p style="margin:0 0 14px;"><strong style="word-break:break-all;">bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq</strong></p>
              <p style="margin:0;">Ne cherchez pas à répondre, cette adresse est générée automatiquement.</p>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "leboncoin",
        senderEmail: "no-reply@e.leboncoin.fr",
        avatarColor: "#ff6e14", avatarLetter: "l",
        subject: "Votre commande est confirmée",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 1:38 PM (2 days ago)", listTime: "1:38 PM",
        snippet: "Commande LBC-4471902 enregistrée. Le vendeur dispose de 3 jours pour expédier.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#ff6e14;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">leboncoin</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Votre commande est confirmée</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour {{prenom}}, votre achat a bien été enregistré.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Objectif 50 mm f/1.8</strong>, 89,00 €<br>Commande n° LBC-4471902</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Le vendeur dispose de 3 jours ouvrés pour expédier votre colis. Vous serez prévenu dès l'envoi.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#ff6e14;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Suivre ma commande</a></div>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "BNP Paribas",
        senderEmail: "releve@bnpparibas.net",
        avatarColor: "#00915a", avatarLetter: "B",
        subject: "Votre relevé de compte est disponible",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 6:00 AM (3 days ago)", listTime: "6:00 AM",
        snippet: "Votre relevé mensuel est consultable dans votre espace client.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#1a1a1a;">
            <div style="background:#00915A;padding:18px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:18px;font-weight:bold;">BNP Paribas</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:26px 24px;">
              <h2 style="font-size:18px;margin:0 0 12px;">Relevé disponible</h2>
              <p style="font-size:14px;line-height:1.6;color:#555;margin:0;">Bonjour, votre relevé de compte de septembre est consultable dans votre espace client habituel. Pour votre sécurité, ce message ne contient aucun lien de connexion.</p>
            </div>
          </div>`
      },
      {
        id: 8,
        senderName: "Notes de version",
        senderEmail: "produit@{{entreprise}}.com",
        avatarColor: "#3c4043", avatarLetter: "N",
        subject: "Nouvelle version 4.2 disponible",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 10:05 AM (2 days ago)", listTime: "10:05 AM",
        snippet: "Recherche plus rapide, corrections d'affichage, mode sombre sur le calendrier.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#3c4043;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:18px;font-weight:600;">Notes de version</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Nouvelle version disponible</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">La version <strong>4.2</strong> de l'application est disponible.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Au programme : recherche plus rapide, corrections d'affichage sur les petits écrans, et mode sombre sur la vue calendrier.</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">La mise à jour se fait automatiquement au prochain démarrage.</p>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 9,
    name: "Harponnage",
    subtitle: "Des attaques taillées sur mesure, avec votre nom et votre entreprise.",
    difficulty: "Expert",
    accent: "#9334E6",
    lesson: {
      title: "Harponnage : quand l'attaque connaît votre nom",
      intro: "Tous les messages de ce niveau semblent venir de votre environnement de travail. Deux d'entre eux venaient de prestataires réels, et c'est là toute la difficulté.",
      cases: [
        { name: "La fausse « migration de messagerie »", why: "Un prétendu service informatique de votre entreprise vous demande de vous reconnecter sur un portail : l'URL n'est pas celle de votre organisation." },
        { name: "Le faux « bulletin de paie »", why: "Le domaine <b>paie-bulletins-portail.com</b> n'appartient à personne d'identifiable. La page collecte vos identifiants professionnels." },
        { name: "Le faux « document partagé »", why: "Un partage type SharePoint imite un collègue pour vous faire saisir votre mot de passe sur une fausse page de connexion." },
        { name: "Le QR code piégé", why: "Le code remplace le lien : impossible de lire l'adresse avant de la visiter, et le scan vous fait basculer sur votre téléphone personnel, hors des protections de l'entreprise. <b>On ne scanne jamais un QR code reçu par e-mail.</b>" }
      ],
      safeCases: [
        { name: "Le vrai bulletin de paie PayFit", why: "Objet rigoureusement identique au faux, et un domaine tiers qu'un salarié ne connaît pas forcément. Mais <b>payfit.com</b> est le domaine racine de l'éditeur, pas un composite, et PayFit est bien le prestataire de paie de votre entreprise. Le message ne demande aucun identifiant et propose de se connecter en tapant l'adresse soi-même." },
        { name: "La vraie enveloppe DocuSign", why: "DocuSign est l'un des services les plus imités au monde, et <b>docusign.net</b> a l'air d'une contrefaçon : c'est pourtant le domaine d'envoi authentique. Preuve décisive : l'enveloppe fournit un <b>code de sécurité</b> que vous pouvez saisir sur docusign.com tapé à la main, sans jamais cliquer sur le lien." }
      ],
      reflexes: [
        "Un domaine inconnu n'est pas une preuve : renseignez-vous sur les prestataires réellement utilisés par votre entreprise.",
        "Ne scannez jamais un QR code reçu par e-mail, même s'il semble venir de votre employeur.",
        "Méfiez-vous des composites : payfit.com est légitime, paie-bulletins-portail.com ne l'est pas.",
        "Un service sérieux vous laisse toujours un moyen d'accéder au document sans cliquer sur son lien.",
        "Au moindre doute sur un message interne, vérifiez auprès d'un collègue par un autre canal."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "Support Informatique",
        senderEmail: "it-support@{{entreprise}}-mail-migration.com",
        avatarColor: "#d93025", avatarLetter: "S",
        subject: "Migration de votre boîte mail : reconnexion requise",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 9:48 AM (yesterday)", listTime: "9:48 AM",
        snippet: "Votre boîte sera migrée cette nuit. Reconnectez-vous pour conserver vos messages.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:'Segoe UI',Arial,sans-serif;color:#201f1e;">
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:28px 24px;">
              <h2 style="font-size:18px;margin:0 0 14px;">Maintenance de la messagerie {{entreprise}}</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Bonjour {{prenom}}, dans le cadre de la migration de nos serveurs, tous les collaborateurs de <strong>{{entreprise}}</strong> doivent confirmer leurs identifiants avant ce soir 18h, sous peine de perdre l'accès à leur boîte <strong>{{email}}</strong>.</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#0078d4;color:#fff;text-decoration:none;padding:11px 30px;font-size:14px;">Confirmer mon accès</a></div>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "PayFit",
        senderEmail: "notifications@payfit.com",
        avatarColor: "#0f6fff", avatarLetter: "P",
        subject: "Votre bulletin de paie de septembre est disponible",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 4:30 PM (3 days ago)", listTime: "4:30 PM",
        snippet: "Votre bulletin de septembre a été déposé par {{entreprise}} dans votre espace salarié.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0f6fff;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">PayFit</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Votre bulletin de paie est disponible</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Votre bulletin de paie de <strong>septembre 2025</strong> a été déposé par {{entreprise}} dans votre espace salarié.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0f6fff;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Accéder à mon espace</a></div>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">PayFit est la solution de paie utilisée par {{entreprise}}. Vous pouvez aussi vous connecter en tapant <strong>payfit.com</strong> vous-même. Nous ne vous demanderons jamais votre mot de passe par e-mail.</div>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "Ressources Humaines",
        senderEmail: "rh@paie-bulletins-portail.com",
        avatarColor: "#d93025", avatarLetter: "R",
        subject: "Votre bulletin de paie de septembre est disponible",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 11:20 AM (yesterday)", listTime: "11:20 AM",
        snippet: "Connectez-vous au portail RH pour consulter votre bulletin.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:28px 24px;">
              <h2 style="font-size:18px;margin:0 0 14px;">Bulletin de paie disponible</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Bonjour {{prenom}} {{nom}}, votre bulletin de paie du mois de septembre est en ligne. Connectez-vous au portail RH avec vos identifiants habituels pour le télécharger.</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#AD1457;color:#fff;text-decoration:none;padding:11px 30px;border-radius:6px;font-size:14px;">Accéder au portail RH</a></div>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "DocuSign",
        senderEmail: "dse@docusign.net",
        avatarColor: "#d9a01a", avatarLetter: "D",
        subject: "Contrat de prestation, signature requise",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 10:12 AM (2 days ago)", listTime: "10:12 AM",
        snippet: "Claire Fontaine vous a envoyé un document à signer. Code : 7F4A 21C8 9B03.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#fff;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#d9a01a;font-size:22px;font-weight:bold;">DocuSign</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Contrat de prestation, signature requise</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Claire Fontaine</strong> vous a envoyé un document à signer.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Document :</strong> Contrat de prestation, Vertigo Data<br><strong>Expéditeur :</strong> c.fontaine@{{entreprise}}.com</p>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;"><strong>Code de sécurité de l'enveloppe :</strong> <span style="font-family:monospace;font-size:15px;">7F4A 21C8 9B03</span><br><br>Vous pouvez ouvrir ce document sans utiliser le lien : rendez-vous sur <strong>docusign.com</strong> en tapant l'adresse vous-même et saisissez ce code.</div>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#d9a01a;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Consulter le document</a></div>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "Sécurité {{entreprise}}",
        senderEmail: "securite@{{entreprise}}-identity.net",
        avatarColor: "#d93025", avatarLetter: "S",
        subject: "Réinitialisation de votre authentification : scannez le code",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 3:05 PM (yesterday)", listTime: "3:05 PM",
        snippet: "Scannez le code avec votre téléphone pour renouveler votre authentification.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#5f6368;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:17px;font-weight:600;">Sécurité, {{entreprise}}</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Réinitialisation de votre authentification</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Votre méthode d'authentification arrive à expiration. Pour la renouveler, <strong>scannez le code ci-dessous avec votre téléphone</strong>.</p>              <div style="text-align:center;margin:22px 0;"><div style="display:inline-block;width:150px;height:150px;background:repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 0 0/24px 24px;border:10px solid #fff;outline:1px solid #dadce0;"></div></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">La procédure prend moins d'une minute. Sans renouvellement sous 24 heures, votre accès sera suspendu.</p>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "Thomas Bernard",
        senderEmail: "no-reply@sharepoint-partage-doc.com",
        avatarColor: "#d93025", avatarLetter: "T",
        subject: "Thomas a partagé « Budget 2025.xlsx » avec vous",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 5:52 PM (yesterday)", listTime: "5:52 PM",
        snippet: "Un document a été partagé avec vous. Connectez-vous pour y accéder.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:'Segoe UI',Arial,sans-serif;color:#201f1e;">
            <div style="border:1px solid #e0e0e0;border-radius:8px;padding:28px 24px;">
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;"><strong>Thomas Bernard</strong> a partagé un document avec vous.</p>
              <div style="border:1px solid #e0e0e0;border-radius:6px;padding:16px;margin:0 0 16px;display:flex;align-items:center;gap:12px;">
                <span style="font-size:26px;">📊</span><span style="font-size:14px;">Budget 2025.xlsx</span>
              </div>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#0078d4;color:#fff;text-decoration:none;padding:11px 30px;font-size:14px;">Ouvrir le document</a></div>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "Nadia Chaumette",
        senderEmail: "services-generaux@{{entreprise}}.com",
        avatarColor: "#188038", avatarLetter: "N",
        subject: "Sondage : choix du traiteur pour le séminaire",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 2:55 PM (3 days ago)", listTime: "2:55 PM",
        snippet: "Merci de répondre A ou B avant vendredi.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Bonjour à toutes et à tous,</p>
              <p style="margin:0 0 14px;">Pour le séminaire du 14 novembre, il faut trancher entre deux traiteurs. Merci de répondre avant vendredi, un simple « A » ou « B » en réponse à ce message suffit.</p>
              <p style="margin:0 0 14px;"><strong>A</strong> : Buffet chaud, végétarien possible<br><strong>B</strong> : Plateaux froids et desserts</p>
              <p style="margin:0;">Merci d'avance,<br>Nadia, Services généraux</p>
            </div>
          </div>`
      },
      {
        id: 8,
        senderName: "Calendrier",
        senderEmail: "calendar-notification@google.com",
        avatarColor: "#4285f4", avatarLetter: "C",
        subject: "Invitation : Réunion d'équipe hebdomadaire",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 8:45 AM (2 days ago)", listTime: "8:45 AM",
        snippet: "Vous êtes invité à la réunion d'équipe de lundi.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:'Google Sans',Arial;color:#202124;">
            <div style="border:1px solid #e0e0e0;border-radius:12px;padding:26px 24px;">
              <h2 style="font-size:18px;margin:0 0 12px;">Réunion d'équipe hebdomadaire</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 6px;">🗓️ Lundi 29 septembre · 10h00 – 10h45</p>
              <p style="font-size:14px;line-height:1.6;margin:0 0 6px;">📍 Salle Horizon / visioconférence</p>
              <p style="font-size:13px;line-height:1.6;color:#5f6368;margin:12px 0 0;">Organisateur : votre équipe. Répondez depuis votre agenda habituel.</p>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 10,
    name: "La marée noire",
    subtitle: "Épreuve finale : les pièges les plus soignés, sans filet.",
    difficulty: "Expert",
    accent: "#9334E6",
    lesson: {
      title: "Épreuve finale : la vigilance de tous les instants",
      intro: "Les meilleures attaques ressemblent à s'y méprendre à de vrais messages, et se cachent au milieu de courriers parfaitement légitimes. Ce niveau se termine sur la limite de la vérification visuelle.",
      cases: [
        { name: "La fausse « Banque Postale » quasi parfaite", why: "Le domaine <b>labanquepostale.securite-fr.com</b> place le vrai nom en sous-domaine d'un domaine pirate : ce qui compte, c'est le dernier morceau avant le premier « / »." },
        { name: "La fraude au président discrète", why: "Un ton posé, pas d'énorme urgence, juste une demande « entre nous » : la manipulation la plus efficace est la plus sobre." },
        { name: "Le vol d'identifiants Microsoft", why: "Une alerte de sécurité crédible qui renvoie vers une fausse page de connexion pour capturer votre mot de passe." },
        { name: "Le domaine homoglyphe", why: "<b>micrоsoft.com</b> : le « o » est un <b>о cyrillique</b> (caractère U+043E), visuellement identique au nôtre. Sa vraie forme est <b>xn--micrsoft-w6g.com</b>. Aucune lecture attentive ne peut le détecter : <b>seul le fait de ne pas cliquer et de passer par le canal officiel protège</b>." }
      ],
      safeCases: [
        { name: "La vraie Banque Postale", why: "Même marque et même sujet sécuritaire que le piège, avec un sous-domaine qui évoque la technique enseignée juste avant. Mais on lit le domaine <b>de droite à gauche</b> : <b>e.labanquepostale.fr</b> se termine par labanquepostale.fr et appartient donc à la banque, là où le piège se termine par securite-fr.com. Et surtout, ce message ne contient <b>aucun lien</b> : il vous demande d'ouvrir l'application vous-même." },
        { name: "L'annonce de campagne interne", why: "Vertigineuse : une annonce qui prévient qu'un faux e-mail va circuler pourrait très bien être elle-même le piège. Mais elle vient du domaine interne <b>{{entreprise}}.com</b>, ne demande aucune action, et ne contient ni lien ni pièce jointe. <b>Un message qui ne demande rien n'a rien à vous voler.</b>" }
      ],
      reflexes: [
        "Lisez le domaine de droite à gauche : le vrai propriétaire est juste avant le premier « / ».",
        "La vérification visuelle a une limite : un homoglyphe est indétectable à l'œil nu.",
        "La seule parade fiable : ne jamais cliquer, et rejoindre le service par un canal que vous maîtrisez.",
        "Ne signalez pas à l'aveugle : un e-mail légitime signalé, c'est aussi une erreur.",
        "L'absence d'urgence n'est pas une preuve de légitimité.",
        "Dans le doute, vérifiez par un canal indépendant avant toute action."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "La Banque Postale",
        senderEmail: "securite@labanquepostale.securite-fr.com",
        avatarColor: "#d93025", avatarLetter: "B",
        subject: "Validation de sécurité de votre espace client",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 10:15 AM (yesterday)", listTime: "10:15 AM",
        snippet: "Une validation de sécurité est nécessaire pour maintenir l'accès à votre espace.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#1a1a1a;">
            <div style="background:#003b7a;padding:18px 24px;border-radius:8px 8px 0 0;"><span style="color:#fdd000;font-size:20px;font-weight:bold;">La Banque Postale</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:28px 24px;">
              <h2 style="font-size:18px;margin:0 0 14px;color:#003b7a;">Validation requise</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Bonjour {{prenom}} {{nom}}, une opération en attente sur votre compte nécessite votre validation. Sans confirmation sous 48 heures, votre carte pourrait être temporairement bloquée.</p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#fdd000;color:#003b7a;text-decoration:none;padding:12px 30px;border-radius:4px;font-size:15px;font-weight:bold;">Valider l'opération</a></div>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "La Banque Postale",
        senderEmail: "noreply@e.labanquepostale.fr",
        avatarColor: "#003087", avatarLetter: "B",
        subject: "Une opération attend votre validation",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 6:05 PM (2 days ago)", listTime: "6:05 PM",
        snippet: "Ouvrez votre application bancaire, rubrique « Opérations à valider ».",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#003087;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">La Banque Postale</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Une opération attend votre validation</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Une opération en attente nécessite votre validation dans votre application bancaire.</p>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;"><strong>Ouvrez vous-même votre application La Banque Postale</strong>, rubrique « Opérations à valider ». Vous y retrouverez le détail et pourrez confirmer ou refuser.<br><br>Ce message ne contient volontairement <strong>aucun lien</strong> : nous ne vous demanderons jamais de vous connecter depuis un e-mail.</div>              <p style="font-size:12px;line-height:1.6;margin:16px 0 0;color:#5f6368;">Si vous ne reconnaissez pas cette opération, refusez-la depuis l'application et contactez votre conseiller.</p>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "Claire Fontaine",
        senderEmail: "c.fontaine@direction-executive-grp.com",
        avatarColor: "#5f6368", avatarLetter: "C",
        subject: "Petite demande",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 1:33 PM (yesterday)", listTime: "1:33 PM",
        snippet: "Peux-tu regarder ça quand tu as un moment ? Merci de rester discret pour l'instant.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:15px;line-height:1.7;">
              <p style="margin:0 0 14px;">Bonjour {{prenom}},</p>
              <p style="margin:0 0 14px;">J'espère que tu vas bien. Aurais-tu un moment aujourd'hui ? J'ai un règlement à finaliser pour un prestataire et je préfère te confier ça directement.</p>
              <p style="margin:0 0 14px;">Je t'envoie les coordonnées dans un instant. Rien d'urgent, mais si tu peux t'en occuper avant ce soir ce serait parfait. Merci d'avance.</p>
              <p style="margin:0;">Claire</p>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "Microsoft",
        senderEmail: "security@microsoft-account-alert.com",
        avatarColor: "#d93025", avatarLetter: "M",
        subject: "Activité de connexion inhabituelle",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 7:47 PM (yesterday)", listTime: "7:47 PM",
        snippet: "Une connexion inhabituelle a été détectée sur votre compte Microsoft.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:'Segoe UI',Arial,sans-serif;color:#201f1e;">
            <div style="padding:20px 24px;"><span style="font-size:18px;font-weight:600;">Microsoft</span></div>
            <div style="border:1px solid #e0e0e0;padding:28px 24px;">
              <h2 style="font-size:18px;margin:0 0 14px;">Activité inhabituelle sur votre compte</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Nous avons détecté une tentative de connexion depuis un lieu inhabituel. Si ce n'était pas vous, vérifiez votre activité et sécurisez votre compte dès maintenant.</p>
              <div style="margin:0 0 8px;"><a href="#" style="display:inline-block;background:#0078d4;color:#fff;text-decoration:none;padding:10px 28px;font-size:14px;">Vérifier mon activité</a></div>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "Microsoft",
        senderEmail: "security@micrоsoft.com",
        avatarColor: "#0067b8", avatarLetter: "M",
        subject: "Confirmation de votre virement de 1 240 €",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 4:22 PM (yesterday)", listTime: "4:22 PM",
        snippet: "Un virement de 1 240,00 € vers SC Digital Ltd est en cours d'exécution.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0067b8;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:600;">Microsoft</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Confirmation de votre virement</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour,</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Un virement de <strong>1 240,00 €</strong> a été autorisé depuis votre compte Microsoft vers le bénéficiaire <strong>SC Digital Ltd</strong>.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Référence :</strong> MS-PAY-771249<br><strong>Statut :</strong> en cours d'exécution</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Si vous n'êtes pas à l'origine de cette opération, annulez-la depuis votre compte.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0067b8;color:#fff;text-decoration:none;padding:12px 30px;border-radius:4px;font-size:15px;font-weight:bold;">Annuler le virement</a></div>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "Hélène Vasseur",
        senderEmail: "rssi@{{entreprise}}.com",
        avatarColor: "#188038", avatarLetter: "H",
        subject: "Campagne interne de sensibilisation au phishing",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 9:40 AM (3 days ago)", listTime: "9:40 AM",
        snippet: "Un faux e-mail de test sera envoyé dans les prochains jours. Aucune sanction individuelle.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Bonjour à toutes et à tous,</p>
              <p style="margin:0 0 14px;">Dans les prochains jours, {{entreprise}} va mener une <strong>campagne interne de sensibilisation au phishing</strong>. Un faux e-mail de test sera envoyé à l'ensemble des collaborateurs.</p>
              <p style="margin:0 0 14px;">L'objectif n'est pas de piéger qui que ce soit, mais de mesurer nos réflexes collectifs. <strong>Aucune sanction individuelle</strong> ne sera prise, et les résultats ne seront communiqués que de façon globale.</p>
              <p style="margin:0 0 14px;">Continuez simplement à signaler ce qui vous paraît suspect, comme d'habitude.</p>
              <p style="margin:0;">Hélène Vasseur<br>Responsable de la sécurité des systèmes d'information, {{entreprise}}</p>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "SNCF Connect",
        senderEmail: "noreply@sncf-connect.com",
        avatarColor: "#0088ce", avatarLetter: "S",
        subject: "Votre billet pour le 12 octobre",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 12:48 PM (2 days ago)", listTime: "12:48 PM",
        snippet: "Paris Montparnasse vers Rennes, dimanche 12 octobre. Dossier KQPZRT.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0088ce;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">SNCF Connect</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Votre billet pour le 12 octobre</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Bonjour {{prenom}}, votre billet est confirmé.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Paris Montparnasse &rarr; Rennes</strong><br>Dimanche 12 octobre, départ 14 h 07, arrivée 15 h 32<br>Voiture 12, place 64 ; Dossier <strong>KQPZRT</strong></p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">Votre billet est disponible dans l'application SNCF Connect.</p>
            </div>
          </div>`
      },
      {
        id: 8,
        senderName: "Google",
        senderEmail: "no-reply@accounts.google.com",
        avatarColor: "#4285f4", avatarLetter: "G",
        subject: "Consignes de sécurité pour votre compte",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 7:20 AM (3 days ago)", listTime: "7:20 AM",
        snippet: "Quelques rappels pour garder votre compte en sécurité.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;border:1px solid #e0e0e0;border-radius:12px;padding:36px 32px;font-family:'Google Sans',Arial;color:#202124;text-align:center;">
            <svg width="40" height="40" viewBox="0 0 48 48" style="margin-bottom:16px;"><path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
            <h2 style="font-size:20px;font-weight:400;margin:0 0 12px;">Votre compte est protégé</h2>
            <p style="font-size:14px;color:#5f6368;line-height:1.6;margin:0;">Récapitulatif mensuel pour {{email}} : aucune activité suspecte détectée. Ce message est informatif et ne contient aucun lien de connexion.</p>
          </div>`
      },
      {
        id: 9,
        senderName: "Amazon.fr",
        senderEmail: "commande@amazon.fr",
        avatarColor: "#ff9900", avatarLetter: "a",
        subject: "Votre commande a été livrée",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 3:10 PM (2 days ago)", listTime: "3:10 PM",
        snippet: "Votre colis a été livré. Nous espérons qu'il vous convient.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#0f1111;">
            <div style="padding:20px 24px;border-bottom:1px solid #e7e7e7;"><span style="font-size:22px;font-weight:bold;color:#232f3e;">amazon</span><span style="color:#ff9900;font-size:22px;">.fr</span></div>
            <div style="border:1px solid #e7e7e7;border-top:none;padding:26px 24px;">
              <h2 style="font-size:18px;margin:0 0 10px;">Colis livré</h2>
              <p style="font-size:14px;line-height:1.6;color:#565959;margin:0;">Bonjour {{prenom}}, votre commande n° 402-8830127 a été livrée. Retrouvez le détail et les options de retour dans « Vos commandes ».</p>
            </div>
          </div>`
      }
    ]
  }
];
