// RGA color generator function
function RGAColorGenerator() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

// Event Handler with id selector 
document.getElementById('btn_button').addEventListener('click', function () {
    // set background Color html body 
    document.body.style.backgroundColor = RGAColorGenerator();
    // select h1 tag with text_color id 
    const textColor = document.getElementById('text_color');
    // set textColor with color generator function 
    textColor.style.color = RGAColorGenerator();
    // select button with id btn_button 
    const buttonColor = document.getElementById('btn_button');
    // set button backgroundColor with function 
    buttonColor.style.backgroundColor = RGAColorGenerator();
    // set button textColor with function 
    buttonColor.style.color = RGAColorGenerator();
});