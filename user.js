// ===========================================================================
//  Identité du joueur : stockée UNIQUEMENT dans un cookie du navigateur.
//  Aucune donnée n'est envoyée à un serveur : le jeu est 100 % statique.
// ===========================================================================

function setUser(u){
  const val = encodeURIComponent(JSON.stringify(u));
  // cookie local, expire après 1 an, jamais transmis à un tiers
  document.cookie = 'phish_user=' + val + ';path=/;max-age=' + (60*60*24*365) + ';SameSite=Strict';
}
function getUser(){
  const m = document.cookie.match(/(?:^|;\s*)phish_user=([^;]*)/);
  if(!m) return null;
  try{ return JSON.parse(decodeURIComponent(m[1])); }catch(e){ return null; }
}
function clearUser(){
  document.cookie = 'phish_user=;path=/;max-age=0;SameSite=Strict';
}

// ---------- Préférence de taille d'affichage (cookie local) ----------
function setSize(s){
  document.cookie = 'phish_size=' + s + ';path=/;max-age=' + (60*60*24*365) + ';SameSite=Strict';
  applySize();
}
function getSize(){
  const m = document.cookie.match(/(?:^|;\s*)phish_size=([^;]*)/);
  return m ? m[1] : null;
}
function applySize(){
  document.documentElement.classList.toggle('size-large', getSize() === 'large');
}
applySize();  // appliqué dès le chargement du script

function slug(s){
  return (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')
    .replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
}

// Tokens injectés dans les e-mails. Valeurs de repli si aucun cookie.
function userTokens(u){
  u = u || {};
  const prenom = (u.prenom || 'Alex').trim();
  const nom = (u.nom || 'Martin').trim();
  const entreprise = (u.entreprise || 'Contoso').trim();
  const email = slug(prenom) + '.' + slug(nom) + '@' + (slug(entreprise) || 'entreprise') + '.com';
  return {
    prenom, nom, entreprise, email,
    initiale: (prenom[0] || 'A').toUpperCase(),
    fullName: prenom + ' ' + nom
  };
}

// Remplace {{prenom}} {{nom}} {{entreprise}} {{email}} {{initiale}} dans une chaîne.
function personalize(str, t){
  if(str == null) return str;
  t = t || userTokens(getUser());
  return String(str)
    .replace(/\{\{\s*prenom\s*\}\}/g, t.prenom)
    .replace(/\{\{\s*nom\s*\}\}/g, t.nom)
    .replace(/\{\{\s*entreprise\s*\}\}/g, t.entreprise)
    .replace(/\{\{\s*email\s*\}\}/g, t.email)
    .replace(/\{\{\s*initiale\s*\}\}/g, t.initiale)
    .replace(/\{\{\s*fullName\s*\}\}/g, t.fullName);
}
