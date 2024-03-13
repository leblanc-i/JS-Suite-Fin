let item;

// On identifie l'element ensuite on le stock quand on attrape l'element
document.addEventListener("dragstart", (e) => {
  item = e.target;
});

// On se premunis du comportement qui empeche le deplacement
document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

// Quand on relache l'element
document.addEventListener("drop", (e) => {
  if (e.target.getAttribute("data-draggable") == "target") {
    e.preventDefault();
    e.target.appendChild(item);
  }
});

// Et enfin pour eviter d'avoir des bugs on affecte la valeur null à item
document.addEventListener("dragend", () => {
  item = null;
});
