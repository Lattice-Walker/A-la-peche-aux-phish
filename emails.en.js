// ===========================================================================
//  A la peche aux phish, English data set.
//  Loaded alongside emails.js; used only when the player picks English.
//  isPhish = true  -> trap email (the player must report it)
//  isPhish = false -> legitimate email (the player must NOT report it)
//  All emails arrive unread. No em dash is used anywhere in this file.
// ===========================================================================

const LEVELS_EN = [
  {
    id: 1,
    name: "First hooks",
    subtitle: "The crudest scams. Keep your eyes open.",
    difficulty: "Beginner",
    accent: "#34A853",
    lesson: {
      title: "Phishing",
      intro: "Phishing imitates a brand you trust to push you into clicking and handing over your credentials or your card. Here are the traps set in this level, and the message that was perfectly legitimate despite appearances.",
      cases: [
        { name: "The fake PayPal", why: "The address <b>service@paypa1-secure.com</b> replaces the letter l in paypal with the digit 1. The threat of suspending the account within 24 hours is there to make you panic." },
        { name: "The fake Netflix", why: "The address <b>netflix-paiement-client.net</b> is not the official netflix.com domain. The declined payment pretext is aimed at stealing your bank card." }
      ],
      safeCases: [
        { name: "The Google sign in alert", why: "Its subject line is frightening, and it is exactly the pretext the traps in later levels will use. Yet it really does come from <b>accounts.google.com</b>, it asks for no password and it threatens nothing: it simply informs you. <b>Alarming does not mean fraudulent.</b>" }
      ],
      reflexes: [
        "Check the sender's domain, letter by letter.",
        "Hover over a link, without clicking, to read its real destination.",
        "Be wary of urgency: within 24 hours, account suspended.",
        "A message that informs you without asking for anything is not an attack.",
        "When in doubt, go to the official site by typing the address yourself."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "Google",
        senderEmail: "no-reply@accounts.google.com",
        avatarColor: "#4285f4", avatarLetter: "G",
        subject: "New sign in on Windows",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 9:12 PM (yesterday)", listTime: "9:12 PM",
        snippet: "If this was you, no action is needed.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;border:1px solid #e0e0e0;border-radius:12px;padding:36px 32px;font-family:'Google Sans',Arial;color:#202124;text-align:center;">
            <h2 style="font-size:20px;font-weight:400;margin:0 0 12px;">New sign in on Windows</h2>
            <p style="font-size:14px;color:#5f6368;line-height:1.6;margin:0;">{{email}}<br>If this was you, no action is needed. Otherwise, review your account activity from the Google app.</p>
          </div>`
      },
      {
        id: 2,
        senderName: "PayPal Support",
        senderEmail: "service@paypa1-secure.com",
        avatarColor: "#d93025", avatarLetter: "P",
        subject: "Action required: unusual activity detected on your account",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 9:14 AM (2 days ago)", listTime: "9:14 AM",
        snippet: "We detected a suspicious sign in. Confirm your identity within 24h to avoid suspension.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#003087;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:22px;font-weight:bold;font-style:italic;">PayPal</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">We noticed unusual activity</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}} {{nom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">A sign in to your account was detected from an unknown device. As a security measure, access to your account has been temporarily limited.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">You must confirm your identity within <strong>24 hours</strong>, otherwise your account will be permanently suspended.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0070ba;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Confirm my identity</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#6c7378;">If you do not recognise this activity, click the button above immediately to secure your account.</p>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "Amazon.co.uk",
        senderEmail: "expedition@amazon.fr",
        avatarColor: "#ff9900", avatarLetter: "a",
        subject: "Your parcel has shipped",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 10:02 AM (2 days ago)", listTime: "10:02 AM",
        snippet: "Good news! Your order no. 402-7719023 is on its way.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#0f1111;">
            <div style="padding:20px 24px;border-bottom:1px solid #e7e7e7;"><span style="font-size:22px;font-weight:bold;color:#232f3e;">amazon</span><span style="color:#ff9900;font-size:22px;">.co.uk</span></div>
            <div style="border:1px solid #e7e7e7;border-top:none;padding:28px 24px;">
              <h2 style="font-size:19px;margin:0 0 8px;">Your parcel is on its way</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Hello {{prenom}}, your order <strong>no. 402-7719023</strong> has shipped and will arrive soon.</p>
              <p style="font-size:14px;line-height:1.6;margin:0 0 20px;color:#565959;">Estimated delivery: <strong>Monday 28 September</strong></p>
              <div style="text-align:center;"><a href="#" style="display:inline-block;background:#ffd814;color:#0f1111;text-decoration:none;padding:10px 28px;border-radius:8px;font-size:14px;">Track my parcel</a></div>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "Netflix",
        senderEmail: "info@netflix-paiement-client.net",
        avatarColor: "#e50914", avatarLetter: "N",
        subject: "Your payment was declined: update your details",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 8:41 PM (yesterday)", listTime: "8:41 PM",
        snippet: "We could not validate your last payment. Your subscription will be suspended.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#000;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#e50914;font-size:26px;font-weight:bold;letter-spacing:1px;">NETFLIX</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">There is a problem with your payment</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">We were unable to charge your subscription. To keep enjoying Netflix without interruption, please update your payment method now.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#e50914;color:#fff;text-decoration:none;padding:12px 30px;border-radius:4px;font-size:15px;font-weight:bold;">Update payment</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Without action from you within 48 hours, your account will be suspended automatically.</p>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "Deezer",
        senderEmail: "newsletter@deezer.com",
        avatarColor: "#a238ff", avatarLetter: "D",
        subject: "Your new releases this week",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 11:30 AM (3 days ago)", listTime: "11:30 AM",
        snippet: "3 new albums from artists you follow are available.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#111;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#a238ff;font-size:22px;font-weight:bold;">deezer</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your new releases this week</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}}, here are the releases picked for you this week.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 6px;">3 new albums from artists you follow are available.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#a238ff;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Listen now</a></div>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">You are receiving this email because you subscribed to the Deezer newsletter. You can unsubscribe at any time.</div>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "Google",
        senderEmail: "noreply-accounts@google.com",
        avatarColor: "#4285f4", avatarLetter: "G",
        subject: "You shared some of your Google Account data with Claude",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 6:28 PM (3 days ago)", listTime: "6:28 PM",
        snippet: "Review your Google Account data.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;border:1px solid #e0e0e0;border-radius:12px;padding:40px 32px;font-family:'Google Sans',Arial;color:#202124;">
            <div style="text-align:center;">
              <h1 style="font-size:24px;font-weight:400;margin:0 0 24px;">Review your Google Account data</h1>
              <p style="color:#5f6368;font-size:14px;margin:0 0 24px;">{{email}}</p>
            </div>
            <hr style="border:none;border-top:1px solid #e0e0e0;margin:0 0 24px;">
            <div style="background:#e8f0fe;border-radius:8px;padding:16px;">
              <p style="margin:0 0 12px;font-size:14px;line-height:1.5;">You are receiving this email because you used Sign in with Google to sign in to <strong>Claude</strong> on <strong>25 September at 18:28</strong>.</p>
              <p style="margin:0;font-size:14px;line-height:1.5;">This email summarises the information you shared. No action is required from you.</p>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 2,
    name: "Muddy waters",
    subtitle: "The traps get finer. Check every detail.",
    difficulty: "Intermediate",
    accent: "#FCBC05",
    lesson: {
      title: "Targeted attacks: CEO fraud and credential theft",
      intro: "These attacks play on authority and trust rather than crude imitation. And for the first time, a perfectly legitimate security message was hiding among the traps.",
      cases: [
        { name: "CEO fraud", why: "A fake director urgently demands gift cards, insists on discretion and discourages you from calling. The domain <b>directions-groupe.com</b> is not your company's." },
        { name: "The fake Microsoft 365", why: "Your password expires today pushes you to type your credentials into a fake page. The domain <b>ms365-verify.com</b> is in no way official." },
        { name: "The fake La Banque Postale", why: "A fake sign in alert pushes you to secure your account in a hurry. The domain <b>labanquepostale-alerte.com</b> is not the bank's." }
      ],
      safeCases: [
        { name: "The real instruction from IT", why: "Security subject, firm deadline, action requested: exactly the phishing formula. But the domain is <b>{{entreprise}}.com</b>, your own company's, the message <b>asks for no password</b>, it points to the usual internal portal and it gives an extension number so you can check. An attacker never invites you to call them." }
      ],
      reflexes: [
        "An urgent and secret request for money or gift cards is an alarm signal: check by phone or in person.",
        "No IT department and no bank asks for your password by email.",
        "Be wary of demands for confidentiality and of time pressure.",
        "A sender who invites you to call them back to check is playing fair.",
        "Always check the sender's real domain before you act."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "Microsoft 365",
        senderEmail: "account-security@ms365-verify.com",
        avatarColor: "#d93025", avatarLetter: "M",
        subject: "Your password expires today",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 7:55 AM (yesterday)", listTime: "7:55 AM",
        snippet: "Keep access to your mailbox by confirming your current password.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0067b8;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:600;">Microsoft 365</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your password expires today</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello,</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your {{entreprise}} mailbox password expires today. Without renewal, you will lose access to your email, your files and your meetings.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Confirm your current password to keep your session active.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0067b8;color:#fff;text-decoration:none;padding:12px 30px;border-radius:4px;font-size:15px;font-weight:bold;">Keep my password</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">This link expires in 2 hours.</p>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "Karim Benali",
        senderEmail: "it@{{entreprise}}.com",
        avatarColor: "#1a73e8", avatarLetter: "K",
        subject: "Two factor authentication mandatory before 15 October",
        labels: ["Inbox"],
        date: "Fri, Sep 26, 2:40 PM (2 days ago)", listTime: "2:40 PM",
        snippet: "You can switch it on from the internal portal. We will never ask for your password.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Hello {{prenom}},</p>
              <p style="margin:0 0 14px;">To strengthen the security of our accounts, <strong>two factor authentication</strong> will be mandatory on all {{entreprise}} workstations from <strong>15 October</strong>.</p>
              <p style="margin:0 0 14px;">You can switch it on from the usual internal portal, under Account &gt; Security. It takes two minutes. <strong>We will never ask you for your password</strong>, by email or by phone.</p>
              <p style="margin:0 0 14px;">A question, or a doubt about a message that looks like it came from us? Call me directly on extension <strong>4127</strong>. I would rather answer one question too many than deal with an incident.</p>
              <p style="margin:0;">Karim Benali<br>IT Manager, {{entreprise}}</p>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "La Banque Postale",
        senderEmail: "securite@labanquepostale-alerte.com",
        avatarColor: "#003087", avatarLetter: "B",
        subject: "New device connected to your customer area",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 6:20 PM (2 days ago)", listTime: "6:20 PM",
        snippet: "A sign in from an unknown device was recorded on your customer area.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#003087;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">La Banque Postale</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">New device connected to your account</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello,</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">A connection to your customer area was recorded from a device we do not recognise, in <strong>Rotterdam</strong>.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">If this was not you, secure your account immediately.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#003087;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Secure my account</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Without action within 24 hours, your card will be blocked as a precaution.</p>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "LinkedIn",
        senderEmail: "messages-noreply@linkedin.com",
        avatarColor: "#0a66c2", avatarLetter: "in",
        subject: "You had 3 profile views this week",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 9:05 AM (3 days ago)", listTime: "9:05 AM",
        snippet: "See who has taken an interest in your experience.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0a66c2;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Linked</span><span style="background:#fff;color:#0a66c2;font-size:20px;font-weight:bold;padding:0 4px;border-radius:3px;">in</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">You had 3 profile views this week</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}}, people are looking at your profile.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">See who has taken an interest in your experience over the past seven days.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0a66c2;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">See who viewed my profile</a></div>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">You can change the frequency of these notifications in your communication preferences.</div>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "Sophie Marchand",
        senderEmail: "s.marchand@directions-groupe.com",
        avatarColor: "#5f6368", avatarLetter: "S",
        subject: "Small urgent favour",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 4:12 PM (yesterday)", listTime: "4:12 PM",
        snippet: "I am in a meeting, I need you to handle something quickly and discreetly.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Hello {{prenom}},</p>
              <p style="margin:0 0 14px;">I am stuck in a meeting and cannot make a call. I need you to handle something for me, quickly and discreetly.</p>
              <p style="margin:0 0 14px;">I need <strong>4 gift cards of 250 euros</strong> for a client gesture we are announcing tomorrow. Buy them and send me the codes by reply; I will sort out the expenses with accounting afterwards.</p>
              <p style="margin:0 0 14px;">Please do not mention this to the team before the announcement, and do not call me, I am in back to back meetings.</p>
              <p style="margin:0;">Thank you,<br>Sophie Marchand<br><span style="color:#5f6368;font-size:13px;">Director, sent from my iPhone</span></p>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "Thomas Bernard",
        senderEmail: "t.bernard@{{entreprise}}.com",
        avatarColor: "#188038", avatarLetter: "T",
        subject: "Notes from the product meeting",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 5:48 PM (3 days ago)", listTime: "5:48 PM",
        snippet: "The three points we settled yesterday, before we forget them.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Hi {{prenom}},</p>
              <p style="margin:0 0 14px;">As agreed, here are the three points we settled yesterday: we keep the November schedule, Julie takes over supplier follow up, and the catalogue redesign moves to the first quarter.</p>
              <p style="margin:0 0 14px;">Nothing urgent, I just wanted it written down somewhere before we forget.</p>
              <p style="margin:0;">See you Thursday,<br>Thomas</p>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "Doctolib",
        senderEmail: "rappel@doctolib.fr",
        avatarColor: "#107ac0", avatarLetter: "D",
        subject: "Reminder: your appointment on 30 September",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 8:00 AM (2 days ago)", listTime: "8:00 AM",
        snippet: "Do not forget your appointment on Tuesday.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#107ac0;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">doctolib</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Reminder: your appointment on 30 September</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}}, this is a reminder of your appointment.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Dr. Claire Lemoine</strong>, General practitioner<br>Tuesday 30 September at 15:40<br>12 rue des Lilas</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">If you cannot make it, please cancel from your Doctolib account so the slot can be freed.</p>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 3,
    name: "Parcels in limbo",
    subtitle: "Fake deliveries and their small fees to pay.",
    difficulty: "Intermediate",
    accent: "#FCBC05",
    lesson: {
      title: "Fake deliveries: the small fee trap",
      intro: "A parcel is the perfect pretext: everyone is waiting for one. But be careful, in this level one of the messages asking you for money was completely genuine.",
      cases: [
        { name: "The fake Chronopost", why: "The domain <b>chronopost-suivi-colis.com</b> is not official, and the card form sits directly inside the email. The tiny 1.99 euro amount is calibrated so you do not stop to think." },
        { name: "The fake DHL", why: "The domain <b>dhl-express-redevance.net</b> and the unpaid fee pretext are aimed purely at your bank details." },
        { name: "The fake La Poste", why: "The address <b>laposte.fr.reprogrammation-colis.net</b> puts the real name in a <b>subdomain</b> of a pirate domain. What counts is the last chunk before the first slash: here, <b>reprogrammation-colis.net</b>." }
      ],
      safeCases: [
        { name: "The real Colissimo customs charge", why: "This is exactly the fake Chronopost scenario, a carrier asking you for money. And yet: the domain <b>colissimo.fr</b> is official, the 14.80 euro amount matches real VAT rather than a symbolic 1.99, the tracking number is the one you already received, and above all <b>there is no card form in the email</b>: it asks you to go to the site by typing it yourself. <b>Customs charges really do exist.</b>" }
      ],
      reflexes: [
        "A carrier never asks for your bank card inside the body of an email.",
        "Read the domain from right to left: laposte.fr.somethingelse.net belongs to somethingelse.net.",
        "A tiny amount is designed to disarm your suspicion: it is a signal, not a guarantee.",
        "Check the tracking number: does it match a parcel you are actually expecting?",
        "When in doubt, track your parcel from the carrier's site typed by hand."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "Chronopost Delivery",
        senderEmail: "service@chronopost-suivi-colis.com",
        avatarColor: "#d93025", avatarLetter: "C",
        subject: "Your parcel is held: customs charges to pay (1.99 euros)",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 11:03 AM (yesterday)", listTime: "11:03 AM",
        snippet: "Your parcel is waiting. Pay the charges to allow delivery.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#00a0df;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Chronopost</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your parcel is being held</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your parcel could not be delivered because customs charges of <strong>1.99 euros</strong> remain unpaid.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Enter your card details below to release it. Delivery will resume within 24 hours.</p>              <div style="border:1px solid #e0e0e0;border-radius:8px;padding:14px 16px;margin:16px 0;font-size:13px;color:#5f6368;">Card number<br><span style="display:block;height:34px;border:1px solid #dadce0;border-radius:6px;margin-top:6px;"></span></div>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#00a0df;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Pay 1.99 euros</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Unclaimed parcels are returned to the sender after 48 hours.</p>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "Colissimo",
        senderEmail: "service-client@colissimo.fr",
        avatarColor: "#003b7d", avatarLetter: "C",
        subject: "Customs charges to pay, parcel from the United Kingdom",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 3:22 PM (2 days ago)", listTime: "3:22 PM",
        snippet: "Duties and taxes due on parcel 6A24187003415. Payment from your Colissimo account.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#003b7d;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;letter-spacing:1px;">COLISSIMO</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Customs charges to pay</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your parcel <strong>6A24187003415</strong>, sent from the United Kingdom, is held by customs. Duties and taxes are due before it can be delivered.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Amount: <strong>14.80 euros</strong> (20 % VAT on a declared value of 74.00 euros)<br>File reference: <strong>DD-2025-441902</strong></p>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;"><strong>How to pay?</strong><br>Go to your Colissimo account by typing <strong>colissimo.fr</strong> into your browser yourself, open My parcels, then enter the file reference above.<br><br>We never ask for your bank details by email, and no payment form is attached to this message.</div>              <p style="font-size:13px;line-height:1.6;margin:16px 0 0;color:#5f6368;">Without payment within 10 working days, the parcel will be returned to the sender.</p>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "DHL Express",
        senderEmail: "colis@dhl-express-redevance.net",
        avatarColor: "#ffcc00", avatarLetter: "D",
        subject: "Unpaid fee: your parcel is waiting",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 6:47 PM (yesterday)", listTime: "6:47 PM",
        snippet: "A fee of 2.40 euros remains unpaid for the release of your parcel.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#ffcc00;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#d40511;font-size:21px;font-weight:bold;">DHL</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Unpaid fee, your parcel is waiting</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Dear customer,</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">A fee of <strong>2.40 euros</strong> remains unpaid for the release of your parcel. Until it is settled, your parcel stays in our depot.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#d40511;color:#fff;text-decoration:none;padding:12px 30px;border-radius:4px;font-size:15px;font-weight:bold;">Pay the fee</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Beyond 5 days, the parcel will be destroyed.</p>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "Mondial Relay",
        senderEmail: "noreply@mondialrelay.fr",
        avatarColor: "#e30613", avatarLetter: "M",
        subject: "Your parcel has arrived at the pickup point",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 4:10 PM (3 days ago)", listTime: "4:10 PM",
        snippet: "Your parcel 82471905 is waiting at Tabac Le Longchamp.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#e30613;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Mondial Relay</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your parcel has arrived at the pickup point</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}}, your parcel <strong>82471905</strong> is waiting for you.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Tabac Le Longchamp</strong><br>14 rue des Acacias<br>Monday to Saturday, 7am to 7.30pm</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">Please bring photo ID. The parcel is held for 8 days.</p>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "La Poste",
        senderEmail: "suivi@laposte.fr.reprogrammation-colis.net",
        avatarColor: "#ffcd00", avatarLetter: "L",
        subject: "Your parcel could not be delivered: reschedule the delivery",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 9:31 AM (yesterday)", listTime: "9:31 AM",
        snippet: "Our postal worker called while you were out. Redelivery fee: 2.99 euros.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#ffcd00;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#003b7d;font-size:20px;font-weight:bold;">La Poste</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your parcel could not be delivered</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Our postal worker called at your address this morning while you were out.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">To reschedule delivery, a redelivery contribution of <strong>2.99 euros</strong> is required.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#003b7d;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Reschedule my delivery</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Without action from you within 48 hours, your parcel will be returned to the sender.</p>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "Chronopost",
        senderEmail: "notification@chronopost.fr",
        avatarColor: "#00a0df", avatarLetter: "C",
        subject: "Your parcel will be delivered today",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 7:40 AM (3 days ago)", listTime: "7:40 AM",
        snippet: "Your parcel will be delivered today between 9am and 1pm.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#00a0df;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Chronopost</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your parcel will be delivered today</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}}, your parcel <strong>XY3948201FR</strong> is out for delivery.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Estimated window: <strong>between 9am and 1pm</strong>.</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">If you are away, the parcel will be left at the pickup point nearest to you.</p>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "Vinted",
        senderEmail: "no-reply@vinted.fr",
        avatarColor: "#09b1ba", avatarLetter: "V",
        subject: "Good news, your item sold!",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 12:15 PM (2 days ago)", listTime: "12:15 PM",
        snippet: "Your item has found a buyer. Here is how to ship it.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#09b1ba;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">vinted</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Good news, your item sold!</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}}, your item has found a buyer.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Denim jacket</strong>, 18.00 euros. Print the label and drop the parcel off within 5 days.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#09b1ba;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Print my label</a></div>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">The money is credited to your Vinted balance once the buyer confirms receipt.</div>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 4,
    name: "Fake tech support",
    subtitle: "The virus detected and the supposedly locked account.",
    difficulty: "Intermediate",
    accent: "#FCBC05",
    lesson: {
      title: "Fake support: fear first, then the phone",
      intro: "Fake technical support frightens you so you act fast. Something new in this level: a trap with no link at all, which only wants to get you to pick up the phone.",
      cases: [
        { name: "The fake Microsoft support", why: "The domain <b>microsoft-support-secure.com</b> and an urgent number to call are classic markers: Microsoft never puts a phone number in a virus alert." },
        { name: "The fake Apple", why: "The domain <b>appleid-verification.net</b> and the locked account pretext are after your Apple password." },
        { name: "The fake Norton invoice", why: "No link to check: just a huge amount, 349.99 euros, and a number to call. The point is to get you on the phone so they can talk you into installing remote control software. <b>A real receipt never pressures you to pick up the phone.</b>" }
      ],
      safeCases: [
        { name: "The real Apple sign in alert", why: "Same brand and same pretext as the fake Apple, in the same inbox: you cannot decide on the topic alone. But <b>email.apple.com</b> is Apple's genuine sending domain, the message is purely informative, if this was you, ignore it, it contains <b>no sign in button</b> and it threatens nothing." },
        { name: "The real Avast invoice", why: "An unexpected antivirus invoice, sitting right next to the fake Norton one. It comes from the official <b>avast.com</b> domain, the amount is realistic, and above all there is <b>no urgent number to call</b>. Refunds are handled from the customer account, like everywhere else." }
      ],
      reflexes: [
        "An alert email showing a phone number is almost always a scam.",
        "Never call the number in the message: look up the one on the official site.",
        "Never install remote control software at the request of someone who contacted you.",
        "Compare the domains: email.apple.com is real, appleid-verification.net is not.",
        "A message saying no action is required is rarely trying to trap you."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "Microsoft Security",
        senderEmail: "alerte@microsoft-support-secure.com",
        avatarColor: "#d93025", avatarLetter: "M",
        subject: "Alert: 3 viruses detected on your device",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 10:22 PM (yesterday)", listTime: "10:22 PM",
        snippet: "Your device is infected. Call technical support immediately.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0067b8;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:600;">Microsoft Security</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Alert: 3 viruses detected on your device</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Our scan has detected <strong>3 active threats</strong> on your device. Your personal files and your passwords are at risk.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Do not switch off your computer. Call our technical support immediately so an engineer can clean your system remotely.</p>              <p style="font-size:14px;line-height:1.6;margin:18px 0;"><strong style="font-size:17px;">Support: 01 84 60 22 07</strong></p>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Threat reference: TROJ.W32.4471</p>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "Apple",
        senderEmail: "no_reply@email.apple.com",
        avatarColor: "#333", avatarLetter: "A",
        subject: "Your Apple ID was used to sign in on a Mac",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 2:04 PM (2 days ago)", listTime: "2:04 PM",
        snippet: "Sign in to iCloud from a MacBook Air. If this was you, ignore this message.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#000;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:22px;">&#63743;</span> <span style="color:#fff;font-size:15px;">Apple ID</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Sign in to your Apple ID</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your Apple ID ({{email}}) was used to sign in to iCloud on a MacBook Air.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Date:</strong> 26 September at 14:02<br><strong>Device:</strong> MacBook Air, Paris, France</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">If this was you, you can ignore this message. If not, change your password from your device settings.</p>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "Norton Billing",
        senderEmail: "billing@norton-renewal-invoice.com",
        avatarColor: "#ffe01b", avatarLetter: "N",
        subject: "Renewal confirmation: Norton 360, 349.99 euros",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 8:16 AM (yesterday)", listTime: "8:16 AM",
        snippet: "Your subscription has been renewed. To cancel, call 01 76 42 08 19 within 48h.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#000;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#ffe01b;font-size:20px;font-weight:bold;">Norton</span> <span style="color:#fff;font-size:15px;">Billing</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Renewal confirmation</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your <strong>Norton 360 Deluxe</strong> subscription has been renewed automatically for 24 months.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Amount charged: <strong>349.99 euros</strong><br>Reference: NRT-88401-FR<br>Payment method: card on file</p>              <div style="background:#fff4e5;border:1px solid #f0c36d;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;"><strong>Did not authorise this renewal?</strong><br>Refunds cannot be requested online. You must contact our cancellation service on <strong style="font-size:16px;">01 76 42 08 19</strong> within 48 hours, quoting your reference. After that, the amount can no longer be refunded.</div>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "Apple",
        senderEmail: "no-reply@appleid-verification.net",
        avatarColor: "#d93025", avatarLetter: "A",
        subject: "Your Apple ID has been locked",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 7:09 PM (yesterday)", listTime: "7:09 PM",
        snippet: "Your account has been locked for security reasons. Unlock it now.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#000;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:22px;">&#63743;</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your Apple ID has been locked</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your Apple ID was locked after several failed sign in attempts.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">To unlock it, confirm your identity now. Without confirmation, your account will be deleted after 72 hours along with your purchases.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0071e3;color:#fff;text-decoration:none;padding:12px 30px;border-radius:8px;font-size:15px;font-weight:bold;">Unlock my Apple ID</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Apple Support</p>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "Avast",
        senderEmail: "billing@avast.com",
        avatarColor: "#ff7800", avatarLetter: "A",
        subject: "Your Avast Premium subscription has been renewed, 59.99 euros",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 10:48 AM (3 days ago)", listTime: "10:48 AM",
        snippet: "Order AV-2025-772104. Your invoice is available in your account.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#ff7800;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Avast</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your subscription has been renewed</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}}, thank you for your continued trust.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Avast Premium Security</strong>: 1 year, 1 device<br>Amount: <strong>59.99 euros</strong><br>Order no. AV-2025-772104</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your invoice is available in your customer account.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#ff7800;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">View my invoice</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">You can turn off automatic renewal at any time from your account.</p>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "Microsoft",
        senderEmail: "no-reply@microsoft.com",
        avatarColor: "#0067b8", avatarLetter: "M",
        subject: "Security update installed",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 5:30 AM (2 days ago)", listTime: "5:30 AM",
        snippet: "KB5044284 has been installed. No action is required.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0067b8;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:600;">Microsoft</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Security update installed</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">A security update was installed automatically on your device on 27 September.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>KB5044284</strong>: monthly security fixes.</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">No action is required from you. Your device will restart outside your active hours.</p>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "Zoom",
        senderEmail: "no-reply@zoom.us",
        avatarColor: "#2d8cff", avatarLetter: "Z",
        subject: "Your recording is ready",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 3:12 PM (3 days ago)", listTime: "3:12 PM",
        snippet: "The recording of your meeting is ready to view.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#2d8cff;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">zoom</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your recording is ready</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}}, the recording of your meeting is available.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Weekly team meeting</strong><br>Duration: 48 minutes</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#2d8cff;color:#fff;text-decoration:none;padding:12px 30px;border-radius:8px;font-size:15px;font-weight:bold;">View the recording</a></div>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">The recording will be deleted automatically after 30 days.</div>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 5,
    name: "The chief's orders",
    subtitle: "Urgent transfers and changed bank details: executive fraud.",
    difficulty: "Advanced",
    accent: "#EA4335",
    lesson: {
      title: "Payment fraud: urgency against verification",
      intro: "Here the money really does leave. And the most important lesson of the level is this: a change of bank details is not suspicious in itself, what is suspicious is having no way to check it.",
      cases: [
        { name: "The director's transfer order", why: "A fake director demands an urgent and confidential transfer. The address <b>direction-groupe-fr.com</b> imitates the company name without being its real domain." },
        { name: "The fake change of bank details", why: "A supplier announces a new bank account for its invoices. Changing bank details on the strength of an email alone lets an attacker divert every payment." },
        { name: "Thread hijacking", why: "The most dangerous of all: the message quotes <b>the history of a genuine exchange</b> to earn your trust. But the address has changed by one letter, <b>meunier-sarI.fr</b> with a capital i instead of an l, and the new bank details arrive with an overdue deadline." }
      ],
      safeCases: [
        { name: "The real change of bank details", why: "This is the costliest fraud scenario in business, and yet this one is genuine. The domain <b>meunier-sarl.fr</b> is the one printed on previous invoices, the message <b>is not urgent</b> (effective 1 December), it announces a recorded letter sent in parallel, and it explicitly asks you <b>to call and confirm before any transfer</b>. An honest supplier wants you to call." }
      ],
      reflexes: [
        "Any change of bank details is verified by phone, on the number you already had, never the one in the message.",
        "Compare the domain character by character: a lowercase l and a capital I look identical on screen.",
        "Urgency plus confidentiality plus a transfer equals fraud, until proven otherwise.",
        "A quoted conversation history proves nothing: a compromised mailbox lets an attacker reply inside a real thread.",
        "A legitimate request can always wait for you to check."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "Paul Durand",
        senderEmail: "p.durand@direction-groupe-fr.com",
        avatarColor: "#5f6368", avatarLetter: "P",
        subject: "Transfer to process today, confidential",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 8:50 AM (yesterday)", listTime: "8:50 AM",
        snippet: "Sensitive operation, please do not mention it to anyone for now.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">{{prenom}},</p>
              <p style="margin:0 0 14px;">I am finalising an acquisition that has to stay strictly confidential until the announcement. I need a transfer processed <strong>today</strong>.</p>
              <p style="margin:0 0 14px;">Amount: <strong>48,700 euros</strong><br>Beneficiary: Sorrel Consulting Ltd<br>IBAN: GB29 NWBK 6016 1331 9268 19</p>
              <p style="margin:0 0 14px;">Do not mention this to accounting, I will regularise it myself tomorrow. Confirm by reply once it is done.</p>
              <p style="margin:0;">Paul Durand<br>Group Managing Director</p>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "Meunier SARL Accounting",
        senderEmail: "compta@meunier-facturation.com",
        avatarColor: "#5f6368", avatarLetter: "M",
        subject: "Update to our bank details",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 11:34 AM (2 days ago)", listTime: "11:34 AM",
        snippet: "Please use our new bank details for your next payments.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Dear customer,</p>
              <p style="margin:0 0 14px;">Please note that our bank details have changed. All invoices from now on must be settled to the new account below.</p>
              <p style="margin:0 0 14px;"><strong>IBAN: FR76 1027 8060 3100 0209 4780 143</strong><br>Holder: Meunier SARL</p>
              <p style="margin:0 0 14px;">Please update your records as soon as possible to avoid any delay.</p>
              <p style="margin:0;">Accounting, Meunier SARL</p>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "Groupe Meunier",
        senderEmail: "comptabilite@meunier-sarl.fr",
        avatarColor: "#188038", avatarLetter: "M",
        subject: "Change of bank, signed letter on its way",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 2:18 PM (3 days ago)", listTime: "2:18 PM",
        snippet: "Effective 1 December. Please call us to confirm before any transfer.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Hello {{prenom}},</p>
              <p style="margin:0 0 14px;">We are writing to let you know that Groupe Meunier is changing bank. Our new details will apply to invoices issued <strong>from 1 December</strong>. Invoices currently outstanding remain payable to the usual account.</p>
              <p style="margin:0 0 14px;">A <strong>signed recorded letter</strong> from our finance department is reaching you this week with the official bank details. We ask that you <strong>change nothing on the basis of this email alone</strong>.</p>
              <p style="margin:0 0 14px;">Before your first transfer to the new account, please call our accounting team on the number you already have on file to confirm by voice. We would rather you made that check; it protects both of us.</p>
              <p style="margin:0;">Kind regards,<br>Alain Rocher<br>Accounting, Groupe Meunier</p>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "Alain Rocher",
        senderEmail: "a.rocher@meunier-sarI.fr",
        avatarColor: "#5f6368", avatarLetter: "A",
        subject: "RE: Invoice 2025-0118, note on payment",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 3:41 PM (yesterday)", listTime: "3:41 PM",
        snippet: "Our old account was closed, please transfer to the new details.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Hello,</p>
              <p style="margin:0 0 14px;">Thank you for getting back to me. I confirm the quantities and the lead time we discussed last week.</p>
              <p style="margin:0 0 14px;">One important point about payment: our old account was closed when we changed bank. Please make the transfer for invoice <strong>2025-0118</strong> (<strong>8,420.00 euros</strong>) to the new details below, as the due date has now passed.</p>
              <p style="margin:0 0 14px;"><strong>IBAN: FR76 3000 4008 2800 0123 4567 891</strong><br>Holder: Meunier SARL</p>
              <p style="margin:0 0 14px;">Kind regards,<br>Alain Rocher, Accounting</p>
              <p style="margin:0;"><span style="color:#8c8c8c;font-size:12px;">------- Original message -------<br>From: {{prenom}} {{nom}} &lt;{{email}}&gt;<br>Subject: Invoice 2025-0118<br>“Hello Alain, could you confirm the quantities before I release the payment?”</span></p>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "Claire Fontaine",
        senderEmail: "c.fontaine@{{entreprise}}.com",
        avatarColor: "#188038", avatarLetter: "C",
        subject: "Review of the committee presentation",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 6:02 PM (3 days ago)", listTime: "6:02 PM",
        snippet: "Could you read over the section on lead times before Thursday? Nothing urgent.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Hello {{prenom}},</p>
              <p style="margin:0 0 14px;">Could you read over the committee presentation before Thursday? Particularly the section on lead times, I have a doubt about the figure on page 6.</p>
              <p style="margin:0 0 14px;">Nothing urgent, Thursday morning is fine.</p>
              <p style="margin:0;">Thanks,<br>Claire</p>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "Accounting",
        senderEmail: "compta@{{entreprise}}.com",
        avatarColor: "#1a73e8", avatarLetter: "C",
        subject: "Reminder: expense claims before the 30th",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 9:00 AM (2 days ago)", listTime: "9:00 AM",
        snippet: "Please file your September expense claims before the 30th.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Hello everyone,</p>
              <p style="margin:0 0 14px;">A quick reminder: please file your <strong>September expense claims</strong> in the usual tool before the 30th. After that, reimbursement moves to the October payroll.</p>
              <p style="margin:0;">Have a good day,<br>The accounting team</p>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "Leon Stationery",
        senderEmail: "ventes@papeterie-leon.fr",
        avatarColor: "#188038", avatarLetter: "L",
        subject: "Your September invoice",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 8:25 AM (3 days ago)", listTime: "8:25 AM",
        snippet: "Please find your monthly invoice.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#188038;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">Leon Stationery</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your September invoice</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello,</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Please find your monthly invoice attached.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Invoice 2025-0912</strong><br>Amount: 214.60 euros<br>Payable before 15 October</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">Thank you for your custom.</p>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 6,
    name: "Accounts under pressure",
    subtitle: "Copyright, suspended pages, dubious sign ins on your networks.",
    difficulty: "Advanced",
    accent: "#EA4335",
    lesson: {
      title: "Social networks: panic and misleading domains",
      intro: "On social networks, the threat of losing your account makes even careful people give in. This level teaches one thing above all: <b>you cannot judge a domain by how it looks</b>.",
      cases: [
        { name: "The fake Instagram copyright notice", why: "The infringement pretext with an appeal within 24 hours and the domain <b>instagram-copyright-appeal.com</b> are aimed at stealing your password." },
        { name: "The fake suspended Meta page", why: "The domain <b>meta-business-support.net</b> imitates Meta to panic anyone running a business page." },
        { name: "The fake LinkedIn sign in alert", why: "The domain <b>linkedin-security-alert.com</b> and the security urgency push you to click without checking." },
        { name: "Authentication fatigue", why: "The attacker <b>already has your password</b> and only needs an approval. They flood you with notifications so that you approve just to make it stop. <b>Never approve a request you did not trigger yourself.</b>" }
      ],
      safeCases: [
        { name: "The real Meta notification", why: "The domain <b>facebookmail.com</b> looks exactly like a forgery, and yet it has always been Meta's official sending domain. The content is alarming, someone has gained admin rights on your page, but the message points you to the Page settings and never asks you to sign in again. <b>accountprotection.microsoft.com</b>, <b>sncf-connect.com</b> and <b>docusign.net</b> are the same: genuine and disconcerting." }
      ],
      reflexes: [
        "A domain that looks odd is not proof: check it with the brand, not on instinct.",
        "Never approve a sign in request you did not trigger, even to stop the alerts.",
        "If you get a burst of approval requests, your password is already compromised: change it.",
        "Always manage your accounts from the app or a site you typed by hand, never from an alert link.",
        "A threat to delete your account within 24 hours is a panic tool, not a real procedure."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "Instagram",
        senderEmail: "appeal@instagram-copyright-appeal.com",
        avatarColor: "#d93025", avatarLetter: "I",
        subject: "Your account breaches our copyright rules",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 1:14 PM (yesterday)", listTime: "1:14 PM",
        snippet: "Your account will be deleted within 24h unless you appeal.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#c13584;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Instagram</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your account breaches our copyright rules</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">We have received a copyright complaint about content published on your account.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your account will be <strong>permanently deleted within 24 hours</strong> unless you appeal.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#c13584;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Appeal this decision</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">If you do not appeal in time, the decision becomes final.</p>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "Meta",
        senderEmail: "notification@facebookmail.com",
        avatarColor: "#0866ff", avatarLetter: "M",
        subject: "Marie Lefevre was added as an admin of your Page",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 11:47 AM (2 days ago)", listTime: "11:47 AM",
        snippet: "A new admin was added to your Page on 26 September.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0866ff;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Meta</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">A new admin has been added</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Marie Lefevre</strong> was added as an admin of your Page <strong>{{entreprise}}</strong> on 26 September at 11:47.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">This person can now post, reply to messages and manage the Page roles.</p>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">Did not make this change? Open Page settings from your account and remove the access under <strong>Settings &gt; Page roles</strong>. We will never ask you to sign in again from a link in an email.</div>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "Meta for Business",
        senderEmail: "support@meta-business-support.net",
        avatarColor: "#d93025", avatarLetter: "M",
        subject: "Your Page has been suspended",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 5:02 PM (yesterday)", listTime: "5:02 PM",
        snippet: "Your business page is suspended. Appeal immediately.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0866ff;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Meta for Business</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your Page has been suspended</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your professional Page has been suspended following a breach of our community standards.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">All your advertising campaigns are stopped and your Page is no longer visible to the public.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0866ff;color:#fff;text-decoration:none;padding:12px 30px;border-radius:6px;font-size:15px;font-weight:bold;">Restore my Page</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Without a request within 48 hours, the Page will be deleted.</p>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "Account security",
        senderEmail: "noreply@account-approval-verify.com",
        avatarColor: "#202124", avatarLetter: "S",
        subject: "Approve the sign in request (code 47)",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 11:58 PM (yesterday)", listTime: "11:58 PM",
        snippet: "A request has been pending for 11 minutes. Approve it to stop the alerts.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#202124;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:18px;font-weight:600;">Account security</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Sign in request pending</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">A sign in request to your account has been waiting for approval for 11 minutes.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Code shown: <strong style="font-size:20px;">47</strong></p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">You have received several notifications in the last few minutes. <strong>Approve this request to stop the alerts.</strong></p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#188038;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Approve the sign in</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Without approval, your account will be locked as a precaution.</p>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "LinkedIn Security",
        senderEmail: "security@linkedin-security-alert.com",
        avatarColor: "#d93025", avatarLetter: "in",
        subject: "Unusual sign in attempt",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 6:35 AM (yesterday)", listTime: "6:35 AM",
        snippet: "A sign in from an unusual location was blocked. Check your account.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0a66c2;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">LinkedIn Security</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Unusual sign in attempt</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">We blocked a sign in attempt to your account from an unusual location.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Location:</strong> Lagos, Nigeria<br><strong>Time:</strong> 03:14</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0a66c2;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Check my account</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">If you do not confirm, your account will be restricted.</p>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "LinkedIn",
        senderEmail: "inmail@linkedin.com",
        avatarColor: "#0a66c2", avatarLetter: "in",
        subject: "A recruiter would like to connect",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 10:11 AM (3 days ago)", listTime: "10:11 AM",
        snippet: "Sonia Kessler, Talent Acquisition at Vertigo Data, would like to talk to you.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0a66c2;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Linked</span><span style="background:#fff;color:#0a66c2;font-size:20px;font-weight:bold;padding:0 4px;border-radius:3px;">in</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">A recruiter would like to connect</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Sonia Kessler</strong>, Talent Acquisition at Vertigo Data, would like to talk to you about a role matching your profile.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;color:#5f6368;">“Hello, I came across your background and I think one of our roles could interest you. Would you be free for a quick chat?”</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0a66c2;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Reply on LinkedIn</a></div>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">You are receiving this email because you allow InMails. You can change this in your communication preferences.</div>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "Instagram",
        senderEmail: "security@mail.instagram.com",
        avatarColor: "#c13584", avatarLetter: "I",
        subject: "New sign in to your account",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 8:22 PM (2 days ago)", listTime: "8:22 PM",
        snippet: "We detected a sign in from a new device.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#c13584;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Instagram</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">New sign in to your account</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">We detected a sign in to your account from a new device.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Device:</strong> iPhone<br><strong>Location:</strong> Lyon, France</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">If this was you, you can ignore this message. Otherwise, review your sessions from the Instagram app.</p>
            </div>
          </div>`
      },
      {
        id: 8,
        senderName: "Spotify",
        senderEmail: "no-reply@spotify.com",
        avatarColor: "#1db954", avatarLetter: "S",
        subject: "Your September activity",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 7:15 PM (3 days ago)", listTime: "7:15 PM",
        snippet: "18 h 42 of listening this month, 12 % more than in August.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#1db954;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Your monthly recap</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your September activity</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}}, here is your monthly summary.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>18 h 42</strong> of listening this month, 12 % more than in August.<br>Your most played artist: <strong>Fatoumata Diawara</strong>.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#1db954;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">See my full recap</a></div>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">You can unsubscribe from this monthly recap at any time.</div>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 7,
    name: "Fake public services",
    subtitle: "Tax, health insurance, fines: administrative traps.",
    difficulty: "Advanced",
    accent: "#EA4335",
    lesson: {
      title: "Public services: one marker that cannot be faked",
      intro: "Government bodies inspire trust, and fraudsters know it. Fortunately this area offers the most reliable marker in the game, and two genuine messages had slipped in among the traps.",
      cases: [
        { name: "The fake tax refund", why: "The domain <b>impots-remboursement-gouv.com</b> is not a .gouv.fr site, and the tax office never asks for your bank details by email." },
        { name: "The fake health insurance notice", why: "The domain <b>ameli-mise-a-jour.com</b> imitates Ameli to steal your details under cover of updating your health card." },
        { name: "The fake penalty notice", why: "The domain <b>antai-amendes-gouv.com</b> dresses an ordinary .com up as a government site. ANTAI never sends an initial penalty notice by email, and the threat of an increased fine is there to make you pay without thinking." }
      ],
      safeCases: [
        { name: "The real tax notice", why: "The domain <b>dgfip.finances.gouv.fr</b> is longer and stranger than the fake one, but it ends in <b>.gouv.fr</b>, which cannot be usurped. No bank details are requested, no sum is promised, and it invites you to type impots.gouv.fr yourself." },
        { name: "The real Ameli reimbursement", why: "You are being told about money, exactly like the traps in this level. But the health service <b>already holds your bank details</b>: the message asks for nothing, it informs. The moment anyone asks for bank details in order to <b>give</b> you money, it is a scam." }
      ],
      reflexes: [
        "A French public site always ends in <b>.gouv.fr</b>, and that suffix cannot be imitated.",
        "Be wary of domains containing gouv anywhere but at the end: antai-amendes-gouv.com is a .com.",
        "An organisation that owes you money already has your bank details.",
        "Always sign in by typing the official address yourself.",
        "A real public service does not threaten immediate penalties by email."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "impots.gouv.fr",
        senderEmail: "remboursement@impots-remboursement-gouv.com",
        avatarColor: "#d93025", avatarLetter: "i",
        subject: "You are eligible for a refund of 249 euros",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 10:40 AM (yesterday)", listTime: "10:40 AM",
        snippet: "An overpayment was identified. Enter your bank details to receive it.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#000091;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:15px;font-weight:bold;">impots.gouv.fr</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">You are eligible for a refund of 249 euros</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">After a review of your file, an overpayment of <strong>249.00 euros</strong> has been identified in your favour.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">To receive it, enter your bank details on the secure form below. Payment is made within 5 working days.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#000091;color:#fff;text-decoration:none;padding:12px 30px;border-radius:4px;font-size:15px;font-weight:bold;">Claim my refund</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Claims not made within 15 days are cancelled.</p>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "Public Finances Directorate",
        senderEmail: "noreply@dgfip.finances.gouv.fr",
        avatarColor: "#000091", avatarLetter: "F",
        subject: "Your income tax notice is available",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 8:10 AM (3 days ago)", listTime: "8:10 AM",
        snippet: "Your 2025 notice can be viewed in your personal account on impots.gouv.fr.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#000091;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:15px;font-weight:bold;">FRENCH REPUBLIC</span><br><span style="color:#fff;font-size:12px;">Public Finances Directorate</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your tax notice is available</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello,</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your <strong>2025 income tax notice</strong> can be viewed in your personal account.</p>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">To view it, type <strong>impots.gouv.fr</strong> into your browser yourself and sign in to your personal account.<br><br>The tax office <strong>never</strong> asks for your bank details or your password by email, and never announces a refund through this channel.</div>              <p style="font-size:12px;line-height:1.6;margin:16px 0 0;color:#5f6368;">This message is sent automatically, please do not reply.</p>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "French health insurance",
        senderEmail: "contact@ameli-mise-a-jour.com",
        avatarColor: "#d93025", avatarLetter: "a",
        subject: "Your health card must be updated",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 2:26 PM (yesterday)", listTime: "2:26 PM",
        snippet: "Your health card must be updated or your reimbursements will be suspended.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0064ad;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">ameli</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your health card must be updated</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Dear member,</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your health card details are out of date. Without an update, your reimbursements will be suspended from next month.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0064ad;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Update my card</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">This procedure takes less than 2 minutes.</p>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "ANTAI",
        senderEmail: "noreply@antai-amendes-gouv.com",
        avatarColor: "#1f2b5b", avatarLetter: "A",
        subject: "Penalty notice no. 78451203, increase within 15 days",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 4:55 PM (2 days ago)", listTime: "4:55 PM",
        snippet: "Fine of 90 euros increased to 375 euros if unpaid within 15 days.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#1f2b5b;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:17px;font-weight:bold;">ANTAI</span> <span style="color:#c5cbe0;font-size:12px;">National agency for automated offence processing</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Notice of penalty</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">A penalty notice has been issued in your name.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Notice number:</strong> 78451203<br><strong>Amount:</strong> 90.00 euros<br><strong>Offence:</strong> speeding below 20 km/h</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Increased to 375.00 euros if not paid within 15 days.</strong></p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#1f2b5b;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Pay my penalty</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Non payment will result in registration in the national file.</p>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "French health insurance",
        senderEmail: "noreply@ameli.fr",
        avatarColor: "#0064ad", avatarLetter: "a",
        subject: "A reimbursement of 47.30 euros has been paid",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 7:30 AM (2 days ago)", listTime: "7:30 AM",
        snippet: "Paid on 5 October to the account held in your file.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0064ad;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">ameli</span> <span style="color:#cfe4f3;font-size:12px;">French health insurance</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">A reimbursement has been paid</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">A reimbursement of <strong>47.30 euros</strong> has been paid to the bank account held in your file.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Treatment:</strong> consultation on 18 September, Dr Lemoine<br><strong>Payment date:</strong> 5 October</p>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">The details are available in your ameli account, under My payments. <strong>We already hold your bank details: nothing is being asked of you.</strong></div>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "French health insurance",
        senderEmail: "noreply@ameli.fr",
        avatarColor: "#0064ad", avatarLetter: "a",
        subject: "Your statement of entitlement is available",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 11:02 AM (3 days ago)", listTime: "11:02 AM",
        snippet: "Your up to date statement can be downloaded from your ameli account.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0064ad;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">ameli</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your statement of entitlement is available</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your up to date statement of entitlement can be downloaded from your ameli account.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your insurer or your employer may ask you for it.</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">Sign in to ameli.fr to download it.</p>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "Service-Public.fr",
        senderEmail: "no-reply@service-public.fr",
        avatarColor: "#000091", avatarLetter: "S",
        subject: "Confirmation of your online application",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 3:35 PM (3 days ago)", listTime: "3:35 PM",
        snippet: "Your application has been registered.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#000091;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:16px;font-weight:bold;">Service-Public.fr</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Confirmation of your online application</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your application has been registered.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Reference:</strong> SP-2025-778213<br><strong>Filed on:</strong> 25 September</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">You will be notified as soon as it has been processed. No action is required from you.</p>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 8,
    name: "Golden bait",
    subtitle: "Winnings, inheritances and miracle crypto: when it is too good to be true.",
    difficulty: "Expert",
    accent: "#9334E6",
    lesson: {
      title: "The lure of money, and the real refund",
      intro: "Promising money remains the most effective bait. But this level asks a sharper question: money falling from the sky is not always a trap. What counts is what you are asked for in return.",
      cases: [
        { name: "The fake jackpot", why: "An unexpected win or inheritance that asks for release fees: nobody owes you money you never played for." },
        { name: "The fake crypto investment", why: "A platform promising to double your money: no serious investment guarantees a return." },
        { name: "The fake wallet verification", why: "The domain <b>coinbase-secure-wallet.com</b> is after your recovery phrase, which gives total access to your funds." },
        { name: "Webcam blackmail", why: "The password quoted is real, but it comes from a <b>public data breach</b>, not from your machine being hacked. The video does not exist. <b>Never pay</b>: simply change that password everywhere it was still in use." }
      ],
      safeCases: [
        { name: "The real EDF adjustment", why: "Money coming back to you without you asking: the very promise of every trap in this level. But the domain <b>edf.fr</b> is official, the amount is modest and consistent with an adjustment of monthly payments, the contract number is quoted, and the sum is <b>deducted from the next bill</b> or paid to an account already on file. <b>No bank details are requested.</b>" }
      ],
      reflexes: [
        "You never pay in order to receive money: the release fee is the scam itself.",
        "A guaranteed return does not exist. Guaranteed is the word that should alert you.",
        "Your recovery phrase is never typed anywhere, ever, under any pretext.",
        "A password quoted in a blackmail email comes from a public leak: check it, change it, do not pay.",
        "The right question is not am I being given money, but am I being asked for something in return."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "European National Lottery",
        senderEmail: "gains@euro-loterie-resultats.com",
        avatarColor: "#f9ab00", avatarLetter: "L",
        subject: "Congratulations! You have won 850,000 euros",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 12:02 PM (yesterday)", listTime: "12:02 PM",
        snippet: "Your number was drawn. Claim your winnings within 7 days.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#f9ab00;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">European National Lottery</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Congratulations! You have won 850,000 euros</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your email address was drawn in our special anniversary round.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Winnings: 850,000.00 euros</strong><br>File: EUL-2025-77431</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">To release your winnings, an administrative fee of <strong>320 euros</strong> is required to cover the international transfer.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#f9ab00;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Claim my winnings</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Unclaimed winnings are redrawn after 7 days.</p>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "EDF",
        senderEmail: "contact@edf.fr",
        avatarColor: "#001a70", avatarLetter: "E",
        subject: "Annual adjustment: 82.40 euros in your favour",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 9:24 AM (3 days ago)", listTime: "9:24 AM",
        snippet: "A balance of 82.40 euros is in your favour. No action is needed.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#001a70;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">EDF</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Annual adjustment in your favour</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your actual consumption has been read. Your monthly payments were higher than your consumption: a balance of <strong>82.40 euros</strong> is in your favour.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Contract:</strong> 6 204 118 973<br><strong>Period:</strong> from October 2024 to September 2025</p>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">This amount will be <strong>deducted automatically from your next bill</strong>, or transferred to the account already registered for your direct debits. <strong>No action is needed from you</strong> and no bank details are being requested.</div>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "CryptoBoost Invest",
        senderEmail: "invest@cryptoboost-gains.com",
        avatarColor: "#f9ab00", avatarLetter: "C",
        subject: "Double your capital in 30 days, guaranteed",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 4:48 PM (yesterday)", listTime: "4:48 PM",
        snippet: "Our algorithm posts 98 % winning trades. Limited places.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#111;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#f7931a;font-size:20px;font-weight:bold;">CryptoBoost Invest</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Double your capital in 30 days, guaranteed</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Our algorithm has posted <strong>98 % winning trades</strong> over the last six months.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Minimum deposit: 250 euros. Guaranteed return: <strong>x2 in 30 days</strong>, or your money back.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#f7931a;color:#fff;text-decoration:none;padding:12px 30px;border-radius:6px;font-size:15px;font-weight:bold;">Open my account</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Limited places: 12 spots left for this cohort.</p>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "Coinbase",
        senderEmail: "no-reply@coinbase-secure-wallet.com",
        avatarColor: "#d93025", avatarLetter: "C",
        subject: "Action required: verify your wallet",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 7:31 PM (yesterday)", listTime: "7:31 PM",
        snippet: "A wallet verification is needed to avoid your funds being frozen.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0052ff;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:20px;font-weight:bold;">Coinbase</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Action required: verify your wallet</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Following a routine security check, your wallet must be verified within 24 hours.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Without verification, your funds will be frozen.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Enter your <strong>12 word recovery phrase</strong> to confirm you own the wallet.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0052ff;color:#fff;text-decoration:none;padding:12px 30px;border-radius:6px;font-size:15px;font-weight:bold;">Verify my wallet</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">This procedure is required by our compliance obligations.</p>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "unknown",
        senderEmail: "d7f2a@mailer-anon-relay.su",
        avatarColor: "#5f6368", avatarLetter: "?",
        subject: "I have access to your webcam, 900 euros in bitcoin",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 2:19 AM (yesterday)", listTime: "2:19 AM",
        snippet: "Does the password Soleil2019! mean anything to you? You have 48 hours.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">I will get straight to the point.</p>
              <p style="margin:0 0 14px;">Does the password <strong>Soleil2019!</strong> mean anything to you? I installed a program on your computer and recorded your webcam while you were browsing.</p>
              <p style="margin:0 0 14px;">You have <strong>48 hours</strong> to transfer <strong>900 euros</strong> in bitcoin to the address below. After that, I send the video to all of your contacts.</p>
              <p style="margin:0 0 14px;"><strong style="word-break:break-all;">bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq</strong></p>
              <p style="margin:0;">Do not bother replying, this address is generated automatically.</p>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "leboncoin",
        senderEmail: "no-reply@e.leboncoin.fr",
        avatarColor: "#ff6e14", avatarLetter: "l",
        subject: "Your order is confirmed",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 1:38 PM (2 days ago)", listTime: "1:38 PM",
        snippet: "Order LBC-4471902 registered. The seller has 3 days to ship.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#ff6e14;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">leboncoin</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your order is confirmed</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}}, your purchase has been registered.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>50 mm f/1.8 lens</strong>, 89.00 euros<br>Order no. LBC-4471902</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">The seller has 3 working days to ship your parcel. You will be notified as soon as it is sent.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#ff6e14;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Track my order</a></div>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "BNP Paribas",
        senderEmail: "releve@bnpparibas.net",
        avatarColor: "#00915a", avatarLetter: "B",
        subject: "Your account statement is available",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 6:00 AM (3 days ago)", listTime: "6:00 AM",
        snippet: "Your monthly statement can be viewed in your customer area.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#00915a;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">BNP Paribas</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your statement is available</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello,</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your monthly statement for <strong>September 2025</strong> can be viewed in your customer area.</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">Sign in from the app or by typing the address yourself.</p>
            </div>
          </div>`
      },
      {
        id: 8,
        senderName: "Release notes",
        senderEmail: "produit@{{entreprise}}.com",
        avatarColor: "#3c4043", avatarLetter: "N",
        subject: "New version 4.2 available",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 10:05 AM (2 days ago)", listTime: "10:05 AM",
        snippet: "Faster search, display fixes, dark mode in the calendar.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#3c4043;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:18px;font-weight:600;">Release notes</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">New version available</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Version <strong>4.2</strong> of the application is available.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">In this release: faster search, display fixes on small screens, and dark mode in the calendar view.</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">The update installs automatically the next time you start.</p>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 9,
    name: "Spear phishing",
    subtitle: "Attacks tailored to you, with your name and your company.",
    difficulty: "Expert",
    accent: "#9334E6",
    lesson: {
      title: "Spear phishing: when the attack knows your name",
      intro: "Every message in this level looks like it came from your working environment. Two of them came from real service providers, and that is exactly what makes it hard.",
      cases: [
        { name: "The fake mailbox migration", why: "A supposed IT department at your company asks you to sign in again on a portal: the address is not your organisation's." },
        { name: "The fake payslip", why: "The domain <b>paie-bulletins-portail.com</b> belongs to nobody identifiable. The page harvests your work credentials." },
        { name: "The fake shared document", why: "A SharePoint style share imitates a colleague to make you type your password into a fake sign in page." },
        { name: "The booby trapped QR code", why: "The code replaces the link: you cannot read the address before visiting it, and scanning moves you onto your personal phone, outside your company's protections. <b>Never scan a QR code received by email.</b>" }
      ],
      safeCases: [
        { name: "The real PayFit payslip", why: "Exactly the same subject line as the fake one, and a third party domain an employee may not recognise. But <b>payfit.com</b> is the vendor's root domain, not a made up compound, and PayFit really is your company's payroll provider. The message asks for no credentials and offers to let you sign in by typing the address yourself." },
        { name: "The real DocuSign envelope", why: "DocuSign is one of the most imitated services in the world, and <b>docusign.net</b> looks like a forgery, yet it is the genuine sending domain. The decisive proof: the envelope gives a <b>security code</b> you can enter on docusign.com typed by hand, without ever clicking the link." }
      ],
      reflexes: [
        "An unfamiliar domain is not proof: find out which providers your company actually uses.",
        "Never scan a QR code received by email, even if it looks like it came from your employer.",
        "Beware of made up compounds: payfit.com is legitimate, paie-bulletins-portail.com is not.",
        "A serious service always leaves you a way to reach the document without clicking its link.",
        "At the slightest doubt about an internal message, check with a colleague through another channel."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "IT Support",
        senderEmail: "it-support@{{entreprise}}-mail-migration.com",
        avatarColor: "#d93025", avatarLetter: "S",
        subject: "Mailbox migration: sign in again required",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 9:48 AM (yesterday)", listTime: "9:48 AM",
        snippet: "Your mailbox is migrating tonight. Sign in again to keep your messages.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#5f6368;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:17px;font-weight:600;">IT Support</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Mailbox migration: sign in again required</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your mailbox will be migrated to the new {{entreprise}} server tonight.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">To keep your messages and your folders, sign in again on the migration portal before 20:00. Mailboxes that are not confirmed will be recreated empty.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0b57d0;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Keep my messages</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">IT Support, {{entreprise}}</p>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "PayFit",
        senderEmail: "notifications@payfit.com",
        avatarColor: "#0f6fff", avatarLetter: "P",
        subject: "Your September payslip is available",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 4:30 PM (3 days ago)", listTime: "4:30 PM",
        snippet: "Your September payslip was filed by {{entreprise}} in your employee space.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0f6fff;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">PayFit</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your payslip is available</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your payslip for <strong>September 2025</strong> has been filed by {{entreprise}} in your employee space.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0f6fff;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Go to my space</a></div>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;">PayFit is the payroll service used by {{entreprise}}. You can also sign in by typing <strong>payfit.com</strong> yourself. We will never ask for your password by email.</div>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "Human Resources",
        senderEmail: "rh@paie-bulletins-portail.com",
        avatarColor: "#d93025", avatarLetter: "R",
        subject: "Your September payslip is available",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 11:20 AM (yesterday)", listTime: "11:20 AM",
        snippet: "Sign in to the HR portal to view your payslip.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#3c4043;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:17px;font-weight:600;">Human Resources</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your September payslip is available</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello,</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your September payslip has been filed on the HR portal.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Sign in with your work credentials to view and download it.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0b57d0;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">View my payslip</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Payslips stay available for 3 months.</p>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "DocuSign",
        senderEmail: "dse@docusign.net",
        avatarColor: "#d9a01a", avatarLetter: "D",
        subject: "Service agreement: signature required",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 10:12 AM (2 days ago)", listTime: "10:12 AM",
        snippet: "Claire Fontaine has sent you a document to sign. Code: 7F4A 21C8 9B03.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#fff;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#d9a01a;font-size:22px;font-weight:bold;">DocuSign</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Service agreement: signature required</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Claire Fontaine</strong> has sent you a document to sign.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Document:</strong> Service agreement, Vertigo Data<br><strong>Sender:</strong> c.fontaine@{{entreprise}}.com</p>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;"><strong>Envelope security code:</strong> <span style="font-family:monospace;font-size:15px;">7F4A 21C8 9B03</span><br><br>You can open this document without using the link: go to <strong>docusign.com</strong> by typing the address yourself and enter this code.</div>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#d9a01a;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Review the document</a></div>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "Security {{entreprise}}",
        senderEmail: "securite@{{entreprise}}-identity.net",
        avatarColor: "#d93025", avatarLetter: "S",
        subject: "Reset your authentication: scan the code",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 3:05 PM (yesterday)", listTime: "3:05 PM",
        snippet: "Scan the code with your phone to renew your authentication.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#5f6368;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:17px;font-weight:600;">Security, {{entreprise}}</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Reset your authentication</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Your authentication method is about to expire. To renew it, <strong>scan the code below with your phone</strong>.</p>              <div style="text-align:center;margin:22px 0;"><div style="display:inline-block;width:150px;height:150px;background:repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 0 0/24px 24px;border:10px solid #fff;outline:1px solid #dadce0;"></div></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">The procedure takes less than a minute. Without renewal within 24 hours, your access will be suspended.</p>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "Thomas Bernard",
        senderEmail: "no-reply@sharepoint-partage-doc.com",
        avatarColor: "#d93025", avatarLetter: "T",
        subject: "Thomas shared “Budget 2025.xlsx” with you",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 5:52 PM (yesterday)", listTime: "5:52 PM",
        snippet: "A document has been shared with you. Sign in to open it.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0078d4;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:18px;font-weight:600;">SharePoint</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Thomas shared a document with you</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Thomas Bernard</strong> shared a file with you.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Budget 2025.xlsx</strong><br>Modified today at 16:20</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0078d4;color:#fff;text-decoration:none;padding:12px 30px;border-radius:4px;font-size:15px;font-weight:bold;">Open the document</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">Sign in with your work account to access it.</p>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "Nadia Chaumette",
        senderEmail: "services-generaux@{{entreprise}}.com",
        avatarColor: "#188038", avatarLetter: "N",
        subject: "Survey: choosing the caterer for the seminar",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 2:55 PM (3 days ago)", listTime: "2:55 PM",
        snippet: "Please reply A or B before Friday.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Hello everyone,</p>
              <p style="margin:0 0 14px;">For the seminar on 14 November we need to choose between two caterers. Please reply before Friday; a simple A or B in reply to this message is enough.</p>
              <p style="margin:0 0 14px;"><strong>A</strong>: hot buffet, vegetarian option available<br><strong>B</strong>: cold platters and desserts</p>
              <p style="margin:0;">Thanks in advance,<br>Nadia, Facilities</p>
            </div>
          </div>`
      },
      {
        id: 8,
        senderName: "Calendar",
        senderEmail: "calendar-notification@google.com",
        avatarColor: "#4285f4", avatarLetter: "C",
        subject: "Invitation: weekly team meeting",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 8:45 AM (2 days ago)", listTime: "8:45 AM",
        snippet: "You have been invited to Monday's team meeting.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#4285f4;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:18px;font-weight:600;">Calendar</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Invitation: weekly team meeting</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">You have been invited to a meeting.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Weekly team meeting</strong><br>Monday 29 September, 09:30 to 10:15<br>Meeting room B</p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">Reply from your calendar to confirm your attendance.</p>
            </div>
          </div>`
      }
    ]
  },

  {
    id: 10,
    name: "The oil slick",
    subtitle: "Final test: the most polished traps, with no safety net.",
    difficulty: "Expert",
    accent: "#9334E6",
    lesson: {
      title: "Final test: vigilance at every moment",
      intro: "The best attacks are indistinguishable from real messages, and they hide among perfectly legitimate mail. This level ends on the limits of what visual checking can do.",
      cases: [
        { name: "The near perfect fake La Banque Postale", why: "The domain <b>labanquepostale.securite-fr.com</b> puts the real name in a subdomain of a pirate domain: what counts is the last chunk before the first slash." },
        { name: "The quiet executive fraud", why: "A calm tone, no great urgency, just a request between us: the most effective manipulation is the most understated." },
        { name: "Microsoft credential theft", why: "A credible security alert pointing to a fake sign in page to capture your password." },
        { name: "The homoglyph domain", why: "<b>micrоsoft.com</b>: the o is a <b>Cyrillic о</b>, character U+043E, visually identical to ours. Its true form is <b>xn--micrsoft-w6g.com</b>. No amount of careful reading can catch it: <b>only refusing to click and going through the official channel protects you</b>." }
      ],
      safeCases: [
        { name: "The real La Banque Postale", why: "Same brand and same security subject as the trap, with a sending subdomain that echoes the very technique taught just before. But you read a domain <b>from right to left</b>: <b>e.labanquepostale.fr</b> ends in labanquepostale.fr and therefore belongs to the bank, whereas the trap ends in securite-fr.com. And above all, this message contains <b>no link at all</b>: it asks you to open the app yourself." },
        { name: "The internal campaign announcement", why: "Dizzying: an announcement warning that a fake email is coming could very well be the trap itself. But it comes from the internal domain <b>{{entreprise}}.com</b>, asks for no action, and contains neither a link nor an attachment. <b>A message that asks for nothing has nothing to steal.</b>" }
      ],
      reflexes: [
        "Read the domain from right to left: the real owner sits just before the first slash.",
        "Visual checking has a limit: a homoglyph is undetectable by eye.",
        "The only reliable defence: never click, and reach the service through a channel you control.",
        "Do not report blindly: flagging a legitimate email is a mistake too.",
        "The absence of urgency is not proof of legitimacy.",
        "When in doubt, check through an independent channel before doing anything."
      ]
    },
    emails: [
      {
        id: 1,
        senderName: "La Banque Postale",
        senderEmail: "securite@labanquepostale.securite-fr.com",
        avatarColor: "#d93025", avatarLetter: "B",
        subject: "Security validation of your customer area",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 10:15 AM (yesterday)", listTime: "10:15 AM",
        snippet: "A security validation is needed to keep access to your area.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#003087;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">La Banque Postale</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Security validation of your customer area</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello,</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">As part of our regulatory obligations, your customer area requires a security validation.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Without validation, access to your accounts will be limited from 30 September.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#003087;color:#fff;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:15px;font-weight:bold;">Validate my access</a></div>              <p style="font-size:12px;line-height:1.6;margin:0;color:#8c8c8c;">This procedure takes 2 minutes and is entirely secure.</p>
            </div>
          </div>`
      },
      {
        id: 2,
        senderName: "La Banque Postale",
        senderEmail: "noreply@e.labanquepostale.fr",
        avatarColor: "#003087", avatarLetter: "B",
        subject: "An operation is waiting for your approval",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 6:05 PM (2 days ago)", listTime: "6:05 PM",
        snippet: "Open your banking app and go to Operations to approve.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#003087;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">La Banque Postale</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">An operation is waiting for your approval</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}},</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">An operation is pending and needs your approval in your banking app.</p>              <div style="background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.6;color:#3c4043;margin:18px 0 0;"><strong>Open your La Banque Postale app yourself</strong> and go to Operations to approve. You will find the details there and can confirm or refuse.<br><br>This message deliberately contains <strong>no link</strong>: we will never ask you to sign in from an email.</div>              <p style="font-size:12px;line-height:1.6;margin:16px 0 0;color:#5f6368;">If you do not recognise this operation, refuse it in the app and contact your adviser.</p>
            </div>
          </div>`
      },
      {
        id: 3,
        senderName: "Claire Fontaine",
        senderEmail: "c.fontaine@direction-executive-grp.com",
        avatarColor: "#5f6368", avatarLetter: "C",
        subject: "Small request",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 1:33 PM (yesterday)", listTime: "1:33 PM",
        snippet: "Could you look at this when you have a moment? Keep it between us for now.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Hello {{prenom}},</p>
              <p style="margin:0 0 14px;">Could you look at something for me when you have a moment? Nothing dramatic, but I would rather keep it between us for now.</p>
              <p style="margin:0 0 14px;">I need a payment released to a new provider before the end of the week. I will send you the details in a moment; just tell me whether you can handle it.</p>
              <p style="margin:0;">Thanks,<br>Claire</p>
            </div>
          </div>`
      },
      {
        id: 4,
        senderName: "Microsoft",
        senderEmail: "security@microsoft-account-alert.com",
        avatarColor: "#d93025", avatarLetter: "M",
        subject: "Unusual sign in activity",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 7:47 PM (yesterday)", listTime: "7:47 PM",
        snippet: "An unusual sign in was detected on your Microsoft account.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0067b8;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:600;">Microsoft</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Unusual sign in activity</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">We detected a sign in to your Microsoft account from a device we do not recognise.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Location:</strong> Bucharest, Romania<br><strong>Time:</strong> 04:22</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">If this was not you, secure your account now.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0067b8;color:#fff;text-decoration:none;padding:12px 30px;border-radius:4px;font-size:15px;font-weight:bold;">Secure my account</a></div>
            </div>
          </div>`
      },
      {
        id: 5,
        senderName: "Microsoft",
        senderEmail: "security@micrоsoft.com",
        avatarColor: "#0067b8", avatarLetter: "M",
        subject: "Confirmation of your payment of 1,240 euros",
        labels: ["Inbox"],
        date: "Sun, Sep 27, 4:22 PM (yesterday)", listTime: "4:22 PM",
        snippet: "A payment of 1,240.00 euros to SC Digital Ltd is in progress.",
        unread: true, starred: false, isPhish: true, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0067b8;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:600;">Microsoft</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Confirmation of your payment</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello,</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">A payment of <strong>1,240.00 euros</strong> has been authorised from your Microsoft account to the beneficiary <strong>SC Digital Ltd</strong>.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Reference:</strong> MS-PAY-771249<br><strong>Status:</strong> in progress</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">If you did not authorise this payment, cancel it from your account.</p>              <div style="text-align:center;margin:22px 0;"><a href="#" style="display:inline-block;background:#0067b8;color:#fff;text-decoration:none;padding:12px 30px;border-radius:4px;font-size:15px;font-weight:bold;">Cancel the payment</a></div>
            </div>
          </div>`
      },
      {
        id: 6,
        senderName: "Helene Vasseur",
        senderEmail: "rssi@{{entreprise}}.com",
        avatarColor: "#188038", avatarLetter: "H",
        subject: "Internal phishing awareness campaign",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 9:40 AM (3 days ago)", listTime: "9:40 AM",
        snippet: "A fake test email will be sent in the coming days. Nobody will be penalised.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="padding:8px 4px;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 14px;">Hello everyone,</p>
              <p style="margin:0 0 14px;">Over the coming days, {{entreprise}} will run an <strong>internal phishing awareness campaign</strong>. A fake test email will be sent to all staff.</p>
              <p style="margin:0 0 14px;">The aim is not to catch anyone out, but to measure our collective reflexes. <strong>No individual will be penalised</strong>, and results will only be shared in aggregate.</p>
              <p style="margin:0 0 14px;">Simply carry on reporting anything that looks suspicious, as usual.</p>
              <p style="margin:0;">Helene Vasseur<br>Chief Information Security Officer, {{entreprise}}</p>
            </div>
          </div>`
      },
      {
        id: 7,
        senderName: "SNCF Connect",
        senderEmail: "noreply@sncf-connect.com",
        avatarColor: "#0088ce", avatarLetter: "S",
        subject: "Your ticket for 12 October",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 12:48 PM (2 days ago)", listTime: "12:48 PM",
        snippet: "Paris Montparnasse to Rennes, Sunday 12 October. Booking KQPZRT.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#202124;">
            <div style="background:#0088ce;padding:20px 24px;border-radius:8px 8px 0 0;"><span style="color:#fff;font-size:19px;font-weight:bold;">SNCF Connect</span></div>
            <div style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;padding:30px 24px;">
              <h2 style="font-size:20px;margin:0 0 14px;">Your ticket for 12 October</h2>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;">Hello {{prenom}}, your ticket is confirmed.</p>              <p style="font-size:14px;line-height:1.6;margin:0 0 14px;"><strong>Paris Montparnasse to Rennes</strong><br>Sunday 12 October, departs 14:07, arrives 15:32<br>Coach 12, seat 64 ; booking <strong>KQPZRT</strong></p>              <p style="font-size:13px;line-height:1.6;margin:0;color:#5f6368;">Your ticket is available in the SNCF Connect app.</p>
            </div>
          </div>`
      },
      {
        id: 8,
        senderName: "Google",
        senderEmail: "no-reply@accounts.google.com",
        avatarColor: "#4285f4", avatarLetter: "G",
        subject: "Security tips for your account",
        labels: ["Inbox"],
        date: "Fri, Sep 25, 7:20 AM (3 days ago)", listTime: "7:20 AM",
        snippet: "A few reminders to keep your account safe.",
        unread: true, starred: false, isPhish: false, unsubscribe: false,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;border:1px solid #e0e0e0;border-radius:12px;padding:36px 32px;font-family:'Google Sans',Arial;color:#202124;">
            <h2 style="font-size:20px;font-weight:400;margin:0 0 16px;">Security tips for your account</h2>
            <p style="font-size:14px;line-height:1.7;margin:0 0 12px;">A few reminders to keep your account safe:</p>
            <ul style="font-size:14px;line-height:1.8;color:#3c4043;padding-left:20px;margin:0;">
              <li>Use a different password for every service.</li>
              <li>Turn on two step verification.</li>
              <li>Never share a verification code, with anyone.</li>
            </ul>
          </div>`
      },
      {
        id: 9,
        senderName: "Amazon.co.uk",
        senderEmail: "commande@amazon.fr",
        avatarColor: "#ff9900", avatarLetter: "a",
        subject: "Your parcel has been delivered",
        labels: ["Inbox"],
        date: "Sat, Sep 26, 3:10 PM (2 days ago)", listTime: "3:10 PM",
        snippet: "Your parcel was delivered. We hope it is just what you wanted.",
        unread: true, starred: false, isPhish: false, unsubscribe: true,
        bodyHtml: `
          <div style="max-width:600px;margin:24px auto;font-family:Arial,sans-serif;color:#0f1111;">
            <div style="padding:20px 24px;border-bottom:1px solid #e7e7e7;"><span style="font-size:22px;font-weight:bold;color:#232f3e;">amazon</span><span style="color:#ff9900;font-size:22px;">.co.uk</span></div>
            <div style="border:1px solid #e7e7e7;border-top:none;padding:28px 24px;">
              <h2 style="font-size:19px;margin:0 0 8px;">Your parcel has been delivered</h2>
              <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Hello {{prenom}}, your order was delivered on Saturday 26 September at 15:05.</p>
              <p style="font-size:13px;line-height:1.6;margin:0;color:#565959;">We hope it is just what you wanted.</p>
            </div>
          </div>`
      }
    ]
  }
];
