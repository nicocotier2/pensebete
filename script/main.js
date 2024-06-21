// Déclaration d'un tableau vide pour stocker des rectangles 4D (probablement une structure complexe)
let tableau4D = [];

// Initialisation du compteur de rectangles
let nbRectangle = 0;

// Initialisation d'un compteur global pour les identifiants uniques
let globalUniqueId = 0;

// Initialisation de `tableau4D` avec des valeurs prédéfinies
tableau4D = [];

// Ajout d'un écouteur d'événements pour le bouton d'ajout de rectangle
document.getElementById('add-rectangle-btn').addEventListener('click', function() {
    addNewRectangle();
});

// Ajout d'un écouteur d'événements pour le bouton de reconstruction des rectangles
document.getElementById('rebuild-rectangles-btn').addEventListener('click', function() {
    rebuildRectangles();
});

// Fonction permettant d'afficher une seule liste à la fois
function addNewRectangle(rectangleData = { lines: [] }) {
    // Création d'un nouvel élément div pour le rectangle
    const newRectangle = document.createElement('div');
    newRectangle.classList.add('rectangle');
    
    // Attribuer un identifiant unique global au rectangle
    newRectangle.setAttribute('data-unique-id', globalUniqueId);
    let rectangleUniqueId = globalUniqueId;
    globalUniqueId++;
    
    newRectangle.setAttribute('data-index', nbRectangle);
    let rectangleNumber = nbRectangle;
    nbRectangle++;
    tableau4D[rectangleNumber] = [];

    // Création d'un bouton pour ajouter des lignes
    const addLineBtn = document.createElement('button');
    addLineBtn.textContent = 'Ajouter une ligne';
    addLineBtn.classList.add('add-line-btn');

    // Création d'un élément span pour afficher le pourcentage de cases cochées
    const percentageDisplay = document.createElement('span');
    percentageDisplay.textContent = '0% cochées';
    percentageDisplay.style.marginLeft = '10px';

    // Fonction pour mettre à jour le pourcentage de cases cochées
    function updatePercentage() {
        const checkboxes = newRectangle.querySelectorAll('input[type="checkbox"]');
        const checkedCheckboxes = newRectangle.querySelectorAll('input[type="checkbox"]:checked');
        const percentage = checkboxes.length === 0 ? 0 : (checkedCheckboxes.length / checkboxes.length) * 100;
        percentageDisplay.textContent = `${percentage.toFixed(0)}% cochées`;
        // fonction pour mettre à jour la base de données car changement de nombre de checkbox actives
    }

    // Écouteur d'événements pour le bouton d'ajout de ligne
    addLineBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        const text = prompt("Entrez le texte à afficher dans la nouvelle ligne:");

        const newLine = document.createElement('div');
        newLine.classList.add('line');
        newLine.setAttribute('data-line-index', tableau4D[rectangleNumber].length);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', updatePercentage);

        const textNode = document.createElement('span');
        textNode.textContent = text;
        textNode.addEventListener('click', function(event) {
            event.stopPropagation();
            const updatedText = prompt("Mettez à jour le texte:", textNode.textContent);
            textNode.textContent = updatedText;

            const lineIndex = parseInt(newLine.getAttribute('data-line-index'), 10);
            tableau4D[rectangleNumber][lineIndex][2] = updatedText;
            console.log("Tableau 4D mis à jour :", tableau4D);
            // fonction pour mettre à jour la base de données car changement de texte dans la liste
        });

        newLine.appendChild(checkbox);
        newLine.appendChild(textNode);
        newRectangle.appendChild(newLine);

        updatePercentage();
        tableau4D[rectangleNumber].push([rectangleNumber, tableau4D[rectangleNumber].length + 1, text, 0]);
        console.log("Tableau 4D mis à jour :", tableau4D);
    });

    // Création d'un bouton pour supprimer le rectangle
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Supprimer le carré';
    deleteBtn.classList.add('delete-btn');

    // Écouteur d'événements pour le bouton de suppression du rectangle
    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        const rectIndex = parseInt(newRectangle.getAttribute('data-index'), 10);
        console.log(newRectangle.getAttribute('data-unique-id'));
        newRectangle.remove();
        tableau4D.splice(rectIndex, 1);

        document.querySelectorAll('.rectangle').forEach((rect) => {
            const currentIndex = parseInt(rect.getAttribute('data-index'), 10);
            // fonction pour supprimer la table de la base de données, mise à jour du tableau js, rebuildRectangle();
        });

        nbRectangle--;
        console.log("Tableau 4D mis à jour après suppression :", tableau4D);
        //rebuildRectangles();
    });

    newRectangle.appendChild(addLineBtn);
    newRectangle.appendChild(percentageDisplay);
    newRectangle.appendChild(deleteBtn);

    // Ajout des lignes déjà existantes du rectangle (si fournies)
    rectangleData.lines.forEach((line, lineIndex) => {
        const newLine = document.createElement('div');
        newLine.classList.add('line');
        newLine.setAttribute('data-line-index', lineIndex);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = line.checked;
        checkbox.addEventListener('change', updatePercentage);

        const textNode = document.createElement('span');
        textNode.textContent = line.text;
        textNode.addEventListener('click', function(event) {
            event.stopPropagation();
            const updatedText = prompt(+"Mettez à jour le texte:", textNode.textContent);
            textNode.textContent = updatedText;

            tableau4D[rectangleNumber][lineIndex][2] = updatedText;
            console.log("Tableau 4D mis à jour :", tableau4D);
        });

        newLine.appendChild(checkbox);
        newLine.appendChild(textNode);
        newRectangle.appendChild(newLine);

        tableau4D[rectangleNumber].push([rectangleNumber, lineIndex + 1, line.text, line.checked ? 1 : 0]);
    });

    updatePercentage();
    document.getElementById('rectangle-container').appendChild(newRectangle);

    console.log("Tableau 4D mis à jour :", tableau4D);
}

// Fonction pour reconstruire tous les rectangles à partir du tableau4D
function rebuildRectangles() {
    // Vider le conteneur de rectangles
    document.getElementById('rectangle-container').innerHTML = '';
    nbRectangle = 0;

    // Parcourir le tableau et reconstruire chaque rectangle
    tableau4D.forEach(rectangleData => {
        addNewRectangle({ lines: rectangleData.map(line => ({
            text: line[2],
            checked: line[3] === 1
        })) });
    });
}



// fonction pour récuperer tableau4D depuis la bdd
function recupTableau()
{

}

//fonction pour créer une liste dans la bdd
function createListe()
{

}

//fonction pour supprimer une liste dans la bdd
/*function deleteListe()
{
    
}

//fonction pour mettre à jour une liste dans la bdd
function updateListe()
{
     // Convertir le tableau en JSON
     var jsonData = JSON.stringify(tableau4D);
     // Envoi des données avec AJAX
     var xhr = new XMLHttpRequest();
     xhr.open("POST", "updateAjax.php", true);
     xhr.setRequestHeader("Content-Type", "application/json");
     xhr.onreadystatechange = function() {
         if (xhr.readyState === 4 && xhr.status === 200) {
         }
     };
     xhr.send(jsonData);
}*/

function afficherListe()
{
    recuptableau(); // on récupère le tableau4D
}