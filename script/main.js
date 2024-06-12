document.getElementById('add-rectangle-btn').addEventListener('click', function() {
    // Créer un nouveau div pour le rectangle
    const newRectangle = document.createElement('div');
    newRectangle.classList.add('rectangle');
    
    // Créer un bouton pour ajouter une nouvelle ligne
    const addLineBtn = document.createElement('button');
    addLineBtn.textContent = 'Ajouter une ligne';
    addLineBtn.classList.add('add-line-btn');
    
    // Créer un élément pour afficher le pourcentage de checkboxes cochées
    const percentageDisplay = document.createElement('span');
    percentageDisplay.textContent = '0% cochées';
    percentageDisplay.style.marginLeft = '10px';
    
    // Fonction pour mettre à jour le pourcentage de checkboxes cochées
    function updatePercentage() {
        const checkboxes = newRectangle.querySelectorAll('input[type="checkbox"]');
        const checkedCheckboxes = newRectangle.querySelectorAll('input[type="checkbox"]:checked');
        const percentage = checkboxes.length === 0 ? 0 : (checkedCheckboxes.length / checkboxes.length) * 100;
        percentageDisplay.textContent = `${percentage.toFixed(0)}% cochées`;
    }
    
    // Ajouter un événement de clic au bouton pour ajouter une nouvelle ligne
    addLineBtn.addEventListener('click', function(event) {
        // Empêcher la propagation du clic au rectangle
        event.stopPropagation();
        
        // Demander à l'utilisateur de saisir le texte
        const text = prompt("Entrez le texte à afficher dans la nouvelle ligne:");
        
        // Créer une nouvelle ligne
        const newLine = document.createElement('div');
        newLine.classList.add('line');
        
        // Créer une checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Ajouter un événement de changement à la checkbox pour mettre à jour le pourcentage
        checkbox.addEventListener('change', updatePercentage);

        // Créer un élément de texte
        const textNode = document.createElement('span');
        textNode.textContent = text;
        textNode.addEventListener('click', function(event) {
            // Empêcher la propagation du clic à la ligne
            event.stopPropagation();
            
            // Demander à l'utilisateur de mettre à jour le texte
            const updatedText = prompt("Mettez à jour le texte:", textNode.textContent);
            textNode.textContent = updatedText;
        });

        // Ajouter la checkbox et le texte à la nouvelle ligne
        newLine.appendChild(checkbox);
        newLine.appendChild(textNode);
        
        // Ajouter la nouvelle ligne au rectangle
        newRectangle.appendChild(newLine);

        // Mettre à jour le pourcentage après l'ajout d'une nouvelle ligne
        updatePercentage();
    });
    
    // Créer un bouton pour supprimer le rectangle
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Supprimer la liste';
    deleteBtn.classList.add('delete-btn');
    
    // Ajouter un événement de clic au bouton pour supprimer le rectangle
    deleteBtn.addEventListener('click', function(event) {
        // Empêcher la propagation du clic au rectangle
        event.stopPropagation();
        
        // Supprimer le rectangle
        newRectangle.remove();
    });
    
    // Ajouter les boutons et le pourcentage au rectangle
    newRectangle.appendChild(addLineBtn);
    newRectangle.appendChild(percentageDisplay);
    newRectangle.appendChild(deleteBtn);
    
    // Ajouter le nouveau rectangle au conteneur
    document.getElementById('rectangle-container').appendChild(newRectangle);
});