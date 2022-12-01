function addDiv (newDiv, classDiv, newImg, classImg, n, attributImg, newObject){
    newDiv = addElement('div', "", classDiv);
    tagMain.appendChild(newDiv);
    newImg = addElement('img', "", classImg);
    newDiv.appendChild(newImg);
    newImg.src = tImages[n];
    newImg.setAttribute("alt", attributImg);
    addObject (newObject, newDiv);
}

let divLOL = addElement('div',"", "main__divLOL");
tagMain.appendChild(divLOL);

let imgLOL = addElement('img', "", "main__divLOL__img");
divLOL.appendChild(imgLOL);
imgLOL.src = tImages[1];
imgLOL.setAttribute("alt", "logo League of Legends");
addObject(gameLol, divLOL);

addDiv ("main__div__lol","main__div__log__img", 1, "Logo-League of Legends", gameLol);