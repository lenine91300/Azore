const reponse = await fetch('donnee.json');
const donneeRecu = await reponse.json();

// Affichage si Clique sur bouton BTS SIO

function afficherBtsSIO(){
  
  const titrePrincipal = document.getElementById('titrePrincipal');
  titrePrincipal.innerText=donneeRecu[4].titrePrincipal;


  const titrePresentationFiliere= document.getElementById('titreFiliere');
  titrePresentationFiliere.innerText=donneeRecu[4].titrePresentationFiliere;

  const textePresentationFiliere = document.getElementById('textPresentation');
  textePresentationFiliere.innerText = donneeRecu[4].textePresentationFiliere;
  

  const titreSpecialisations = document.getElementById('titreSpecialisations');
  titreSpecialisations.innerText=donneeRecu[4].titreSpecialisations;
  
  const titreCompetences = document.getElementById('titreCompetences');
  titreCompetences.innerText = donneeRecu[4].titreCompetences;

  const titreDebouchesProfessionnels = document.getElementById('titreDebouchesProfessionnels');
  titreDebouchesProfessionnels.innerText=donneeRecu[4].titreDebouchesProfessionnels;

  const titrePoursuiteEtudes = document.getElementById('titrePoursuiteEtudes');
  titrePoursuiteEtudes.innerText=donneeRecu[4].titrePoursuiteEtudes;


  const optionPopose = document.getElementById('optionPoposeList');
  optionPopose.innerHTML = ''; // Réinitialiser le contenu de la liste
  
  donneeRecu[7].optionPropose.forEach(function(afficher){
    const afficherLi = document.createElement('li');
    afficherLi.innerText = afficher;
    optionPopose.appendChild(afficherLi);
  });
  

  const competanceList = document.getElementById('competanceList');
  competanceList.innerHTML='';
  const competences = donneeRecu[5].competencesBtsSIO;
  
  competences.forEach(function(competence) {
    const li = document.createElement('li');
    li.innerText = competence;
    competanceList.appendChild(li);
  });
  
  const deboucheProfessionnelList = document.getElementById("deboucheProfessionnelList")
  deboucheProfessionnelList.innerHTML='';
  const deboucheProfessionnel = donneeRecu[6].deboucheProfessionnel;
  
  deboucheProfessionnel.forEach(function(debouche){
    const liste = document.createElement('li');
    liste.innerText = debouche;
    deboucheProfessionnelList.appendChild(liste);
  });

  // Afficher les liste des établissements 

  const ulElement = document.createElement("ul");
  const nomEtablissement = donneeRecu[32].etablissementBtsSio;
  console.log(nomEtablissement);
  nomEtablissement.forEach(function(nomEtablissement){
    const li = document.createElement("li");
    li.innerText = nomEtablissement.nom;
    ulElement.appendChild(li);
  });

  const affichageListeEtablissment = document.getElementById("Etablissement");
  affichageListeEtablissment.appendChild(ulElement);
  
}
const boutonBtsSIO = document.getElementById('btnSIO');
boutonBtsSIO.addEventListener('click',afficherBtsSIO)
// ----------------------BTS


// Affichage si Clique sur bouton BTS SN

function afficherBtsSN(){

  const titrePrincipal = document.getElementById('titrePrincipal');
  titrePrincipal.innerText=donneeRecu[0].titrePrincipal;

  const titrePresentationFiliere= document.getElementById('titreFiliere');
  titrePresentationFiliere.innerText=donneeRecu[0].titrePresentationFiliere;

  const textePresentationFiliere = document.getElementById('textPresentation');
  textePresentationFiliere.innerText = donneeRecu[0].textePresentationFiliere;
  

  const titreSpecialisations = document.getElementById('titreSpecialisations');
  titreSpecialisations.innerText=donneeRecu[0].titreSpecialisations;
  
  const titreCompetences = document.getElementById('titreCompetences');
  titreCompetences.innerText = donneeRecu[0].titreCompetences;

  const titreDebouchesProfessionnels = document.getElementById('titreDebouchesProfessionnels');
  titreDebouchesProfessionnels.innerText=donneeRecu[0].titreDebouchesProfessionnels;

  const titrePoursuiteEtudes = document.getElementById('titrePoursuiteEtudes');
  titrePoursuiteEtudes.innerText=donneeRecu[0].titrePoursuiteEtudes;

  const optionPopose = document.getElementById('optionPoposeList');
  optionPopose.innerHTML = ''; // Réinitialiser le contenu de la liste
  
  donneeRecu[3].optionPropose.forEach(function(afficher){
    const afficherLi = document.createElement('li');
    afficherLi.innerText = afficher;
    optionPopose.appendChild(afficherLi);
  });
  

  const competanceList = document.getElementById('competanceList');
  competanceList.innerHTML='';
  const competences = donneeRecu[1].competencesBtsSn;
  
  competences.forEach(function(competence) {
    const li = document.createElement('li');
    li.innerText = competence;
    competanceList.appendChild(li);
  });
  
  const deboucheProfessionnelList = document.getElementById("deboucheProfessionnelList")
  deboucheProfessionnelList.innerHTML='';
  const deboucheProfessionnel = donneeRecu[2].deboucheProfessionnel;
  
  deboucheProfessionnel.forEach(function(debouche){
    const liste = document.createElement('li');
    liste.innerText = debouche;
    deboucheProfessionnelList.appendChild(liste);
  });
  
  const textePoursuiteEtude = document.getElementById('textePoursuiteEtude');
  textePoursuiteEtude.innerText=donneeRecu[0].textePoursuiteEtude;
}

const boutonBtsSN = document.getElementById('btnSN');
boutonBtsSN.addEventListener('click',afficherBtsSN)

// Affichage si Clique sur bouton BTS FED
function afficherBtsFED(){
  
  const titrePrincipal = document.getElementById('titrePrincipal');
  titrePrincipal.innerText=donneeRecu[8].titrePrincipal;


  const titrePresentationFiliere= document.getElementById('titreFiliere');
  titrePresentationFiliere.innerText=donneeRecu[8].titrePresentationFiliere;

  const textePresentationFiliere = document.getElementById('textPresentation');
  textePresentationFiliere.innerText = donneeRecu[8].textePresentationFiliere;
  

  const titreSpecialisations = document.getElementById('titreSpecialisations');
  titreSpecialisations.innerText=donneeRecu[8].titreSpecialisations;
  
  const titreCompetences = document.getElementById('titreCompetences');
  titreCompetences.innerText = donneeRecu[8].titreCompetences;

  const titreDebouchesProfessionnels = document.getElementById('titreDebouchesProfessionnels');
  titreDebouchesProfessionnels.innerText=donneeRecu[8].titreDebouchesProfessionnels;

  const titrePoursuiteEtudes = document.getElementById('titrePoursuiteEtudes');
  titrePoursuiteEtudes.innerText=donneeRecu[8].titrePoursuiteEtudes;


  const optionPopose = document.getElementById('optionPoposeList');
  optionPopose.innerHTML = ''; // Réinitialiser le contenu de la liste
  
  donneeRecu[11].optionPropose.forEach(function(afficher){
    const afficherLi = document.createElement('li');
    afficherLi.innerText = afficher;
    optionPopose.appendChild(afficherLi);
  });
  

  const competanceList = document.getElementById('competanceList');
  competanceList.innerHTML='';
  const competences = donneeRecu[9].competencesBtsFED;
  
  competences.forEach(function(competence) {
    const li = document.createElement('li');
    li.innerText = competence;
    competanceList.appendChild(li);
  });
  
  const deboucheProfessionnelList = document.getElementById("deboucheProfessionnelList")
  deboucheProfessionnelList.innerHTML='';
  const deboucheProfessionnel = donneeRecu[10].deboucheProfessionnel;
  
  deboucheProfessionnel.forEach(function(debouche){
    const liste = document.createElement('li');
    liste.innerText = debouche;
    deboucheProfessionnelList.appendChild(liste);
  });
  
  const textePoursuiteEtude = document.getElementById('textePoursuiteEtude');
  textePoursuiteEtude.innerText=donneeRecu[8].textePoursuiteEtude;
}

const boutonBtsFED = document.getElementById('btnFED');
boutonBtsFED.addEventListener('click',afficherBtsFED)

// ------------------------------------------------------------

// Affichage si Clique sur bouton BTS AudioVisuel
function afficherBtsAudioVisuel(){
  
  const titrePrincipal = document.getElementById('titrePrincipal');
  titrePrincipal.innerText=donneeRecu[12].titrePrincipal;


  const titrePresentationFiliere= document.getElementById('titreFiliere');
  titrePresentationFiliere.innerText=donneeRecu[12].titrePresentationFiliere;

  const textePresentationFiliere = document.getElementById('textPresentation');
  textePresentationFiliere.innerText = donneeRecu[12].textePresentationFiliere;
  

  const titreSpecialisations = document.getElementById('titreSpecialisations');
  titreSpecialisations.innerText=donneeRecu[12].titreSpecialisations;
  
  const titreCompetences = document.getElementById('titreCompetences');
  titreCompetences.innerText = donneeRecu[12].titreCompetences;

  const titreDebouchesProfessionnels = document.getElementById('titreDebouchesProfessionnels');
  titreDebouchesProfessionnels.innerText=donneeRecu[12].titreDebouchesProfessionnels;

  const titrePoursuiteEtudes = document.getElementById('titrePoursuiteEtudes');
  titrePoursuiteEtudes.innerText=donneeRecu[12].titrePoursuiteEtudes;


  const optionPopose = document.getElementById('optionPoposeList');
  optionPopose.innerHTML = ''; // Réinitialiser le contenu de la liste
  
  donneeRecu[15].optionPropose.forEach(function(afficher){
    const afficherLi = document.createElement('li');
    afficherLi.innerText = afficher;
    optionPopose.appendChild(afficherLi);
  });
  

  const competanceList = document.getElementById('competanceList');
  competanceList.innerHTML='';
  const competences = donneeRecu[13].competencesBtsAudiovisuel;
  
  competences.forEach(function(competence) {
    const li = document.createElement('li');
    li.innerText = competence;
    competanceList.appendChild(li);
  });
  
  const deboucheProfessionnelList = document.getElementById("deboucheProfessionnelList")
  deboucheProfessionnelList.innerHTML='';
  const deboucheProfessionnel = donneeRecu[14].deboucheProfessionnel;
  
  deboucheProfessionnel.forEach(function(debouche){
    const liste = document.createElement('li');
    liste.innerText = debouche;
    deboucheProfessionnelList.appendChild(liste);
  });
  
  const textePoursuiteEtude = document.getElementById('textePoursuiteEtude');
  textePoursuiteEtude.innerText=donneeRecu[12].textePoursuiteEtude;
}

const boutonBtsAudiovisuel = document.getElementById('btnMetierAudiovisuelle');
boutonBtsAudiovisuel.addEventListener('click',afficherBtsAudioVisuel)

// Affichage si Clique sur bouton BTS AudioVisuel
function afficherBtsSystemePhotonique(){
  
  const titrePrincipal = document.getElementById('titrePrincipal');
  titrePrincipal.innerText=donneeRecu[16].titrePrincipal;


  const titrePresentationFiliere= document.getElementById('titreFiliere');
  titrePresentationFiliere.innerText=donneeRecu[16].titrePresentationFiliere;

  const textePresentationFiliere = document.getElementById('textPresentation');
  textePresentationFiliere.innerText = donneeRecu[16].textePresentationFiliere;
  

  const titreSpecialisations = document.getElementById('titreSpecialisations');
  titreSpecialisations.innerText=donneeRecu[16].titreSpecialisations;
  
  const titreCompetences = document.getElementById('titreCompetences');
  titreCompetences.innerText = donneeRecu[16].titreCompetences;

  const titreDebouchesProfessionnels = document.getElementById('titreDebouchesProfessionnels');
  titreDebouchesProfessionnels.innerText=donneeRecu[16].titreDebouchesProfessionne;

  const titrePoursuiteEtudes = document.getElementById('titrePoursuiteEtudes');
  titrePoursuiteEtudes.innerText=donneeRecu[16].titrePoursuiteEtudes;


  const optionPopose = document.getElementById('optionPoposeList');
  optionPopose.innerHTML = ''; // Réinitialiser le contenu de la liste
  
  donneeRecu[19].optionPropose.forEach(function(afficher){
    const afficherLi = document.createElement('li');
    afficherLi.innerText = afficher;
    optionPopose.appendChild(afficherLi);
  });
  

  const competanceList = document.getElementById('competanceList');
  competanceList.innerHTML='';
  const competences = donneeRecu[13].competencesBtsAudiovisuel;
  
  competences.forEach(function(competence) {
    const li = document.createElement('li');
    li.innerText = competence;
    competanceList.appendChild(li);
  });
  
  const deboucheProfessionnelList = document.getElementById("deboucheProfessionnelList")
  deboucheProfessionnelList.innerHTML='';
  const deboucheProfessionnel = donneeRecu[18].deboucheProfessionnel;
  
  deboucheProfessionnel.forEach(function(debouche){
    const liste = document.createElement('li');
    liste.innerText = debouche;
    deboucheProfessionnelList.appendChild(liste);
  });
  
  const textePoursuiteEtude = document.getElementById('textePoursuiteEtude');
  textePoursuiteEtude.innerText=donneeRecu[16].textePoursuiteEtude;
}

const boutonBtsSystemePhotonique = document.getElementById('btnSP');
boutonBtsSystemePhotonique.addEventListener('click',afficherBtsSystemePhotonique)

// Affichage si Clique sur bouton BTS ATI
function afficherBtsATI(){
  
  const titrePrincipal = document.getElementById('titrePrincipal');
  titrePrincipal.innerText=donneeRecu[20].titrePrincipal;


  const titrePresentationFiliere= document.getElementById('titreFiliere');
  titrePresentationFiliere.innerText=donneeRecu[20].titrePresentationFiliere;

  const textePresentationFiliere = document.getElementById('textPresentation');
  textePresentationFiliere.innerText = donneeRecu[20].textePresentationFiliere;
  

  const titreSpecialisations = document.getElementById('titreSpecialisations');
  titreSpecialisations.innerText=donneeRecu[20].titreSpecialisations;
  
  const titreCompetences = document.getElementById('titreCompetences');
  titreCompetences.innerText = donneeRecu[20].titreCompetences;

  const titreDebouchesProfessionnels = document.getElementById('titreDebouchesProfessionnels');
  titreDebouchesProfessionnels.innerText=donneeRecu[20].titreDebouchesProfessionnels;

  const titrePoursuiteEtudes = document.getElementById('titrePoursuiteEtudes');
  titrePoursuiteEtudes.innerText=donneeRecu[20].titrePoursuiteEtudes;


  const optionPopose = document.getElementById('optionPoposeList');
  optionPopose.innerHTML = ''; // Réinitialiser le contenu de la liste
  
  donneeRecu[23].optionPropose.forEach(function(afficher){
    const afficherLi = document.createElement('li');
    afficherLi.innerText = afficher;
    optionPopose.appendChild(afficherLi);
  });
  

  const competanceList = document.getElementById('competanceList');
  competanceList.innerHTML='';
  const competences = donneeRecu[21].competencesBtsATI;
  
  competences.forEach(function(competence) {
    const li = document.createElement('li');
    li.innerText = competence;
    competanceList.appendChild(li);
  });
  
  const deboucheProfessionnelList = document.getElementById("deboucheProfessionnelList")
  deboucheProfessionnelList.innerHTML='';
  const deboucheProfessionnel = donneeRecu[22].deboucheProfessionnel;
  
  deboucheProfessionnel.forEach(function(debouche){
    const liste = document.createElement('li');
    liste.innerText = debouche;
    deboucheProfessionnelList.appendChild(liste);
  });
  
  const textePoursuiteEtude = document.getElementById('textePoursuiteEtude');
  textePoursuiteEtude.innerText=donneeRecu[20].textePoursuiteEtude;
}

const boutonBtsATI = document.getElementById('btnATI');
boutonBtsATI.addEventListener('click',afficherBtsATI)

// -----------BUT

// Affichage si Clique sur bouton BTS RT
function afficherBtsRT(){
  
  const titrePrincipal = document.getElementById('titrePrincipal');
  titrePrincipal.innerText=donneeRecu[24].titrePrincipal;


  const titrePresentationFiliere= document.getElementById('titreFiliere');
  titrePresentationFiliere.innerText=donneeRecu[24].titrePresentationFiliere;

  const textePresentationFiliere = document.getElementById('textPresentation');
  textePresentationFiliere.innerText = donneeRecu[24].textePresentationFiliere;
  

  const titreSpecialisations = document.getElementById('titreSpecialisations');
  titreSpecialisations.innerText=donneeRecu[24].titreSpecialisations;
  
  const titreCompetences = document.getElementById('titreCompetences');
  titreCompetences.innerText = donneeRecu[24].titreCompetences;

  const titreDebouchesProfessionnels = document.getElementById('titreDebouchesProfessionnels');
  titreDebouchesProfessionnels.innerText=donneeRecu[24].titreDebouchesProfessionnels;

  const titrePoursuiteEtudes = document.getElementById('titrePoursuiteEtudes');
  titrePoursuiteEtudes.innerText=donneeRecu[24].titrePoursuiteEtudes;


  const optionPopose = document.getElementById('optionPoposeList');
  optionPopose.innerHTML = ''; // Réinitialiser le contenu de la liste
  
  donneeRecu[19].optionPropose.forEach(function(afficher){
    const afficherLi = document.createElement('li');
    afficherLi.innerText = afficher;
    optionPopose.appendChild(afficherLi);
  });
  

  const competanceList = document.getElementById('competanceList');
  competanceList.innerHTML='';
  const competences = donneeRecu[21].competencesBtsATI;
  
  competences.forEach(function(competence) {
    const li = document.createElement('li');
    li.innerText = competence;
    competanceList.appendChild(li);
  });
  
  const deboucheProfessionnelList = document.getElementById("deboucheProfessionnelList")
  deboucheProfessionnelList.innerHTML='';
  const deboucheProfessionnel = donneeRecu[26].deboucheProfessionnel;
  
  deboucheProfessionnel.forEach(function(debouche){
    const liste = document.createElement('li');
    liste.innerText = debouche;
    deboucheProfessionnelList.appendChild(liste);
  });
  
  const textePoursuiteEtude = document.getElementById('textePoursuiteEtude');
  textePoursuiteEtude.innerText=donneeRecu[24].textePoursuiteEtude;
}

const boutonBtsRT = document.getElementById('btsRT');
boutonBtsRT.addEventListener('click',afficherBtsRT)


// Affichage si Clique sur bouton BTS GEII
function afficherBtsGEII(){
  
  const titrePrincipal = document.getElementById('titrePrincipal');
  titrePrincipal.innerText=donneeRecu[28].titrePrincipal;


  const titrePresentationFiliere= document.getElementById('titreFiliere');
  titrePresentationFiliere.innerText=donneeRecu[28].titrePresentationFiliere;

  const textePresentationFiliere = document.getElementById('textPresentation');
  textePresentationFiliere.innerText = donneeRecu[28].textePresentationFiliere;
  

  const titreSpecialisations = document.getElementById('titreSpecialisations');
  titreSpecialisations.innerText=donneeRecu[28].titreSpecialisations;
  
  const titreCompetences = document.getElementById('titreCompetences');
  titreCompetences.innerText = donneeRecu[28].titreCompetences;

  const titreDebouchesProfessionnels = document.getElementById('titreDebouchesProfessionnels');
  titreDebouchesProfessionnels.innerText=donneeRecu[28].titreDebouchesProfessionnels;

  const titrePoursuiteEtudes = document.getElementById('titrePoursuiteEtudes');
  titrePoursuiteEtudes.innerText=donneeRecu[28].titrePoursuiteEtudes;


  const optionPopose = document.getElementById('optionPoposeList');
  optionPopose.innerHTML = ''; // Réinitialiser le contenu de la liste
  
  donneeRecu[27].optionPropose.forEach(function(afficher){
    const afficherLi = document.createElement('li');
    afficherLi.innerText = afficher;
    optionPopose.appendChild(afficherLi);
  });
  

  const competanceList = document.getElementById('competanceList');
  competanceList.innerHTML='';
  const competences = donneeRecu[29].competencesBtsGEII;
  
  competences.forEach(function(competence) {
    const li = document.createElement('li');
    li.innerText = competence;
    competanceList.appendChild(li);
  });
  
  const deboucheProfessionnelList = document.getElementById("deboucheProfessionnelList")
  deboucheProfessionnelList.innerHTML='';
  const deboucheProfessionnel = donneeRecu[30].deboucheProfessionnel;
  
   deboucheProfessionnel.forEach(function(debouche){
    const liste = document.createElement('li');
    liste.innerText = debouche;
    deboucheProfessionnelList.appendChild(liste);
  });
  
  const textePoursuiteEtude = document.getElementById('textePoursuiteEtude');
  textePoursuiteEtude.innerText=donneeRecu[28].textePoursuiteEtude;
}

const boutonBtsGEII = document.getElementById('btnGEII');
boutonBtsGEII.addEventListener('click',afficherBtsGEII)