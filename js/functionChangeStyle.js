export function changeStyleBG(conatinerId) {
    const element = document.getElementById(conatinerId);
    element.style.background = "none";
    element.style.backgroundColor = "transparent";
    element.style.backgroundImage = "none";

}

export function selectAvatar(allAvatars) {
    allAvatars.forEach(avatar => {
        avatar.addEventListener("click", function () {
            // Réinitialise le style de toutes les images
            allAvatars.forEach(otherAvatar => {
                otherAvatar.style.border = '';
                otherAvatar.style.filter = '';
            });

            // Applique le style cliqué uniquement à l'image sélectionnée
            avatar.style.border = '4px solid #9AAB5C';
            //avatar.style.filter = 'brightness(0.8)';
        });
    });
}

export function selectButton(allButtons) {
    allButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Réinitialise le style de tous les boutons
            allButtons.forEach(otherButton => {
                otherButton.style.backgroundColor = '';  // Réinitialiser la couleur de fond
                          // Réinitialiser la couleur du texte
            });

            // Applique un style cliqué uniquement au bouton sélectionné
            button.style.backgroundColor = '#9AAB5C';  // Exemple de fond
           
        });
    });
}
