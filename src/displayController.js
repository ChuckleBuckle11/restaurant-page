function createHeader(id){
    const header = document.createElement(`header`);
    header.setAttribute('id',id);

    const logo = document.createElement('header');




    
    console.log(logo)
    logo.setAttribute('src',"./logo.png");
    logo.setAttribute('alt',"Logo");
    logo.setAttribute('id',"logo");

    header.appendChild(logo)
    return header;

}


function loadPage(){
    const content = document.getElementById(`content`);
    const header = createHeader('header');
    content.appendChild(header);
}

export default loadPage;

