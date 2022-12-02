//Collection of objects
const gameLol = {
    name : "League of Legends",
    date : "2009",
    developer : "Riot Games",
    publisher : "",
    genres : "Genres : online battle arena, multiplayer, action-RPG",
    presentation : "League of Legends is a team-based strategy game in which two teams of five champions compete to destroy the opposing base. Choose from more than 140 champions, go into battle, eliminate your opponents with skill and shoot down enemy turrets to achieve victory.",
};
const gameSubnautica = {
    name : "Subnautica",
    date : "2018",
    developer : "Unknown Worlds Entertainment",
    publisher : "",
    genres : "Genres : adventure, independent, survival",
    presentation : " Descend into the depths of an alien underwater world full of wonders and perils. Design equipment, pilot submarines, terraform a voxel terrain, and adapt to the wilderness to explore the world, all while trying to survive.",
};
const gameTotalwar = {
    name : " Total War: WARHAMMER",
    date : "2022",
    developer : "CREATIVE ASSEMBLY",
    publisher : " SEGA",
    genres : "Genres : real-time strategy, turn-based strategy, wargame",
    presentation : " The cataclysmic conclusion to the Total War: WARHAMMER trilogy has arrived. Join forces and enter the Realm of Chaos, a dimension of mind-bending horror where the fate of the entire world will be decided. Can you triumph over your demons... or command them?",
};
const gameDragonage = {
    name : " Dragon Age™ Inquisition",
    date : "2014",
    developer : "BioWare",
    publisher : "Electronic Arts",
    genres : "Genres : action, adventure, RPG, strategy",
    presentation : " When the skies are torn apart and chaos ensues, the world needs heroes: you, the inquisitor. Thedas is a land of conflict. Factions clash unceasingly as an unprecedented demonic invasion sweeps through the land. What about you? You and your group of champions are the only ones who can prevent the catastrophe. You must take the lead... or fail.",
};
const gameThewitcher = {
    name : "The Witcher® 3: Wild Hunt",
    date : "2015",
    developer : "CD PROJEKT RED",
    publisher : "",
    genres : "Genres : action-RPG",
    presentation : "In The Witcher, you play as Geralt de Riv, a professional monster hunter tasked with finding the child of prophecy in a vast open world filled with trading cities, pirate islands, dangerous mountain passes, and forgotten caves to explore.",
};
const gameGenshin = {
    name : "Genshin Impact",
    date : "2020",
    developer : "miHoYo",
    publisher : "",
    genres : "Genres : action-RPG",
    presentation : "In a fantasy world called Teyvat, a sister and brother find themselves separated by an unknown goddess. Begin your adventure as a Traveler or Traveleress whose origin is unknown, discovering the history of this new world. During the course of the adventure, you will have the opportunity to control several characters, each with a unique personality and different elemental abilities.",
};
const gameSkyrim = {
    name : "The Elder Scrolls V",
    date : "2016",
    developer : "Bethesda Game Studios",
    publisher : "",
    genres : "Genres : action-RPG",
    presentation : "Winner of over 200 Game of the Year awards! Skyrim Special Edition breathes new life into this epic adventure with great detail. The Special Edition includes the popular game and additional content, with remastered graphics and effects, volumetric god rays, dynamic depth of field, reflections and more.",
};
const gameAgeof = {
    name : "Age of Empires II",
    date : "2019",
    developer : "Forgotten Empires",
    publisher : "Xbox Game Studios",
    genres : "Genres : strategy",
    presentation : "Age of Empires II: Definitive Edition celebrates the 20th anniversary of one of the world's most popular strategy game franchises. Experience the original campaigns and most popular expansions like never before, and enjoy an enhanced experience with over 200 hours of gameplay and 1,000 years of human history.",
};
const gameThesims = {
    name : "The Sims 4",
    date : "2014",
    developer : "Maxis",
    publisher : "Electronic Arts",
    genres : "Genres : life simulation",
    presentation : "Unleash your imagination and create a unique Sims world that's uniquely yours. Choose how your Sims look, act, and feel, then decide how they'll live their lives. Design and build incredible homes for each family, then decorate them with your favorite furniture and objects.  Immerse yourself in this extraordinary game where the possibilities are endless.",
};
const gameAssassin = {
    name : "Assassin's Creed Valhalla",
    date : "2020",
    developer : "Ubisoft",
    publisher : "",
    genres : "Genres : action-adventure, RPG",
    presentation : "Play as Eivor, a legendary Viking on a quest for glory. Lead epic attacks against Saxon troops and fortresses. Wield two formidable weapons simultaneously and experience the visceral Viking style of combat. Shape the progression of your character and your colony with every choice you make. Explore an open world set in the Dark Ages, from the shores of Norway to the kingdoms of England.",
};


//array with all images of the site
let tImages = [ 'assets/images/LogoSample_ByTailorBrands.png', 'assets/images/Lol-logo.jpeg', 'assets/images/subnautica-logo.png', 'assets/images/TotalWar-logo.jpeg', 'assets/images/DragonAge-logo.png', 'assets/images/TheWitcher-logo.png', 'assets/images/Genshin-logo.jpeg', 'assets/images/Skyrim-logo.png', 'assets/images/AgeOf-logo.jpeg', 'assets/images/Sims-logo.jpeg', 'assets/images/Assassin-logo.jpeg'];

//function creating text elements
function addElement (balise, content, Newclass){
    let newTxt = document.createTextNode(content);
    let newElem = document.createElement(balise);
    newElem.appendChild(newTxt);
    newElem.setAttribute("class", Newclass);
    return newElem;
}
//function creating div
function addDiv (classDiv1, classImg, n, attributImg, newObject){
    newDiv1 = addElement('div', "", classDiv1);
    tagMain.appendChild(newDiv1);
    newImg = addElement('img', "", classImg);
    newDiv1.appendChild(newImg);
    newImg.src = tImages[n];
    newImg.setAttribute("alt", attributImg);
    newDiv2 = addElement('div', "", "main__divAll__card");
    newDiv1.appendChild(newDiv2);
    addObject (newObject, newDiv2);
}
//function creating card
function addObject (myObject, allDiv){
    let F1PropertyValue = myObject[Object.keys(myObject)[0]]; 
    let gameName = addElement ("h3", F1PropertyValue, "main__divAll__h3");
    allDiv.appendChild(gameName);

    let F2PropertyValue = myObject[Object.keys(myObject)[1]]; 
    let date = addElement ("h4", F2PropertyValue, "main__divAll__h4__date");
    allDiv.appendChild(date);

    let F3PropertyValue = myObject[Object.keys(myObject)[2]]; 
    let developer = addElement ("h4", F3PropertyValue, "main__divAll__h4__dev");
    allDiv.appendChild(developer);

    let F4PropertyValue = myObject[Object.keys(myObject)[3]]; 
    let publisher = addElement ("h4", F4PropertyValue, "main__divAll__h4__publi");
    allDiv.appendChild(publisher); 

    let F5PropertyValue = myObject[Object.keys(myObject)[4]]; 
    let genres = addElement ("span", F5PropertyValue, "main__divAll__span");
    allDiv.appendChild(genres);

    let F6PropertyValue = myObject[Object.keys(myObject)[5]]; 
    let presentation = addElement ("p", F6PropertyValue, "main__divAll__p");
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
//Creation of divLOL
addDiv ("main__divlol--bg", "main__divAll__img", 1, "Logo-League of Legends", gameLol);
document.querySelector(".main__divlol--bg").classList.add("main__divAll");
//Creation of divSubnautica
addDiv ("main__divSubnautica--bg", "main__divAll__img", 2, "Picture of Subnautica", gameSubnautica);
document.querySelector(".main__divSubnautica--bg").classList.add("main__divAll");
//Creation of divTotalWar
addDiv ("main__divTotalWar--bg", "main__divAll__img", 3, "Logo of TotalWar", gameTotalwar);
document.querySelector(".main__divTotalWar--bg").classList.add("main__divAll");
//Creation of divDragonAge
addDiv ("main__divDragonAge--bg", "main__divAll__img", 4, "Logo of Dragon Age", gameDragonage);
document.querySelector(".main__divDragonAge--bg").classList.add("main__divAll");
//Creation of divTheWitcher
addDiv ("main__divTheWitcher--bg", "main__divAll__img", 5, "Logo of The Witcher 3", gameThewitcher);
document.querySelector(".main__divTheWitcher--bg").classList.add("main__divAll");
//Creation of divGenshin
addDiv ("main__divGenshin--bg", "main__divAll__img", 6, "Logo of Genshin Impact", gameGenshin);
document.querySelector(".main__divGenshin--bg").classList.add("main__divAll");
//Creation of divSkyrim
addDiv ("main__divSkyrim--bg", "main__divAll__img", 7, "Logo of Skyrim", gameSkyrim);
document.querySelector(".main__divSkyrim--bg").classList.add("main__divAll");
//Creation of divAgeOf
addDiv ("main__divAgeOf--bg", "main__divAll__img", 8, "Logo of Age of empires", gameAgeof);
document.querySelector(".main__divAgeOf--bg").classList.add("main__divAll");
//Creation of divTheSims
addDiv ("main__divTheSims--bg", "main__divAll__img", 9, "Logo of The Sims", gameThesims);
document.querySelector(".main__divTheSims--bg").classList.add("main__divAll");
//Creation of divAssassin
addDiv ("main__divAssassin--bg", "main__divAll__img", 10, "Logo of Assassin's Creed Valhalla", gameAssassin);
document.querySelector(".main__divAssassin--bg").classList.add("main__divAll");
