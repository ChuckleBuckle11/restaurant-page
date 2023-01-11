function createHeader(id){
    const header = document.createElement(`header`);
    header.setAttribute('id',id);
    const logo = document.createElement('img');
    logo.setAttribute('src',"./logo.png");
    logo.setAttribute('alt',"Logo");
    logo.setAttribute('id',"logo");

    header.appendChild(logo)
    return header;
}

function createButton(id,class_name,text) {
    const button = document.createElement('button');
    button.classList.add(class_name);
    button.setAttribute('id',id);
    button.textContent = text;
    return button;
}

function createNav(id){
    const nav = document.createElement('nav');
    nav.setAttribute('id',id);

    const homeBtn = createButton('Home','nav-button','Home');
    const menuBtn = createButton('Menu','nav-button','Menu');
    const contactBtn = createButton('Contact','nav-button','Contact');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
}


// creates the Main section of the page
function createMain(id){
    const main = document.createElement('main');
    main.id = id;
    return main;
}

//creates footer
function createFooter(id){
    const footer = document.createElement('footer');
    footer.id = id;


    const footerLeft = document.createElement('div');
    footerLeft.id = "footerLeft";

    const footerText = document.createElement('div');
    footerText.textContent = "Copyrights © 2022 All Rights Reserved by Casamari.";

    const footerLink = document.createElement('a');
    footerLink.text = "Privacy Policy";

    footerLeft.appendChild(footerText);
    footerLeft.appendChild(footerLink);

    const footerRight = document.createElement('div');
    footerRight.id = 'footerRight';
    const facebookSVG = document.createElement('img');
    facebookSVG.setAttribute('src','./facebook.svg');
    facebookSVG.classList.add('svg');
    const instagramSVG = document.createElement('img');
    instagramSVG.setAttribute('src','./instagram.svg');
    instagramSVG.classList.add('svg');
    footerRight.appendChild(facebookSVG);
    footerRight.appendChild(instagramSVG);

    footer.appendChild(footerLeft);
    footer.appendChild(footerRight);
    return footer;
}






function loadPage(){
    const content = document.getElementById(`content`);
    // creates header
    const header = createHeader('header');
    content.appendChild(header);

    // creates nav
    const nav = createNav('nav');
    header.appendChild(nav);

    //creates main
    const main = createMain('main');
    content.appendChild(main);

    //creates footer
    const footer = createFooter('footer');
    content.appendChild(footer);
}

export default loadPage;