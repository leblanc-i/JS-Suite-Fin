const canvas = document.querySelector("#art");
const ctx = canvas.getContext("2d");

// Fonction pour recuperer la position de la souris dans le canvas 
function getMousePos(e) {

    // On se recupere les dimensions de notre rectangle canvas
    const rect = canvas.getBoundingClientRect();

    // Et la fonction va me retourner un tableau avec les valeur exact de la position de la souris 
    return {
        x: e.clientX - rect.left, // on retire la marge à let du rectangle
        y: e.clientY - rect.top, // on retire la marge en haut du rectangle
    }

}

function mouseMove(e) {
    // Lui aussi à besoin de connaitre la position de la souris 
    const mousePos = getMousePos(e);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
}

// Evenement quand on appui sur la souris 
canvas.addEventListener("mousedown", (e) => {
    e.preventDefault();
    
    // Et pour pouvoir dessiné
    const mousePos = getMousePos(e); // Variable contenant la position de la souris
    ctx.beginPath(); // Pour commencer à dessiner;
    ctx.moveTo(mousePos.x, mousePos.y); // à partir de la position de la souris

    // Et là il nous faut un evenement à chaque fois que la souris bouge 
    canvas.addEventListener("mousemove", mouseMove)
});



