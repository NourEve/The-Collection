const gameLol = {
    name : "League of Legends",
    date : "2009",
    developer : "Riot Games",
    publisher : "Riot Games",
    genres : "Genres : online battle arena, multiplayer, action-RPG",
    platform : "Platforms : computer, smartphone, tablet",
    presentation : "League of Legends est un jeu de stratégie en équipe dans lequel deux équipes de cinq champions s'affrontent pour détruire la base adverse. Faites votre choix parmi plus de 140 champions disponibles, partez au combat, éliminez vos adversaires avec adresse et abattez les tourelles ennemies pour décrocher la victoire.",
};
const gameSubnautica = {
    name : "Subnautica",
    date : "2009",
    developer : "Riot Games",
    publisher : "Riot Games",
    genres : ["online battle arena, multiplayer, action-RPG"],
    platform : ["computer, smartphone, tablet"],
    presentation : "League of Legends est un jeu de stratégie en équipe dans lequel deux équipes de cinq champions s'affrontent pour détruire la base adverse. Faites votre choix parmi plus de 140 champions disponibles, partez au combat, éliminez vos adversaires avec adresse et abattez les tourelles ennemies pour décrocher la victoire.",
};

//array with all images of the site
let tImages = [ 'assets/images/LogoSample_ByTailorBrands.png', 'assets/images/Client_Blog_Header_v2.jpeg'];

//function creating text elements
function addElement (balise, content, Newclass){
    let newTxt = document.createTextNode(content);
    let newElem = document.createElement(balise);
    newElem.appendChild(newTxt);
    newElem.setAttribute("class", Newclass);
    return newElem;
}
//function creating div
function addDiv (classDiv, classImg, n, attributImg, newObject){
    newDiv = addElement('div', "", classDiv);
    tagMain.appendChild(newDiv);
    newImg = addElement('img', "", classImg);
    newDiv.appendChild(newImg);
    newImg.src = tImages[n];
    newImg.setAttribute("alt", attributImg);
    addObject (newObject, newDiv);
}

//function creating card
function addObject (myObject, allDiv){
    let F1PropertyValue = myObject[Object.keys(myObject)[0]]; 
    let gameName = addElement ("h3", F1PropertyValue, "main__h3");
    allDiv.appendChild(gameName);

    let F2PropertyValue = myObject[Object.keys(myObject)[1]]; 
    let date = addElement ("h4", F2PropertyValue, "main__h4");
    allDiv.appendChild(date);

    let F3PropertyValue = myObject[Object.keys(myObject)[2]]; 
    let developer = addElement ("h4", F3PropertyValue, "main__h4");
    allDiv.appendChild(developer);

    let F4PropertyValue = myObject[Object.keys(myObject)[3]]; 
    let publisher = addElement ("h4", F4PropertyValue, "main__h4");
    allDiv.appendChild(publisher); 

    let F5PropertyValue = myObject[Object.keys(myObject)[4]]; 
    let genres = addElement ("span", F5PropertyValue, "main__span");
    allDiv.appendChild(genres);

    let F6PropertyValue = myObject[Object.keys(myObject)[5]]; 
    let platform = addElement ("span", F6PropertyValue, "main__span");
    allDiv.appendChild(platform);

    let F7PropertyValue = myObject[Object.keys(myObject)[6]]; 
    let presentation = addElement ("p", F7PropertyValue, "main__p");
    allDiv.appendChild(presentation);
}

//Creation of the header, the main and the footer
let tagBody = document.getElementsByTagName("body")[0];
let tagHeader = addElement('header', "", "header");
tagBody.appendChild(tagHeader);
let tagMain = addElement('main', "", "main");
tagBody.appendChild(tagMain);
let tagFooter = addElement('footer', "", "footer");
tagBody.appendChild(tagFooter);

//Creation of header : h1, img, h2(slogan)
//h1 - title
let h1Header = addElement('h1', "GameSens", "header__h1");
tagHeader.appendChild(h1Header);
//img - logo
let imgHeader = addElement('img',"","header__img");
tagHeader.appendChild(imgHeader);
imgHeader.src = tImages[0];
imgHeader.setAttribute("alt", "logo GameSense");
//h2 - slogan
let sloganHeader = addElement('h2', "The game library that makes sens", "header__slogan");
tagHeader.appendChild(sloganHeader);

//Creation of main : one 'div' for each game

//Creation of div
addDiv ("main__div__lol","main__div__lol__img", 1, "Logo-League of Legends", gameLol);
