function setActiveButton(button){

    // selects all the nav-buttons
    const buttons = document.querySelectorAll('.nav-button');

    // Enables all buttons 
    buttons.forEach((button)=> {
        button.disabled = false;
    });

    // Disables the button for the current page
    const activebutton = document.getElementById(button);
    console.log(`Disabled button is ${button}`)
    console.log(activebutton);

    activebutton.disabled = true;
}


export default setActiveButton;