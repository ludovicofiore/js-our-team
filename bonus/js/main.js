// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe


// richiamo funzione container
const divContainer = document.querySelector(".container");




// creo array con dentro oggetti 
const teamArray = [

    // creo un oggetto per ogni membro del team
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "image": "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "image": "img/angela-caroll-chief-editor.jpg"
    },

    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "image": "img/walter-gordon-office-manager.jpg"
    },

    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "image": "img/angela-lopez-social-media-manager.jpg"
    },
    
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "image": "img/scott-estrada-developer.jpg"
    },

    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "image": "img/barbara-ramos-graphic-designer.jpg"
    },
];

// console.log(teamArray);

// creo ciclo per array
for (let i = 0; i< teamArray.length; i++) {

    let teamElement = teamArray[i];

    // creo elemento per nome
    let teamName = createElementWClass("p", "member");
    // aggiungo contenuto
    teamName.innerHTML = teamElement.name;
    // porto in pagina
    divContainer.append(teamName);

    // creo elemento per ruolo
    let teamRole = createElementWClass("p", "member");
    // aggiungo contenuto
    teamRole.innerHTML = teamElement.role;
    // porto in pagina
    divContainer.append(teamRole);

    // creo elemento per immagine
    let teamImage = createElementWClass("img", "member");
    // aggiungo contenuto
    teamImage.src = teamElement.image
    // porto in pagina
    divContainer.append(teamImage);


}




// FUNZIONI

// funzione per creare elemento html
function createElementWClass (tagName, className) {

    // creo elemento
    const element = document.createElement(tagName);
    // creo classe
    element.classList.add(className);

    return element
}