const affiche = () => {
  // Canvas
  const canvas = document.getElementById("canvas");

  // Ensuite on donne à notre canvas un context en deux dimensions(2d)
  const ctx = canvas.getContext("2d");

  // Pour donner une couleur de remplissage on ulilise fillStyle
  ctx.fillStyle = "red";

  // Pour creer un rectangle on ulise fillRect
  ctx.fillRect(10, 20, 50, 50); // les arguments representes la position et la taille;

  ctx.fillStyle = "rgb(10, 200, 20, 0.5)";
  ctx.fillRect(20, 5, 30, 50);

  // Et pour enlever un rectangle de remplissage à un endroit on fait
  ctx.clearRect(15, 20, 25, 15);

  // Et pour faire un rectangle de ligne on fait
  ctx.strokeRect(125, 75, 50, 50);

  // Pour faire des formes triangulaire on peut faire
  ctx.fillStyle = "green"; // Couleur de remplissage
  ctx.beginPath(); // Pour demarrer une forme geometrique
  ctx.moveTo(180, 150); // Pour positionner notre forme geometrique
  ctx.lineTo(100, 75); // Pour faire une ligne de 100 par 75
  ctx.lineTo(100, 150); // Faire une deuxieme ligne de 100 par 150
  ctx.fill(); // Pour pouvoir affiché

  // Et pour finir on peut tout mettre dans une fonction et la jouer au chargement de la page
};

window.addEventListener("load", affiche);

// *************************************
// Try Catch

try {
  // On test un bout de code
  maFonction();
} catch (error) {
  // On attrape l'erreur et on renvoi quelque chose
  console.log(error);
}

// Exemple

// On cree une fonction qui test si on est bien en JSON
function isValidJSON(txt) {
  try {
    // On essai le bout de code 
    JSON.parse(txt);
    // Si ça marche on returne 
    return true;
    // Et si ça ne marche pas on attrape l'erreur 
  } catch (error) {
    // Et on returne 
    return false;
  }
}
console.log(isValidJSON("hdgugfuufef"));

// Autre methode 

try {
    // On test un bout de code
    maFonction();
  } catch (error) {
    // On attrape l'erreur et on la renvoit
    console.log(error);
  } finally {
    // Et quoi qui se passe on affiche le message 
    console.log("On est arriver au bout !");
  }

  // *********************************
  // Throw

  // On test une fonction si le parametre est un nombre
  function isNumber(num) {
    if (isNaN(num)) {
      // lance
      throw "C'est pas un nombre"
      // Si c'est verifier le throw arretera toutes les autres actions qui suit
    } else {
      console.log("C'est un nombre");
    }
  }
//  Et apres on test 
try {
  isNumber("8")
} catch (error) {
  console.log(error);
}

// *****************************************
// Strict Mode 

/* Le use strict doit etre declaré au plus haut de la page
et il permet d'ecrire du JS mieux cadrer qui ne tolere pas tout
et nous affiche beaucoup plus les erreurs */

