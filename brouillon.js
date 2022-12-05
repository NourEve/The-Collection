function addDiv (classDiv1, classImg, n, attributImg, newObject){
    newDiv1 = addElement('div', "", classDiv1);
    tagMain.appendChild(newDiv1);
    //document.getElementById(newDiv1).classList.add("main__divAll");
    newDiv2 = addElement('div', "", "main__divAll__card");
    newDiv1.appendChild(newDiv2);
    newImg = addElement('img', "", classImg);
    newDiv2.appendChild(newImg);
    newImg.src = tImages[n];
    newImg.setAttribute("alt", attributImg);
    addObject (newObject, newDiv2);
}