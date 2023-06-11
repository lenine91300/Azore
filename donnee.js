const reponse = await fetch('donnee.json');
const donneeRecu = await reponse.json();

const titrePrincipal = document.getElementById('titrePrincipal');
titrePrincipal.innerText=donneeRecu[0].titrePrincipal;

// c bon en haut 

const titrePresentationFiliere= document.getElementById('titreFiliere');
titrePresentationFiliere.innerText=donneeRecu[0].titrePresentationFiliere;

const textePresentationFiliere = document.getElementById('textPresentation');
textePresentationFiliere.innerText = donneeRecu[0].textePresentationFiliere;

// Spécialisation je dois le faire
// const titreOptionBts = document.getElementById('titreOptionBts');
// titreOptionBts.innerText = donneeRecu[0].titreOptionBts;
// Spécialisation je dois le faire

const competanceList = document.getElementById('competanceList');
const competences = donneeRecu[1].competencesBtsSn;

competences.forEach(function(competence) {
  const li = document.createElement('li');
  li.innerText = competence;
  competanceList.appendChild(li);
});

const deboucheProfessionnelList = document.getElementById("deboucheProfessionnelList")
const deboucheProfessionnel = donneeRecu[2].deboucheProfessionnel;


deboucheProfessionnel.forEach(function(debouche){
  const liste = document.createElement('li');
  liste.innerText = debouche;
  deboucheProfessionnelList.appendChild(liste);
});

const textePoursuiteEtude = document.getElementById('textePoursuiteEtude');
textePoursuiteEtude.innerText=donneeRecu[0].textePoursuiteEtude;


// const affichageTitrePrincipal = document.getElementById('titreFiliere');
// affichageTitrePrincipal.appendChild(titrePrincipal); 


