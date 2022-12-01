const gameLol = {
    name : "League of Legends",
    date : "2009",
    developer : "Riot Games",
    publisher : "Riot Games",
    genres : "Genres : online battle arena, multiplayer, action-RPG",
    platform : "Platform: computer, smartphone, tablet",
    Résumé : "League of Legends est un jeu de stratégie en équipe dans lequel deux équipes de cinq champions s'affrontent pour détruire la base adverse. Faites votre choix parmi plus de 140 champions disponibles, partez au combat, éliminez vos adversaires avec adresse et abattez les tourelles ennemies pour décrocher la victoire.",
}

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

//Creation of the header, the main and the footer
let tagBody = document.getElementsByTagName("body")[0];
let tagHeader = document.createElement('header');
tagBody.appendChild(tagHeader);
let tagMain = document.createElement('main');
tagBody.appendChild(tagMain);
let tagFooter = document.createElement('footer');
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
let divLOL = addElement('div',"","main__divLOL");
tagMain.appendChild(divLOL);

//Creation of divLOL
let imgLOL = addElement('img', "", "main__divLOL__img");
divLOL.appendChild(imgLOL);
imgLOL.src = tImages [1];
imgLOL.setAttribute("alt", "logo League of Legends");
